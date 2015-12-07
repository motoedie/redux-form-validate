/**
 * Checks all values from redux-form agains definition in schema object.
 * Returns null if there are no erros and returns object for redux-form in case of errors.
 * If schema isn't valid object, return empty object, always.
 * @param scehma {{}} Object with types for every attribute
 */
const validate = (schema) => {
  /**
   * @param values {{}} Provides redux-form
   */
  return function(values) {                               // eslint-disable-line func-names
    let errors = {};                                      // eslint-disable-line prefer-const

    if (typeof schema !== 'object') return errors;

    for (let key in schema) {                             // eslint-disable-line prefer-const
      if (typeof values[key] === 'undefined') {
        errors = Object.assign(errors, { [key]: 'Required' });
      } else {
        const result = schema[key](key, values[key]);

        if (result) {
          errors = Object.assign(errors, result);
        }
      }
    }

    return errors;
  };
};

export default validate;
