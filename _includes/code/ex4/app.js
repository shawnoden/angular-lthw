{% raw %}
var app = angular.module('app', []);

app.controller('ParentController', ['$scope', ParentController]);
app.controller('ChildController', ['$scope', ChildController]);

function ParentController($scope) {
  
  $scope.parentName = 'Bigger';
  
}

function ChildController($scope) {
  
  $scope.childName = 'Smaller';
  
}
{% endraw %}
