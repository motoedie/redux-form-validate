const validate = (schema) => {
  return function(values) {
    let errors = {};      // eslint-disable-line prefer-const

    // protection
    if (typeof schema !== 'object') return errors;

    // check all props
    for (let key in schema) {
      //const res =
    }

    return errors;
  };
};

export default validate;
