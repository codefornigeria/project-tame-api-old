'use strict';

const service = require('feathers-mongoose');
const antidotes = require('./antidotes-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: antidotes,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/antidotes', service(options));

  // Get our initialize service to that we can bind hooks
  const antidotesService = app.service('/antidotes');

  // Set up our before hooks
  antidotesService.before(hooks.before);

  // Set up our after hooks
  antidotesService.after(hooks.after);
};
