{% raw %}
var app = angular.module('app', []);

app.controller('FilterController', [
  '$scope',
  'uppercaseFilter', 
  'lowercaseFilter', 
  'numberFilter', 
  'currencyFilter', 
  'dateFilter', 
  'jsonFilter', 
  'limitToFilter', 
  FilterController
]);

function FilterController(
  $scope, 
  uppercaseFilter,
  lowercaseFilter, 
  numberFilter, 
  currencyFilter, 
  dateFilter, 
  jsonFilter, 
  limitToFilter
){

  var name = 'Angular';
  var PI = Math.PI;
  var amount = 12345.6789;
  var now = new Date();
  var pet = { name:'Fluffy', type:'cat' };
  var weekday = 'Monday';
  var pageCode = 'page-123';

  $scope.upper = uppercaseFilter(name); 
  $scope.lower = lowercaseFilter(name); 
  $scope.pi = numberFilter(PI, 2); 
  $scope.amount = numberFilter(amount); 
  $scope.currency = currencyFilter(amount); 
  $scope.shortDate = dateFilter(now, 'short'); 
  $scope.mediumDate = dateFilter(now, 'medium'); 
  $scope.petJSON = jsonFilter(pet);
  $scope.weekdayAbbr = limitToFilter(weekday, 3);
  $scope.weekdayAbbrUpper = uppercaseFilter($scope.weekdayAbbr);
  $scope.pageNumber = limitToFilter(pageCode, -3);
  
}
{% endraw %}
