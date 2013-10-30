var mongo = require('../config/mongo_config.js');
var comments = require('../public/schemas/comments.js')
/*
 * GET home page.
 */

exports.index = function(req, res){
  	res.render('../views/index', { title: 'DonateWare' });
};

exports.prototype = function(req, res) {
	res.render('../views/prototype', { title: 'Prototype'});
};

exports.upload = function(req, res) {
	res.render('../views/upload', { title: 'Upload'});
};

exports.success = function(req, res) {
    res.render('../views/success', {title: 'Success'});
}

exports.loadComments = function(req, res) {
    comments.find({ }).exec(function(err, comments) { 
        if(err) { 
            return next(err); 
        } 
    res.render('../views/comments', { comments: comments }); 
    });
}