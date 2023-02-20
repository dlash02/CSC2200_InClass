var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.use(express.static('public'))
app.get('/components', function(req, res){
    res.render('main7Table' , {
        title:  "Main Users",
        users: [
           {'id': "001", 'name': "John", 'age': 22 },
           {'id': "002", 'name': "Jane", 'age': 20 },
           {'id': "003", 'name': "Jackie", 'age': 21 },
           {'id': "004", 'name': "Jamie", 'age': 24 },
           {'id': "005", 'name': "Jason", 'age': 26 }
        ]
    })
});

app.listen(3001)