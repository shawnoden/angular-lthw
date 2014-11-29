var app = angular.module('app',[]);

app.factory('userService', function(){
  
  var user = {
    id: 100,
    name: 'Rumpelstiltskin'
  };
  
  var userService = {
    getCurrentUser: function() {
      return user;
    }
  };
  
  return userService;
  
});

app.controller('UserController', ['$scope', 'userService', function($scope, userService){
  
  $scope.getUserName = function(a, b) {
    var user = userService.getCurrentUser();
    return user.name;
  };
  
}]);
