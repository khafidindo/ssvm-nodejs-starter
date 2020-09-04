const express = require('express');
const { celcius_to_fahrenheit } = require('../pkg/ssvm_nodejs_starter_lib.js');

const app = express();
const port = 3000;
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
/*
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
})); 
*/

app.get('/', (req, res) => res.redirect("/index.html"));

app.post('/solve', function (req, res) {
  var celcius = req.body.celcius;
  res.send(celcius_to_fahrenheit(celcius))
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
