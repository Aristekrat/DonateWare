var mongoose = require('../node_modules/mongoose');

var username = process.env.MONGO_USERNAME; 
var password = process.env.MONGO_PASSWORD; 
var dbURL = 'mongodb://' + username + ':' + password + '@ds053838.mongolab.com:53838/heroku_app17845741';
console.log(dbURL);
mongoose.connect(dbURL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db; 

/*
The Model:
mongodb://<dbuser>:<dbpassword>@ds053168.mongolab.com:53168/donateware

The Local URL:
var dbURL = 'mongodb://localhost/donateware';
*/