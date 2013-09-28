## tic-tac-toe
    Angular, Node, Express, Jade app that plays tic-tac-toe with you

##### Demo http://54.214.152.167:5454/

### Running the app
    npm install
    node app.js
	
### Unit tests
	no tests yet

## Directory Layout
    app.js              --> app
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.css         --> default stylesheet
	      bootstrap.css	  --> and other css files
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
		      bootstrap/
		        bootstrap.js	--> and other js files
    routes/
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (folder for partial jade templates)
        file1.jade
        file2.jade        