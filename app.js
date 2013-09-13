(
	function()
	{
		var debug = require('debug')('app');

		// bind and listen for connections
		var server = require('./lib/server');
		var port = 3000;
		server.listen(port);

		debug("Express 3.x server listening on port %d in %s mode", port, process.env.NODE_ENV);
	}
)();
