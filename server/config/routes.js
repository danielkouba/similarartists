////////////////////////////////////////
// Require Dependencies
var path		= require('path'),
	artists		= require('../controllers/artists.js');


////////////////////////////////////////
// Routes
module.exports = function(app){
	app.get('/', artists.index); 					// Base Route
	//API routes
	app.get('/api', artists.getAll);  			// Base API Route
	app.get('/api/:artistname', artists.getOne); // API w/ Param Route
	//Visualization routes
	app.get('/artist', artists.visAll);  			// All artist visualization
	app.get('/artist/:artistname', artists.visOne); // One artist visualization
}
// END Routes
////////////////////////////////////////