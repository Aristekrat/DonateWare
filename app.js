
/***
 * Module dependencies.
***/

var express = require('express'), 
    routes = require('./routes'),
    app = express(),
    jade = require('jade'),
    expressValidator = require('express-validator'),
    mongoose = require('mongoose'),
    commentModel = require('./public/schemas/comments.js'),
    mongo = require('./config/mongo_config.js');

// Configuration

var port = process.env.PORT || 3000; 

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
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
app.get('/success', routes.success);
app.get('/comments', routes.loadComments);

// Database

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
        res.redirect('/success');
      }
    });
});

app.listen(port, function(){
  console.log("Express server listening on port 3000");
});