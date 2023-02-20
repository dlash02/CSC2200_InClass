var mysql = require("mysql");

var con = mysql.createConnection({
   host: "45.55.136.114",
   user: "csc3610",
   password: "csc3610",
   database: "csc3610"
});

con.connect( function(err){
    if( err) throw err;
    con.query("select * from BestSellingBooks", function( err2, results, fields){
        if( err2) throw err;
        console.log( results );
        for( let i in results ) {
              console.log( `Title:${results[i].Title}`);
        }
    })
})