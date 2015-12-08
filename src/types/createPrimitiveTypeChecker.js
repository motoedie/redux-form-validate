import isEmpty from './isEmpty';
import getPropType from './getPropType';

/**
 * Checks primitives.
 * Function is assigned as value to attributes in schema.
 * Returns function which is called by ../validate.js when redux-form checks validation.
 * @param expectedType {string} Expected type, eg. 'string', 'array'
 */
const createPrimitiveTypeChecker = (expectedType, isRequired = false) => {
  /**
   * Function called when validation is necessary.
   * Returns null if valid. Returns object if error occured.
   * First checks type, then checks if value is not empty.
   * @param propName {string} Property name
   * @param propValue - Value
   */
  function validate(propName, propValue) {
    const propType = getPropType(propValue);
    if (propType !== expectedType) {
      return { [propName]: 'Required' };
    }

    return isEmpty(propName, propValue, propType);
  }
  return validate;
};

export default createPrimitiveTypeChecker;
