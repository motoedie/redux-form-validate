import { expect } from 'chai';

import validate from '../src/validate';
import ValidTypes from '../src/types/index';

/* eslint-disable func-names, no-unused-expressions */
describe('validate', function() {
  it('should recognize non-object schema', function() {
    expect(validate('non-object')()).to.be.empty;
  });

  it('should pass for non-empty string', function() {
    const schema = {
      test: ValidTypes.string
    };

    const values = {
      test: 'some string'
    };

    expect(validate(schema)(values)).to.be.eql({});
  });

  it('should recognize empty string', function() {
    const schema = {
      test: ValidTypes.string
    };

    const values = {
      test: ''
    };

    expect(validate(schema)(values)).to.be.eql({ test: 'Required' });
  });

  it('should recognize missing prop', function() {
    const schema = {
      test: ValidTypes.string
    };

    const values = {
      username: ''
    };

    expect(validate(schema)(values)).to.be.eql({ test: 'Required' });
  });

  it('should recognize empty array', function() {
    const schema = {
      test: ValidTypes.array
    };

    const values = {
      test: []
    };

    expect(validate(schema)(values)).to.be.eql({ test: 'Required' });
  });

  it('should pass array', function() {
    const schema = {
      test: ValidTypes.array
    };

    const values = {
      test: [5]
    };

    expect(validate(schema)(values)).to.be.eql({});
  });
});

/* eslint-enable func-names, no-unused-expressions */
