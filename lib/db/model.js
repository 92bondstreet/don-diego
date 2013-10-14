(
	function(){

		// Create database
		// Define host and port
		var dbhost = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : '127.0.0.1';
		var dbport = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : 27017;
		var database = 'don-diego-database';

		// Connection to database
		var mongoDB = require('../db');
		mongoDB.setup(dbhost,dbport,database);

		// creation of collection example
		mongoDB.createCollection("collection-example");


		module.exports = mongoDB;
	}
)();