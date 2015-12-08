import createPrimitiveTypeChecker from './createPrimitiveTypeChecker';

let ValidTypes = {                                // eslint-disable-line prefer-const
  array: createPrimitiveTypeChecker('array'),
  bool: createPrimitiveTypeChecker('boolean'),
  number: createPrimitiveTypeChecker('number'),
  object: createPrimitiveTypeChecker('object'),
  string: createPrimitiveTypeChecker('string')
};

ValidTypes.string.isRequired = createPrimitiveTypeChecker('array', true);
ValidTypes.string.isRequired = createPrimitiveTypeChecker('boolean', true);
ValidTypes.string.isRequired = createPrimitiveTypeChecker('number', true);
ValidTypes.string.isRequired = createPrimitiveTypeChecker('object', true);
ValidTypes.string.isRequired = createPrimitiveTypeChecker('string', true);

export default ValidTypes;
