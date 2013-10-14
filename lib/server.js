(
	function()
	{
		// First extend the express server's prototype		
		var debug = require('debug')('server');
		var config = require('./config');
		var express = require('express');
		
		debug('Create a new application');
		// Migrating-from-2.x-to-3.x
		var server = express();		
		config.Server(server);

		// Export the server
		module.exports = server;		
	}
)
();
