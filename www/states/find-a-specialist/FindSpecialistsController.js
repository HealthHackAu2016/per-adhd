(function () {
  "use strict";

  angular
    .module('app')
    .controller('FindSpecialists', FindSpecialists);

  FindSpecialists.$inject = ['FindSpecialists', '$state'];
  function FindSpecialists(FindSpecialists, $state) {
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
      console.log(vm.search);
    }

    function findByService() {
      $state.go('services')
    }

    function findByArea() {
      return FindSpecialists.specialist1.name;
    }

    function findBySpeciality() {
      return FindSpecialists.specialist1.name;
    }

    function saved() {
      return FindSpecialists.specialist1.name;
    }

    function listKeys(object) {
      return Object.keys(object);
    }

    function back() {
      $state.go('main');
    }


  }

})();
