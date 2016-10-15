(function () {
  "use strict";

  angular
    .module('app')
    .factory('FindSpecialists', FindSpecialists);

  function FindSpecialists() {

    var service = {
      specialist1: {
        name: 'bob',
        speciality: 'children'
      }
    };

    service.getServices = getServices;


    function getServices() {
      return service.specialist1;
    }

    return service;
  }

})();
