'use strict';

/**
 * Input
 * @module input
 */

 /**
 * Input - constructor function
 * @function Input
 */

 /**
  * validate - will return a boolean
  * @returns {boolean}
  * @function validate
  */

   /**
  * action - will return an object
  * @returns {object}
  * @function action
  */

const minimist = require('minimist');

function Input() {
  this.args = minimist(process.argv.slice(2));
  this.flag = Object.keys(this.args)[1];
  this.content = Object.values(this.args)[1];

  this.command = {};
  if (this.validate()) {
    this.command = this.action();
  }
}

// returns true or false based on valid user flag/data inputs 
Input.prototype.validate = function () {
  if (typeof(this.content) !== 'string') {
    return false;
  }

  switch (this.flag) {
    case 'a':
    case 'add':
      return true;
    default:
      return false;
  }
};

// decides which action to perform
Input.prototype.action = function () {
  // if (this.flag === 'a' || this.flag === 'add') {
  //   return {action: 'add', payload: this.content};
  // }

  switch (this.flag) {
    case 'a':
    case 'add':
      return {action: 'add', payload: this.content};
    default:
      break;
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
