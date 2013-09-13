(
	function()
	{
		var debug = require('debug')('routes');
		// 0. Load all routes definition
		// https://github.com/visionmedia/express/blob/master/examples/route-separation/index.js
		var homepage = require('./homepage');
		var about = require('./about');

		var Setup = function (server) {
			debug('Setting up routes');			
			server.get('/', homepage);
			server.get('/about', about);
		}

		exports.Setup = Setup;
	}
)();