'use strict';

const service = require('feathers-mongoose');
const stories = require('./stories-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: stories,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/stories', service(options));

  // Get our initialize service to that we can bind hooks
  const storiesService = app.service('/stories');

  // Set up our before hooks
  storiesService.before(hooks.before);

  // Set up our after hooks
  storiesService.after(hooks.after);
};
