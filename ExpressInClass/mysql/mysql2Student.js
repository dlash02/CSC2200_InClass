var express = require('express');
var app = express();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: '45.55.136.114',
    user: 'lunch4four6F202',
    password: 'group6!',
    database: 'lunch4four6F202', 
});
app.get('/', function(req, res){
    var start = "This is a get request";
    console.log( `So far so good`)
    //res.send( start );
    con.connect(function(err) {
        if (err) throw err;
        let sql = 'select event_name,  leader from event'
         console.log( `SQL:${sql}`);
        con.query(sql, function (err, result, fields) {
           if (err) throw err;
           //let aData = JSON.parse( result );
           console.log( "\n --- parsed" );
           let sRes = "<table border=1>";
           sRes += "<tr><th>Event Name</th>";
           sRes += "<th>Leader ID</th>";
           sRes += "</tr>";
            result.forEach((item) => {
                console.log(item);
                sRes += `<tr> <td> ${item.event_name}</td>`;
               sRes += `<td> ${item.leader}</td>`;
                sRes += `</tr>`;
           });
           sRes += "</table>";
           res.send( sRes );
        });
    });
});
app.listen(3001);