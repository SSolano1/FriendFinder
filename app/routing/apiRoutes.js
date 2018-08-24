var fs = require('fs');
module.exports = function(app, path) {

	app.get("/api/friends", function(req, res) {
		fs.readFile("app/data/friends.js", "utf8", function(err, data) {
			if (err) {
				return console.log(err);
			}
		else {
				res.json(JSON.parse(data));
			}
		});
	});

// get the results
	app.post("/api/friends", function(req, res) {
		var finalResult = [];
		var postResponse = JSON.stringify(req.body);

		fs.readFile('app/data/friends.js', function (err, data) {
		    var friends = JSON.parse(data);

		    var closestMatch = 0;
            var matchScore = 999999999999999;
            
		    // Loop through to find the closest match
		    for (var i = 0; i < friends.length; i++) {
		    	var spaceBetween = 0;
		    	for (var j = 0; j < friends[i]['answers[]'].length; j++) {
		    		spaceBetween += Math.abs((parseInt(req.body['answers[]'][j]) - parseInt(friends[i]['answers[]'][j])));
				}



				// If the space between the current listing is the closest to the user, update the closestMatch

				if(spaceBetween <= matchScore) {
					matchScore = spaceBetween;
					closestMatch = i;
		    	}
		    }
        finalResult.push(friends[closestMatch]);
        
		    // Add the new user to the existing array
		    friends.push(JSON.parse(postResponse));

		    // update the array
		    fs.writeFile("app/data/friends.js", JSON.stringify(friendFile));
			res.send(returnMe[0]);
		});
	});
}