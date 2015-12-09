import { expect } from 'chai';

import isEmpty from '../../src/types/isEmpty';

/* eslint-disable func-names, no-unused-expressions */
describe('isEmpty', function() {
  it('should recognize empty string', function() {
    expect(isEmpty('test', '', 'string')).to.not.be.null;
  });

  it('should recognize non-empty string', function() {
    expect(isEmpty('test', 'test', 'string')).to.be.null;
  });

  it('should recognize empty array not required', function() {
    expect(isEmpty('test', [], 'array')).to.be.null;
  });

  it('should recognize empty array if required', function() {
    expect(isEmpty('test', [], 'array', true)).to.not.be.null;
  });

  it('should recognize non-empty array with value if not required', function() {
    expect(isEmpty('test', [5], 'array')).to.be.null;
  });

  it('should recognize non-empty array with value if required', function() {
    expect(isEmpty('test', [5], 'array', true)).to.be.null;
  });

  it('should recognize empty object not required', function() {
    expect(isEmpty('test', {}, 'object')).to.be.null;
  });

  it('should recognize empty object if required', function() {
    expect(isEmpty('test', {}, 'object', true)).to.not.be.null;
  });

  it('should recognize non-empty object', function() {
    expect(isEmpty('test', { test: 'test' }, 'object')).to.be.null;
  });

  it('should recognize not-a-number', function() {
    expect(isEmpty('test', {}, 'number')).to.not.be.null;
  });

  it('should recognize number', function() {
    expect(isEmpty('test', '5', 'number')).to.be.null;
  });

  it('should recognize number', function() {
    expect(isEmpty('test', 5, 'number')).to.be.null;
  });

  it('should recognize boolean', function() {
    expect(isEmpty('test', false, 'boolean')).to.be.null;
  });
});
/* eslint-enable func-names, no-unused-expressions */
