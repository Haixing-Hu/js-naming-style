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
 * Unit tests of the {@link NamingStyle.LOWER_UNDERSCORE}.
 *
 * @author Haixing Hu
 */
describe('Test the NamingStyle.LOWER_UNDERSCORE', () => {
  test('Test NamingStyle.LOWER_UNDERSCORE.to(), undefined', () => {
    expect(LOWER_UNDERSCORE.to(LOWER_HYPHEN, undefined)).toBeUndefined();
    expect(LOWER_UNDERSCORE.to(LOWER_UNDERSCORE, undefined)).toBeUndefined();
    expect(LOWER_UNDERSCORE.to(LOWER_CAMEL, undefined)).toBeUndefined();
    expect(LOWER_UNDERSCORE.to(UPPER_CAMEL, undefined)).toBeUndefined();
    expect(LOWER_UNDERSCORE.to(UPPER_UNDERSCORE, undefined)).toBeUndefined();
  });
  test('Test NamingStyle.LOWER_UNDERSCORE.to(), null', () => {
    expect(LOWER_UNDERSCORE.to(LOWER_HYPHEN, null)).toBeNull();
    expect(LOWER_UNDERSCORE.to(LOWER_UNDERSCORE, null)).toBeNull();
    expect(LOWER_UNDERSCORE.to(LOWER_CAMEL, null)).toBeNull();
    expect(LOWER_UNDERSCORE.to(UPPER_CAMEL, null)).toBeNull();
    expect(LOWER_UNDERSCORE.to(UPPER_UNDERSCORE, null)).toBeNull();
  });
  test('Test NamingStyle.LOWER_UNDERSCORE.to(), empty string', () => {
    expect(LOWER_UNDERSCORE.to(LOWER_HYPHEN, '')).toBe('');
    expect(LOWER_UNDERSCORE.to(LOWER_UNDERSCORE, '')).toBe('');
    expect(LOWER_UNDERSCORE.to(LOWER_CAMEL, '')).toBe('');
    expect(LOWER_UNDERSCORE.to(UPPER_CAMEL, '')).toBe('');
    expect(LOWER_UNDERSCORE.to(UPPER_UNDERSCORE, '')).toBe('');
  });
  test('Test NamingStyle.LOWER_UNDERSCORE.to(), simple case', () => {
    expect(LOWER_UNDERSCORE.to(LOWER_HYPHEN, 'hello_world_everybody')).toBe('hello-world-everybody');
    expect(LOWER_UNDERSCORE.to(LOWER_UNDERSCORE, 'hello_world_everybody')).toBe('hello_world_everybody');
    expect(LOWER_UNDERSCORE.to(LOWER_CAMEL, 'hello_world_everybody')).toBe('helloWorldEverybody');
    expect(LOWER_UNDERSCORE.to(UPPER_CAMEL, 'hello_world_everybody')).toBe('HelloWorldEverybody');
    expect(LOWER_UNDERSCORE.to(UPPER_UNDERSCORE, 'hello_world_everybody')).toBe('HELLO_WORLD_EVERYBODY');
  });
  test('Test NamingStyle.LOWER_UNDERSCORE.to(), single word', () => {
    expect(LOWER_UNDERSCORE.to(LOWER_HYPHEN, 'hello')).toBe('hello');
    expect(LOWER_UNDERSCORE.to(LOWER_UNDERSCORE, 'hello')).toBe('hello');
    expect(LOWER_UNDERSCORE.to(LOWER_CAMEL, 'hello')).toBe('hello');
    expect(LOWER_UNDERSCORE.to(UPPER_CAMEL, 'hello')).toBe('Hello');
    expect(LOWER_UNDERSCORE.to(UPPER_UNDERSCORE, 'hello')).toBe('HELLO');
  });
});
