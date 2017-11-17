// require mysql and inquirer

var mysql = require('mysql');
var inquirer = require('inquirer');

//create connection to db

var connection = mysql.createConnection({
	host: "localhost",
	port: 3000,
	user: root,
	password: root,
	database: "Bamazon"
})

function start(){
		inquirer.prompt([{
			type: "list",
			name: "doThing",
			message: "What would you like to do?",
			choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "End Session"]
		}]).then(function(ans){
			switch(ans.dothing){
				case "View Products for Sale": viewProducts();
				break;
				case "View Low Inventory": viewLowInventory();
				break;
				case "Add to Inventory": addToInventory();
				break;
				case "Add New Product": addNewProduct();
				break;
				case "End Session": console.log('Bye');
			}
		});
}

//view all inventory
function viewProducts(){
	console log('Viewing Products');

	connection.query('SELECT * FROM Products', function(err,res){
		if(err) throw err;
		console.log('--------------------------------------------------------')


	for(var i = 0; i<res.length;i++){
		console.log("ID: " + res[i].ItemID + " | " + "Product: " + res[i].ProductName + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: " + res[i].Price + " | " + "QTY: " + res[i].StockQuantity);
		console.log('-----------------------------------------------------------------------------------------')

	}

	start();
});
}

//Views Inventory lower than 5

function viewLowInventory(){
	console.log('Viewing Low Inventory');

	connection.query('SELECT * FROM Products', function(err, res){
		if(err) throw err;
		console.log('______________________________________________________________________________________________');

	}
}

start();
});
}

//displays prompt to add more of an item to the store and asks how much

function addToInventory(){
	consol.log('Adding to Inventory');

	connection.query('SELECT * FROM Products', function(err, res){
		if(err) throw err;
		var itemArray = [];

		//pushes each item into an itemArray
		for(var i=0; i<res.length; i++){
			itemArray.push(res[i].ProductName);
		}

		inquirer.prompt([{
			type: "list",
			name: "product",
			choices: "itemArray",
			message: "Which item would you like to add to inventory?"

		}, {
			type: "input",
			name: "qty",
			message: "How much would you like to add?",

			validate: function(value){
				if(isNaN(value) === false){return true;}
				else{return false;}
			}
}]).then(function(ans) {
	var currentQTY;
	for(var i=0; i<res.length; i++){
		currentQty = res[i].StockQuantity;
	}
	}
	connection.query('UPDATE Products Set ? WHERE ?', [
		{StockQuantity: currentQty + parseInt(ans.qty)},
		{ProductName: ans.Product}
		], function(err, res){
			if(err) throw err;
			console.log('The quantity was updated.');
			start();

		});
})

			
		});
}




























	})
}















	} )
}