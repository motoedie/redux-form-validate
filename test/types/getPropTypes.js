import { expect } from 'chai';

import getPropTypes from '../../src/types/getPropType';

/* eslint-disable func-names */
describe('getPropTypes', function() {
  it('should return string', function() {
    expect(getPropTypes('text')).to.equal('string');
  });

  it('should return number', function() {
    expect(getPropTypes(55)).to.equal('number');
  });

  it('should return array', function() {
    expect(getPropTypes([])).to.equal('array');
  });

  it('should return array', function() {
    expect(getPropTypes([55])).to.equal('array');
  });

  it('should return object', function() {
    expect(getPropTypes({})).to.equal('object');
  });

  it('should return object', function() {
    expect(getPropTypes({ test: 'test' })).to.equal('object');
  });

  it('should return boolean', function() {
    expect(getPropTypes(true)).to.equal('boolean');
  });
});

/* eslint-enable func-names */
