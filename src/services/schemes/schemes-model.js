'use strict';

// schemes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemesSchema = new Schema({
  name: { type: String, required: true },
  sectors : [{type: Schema.Types.ObjectId , ref:'sector'}],
  level:{ type: String},
  department:{type: Schema.Types.ObjectId , ref:'department'}, //e.g organization
  group:{type: Schema.Types.ObjectId , ref:'group'}, // e.g Appointments
  antidotes:[{type: Schema.Types.ObjectId , ref:'antidotes'}],
  likelihood:{type: String},
  frequency: {type: String},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

schemesSchema.index({name: 'text'})
const schemesModel = mongoose.model('schemes', schemesSchema);

module.exports = schemesModel;
