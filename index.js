'use strict';

const input = require ('./lib/input.js');
const notes = require('./lib/notes.js');


// make function to check for right flag

// console.log('index.js input:', input);
if (input.validatedInput.payload) {
  console.log('Good!');
}