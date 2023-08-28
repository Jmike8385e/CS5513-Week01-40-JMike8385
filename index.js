/* define a variable and place
   into it the http package (shared code) from node.js */

//'let' declares a variable, in this case the variable is 'myhttp'
//'require' is the method
//'http'is a code library that is pre-written in node.js, single or doubel quotes both work

let jerhttp = require('http');

// use dot notation in javascript to access an object and its methods (commands) and properties
// createServer() takes some arguments to make it provide a useful http server
// 1: function (block of code) that will be run whenever the server receives an http request

//using the variable declared above 'myhttp' which then connects to a retrieved variable 'createServer'
//evewrything that starts with 'my' is user created, others are built in

let jerserver = jerhttp.createServer(
  function( jerrequest, jerresponse ) {
    console.log( jerrequest.url );

    let jertext;
    if ( jerrequest.url === "/luke" ) {
      jertext = "I ain't yo daddy";
    } else {
      jertext = "No idea what you just said. Try again please.";
    }
    // writeHead() creates an http response header, including the status code (200 OK), the content type
    jerresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    jerresponse.end( jertext );
  }
);

// ask http to start listening on a tcp port for incoming http requests

// listen() takes 2 args: 1: tcp port #, 2: string of the ip address to listen (0.0.0.0)
jerserver.listen(8080, "0.0.0.0");

console.log("Let's get this server started!");
