/**
 * Checks all values from redux-form agains definition in schema object.
 * Returns null if there are no erros and returns object for redux-form in case of errors.
 * If schema isn't valid object, return empty object, always.
 * @param scehma {{}} Object with types for every attribute
 */
const validate = (schema) =>
  /**
   * @param values {{}} Provides redux-form
   */
  values => {
    if (typeof schema !== 'object') return {};
    return Object.keys(schema).reduce(
      (errors, key) => {
        const result = schema[key](key, values[key]);
        return result ? Object.assign(errors, result) : errors;
      },
      {}
    );
  };

export default validate;
