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
    // this.flag = Object.keys(this.args)[1];
    // this.content = Object.values(this.args)[1];
  
    this.command = {};
    this.category;

    Object.entries(this.args).forEach(argArr => {
      switch(argArr[0]) {
        case 'a':
        case 'add':
          if (typeof argArr[1] !== 'boolean') this.command = {action: 'add', payload: argArr[1]};
          break;
        case 'category':
          this.command.category = argArr[1];
          break;
        case 'l':
        case 'list':
          this.command = {action: 'list', category: argArr[1]};
          if (typeof this.command.category === 'boolean') this.command.category = null;
          break;
        case 'd':
          this.command = { action: 'delete', id: argArr[1] };
          if (typeof argArr[1] === 'boolean') this.command.id = null;
        default:
          break;
      }
    });
  }

  // returns true or false based on valid user flag/data inputs 
  // validate() {

  //   const schema = {
  //     action: { type: 'string', required: true },
  //     payload: { type: 'string', required: false },
  //   };
  //   const validator = new Validator(schema);
  //   return validator.isValid(this.command);
  
  // }
}

// exports the Input constructor
module.exports = Input;
