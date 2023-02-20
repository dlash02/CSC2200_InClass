var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.get('/components', function(req, res){
    res.render('main');
});

let port = 3000;
app.listen( port, () => {
    console.log(`listing on http://localhost:${port}`);
});