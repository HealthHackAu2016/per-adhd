(function(){
  "use strict";

  angular
    .module('app')
    .controller('ControllerName', ControllerName);

  ControllerName.$inject = ['somePlugin'];
  function ControllerName(somePlugin) {
    var vm = this;

    vm.VariableYouWantAccessibleToTheDom = 'foo';

  }

})();
