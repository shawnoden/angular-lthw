{% raw %}
var app = angular.module('app',[]);

app.controller('movieController', ['$scope', function($scope){
    
  $scope.movies = [
    {
      title:'The Wizard of Oz', 
      year:'1939', 
      thumbnail:'images/the-wizard-of-oz.jpg' 
    },
    { 
      title:'Citizen Kane', 
      year:'1941', 
      thumbnail:'images/citizen-cane.jpg' 
    },
    { 
      title:'The Godfather', 
      year:'1972', 
      thumbnail:'images/the-godfather.jpg' 
    },
    { 
      title:'The Third Man', 
      year:'1949', 
      thumbnail:'images/the-third-man.jpg' 
    },
    { 
      title:'A Hard Day\'s Night', 
      year:'1964', 
      thumbnail:'images/a-hard-days-night.jpg' 
    }
  ];
  
}]);

{% endraw %}
