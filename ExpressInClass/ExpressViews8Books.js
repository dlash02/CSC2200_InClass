var express = require('express');
var app = express();
app.set('view engine', 'pug');
let title = "Blah"
//let sql = "select Id, Title, Author, Year  from BestSellingBooks";
app.use(express.static('public'))
app.get('/components', function(req, res){
    res.render('mainTableBooks' , {
        title:  title,
        books: [
           {'id': "001", 'Title': "Old Yeller", Author: 'Gibson', 'Year': 1956 },
           {'id': "002", 'Title': "The Hobbit", Author: 'Tolken', 'Year': 1937 },
           {'id': "003", 'Title': "I Robot", Author: 'Asimov', 'Year': 1966 },
           {'id': "004", 'Title': "Foundation", Author: 'Asimov', 'Year': 1969 }
        ]
    })
});

let port=3333
console.log(`listening on port:${port}`)
app.listen(port );