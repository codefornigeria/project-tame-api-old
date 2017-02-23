'use strict';

const service = require('feathers-mongoose');
const schemes = require('./schemes-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: schemes,
    paginate: {
      default: 20,
      max: 50
    }
  };

  // Initialize our service with any options it requires
  app.use('/schemes', service(options));

  // Get our initialize service to that we can bind hooks
  const schemesService = app.service('/schemes');

  // Set up our before hooks
  schemesService.before(hooks.before);

  // Set up our after hooks
  schemesService.after(hooks.after);
};
