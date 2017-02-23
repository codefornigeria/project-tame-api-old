'use strict';

const service = require('feathers-mongoose');
const sector = require('./sector-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: sector,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/sectors', service(options));

  // Get our initialize service to that we can bind hooks
  const sectorService = app.service('/sectors');

  // Set up our before hooks
  sectorService.before(hooks.before);

  // Set up our after hooks
  sectorService.after(hooks.after);
};
