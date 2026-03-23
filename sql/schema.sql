-- DROP DATABASE Catalog;
CREATE DATABASE Catalog;
USE Catalog;

CREATE TABLE Products (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image VARCHAR(500) NOT NULL,
    source VARCHAR(50) NOT NULL DEFAULT 'fakestore',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE CartItems (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT FK_CartItems_Products FOREIGN KEY (product_id)
        REFERENCES Products(id)
        ON DELETE CASCADE
);

set global time_zone = '-6:00';

SELECT * FROM Products;