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
	// '/artist' route
	//// Loads the entire JSON file
	this.getAll = function(req,res){ 
		res.json(data);
	}
	// END this.getAll
	////////////////////////////////////////


	////////////////////////////////////////
	// '/artist/:artistname' route
	//// Loads a single artist entry
	this.getOne = function(req,res){
		// The variable being passed into template
		// var context;
		//Iterate through JSON data
		for (each in data) {
			//If data.name equals request parameter
			if (data[each].name.toLowerCase() == req.params.artistname.toLowerCase()) {
				var context = data[each];
				console.log(context)
				res.render('index', context); // Send response
			} // If
		} // For

		// If we haven't sent a response
		//// Spit out the request parameter
		if (!context){
			res.json("Couldn't find artist: " + req.params.artistname);	
		}	
	}
	// END this.getOne
	////////////////////////////////////////

}
// END artistsController
////////////////////////////////////////

////////////////////////////////////////
// Create new instance of artistsController
module.exports = new artistsController();