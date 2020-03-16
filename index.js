'use strict';

const Input = require ('./lib/input.js');
const Notes = require('./lib/notes.js');

const data = new Input();

// validated input from input file
if (data.validate()) {
  const note = new Notes(data.action());
  note.operation();
}
else console.log('Error!');

