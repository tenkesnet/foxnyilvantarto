DROP TABLE IF EXISTS users;
CREATE TABLE users
(
    id serial PRIMARY KEY,
    name text,
	password text,
	role text
);

INSERT INTO users (name, password, role ) VALUES
 ('admin', MD5('admin987'),'admin'),
 ('user', MD5('user987'),'user');


drop table if exists devices;
create table devices (
	 id serial PRIMARY KEY,
	 name text,
	 serialnumber text,
	 price double precision,
	 purchasedate timestamp,
	 location text,
	 rentaldate timestamp,
	 modifydate timestamp
 );

 insert into devices 
 (name, serialnumber, price, purchasedate, location, rentaldate, modifydate) 
 values 
 ('Huawe P10','3547754342412',138000.0,'2019-09-03','Bardo','2022-08-20',NOW()),
 ('Huawe P50','534765535332',345000.0,'2022-02-15','Bardo','2024-04-12',NOW()),
 ('SAMSUNG S22 Blue','SM742364624',438000.0,'2021-04-12','raktár','2025-02-20',NOW());