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

function Note(input) {
  // console.log(input);
  // this.action = input.command.action;
  // this.payload = input.command.payload;
  if (input.validate()) {
    this.operation(input);
  } else {
    console.log('Error!');
  }
}

Note.prototype.operation = function(input) {
  this[input.command.action](input);
};

Note.prototype.add = function(input) {
  this.note = {id: 1, text: input.command.payload};
  console.log(`Your note to be added: '${input.command.payload}'`);
};

module.exports = Note;
