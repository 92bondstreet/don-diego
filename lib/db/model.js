(
	function(){

		var debug = require('debug')('model');
		
		// Define a singleton to get mongoDB object connection
		// 
		var mongoDBSingleton = null;	
		var getMongoDB = function getMongoDB(callback){
			if(mongoDBSingleton){
				callback(null,mongoDBSingleton);
			}
			else{
				// Create database
				// Define host and port
				var dbhost = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : '127.0.0.1';
				var dbport = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : 27017;
				var database = 'don-diego-database';

				// Connection to database
				var mongoDB = require('../db');
				mongoDB.setup(dbhost,dbport,database,function(error,db){
					mongoDBSingleton = mongoDB;
					callback(null,mongoDBSingleton);
				});				
			} 				
		}

		module.exports = getMongoDB;
	}
)();