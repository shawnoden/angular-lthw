var app = angular.module('app',[]);

app.controller('CalcController', ['$scope', CalcController]);

function CalcController($scope) {
  
  $scope.cube = function(n) {
    n = n || 0;
    return n * n * n; 
   };
   
}

