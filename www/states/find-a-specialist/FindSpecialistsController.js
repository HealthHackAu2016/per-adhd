(function () {
  "use strict";

  angular
    .module('app')
    .controller('FindSpecialists', FindSpecialists);

  FindSpecialists.$inject = ['$state'];
  function FindSpecialists($state) {
    var vm = this;

    vm.title = 'Find a Specialist';
    vm.menuOptions =
    {
      "Find by Service": findByService,
      "Find by Area": findByArea,
      "Find by Speciality": findBySpeciality,
      "Saved": saved
    };
    vm.listKeys = listKeys;
    vm.back = back;
    vm.searchText = "";
    vm.search = search;


    function search() {
      console.log(vm.searchText);
    }

    function findByService() {
      return 'services';
    }

    function findByArea() {
      return null;
    }

    function findBySpeciality() {
      return null;
    }

    function saved() {
      return null;
    }

    function listKeys(object) {
      return Object.keys(object);
    }

    function back() {
      $state.go('main');
    }


  }

})();
