(
	function()
	{
		var debug = require('debug')('server');
		var express = require('express');
		var http = require('http');

		debug('Create a new application')
		// Migrating-from-2.x-to-3.x
		var app = express();
		var server = http.createServer(app);

		// Export the server
		module.exports = server;		
	}
)
();
