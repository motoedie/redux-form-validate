import { expect } from 'chai';

import createPrimitiveTypeChecker from '../../src/types/createPrimitiveTypeChecker';

/* eslint-disable func-names, no-unused-expressions */
describe('createPrimitiveTypeChecker', () => {
  it('should recognize non-empty string', () => {
    expect(createPrimitiveTypeChecker('string')('test', 'some string')).to.be.null;
  });

  it('should recognize empty string if not required', () => {
    expect(createPrimitiveTypeChecker('string')('test', '')).to.be.null;
  });

  it('should recognize undefined if not required', () => {
    expect(createPrimitiveTypeChecker('string')('test')).to.be.null;
  });

  it('should recognize undefined for string if required', () => {
    let someVar;
    expect(createPrimitiveTypeChecker('string', true)('test', someVar)).to.not.be.null;
  });

  it('should recognize undefined for array if required', () => {
    let someVar;
    expect(createPrimitiveTypeChecker('array', true)('test', someVar)).to.not.be.null;
  });

  it('should recognize undefined for object if required', () => {
    let someVar;
    expect(createPrimitiveTypeChecker('object', true)('test', someVar)).to.not.be.null;
  });

  it('should recognize undefined for number if required', () => {
    let someVar;
    expect(createPrimitiveTypeChecker('number', true)('test', someVar)).to.not.be.null;
  });

  it('should recognize undefined if not required', () => {
    let someVar;
    expect(createPrimitiveTypeChecker('string')('test', someVar)).to.be.null;
  });

  it('should recognize string if number in string', () => {
    const someVar = '555';
    expect(createPrimitiveTypeChecker('string')('test', someVar)).to.be.null;
  });

  it('should recognize undefined if not required', () => {
    expect(createPrimitiveTypeChecker('string')('test', undefined)).to.be.null;
  });

  it('should recognize empty string if required', () => {
    expect(createPrimitiveTypeChecker('string', true)('test', '')).to.not.be.null;
  });

  it('should recognize non-empty array', () => {
    expect(createPrimitiveTypeChecker('array')('test', [5])).to.be.null;
  });

  it('should recognize non-array if not required', () => {
    expect(createPrimitiveTypeChecker('array')('test', '')).to.be.null;
  });

  it('should recognize non-array if required', () => {
    expect(createPrimitiveTypeChecker('array', true)('test', '')).to.not.be.null;
  });

  it('should recognize empty array if not required', () => {
    expect(createPrimitiveTypeChecker('array')('test', [])).to.be.null;
  });

  it('should recognize empty array if required', () => {
    expect(createPrimitiveTypeChecker('array', true)('test', [])).to.not.be.null;
  });

  it('should recognize empty object if not required', () => {
    expect(createPrimitiveTypeChecker('object')('test', {})).to.be.null;
  });

  it('should recognize empty object if required', () => {
    expect(createPrimitiveTypeChecker('object', true)('test', {})).to.not.be.null;
  });

  it('should recognize object if not required', () => {
    expect(createPrimitiveTypeChecker('object')('test', { value: 'test' })).to.be.null;
  });

  it('should recognize object if required', () => {
    expect(createPrimitiveTypeChecker('object', true)('test', { value: 'test' })).to.be.null;
  });

  it('should recognize integer', () => {
    expect(createPrimitiveTypeChecker('integer')('test', '5')).to.be.null;
  });

  it('should recognize integer if required', () => {
    expect(createPrimitiveTypeChecker('integer', true)('test', '5')).to.be.null;
  });

  it('should recognize float', () => {
    expect(createPrimitiveTypeChecker('float')('test', '5.0')).to.be.null;
  });

  it('should recognize float if required', () => {
    expect(createPrimitiveTypeChecker('float', true)('test', '5.0')).to.be.null;
  });

  it('should recognize non-float if provided integer', () => {
    expect(createPrimitiveTypeChecker('float')('test', '5')).to.not.be.null;
  });
});
/* eslint-enable func-names, no-unused-expressions */
