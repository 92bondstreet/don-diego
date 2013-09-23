module.exports = function(req, res){
	res.status(400);
  	res.render('404', { title: 'Error 404: page not found' });
};