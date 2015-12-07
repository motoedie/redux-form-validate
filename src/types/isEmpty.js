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
