# `case-format` 

[![npm package](https://img.shields.io/npm/v/@haixing_hu/case-format.svg)](https://npmjs.com/package/@haixing_hu/case-format)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![English Document](https://img.shields.io/badge/Document-English-blue.svg)](README.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-case-format/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-case-format/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-case-format/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-case-format?branch=master)

[case-format] 是一个JavaScript库，用于转换标志符名称的大小写风格。它支持多种编程语言的命名规范，
包括Java、C++和Python，能够方便地在不同的大小写风格之间进行转换。

## <span id="content">目录</span>

- [安装方法](#installation)
- [使用示例](#example)
- [使用方法](#usage)
  - [导入](#import)
  - [转换字符串格式](#convert)
  - [可用的格式转换](#formats)
  - [获取所有格式](#all-formats)
  - [根据名称获取格式](#get-format)
  - [快捷访问方式](#shortcuts)
- [贡献方法](#contributing)
- [版权协议](#license)

## <span id="installation">安装方法</span>

通过 `npm` 安装：
```bash
npm install @haixing_hu/case-format
```
或者通过 `yarn` 安装：
```bash
yarn add @haixing_hu/case-format
```

## <span id="example">使用示例</span>

```js
import CaseFormat from '@haixing_hu/case-format';

const str = 'hello-world-boy';
const converted = CaseFormat.LOWER_HYPHEN.to(CaseFormat.LOWER_CAMEL, str);
console.log(converted);     // 输出 helloWorldBoy
```

## <span id="usage">使用方法</span>

### <span id="import">导入</span>

导入`CaseFormat`类：
```js
import CaseFormat from '@haixing_hu/case-format';
```
或者导入表示各种命名风格的全局常量：
```js
import {
  LOWER_HYPHEN,
  LOWER_UNDERSCORE,
  LOWER_CAMEL,
  UPPER_CAMEL,
  UPPER_UNDERSCORE,
} from '@haixing_hu/case-format';
```

### <span id="convert">转换字符串格式</span>

使用 `CaseFormat` 类的静态实例来转换字符串格式。例如，将 `lower-hyphen` 
格式的字符串转换为 `lowerCamel` 格式：

```js
import CaseFormat from '@haixing_hu/case-format';

expect(CaseFormat.LOWER_HYPHEN.to(CaseFormat.LOWER_HYPHEN, 'hello-world')).toBe('hello-world');
expect(CaseFormat.LOWER_HYPHEN.to(CaseFormat.LOWER_UNDERSCORE, 'hello-world')).toBe('hello_world');
expect(CaseFormat.LOWER_HYPHEN.to(CaseFormat.LOWER_CAMEL, 'hello-world')).toBe('helloWorld');
expect(CaseFormat.LOWER_HYPHEN.to(CaseFormat.UPPER_CAMEL, 'hello-world')).toBe('HelloWorld');
expect(CaseFormat.LOWER_HYPHEN.to(CaseFormat.UPPER_UNDERSCORE, 'hello-world')).toBe('HELLO_WORLD');
```

### <span id="formats">可用的格式转换</span>

本函数库提供以下格式常量，并允许在它们之间进行转换：

- `CaseFormat.LOWER_HYPHEN`：使用连字符分隔的小写字母，例如 `"lower-hyphen"`。
  此命名风格常用于 XML 的标签名。
- `CaseFormat.LOWER_UNDERSCORE`：使用下划线分隔的小写字母，例如 `"lower\_underscore"`。
  此命名风格常用于 C++ 和 Python 的变量名和属性名。
- `CaseFormat.LOWER_CAMEL`：首字母小写的驼峰命名法，例如 `"lowerCamel"`。
  此命名风格常用于 Java 的变量名和属性名。
- `CaseFormat.UPPER_CAMEL`：首字母大写的驼峰命名法，例如 `"UpperCamel"`。  
  此命名风格常用于 Java 和 C++ 的类名。
- `CaseFormat.UPPER_UNDERSCORE`：使用下划线分隔的大写字母，例如 `"UPPER\_UNDERSCORE"`。
  此命名风格常用于 Java 和 C++ 的常量名。

### <span id="all-formats">获取所有格式</span>

使用 `CaseFormat.values()` 方法可获取所有可用的格式常量列表：

```js
const formats = CaseFormat.values();
expect(formats).toEqual([
  CaseFormat.LOWER_HYPHEN,
  CaseFormat.LOWER_UNDERSCORE,
  CaseFormat.LOWER_CAMEL,
  CaseFormat.UPPER_CAMEL,
  CaseFormat.UPPER_UNDERSCORE,
]);
```

### <span id="get-format">根据名称获取格式</span>

使用 `CaseFormat.of(name)` 方法可根据名称获取对应的格式对象。
该方法接受一个字符串或一个 `CaseFormat` 实例作为参数；字符串参数大小写不敏感，`'-'`和`'_'`被视为等同。

```js
let format = CaseFormat.of('lower-camel'); 
expect(format).toBe(CaseFormat.LOWER_CAMEL);
format = CaseFormat.of('LOWER-CAMEL');
expect(format).toBe(CaseFormat.LOWER_CAMEL);
format = CaseFormat.of('lower_camel');
expect(format).toBe(CaseFormat.LOWER_CAMEL);
format = CaseFormat.of('LOWER_CAMEL');
expect(format).toBe(CaseFormat.LOWER_CAMEL);
format = CaseFormat.of(CaseFormat.LOWER_CAMEL);
expect(format).toBe(CaseFormat.LOWER_CAMEL);
```

如果提供的名称不存在，将抛出错误。

### <span id="shortcuts">快捷访问方式</span>

除了使用 `CaseFormat` 类成员常量，还可以通过以下全局常量直接访问不同的大小写格式：

```js
import { 
  LOWER_HYPHEN,
  LOWER_UNDERSCORE,
  LOWER_CAMEL, 
  UPPER_CAMEL, 
  UPPER_UNDERSCORE, 
} from '@haixing_hu/case-format';

expect(LOWER_HYPHEN.to(LOWER_HYPHEN, 'hello-world')).toBe('hello-world');
expect(LOWER_HYPHEN.to(LOWER_UNDERSCORE, 'hello-world')).toBe('hello_world');
expect(LOWER_HYPHEN.to(LOWER_CAMEL, 'hello-world')).toBe('helloWorld');
expect(LOWER_HYPHEN.to(UPPER_CAMEL, 'hello-world')).toBe('HelloWorld');
expect(LOWER_HYPHEN.to(UPPER_UNDERSCORE, 'hello-world')).toBe('HELLO_WORLD');
```

## <span id="contributing">贡献方法</span>

如果你发现任何问题或有改进建议，欢迎提交 issue 或者 PR 到本项目的 [GitHub 仓库]。

## <span id="license">版权协议</span>

[case-format] 采用 Apache 2.0 许可证。详细信息请查阅 [LICENSE](LICENSE) 文件。

[case-format]: https://npmjs.com/package/@haixing_hu/case-format
[GitHub 仓库]: https://github.com/Haixing-Hu/js-case-format
