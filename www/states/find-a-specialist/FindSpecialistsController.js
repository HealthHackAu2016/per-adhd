(function () {
  "use strict";

  angular
    .module('app')
    .controller('FindSpecialistsController', FindSpecialistsController);

  FindSpecialistsController.$inject = ['$state'];
  function FindSpecialistsController($state) {
    var vm = this;

    vm.title = 'Find a Specialist';
    vm.menuOptions =
    {
      "Find by Service": 'specialistType',
      "Find by Area": 'area',
      "Find by Speciality": 'expertise'
    };
    vm.listKeys = listKeys;
    vm.searchText = "";
    vm.search = search;
    vm.filterBy = filterBy;

    function search() {
      console.log(vm.searchText);

    }

    function filterBy(filterType, title) {
      $state.go('filter', {filterBy: filterType, title: title});
    }

    function listKeys(object) {
      return Object.keys(object);
    }


  }

})();
