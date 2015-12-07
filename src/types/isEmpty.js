/**
 * Checks if value is empty based on type.
 * For example if property is array, checks if there are any values in it.
 * Returns null if passed. Returns object for redux-form in case of not being empty.
 * @param propName {string} Property name.
 * @param propValue - Value of property.
 * @param propType {string} Property type.
 */
const isEmpty = (propName, propValue, propType) => {
  switch (propType) {
    case 'array':
      return typeof propValue[0] === 'undefined' ? { [propName]: 'Required' } : null;
    case 'object':
      return Object.keys(propValue).length === 0 ? { [propName]: 'Required' } : null;
    case 'number':
      return isNaN(propValue) ? { [propName]: 'Required' } : null;
    case 'string':
      return !propValue ? { [propName]: 'Required' } : null;
    default:
      return null;
  }
};

export default isEmpty;
