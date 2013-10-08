
/***
 * Module dependencies.
***/

var express = require('express'), 
    routes = require('./routes'),
    app = express(),
    jade = require('jade'),
    expressValidator = require('express-validator'),
    mongoose = require('mongoose'),
    commentModel = require('mongoose/schemas/comments.js');

// Configuration

var port = process.env.PORT || 3000; 

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
 // app.use(express.compress());
  app.use(express.bodyParser());
  app.use(expressValidator());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/prototype', routes.prototype);
app.get('/upload', routes.upload);

// Database

var dbURL = 'mongodb://localhost/donateware';
mongoose.connect(dbURL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.post('/upload', function (req, res, next) {
  var newComment = new commentModel({
    title: req.body.comment.title,
    name: req.body.comment.name,
    text: req.body.comment.text
  });
  req.checkBody('comment.title', 'Title required', 'comment.text', 'Comment required').notEmpty();
  req.sanitize('comment').xss(); 
    console.log(newComment);
    newComment.save(function (err) {
      if (err) {
        console.log(err);
        res.redirect('/upload');
      } else {
        next();
        res.send('Hello World'); 
      }
    });
});

/*
app.post('/:urlparam', function(req, res) {

  // checkBody only checks req.body; none of the other req parameters
  req.checkBody('postparam', 'Invalid postparam').notEmpty().isInt();
  req.assert('getparam', 'Invalid getparam').isInt();
  req.assert('urlparam', 'Invalid urlparam').isAlpha();

  req.sanitize('postparam').toBoolean();

*/

app.listen(port, function(){
  console.log("Express server listening on port 3000");
});