'use strict';

const Input = require ('./lib/input.js');
const notes = require('./lib/notes.js');

const data = new Input();

// validated input from input file
if (data.validate()) console.log('GOOD');
else console.log('BAD');
// make function to send data to notes

console.log(data.action());
