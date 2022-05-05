package config

import "fmt"

const (
	DBUser     = "root"
	DBPassword = "root"
	DBName     = "mobilredfox"
	DBHost     = "127.0.0.1"
	DBPort     = "5433"
	DBType     = "postgres"
)

func GetDBType() string {
	return DBType
}

func GetPostgresConnectionString() string {
	dataBase := fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=disable",
		DBHost,
		DBPort,
		DBUser,
		DBName,
		DBPassword)
	return dataBase
}
