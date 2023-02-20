var mysql = require('mysql');
var con = mysql.createConnection({
   host: "45.55.136.114",
   user: "csc3610",
   password: "csc3610",
   database: "csc3610"
});
con.connect(function(err) {
   let sql = "select * from BestSellingBooks";
   if (err) throw err;
       con.query(sql, function (err, result, fields) {
        if (err) throw err;
         console.log(result);
      });
});
//
