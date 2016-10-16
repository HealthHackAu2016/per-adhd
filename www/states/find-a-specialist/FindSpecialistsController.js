(function () {
  "use strict";

  angular
    .module('app')
    .controller('FindSpecialistsController', FindSpecialistsController);

  FindSpecialistsController.$inject = ['$state', 'SpecialistsService', '$ionicPopup'];
  function FindSpecialistsController($state, SpecialistsService, $ionicPopup) {
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
    vm.back = back;

    function search() {
      var persons = SpecialistsService.getBy(searchFilterFunction);
      if (persons.length > 0) $state.go('specialist', {
        persons: persons,
        history: {state: 'findSpecialists', filterBy: null, title: null}
      });
      else {
        $ionicPopup.alert({
          title: 'No results found'
        });
        vm.searchText = '';
      }
    }

    function searchFilterFunction(person) {
      for (var field in person) {
        if (!person.hasOwnProperty(field)) continue;

        if (Array.isArray(person[field])) {
          var found = false;

          person[field].forEach(
            function (value) {
              if (textComparator(value, vm.searchText)) found = true;
            }
          );
          if (found) return found;
        }
        else if (textComparator(person[field], vm.searchText)) return true;
      }
      return false;
    }

    function textComparator(dataString, searchString) {
      return dataString.toLowerCase().includes(searchString);
    }

    function filterBy(filterType, title) {
      $state.go('filter', {filterBy: filterType, title: title});
    }

    function listKeys(object) {
      return Object.keys(object);
    }

    function back() {
      $state.go('main');
    }


  }

})();
