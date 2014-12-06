{% raw %}
var app = angular.module('app',[]);

app.controller('movieController', ['$scope', '$http', function($scope, $http){
  
  $http.get('movies.json').success(function(data) {
      $scope.movies = data;
    });
  
}]);

{% endraw %}
