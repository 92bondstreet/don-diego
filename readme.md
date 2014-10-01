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

`git clone git@github.com:92bondstreet/don-diego.git .`

Or export it in your local folder

`git clone --depth=1 git@github.com:92bondstreet/don-diego.git . && rm -rf .git`

Then install don-diego and its dependencies with npm:

`npm install -d`

(Notice the `.` after the github url in order to clone/export without the package name)

Getting start
----

You can run with  `node app.js` and browse 2 pages on `http://localhost:3000/` and `http://localhost:3000/about`.Try also a non defined page to load a 404 error page template.

With `NODE_ENV`, you can define the mode: development or production.
For example, create the environment variable `NODE_ENV` with `production` value to set production environment:

`export NODE_ENV=production` for Linux or `SET NODE_ENV=production` for Windows.

Then, you can deploy your web application (website...) source code, template... in `views` and `public` directories.

Structure
-----
	don-diego
		lib
			db
				index.js
				model.js
			routes
				404.js
				about.js
				db.js
				homepage.js
				index.js
			config.js
			server.js
		public
			css
			fonts
			img
			js
			favicon.ico
		test
		views
			partials
				body-404.html
				body-about.html
				body-db.html
				body-index.html
				header.html
				js.html
			404.html
			about.html
			db.html
			index.html
		app.js
		package.json
		readme.me

* `/don-diego/app.js` Starter file. Application file to init the server and the router. Run with `node app.js`
* `/lib/server.js` File to create <a href="http://expressjs.com/migrating-4.html">Express 4.x</a> application
* `/lib/config.js` File to configure Express 4.x application with template engine, middlewares, error handling...
* `/lib/routes` Routes separation inspired by <a href="https://github.com/visionmedia/express/tree/master/examples/route-separation">Express route-separation</a>
	* `index.js`	Setup all routes
	* `homepage.js`	Define homepage render
	* `about.js` 	Define about page render
	* `db.js` 		Page render example with database (mongoDB) records
	* `404.js` 		Define 404 error page render
	*  ...
* `/lib/db` Files to define mongoDB connection and wrapper with node-mongodb-native code.
	* `index.js`	Define a mongoDB prototype with insert, remove, findAll... functions
	* `model.js`	Define a singleton mongoDB object
* `/public` Static files. Mobile-first Responsive configuration generate with <a href="http://www.initializr.com">Initializr</a>
* `/views` Example of handlebars template and partials


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
