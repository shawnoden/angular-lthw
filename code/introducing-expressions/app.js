var app = angular.module('app', []);

app.controller('ExpressionController', ['$scope', ExpressionController]);

function ExpressionController($scope) {
  
  $scope.first = 1;
  $scope.last = 10;
  $scope.colours = ['red', 'green', 'blue'];
  
}
