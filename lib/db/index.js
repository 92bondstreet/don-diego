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
  				this.collections = [];
  			}
  			/**
			* Create mongoDB connection 
			*
			* @method setup 
			* @param {String} 	host			database connection
			* @param {String} 	port			database connection
			* @param {String} 	database		name
			*/
			,setup: function(host,port,database,collection,callback){
				//0. Connect to mongodb 
				this.db = new mongodb.Db(database, new mongodb.Server(host, port), {safe: false}, {auto_reconnect: true});
				this.db.open(function(){});
				debug('Connect to DB ' + 'mongodb://'+host+':'+port+'/'+database);
				if(collection!==undefined)
					this.createCollection(collection,callback)

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
				var self = this;
				
				this.db.collection(name, function(error, collection){
	   				if (error) callback(error);
	   				else{
	   					self.collections.push({name:collection});
	 					debug('Collection ' + name + ' created');	 				
	 					callback(null,collection);
	 				}
				});
			}
			/**
			* Find all records in  mongoDB collection 
			*
			* @method findAll 
			* @param {String} 	name			collection
			* @param {Method} 	callback		to get error or result
			*/
			,findAll:function(name, callback){
				
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
				var self = this;
				
				//insert record
				this.db.collection(name).insert(data, function(error, records) {
					if (error) callback(error);
					else{
						debug("Record added as "+records[0]._id);
						callback(null,records);
					}
				});
			}

  		};


  		module.exports = new MongoDB();

	}
)();