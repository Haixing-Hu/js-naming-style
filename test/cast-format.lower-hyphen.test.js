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
} from '../src';

/**
 * Unit tests of the {@link CaseFormat.LOWER_HYPHEN}.
 *
 * @author Haixing Hu
 */
describe('Test the CaseFormat.LOWER_HYPHEN', () => {
  test('Test CaseFormat.LOWER_HYPHEN.to(), undefined', () => {
    expect(LOWER_HYPHEN.to(LOWER_HYPHEN, undefined)).toBeUndefined();
    expect(LOWER_HYPHEN.to(LOWER_UNDERSCORE, undefined)).toBeUndefined();
    expect(LOWER_HYPHEN.to(LOWER_CAMEL, undefined)).toBeUndefined();
    expect(LOWER_HYPHEN.to(UPPER_CAMEL, undefined)).toBeUndefined();
    expect(LOWER_HYPHEN.to(UPPER_UNDERSCORE, undefined)).toBeUndefined();
  });
  test('Test CaseFormat.LOWER_HYPHEN.to(), null', () => {
    expect(LOWER_HYPHEN.to(LOWER_HYPHEN, null)).toBeNull();
    expect(LOWER_HYPHEN.to(LOWER_UNDERSCORE, null)).toBeNull();
    expect(LOWER_HYPHEN.to(LOWER_CAMEL, null)).toBeNull();
    expect(LOWER_HYPHEN.to(UPPER_CAMEL, null)).toBeNull();
    expect(LOWER_HYPHEN.to(UPPER_UNDERSCORE, null)).toBeNull();
  });
  test('Test CaseFormat.LOWER_HYPHEN.to(), empty string', () => {
    expect(LOWER_HYPHEN.to(LOWER_HYPHEN, '')).toBe('');
    expect(LOWER_HYPHEN.to(LOWER_UNDERSCORE, '')).toBe('');
    expect(LOWER_HYPHEN.to(LOWER_CAMEL, '')).toBe('');
    expect(LOWER_HYPHEN.to(UPPER_CAMEL, '')).toBe('');
    expect(LOWER_HYPHEN.to(UPPER_UNDERSCORE, '')).toBe('');
  });
  test('Test CaseFormat.LOWER_HYPHEN.to(), simple case', () => {
    expect(LOWER_HYPHEN.to(LOWER_HYPHEN, 'hello-world-everybody')).toBe('hello-world-everybody');
    expect(LOWER_HYPHEN.to(LOWER_UNDERSCORE, 'hello-world-everybody')).toBe('hello_world_everybody');
    expect(LOWER_HYPHEN.to(LOWER_CAMEL, 'hello-world-everybody')).toBe('helloWorldEverybody');
    expect(LOWER_HYPHEN.to(UPPER_CAMEL, 'hello-world-everybody')).toBe('HelloWorldEverybody');
    expect(LOWER_HYPHEN.to(UPPER_UNDERSCORE, 'hello-world-everybody')).toBe('HELLO_WORLD_EVERYBODY');
  });
  test('Test CaseFormat.LOWER_HYPHEN.to(), single word', () => {
    expect(LOWER_HYPHEN.to(LOWER_HYPHEN, 'hello')).toBe('hello');
    expect(LOWER_HYPHEN.to(LOWER_UNDERSCORE, 'hello')).toBe('hello');
    expect(LOWER_HYPHEN.to(LOWER_CAMEL, 'hello')).toBe('hello');
    expect(LOWER_HYPHEN.to(UPPER_CAMEL, 'hello')).toBe('Hello');
    expect(LOWER_HYPHEN.to(UPPER_UNDERSCORE, 'hello')).toBe('HELLO');
  });
});
