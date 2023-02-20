const express = require('express');
const app = express();
app.use(express.static('public'));

const port = 3000;

app.get('/form', (req, res) => {
    res.sendFile( __dirname + "/public/" + "form1.html")
});
app.get('/processForm', function( req, res){
    response = {
        fName: req.query.first_name,
        last_name : req.query.last_name
    };
    console.log( response );
    res.end(JSON.stringify(response));
})
app.get('*', (req, res) => {
    res.send('Are you looking at me?');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});