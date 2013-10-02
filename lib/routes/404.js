(
	function(){
		module.exports = function(req, res){
			res.status(404);
	  		res.render('404', { title: 'Error 404: page not found' });
		};
	}
)();