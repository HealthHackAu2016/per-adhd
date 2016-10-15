(function(){
  "use strict";

  angular
    .module('app')
    .controller('SpecialistController', SpecialistController);

  SpecialistController.$inject = ['$stateParams'];
  function SpecialistController($stateParams) {
    var vm = this;

    vm.persons = $stateParams.persons;

    vm.title = 'Specialists';

  }

})();
