'use strict';

const input = require ('./lib/input.js');
const notes = require('./lib/notes.js');

// validated input from input file
const validatedInput = input.validatedInput;

// make function to send data to notes
if (validatedInput === 'Error!') console.log('Error!');
// call notes(input) here
else console.log('VALID INPUT!:', validatedInput.payload);


// console.log('index.js input:', input);
// if (input.validatedInput.payload) {
//   console.log('Good!');
// }