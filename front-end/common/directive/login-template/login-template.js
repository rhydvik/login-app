angular.module('common').directive('loginTemplate',['$http','$state','$window', function($http,$state,$window) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
          showlogin : "="
        },
        templateUrl: 'common/directive/login-template/login-template.html',
        link: function(scope, element, attrs, fn) {

          scope.msg = '';
          scope.submit = function(){

            $http({
              url: 'http://ec2-52-221-219-81.ap-southeast-1.compute.amazonaws.com:9000/login',
              //url:'http://localhost:3000/login',
              method: "POST",
              data: JSON.stringify(scope.loginInfo),
              headers: {'Content-Type': 'application/json'}
            }).then(function successCallback(response) {
                console.log(response);
                if (response.data.user === 'valid') {
                  $state.go('profile');
                }
                else {
                  scope.msg = "User Not registered/Invalid Credentials";
                }
             });
          };

        }
    };
}]);
