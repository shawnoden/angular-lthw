{% raw %}
var app = angular.module('app', []);

app.controller('ParentController', ['$scope', function($scope) {
  
  $scope.parentName = 'Bigger';
  
}]);


app.controller('ChildController', ['$scope', function($scope) {
  
  $scope.childName = 'Smaller';
  
}]);

{% endraw %}
