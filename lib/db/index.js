(
	function(){

		var debug = require('debug')('db');
		var mongodb = require('mongodb');

		var MongoDB = function(){
			this.init();
  		}

  		MongoDB.prototype = {

  			init: function(){
  				this.db = null;
  			}
  			/**
			* Create mongoDB connection
			*
			* @method setup
			* @param {String} 	host			database connection
			* @param {String} 	port			database connection
			* @param {String} 	database		name
			* @param {String} 	callback
			*/
			,setup: function(host,port,database,callback){

				var self = this;

				//0. Connect to mongodb and wait asynchronous callback
				var url = 'mongodb://'+host+':'+port+'/'+database;
				mongodb.MongoClient.connect(url, function(error, db) {
			    	if(error) throw error;		       	
	       		self.db = db;
	       		debug('Connect to DB ' + url);
	       		callback(null,db);
		    	});

			}
			/**
			* Create mongoDB collection
			* Collection object is a pointer to a specific collection in the database
			*
			* @method createColletion
			* @param {String} 	name			collection
			* @param {Method} 	callback		to get error or result
			*/
			,createCollection:function(name, callback){

				this.db.collection(name, function(error, collection){
	   				if (error) callback(error);
	   				else{
	 					debug('[createCollection] Collection ' + name + ' created');
	 					callback(null,collection);
	 				}
				});
			}
			/**
			* get a mongoDB collection
			*
			* @method getCollection
			* @param {String} 	name			collection
			* @param {Method} 	callback		to get error or result
			*/
			,getCollection:function(name, callback){
    			this.db.collection(name, function(error, collection) {
    				if( error ) callback(error);
    				else callback(null, collection);
  				});
			}
			/**
			* Find all records in mongoDB collection
			*
			* @method findAll
			* @param {String} 	name			collection
			* @param {Method} 	callback		to get error or result
			*/
			,findAll:function(name, callback){

				this.getCollection(name,function(error, collection) {
					if(error) callback(error);
					else{
						collection.find().toArray(function(error, results) {
          					if(error) callback(error)
          					else callback(null, results)
        				});
					}
				});
			}

			/**
			* insert data mongoDB collection
			* Collection object is a pointer to a specific collection in the database
			*
			* @method insert
			* @param {String} 	name		collection
			* @param {String} 	data		to insert
			* @param {Method} 	callback	to get error or result
			*/
			,insert:function(name, data, callback){

				//insert record
				this.getCollection(name,function(error, collection) {
					if(error) callback(error);
					else{
						collection.insert(data, function(error, records) {
							if (error) callback(error);
							else{
								debug('[insert] First record added as '+records[0]._id);
								callback(null,records);
							}
						});
					}
				});
			}

			/**
			* Remove all records in mongoDB collection
			*
			* @method removeAll
			* @param {String} 	name			collection
			* @param {Method} 	callback		to get error or result
			*/
			,removeAll:function(name, callback){

				this.getCollection(name,function(error, collection) {
					if(error) callback(error);
					else{
						// Remove all the document
      					collection.remove(function(error, results) {
          					if(error) callback(error)
          					else callback(null, '[removeAll] Remove all records in collection')
        				});
					}
				});
			}
  		};


  		module.exports = new MongoDB();

	}
)();
