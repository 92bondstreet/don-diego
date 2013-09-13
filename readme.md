DON-DIEGO
=========

don-diego is an express-handlebars web application (basic and minimal) structure.
This package is inspired by the excellent <a href="https://github.com/PuerkitoBio/express-boilerplate">express-boilerplate</a> structure by <a href="https://github.com/PuerkitoBio">PuerkitoBio</a>.

Package Name
------------

don-diego name is in reference to Don Diego De La Vega and his minimal Mustache... as Handlebars.

Installation
------------

Clone it in your local folder 

`git clone git@github.com:92bondstreet/don-diego.git` 

Then install don-diego and its dependencies with npm: 

`npm install -d`

Getting start
----

You can run with  `node app.js` and browse 2 pages to `http://localhost:3000/` and `http://localhost:3000/about`

With `NODE_ENV`, you can define the mode: development or production.
For example, create the environment variable `NODE_ENV` with `production` value to set production environment:

`export NODE_ENV=production` for Linux or `SET NODE_ENV=production` for Windows.

Structure
-----  	
	don-diego
		lib
		public
		test
		views
		app.js
		package.json
		readme.me

* `don-diego/app.js` Starter file. Application file to init the server and the router. Run with `node app.js`
* `lib/server.js` File to create Express 3.x application
* `lib/config.js` File to configure Express 3.x application with template engine, middlewares, error handling...

Running tests
-------------

To run the tests under node you will need `mocha` and `should` installed (it's listed as a
`devDependencies` so `npm install` from the checkout should be enough), then do `npm test`.

Project status
--------------
don-diego is currently maintained by Yassine Azzout.


Authors and contributors
------------------------
### Current
* [Yassine Azzout][] (Creator, Building keeper)

[Yassine Azzout]: http://www.92bondstreet.com


License
-------
[MIT license](http://www.opensource.org/licenses/Mit)
