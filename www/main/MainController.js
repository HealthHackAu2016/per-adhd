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
        imgSource: '../img/default-avatar.png'
      },
      {
        text: 'Notes & Prep',
        imgSource: '../img/default-notes.png'
      }
    ]

  }

})();
