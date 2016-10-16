(function () {
  "use strict";

  angular
    .module('app')
    .factory('SpecialistsService', SpecialistsService);

  function SpecialistsService() {

    var service = {};

    service.getBy = getBy;
    service.getAll = getAll;
    service.prettyList = prettyList;

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
          expertise: ['Children', 'ADHD', 'Being Awesome', 'Battling Aliens', 'Fist Fights'],
          area: 'woop woop',
          name: 'Bob',
          number: '111-111'
        },
        {
          specialistType: 'Paediatritions',
          expertise: ['Infants 0- 2 years', 'children 2-5 years', 'children 5-12 years', 'adolescents', 'Autism assessments', 'developmental delay assessments', 'developmental challenges/concerns/delay', 'behavioural challenges/concerns', 'attention', 'learning and behaviour problems', 'General Paediatric Assessments',  'Multidisciplinary Paediatric Clinic', 'Gastroenterologist', 'Hepatologist', 'Neurologist', 'Paediatric Surgeon', 'Respiratory specialist', 'Cardiologist', 'Dietitian', 'Paediatric endoscopy services', 'Sleep study', 'Paediatric EEG service', 'Paediatric ECHO'],
          name: 'Dr Nikki Panotidis',
          clinicName: 'Perth Paediatrics',
          address: 'Suite 5/2 McCourt Street',
          suburb: 'West Leederville',
          area: 'Central Metropolitan',
          email: 'contact@perthpaediatrics.com.au',
          website: 'http://www.perthpaediatrics.com.au/',
          number: '6162 1615'
        }
      ];

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
