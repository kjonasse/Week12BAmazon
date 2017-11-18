CREATE DATABASE Bamazondb;

USE Bamazondb;

CREATE TABLE Products(
    ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

select * from Products;

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Bike","Sporting Goods",49.95,15),
    ("Scooter","Sporting Goods",59.99,42),
    ("Helmet","Sporting Goods",19.99,50),
    ("Basketball","Sporting Goods",75.00,5),
    ("Volleyball","Sporting Goods",54.25,20),
    ("Softball","Sporting Goods",23.39,42),
    ("Football","Sporting Goods",15.00,25),
    ("Softball Bat","Sporting Goods",245.00,62),
    ("Volleyball Net","Sporting Goods",24.99,35),
    ("Football Uniform","Sporting Goods",69.95,23);

