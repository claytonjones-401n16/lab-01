#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();

// validated input from input file
if (input.validate()) {
  const note = new Notes(input.action());
  note.operation();
}
else console.log('Error!');

