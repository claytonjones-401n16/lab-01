'use strict';

let rawInput = require('minimist')(process.argv.slice(2));
console.log('raw input:', rawInput);

// function to validate flags and data
function validate (input) {
  const flag = Object.entries(input)[1];
  let obj = {};
  if (flag[0] !== 'a' && flag[0] !== 'add' || flag[1].toString() === 'true') {
    return 'Error!';
  } else {
    return new Note({action: 'add', payload: input[flag[0]] })
  }
}

const validatedInput = validate(rawInput);

function Note (input) {
  this.action = input.action || '';
  this.payload = input.payload || '';
}

module.exports = { validatedInput, validate, Note };
