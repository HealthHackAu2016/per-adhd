(function () {
  "use strict";

  angular
    .module('app')
    .factory('SpecialistsService', SpecialistsService);

  SpecialistsService.$inject = ['JsonFileReaderService'];
  function SpecialistsService(JsonFileReaderService) {

    var service = {};

    service.getBy = getBy;
    service.getAll = getAll;
    service.prettyList = prettyList;
    service.prettyTitle = prettyTitle;
    service.data = JsonFileReaderService.readFile().then(function(data){ return data});

    function prettyList(uglyList, lengthMax) {
      var maximumLength = lengthMax;
      if(maximumLength == null) maximumLength = Math.MAX_VALUE;
      var pretty = uglyList;

      if(Array.isArray(pretty)) pretty = pretty.join(", ");

      if(pretty.length > maximumLength) {
        pretty = pretty.substring(0, maximumLength) + '...';
      }

      return pretty;
    }

    function prettyTitle(word) {
      return word.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase()});
    }

    function getBy(getterFunction) {
      if(getterFunction ==  null) return service.data;
      else {
        service.currentList = service.data.then(function(data){return data.filter(getterFunction)});
        console.log(service.currentList);
        return service.currentList;
      }
    }

    function getAll() {
      return service.data;
    }

    return service;
  }
})();
