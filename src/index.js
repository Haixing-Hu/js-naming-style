////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import CaseFormat from './case-format';

/**
 * Hyphenated variable naming convention, e.g., "lower-hyphen".
 *
 * This constant is a {@link CaseFormat} instance, it is a short-hand of
 * {@link CaseFormat#LOWER_HYPHEN}. You can use the {@link CaseFormat#to} method
 * to convert a string from one case format to another.
 *
 * @type {CaseFormat}
 */
export const LOWER_HYPHEN = CaseFormat.LOWER_HYPHEN;

/**
 * C++/Python variable naming convention, e.g., "lower_underscore".
 *
 * This constant is a {@link CaseFormat} instance, it is a short-hand of
 * {@link CaseFormat#LOWER_UNDERSCORE}. You can use the {@link CaseFormat#to}
 * method to convert a string from one case format to another.
 *
 * @type {CaseFormat}
 */
export const LOWER_UNDERSCORE = CaseFormat.LOWER_UNDERSCORE;

/**
 * Java variable naming convention, e.g., "lowerCamel".
 *
 * This constant is a {@link CaseFormat} instance, it is a short-hand of
 * {@link CaseFormat#LOWER_CAMEL}. You can use the {@link CaseFormat#to} method
 * to convert a string from one case format to another.
 *
 * @type {CaseFormat}
 */
export const LOWER_CAMEL = CaseFormat.LOWER_CAMEL;

/**
 * Java and C++ class naming convention, e.g., "UpperCamel".
 *
 * This constant is a {@link CaseFormat} instance, it is a short-hand of
 * {@link CaseFormat#UPPER_CAMEL}. You can use the {@link CaseFormat#to} method
 * to convert a string from one case format to another.
 *
 * @type {CaseFormat}
 */
export const UPPER_CAMEL = CaseFormat.UPPER_CAMEL;

/**
 * Java and C++ constant naming convention, e.g., "UPPER_UNDERSCORE".
 *
 * This constant is a {@link CaseFormat} instance, it is a short-hand of
 * {@link CaseFormat#UPPER_UNDERSCORE}. You can use the {@link CaseFormat#to}
 * method to convert a string from one case format to another.
 *
 * @type {CaseFormat}
 */
export const UPPER_UNDERSCORE = CaseFormat.UPPER_UNDERSCORE;

export { CaseFormat };

export default CaseFormat;
