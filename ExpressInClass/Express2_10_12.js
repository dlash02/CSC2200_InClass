let express = require('Express');
let app = express();

let bookRouter = require("./BooksRouter");
app.use( "/books/", bookRouter);
app.get("/fruit", function( req, res){
    res.send("HEre are fruit")
})
app.get("*", function( req, res){
    res.send("Your page is not found")
})


let port = 3000;
app.listen( port, () => {
    console.log(`listing on http://localhost:${port}`);
})




