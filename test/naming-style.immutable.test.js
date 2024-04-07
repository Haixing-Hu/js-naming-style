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
 * Unit tests of the immutability of the {@link NamingStyle} class.
 *
 * @author Haixing Hu
 */
describe('Test the immutability of the NamingStyle class', () => {
  test('Test the immutability of NamingStyle.LOWER_HYPHEN', () => {
    expect(() => {
      LOWER_HYPHEN.name = 'xxx';
    }).toThrow(Error);
    expect(() => {
      LOWER_HYPHEN.wordBoundaryFilter = null;
    }).toThrow(Error);
    expect(() => {
      LOWER_HYPHEN.wordSeparator = 'xx';
    }).toThrow(Error);
    expect(() => {
      LOWER_HYPHEN.wordNormalizer = null;
    }).toThrow(Error);
    expect(() => {
      LOWER_HYPHEN.firstWordNormalizer = null;
    }).toThrow(Error);
    expect(() => {
      LOWER_HYPHEN.quickOptimizer = null;
    }).toThrow(Error);
  });
  test('Test the immutability of NamingStyle.LOWER_UNDERSCORE', () => {
    expect(() => {
      LOWER_UNDERSCORE.name = 'xxx';
    }).toThrow(Error);
    expect(() => {
      LOWER_UNDERSCORE.wordBoundaryFilter = null;
    }).toThrow(Error);
    expect(() => {
      LOWER_UNDERSCORE.wordSeparator = 'xx';
    }).toThrow(Error);
    expect(() => {
      LOWER_UNDERSCORE.wordNormalizer = null;
    }).toThrow(Error);
    expect(() => {
      LOWER_UNDERSCORE.firstWordNormalizer = null;
    }).toThrow(Error);
    expect(() => {
      LOWER_UNDERSCORE.quickOptimizer = null;
    }).toThrow(Error);
  });
  test('Test the immutability of NamingStyle.LOWER_CAMEL', () => {
    expect(() => {
      LOWER_CAMEL.name = 'xxx';
    }).toThrow(Error);
    expect(() => {
      LOWER_CAMEL.wordBoundaryFilter = null;
    }).toThrow(Error);
    expect(() => {
      LOWER_CAMEL.wordSeparator = 'xx';
    }).toThrow(Error);
    expect(() => {
      LOWER_CAMEL.wordNormalizer = null;
    }).toThrow(Error);
    expect(() => {
      LOWER_CAMEL.firstWordNormalizer = null;
    }).toThrow(Error);
    expect(() => {
      LOWER_CAMEL.quickOptimizer = null;
    }).toThrow(Error);
  });
  test('Test the immutability of NamingStyle.UPPER_CAMEL', () => {
    expect(() => {
      UPPER_CAMEL.name = 'xxx';
    }).toThrow(Error);
    expect(() => {
      UPPER_CAMEL.wordBoundaryFilter = null;
    }).toThrow(Error);
    expect(() => {
      UPPER_CAMEL.wordSeparator = 'xx';
    }).toThrow(Error);
    expect(() => {
      UPPER_CAMEL.wordNormalizer = null;
    }).toThrow(Error);
    expect(() => {
      UPPER_CAMEL.firstWordNormalizer = null;
    }).toThrow(Error);
    expect(() => {
      UPPER_CAMEL.quickOptimizer = null;
    }).toThrow(Error);
  });
  test('Test the immutability of NamingStyle.UPPER_UNDERSCORE', () => {
    expect(() => {
      UPPER_UNDERSCORE.name = 'xxx';
    }).toThrow(Error);
    expect(() => {
      UPPER_UNDERSCORE.wordBoundaryFilter = null;
    }).toThrow(Error);
    expect(() => {
      UPPER_UNDERSCORE.wordSeparator = 'xx';
    }).toThrow(Error);
    expect(() => {
      UPPER_UNDERSCORE.wordNormalizer = null;
    }).toThrow(Error);
    expect(() => {
      UPPER_UNDERSCORE.firstWordNormalizer = null;
    }).toThrow(Error);
    expect(() => {
      UPPER_UNDERSCORE.quickOptimizer = null;
    }).toThrow(Error);
  });
  // test('Test the immutability of NamingStyle class', () => {
  //   expect(() => {
  //     NamingStyle.LOWER_HYPHEN = 'xxx';
  //   }).toThrow(Error);
  //   expect(() => {
  //     NamingStyle.LOWER_UNDERSCORE = null;
  //   }).toThrow(Error);
  //   expect(() => {
  //     NamingStyle.LOWER_CAMEL = 'xx';
  //   }).toThrow(Error);
  //   expect(() => {
  //     NamingStyle.UPPER_CAMEL = null;
  //   }).toThrow(Error);
  //   expect(() => {
  //     NamingStyle.UPPER_UNDERSCORE = null;
  //   }).toThrow(Error);
  //   expect(() => {
  //     NamingStyle.values = null;
  //   }).toThrow(Error);
  //   expect(() => {
  //     NamingStyle.of = null;
  //   }).toThrow(Error);
  // });
});
