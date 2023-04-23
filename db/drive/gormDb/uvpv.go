package gormDb

import (
	_struct "movie/db/struct"
	"time"
)

func (here *Db) AddUvPv(ip string) (uint, error) {
	uvpv := &_struct.Uvpv{
		Ip: ip,
		CreateTime: time.Now(),
	}
	db := here.db.Create(uvpv)
	return uvpv.ID, db.Error
}
