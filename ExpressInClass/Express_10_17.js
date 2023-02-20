let express = require('express');
let app = express();
app.set( 'view engine', 'pug');
app.use(express.static("public"));
app.get("/components", function( req, res){
    res.render('main');
});
let subTitle = "The Simpsons";
app.get("/components2", function( req, res){
    res.render('main',{
        title: "Main User Table",
        subTitle: subTitle,
        users: [
            {'id': '001', 'name': 'Homer', 'age': 45 },
            {'id': '001', 'name': 'Homer', 'age': 45 }

        ]
    });
});
app.get("/about", function( req, res){
    res.render('about');
});
let port = 3001;
app.listen( port, () => {
    console.log(`listing on http://localhost:${port}`);
});