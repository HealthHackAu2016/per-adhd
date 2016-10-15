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
      templateUrl: '../states/main/main-view.html',
      controller: 'MainController',
      controllerAs: 'main'
    };

    var findSpecialists = {
      name: 'FindSpecialists',
      url: '/find-specialists',
      templateUrl: '../states/find-a-specialist/find-specialists-view.html',
      controller: 'FindSpecialists',
      controllerAs: 'findSpecialists'
    };

    var services = {
      name: 'services',
      url: '/services',
      templateUrl: '../states/services/services-view.html',
      controller: 'Services',
      controllerAs: 'services'
    };

    $urlRouterProvider.otherwise('/');
    $stateProvider.state(mainState);
    $stateProvider.state(findSpecialists);
    $stateProvider.state(services);
  }

})();
