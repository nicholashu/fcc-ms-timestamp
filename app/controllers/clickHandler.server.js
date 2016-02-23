'use strict';

var Users = require('../models/users.js');

function ClickHandler () {
	
	function timeConverter(UNIX_timestamp){
		  var a = new Date(UNIX_timestamp);
		  var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
		  var year = a.getFullYear();
		  var month = months[a.getMonth()];
		  var date = a.getDate();
		  var time = date + ' ' + month + ' ' + year ;
		  return time;
	}

	this.stampIt = function (req, res) {
		var result = {
			unix: 	"",
			natural: ""	
		};
		if (req.params.timestamp){
			var timestamp = Date.parse(req.params.timestamp);
			result.unix = timestamp;
			result.natural = timeConverter(timestamp);
		}else{
			result = "error"
		}
		
		

		res.json(result);
	};


}

module.exports = ClickHandler;
