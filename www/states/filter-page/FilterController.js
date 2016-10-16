(function(){
  "use strict";

  angular
    .module('app')
    .controller('FilterController', FilterController);

  FilterController.$inject = ['SpecialistsService', '$state', '$stateParams'];
  function FilterController(SpecialistsService, $state, $stateParams) {

    var vm = this;

    var filterType = $stateParams.filterBy;

    vm.title = $stateParams.title;
    vm.filterList = getFilterList();
    vm.getPersonList = getPersonList;
    vm.back = back;

    function getPersonList(filter){
      var personList = SpecialistsService.getBy(
        function(person) {
          if(Array.isArray(person[filterType])){
            return person[filterType].indexOf(filter) !== -1
          }
          return person[filterType] === filter;
        }
      );
      $state.go('specialist', {persons: personList, history: {state: 'filter',filterBy: $stateParams.filterBy, title: $stateParams.title}});
    }

    function getFilterList() {
      var types = [];
      SpecialistsService.getAll().forEach( function(specialist) {
        if(Array.isArray(specialist[filterType])) {
          specialist[filterType].forEach(function(tag) {
            if(types.indexOf(tag) === -1) types.push(tag)
          })
        }
        else if(types.indexOf(specialist[filterType]) === -1) types.push(specialist[filterType])
      });
      return types;
    }

    function back() {
      $state.go('findSpecialists');
    }

  }

})();
