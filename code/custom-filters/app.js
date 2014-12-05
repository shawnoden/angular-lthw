var app = angular.module('app',[]);

app.filter('leet', function(){
    
  return function leet(text) {
    var s = text
              .replace('a', '@')
              .replace('e', '3')
              .replace('i', '1')
              .replace('o', '0');
    return s;
  };
  
});



