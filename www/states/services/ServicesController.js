(function(){
  "use strict";

  angular
    .module('app')
    .controller('Services', Services);

  Services.$inject = ['Specialists', '$state'];
  function Services(Specialists, $state) {
    var vm = this;

    vm.title = 'Services';
    vm.servicesList = Object.keys(Specialists.getServices());
    vm.back = back;


    function back() {
      $state.go('FindSpecialists');
    }

  }

})();
