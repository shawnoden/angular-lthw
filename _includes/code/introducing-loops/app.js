{% raw %}
var app = angular.module('app',[]);

app.controller('movieController', ['$scope', function($scope){
    
  $scope.movies = [
    { title:'The Wizard of Oz', year:'1939', genre:'Family' },
    { title:'Citizen Kane', year:'1941', genre:'Drama' },
    { title:'The Godfather', year:'1972', genre:'Drama' },
    { title:'The Third Man', year:'1949', genre:'Mystery' },
    { title:'A Hard Day\'s Night', year:'1964', genre:'Comedy' }
  ];
  
}]);



{% endraw %}
