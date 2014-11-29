{% raw %}
var app = angular.module('app',[]);

app.factory('simpleCalc', function(){
  
  var calc = {
    add: function(a,b) { return a + b; },
    multiply: function(a,b) { return a * b; }
  };
  
  return calc;
  
});

app.controller('MyController', ['$scope', 'simpleCalc', function($scope, simpleCalc){
  
  $scope.add = function(a, b) {
    a = +a || 0;
    b = +b || 0;
    return simpleCalc.add(a, b);
  };
  
  $scope.multiply = function(a, b) {
    a = +a || 0;
    b = +b || 0;
    return simpleCalc.multiply(a, b);
  };
  
}]);

{% endraw %}
