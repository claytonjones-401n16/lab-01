'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  id: { type: 'number', required: true },
  text: { type: 'string', required: true }
});

const notesModel = mongoose.model('notes', notesSchema);

modeul.exports = notesModel;