import { expect } from 'chai';

import createPrimitiveTypeChecker from '../../src/types/createPrimitiveTypeChecker';

/* eslint-disable func-names, no-unused-expressions */
describe('createPrimitiveTypeChecker', function() {
  it('should recognize non-empty string', function() {
    expect(createPrimitiveTypeChecker('string')('test', 'some string')).to.be.null;
  });

  it('should recognize empty string', function() {
    expect(createPrimitiveTypeChecker('string')('test', '')).to.not.be.null;
  });

  it('should recognize non-empty array', function() {
    expect(createPrimitiveTypeChecker('array')('test', [5])).to.be.null;
  });

  it('should recognize non-array', function() {
    expect(createPrimitiveTypeChecker('array')('test', '')).to.not.be.null;
  });

  it('should recognize non-array', function() {
    expect(createPrimitiveTypeChecker('array')('test', {})).to.not.be.null;
  });

  it('should recognize non-empty array', function() {
    expect(createPrimitiveTypeChecker('array')('test', [])).to.not.be.null;
  });
});

/* eslint-enable func-names, no-unused-expressions */
