(
	function()
	{
		var debug = require('debug')('dbpage');
		var mongoDB = require('../db/model');
		debug('db.js');

		/*	
		 *		EXAMPLE for using callback
		 */
		
		var trace = function(error, result){
			if(error) debug(error);
			else debug(result);
		}

		var trace_insert = function(error, result){
			if(error) debug(error);
			else debug('Count inserted data: ' + result.length);
		}

		mongoDB(function(err, db){
			debug('Singleton on DB connection');			
			db.removeAll("collection-example",trace);	
			// creation of collection example (with callback trace example)
			db.createCollection("collection-example",trace);			
			// insert data (with callback trace example)
			db.insert('collection-example',{title:'Article #1', author:'Author #1'},trace_insert);
			db.insert('collection-example',[{title:'Article #2', author:'Author #2'},{title:'Article #3', author:'Author #3'}],trace_insert);
		});
		
		var parseCollection = function(res, res){
			debug('Call /db');

			// 0. Get MongoDB connection			
			mongoDB(function(err, db){
				// 1. Parse all objects in collection
				db.findAll('collection-example',function(error, results){
					debug(results.length);
					res.render('db', {
				    	title: 'Database access',
				        articles:results
				    });
				});
			});
			
  			
		};

		module.exports = parseCollection;
	}
)();