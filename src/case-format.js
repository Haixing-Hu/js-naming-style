////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import firstCharOnlyToUpper from './first-char-only-to-upper';
import findFirst from './find-first';

/**
 * A class that represents case formats.
 *
 * This class is used to convert a string from one case format to another.
 * This class provides the following case format constants:
 * - {@link CaseFormat#LOWER_HYPHEN}: hyphenated variable naming convention,
 *   e.g., "lower-hyphen".
 * - {@link CaseFormat#LOWER_UNDERSCORE}: C++/Python variable naming convention,
 *   e.g., "lower_underscore".
 * - {@link CaseFormat#LOWER_CAMEL}: Java variable naming convention,
 *   e.g., "lowerCamel".
 * - {@link CaseFormat#UPPER_CAMEL}: Java and C++ class naming convention,
 *   e.g., "UpperCamel".
 * - {@link CaseFormat#UPPER_UNDERSCORE}: Java and C++ constant naming
 *   convention, e.g., "UPPER_UNDERSCORE".
 *
 * Each constant is a {@link CaseFormat} instance. You can use the
 * {@link CaseFormat#to} method to convert a string from one case format to
 * another.
 *
 * Example usage:
 * ```js
 * const str = 'hello-world';
 * const result = CaseFormat.LOWER_HYPHEN.to(CaseFormat.LOWER_CAMEL, str);
 * expect(result).toBe('helloWorld');
 * ```
 *
 * @author Haixing Hu
 */
class CaseFormat {
  /**
   * Hyphenated variable naming convention, e.g., "lower-hyphen".
   */
  static LOWER_HYPHEN = new CaseFormat(
    'lower-hyphen',                 // name
    (c) => c === '-',               // wordBoundaryFilter
    '-',                            // wordSeparator
    (w) => w.toLowerCase(),         // wordNormalizer
    undefined,                      // firstWordNormalizer
    (format, str) => {              // quickOptimizer
      if (format === CaseFormat.LOWER_UNDERSCORE) {
        return str.replace(/-/g, '_');
      } else if (format === CaseFormat.UPPER_UNDERSCORE) {
        return str.replace(/-/g, '_').toUpperCase();
      }
      return undefined;
    },
  );

  /**
   * C++/Python variable naming convention, e.g., "lower_underscore".
   */
  static LOWER_UNDERSCORE = new CaseFormat(
    'lower-underscore',             // name
    (c) => c === '_',               // wordBoundaryFilter
    '_',                            // wordSeparator
    (w) => w.toLowerCase(),         // wordNormalizer
    undefined,                      // firstWordNormalizer
    (format, str) => {              // quickOptimizer
      if (format === CaseFormat.LOWER_HYPHEN) {
        return str.replace(/_/g, '-');
      } else if (format === CaseFormat.UPPER_UNDERSCORE) {
        return str.toUpperCase();
      }
      return undefined;
    },
  );

  /**
   * Java variable naming convention, e.g., "lowerCamel".
   */
  static LOWER_CAMEL = new CaseFormat(
    'lower-camel',                  // name
    (c) => (c >= 'A' && c <= 'Z'),  // wordBoundaryFilter
    '',                             // wordSeparator
    (w) => firstCharOnlyToUpper(w), // wordNormalizer
    (w) => w.toLowerCase(),         // firstWordNormalizer
  );

  /**
   * Java and C++ class naming convention, e.g., "UpperCamel".
   */
  static UPPER_CAMEL = new CaseFormat(
    'upper-camel',                  // name
    (c) => (c >= 'A' && c <= 'Z'),  // wordBoundaryFilter
    '',                             // wordSeparator
    (w) => firstCharOnlyToUpper(w), // wordNormalizer
  );

  /**
   * Java and C++ constant naming convention, e.g., "UPPER_UNDERSCORE".
   */
  static UPPER_UNDERSCORE = new CaseFormat(
    'upper-underscore',             // name
    (c) => c === '_',               // wordBoundaryFilter
    '_',                            // wordSeparator
    (w) => w.toUpperCase(),         // wordNormalizer
    undefined,                      // firstWordNormalizer
    (format, str) => {              // quickOptimizer
      if (format === CaseFormat.LOWER_HYPHEN) {
        return str.replace(/_/g, '-').toLowerCase();
      } else if (format === CaseFormat.LOWER_UNDERSCORE) {
        return str.toLowerCase();
      }
      return undefined;
    },
  );

  /**
   * Returns all the case format constants.
   *
   * @return {Array<CaseFormat>}
   *     the array of all case format constants.
   */
  static values() {
    return [
      CaseFormat.LOWER_HYPHEN,
      CaseFormat.LOWER_UNDERSCORE,
      CaseFormat.LOWER_CAMEL,
      CaseFormat.UPPER_CAMEL,
      CaseFormat.UPPER_UNDERSCORE,
    ];
  }

  /**
   * Constructor a {@link CaseFormat} instance.
   *
   * **NOTE:** this constructor is private, you should use the static constants
   * instead.
   *
   * @param {String} name
   *     The name of this instance.
   * @param {Function} wordBoundaryFilter
   *     A function that determines whether a character is a word boundary.
   * @param {String} wordSeparator
   *     The word separator string.
   * @param {Function} wordNormalizer
   *     The function that normalizes a word.
   * @param {Function|undefined} firstWordNormalizer
   *     The function that normalizes the first word. If this argument is
   *     `undefined`, then the `wordNormalizer` will be used instead.
   * @param {Function|undefined} quickOptimizer
   *     The function that optimizes the conversion from this case format to
   *     some special case format. If this argument is `undefined`, then it is
   *     ignored.
   */
  constructor(name, wordBoundaryFilter, wordSeparator, wordNormalizer, firstWordNormalizer, quickOptimizer) {
    this.name = name;
    this.wordBoundaryFilter = wordBoundaryFilter;
    this.wordSeparator = wordSeparator;
    this.wordNormalizer = wordNormalizer;
    this.firstWordNormalizer = firstWordNormalizer ?? wordNormalizer;
    this.quickOptimizer = quickOptimizer;
  }

  /**
   * Converts a specified string from this case format to another case format.
   *
   * @param {CaseFormat} format
   *     The target case format.
   * @param {String} str
   *     The string to be converted.
   * @return {String}
   *     The converted string.
   */
  to(format, str) {
    if (str === null || str === undefined) {
      return str;
    }
    if (format === this) {
      return str;
    }
    if (this.quickOptimizer) {
      const result = this.quickOptimizer(format, str);
      if (result !== undefined) {
        return result;
      }
    }
    let result = '';
    let i = 0;
    let j = -1;
    while ((j = findFirst(str, ++j, str.length, this.wordBoundaryFilter)) >= 0) {
      if (i === j) continue;
      const word = str.substring(i, j);
      if (i === 0) {
        const normalizedWord = format.firstWordNormalizer(word);
        result += normalizedWord;
      } else {
        const normalizedWord = format.wordNormalizer(word);
        result += normalizedWord;
      }
      result += format.wordSeparator;
      i = j + this.wordSeparator.length;
    }
    if (i === 0) {
      return format.firstWordNormalizer(str);
    } else {
      const word = str.substring(i);
      const normalizedWord = format.wordNormalizer(word);
      result += normalizedWord;
      return result;
    }
  }
}

export default CaseFormat;
