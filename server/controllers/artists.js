////////////////////////////////////////
//Define artistsController
//// This controller will be used for interacting with the API
function artistsController(){

	////////////////////////////////////////
	// Import JSON
	var data  = require('../data/artists.json')
	////////////////////////////////////////




	////////////////////////////////////////
	// The base URL route
	this.index = function(req,res){ 
		res.json("Maybe load some links here...");
	}
	// END this.index
	////////////////////////////////////////



	////////////////////////////////////////
	// '/api/artist' route
	//// Loads the entire JSON file
	this.getAll = function(req,res){ 
		res.json(data);
	}
	// END this.getAll
	////////////////////////////////////////




	this.queryName = function(name){
		for (each in data) {
			//If data.name equals request parameter
			if (data[each].name.toLowerCase() == name.toLowerCase()) {
				return {data: data[each], error: null} 
			} // If
		} // For
		return {data: null, error: "Couldn't find artist: " + req.params.artistname	}
	}





	////////////////////////////////////////
	// '/api/artist/:artistname' route
	//// Loads a JSON single artist entry
	this.getOne = function(req,res){
		var context = this.queryName(req.params.artistname);
		if (context.data){
			res.json(context.data); // Send response
		} else {
			res.json(context.error);	
		}
	}
	// END this.getOne
	////////////////////////////////////////

	////////////////////////////////////////
	// '/artist/:artistname' route
	//// Loads a view for single artist entry
	this.visOne = function(req,res){
		// The variable being passed into template
		var context = this.queryName(req.params.artistname);
		if (context.data){
			res.render('index', context.data); // Send response
		} else {
			res.json(context.error);	
		}
	}
	// END this.visOne
	////////////////////////////////////////

	////////////////////////////////////////
	// '/artist/' route
	//// Loads a view for all artists
	this.visAll = function(req,res){
		var context = {'data': data}
		res.render('all', context); // Send response
	}
	// END this.visAll
	////////////////////////////////////////






}
// END artistsController
////////////////////////////////////////

////////////////////////////////////////
// Create new instance of artistsController
module.exports = new artistsController();