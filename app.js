(
	function()
	{
		var debug = require('debug')('app');

		// bind and listen for connections
		var server = require('./lib/server');
		server.listen(3000);

		debug("Express 3.x server listening on port %d in %s mode", server.address().port, process.env.NODE_ENV);
	}
)();
