const http = require('http');
const mysql = require('mysql');

const pool = mysql.createPool({
     host: "45.55.136.114",
     user: 'lunch4four6F202',
     password: 'group6!',
     database: 'lunch4four6F202',
     charset: 'utf8'
});

//html string that will be send to browser
var reo ='<html><head><title>Node.js MySQL Select</title></head><body><h1>Node.js MySQL Select</h1>{${table}}</body></html>';

//sets and returns html table with results from sql select
//Receives sql query and callback function to return the table
function setResHtml(sql, cb){
  pool.getConnection((err, con)=>{
    if(err) throw err;

    con.query(sql, (err, res, cols)=>{
      if(err) throw err;

      var table =''; //to store html table
      console.log("So Far" );
      //create html table with data from res.
      for(var i=0; i<res.length; i++){
        table +='<tr><td>'+ (i+1) +'</td><td>'+ res[i].Id +'</td><td>'+ res[i].Title +'</td>'
        table +='<td>'+ res[i].Author +'</td><td>'+ res[i].Year +'</td></tr>';
      }
      table ='<table border="1"><tr><th>Nr.</th><th>Id</th><th>Title</th><th> Author</th><th>Year</th></tr>'+ table +'</table>';

      con.release(); //Done with mysql connection

      return cb(table);
    });
  });
}

//let sql ='SELECT name, address FROM friends WHERE id >1 ORDER BY name';
let sql = "select Id, Title, Author, Year  from BestSellingBooks";


//create the server for browser access
const server = http.createServer((req, res)=>{
  setResHtml(sql, resql=>{
    reo = reo.replace('{${table}}', resql);
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write(reo, 'utf-8');
    res.end();
  });
});

server.listen(3001, ()=>{
  console.log('Server running at //localhost:3001/');
});
