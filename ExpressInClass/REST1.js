var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
// var upload = multer();

var app = express();

//app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(upload.array());

//Require the Router we defined in movies.js
var movies = require('./RESTmovies.js');

//Use the Router on the sub route /movies
app.use('/movies', movies);

console.log("listening on http://localhost:3000/movies");
app.listen(3000);