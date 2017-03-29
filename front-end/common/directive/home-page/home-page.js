angular.module('common').directive('homePage', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'common/directive/home-page/home-page.html',
        link: function(scope, element, attrs, fn) {
          scope.buttonContainer = true;
          scope.showLoginBox = false;
          scope.showRegisterBox = false;
           scope.login = function(){
              scope.buttonContainer = false;
              scope.showRegisterBox=false;
              scope.showLoginBox = true;
           };

           scope.signup = function(){
             scope.showLoginBox= false;
             scope.showRegisterBox = true;
           };

        }
    };
});
