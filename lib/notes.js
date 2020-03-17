'use strict';

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
