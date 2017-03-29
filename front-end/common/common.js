angular.module('common', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('common').config(['$stateProvider',function($stateProvider) {

    /* Add New States Above */
    $stateProvider.state('home', {
        url: '/home',
        controller:function($state,$stateParams,$window){
          var userAuthenticated = $window.localStorage.getItem('token');
          if (userAuthenticated !== null) {
            $state.go('profile');
          }else {
            $state.go('home');
          }
        },
        templateUrl: 'common/partial/main/main.html'
    })

    .state('profile',{
        url:'/profile',
        controller:function($state,$stateParams,$window){
          var userAuthenticated = $window.localStorage.getItem('token');
          if (userAuthenticated !== null) {
            $state.go('profile');
          }else {
            $state.go('home');
          }
        },
        templateUrl:'common/directive/profile-page/profile-page.html'
    });

}]);
