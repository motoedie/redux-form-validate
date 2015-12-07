import { expect } from 'chai';

import isEmpty from '../../src/types/isEmpty';

/* eslint-disable func-names, no-unused-expressions */
describe('isEmtpy', function() {
  it('should recognize empty string', function() {
    expect(isEmpty('test', '', 'string')).to.not.be.null;
  });

  it('should recognize non-empty string', function() {
    expect(isEmpty('test', 'test', 'string')).to.be.null;
  });

  it('should recognize empty array', function() {
    expect(isEmpty('test', [], 'array')).to.not.be.null;
  });

  it('should recognize non-empty array', function() {
    expect(isEmpty('test', [5], 'array')).to.be.null;
  });

  it('should recognize empty object', function() {
    expect(isEmpty('test', {}, 'object')).to.not.be.null;
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
});

/* eslint-enable func-names, no-unused-expressions */
