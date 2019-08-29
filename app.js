var mysql = require("mysql")
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3006,
    user: "root",
    password: "Ky27Ls$10pQ9d",
    database: "bamazon_DB"
})

connection.connect(function (err) {
    if (err) throw err;
})