'use strict';

// stories-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storiesSchema = new Schema({
  name: { type: String, required: true },
  impactLevel:{ type:String},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const storiesModel = mongoose.model('stories', storiesSchema);

module.exports = storiesModel;
