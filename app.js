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
    start()
})

function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("--------- Products for Sale ----------")
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " " + res[i].product_name + " $" + res[i].price)
        }

        inquirer
            .prompt([{
                    name: "pick",
                    type: "rawlist",
                    choices: function () {
                        var items = [];
                        for (var i = 0; i < res.length; i++) {
                            items.push(res[i].id);
                        }
                        return items;
                    },
                    message: "Which item would you like to buy?"
                },
                {
                    name: "count",
                    type: "input",
                    message: "How many would you like to purchase?"
                }
            ])
            .then(function (ans) {
                var selection;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].id === ans.pick) {
                        selection = res[i];
                    }
                }
            })
    })
}