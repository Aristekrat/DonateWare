var mongoose = require('../node_modules/mongoose'),
    db = mongoose.connection,
    username = process.env.MONGO_USERNAME, 
    password = process.env.MONGO_PASSWORD,
    dbURL = 'mongodb://' + username + ':' + password + '@ds053838.mongolab.com:53838/heroku_app17845741';

mongoose.connect(dbURL);
db.on('error', console.error.bind(console, 'connection error:'));
module.exports = db; 
