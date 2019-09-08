var mysql = require("mysql")
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ky27Ls$10pQ9d",
    database: "bamazon_DB"
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("successfully connected")
    start()
})

function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("--------- Products for Sale ----------")
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " " + res[i].product_name + " $" + res[i].price + " " + res[i].stock_quantity)
        }

        inquirer
            .prompt([{
                name: "choice",
                type: "rawlist",
                choices: function () {
                    var items = [];
                    for (var i = 0; i < res.length; i++) {
                        items.push(res[i].product_name);
                    }
                    return items;
                },
                message: "Which item would you like to buy?"
            }])
            .then(function (ans) {


                for (var i = 0; i < res.length; i++) {
                    if (res[i].product_name == ans.choice) {
                        var product = ans.choice;
                        var id = i

                        inquirer.prompt({
                            name: "count",
                            type: "input",
                            message: "How many would you like to purchase?",
                        }).then(function (ans) {
                            if ((res[id].stock_quantity - ans.count) > 0) {
                                connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity - ans.count) +
                                    "' WHERE product_name='" + product + "'",
                                    function (err, res2) {
                                        console.log("Purchased product")
                                        start();
                                    })
                            }
                        })
                    }
                }
            })

    })
}