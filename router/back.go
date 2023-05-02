package router

import (
	"movie/getter"
	mm "movie/manager"
	"movie/router/MiddleWare"
	"movie/util"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

func back(r *gin.Engine, manager *mm.Manager) {
	// 登录函数处理
	r.POST("/user/login", func(c *gin.Context) {
		account := c.PostForm("account")
		password := c.PostForm("password")
		long := c.PostForm("long") // 获取参数是否要长时间无需登录
		if manager.SessionGet(c.Request, "login") == nil {
			// 验证登录
			if !manager.Login(account, password) {
				c.Status(http.StatusForbidden)
				util.Logger.WithFields(logrus.Fields{
					"account":  account,
					"password": password,
				}).Debug("Someone login failed")
				return
			}
			kv := make(map[interface{}]interface{})
			{
				kv["login"] = true
				kv["account"] = account
			}
			manager.SessionInit(
				c.Writer,
				c.Request,
				long == "true",
				kv,
			) // 进行相关的初始化操作，并且判断是否需要cookie长期有效
		}

		c.Status(http.StatusOK)
	})

	// 获取版本号
	r.GET("/system/version", func(c *gin.Context) {
		c.String(http.StatusOK, util.Version)
	})

	// 路由组定义
	user := r.Group("/user")

	// 路由组中间件，用于鉴权
	user.Use(func(c *gin.Context) {
		err := manager.SessionGet(c.Request, "login")
		if err == nil {
			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}
		c.Next()
	})

	// 路由组逻辑处理
	{
		// 关闭全局采集
		user.GET("/stop", func(_ *gin.Context) {
			manager.GetStop()
			util.Logger.Debug("Stop all collection")
		})

		// 开启全局采集
		user.GET("/start", func(_ *gin.Context) {
			manager.GetStart()
			util.Logger.Debug("Start all collection")
		})

		// 关闭采集
		user.GET("/stop/:id", func(c *gin.Context) {
			idV := c.Param("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				util.Logger.Warn("Stop collection failed, the param idV is not integer")
				return
			}
			manager.GetStopById(uint(id))
			util.Logger.Debug("Stop collection, id:", id)
			c.Status(http.StatusOK)
		})

		// 开启采集
		user.GET("/start/:id", func(c *gin.Context) {
			idV := c.Param("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				util.Logger.Warn("Start collection failed, the param idV is not integer")
				return
			}
			manager.GetStartById(uint(id))
			util.Logger.Debug("Start collection, id:", id)
			c.Status(http.StatusOK)
		})

		//采集指定名字影片（精确）
		user.GET("/start/collecte/:sourceId/:videoName", func(c *gin.Context){
			sourceIdV := c.Param("sourceId")
			videoName := c.Param("videoName")
			sourceId, err := strconv.Atoi(sourceIdV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				util.Logger.Warn("Start collection failed, the param idV is not integer")
				return
			}

			source, err := manager.GetSourceById(uint(sourceId))
			if err!=nil{
				c.Status(http.StatusBadRequest)
				util.Logger.Warn("Start collection failed, source is nil")
				return
			}

			newGetter := getter.NewGetter(source.ID, source.Name, source.Url, source.Ok, source.Pg)
			//
			newGetter.GetContentByVideoName(videoName)
			c.Status(http.StatusOK)
		})

		// 全局影片列表
		user.POST("/list", func(c *gin.Context) {
			// 获取页码
			pgV := c.PostForm("pg")
			pg, err := strconv.Atoi(pgV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				util.Logger.Warn("get global movies list failed, the pgV is not integer")
				return
			}
			// 获取数量
			numV := c.PostForm("num")
			num, err := strconv.Atoi(numV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				util.Logger.Warn("get global movies list failed, the numV is not integer")
				return
			}
			// 执行检索
			movies, pgCount, err := manager.ContentList(num, pg)
			if err != nil {
				c.Status(http.StatusInternalServerError)
				util.Logger.Warn(
					"get global movies list failed, get the list from database failed, err:",
					err,
				)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			util.Logger.Debug("get the global movies list, pg:", pgV, "num:", numV, "get data:")
			c.JSON(http.StatusOK, movie)
		})

		// 全局搜索影片
		user.POST("/search", func(c *gin.Context) {
			// 获取关键字
			keyword := c.PostForm("keyword")
			if keyword == "" {
				c.Status(http.StatusBadRequest)
				util.Logger.Debug("Keyword is empty")
				return
			}
			// 获取页码
			pgV := c.PostForm("pg")
			pg, err := strconv.Atoi(pgV)
			if err != nil {
				util.Logger.Warn("pgV is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取数量
			numV := c.PostForm("num")
			num, err := strconv.Atoi(numV)
			if err != nil {
				util.Logger.Warn("numV is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 执行搜索操作
			movies, pgCount, err := manager.SearchContent_bk(keyword, num, pg)
			if err != nil {
				util.Logger.Error("Search movie failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			util.Logger.Debug("search movie, keyword:", keyword, "pg:", pg, "num:", num)
			c.JSON(http.StatusOK, movie)
		})

		// 删除影片
		user.POST("/del", func(c *gin.Context) {
			// 获取contentId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				util.Logger.Error("The id of movie is not a integer")
				return
			}
			if manager.DelContent(uint(id)) != nil {
				c.Status(http.StatusInternalServerError)
				util.Logger.Error("Del movie failed, err:", err)
				return
			}
			c.Status(http.StatusOK)
		})

		// 获取所有影片数目
		user.GET("/count", func(c *gin.Context) {
			numV := strconv.Itoa(manager.ContentCount())
			util.Logger.Debug("movie counts is ", numV)
			c.String(http.StatusOK, numV)
		})

		// 采集源影片列表
		user.POST("/source/list", func(c *gin.Context) {
			// 获取sourceId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				util.Logger.Warn("The id of source is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}

			// 获取页码
			pgV := c.PostForm("pg")
			pg, err := strconv.Atoi(pgV)
			if err != nil {
				util.Logger.Warn("The id of page is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}

			// 获取数量
			numV := c.PostForm("num")
			num, err := strconv.Atoi(numV)
			if err != nil {
				util.Logger.Warn("The numV is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}

			// 执行检索
			movies, pgCount, err := manager.ContentList_Source(uint(id), num, pg)
			if err != nil {
				util.Logger.Error("get content list of source which id is ", id, "failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			util.Logger.Info("get conteng list of source which id is", id)
			c.JSON(http.StatusOK, movie)
		})

		// 采集源影片搜索
		user.POST("/source/search", func(c *gin.Context) {
			// 获取sourceId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				util.Logger.Warn("The id of source is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取关键字
			keyword := c.PostForm("keyword")
			if keyword == "" {
				util.Logger.Warn("The keyword to search from source is blank, id:", id)
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取页码
			pgV := c.PostForm("pg")
			pg, err := strconv.Atoi(pgV)
			if err != nil {
				util.Logger.Warn("the pgV of search from source is not a integer, id:", id)
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取数量
			numV := c.PostForm("num")
			num, err := strconv.Atoi(numV)
			if err != nil {
				util.Logger.Warn("The numV of search from source is not a integer, id:", id)
				c.Status(http.StatusBadRequest)
				return
			}
			// 执行搜索操作
			movies, pgCount, err := manager.SearchContent_bk_Source(uint(id), keyword, num, pg)
			if err != nil {
				util.Logger.Error("Search content from source which id is ", id, "failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			util.Logger.Info("Search content from source which id is ", id)
			c.JSON(http.StatusOK, movie)
		})

		// 获取所有的source
		user.GET("/source/all", func(c *gin.Context) {
			sources, err := manager.GetSource()
			if err != nil {
				util.Logger.Error("Get all sources from database failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			util.Logger.Info("Get all sources from database success")
			c.JSON(http.StatusOK, sources)
		})

		// 添加source
		user.POST("/source/add", func(c *gin.Context) {
			name := c.PostForm("name")
			url := c.PostForm("url")
			manager.AddSource(name, url)
			util.Logger.Info("Add source, name:", name, "url:", url)
			c.Status(http.StatusOK)
		})

		// 重新采集
		user.POST("/source/reGet", func(c *gin.Context) {
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				util.Logger.Warn("Rget source failed, the id isn't a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			err = manager.ReGet(uint(id))
			if err != nil {
				util.Logger.Error("Rget source failed, id is ", id, "err: ", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			util.Logger.Info("Rget source success, id is", id)
			c.Status(http.StatusOK)
		})

		// 删除source
		user.POST("/source/del", func(c *gin.Context) {
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				util.Logger.Warn("Del source failed, the id of source is not a integer")
				return
			}
			err = manager.DelSource(uint(id))
			if err != nil {
				util.Logger.Error("Del source failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			util.Logger.Info("Del source, id is ", id)
			c.Status(http.StatusOK)
		})

		// 获取某资源库下所有采集类
		user.GET("/source/all_class/:id", func(c *gin.Context) {
			idV := c.Param("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				util.Logger.Warn("Get source's all class failed, the id of source is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			classes, err := manager.GetClass(uint(id))
			if err != nil {
				util.Logger.Error("Get source's all class failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			util.Logger.Info("Get all class of source that id is", id)
			c.JSON(http.StatusOK, classes)
		})

		// 自建分类影片列表
		user.POST("/category/list", func(c *gin.Context) {
			// 获取categoryId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				util.Logger.Warn("get category list failed, the id is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取页码
			pgV := c.PostForm("pg")
			pg, err := strconv.Atoi(pgV)
			if err != nil {
				util.Logger.Warn("get category list failed, the id is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取数量
			numV := c.PostForm("num")
			num, err := strconv.Atoi(numV)
			if err != nil {
				util.Logger.Warn("get category list failed, the num is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 执行检索
			movies, pgCount, err := manager.ContentList_Category(uint(id), num, pg)
			if err != nil {
				util.Logger.Error("get category list failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			util.Logger.Infof("get category list, id: %d, pg: %d, num: %d", id, pg, num)
			c.JSON(http.StatusOK, movie)
		})

		// 自建分类影片搜索
		user.POST("/category/search", func(c *gin.Context) {
			// 获取categoryId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				util.Logger.Warn("search movie from category failed, the id is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取关键字
			keyword := c.PostForm("keyword")
			if keyword == "" {
				util.Logger.Warn("search movie from category failed, the keyword is blank")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取页码
			pgV := c.PostForm("pg")
			pg, err := strconv.Atoi(pgV)
			if err != nil {
				util.Logger.Warn("search movie from category failed, the pg is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取数量
			numV := c.PostForm("num")
			num, err := strconv.Atoi(numV)
			if err != nil {
				util.Logger.Warn("search movie from category failed, the num is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 执行搜索操作
			movies, pgCount, err := manager.SearchContent_bk_Category(uint(id), keyword, num, pg)
			if err != nil {
				util.Logger.Errorf("search movie from category failed, id: ", id, "err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			util.Logger.Info("search movie from category, id is ", id)
			c.JSON(http.StatusOK, movie)
		})

		// 获取自建分类
		user.GET("/category/all", func(c *gin.Context) {
			categories, err := manager.GetCategory()
			if err != nil {
				util.Logger.Error("get all category failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			util.Logger.Info("get all category")
			c.JSON(http.StatusOK, categories)
		})

		// 创建一个分类
		user.POST("/category/add", func(c *gin.Context) {
			name := c.PostForm("name")
			err := manager.AddCategory(name)
			if err == nil {
				util.Logger.Info("create a category called ", name)
				c.Status(http.StatusOK)
				return
			}
			util.Logger.Error("create category failed, err:", err)
			c.Status(http.StatusBadRequest)
		})

		// 删除分类
		user.POST("/category/del", func(c *gin.Context) {
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				util.Logger.Warn("Del category failed, the id is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			err = manager.DelCategory(uint(id))
			if err != nil {
				util.Logger.Error("Del category failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			util.Logger.Info("Del category, id is ", id)
			c.Status(http.StatusOK)
		})

		// 采集类影片列表
		user.POST("/class/list", func(c *gin.Context) {
			// 获取categoryId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				util.Logger.Warn("gat class list failed, the category id is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取页码
			pgV := c.PostForm("pg")
			pg, err := strconv.Atoi(pgV)
			if err != nil {
				util.Logger.Warn("get class list failed, the pg is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取数量
			numV := c.PostForm("num")
			num, err := strconv.Atoi(numV)
			if err != nil {
				util.Logger.Warn("get class list failed, the num is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 执行检索
			movies, pgCount, err := manager.ContentList_Class(uint(id), num, pg)
			if err != nil {
				util.Logger.Error("get class list of category id:", id, "failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			util.Logger.Info("get class list of category id:", id)
			c.JSON(http.StatusOK, movie)
		})

		// 采集类影片搜索
		user.POST("/class/search", func(c *gin.Context) {
			// 获取sourceId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				util.Logger.Warn("search in class failed, the id is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取关键字
			keyword := c.PostForm("keyword")
			if keyword == "" {
				util.Logger.Warn("search in class failed, the keyword is blank")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取页码
			pgV := c.PostForm("pg")
			pg, err := strconv.Atoi(pgV)
			if err != nil {
				util.Logger.Warn("search in class failed, the pg is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 获取数量
			numV := c.PostForm("num")
			num, err := strconv.Atoi(numV)
			if err != nil {
				util.Logger.Warn("search in class failed, the num is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			// 执行搜索操作
			movies, pgCount, err := manager.SearchContent_bk_Class(uint(id), keyword, num, pg)
			if err != nil {
				util.Logger.Error("search in class failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			util.Logger.Info("search in class,id:", id, "keyword:", keyword)
			// 编码json
			c.JSON(http.StatusOK, movie)
		})

		// 改变class的采集状态是否采集
		user.POST("/class/changeGet", func(c *gin.Context) {
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				util.Logger.Warn("change class get failed, the id is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}

			getV := c.PostForm("get")
			get := !(getV == "0")
			err = manager.ChangeClassGet(uint(id), get)
			if err != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			c.Status(http.StatusOK)
		})

		// 分配采集类到自建类
		user.POST("/class/distribute", func(c *gin.Context) {
			classIdV := c.PostForm("classId")
			classId, err := strconv.Atoi(classIdV)
			if err != nil {
				util.Logger.Warn("distribute class to category failed, the classid is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			categoryIdV := c.PostForm("categoryId")
			categoryId, err := strconv.Atoi(categoryIdV)
			if err != nil {
				util.Logger.Warn("distribute class to category failed, the categoryId is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			err = manager.DistributeClass(uint(classId), uint(categoryId))
			if err != nil {
				util.Logger.Error("distribute class to category failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}

			util.Logger.Info("distribute class ", classId, "to category ", categoryId)
			c.Status(http.StatusOK)
		})

		// 更新账户
		user.POST("/updateAccount", func(c *gin.Context) {
			account := c.PostForm("account")
			if account == "" {
				util.Logger.Warn("update account failed, the account is blank")
				c.Status(http.StatusBadRequest)
				return
			}
			oldAccount := manager.SessionGet(c.Request, "account").(string)
			err := manager.UpdateAccount(oldAccount, account)
			if err != nil {
				util.Logger.Error("update account failed, the oldAccount:", oldAccount, "newAccount:", account)
				c.Status(http.StatusInternalServerError)
				return
			}
			kv := make(map[interface{}]interface{})
			kv["account"] = account
			manager.SessionSet(c.Writer, c.Request, kv)
			util.Logger.Info("update account ", account, "success")
			c.Status(http.StatusOK)
		})

		// 更新密码
		user.POST("/updatePassword", func(c *gin.Context) {
			password := c.PostForm("password")
			if password == "" {
				util.Logger.Warn("update password failed, the password is blank")
				c.Status(http.StatusBadRequest)
				return
			}
			account := manager.SessionGet(c.Request, "account").(string)
			err := manager.UpdatePassword(account, password)
			if err != nil {
				util.Logger.Error("update password failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			util.Logger.Infof("update password success, account %s new password is %s", password)
			c.Status(http.StatusOK)
		})

		// 获取采集间隔
		user.GET("/getCollectInterval", func(c *gin.Context) {
			util.Logger.Info("get collect interval")
			c.String(http.StatusOK, strconv.Itoa(manager.GetCollectInterval()))
		})

		// 更新采集间隔
		user.POST("/updateCollectInterval", func(c *gin.Context) {
			intervalV := c.PostForm("interval")
			interval, err := strconv.Atoi(intervalV)
			if err != nil {
				util.Logger.Warn("update collect interval failed, the interval is not a integer")
				c.Status(http.StatusBadRequest)
				return
			}
			if interval <= 0 {
				interval = 24
			}
			err = manager.UpdateCollectInterval(interval)
			if err != nil {
				util.Logger.Error("update collect interval failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			util.Logger.Info("update collect interval ", interval)
			c.Status(http.StatusOK)
		})

		user.POST("/setCategoryMain", func(c *gin.Context) {
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				util.Logger.Warn("set category main failed, the category id is not integer")
				c.Status(http.StatusBadRequest)
				return
			}

			mainV := c.PostForm("main")
			err = manager.SetCategoryMain(uint(id), mainV == "true")
			if err != nil {
				util.Logger.Error("set category main failed, err:", err)
				c.Status(http.StatusInternalServerError)
				return
			}
			util.Logger.Info("set category main, category id is ", id)
			c.Status(http.StatusOK)
		})

		user.GET("/cachePurge", func(c *gin.Context) {
			MiddleWare.Pruge()
			c.Status(http.StatusOK)
		})

		// 登出操作
		user.GET("/logout", func(c *gin.Context) {
			account := manager.SessionGet(c.Request, "account").(string)

			manager.SessionDestroy(c.Writer, c.Request)

			util.Logger.Infof("account %s logout", account)
			c.Status(http.StatusOK)
		})

	}
}
