'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('schemes service', function() {
  it('registered the schemes service', () => {
    assert.ok(app.service('schemes'));
  });
});
