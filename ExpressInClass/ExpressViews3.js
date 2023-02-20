var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.get('/view2', function(req, res){
   res.render('view3', {
      name: "Dave", 
      user: {name : "Jack", age: 22 }
   });
});

let port = 3000;
app.listen( port, () => {
   console.log(`listing on http://localhost:${port}`);
});