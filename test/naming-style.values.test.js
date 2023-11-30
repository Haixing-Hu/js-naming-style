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
  NamingStyle,
} from '../src';

/**
 * Unit tests of the {@link NamingStyle#values()} function.
 *
 * @author Haixing Hu
 */
describe('Test the NamingStyle.values()', () => {
  test('Test NamingStyle.values()', () => {
    expect(NamingStyle.values()).toEqual([
      LOWER_HYPHEN,
      LOWER_UNDERSCORE,
      LOWER_CAMEL,
      UPPER_CAMEL,
      UPPER_UNDERSCORE,
    ]);
  });
});
