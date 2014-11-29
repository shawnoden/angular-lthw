{% raw %}
var app = angular.module('app', []);

app.controller('HelloController', ['$scope', function ($scope) {
  
  $scope.greeting = 'Hello';
  
  $scope.user = {
      name: 'Controller'
  };
  
  $scope.getTime = function() {
    return new Date();
  };
  
}]);



{% endraw %}
