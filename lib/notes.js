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
const NoteModel = require('../models/notes-schema.js');
const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/app';

// Note class, runs validation and acts accordingly
class Note {
  constructor(input) {
    if (input.command.action) {
      this.operation(input.command);
    } else {
      console.error('Error!');
    }
  }

  // executes operation designated by the command action
  operation(command) {
    mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true } )
    // this[command.action](command.payload);
    switch(command.action) {
      case 'add':
        this.add(command);
        break;
      default:
        break;
    }
  }

  // operation that adds note
  async add(command) {
    this.note = { note: command.payload };
    if (command.category) {
      this.note.category = [command.category]
    }
    let noteToSave = new NoteModel(this.note);
    try {
      await noteToSave.save();
      console.log(`Added note: '${this.note.note}'`)
    } catch(e) {
      console.error('Error!');
    }

    // if (this.validate()) {
    //   console.log(`Your note to be added: '${this.note.note}'`);  
    // } else {
    //   console.error('Error!');
    // }

    mongoose.disconnect();
  }

  validate() {
    const schema = {
      note: { type: 'string', required: true }
    }

    const validator = new Validator(schema);
    return validator.isValid(this.note);

  }
}


module.exports = Note;
