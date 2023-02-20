//https://www.tutorialspoint.com/expressjs/expressjs_url_building.htm
var express = require('express');
var app = express();
// Use the 'pug' templateing engine
app.set('view engine', 'pug');
// Serve pages out of the ./views folder
app.set('views','./views');

// Add this app for PUG work next
app.get('/firstView', function (req, res) {
    res.render('firstPug');
 });
app.get('/firstOL', function (req, res) {
    res.render('firstPugOL');
});
app.get('/firstOL', function (req, res) {
    res.render('firstPugOL');
});
app.get('*', function (req, res) {
    res.send("Unsupported Route")
});
app.listen(3000);