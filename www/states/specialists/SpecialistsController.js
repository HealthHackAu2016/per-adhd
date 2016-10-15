(function(){
  "use strict";

  angular
    .module('app')
    .controller('SpecialistsController', SpecialistsController);

  SpecialistsController.$inject = ['SpecialistsService', '$state'];
  function SpecialistsController(SpecialistsService, $state) {
    var vm = this;

    vm.title = 'Specialists';
    vm.back = back;

    vm.specialistsList = SpecialistsService.currentList;

    function back() {
      $state.go(SpecialistsService.lastGetBy);
    }

  }

})();
