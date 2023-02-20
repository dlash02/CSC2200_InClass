let express = require('Express');
let app = express();
const inD = require("./input/books.json");
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.set( 'view engine','pug');
app.set( 'views', './views');
app.use(express.static('public'))

app.get("/form", function( req, res){
    let library = inD.library;
    let description = inD.description
    res.render('mainHW', {
        library : library,
        description : description,
        books : inD.books
    });
})
app.get("/delete", function( req, res){
    let library = inD.library;
    let description = inD.description
    res.render('mainHW', {
        library : library,
        description : description,
        books : inD.books
    });
});
app.get("/showAll", function( req, res){
    let title = `All Books`;
    console.log( inD );
    res.render('bookHWAll', {
        title: title,
        Books: inD.books
    });
});
app.post("/showBook", function( req, res){
  //  let id = req.body.bookId;
  //   console.log( req.body);
    let id = req.body.bookId;
    let bookRow = getThisBook( inD.books, id );
    let name  = bookRow.name;
    console.log("Book Row->")
    console.log( bookRow );
    console.log( bookRow.title );
    console.log( bookRow.id );

    let title = `Book Details for id:${id}`;
    res.render('bookHW', {
        title : title,
        Bid : id,
        BName : bookRow.title,
        BAuthor : bookRow.author,
        year : bookRow.year_written,
        edition : bookRow.edition,
        price : bookRow.price
    });
    //res.send(`Got Post ${id}`);
})

app.get('/delete/:id', function(req, res){
    let id = req.params.id;
   //console.log( `Here I am sql:${id}`);
    msg =  `Deleted id:${id}`;
    res.redirect(  '/showAll');
});
app.get('*', function (req, res) {
    res.send("Unsupported Route")
});
let port = 3002;
app.listen( port, () => {
    console.log(`listing on http://localhost:${port}`);
})

function getThisBook( books, id ){
    for( let i=0; i<books.length; i++){
        if(books[i].id == id){
            return books[i];
        }
    }
    return null;
}


