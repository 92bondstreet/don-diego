(
	function()
	{
		var debug = require('debug')('routes');
		// 0. Load all routes definition
		// https://github.com/visionmedia/express/blob/master/examples/route-separation/index.js
		// Error definition: http://www.hacksparrow.com/express-js-custom-error-pages-404-and-500.html
		// Error definition: https://github.com/visionmedia/express/blob/master/examples/error-pages/index.js
		var homepage = require('./homepage');
		var about = require('./about');
		var _404_ = require('./404');
		var dbexample = require('../db/model');

		var Setup = function (server) {
			debug('Setting up routes');			
			// 404 Error page
			server.use(_404_);
			server.get('/', homepage);
			server.get('/about', about);				
		}

		exports.Setup = Setup;
	}
)();