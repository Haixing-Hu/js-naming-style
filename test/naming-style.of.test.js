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
 * Unit tests of the {@link NamingStyle#of()} function.
 *
 * @author Haixing Hu
 */
describe('Test the NamingStyle.of()', () => {
  test('Test NamingStyle.of(), with NamingStyle instances', () => {
    expect(NamingStyle.of(NamingStyle.LOWER_HYPHEN)).toBe(LOWER_HYPHEN);
    expect(NamingStyle.of(NamingStyle.LOWER_UNDERSCORE)).toBe(LOWER_UNDERSCORE);
    expect(NamingStyle.of(NamingStyle.LOWER_CAMEL)).toBe(LOWER_CAMEL);
    expect(NamingStyle.of(NamingStyle.UPPER_CAMEL)).toBe(UPPER_CAMEL);
    expect(NamingStyle.of(NamingStyle.UPPER_UNDERSCORE)).toBe(UPPER_UNDERSCORE);
  });
  test('Test NamingStyle.of(), with a argument of invalid type', () => {
    expect(() => NamingStyle.of(undefined)).toThrow(TypeError);
    expect(() => NamingStyle.of(null)).toThrow(TypeError);
    expect(() => NamingStyle.of(123)).toThrow(TypeError);
  });
  test('Test NamingStyle.of(), with a argument of invalid name', () => {
    expect(() => NamingStyle.of('xxx')).toThrow(Error);
  });
  test('Test NamingStyle.of(), with correct name of LOWER_HYPHEN', () => {
    expect(NamingStyle.of('lower-hyphen')).toBe(LOWER_HYPHEN);
    expect(NamingStyle.of('lower_hyphen')).toBe(LOWER_HYPHEN);
    expect(NamingStyle.of('Lower-Hyphen')).toBe(LOWER_HYPHEN);
    expect(NamingStyle.of('Lower_Hyphen')).toBe(LOWER_HYPHEN);
    expect(NamingStyle.of('LOWER-HYPHEN')).toBe(LOWER_HYPHEN);
    expect(NamingStyle.of('LOWER_HYPHEN')).toBe(LOWER_HYPHEN);
  });
  test('Test NamingStyle.of(), with correct name of LOWER_UNDERSCORE', () => {
    expect(NamingStyle.of('lower-underscore')).toBe(LOWER_UNDERSCORE);
    expect(NamingStyle.of('lower_underscore')).toBe(LOWER_UNDERSCORE);
    expect(NamingStyle.of('Lower-Underscore')).toBe(LOWER_UNDERSCORE);
    expect(NamingStyle.of('Lower_Underscore')).toBe(LOWER_UNDERSCORE);
    expect(NamingStyle.of('LOWER-UNDERSCORE')).toBe(LOWER_UNDERSCORE);
    expect(NamingStyle.of('LOWER_UNDERSCORE')).toBe(LOWER_UNDERSCORE);
  });
  test('Test NamingStyle.of(), with correct name of LOWER_CAMEL', () => {
    expect(NamingStyle.of('lower-camel')).toBe(LOWER_CAMEL);
    expect(NamingStyle.of('lower_camel')).toBe(LOWER_CAMEL);
    expect(NamingStyle.of('Lower-Camel')).toBe(LOWER_CAMEL);
    expect(NamingStyle.of('Lower_Camel')).toBe(LOWER_CAMEL);
    expect(NamingStyle.of('LOWER-CAMEL')).toBe(LOWER_CAMEL);
    expect(NamingStyle.of('LOWER_CAMEL')).toBe(LOWER_CAMEL);
  });
  test('Test NamingStyle.of(), with correct name of UPPER_CAMEL', () => {
    expect(NamingStyle.of('upper-camel')).toBe(UPPER_CAMEL);
    expect(NamingStyle.of('upper_camel')).toBe(UPPER_CAMEL);
    expect(NamingStyle.of('Upper-Camel')).toBe(UPPER_CAMEL);
    expect(NamingStyle.of('Upper_Camel')).toBe(UPPER_CAMEL);
    expect(NamingStyle.of('UPPER-CAMEL')).toBe(UPPER_CAMEL);
    expect(NamingStyle.of('UPPER_CAMEL')).toBe(UPPER_CAMEL);
  });
  test('Test NamingStyle.of(), with correct name of UPPER_UNDERSCORE', () => {
    expect(NamingStyle.of('upper-underscore')).toBe(UPPER_UNDERSCORE);
    expect(NamingStyle.of('upper_underscore')).toBe(UPPER_UNDERSCORE);
    expect(NamingStyle.of('Upper-Underscore')).toBe(UPPER_UNDERSCORE);
    expect(NamingStyle.of('Upper_Underscore')).toBe(UPPER_UNDERSCORE);
    expect(NamingStyle.of('UPPER-UNDERSCORE')).toBe(UPPER_UNDERSCORE);
    expect(NamingStyle.of('UPPER_UNDERSCORE')).toBe(UPPER_UNDERSCORE);
  });
});
