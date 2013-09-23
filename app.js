/**
 * Module dependencies.
 */

var express = require('express'),   // express web server
  http = require('http'),           // it's a web app
  routes = require('./routes'),     // for all the backend code
  nconf = require('nconf')          // for configuration - using nconf module
  ;

var app = module.exports = express()
var server = http.createServer(app);


app.use(express.cookieParser());                            // for the future
app.use(express.session({secret: 'DCIOARS123456789'}));     // for the future


nconf.file({ file: './config.json' });    //loads the configuration from config.json in root

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');               // all tha app views will be loaded from views folder
  app.set('view engine', 'jade');                       // going to use JADE for templating
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));       // folder for all the static files, js and css
  app.use(app.router);                                  // for routing calls
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

process.env.NODE_ENV = nconf.get('enviornment');

// Routes
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API


app.get('*', routes.index);     // redirect all others to the index (HTML5 history)

// Start server
server.listen(nconf.get('http:port'), function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
