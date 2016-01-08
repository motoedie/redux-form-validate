/**
 * Returns property type.
 * For example 'string', 'array'.
 * Because of fuck up in JS, typeof array is 'object'. Special check for array is performed.
 * When finding number, number is still string. If string is expected, return string.
 * @param propValue - Value of property which will be recognized.
 * @param expectedType - Type to be expected
 */
const getPropType = (propValue, expectedType) => {
  const propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return 'array';
  }

  if (typeof propValue === 'string' && !isNaN(propValue)) {
    if (expectedType === 'string') return 'string';

    return 'number';
  }

  return propType;
};

export default getPropType;
