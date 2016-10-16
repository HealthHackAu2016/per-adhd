(function () {
  "use strict";

  angular
    .module('app')
    .controller('FilterController', FilterController);

  FilterController.$inject = ['SpecialistsService', '$state', '$stateParams'];
  function FilterController(SpecialistsService, $state, $stateParams) {

    var vm = this;

    var filterType = $stateParams.filterBy;

    vm.title = $stateParams.title;
    vm.filterList = [];
    vm.getPersonList = getPersonList;
    vm.back = back;
    vm.prettyTitle = SpecialistsService.prettyTitle;

    getFilterList();

    function getPersonList(filter) {
      SpecialistsService.getBy(
        function (person) {
          if (Array.isArray(person[filterType])) {
            if(filter == 'Unlisted'){
              return person[filterType].indexOf('') !== -1
            }
            else  return person[filterType].indexOf(filter) !== -1
          }
          if(filter == 'Unlisted') {
            return person[filterType] === ''
          }
          return person[filterType] === filter;
        }
      ).then(function (personList) {
        $state.go('specialist', {
          persons: personList,
          history: {state: 'filter', filterBy: $stateParams.filterBy, title: $stateParams.title}
        });
      });
    }

    function getFilterList() {
      var types = [];
      SpecialistsService.getAll().then(
        function (list) {
          list.forEach(function (specialist) {
            if (Array.isArray(specialist[filterType])) {
              specialist[filterType].forEach(
                function (tag) {
                  if (types.indexOf(tag) === -1) types.push(tag)
                })
            }
            else if (types.indexOf(specialist[filterType]) === -1) types.push(specialist[filterType])
          });
          types = types.map(
            function (value) {
              return value !== ''? value : 'Unlisted';
            }
          );
          types.sort();
          vm.filterList = types;
        });
    }

    function back() {
      $state.go('findSpecialists');
    }

  }

})();
