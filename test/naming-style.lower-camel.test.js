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
 * Unit tests of the {@link NamingStyle.LOWER_CAMEL}.
 *
 * @author Haixing Hu
 */
describe('Test the NamingStyle.LOWER_CAMEL', () => {
  test('Test NamingStyle.LOWER_CAMEL.to(), undefined', () => {
    expect(LOWER_CAMEL.to(LOWER_HYPHEN, undefined)).toBeUndefined();
    expect(LOWER_CAMEL.to(LOWER_UNDERSCORE, undefined)).toBeUndefined();
    expect(LOWER_CAMEL.to(LOWER_CAMEL, undefined)).toBeUndefined();
    expect(LOWER_CAMEL.to(UPPER_CAMEL, undefined)).toBeUndefined();
    expect(LOWER_CAMEL.to(UPPER_UNDERSCORE, undefined)).toBeUndefined();
  });
  test('Test NamingStyle.LOWER_CAMEL.to(), null', () => {
    expect(LOWER_CAMEL.to(LOWER_HYPHEN, null)).toBeNull();
    expect(LOWER_CAMEL.to(LOWER_UNDERSCORE, null)).toBeNull();
    expect(LOWER_CAMEL.to(LOWER_CAMEL, null)).toBeNull();
    expect(LOWER_CAMEL.to(UPPER_CAMEL, null)).toBeNull();
    expect(LOWER_CAMEL.to(UPPER_UNDERSCORE, null)).toBeNull();
  });
  test('Test NamingStyle.LOWER_CAMEL.to(), empty string', () => {
    expect(LOWER_CAMEL.to(LOWER_HYPHEN, '')).toBe('');
    expect(LOWER_CAMEL.to(LOWER_UNDERSCORE, '')).toBe('');
    expect(LOWER_CAMEL.to(LOWER_CAMEL, '')).toBe('');
    expect(LOWER_CAMEL.to(UPPER_CAMEL, '')).toBe('');
    expect(LOWER_CAMEL.to(UPPER_UNDERSCORE, '')).toBe('');
  });
  test('Test NamingStyle.LOWER_CAMEL.to(), simple case', () => {
    expect(LOWER_CAMEL.to(LOWER_HYPHEN, 'helloWorldEverybody')).toBe('hello-world-everybody');
    expect(LOWER_CAMEL.to(LOWER_UNDERSCORE, 'helloWorldEverybody')).toBe('hello_world_everybody');
    expect(LOWER_CAMEL.to(LOWER_CAMEL, 'helloWorldEverybody')).toBe('helloWorldEverybody');
    expect(LOWER_CAMEL.to(UPPER_CAMEL, 'helloWorldEverybody')).toBe('HelloWorldEverybody');
    expect(LOWER_CAMEL.to(UPPER_UNDERSCORE, 'helloWorldEverybody')).toBe('HELLO_WORLD_EVERYBODY');
  });
  test('Test NamingStyle.LOWER_CAMEL.to(), single word', () => {
    expect(LOWER_CAMEL.to(LOWER_HYPHEN, 'hello')).toBe('hello');
    expect(LOWER_CAMEL.to(LOWER_UNDERSCORE, 'hello')).toBe('hello');
    expect(LOWER_CAMEL.to(LOWER_CAMEL, 'hello')).toBe('hello');
    expect(LOWER_CAMEL.to(UPPER_CAMEL, 'hello')).toBe('Hello');
    expect(LOWER_CAMEL.to(UPPER_UNDERSCORE, 'hello')).toBe('HELLO');
  });
});
