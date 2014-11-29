var app = angular.module('app',[]);

app.factory('userService', [function(){
  
  var service = {
    getName: function() { return 'Dumbledore'; }, 
    getRole: function() { return 'Wizard'; } 
  };
  
  return service;
  
}]);

app.factory('profileService', ['userService', function(userService){
  
  var service = {
    getTitle: function() {
      return userService.getName() + ' the ' + userService.getRole(); 
    } 
  };
  
  return service;
  
}]);

app.controller('ServiceDependencyController', ['$scope', 'profileService',
  function($scope, profileService){
  
    $scope.getTitle = function() {
      return profileService.getTitle();
    };
  
  }
]);

