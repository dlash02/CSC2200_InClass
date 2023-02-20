var express = require('Express');
var app = express();
var router = require('./routerPrep.js');
//both index.js and things.js should be in same directory
app.use('/things', router);
let port = 3000;
app.listen( port, () => {
    console.log(`listing on http://localhost:${port}`);
});