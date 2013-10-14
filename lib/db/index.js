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
			,setup: function(host,port,database,collection){
				//0. Connect to mongodb 
				this.db = new mongodb.Db(database, new mongodb.Server(host, port), {safe: false}, {auto_reconnect: true});
				this.db.open(function(){});
				debug('Connect to DB ' + 'mongodb://'+host+':'+port+'/'+database);
				if(collection!==undefined)
					this.createCollection(collection)

			}
			/**
			* Create mongoDB collection 
			* Collection object is a pointer to a specific collection in the database
			*
			* @method createColletion 
			* @param {String} 	name			collection
			*/
			,createCollection:function(name){
				var self = this;
				
				this.db.collection(name, function(err, collection){
	   				if (err) throw err;
	   				self.collections.push({name:collection});
	 				debug('Collection ' + name + ' created');
				});
			}

  		};


  		module.exports = new MongoDB();

	}
)();