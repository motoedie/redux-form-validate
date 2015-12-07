const validate = (schema) => {
  return function(values) {
    let errors = {};      // eslint-disable-line prefer-const

    // schema protection
    if (typeof schema !== 'object') return errors;

    // check all props
    for (let key in schema) {                             // eslint-disable-line prefer-const
      // if prop in received data
      if (typeof values[key] === 'undefined') {
        errors = Object.assign(errors, { [key]: 'Required' });
      } else {
        const res = schema[key](key, values[key]);

        if (res) {
          errors = Object.assign(errors, res);
        }
      }
    }

    return errors;
  };
};

export default validate;
