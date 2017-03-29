angular.module('common').directive('dashboard',['$window','$state', function($window,$state) {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'common/directive/dashboard/dashboard.html',
        link: function(scope, element, attrs, fn) {
          scope.name = $window.localStorage.getItem('name');
          scope.email = $window.localStorage.getItem('email');
          scope.logout = function(){
            $window.localStorage.clear();
            console.log('i am here');
            $state.go('home');
          };

        }
    };
}]);
