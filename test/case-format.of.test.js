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
 * Unit tests of the {@link CaseFormat#of()} function.
 *
 * @author Haixing Hu
 */
describe('Test the CaseFormat.of()', () => {
  test('Test CaseFormat.of(), with CaseFormat instances', () => {
    expect(CaseFormat.of(CaseFormat.LOWER_HYPHEN)).toBe(LOWER_HYPHEN);
    expect(CaseFormat.of(CaseFormat.LOWER_UNDERSCORE)).toBe(LOWER_UNDERSCORE);
    expect(CaseFormat.of(CaseFormat.LOWER_CAMEL)).toBe(LOWER_CAMEL);
    expect(CaseFormat.of(CaseFormat.UPPER_CAMEL)).toBe(UPPER_CAMEL);
    expect(CaseFormat.of(CaseFormat.UPPER_UNDERSCORE)).toBe(UPPER_UNDERSCORE);
  });
  test('Test CaseFormat.of(), with a argument of invalid type', () => {
    expect(() => CaseFormat.of(undefined)).toThrow(TypeError);
    expect(() => CaseFormat.of(null)).toThrow(TypeError);
    expect(() => CaseFormat.of(123)).toThrow(TypeError);
  });
  test('Test CaseFormat.of(), with a argument of invalid name', () => {
    expect(() => CaseFormat.of('xxx')).toThrow(Error);
  });
  test('Test CaseFormat.of(), with correct name of LOWER_HYPHEN', () => {
    expect(CaseFormat.of('lower-hyphen')).toBe(LOWER_HYPHEN);
    expect(CaseFormat.of('lower_hyphen')).toBe(LOWER_HYPHEN);
    expect(CaseFormat.of('Lower-Hyphen')).toBe(LOWER_HYPHEN);
    expect(CaseFormat.of('Lower_Hyphen')).toBe(LOWER_HYPHEN);
    expect(CaseFormat.of('LOWER-HYPHEN')).toBe(LOWER_HYPHEN);
    expect(CaseFormat.of('LOWER_HYPHEN')).toBe(LOWER_HYPHEN);
  });
  test('Test CaseFormat.of(), with correct name of LOWER_UNDERSCORE', () => {
    expect(CaseFormat.of('lower-underscore')).toBe(LOWER_UNDERSCORE);
    expect(CaseFormat.of('lower_underscore')).toBe(LOWER_UNDERSCORE);
    expect(CaseFormat.of('Lower-Underscore')).toBe(LOWER_UNDERSCORE);
    expect(CaseFormat.of('Lower_Underscore')).toBe(LOWER_UNDERSCORE);
    expect(CaseFormat.of('LOWER-UNDERSCORE')).toBe(LOWER_UNDERSCORE);
    expect(CaseFormat.of('LOWER_UNDERSCORE')).toBe(LOWER_UNDERSCORE);
  });
  test('Test CaseFormat.of(), with correct name of LOWER_CAMEL', () => {
    expect(CaseFormat.of('lower-camel')).toBe(LOWER_CAMEL);
    expect(CaseFormat.of('lower_camel')).toBe(LOWER_CAMEL);
    expect(CaseFormat.of('Lower-Camel')).toBe(LOWER_CAMEL);
    expect(CaseFormat.of('Lower_Camel')).toBe(LOWER_CAMEL);
    expect(CaseFormat.of('LOWER-CAMEL')).toBe(LOWER_CAMEL);
    expect(CaseFormat.of('LOWER_CAMEL')).toBe(LOWER_CAMEL);
  });
  test('Test CaseFormat.of(), with correct name of UPPER_CAMEL', () => {
    expect(CaseFormat.of('upper-camel')).toBe(UPPER_CAMEL);
    expect(CaseFormat.of('upper_camel')).toBe(UPPER_CAMEL);
    expect(CaseFormat.of('Upper-Camel')).toBe(UPPER_CAMEL);
    expect(CaseFormat.of('Upper_Camel')).toBe(UPPER_CAMEL);
    expect(CaseFormat.of('UPPER-CAMEL')).toBe(UPPER_CAMEL);
    expect(CaseFormat.of('UPPER_CAMEL')).toBe(UPPER_CAMEL);
  });
  test('Test CaseFormat.of(), with correct name of UPPER_UNDERSCORE', () => {
    expect(CaseFormat.of('upper-underscore')).toBe(UPPER_UNDERSCORE);
    expect(CaseFormat.of('upper_underscore')).toBe(UPPER_UNDERSCORE);
    expect(CaseFormat.of('Upper-Underscore')).toBe(UPPER_UNDERSCORE);
    expect(CaseFormat.of('Upper_Underscore')).toBe(UPPER_UNDERSCORE);
    expect(CaseFormat.of('UPPER-UNDERSCORE')).toBe(UPPER_UNDERSCORE);
    expect(CaseFormat.of('UPPER_UNDERSCORE')).toBe(UPPER_UNDERSCORE);
  });
});
