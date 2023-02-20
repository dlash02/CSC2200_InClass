var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.use(express.static('public'))
app.get('/components', function(req, res){
    res.render('main3');
});

app.listen(3000)