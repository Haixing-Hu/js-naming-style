////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  LOWER_HYPHEN,
  LOWER_UNDERSCORE,
  LOWER_CAMEL,
  UPPER_CAMEL,
  UPPER_UNDERSCORE,
  CaseFormat,
} from '../src';

/**
 * Unit tests of the {@link CaseFormat#values()} function.
 *
 * @author Haixing Hu
 */
describe('Test the CaseFormat.values()', () => {
  test('Test CaseFormat.values()', () => {
    expect(CaseFormat.values()).toEqual([
      LOWER_HYPHEN,
      LOWER_UNDERSCORE,
      LOWER_CAMEL,
      UPPER_CAMEL,
      UPPER_UNDERSCORE,
    ]);
  });
});
