import isEmpty from './isEmpty';
import getPropType from './getPropType';

const createPrimitiveTypeChecker = (expectedType) => {
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
