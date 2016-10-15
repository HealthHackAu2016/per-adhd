// vim: ts=2: sw=2: set expandtab:
(function(){
"use strict";
  var download = require('download');
  var fs = require('fs');
  var path = require('path');

  require('pdfjs-dist');


  function loadSiteList() {
    var fn = path.resolve(__dirname, 'pmh_sites.json');
    return JSON.parse(fs.readFileSync(fn, 'utf8'));
  }
  var siteList = loadSiteList();
  console.log(siteList);

  var downloadedPromises = {};
  var occupations = [];
  for(var occupation in siteList){
    if(!siteList.hasOwnProperty(occupation)) continue;
    var url = siteList[occupation];
    downloadedPromises[occupation] = download(url).then(
      function(pdfStream) {
        console.log(pdfStream.length);
        return PDFJS.getDocument(pdfStream)
          .then( (pdf) => pdf.getPage(1))
          .then( (page) => page.getTextContent())
          .then( function(content) {
            console.log(content) //.items.map( (item) => item.str)
          })
        }
    );
  }
  Promise.all();
 })();
