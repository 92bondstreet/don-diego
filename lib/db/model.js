(
	function(){

		var debug = require('debug')('model');
		var trace = function(error, result){
			if(error) debug(error);
			else debug(result);
		}

		var trace_insert = function(error, result){
			if(error) debug(error);
			else debug('Count inserted data: ' + result.length);
		}

		// Create database
		// Define host and port
		var dbhost = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : '127.0.0.1';
		var dbport = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : 27017;
		var database = 'don-diego-database';

		// Connection to database
		var mongoDB = require('../db');
		mongoDB.setup(dbhost,dbport,database);

		// creation of collection example
		mongoDB.createCollection("collection-example",trace);

		// insert data
		mongoDB.insert("collection-example",{title:'Article #1', author:'Author #1'},trace_insert);
		mongoDB.insert("collection-example",[{title:'Article #2', author:'Author #2'},{title:'Article #3', author:'Author #3'}],trace_insert);


		module.exports = mongoDB;
	}
)();