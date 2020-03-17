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

function Note(data) {
  this.action = data.action;
  this.payload = data.payload;
}

Note.prototype.operation = function() {
  this[this.action]();
};

Note.prototype.add = function() {
  this.note = {id: 1, text: this.payload};
  console.log(`Your note to be added: '${this.payload}'`);
};

module.exports = Note;
