(
	function()
	{
		var debug = require('debug')('config');
		var express = require('express');	
		var path = require('path');
		var consolidate = require("consolidate");
    	var handlebars = require("handlebars");
    	var fs = require("fs");
	
		var Server = function(server){
			
			var app = server;
			var rootDir = path.resolve(__dirname, '..');

			app.configure(function(){
			
				debug('Setting up Express server configuration');	
				debug('Configure Handlebars engine and load partials');	

				// 0. Configure the Handlebars engine
				app.engine("html", consolidate.handlebars);
				app.set("view engine", "html");
				app.set("views", __dirname + "/views");

				// 1. Register partials				
				var partials = "./views/partials/";
				fs.readdirSync(partials).forEach(function (file) {
    				var source = fs.readFileSync(partials + file, "utf8"),
        			partial = /(.+)\.html/.exec(file).pop(); 
				    handlebars.registerPartial(partial, source);
				});

				// 2. Middlewares
				app.use(express.bodyParser());		
				app.use(express.methodOverride());		
				app.use(express.cookieParser());
				app.use(app.router);
			});

			// Awesome article on Running Express.js in production
			// http://www.hacksparrow.com/running-express-js-in-production-mode.html
			// Error handling
			app.configure('development', function () {
				debug('Setting up "development" configuration');
				app.use(express.logger('tiny'));
				app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
			});

			app.configure('production', function () {
				debug('setting up "production" configuration...');
				app.use(errorHandler); 
			});

			function errorHandler(err, req, res, next) {
  				res.status(500);
  				res.render('error', { error: err });
			}

		}
		exports.Server = Server;


	}
)();






