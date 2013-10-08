
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