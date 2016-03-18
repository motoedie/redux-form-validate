import createPrimitiveTypeChecker from './createPrimitiveTypeChecker';

let ValidTypes = {                                // eslint-disable-line prefer-const
  array: createPrimitiveTypeChecker('array'),
  bool: createPrimitiveTypeChecker('boolean'),
  number: createPrimitiveTypeChecker('number'),
  object: createPrimitiveTypeChecker('object'),
  string: createPrimitiveTypeChecker('string'),
};

ValidTypes.array.isRequired = createPrimitiveTypeChecker('array', true);
ValidTypes.bool.isRequired = createPrimitiveTypeChecker('boolean', true);
ValidTypes.number.isRequired = createPrimitiveTypeChecker('number', true);
ValidTypes.object.isRequired = createPrimitiveTypeChecker('object', true);
ValidTypes.string.isRequired = createPrimitiveTypeChecker('string', true);

export default ValidTypes;
