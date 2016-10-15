// vim: ts=2: sw=2: set expandtab:
(function(){
"use strict";
  var download = require('download');
  var fs = require('fs');
  var path = require('path');

  require('pdfjs-dist');


  function processPdf(pdf){
    console.log(pdf.pdfInfo.numPages);
    var fullString = 'start '; //fix this - turn into a string builder

    var pagePromises = [];
    var pageStrings=[];
    for(var i = 2; i < pdf.pdfInfo.numPages; i++){
      console.log(i);
      pagePromises.push(pdf.getPage(i)
        .then( (page) => page.getTextContent())
        .then( function(content) {
          var pageString = 'pagestart ';
          content.items.forEach((item) => pageString += item.str);
          pageStrings.push(pageString);
        })
      );
    }

    return Promise.all(pagePromises).then(()=>{
      console.log(pageStrings);
      return pageStrings});
}

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
        return PDFJS.getDocument(pdfStream)
          .then( (pdf) => processPdf(pdf) )
        }
    );
  }
  Promise.all();
 })();
