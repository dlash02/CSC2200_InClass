const express = require('express');
const app = express();
const port = 3000;
app.get('/form', (req, res) =>{
   res.sendFile(__dirname + '/form.html')
});
app.get('/processForm', (req, res) =>{
    response = {
        fName : req.query.fName,
        lName : req.query.lName
    }
    // res.send("Welcome to Process Form");
    res.end( JSON.stringify (response ));
});
app.get('/home', (req, res) =>{
   res.send("Welcome get home");
});
app.post('/home', (req, res) =>{
    res.send("Welcome post home");
});
app.get('/theClass', (req, res) =>{
    res.send("Welcome to theClass");
});
app.get('/', (req, res) =>{
    res.send("Hello World of Express");
});

app.get('/id/:id', (req, res) =>{
    const oStr = "id=" + req.params.id;
    res.send(`Got Id:${oStr}`);
});
app.get('*', (req, res) =>{
    res.send("Are you talking to me? <br /> Page not found");
});
app.listen( port, () => {
       console.log(`listing on http://localhost:${port}`);
});