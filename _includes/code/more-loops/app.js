{% raw %}
var app = angular.module('app',[]);

app.controller('movieController', ['$scope', function($scope){
    
  $scope.movies = [
    { title:'The Wizard of Oz', year:'1939', genres:['Family', 'Musical', 'Fantasy'] },
    { title:'Citizen Kane', year:'1941', genres:['Drama', 'Mystery'] },
    { title:'The Godfather', year:'1972', genres:['Drama'] },
    { title:'The Third Man', year:'1949', genres:['Mystery'] },
    { title:'A Hard Day\'s Night', year:'1964', genres:['Comedy', 'Musical'] }
  ];
  
}]);



{% endraw %}
