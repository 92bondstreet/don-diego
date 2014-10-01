(
	function()
	{
		var debug = require('debug')('app');

		// bind for connections
		var server = require('./lib/server');

		// Setup routes
		var routes = require('./lib/routes');
		routes.Setup(server);

		// Listen for connections
		var port = 3000;
		server.listen(port);

		debug("Express 4.x server listening on port %d in %s mode", port, process.env.NODE_ENV);
	}
)();
