import createPrimitiveTypeChecker from './createPrimitiveTypeChecker';

let ValidTypes = {                                // eslint-disable-line prefer-const
  array: createPrimitiveTypeChecker('array'),
  bool: createPrimitiveTypeChecker('boolean'),
  float: createPrimitiveTypeChecker('float'),
  integer: createPrimitiveTypeChecker('integer'),
  number: createPrimitiveTypeChecker('number'),
  object: createPrimitiveTypeChecker('object'),
  string: createPrimitiveTypeChecker('string'),
};

ValidTypes.array.isRequired = createPrimitiveTypeChecker('array', true);
ValidTypes.bool.isRequired = createPrimitiveTypeChecker('boolean', true);
ValidTypes.float.isRequired = createPrimitiveTypeChecker('float', true);
ValidTypes.integer.isRequired = createPrimitiveTypeChecker('integer', true);
ValidTypes.number.isRequired = createPrimitiveTypeChecker('number', true);
ValidTypes.object.isRequired = createPrimitiveTypeChecker('object', true);
ValidTypes.string.isRequired = createPrimitiveTypeChecker('string', true);

export default ValidTypes;
