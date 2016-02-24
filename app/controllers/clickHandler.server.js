'use strict';

var Users = require('../models/users.js');

function ClickHandler () {
	
	function unixToNatural(UNIX_timestamp){
		  var a = new Date(UNIX_timestamp*100);
		  console.log(a);
		  var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
		  var year = a.getFullYear();
		  var month = months[a.getMonth()];
		  var date = a.getDate();
		  var time = date + ' ' + month + ' ' + year ;
		  return time;
	}
	
	function naturalToUnix(NAT_timestamp){
		  var a = new Date(NAT_timestamp);
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
		var timestamp;
		if (req.params.timestamp){
			if (isNaN(Number(req.params.timestamp))){
				timestamp = Date.parse(req.params.timestamp)/100;
				result.unix = timestamp;
				result.natural = req.params.timestamp;
			}else{
				timestamp = req.params.timestamp;
				result.unix = timestamp;
				result.natural = unixToNatural(timestamp);
			};
		}else{
			result = "error"
		}
		
		

		res.json(result);
	};


}

module.exports = ClickHandler;
