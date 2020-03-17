'use strict';

const minimist = require('minimist');

function Input() {
  this.args = minimist(process.argv.slice(2));
  this.flag = Object.keys(this.args)[1];
  this.content = Object.values(this.args)[1];
}

// returns true or false based on valid user flag/data inputs 
Input.prototype.validate = function () {
  if (this.flag !== 'a' && this.flag !== 'add' || typeof(this.content) === 'boolean') {
    return false;
  } else {
    return true;
  }
};

// decides which action to perform
Input.prototype.action = function () {
  if (this.validate()) {
    if (this.flag === 'a' || this.flag === 'add') {
      return {action: 'add', payload: this.content};
    }
  }
};

// exports the Input constructor
module.exports = Input;

// let rawInput = require('minimist')(process.argv.slice(2));
// console.log('raw input:', rawInput);

// // function to validate flags and data
// function validate (input) {
//   const flag = Object.entries(input)[1];
//   let obj = {};
//   if (flag[0] !== 'a' && flag[0] !== 'add' || flag[1].toString() === 'true') {
//     return 'Error!';
//   } else {
//     return new Note({action: 'add', payload: input[flag[0]] })
//   }
// }

// const validatedInput = validate(rawInput);

// function Note (input) {
//   this.action = input.action || '';
//   this.payload = input.payload || '';
// }

// module.exports = { validatedInput, validate, Note };
