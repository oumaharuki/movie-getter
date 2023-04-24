package router

import (
	"fmt"
	admin "movie/admin-dist"              // 后台资源
	adminAssets "movie/admin-dist/assets" // 后台资源
	"movie/dist"                          // 前台资源
	"movie/dist/assets"                   // 前台资源
	mm "movie/manager"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Static(r *gin.Engine, manager *mm.Manager) {

	// 前台
	{
		// 处理首页
		r.GET("/", func(c *gin.Context) {
			//记录pv uv
			ip := c.ClientIP()
			_,err := manager.AddUvPv(ip)
			fmt.Println("err:",err)
			c.Header("content-type", "text/html;charset=utf-8")
			c.String(200, dist.Index)
		})
		// 处理ico
		r.GET("/logo.ico", func(c *gin.Context) {
			c.Header("Content-Type", "image/vnd.microsoft.icon")
			c.String(200, string(dist.Icon))
		})
		r.GET("/baidu_verify_codeva-zG3Qxgfxiq.html", func(c *gin.Context) {
			c.Header("Content-Type", "text/html;charset=utf-8")
			c.String(200, string(dist.Baidu_verify_codeva))
		})
		// 处理静态文件
		r.StaticFS("/assets", http.FS(assets.Assets))

	}
	// 后台
	{
		// 处理首页
		r.GET("/admin/", func(c *gin.Context) {
			c.Header("content-type", "text/html;charset=utf-8")
			c.String(200, admin.Index)
		})
		// 处理ico
		r.GET("/admin/logo.ico", func(c *gin.Context) {
			c.Header("Content-Type", "image/vnd.microsoft.icon")
			c.String(200, string(admin.Icon))
		})
		// 处理静态文件
		r.StaticFS("/admin/assets", http.FS(adminAssets.Assets))
	}
}
