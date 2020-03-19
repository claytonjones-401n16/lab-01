'use strict';

/**
 * Notes
 * @module notes
 */

/**
 * Note - constructor function
 * @param data
 * @function Note
 */

/**
  * operation - calls a prototype function
  * @function operation
  */

/**
  * add - will log the note
  * @function add
  */

const Validator = require('./validator.js');

// Note class, runs validation and acts accordingly
class Note {
  constructor(input) {
    if (input.validate()) {
      this.operation(input.command);
    } else {
      console.log('Error!');
    }
  }

  // executes operation designated by the command action
  operation(command) {
    this[command.action](command.payload);
  }

  // operation that adds note
  add(payload) {
    this.note = {id: 1, text: payload};
    console.log(`Your note to be added: '${this.note.id}: ${this.note.text}'`);  
  }

  validate() {
    const schema = {
      id: { type: 'number', required: true },
      text: { type: 'string', required: true }
    }

    // const validator = new validator(schema);
    // return validator.isValid(this.note);
  }

}


// // Note constructor, runs validation and acts accordingly
// function Note(input) {
//   if (input.command) {
//     this.operation(input.command);
//   } else {
//     console.log('Error!');
//   }
// }

// // executes operation designated by the command action
// Note.prototype.operation = function(command) {
//   this[command.action](command.payload);
// };

// // operation that adds note
// Note.prototype.add = function(payload) {
//   this.note = {id: 1, text: payload};
//   console.log(`Your note to be added: '${this.note.id}: ${this.note.text}'`);
// };

module.exports = Note;
