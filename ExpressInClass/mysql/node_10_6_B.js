const uc = require("upper-case")
const http = require("http")


http.createServer( function ( req, res ){
    res.writeHead( 200, {'Content-type' : 'text/html'});
    res.write( uc.upperCase("<h1> Testing ... This is a test</h1> Hello"))
    res.end()
}).listen(8888);