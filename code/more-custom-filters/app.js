var app = angular.module('app',[]);

app.filter('wordLimit', function(){
    
  return function wordLimit(text, count, showElipses) {
    
    var words = text.split(' ');
    var result = [];
    var i = 0;
    
    while (i<words.length && i<count) {
      result.push( words[i] );
      i++;
    }
    
    if (showElipses) {
      result.push('...');
    }
    
    return result.join(' ');
    
  };
  
});



