const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/home', (req, res) => {
    res.send('Hello World! welcome home');
});
app.post('/home', function(req, res){
    res.send('Got Post request!!');
});
app.delete('/del_user', function(req, res){
    res.send('gonna delete a users somwhere somehow !');
});
app.put('/update_user', function(req, res){
    res.send('gonna update a users somwhere somehow !');
});
app.get('/b*k', (req, res) => {
    res.send('Matches b*k');
});
app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
});
app.get('/id/:id', function(req, res){
    res.send('The id2 you specified is ' + req.params.id);
});
app.get('*', (req, res) => {
    res.send('Are you looking at me?');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});