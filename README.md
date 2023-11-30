# @haixing_hu/naming-style

[![npm package](https://img.shields.io/npm/v/@haixing_hu/naming-style.svg)](https://npmjs.com/package/@haixing_hu/naming-style)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![中文文档](https://img.shields.io/badge/文档-中文版-blue.svg)](README.zh_CN.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-naming-style/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-naming-style/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-naming-style/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-naming-style?branch=master)

[naming-style] is a JavaScript library for converting the naming style of 
identifiers. It supports various programming languages' naming conventions, 
including Java, C++, and Python, facilitating the transition between different 
casing styles.

## <span id="content">Contents</span>

- [Installation](#installation)
- [Usage Examples](#example)
- [How to Use](#usage)
    - [Importing](#import)
    - [Converting String Formats](#convert)
    - [Available Format Conversions](#formats)
    - [Retrieving All Formats](#all-formats)
    - [Getting a Format by Name](#get-format)
    - [Shortcut Constants](#shortcuts)
- [Contributing](#contributing)
- [License](#license)

## <span id="installation">Installation</span>

Install via `npm`:
```bash
npm install @haixing_hu/naming-style
```
Or through `yarn`:
```bash
yarn add @haixing_hu/naming-style
```

## <span id="example">Usage Examples</span>

```js
import NamingStyle from '@haixing_hu/naming-style';

const str = 'hello-world-boy';
const converted = NamingStyle.LOWER_HYPHEN.to(NamingStyle.LOWER_CAMEL, str);
console.log(converted);     // Outputs "helloWorldBoy"
```

## <span id="usage">How to Use</span>

### <span id="import">Importing</span>

Import the `NamingStyle` class:
```js
import NamingStyle from '@haixing_hu/naming-style';
```
Or import the global constants representing various naming styles:
```js
import {
  LOWER_HYPHEN,
  LOWER_UNDERSCORE,
  LOWER_CAMEL,
  UPPER_CAMEL,
  UPPER_UNDERSCORE,
} from '@haixing_hu/naming-style';
```

### <span id="convert">Converting String Formats</span>

Use the static instances of the `NamingStyle` class to convert string formats. 
For example, converting a `lower-hyphen` naming style other styles:

```js
import NamingStyle from '@haixing_hu/naming-style';

expect(NamingStyle.LOWER_HYPHEN.to(NamingStyle.LOWER_HYPHEN, 'hello-world')).toBe('hello-world');
expect(NamingStyle.LOWER_HYPHEN.to(NamingStyle.LOWER_UNDERSCORE, 'hello-world')).toBe('hello_world');
expect(NamingStyle.LOWER_HYPHEN.to(NamingStyle.LOWER_CAMEL, 'hello-world')).toBe('helloWorld');
expect(NamingStyle.LOWER_HYPHEN.to(NamingStyle.UPPER_CAMEL, 'hello-world')).toBe('HelloWorld');
expect(NamingStyle.LOWER_HYPHEN.to(NamingStyle.UPPER_UNDERSCORE, 'hello-world')).toBe('HELLO_WORLD');
```

### <span id="formats">Available Format Conversions</span>

This library offers the following format constants for conversion:

- `NamingStyle.LOWER_HYPHEN`: Lowercase letters separated by hyphens, e.g., 
  `"lower-hyphen"`. Commonly used in XML tag names.
- `NamingStyle.LOWER_UNDERSCORE`: Lowercase letters separated by underscores, 
  e.g., `"lower_underscore"`. Commonly used in C++ and Python variable and attribute names.
- `NamingStyle.LOWER_CAMEL`: Camel case with the first letter lowercase, e.g.,
  `"lowerCamel"`. Commonly used in Java variable and attribute names.
- `NamingStyle.UPPER_CAMEL`: Camel case with the first letter uppercase, e.g., 
  `"UpperCamel"`. Commonly used in Java and C++ class names.
- `NamingStyle.UPPER_UNDERSCORE`: Uppercase letters separated by underscores, 
  e.g., `"UPPER_UNDERSCORE"`. Commonly used in Java and C++ constant names.

### <span id="all-formats">Retrieving All Formats</span>

Use the `NamingStyle.values()` method to get a list of all available format constants:

```js
const formats = NamingStyle.values();
expect(formats).toEqual([
  NamingStyle.LOWER_HYPHEN,
  NamingStyle.LOWER_UNDERSCORE,
  NamingStyle.LOWER_CAMEL,
  NamingStyle.UPPER_CAMEL,
  NamingStyle.UPPER_UNDERSCORE,
]);
```

### <span id="get-format">Getting a Format by Name</span>

Use the `NamingStyle.of(name)` method to get a corresponding format object by 
name. This method accepts a string or a `NamingStyle` instance as an argument; 
string arguments are case-insensitive, and `'-'` and `'_'` are considered 
equivalent.

```js
let format = NamingStyle.of('lower-camel');
expect(format).toBe(NamingStyle.LOWER_CAMEL);
format = NamingStyle.of('LOWER-CAMEL');
expect(format).toBe(NamingStyle.LOWER_CAMEL);
format = NamingStyle.of('lower_camel');
expect(format).toBe(NamingStyle.LOWER_CAMEL);
format = NamingStyle.of('LOWER_CAMEL');
expect(format).toBe(NamingStyle.LOWER_CAMEL);
format = NamingStyle.of(NamingStyle.LOWER_CAMEL);
expect(format).toBe(NamingStyle.LOWER_CAMEL);
```

If the provided name does not exist, an error will be thrown.

### <span id="shortcuts">Shortcut Constants</span>

In addition to using the `NamingStyle` class member constants, you can directly
access different case styles through the following global constants:

```js
import { 
  LOWER_HYPHEN,
  LOWER_UNDERSCORE,
  LOWER_CAMEL, 
  UPPER_CAMEL, 
  UPPER_UNDERSCORE, 
} from '@haixing_hu/naming-style';

expect(LOWER_HYPHEN.to(LOWER_HYPHEN, 'hello-world')).toBe('hello-world');
expect(LOWER_HYPHEN.to(LOWER_UNDERSCORE, 'hello-world')).toBe('hello_world');
expect(LOWER_HYPHEN.to(LOWER_CAMEL, 'hello-world')).toBe('helloWorld');
expect(LOWER_HYPHEN.to(UPPER_CAMEL, 'hello-world')).toBe('HelloWorld');
expect(LOWER_HYPHEN.to(UPPER_UNDERSCORE, 'hello-world')).toBe('HELLO_WORLD');
```

## <span id="contributing">Contributing</span>

If you encounter any issues or have suggestions for improvements, feel free to
submit an issue or PR to our [GitHub repository].

## <span id="license">License</span>

`naming-style` is licensed under Apache 2.0. For more details, please refer to 
the [LICENSE](LICENSE) file.

[`naming-style`]: https://npmjs.com/package/@haixing_hu/naming-style
[GitHub repository]: https://github.com/Haixing-Hu/js-naming-style
