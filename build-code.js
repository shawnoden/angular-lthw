var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var recursive = require('recursive-readdir');

var WRAP_START = '{% raw %}\n';
var WRAP_END = '{% endraw %}\n';

recursive('./code', function (err, filePaths) {

  filePaths.forEach(function(filePath){
    
    var inPath = __dirname + '/' + filePath;
    var outPath = __dirname + '/_includes/' + filePath;
    
    var codeDir = __dirname + '/_includes/code';
    var outDir = path.dirname(outPath);
    
    // Delete the code directory
    rimraf(codeDir, function(err){
      
      if (err) throw err;

      // Read the file
      fs.readFile(inPath, 'utf8', function(err, data){
        
        if (err) throw err;
        
        var out = WRAP_START + data + WRAP_END;
        
        // Make the output directory
        mkdirp(outDir, function(err) { 
          
          if (err) throw err;

          // Write the new file
          fs.writeFile(outPath, out, function(err) {
            
            if (err) throw err;
            
          }); 
          
        });
  
      });
      
    });

  });

});


