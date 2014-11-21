{% raw %}
var app = angular.module('app', []);

app.controller('FilterController', ['$scope', FilterController]);

function FilterController($scope) {

  $scope.name = 'Angular';
  $scope.PI = Math.PI;
  $scope.now = new Date();
  
}
{% endraw %}
