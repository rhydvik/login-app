angular.module('common').directive('registerTemplate',['$http',function($http) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
          showregister: "=",
          showlogin : "="
        },
        templateUrl: 'common/directive/register-template/register-template.html',
        link: function(scope, element, attrs, fn) {

          scope.validform = false;
          scope.validName = true;
          scope.validEmail =  true;
          scope.registered = false;
          scope.msg={
            username :"",
            emai : "",
            password : "",
            name :"",
          };
          scope.user = {
            name:"",
            password:"",
            username : "",
            email : "",
          };

          // reqhular expressions
          var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          var nameRegex  = /^[a-zA-Z ]{2,30}$/;


          scope.registerUser= function(){
            if(scope.user.email ===""){
              scope.msg.email = "Email can not be empty";
              scope.validEmail= false;
            }else{
              scope.validEmail = emailRegex.test(scope.user.email);
            }

            if (scope.user.name ==="") {
               scope.msg.name = "Name can not be empty";
               scope.validName = false;
            }else{
              scope.validName = nameRegex.test(scope.user.name);
            }


            if (scope.user.password==="") {
              scope.msg.password = "Password can not be empty";
            }

            if (scope.user.username==="") {
              scope.msg.username = "Username can not be empty";
            }


            if (scope.validName && scope.validEmail ) {
              $http({
                // url: 'http://ec2-52-221-219-81.ap-southeast-1.compute.amazonaws.com:9000/register',
                url:'http://ec2-52-221-219-81.ap-southeast-1.compute.amazonaws.com:9000/register',
                method: "POST",
                data: JSON.stringify(scope.user),
                headers: {'Content-Type': 'application/json'}
              }).then(function successCallback(response) {
                  scope.showregister=false;
                  scope.showlogin=true;
              });
            }
          };
        }
    };
}]);
