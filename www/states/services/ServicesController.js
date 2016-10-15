(function(){
  "use strict";

  angular
    .module('app')
    .controller('Services', Services);

  Services.$inject = ['FindSpecialists'];
  function Services(FindSpecialists) {
    var vm = this;

    vm.title = 'foo';
    vm.getServices = getServices;

    function getServices() {
      return FindSpecialists.getServices();
    }

  }

})();
