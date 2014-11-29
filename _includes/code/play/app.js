{% raw %}
var app = angular.module('app',[]);

app.factory('serviceA', ['serviceB', function(){

  return {};
  
}]);

app.factory('serviceB', ['serviceC', function(){

  return {};
  
}]);

app.factory('serviceC', ['serviceA', function(){

  return {};
  
}]);

app.controller('DependencyController', ['$scope', 'serviceA',
  function($scope, serviceA){
  
    $scope.getNames = function() {
      return 'Hello';
    };
  
  }
]);

{% endraw %}
