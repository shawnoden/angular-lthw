var fs = require('fs');

var pages = [
  {id:'the-setup', title:'The Setup'},
  {id:'introducing-binding', title:'Introducing Binding'},
  {id:'binding-and-the-dom', title:'Binding and the DOM'},
  {id:'introducing-modules-and-scope', title:'Introducing Modules and Scopes'},
  {id:'introducing-controllers', title:'Introducing Controllers'},
  {id:'nested-controllers', title:'Nested Controllers'},
  {id:'introducing-expressions', title:'Introducing Expressions'},
  {id:'controllers-and-binding', title:'Controllers and Binding'},
  {id:'more-controllers-and-binding', title:'More Controllers and Binding'},
  {id:'introducing-services', title:'Introducing Services'},
  {id:'introducing-dependency-injection', title:'Introducing Dependency Injection'},
  {id:'services-with-dependencies', title:'Services With Dependencies'},
  {id:'introducing-filters', title:'Introducing Filters'},
  {id:'using-filters-inside-controllers', title:'Using Filters Inside Controllers'},
  {id:'filtering-arrays', title:'Filtering Arrays'},
  {id:'custom-filters', title:'Custom Filters'},
  {id:'more-custom-filters', title:'More Custom Filters'},
  {id:'introducing-repeaters', title:'Introducing Repeaters'},
  {id:'more-repeaters', title:'More Repeaters'},
  {id:'introducing-xhr', title:'Introducing XHR'}
];

var makePage = function(i, page) {
  
  var lines = [];
  
  lines.push('---');
  lines.push('title: ' + page.title);
  lines.push('layout: main');
  lines.push('---');
  lines.push('');
  lines.push('{% include book/' + page.id + '.md %}');
  lines.push('');
  lines.push('---');
  lines.push('');
  
  var p = '';
  if (i>0) {
    p += '[Previous Exercise](ex' + (i-1) + '.html)';
  }
  
  if (i>0 && i<pages.length-1) {
    p += ' / ';
  }
  
  if (i<pages.length-1) {
    p += '[Next Exercise](ex' + (i+1) + '.html)';
  }
  
  lines.push(p);
  
  return lines.join('\n');

};

function copyFile(source, target, cb) {
  var cbCalled = false;

  var rd = fs.createReadStream(source);
  rd.on("error", function(err) {
    done(err);
  });
  var wr = fs.createWriteStream(target);
  wr.on("error", function(err) {
    done(err);
  });
  wr.on("close", function(ex) {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}

var makePages = function() {
  
  for (var i=0; i<pages.length; i++) {
    
    (function(i){
      
      var page = pages[i];
      
      var outPath = __dirname + '/ex' + i + '.md';
      var content = makePage(i, page);
      
      fs.writeFile(outPath, content, function(err) {
        
        if (err) throw err;
        
        console.log(outPath);
        
      }); 
      
    })(i);
    
  }
  
};

var makeIndex = function() {

  var lines = [];
  
  for (var i=0; i<pages.length; i++) {
    var page = pages[i];
    lines.push('* [Exercise ' + i + ': ' + page.title + '](ex' + i + '.html)');
  }
  
  var outPath = __dirname + '/_includes/toc.md';
  var content = lines.join('\n');
  
  fs.writeFile(outPath, content, function(err) {
    
    if (err) throw err;
    
  }); 

};

    
makeIndex();
makePages();
    


