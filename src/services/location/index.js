'use strict';

const service = require('feathers-mongoose');
const location = require('./location-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: location,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/locations', service(options));

  // Get our initialize service to that we can bind hooks
  const locationService = app.service('/locations');

  // Set up our before hooks
  locationService.before(hooks.before);

  // Set up our after hooks
  locationService.after(hooks.after);
};
