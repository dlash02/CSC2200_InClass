var mysql = require('mysql');
var con = mysql.createConnection({
      host: "45.55.136.114",
      user: "csc3610",  
      password: "csc3610",  
      database: "csc3610"});
      con.connect(function(err){
       if (err) throw err;
       console.log("Connected!");
         var sql = "INSERT INTO students2s (id, first, last, major) VALUES (101, 'Jack', 'Sparrow', 'CSC')";
         con.query(sql, function (err, result) {
               if (err) throw err;
               console.log("1 record inserted");
          });
    });

