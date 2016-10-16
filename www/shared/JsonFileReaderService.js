(function () {
  "use strict";

  angular
    .module('app')
    .factory('JsonFileReaderService', JsonFileReaderService);

  JsonFileReaderService.$inject = ['$http'];
  function JsonFileReaderService($http) {

    var service = {};

    service.readFile = readFile;

    function readFile() {
      return $http.get('default-data/auto_ped.json')
        .then(
          function success(res) {
            return res.data;
          },
          function failure(res) {
            console.log(res);
          }
        ).then(
          function(data) {
            return $http.get('default-data/auto_ped.json').then(
              function success(res) {
                return res.data.concat(res.data);
              },
              function failure(res) {
                console.log(res);
              }
            )
          }
        );
    }

    return service;


  }

})();
