const { celcius_to_fahrenheit } = require('../pkg/ssvm_nodejs_starter_lib.js');
var x = parseFloat(celcius_to_fahrenheit('12'));
console.log( Number(x.toFixed(2)));
