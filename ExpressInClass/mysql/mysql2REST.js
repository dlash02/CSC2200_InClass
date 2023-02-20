const { resolveInclude } = require('ejs');
var express = require('express');
var app = express();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "45.55.136.114",
  user: "csc3610",
  password: "csc3610",
  database: "csc3610"
});
app.get('/', function(req, res){
    var start = "This is a get REST request";
    console.log( start );
    //res.send( start );
    con.connect(function(err) {
        if (err) throw err;
        let sql = 'select * from BestSellingBooks'
        con.query(sql, function (err, result, fields) {
           if (err) throw err;
          
            res.send( result );
        });
    });
});
app.listen(3333);