var app = angular.module('app', []);

app.controller('FilterController', ['$scope', '$filter', FilterController]);

function FilterController($scope, $filter) {

  var name = 'Angular';
  var PI = Math.PI;
  var amount = 12345.6789;
  var now = new Date();
  var pet = { name:'Fluffy', type:'cat' };
  var weekday = 'Monday';
  var pageCode = 'page-123';

  $scope.upper = $filter('uppercase')(name); 
  $scope.lower = $filter('lowercase')(name); 
  $scope.pi = $filter('number')(PI, 2); 
  $scope.amount = $filter('number')(amount); 
  $scope.currency = $filter('currency')(amount); 
  $scope.shortDate = $filter('date')(now, 'short'); 
  $scope.mediumDate = $filter('date')(now, 'medium'); 
  $scope.petJSON = $filter('json')(pet);
  $scope.weekdayAbbr = $filter('limitTo')(weekday, 3);
  $scope.weekdayAbbrUpper = $filter('uppercase')($scope.weekdayAbbr);
  $scope.pageNumber = $filter('limitTo')(pageCode, -3);
  
}
