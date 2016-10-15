(function () {
  "use strict";

  angular
    .module('app')
    .factory('SpecialistsService', SpecialistsService);

  function SpecialistsService() {

    var service = {};

    service.getBy = getBy;
    service.getAll = getAll;

    var mockData =
      [
        {
          specialistType: 'Paediatritions',
          expertise: ['ADHD', 'Sky Diving', 'Being Awesome'],
          area: 'Joondalup',
          name: 'Mandy',
          number: '000-000'
        },
        {
          specialistType: 'Psych',
          expertise: ['Children', 'ADHD', 'Being Awesome'],
          area: 'woop woop',
          name: 'Bob',
          number: '111-111'
        }
      ];

    function getBy(getterFunction) {
      if(getterFunction ==  null) return mockData;
      else {
        service.currentList = mockData.filter(getterFunction);
        return service.currentList;
      }
    }

    function getAll() {
      return mockData;
    }

    return service;
  }
})();
