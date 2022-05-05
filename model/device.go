package model

import "time"

type Devices struct {
	Id           uint      `json:"id"`
	Name         string    `json:"name"`
	Serialnumber string    `json:"serialNumber"`
	Price        float64   `json:"price"`
	Purchasedate time.Time `json:"purchaseDate"`
	Location     string    `json:"location"`
	Rentaldate   time.Time `json:"rentalDate"`
	Modifydate   time.Time `gorm:"autoCreateTime"`
}
