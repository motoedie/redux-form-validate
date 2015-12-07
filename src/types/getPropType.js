/**
 * Returns property type.
 * For example 'string', 'array'.
 * Because of fuck up in JS, typeof array is 'object'. Special check for array is performed.
 * @param propValue - Value of property which will be recognized.
 */
const getPropType = (propValue) => {
  const propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return 'array';
  }

  return propType;
};

export default getPropType;
