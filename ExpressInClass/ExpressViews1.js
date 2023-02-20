//https://www.tutorialspoint.com/expressjs/expressjs_url_building.htm
var express = require('express');
var app = express();
// Use the 'pug' templateing engine
app.set('view engine', 'pug');
// Serve pages out of the ./views folder
app.set('views','./views');
app.use( express.static('public'));

// Add this app for PUG work next
app.get('/firstView', function(req, res){
    res.render('firstPug')


    ;
});
app.get('/passIt', function( req, res){
    res.render('pugPass', {
        name: "Dave",
        url: "http://www.aurora.edu"
    });
})
app.get('/parts1', function( req, res){
    res.render('partsPug');
})

let port = 3000;
app.listen( port, () => {
    console.log(`listing on http://localhost:${port}`);
});