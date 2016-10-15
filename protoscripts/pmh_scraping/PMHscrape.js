(function(){
	"use strict";
	var fs = require('fs');



  function loadSiteList(){
    fs.readFile(require('path').resolve(__dirname, 'pmh_sites.json'), 'utf8', function (err,data) {
      if (err) {
        throw err;
      }
      var sitesListJson = JSON.parse(data);
      return sitesListJson;
    });

    

  }

 })();
