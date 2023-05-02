package gormDb

import (
	"crypto/tls"
	"fmt"
	"io"
	_struct "movie/db/struct"
	"movie/util"
	"net/http"

	"github.com/tidwall/gjson"
)

// AddSource 添加source
func (here *Db) AddSource(name string, url string) (uint, bool) {
	source := &_struct.Source{
		Name: name,
		Url:  url,
	}
	db := here.db.Create(source)
	if db.Error != nil {
		return source.ID, false
	}

	if here.sourceInit(url, source.ID) != nil {
		return 0, false
	}
	return source.ID, true
}

// UpdateSourceName 更新资源库名字
func (here *Db) UpdateSourceName(id uint, newName string) error {
	db := here.db.Model(&_struct.Source{
		ID: id,
	}).Update("name", newName)
	return db.Error
}

// UpdateSourceUrl 更新资源库的地址
func (here *Db) UpdateSourceUrl(id uint, newUrl string) error {
	db := here.db.Model(&_struct.Source{
		ID: id,
	}).Update("url", newUrl)
	return db.Error
}

// DelSource 删除资源库
func (here *Db) DelSource(id uint) error {
	db := here.db.Select("Class", "Content").Delete(&_struct.Source{
		ID: id,
	})
	return db.Error
}

// UpdateSourceOk 更新source的ok状态
func (here *Db) UpdateSourceOk(id uint, status bool) error {
	db := here.db.Model(&_struct.Source{
		ID: id,
	}).Update("ok", status)
	return db.Error
}

// AllSource 获取所有的source
func (here *Db) AllSource() ([]_struct.Source, error) {
	sources := make([]_struct.Source, 0)
	db := here.db.Find(&sources)
	return sources, db.Error
}

// UpdateSourcePg 更新source采集的页数
func (here *Db) UpdateSourcePg(id uint, pg int) error {
	db := here.db.Model(&_struct.Source{
		ID: id,
	}).Update("pg", pg)
	return db.Error
}

// SourceMovieNum 获取该采集源下影片数目
func (here *Db) SourceMovieNum(sourceId uint) int {
	result := here.db.Model(&_struct.Source{
		ID: sourceId,
	}).Association("Content").Count()
	return int(result)
}

// 资源库初始化
func (here *Db) sourceInit(url string, sourceId uint) error {
	c := &http.Client{
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
		},
	}

	res, err := c.Get(url)
	if err != nil {
		fmt.Println(err)
		return err
	}
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	classes := gjson.Get(string(body), "class").Array()
	for _, vv := range classes {
		v := vv.Value().(map[string]interface{})
		name := v["type_name"].(string)
		class_Id := int(v["type_id"].(float64))
		err := here.AddClass(sourceId, name, class_Id)
		if err != nil {
			util.Logger.Error("when sourceInit, add class failed, err:", err)
		}
	}
	return nil
}

func (here *Db) GetSourceById(id uint) (_struct.Source, error) {
	var source _struct.Source
	db := here.db.First(&source, id)
	return source, db.Error
}
