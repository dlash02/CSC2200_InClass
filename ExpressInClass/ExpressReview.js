//https://www.tutorialspoint.com/expressjs/expressjs_url_building.htm
var express = require('express');
var app = express();
// Use the 'pug' templateing engine
app.set('view engine', 'pug');
// Serve pages out of the ./views folder
app.set('views','./views');
let cars = [
    { model : 'Ford', color: 'blue', price : 10000 },
    { model : 'Chevy', color: 'red', price : 12990 },
    { model : 'Dodge', color: 'blue', price : 9000 },
    { model : 'Suburu', color: 'green', price : 35000 }
}
// Add this app for PUG work next
app.get('/show', function (req, res) {
   // Todo: Write code below that:
    // 1. Sends the cars data to a view called showCars.pug
    //    - Set the name of the variable to autos and value to the
    //      cars data above
 });
