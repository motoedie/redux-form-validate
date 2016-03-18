# redux-form-validate
[![Circle CI](https://circleci.com/gh/motoedie/redux-form-validate/tree/master.svg?style=svg)](https://circleci.com/gh/motoedie/redux-form-validate/tree/master)
[![npm version](https://img.shields.io/npm/v/redux-form-validate.svg?style=flat-square)](https://www.npmjs.com/package/redux-form-validate)

Small library inspired by React's PropTypes.

## Validation Types
Define validation schema. Every attribute must correspond to attribute in 'values' object provided by redux-form.

In case attribute isn't required, it's value can be undefined or empty string.

## Usage
### Define Schema
```javascript
import { ValidTypes } from 'redux-form-validate';

const schema = {
  someArray: ValidTypes.array,
  someBoolean: ValidTypes.bool,
  someNumber: ValidTypes.number,
  someObject: ValidTypes.object,
  someString: ValidTypes.string,
  someInteger: ValidTypes.integer,
  someFloat: ValidTypes.float,
  someRequiredArray: ValidTypes.array.isRequired,
  someRequiredBoolean: ValidTypes.bool.isRequired,
  someRequiredNumber: ValidTypes.number.isRequired,
  someRequiredObject: ValidTypes.object.isRequired,
  someRequiredString: ValidTypes.string.isRequired,
  someRequiredInteger: ValidTypes.integer.isRequired,
  someRequiredFloat: ValidTypes.float.isRequired,
};
```

### Export Schema
```javascript
import { validate } from 'redux-form-validate';

export default validate(schema);
```

### Provide Your 'validate' Function
```javascript
import { reduxForm } from 'redux-form';
import validate from './validate';

...

export default reduxForm({
  form: 'synchronousValidation',
  fields,
  validate
})(SynchronousValidationForm);
```

## Future
- add arrayOf, shape and other validation types
