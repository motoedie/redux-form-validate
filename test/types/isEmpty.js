import { expect } from 'chai';

import isEmpty from '../../src/types/isEmpty';

/* eslint-disable func-names, no-unused-expressions */
describe('isEmpty', () => {
  it('should recognize empty string', () => {
    expect(isEmpty('test', '', 'string')).to.not.be.null;
  });

  it('should recognize non-empty string', () => {
    expect(isEmpty('test', 'test', 'string')).to.be.null;
  });

  it('should recognize empty array not required', () => {
    expect(isEmpty('test', [], 'array')).to.be.null;
  });

  it('should recognize empty array if required', () => {
    expect(isEmpty('test', [], 'array', true)).to.not.be.null;
  });

  it('should recognize non-empty array with value if not required', () => {
    expect(isEmpty('test', [5], 'array')).to.be.null;
  });

  it('should recognize non-empty array with value if required', () => {
    expect(isEmpty('test', [5], 'array', true)).to.be.null;
  });

  it('should recognize empty object not required', () => {
    expect(isEmpty('test', {}, 'object')).to.be.null;
  });

  it('should recognize empty object if required', () => {
    expect(isEmpty('test', {}, 'object', true)).to.not.be.null;
  });

  it('should recognize non-empty object', () => {
    expect(isEmpty('test', { test: 'test' }, 'object')).to.be.null;
  });

  it('should recognize not-a-number', () => {
    expect(isEmpty('test', {}, 'number')).to.not.be.null;
  });

  it('should recognize number', () => {
    expect(isEmpty('test', '5', 'number')).to.be.null;
  });

  it('should recognize number', () => {
    expect(isEmpty('test', 5, 'number')).to.be.null;
  });

  it('should recognize boolean', () => {
    expect(isEmpty('test', false, 'boolean')).to.be.null;
  });
});
/* eslint-enable func-names, no-unused-expressions */
