////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import NamingStyle from './naming-style';

/**
 * XML hyphenated variable naming convention, e.g., "lower-hyphen".
 *
 * This constant is a {@link NamingStyle} instance, it is a shorthand of
 * {@link NamingStyle#LOWER_HYPHEN}. You can use the {@link NamingStyle#to}
 * method to convert a string from one case format to another.
 *
 * @type {NamingStyle}
 */
const LOWER_HYPHEN = NamingStyle.LOWER_HYPHEN;

/**
 * C++/Python variable naming convention, e.g., "lower_underscore".
 *
 * This constant is a {@link NamingStyle} instance, it is a shorthand of
 * {@link NamingStyle#LOWER_UNDERSCORE}. You can use the {@link NamingStyle#to}
 * method to convert a string from one case format to another.
 *
 * @type {NamingStyle}
 */
const LOWER_UNDERSCORE = NamingStyle.LOWER_UNDERSCORE;

/**
 * Java variable naming convention, e.g., "lowerCamel".
 *
 * This constant is a {@link NamingStyle} instance, it is a shorthand of
 * {@link NamingStyle#LOWER_CAMEL}. You can use the {@link NamingStyle#to} method
 * to convert a string from one case format to another.
 *
 * @type {NamingStyle}
 */
const LOWER_CAMEL = NamingStyle.LOWER_CAMEL;

/**
 * Java and C++ class naming convention, e.g., "UpperCamel".
 *
 * This constant is a {@link NamingStyle} instance, it is a short-hand of
 * {@link NamingStyle#UPPER_CAMEL}. You can use the {@link NamingStyle#to} method
 * to convert a string from one case format to another.
 *
 * @type {NamingStyle}
 */
const UPPER_CAMEL = NamingStyle.UPPER_CAMEL;

/**
 * Java and C++ constant naming convention, e.g., "UPPER_UNDERSCORE".
 *
 * This constant is a {@link NamingStyle} instance, it is a shorthand of
 * {@link NamingStyle#UPPER_UNDERSCORE}. You can use the {@link NamingStyle#to}
 * method to convert a string from one case format to another.
 *
 * @type {NamingStyle}
 */
const UPPER_UNDERSCORE = NamingStyle.UPPER_UNDERSCORE;

export {
  NamingStyle,
  LOWER_HYPHEN,
  LOWER_UNDERSCORE,
  LOWER_CAMEL,
  UPPER_CAMEL,
  UPPER_UNDERSCORE,
};

export default NamingStyle;
