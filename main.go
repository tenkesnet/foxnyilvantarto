package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/tenkesnet/foxnyilvantarto/controller"
	"github.com/tenkesnet/foxnyilvantarto/storage"
)

func main() {
	// Echo instance
	e := echo.New()
	storage.NewDB()
	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	e.Debug = true

	// Routes

	e.GET("/getDevices", controller.GetDevices)
	e.GET("/getDevice/:id", controller.GetDevice)
	e.PUT("/updateDevice", controller.UpdateDevice)
	e.POST("/login", controller.Login)
	// Start server
	e.Logger.Fatal(e.Start(":8000"))
}
