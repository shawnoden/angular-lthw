{% raw %}
angular.module('moduleExample', [])
  .controller('PageController', ['$scope', PageController]);

function PageController($scope) {
  
  $scope.name = 'Angular';
  
  $scope.getTime = function() {
    return new Date();
  };
  
}
{% endraw %}
