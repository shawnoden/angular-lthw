var app = angular.module('app',[]);

app.factory('aService', function(){
  
  var service = {
      getName: function() { return 'A'; } 
  };
  return service;
  
});

app.factory('bService', function(){
  
  var service = {
      getName: function() { return 'B'; } 
  };
  return service;
  
});

app.factory('cService', function() {
  
  var service = {
      getName: function() { return 'C'; } 
  };
  return service;
  
});

app.controller('DependencyController', ['$scope', '$window',
  function($scope, $window){
  
    $scope.getNames = function() {

      $window.alert('Hello');
      
      return '';
      
    };
  
  }
]);

