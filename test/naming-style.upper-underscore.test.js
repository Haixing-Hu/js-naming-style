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
 * Unit tests of the {@link NamingStyle.UPPER_UNDERSCORE}.
 *
 * @author Haixing Hu
 */
describe('Test the NamingStyle.UPPER_UNDERSCORE', () => {
  test('Test NamingStyle.UPPER_UNDERSCORE.to(), undefined', () => {
    expect(UPPER_UNDERSCORE.to(LOWER_HYPHEN, undefined)).toBeUndefined();
    expect(UPPER_UNDERSCORE.to(LOWER_UNDERSCORE, undefined)).toBeUndefined();
    expect(UPPER_UNDERSCORE.to(LOWER_CAMEL, undefined)).toBeUndefined();
    expect(UPPER_UNDERSCORE.to(UPPER_CAMEL, undefined)).toBeUndefined();
    expect(UPPER_UNDERSCORE.to(UPPER_UNDERSCORE, undefined)).toBeUndefined();
  });
  test('Test NamingStyle.UPPER_UNDERSCORE.to(), null', () => {
    expect(UPPER_UNDERSCORE.to(LOWER_HYPHEN, null)).toBeNull();
    expect(UPPER_UNDERSCORE.to(LOWER_UNDERSCORE, null)).toBeNull();
    expect(UPPER_UNDERSCORE.to(LOWER_CAMEL, null)).toBeNull();
    expect(UPPER_UNDERSCORE.to(UPPER_CAMEL, null)).toBeNull();
    expect(UPPER_UNDERSCORE.to(UPPER_UNDERSCORE, null)).toBeNull();
  });
  test('Test NamingStyle.UPPER_UNDERSCORE.to(), empty string', () => {
    expect(UPPER_UNDERSCORE.to(LOWER_HYPHEN, '')).toBe('');
    expect(UPPER_UNDERSCORE.to(LOWER_UNDERSCORE, '')).toBe('');
    expect(UPPER_UNDERSCORE.to(LOWER_CAMEL, '')).toBe('');
    expect(UPPER_UNDERSCORE.to(UPPER_CAMEL, '')).toBe('');
    expect(UPPER_UNDERSCORE.to(UPPER_UNDERSCORE, '')).toBe('');
  });
  test('Test NamingStyle.UPPER_UNDERSCORE.to(), simple case', () => {
    expect(UPPER_UNDERSCORE.to(LOWER_HYPHEN, 'HELLO_WORLD_EVERYBODY')).toBe('hello-world-everybody');
    expect(UPPER_UNDERSCORE.to(LOWER_UNDERSCORE, 'HELLO_WORLD_EVERYBODY')).toBe('hello_world_everybody');
    expect(UPPER_UNDERSCORE.to(LOWER_CAMEL, 'HELLO_WORLD_EVERYBODY')).toBe('helloWorldEverybody');
    expect(UPPER_UNDERSCORE.to(UPPER_CAMEL, 'HELLO_WORLD_EVERYBODY')).toBe('HelloWorldEverybody');
    expect(UPPER_UNDERSCORE.to(UPPER_UNDERSCORE, 'HELLO_WORLD_EVERYBODY')).toBe('HELLO_WORLD_EVERYBODY');
  });
  test('Test NamingStyle.UPPER_UNDERSCORE.to(), single word', () => {
    expect(UPPER_UNDERSCORE.to(LOWER_HYPHEN, 'HELLO')).toBe('hello');
    expect(UPPER_UNDERSCORE.to(LOWER_UNDERSCORE, 'HELLO')).toBe('hello');
    expect(UPPER_UNDERSCORE.to(LOWER_CAMEL, 'HELLO')).toBe('hello');
    expect(UPPER_UNDERSCORE.to(UPPER_CAMEL, 'HELLO')).toBe('Hello');
    expect(UPPER_UNDERSCORE.to(UPPER_UNDERSCORE, 'HELLO')).toBe('HELLO');
  });
});
