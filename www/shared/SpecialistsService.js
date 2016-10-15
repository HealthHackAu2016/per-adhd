(function () {
  "use strict";

  angular
    .module('app')
    .factory('Specialists', Specialists);

  function Specialists() {

    var service = {};

    service.getServices = getServices;


    function getServices() {
      var mockData = {
        paediatritions: [
          {
              name: 'Mandy',
              number: '000-000'
          }
        ],
        psychs: [
            {
              name: 'Bob',
              number: '111-111'
            }
        ]
      };

      return mockData;
    }

    return service;
  }

})();
