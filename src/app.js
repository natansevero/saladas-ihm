(() => {
  angular.module('SaladaSaude', ['ngRoute'])
    .config($routeProvider => {
      $routeProvider
        .when('/select', {
          templateUrl: 'views/select.html',
          controller: 'SelectController',
          controllerAs: 'Select'
        })
        .when('/finish', {
          templateUrl: 'views/finish.html',
          controller: 'FinishController',
          controllerAs: 'Finish'
        })
        .otherwise({
          redirectTo: '/select'
        })
    })
    .controller('SelectController', SelectController)
    .controller('FinishController', FinishController);

    function SelectController() {
      let vm = this;

      vm.tamanhos = [

      ];

      vm.finalizar = function() {
        window.location.href = '#!/finish';
      }
    }

    function FinishController() {

    }
})();
