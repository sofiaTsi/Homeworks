//Task_1:
const http = require( 'http' );
http.createServer( function ( request, response ) {
    if ( request.url == '/' ) {
        response.writeHead( 200, { 'Content-Type': 'text/html' } );
        response.end( '<h1>Welcome to the new Server!</h1>' );
    } else if ( request.url == '/about' ) {
        response.writeHead( 200, { 'Content-Type': 'text/html' } );
        response.end( '<h1>This is a simple http Node.js server</h1>' );
    } else if ( request.url == '/contact' ) {
        response.writeHead( 200, { 'Content-Type': 'text/html' } );
        response.end( '<h1>Contact us at contact@newserver.com</h1>' );
    } else {
        response.writeHead( 404, { 'Content-Type': 'text/html' } );
        response.end( '<h1>Page not found!</h1>' );
    }
} ).listen( 8000 );

console.log( 'http://127.0.0.1:8000/' );


//Task_2:
const http = require( 'http' );
const fs = require( 'fs' );

http.createServer( function ( request, response ) {
    let fileName = request.url.split( '=' );
    if ( fileName[ 0 ] == '/file?name' ) {
        fs.readFile( fileName[ 1 ], 'utf8', ( error, data ) => {
            if ( error ) {
                console.log( new Error() );
                response.writeHead( 404, { 'Content-Type': 'text/html' } );
                response.end( '<h1>File not Found!<h1>' );
            } else {
                response.writeHead( 200, { 'Content-Type': 'text/html' } );
                response.end( `<h1>${ data }</h1>` );
            }
        } );
    } else {
        response.writeHead( 404, { 'Content-Type': 'text/html' } );
        response.end( '<h1>Invalid route!</h1>' );
    }
} ).listen( 5000 );

console.log( 'http://127.0.0.1:5000/' );
