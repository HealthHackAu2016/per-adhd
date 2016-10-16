(function () {
  "use strict";

  angular
    .module('app')
    .controller('MainController', MainController);

  function MainController() {
    var vm = this;

    vm.title = "Welcome";

    vm.items = [
      {
        text: 'Find a Specialist',
        imgSource: '../img/gfx_doctor.png',
        state: 'findSpecialists'
      }
    ]

  }

})();
