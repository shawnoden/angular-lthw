var app = angular.module('app', []);

app.controller('FilterController', ['$scope', FilterController]);

function FilterController($scope) {

  $scope.name = 'Angular';
  $scope.PI = Math.PI;
  $scope.amount = 12345.6789;
  $scope.now = new Date();
  $scope.pet = { name:'Fluffy', type:'cat' };
  $scope.weekday = 'Monday';
  $scope.pageCode = 'page-123';
  
}
