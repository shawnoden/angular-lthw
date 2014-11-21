{% raw %}
var app = angular.module('app', []);

app.controller('HelloController', ['$scope', HelloController]);

function HelloController($scope) {
  
  $scope.name = 'Controller';
  
  $scope.getTime = function() {
    return new Date();
  };
  
}
{% endraw %}

