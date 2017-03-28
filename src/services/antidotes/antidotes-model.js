'use strict';

// antidotes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const antidotesSchema = new Schema({
  name: { type: String, required: true },
  description:{type:'String'},
  schemes:{type: Schema.Types.ObjectId , ref:'schemes'},
  location:{type: Schema.Types.ObjectId , ref:'location'},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const antidotesModel = mongoose.model('antidotes', antidotesSchema);

module.exports = antidotesModel;
