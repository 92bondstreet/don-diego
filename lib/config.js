(
	function()
	{
		var debug = require('debug')('config');
		var express = require('express');
		var path = require('path');
		var consolidate = require("consolidate");
    var handlebars = require("handlebars");
    var fs = require("fs");

		// Load middlewares
		var bodyParser = require('body-parser');
		var cookieParser = require('cookie-parser');
		var serverStatic = require('serve-static');
		var morgan = require('morgan');
		var errorhandler = require('errorhandler');

		var env = process.env.NODE_ENV || 'development';
		var Server = function(server){

			var app = server;
			var rootDir = path.resolve(__dirname, '..');

			// Migrate to Express 4.x http://expressjs.com/migrating-4.html
			debug('Setting up Express server configuration');
			debug('Configure Handlebars engine and load partials');

			// 0. Configure the Handlebars engine
			app.engine("html", consolidate.handlebars);
			app.set("view engine", "html");
			// normalize the path separator according OS
			app.set("views", path.join(rootDir + "/views"));

			// 1. Register partials
			var partials = path.join(rootDir + "/views/partials/");
			fs.readdirSync(partials).forEach(function (file) {
  				var source = fs.readFileSync(partials + file, "utf8");
      			var partial = /(.+)\.html/.exec(file).pop();
			    handlebars.registerPartial(partial, source);
			});

			// 2. Middlewares according needs
			// parse application/json
			app.use(bodyParser.json());
			app.use(cookieParser());
			app.use(serverStatic(rootDir + '/public'));

			// Awesome article on Running Express.js in production
			// http://www.hacksparrow.com/running-express-js-in-production-mode.html
			// Error handling
			if(env === 'development'){
				debug('Setting up "development" configuration');
				app.use(morgan('tiny'));
				app.use(errorhandler({ dumpExceptions: true, showStack: true }));
			};

			if(env === 'production') {
				debug('setting up "production" configuration...');
				app.enable('view cache');
				app.use(errorhandler());
			};

			function errorHandler(err, req, res, next) {
  				res.status(500);
  				res.render('error', { error: err });
			}

		}
		exports.Server = Server;


	}
)();
