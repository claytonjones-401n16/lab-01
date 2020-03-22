'use strict';

/**
 * Notes
 * @module notes
 */

/**
 * Note - class
 * @param input
 * @function Note
 */

/**
  * operation - calls a class method based on the action specified
  * @function operation
  */

/**
  * add - will log the note
  * @function add
  */

  /**
   * validate - validates the note object
   * @function validate
   * @returns {boolean}
   */

const Validator = require('./validator.js');

// Note class, runs validation and acts accordingly
class Note {
  constructor(input) {
    if (input.command.action) {
      this.operation(input.command);
    } else {
      console.log('Error!');
    }
  }

  // executes operation designated by the command action
  operation(command) {
    // this[command.action](command.payload);
    switch(command.action) {
      case 'add':
        this.add(command.payload);
        break;
      default:
        break;
    }
  }

  // operation that adds note
  add(payload) {
    this.note = {id: 1, text: payload};

    if (this.validate()) {
      console.log(`Your note to be added: '${this.note.id}: ${this.note.text}'`);  
    } else {
      console.error('Error!');
    }
  }

  validate() {
    const schema = {
      id: { type: 'number', required: true },
      text: { type: 'string', required: true }
    }

    const validator = new Validator(schema);
    return validator.isValid(this.note);

  }
}


module.exports = Note;
