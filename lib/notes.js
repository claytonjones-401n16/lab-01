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

  
// Note constructor, runs validation and acts accordingly
function Note(input) {
  if (input.validate()) {
    this.operation(input.command);
  } else {
    console.log('Error!');
  }
}

// executes operation designated by the command action
Note.prototype.operation = function(command) {
  console.log(command.action);
  this[command.action](command.payload);
};

// operation that adds note
Note.prototype.add = function(payload) {
  this.note = {id: 1, text: payload};
  console.log(`Your note to be added: '${payload}'`);
};

module.exports = Note;
