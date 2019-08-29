DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products
(
    id INT NOT NULL
    AUTO_INCREMENT,
  product_name VARCHAR
    (100) NOT NULL,
  department_name VARCHAR
    (45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY
    (id)
);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("iPhone", "Technology", 600, 5000);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("PS4", "Technology", 250, 2000);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Winter Coat", "Apparel", 40, 200);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Candy", "Food", 1, 1000);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Socks", "Apparel", 15, 250);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Fortnite", "Technology", 30, 99999);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Lego Set", "Toys", 40, 750);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Barbie Doll", "Toys", 25, 500);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Coffee Blends", "Food", 30, 1200);

    insert into products
        (product_name, department_name, price, stock_quantity)
    values
        ("Backpack", "Apparel", 50, 900);

    select *
    from products;