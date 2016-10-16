(function(){
  "use strict";

  angular
    .module('app')
    .controller('PersonDetailsController', PersonDetailsController);

  PersonDetailsController.$inject = ['$stateParams', '$state', 'SpecialistsService'];
  function PersonDetailsController($stateParams, $state, SpecialistsService) {
    var vm = this;

    vm.personDetails = $stateParams.person;

    vm.title = vm.personDetails.name;

    vm.back = back;
    vm.keys = keys;
    vm.prettyList = SpecialistsService.prettyList;
    vm.prettyTitle = SpecialistsService.prettyTitle;

    function keys(object) {
      var keys = [];

      for(var key in object) {
        if(!object.hasOwnProperty(key) || key === '$$hashKey') continue;
        keys.push(key);
      }
     return keys;
    }

    function back() {
      $state.go('specialist', {history: $stateParams.history.history, persons: $stateParams.history.persons});
    }

  }

})();
