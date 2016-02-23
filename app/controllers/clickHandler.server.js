'use strict';

var Users = require('../models/users.js');

function ClickHandler () {

	this.stampIt = function (req, res) {
		var result;
		if (req.params.timestamp){
			var timestamp = Date.parse(req.params.timestamp);
			result = timestamp;
		}else{
			result = "error"
		}
		
		

		res.json(result);
	};


}

module.exports = ClickHandler;
