{% raw %}
var app = angular.module('app',[]);

app.controller('CalcController', ['$scope', function ($scope) {
  
  $scope.cube = function(n) {
    n = n || 0;
    return n * n * n; 
   };
   
}]);



{% endraw %}
