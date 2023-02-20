var express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql");
var app = express();
app.set('view engine', 'pug');
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded
//let sql = "select Id, Title, Author, Year  from BestSellingBooks";
//app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));

var con = mysql.createConnection({
    host: "45.55.136.114",
    user: "csc3610",
    password: "csc3610",
    database: "csc3610"
});
con.connect(function(err) {
    if (err) throw err;
});
    app.get('/components', function(req, res){
        //app.use(express.static(__dirname + '/public'));
        console.log( "path" + __dirname );
        let sql = "SELECT id, title, author, year FROM BestSellingBooks";
        let passed= req.query.msg;
        console.log( `Just Received passed=${passed}` )
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            //console.log(result);
            res.render('mainTableBooksPart2' , {
                title:  "Best Books From DB",
                books:  result
            })
        });
});
app.post('/deleteThis', function(req, res){
    let id = req.body.id;
    let sql = `delete from ... where id=${id}`;
    console.log( `Here I am sql:${sql}`);
    //` start with this respnse
    //res.send(`recieved your request to delete <br /> id: ${id} `);
    // `
    // Show this one to redirect
    msg =  `Deleted sql:${sql}`;

     res.redirect(  '/components/?msg=' +msg);
});

let port=3333
console.log(`listening on port:${port}`)
app.listen(port );