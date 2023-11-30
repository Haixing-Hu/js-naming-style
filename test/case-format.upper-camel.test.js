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
 * Unit tests of the {@link CaseFormat.UPPER_CAMEL}.
 *
 * @author Haixing Hu
 */
describe('Test the CaseFormat.UPPER_CAMEL', () => {
  test('Test CaseFormat.UPPER_CAMEL.to(), undefined', () => {
    expect(UPPER_CAMEL.to(LOWER_HYPHEN, undefined)).toBeUndefined();
    expect(UPPER_CAMEL.to(LOWER_UNDERSCORE, undefined)).toBeUndefined();
    expect(UPPER_CAMEL.to(LOWER_CAMEL, undefined)).toBeUndefined();
    expect(UPPER_CAMEL.to(UPPER_CAMEL, undefined)).toBeUndefined();
    expect(UPPER_CAMEL.to(UPPER_UNDERSCORE, undefined)).toBeUndefined();
  });
  test('Test CaseFormat.UPPER_CAMEL.to(), null', () => {
    expect(UPPER_CAMEL.to(LOWER_HYPHEN, null)).toBeNull();
    expect(UPPER_CAMEL.to(LOWER_UNDERSCORE, null)).toBeNull();
    expect(UPPER_CAMEL.to(LOWER_CAMEL, null)).toBeNull();
    expect(UPPER_CAMEL.to(UPPER_CAMEL, null)).toBeNull();
    expect(UPPER_CAMEL.to(UPPER_UNDERSCORE, null)).toBeNull();
  });
  test('Test CaseFormat.UPPER_CAMEL.to(), empty string', () => {
    expect(UPPER_CAMEL.to(LOWER_HYPHEN, '')).toBe('');
    expect(UPPER_CAMEL.to(LOWER_UNDERSCORE, '')).toBe('');
    expect(UPPER_CAMEL.to(LOWER_CAMEL, '')).toBe('');
    expect(UPPER_CAMEL.to(UPPER_CAMEL, '')).toBe('');
    expect(UPPER_CAMEL.to(UPPER_UNDERSCORE, '')).toBe('');
  });
  test('Test CaseFormat.UPPER_CAMEL.to(), simple case', () => {
    expect(UPPER_CAMEL.to(LOWER_HYPHEN, 'HelloWorldEverybody')).toBe('hello-world-everybody');
    expect(UPPER_CAMEL.to(LOWER_UNDERSCORE, 'HelloWorldEverybody')).toBe('hello_world_everybody');
    expect(UPPER_CAMEL.to(LOWER_CAMEL, 'HelloWorldEverybody')).toBe('helloWorldEverybody');
    expect(UPPER_CAMEL.to(UPPER_CAMEL, 'HelloWorldEverybody')).toBe('HelloWorldEverybody');
    expect(UPPER_CAMEL.to(UPPER_UNDERSCORE, 'HelloWorldEverybody')).toBe('HELLO_WORLD_EVERYBODY');
  });
  test('Test CaseFormat.UPPER_CAMEL.to(), single word', () => {
    expect(UPPER_CAMEL.to(LOWER_HYPHEN, 'Hello')).toBe('hello');
    expect(UPPER_CAMEL.to(LOWER_UNDERSCORE, 'Hello')).toBe('hello');
    expect(UPPER_CAMEL.to(LOWER_CAMEL, 'Hello')).toBe('hello');
    expect(UPPER_CAMEL.to(UPPER_CAMEL, 'Hello')).toBe('Hello');
    expect(UPPER_CAMEL.to(UPPER_UNDERSCORE, 'Hello')).toBe('HELLO');
  });
});
