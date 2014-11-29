{% raw %}
var app = angular.module('app', []);

app.controller('ExpressionController', ['$scope', function ($scope) {
  
  $scope.first = 1;
  $scope.last = 10;
  $scope.colours = ['red', 'green', 'blue'];
  
}]);


{% endraw %}
