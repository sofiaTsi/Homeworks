//Task_1:
/* const http = require( 'http' );
http.createServer( function ( request, response ) {
    if ( request.url === '/' ) {
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

console.log( 'http://127.0.0.1:8000/' ); */


//Task_2:
const http = require( 'http' );
const url = require( 'url' );
const fs = require( 'fs' );
const path = require( 'path' );

http.createServer( function ( request, response ) {
    const parsedUrl = url.parse( request.url, true );
    console.log( parsedUrl );
    const pathName = parsedUrl.pathname;

    if ( parsedUrl.query.name && pathName === '/file' ) {
        const fileName = parsedUrl.query.name; //'data.txt'
        const filePath = path.join( __dirname, fileName );
        console.log( 'FilePath: ', filePath );
        fs.readFile( filePath, 'utf-8', ( error, data ) => {
            if ( error ) {
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

} );
server.listen( 5000, () => {
    console.log( 'http:;//127.0.0.1:5000/' );
} );