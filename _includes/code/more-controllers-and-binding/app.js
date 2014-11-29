{% raw %}
var app = angular.module('app',[]);

app.controller('CountController', ['$scope', function($scope) {
  
  $scope.total = 0;
  
  $scope.increment = function(amount) {
    $scope.total += amount;
  };
   
  $scope.decrement = function(amount) {
    $scope.total -= amount;
  };
   
}]);

{% endraw %}
