package controller

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/tenkesnet/foxnyilvantarto/model"
	"github.com/tenkesnet/foxnyilvantarto/storage"
)

func Login(c echo.Context) error {
	user := new(model.User)
	db := storage.GetDBInstance()
	if err := c.Bind(user); err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	if err := db.Where("name = ? AND password >= ?", user.Name, user.Password).Find(&user).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, user)
}
