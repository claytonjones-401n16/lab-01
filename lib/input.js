'use strict';

let input = require('minimist')(process.argv.slice(2));
console.log('raw input:', input);

// function to validate flags and data
function validate (input) {
  const flag = Object.entries(input)[1];
  let obj = {};
  if (flag[0] !== 'a' && flag[0] !== 'add' || flag[1].toString() === 'true') {
    console.log('Error!');
    obj.error = 'Error!';
  } else {
    obj.action = 'add';
    obj.payload = input[flag[0]];
  }
  return obj;
}

const validatedInput = new Note(validate(input));
// console.log('Validated input:', validatedInput);


function Note (input) {
  this.error = input.error || undefined;
  this.action = input.action || '';
  this.payload = input.payload || '';
}

module.exports = { validatedInput, validate };
