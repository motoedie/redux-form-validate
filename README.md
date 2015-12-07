# redux-form-validate
Small libraty inspired by React's PropTypes.

## Validation Types
Define validation schema. Every attribute must correspond to attribute in 'values' object provided by redux-form.

Every attribute defined in schema is considered as required. If attribute isn't defined, it won't be checked.

## Usage
### Define Schema
```javascript
import { ValidTypes } from 'redux-form-validate';

const schema = {
  someArray: ValidTypes.array,
  someBoolean: ValidTypes.bool,
  someNumber: ValidTypes.number,
  someObject: ValidTypes.object,
  someString: ValidTypes.string
}
```

### Export Schema
```javascript
import { validate } from 'redux-form-validate';

export default validate(schema);
```

### Provide Your 'validate' Function
```javascript
import {reduxForm} from 'redux-form';
import validate from './validate';

...

export default reduxForm({
  form: 'synchronousValidation',
  fields,
  validate
})(SynchronousValidationForm);
```

## Future
- Separate isRequired
- add arrayOf, shape and other validation types