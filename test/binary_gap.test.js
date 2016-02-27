var assert = require('chai').assert;
var binaryGap = require('../binary_gap');

describe('binaryGap', function() {
  it('works with provided examples', function() {
    assert.strictEqual(5, binaryGap(1041));
    assert.strictEqual(0, binaryGap(15));
  });
});
