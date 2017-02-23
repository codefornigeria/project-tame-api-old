'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('sector service', function() {
  it('registered the sectors service', () => {
    assert.ok(app.service('sectors'));
  });
});
