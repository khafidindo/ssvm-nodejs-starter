const express = require('express');
const { calculate } = require('../pkg/ssvm_nodejs_starter_lib.js');

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
  var p = parseFloat(req.body.price);
  var q = parseFloat(req.body.qty);
  res.send(calculate(p, q))
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
