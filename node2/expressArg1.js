const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/form1', (req, res) => {
    res.send('Hello World!');
});
app.get('*', (req, res) => {
    res.send('Are you looking at me?');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});