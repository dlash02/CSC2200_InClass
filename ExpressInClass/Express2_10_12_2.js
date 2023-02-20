let express = require('Express');
let app = express();

app.set( 'view engine','pug');
app.set( 'views', './views2');

app.get("/firstView", fhunction( req, res){
    res.render('firstPug');
})
app.get("/view2", function( req, res){
    let qResults = "hey there";
    res.render('view2', {
        name: "Jack",
        url: "http://www.disney.com",
        results: qResults
    });
})

let port = 3000;
app.listen( port, () => {
    console.log(`listing on http://localhost:${port}`);
})


