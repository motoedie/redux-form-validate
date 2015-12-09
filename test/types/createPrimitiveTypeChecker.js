import { expect } from 'chai';

import createPrimitiveTypeChecker from '../../src/types/createPrimitiveTypeChecker';

/* eslint-disable func-names, no-unused-expressions */
describe('createPrimitiveTypeChecker', function() {
  it('should recognize non-empty string', function() {
    expect(createPrimitiveTypeChecker('string')('test', 'some string')).to.be.null;
  });

  it('should recognize empty string if not required', function() {
    expect(createPrimitiveTypeChecker('string')('test', '')).to.be.null;
  });

  it('should recognize undefined if not required', function() {
    expect(createPrimitiveTypeChecker('string')('test')).to.be.null;
  });

  it('should recognize undefined for string if required', function() {
    let someVar;
    expect(createPrimitiveTypeChecker('string', true)('test', someVar)).to.not.be.null;
  });

  it('should recognize undefined for array if required', function() {
    let someVar;
    expect(createPrimitiveTypeChecker('array', true)('test', someVar)).to.not.be.null;
  });

  it('should recognize undefined for object if required', function() {
    let someVar;
    expect(createPrimitiveTypeChecker('object', true)('test', someVar)).to.not.be.null;
  });

  it('should recognize undefined for number if required', function() {
    let someVar;
    expect(createPrimitiveTypeChecker('number', true)('test', someVar)).to.not.be.null;
  });

  it('should recognize undefined if not required', function() {
    let someVar;
    expect(createPrimitiveTypeChecker('string')('test', someVar)).to.be.null;
  });

  it('should recognize undefined if not required', function() {
    expect(createPrimitiveTypeChecker('string')('test', undefined)).to.be.null;
  });

  it('should recognize empty string if required', function() {
    expect(createPrimitiveTypeChecker('string', true)('test', '')).to.not.be.null;
  });

  it('should recognize non-empty array', function() {
    expect(createPrimitiveTypeChecker('array')('test', [5])).to.be.null;
  });

  it('should recognize non-array if not required', function() {
    expect(createPrimitiveTypeChecker('array')('test', '')).to.be.null;
  });

  it('should recognize non-array if required', function() {
    expect(createPrimitiveTypeChecker('array', true)('test', '')).to.not.be.null;
  });

  it('should recognize empty array if not required', function() {
    expect(createPrimitiveTypeChecker('array')('test', [])).to.be.null;
  });

  it('should recognize empty array if required', function() {
    expect(createPrimitiveTypeChecker('array', true)('test', [])).to.not.be.null;
  });

  it('should recognize empty object if not required', function() {
    expect(createPrimitiveTypeChecker('object')('test', {})).to.be.null;
  });

  it('should recognize empty object if required', function() {
    expect(createPrimitiveTypeChecker('object', true)('test', {})).to.not.be.null;
  });

  it('should recognize object if not required', function() {
    expect(createPrimitiveTypeChecker('object')('test', { value: 'test' })).to.be.null;
  });

  it('should recognize object if required', function() {
    expect(createPrimitiveTypeChecker('object', true)('test', { value: 'test' })).to.be.null;
  });
});
/* eslint-enable func-names, no-unused-expressions */
