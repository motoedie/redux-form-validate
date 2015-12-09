/**
 * Checks if value is empty based on type.
 * For example if property is array, checks if there are any values in it.
 * Returns null if passed. Returns object for redux-form in case of not being empty.
 * If array and object aren't required, returns null
 * @param propName {string} Property name.
 * @param propValue - Value of property.
 * @param propType {string} Property type.
 * @param isRequired {boolean} Is property required?
 */
const isEmpty = (propName, propValue, propType, isRequired = false) => {
  switch (propType) {
    case 'array':
      if (isRequired) {
        return typeof propValue[0] === 'undefined' ? { [propName]: 'Required' } : null;
      }
      return null;
    case 'object':
      if (isRequired) {
        return Object.keys(propValue).length === 0 ? { [propName]: 'Required' } : null;
      }
      return null;
    case 'number':
      return isNaN(propValue) ? { [propName]: 'Required' } : null;
    case 'string':
      return !propValue ? { [propName]: 'Required' } : null;
    default:
      return null;
  }
};

export default isEmpty;
