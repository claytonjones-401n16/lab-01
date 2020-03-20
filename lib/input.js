'use strict';

/**
 * Input
 * @module input
 */

/**
 * Input - class
 * @function Input
 */

/**
  * validate - will return a boolean
  * @returns {boolean}
  * @function validate
  */

const minimist = require('minimist');
const Validator = require('./validator.js');


class Input {
  constructor() {
    this.args = minimist(process.argv.slice(2));
    this.flag = Object.keys(this.args)[1];
    this.content = Object.values(this.args)[1];
  
    this.command = {};
    // if (this.validate()) {
    //   this.command = this.action();
    // }

    switch(this.flag) {
      case 'a':
      case 'add':
        this.command = {action: 'add', payload: this.content};
        break;
      default:
        break;
    }
  }

  // returns true or false based on valid user flag/data inputs 
  validate() {

    const schema = {
      action: { type: 'string', required: true },
      payload: { type: 'string', required: true },
    };
    const validator = new Validator(schema);
    return validator.isValid(this.command);

    
    // if (!this.command.action) {
    //   return false;
    // }
    
    // if (typeof(this.content) !== 'string') {
    //   return false;
    // }
    
    // return true;
  
    // switch (this.flag) {
    //   case 'a':
    //   case 'add':
    //     return true;
    //   default:
    //     return false;
    // }  
  }

// decides which action to perform
// creates command object
  // action() {
  //   switch (this.flag) {
  //     case 'a':
  //     case 'add':
  //       return {action: 'add', payload: this.content};
  //     default:
  //       break;
  //   }  
  // }
}

// function Input() {
//   this.args = minimist(process.argv.slice(2));
//   this.flag = Object.keys(this.args)[1];
//   this.content = Object.values(this.args)[1];

//   this.command = {};
//   if (this.validate()) {
//     this.command = this.action();
//   }
// }

// // returns true or false based on valid user flag/data inputs 
// Input.prototype.validate = function () {
//   if (typeof(this.content) !== 'string') {
//     return false;
//   }

//   switch (this.flag) {
//     case 'a':
//     case 'add':
//       return true;
//     default:
//       return false;
//   }
// };

// // decides which action to perform
// Input.prototype.action = function () {
//   switch (this.flag) {
//     case 'a':
//     case 'add':
//       return {action: 'add', payload: this.content};
//     default:
//       break;
//   }
// };

// exports the Input constructor
module.exports = Input;
