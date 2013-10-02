(
	function(){
		module.exports = function(req, res){
	  	res.render(	'about', 
	  					{ 	title: 'Welcome to the About page',
	  				 		footer: 'About footer'});
		};
	}
)();