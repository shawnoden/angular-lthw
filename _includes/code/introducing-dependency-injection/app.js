{% raw %}
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

app.controller('DependencyController', ['$scope', 'aService', 'bService', 'cService',
  function($scope, aService, bService, cService){
  
    $scope.getNames = function() {
      
      var names = [];
      names.push( aService.getName() );
      names.push( bService.getName() );
      names.push( cService.getName() );
      
      return names.join(', ');
      
    };
  
  }
]);

{% endraw %}
