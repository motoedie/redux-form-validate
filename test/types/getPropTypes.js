import { expect } from 'chai';

import getPropTypes from '../../src/types/getPropType';

/* eslint-disable func-names */
describe('getPropTypes', () => {
  it('should return string', () => {
    expect(getPropTypes('text')).to.equal('string');
  });

  it('should return number', () => {
    expect(getPropTypes(55)).to.equal('number');
  });

  it('should return number if number in string', () => {
    expect(getPropTypes('55')).to.equal('number');
  });

  it('should return array', () => {
    expect(getPropTypes([])).to.equal('array');
  });

  it('should return array', () => {
    expect(getPropTypes([55])).to.equal('array');
  });

  it('should return object', () => {
    expect(getPropTypes({})).to.equal('object');
  });

  it('should return object', () => {
    expect(getPropTypes({ test: 'test' })).to.equal('object');
  });

  it('should return boolean', () => {
    expect(getPropTypes(true)).to.equal('boolean');
  });
});
/* eslint-enable func-names */
