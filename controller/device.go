package controller

import (
	"net/http"
	"strconv"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/tenkesnet/foxnyilvantarto/model"
	"github.com/tenkesnet/foxnyilvantarto/storage"
)

// GetDevices
func GetDevices(c echo.Context) error {
	devices, _ := GetRepoDevices()
	return c.JSON(http.StatusOK, devices)
}

func GetDevice(c echo.Context) error {
	idStr := c.Param("id")
	id, _ := strconv.Atoi(idStr)
	device, _ := GetRepoDevice(id)
	return c.JSON(http.StatusOK, device)
}

func UpdateDevice(c echo.Context) error {

	device := new(model.Devices)
	db := storage.GetDBInstance()
	if err := c.Bind(device); err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}
	device.Modifydate = time.Now()
	db.Save(&device)
	return c.JSON(http.StatusOK, echo.Map{
		"device": &device,
	})
}

func GetRepoDevices() ([]model.Devices, error) {
	db := storage.GetDBInstance()
	devices := []model.Devices{}

	if err := db.Find(&devices).Error; err != nil {
		return nil, err
	}

	return devices, nil
}

func GetRepoDevice(id int) (model.Devices, error) {
	db := storage.GetDBInstance()
	device := model.Devices{}

	if err := db.Find(&device, id).Error; err != nil {
		return device, err
	}

	return device, nil
}
