(function(){
  "use strict";

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider){
    var mainState = {
      name: 'main',
      url: '/',
      templateUrl: '../main/main-view.html',
      controller: 'MainController',
      controllerAs: 'main'
    };

    $urlRouterProvider.otherwise('/');
    $stateProvider.state(mainState);
  }

})();
