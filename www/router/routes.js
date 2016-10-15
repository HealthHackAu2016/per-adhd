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
      name: 'findSpecialists',
      url: '/find-specialists',
      templateUrl: '../states/find-a-specialist/find-specialists-view.html',
      controller: 'FindSpecialistsController',
      controllerAs: 'findSpecialists'
    };

    var filter = {
      name: 'filter',
      url: '/filter',
      params: {
        title: 'default',
        filterBy: null
      },
      templateUrl: '../states/filter-page/filter-view.html',
      controller: 'FilterController',
      controllerAs: 'filter'
    };

    var specialist = {
      name: 'specialist',
      url: '/specialist',
      params: {
        persons: []
      },
      templateUrl: '../states/specialist/specialist-view.html',
      controller: 'SpecialistController',
      controllerAs: 'specialist'
    };

    $urlRouterProvider.otherwise('/');
    $stateProvider.state(mainState);
    $stateProvider.state(findSpecialists);
    $stateProvider.state(filter);

  }

})();
