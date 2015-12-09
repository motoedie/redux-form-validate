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

  it('should recognize empty string if required', function() {
    const schema = {
      test: ValidTypes.string.isRequired
    };

    const values = {
      test: ''
    };

    expect(validate(schema)(values)).to.be.eql({ test: 'Required' });
  });

  it('should recognize empty string if not required', function() {
    const schema = {
      test: ValidTypes.string
    };

    const values = {
      test: ''
    };

    expect(validate(schema)(values)).to.be.eql({});
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

  it('should recognize empty array if not required', function() {
    const schema = {
      test: ValidTypes.array
    };

    const values = {
      test: []
    };

    expect(validate(schema)(values)).to.be.eql({});
  });

  it('should recognize empty array if required', function() {
    const schema = {
      test: ValidTypes.array.isRequired
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

  it('should validate multiple values', function() {
    const schema = {
      test: ValidTypes.array,
      test2: ValidTypes.number.isRequired
    };

    const values = {
      test: [5],
      test2: 255
    };

    expect(validate(schema)(values)).to.be.eql({});
  });

  it('should validate multiple values when some fail', function() {
    const schema = {
      test: ValidTypes.array,
      test2: ValidTypes.number.isRequired
    };

    const values = {
      test: [5],
      test2: true
    };

    expect(validate(schema)(values)).to.be.eql({ test2: 'Required' });
  });
});

/* eslint-enable func-names, no-unused-expressions */
