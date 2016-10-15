(function(){
	"use strict";
  var download = require('download');
	var fs = require('fs');
  var path = require('path');

  //C:\Users\rowan\IdeaProjects\per-adhd\node_modules\pdf.js
  // require.config({paths: {'pdfjs': '../../src'}});
  // require(['pdfjs/display/api', 'pdfjs/display/global'], function (api, global) {
  //   // In production, change this to point to the built `pdf.worker.js` file.
  //   global.PDFJS.workerSrc = '../../src/worker_loader.js';
  // })

  var PDFParser = require('pdfreader');


  function loadSiteList() {
    var fn = path.resolve(__dirname, 'pmh_sites.json');
    return JSON.parse(fs.readFileSync(fn, 'utf8'));
  }
  var siteList = loadSiteList();
  console.log(siteList);

  var downloadedPromises = {};
  var occupations = [];
  for(var occupation in siteList){
    if(!siteList.hasOwnProperty(occupation))continue;
    var url = siteList[occupation];
    downloadedPromises[occupation] = download(url).then(
      function(pdfStream) {
        console.log(pdfStream.length);
        return pdfParser.getDocument(pdfStream)
          .then( (pdf) => pdf.parseFileItem(1))
          .then( (page) => page.getTextContent())
        }
    );
  }
  Promise.all();
 })();
