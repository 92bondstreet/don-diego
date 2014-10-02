(
	function()
	{
		var debug = require('debug')('routes');
		// 0. Load all routes definition
		// https://github.com/visionmedia/express/blob/master/examples/route-separation/index.js
		// Error definition: http://www.hacksparrow.com/express-js-custom-error-pages-404-and-500.html
		// Error definition: https://github.com/visionmedia/express/blob/master/examples/error-pages/index.js
		// http://expressjs.com/migrating-4.html#routing
		var homepage = require('./homepage');
		var about = require('./about');
		var _404_ = require('./404');
		var dbpage = require('./db');

		var express = require('express');
		var router = express.Router();

		var Setup = function (server) {
			debug('Setting up routes');

			router.get('/', homepage);
			router.get('/about', about);
			router.get('/db', dbpage);

			// apply the routes to our application
			server.use('/', router);
			// 404 Error page
			server.use(_404_);
		}

		exports.Setup = Setup;
	}
)();
