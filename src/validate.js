const validate = (schema) => {
  return function(values) {
    let errors = {};    // eslint-disable-line prefer-const

    errors.asdf = 1;

    return errors;
  };
};

export default validate;