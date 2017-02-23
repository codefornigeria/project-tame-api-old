'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('stories service', function() {
  it('registered the stories service', () => {
    assert.ok(app.service('stories'));
  });
});
