(
	function()
	{
		var debug = require('debug')('config');
		var express = require('express');	

		// Awesome article on Running Express.js in production
		// http://www.hacksparrow.com/running-express-js-in-production-mode.html
		
		var Server = function(server){
			var app = server;

			app.configure(function(){
				debug('setting up default Express server configuration');	

				// 0. Configure the Handlebars engine
				/*app.engine("html", consolidate.handlebars);
				app.set("view engine", "html");
				app.set("views", __dirname + "/views");*/
			});

		}
		exports.Server = Server;


	}
)();






