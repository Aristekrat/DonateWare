
/**
 * Module dependencies.
 */

var express = require('express'), routes = require('./routes');
var app = express();
var jade = require('jade');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var sass = require('node-sass');
var port = process.env.PORT || 3000; 

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

app.listen(port, function(){
  console.log("Express server listening on port 3000");
});
