(function(){
	"use strict"
	var fs = require('fs')

	var sitesListJson

	fs.readFile('./phm_sites.json', 'utf8', function (err,data) {
		if (err) {
	  		throw err;
		};
		sitesListJson = JSON.parse(data)
	});
	
	console.log(sitesListJson);
 })()
