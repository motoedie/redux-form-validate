const getPropType = (propValue) => {
  const propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return 'array';
  }

  return propType;
};

export default getPropType;
