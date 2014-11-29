{% raw %}
var app = angular.module('app', []);

app.controller('FilterController', ['$scope', 'filterFilter', 
  function ($scope, filterFilter) {

    var colours = ['red','reddish','orange','umber','yellow','green','blue',
                   'indigo','violet','ochre','forest green','tardis blue'];
    
    var people = [];
    people.push({ id:1, role:'sales', name:'Swashbuckler'});
    people.push({ id:2, role:'sales', name:'Mugglewamp'});
    people.push({ id:3, role:'sales', name:'Komodor'});
    people.push({ id:4, role:'tech', name:'Ableton'});
    people.push({ id:5, role:'tech', name:'Merrybob'});
    people.push({ id:6, role:'management', name:'The Captain'});
    
    // Filter using a substring
    $scope.blueColours = filterFilter(colours, 'blue');
    
    // Filter using an object
    $scope.techPeople = filterFilter(people, {role:'tech'});
    
    // Filter using function
    $scope.personById = filterFilter(people, function(person){
      return person.id === 6;
    });
  
  }
]);

{% endraw %}
