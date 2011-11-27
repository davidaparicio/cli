/* server.js: run this with Node.js in the publish/ folder to start your server.
 * Copyright © 2011 Jan Keromnes, Thaddee Tyl. All rights reserved.
 * Code covered by the LGPL license. */


// Import the Camp
var Camp = require ('./camp/camp.js'),
    Sys  = require ('util'),
    exec = require ('child_process').exec;

// CLI functions
function puts(error, stdout, stderr) { sys.puts(stdout) }

Camp.add('exec',function(data){
  exec(data.command, function(err, out){
    Camp.Server.emit('ret', out);
  });
},function ret(output){
  return {result: output};
});

// Options
var options = {
  port: +process.argv[2],
  secure: process.argv[3],
  debug: +process.argv[4]
}

// Let's rock'n'roll!
Camp.start(options);
