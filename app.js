
/**
 * Module dependencies.
 */

var express = require('express'), routes = require('./routes');
var app = express();
var jade = require('jade');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var sass = require('node-sass');

/*
var connect = require('connect')
  , sass = require('../sass');

// Setup server
// $ curl http://localhost:3000/test.css

var server = connect.createServer(
  sass.middleware({
      src: __dirname
    , dest: __dirname + '/public'
    , debug: true
    , outputStyle: 'compressed'
  }),
  connect.static(__dirname + '/public')
);
*/

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(
     sass.middleware({
         src: __dirname + '/public/stylesheets', //where the sass files are 
         dest: __dirname + '/public/stylesheets', //where css should go
         debug: true,
         outputStyle: 'compressed'
     })
 );
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/prototype', routes.prototype)

app.listen(3000, function(){
  console.log("Express server listening on port 3000");
});
