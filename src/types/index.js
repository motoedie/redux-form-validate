import createPrimitiveTypeChecker from './createPrimitiveTypeChecker';

const ValidTypes = {
  array: createPrimitiveTypeChecker('array'),
  bool: createPrimitiveTypeChecker('boolean'),
  number: createPrimitiveTypeChecker('number'),
  object: createPrimitiveTypeChecker('object'),
  string: createPrimitiveTypeChecker('string')
};

export default ValidTypes;
