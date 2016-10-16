(function(){
  "use strict";

  angular
    .module('app')
    .controller('SpecialistController', SpecialistController);

  SpecialistController.$inject = ['$stateParams', '$state', 'SpecialistsService'];
  function SpecialistController($stateParams, $state, SpecialistsService) {
    var vm = this;

    vm.prettyList = SpecialistsService.prettyList;
    vm.persons = $stateParams.persons;
    vm.title = 'Specialists';
    vm.back = back;
    vm.goToPerson = goToPerson;

    function goToPerson(person) {
      $state.go('person', {person: person ,history:{persons: vm.persons, history: $stateParams.history}});
    }

    function back(){
      $state.go($stateParams.history.state, {filterBy: $stateParams.history.filterBy, title: $stateParams.history.title});
    }

  }

})();
