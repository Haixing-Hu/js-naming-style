# @haixing_hu/naming-style 

[![npm package](https://img.shields.io/npm/v/@haixing_hu/naming-style.svg)](https://npmjs.com/package/@haixing_hu/naming-style)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![English Document](https://img.shields.io/badge/Document-English-blue.svg)](README.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-naming-style/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-naming-style/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-naming-style/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-naming-style?branch=master)

[naming-style] 是一个JavaScript库，用于转换标志符的命名风格。它支持多种编程语言的命名规范，
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
npm install @haixing_hu/naming-style
```
或者通过 `yarn` 安装：
```bash
yarn add @haixing_hu/naming-style
```

## <span id="example">使用示例</span>

```js
import NamingStyle from '@haixing_hu/naming-style';

const str = 'hello-world-boy';
const converted = NamingStyle.LOWER_HYPHEN.to(NamingStyle.LOWER_CAMEL, str);
console.log(converted);     // 输出 "helloWorldBoy"
```

## <span id="usage">使用方法</span>

### <span id="import">导入</span>

导入`NamingStyle`类：
```js
import NamingStyle from '@haixing_hu/naming-style';
```
或者导入表示各种命名风格的全局常量：
```js
import {
  LOWER_HYPHEN,
  LOWER_UNDERSCORE,
  LOWER_CAMEL,
  UPPER_CAMEL,
  UPPER_UNDERSCORE,
} from '@haixing_hu/naming-style';
```

### <span id="convert">转换字符串格式</span>

使用 `NamingStyle` 类的静态实例来转换字符串格式。例如，将 `lower-hyphen` 命名风格的字符串
转换为其他风格：

```js
import NamingStyle from '@haixing_hu/naming-style';

expect(NamingStyle.LOWER_HYPHEN.to(NamingStyle.LOWER_HYPHEN, 'hello-world')).toBe('hello-world');
expect(NamingStyle.LOWER_HYPHEN.to(NamingStyle.LOWER_UNDERSCORE, 'hello-world')).toBe('hello_world');
expect(NamingStyle.LOWER_HYPHEN.to(NamingStyle.LOWER_CAMEL, 'hello-world')).toBe('helloWorld');
expect(NamingStyle.LOWER_HYPHEN.to(NamingStyle.UPPER_CAMEL, 'hello-world')).toBe('HelloWorld');
expect(NamingStyle.LOWER_HYPHEN.to(NamingStyle.UPPER_UNDERSCORE, 'hello-world')).toBe('HELLO_WORLD');
```

### <span id="formats">可用的格式转换</span>

本函数库提供以下格式常量，并允许在它们之间进行转换：

- `NamingStyle.LOWER_HYPHEN`：使用连字符分隔的小写字母，例如 `"lower-hyphen"`。
  此命名风格常用于 XML 的标签名。
- `NamingStyle.LOWER_UNDERSCORE`：使用下划线分隔的小写字母，例如 `"lower_underscore"`。
  此命名风格常用于 C++ 和 Python 的变量名和属性名。
- `NamingStyle.LOWER_CAMEL`：首字母小写的驼峰命名法，例如 `"lowerCamel"`。
  此命名风格常用于 Java 的变量名和属性名。
- `NamingStyle.UPPER_CAMEL`：首字母大写的驼峰命名法，例如 `"UpperCamel"`。  
  此命名风格常用于 Java 和 C++ 的类名。
- `NamingStyle.UPPER_UNDERSCORE`：使用下划线分隔的大写字母，例如 `"UPPER_UNDERSCORE"`。
  此命名风格常用于 Java 和 C++ 的常量名。

### <span id="all-formats">获取所有格式</span>

使用 `NamingStyle.values()` 方法可获取所有可用的格式常量列表：

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

### <span id="get-format">根据名称获取格式</span>

使用 `NamingStyle.of(name)` 方法可根据名称获取对应的格式对象。
该方法接受一个字符串或一个 `NamingStyle` 实例作为参数；字符串参数大小写不敏感，`'-'`和`'_'`被视为等同。

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

如果提供的名称不存在，将抛出错误。

### <span id="shortcuts">快捷访问方式</span>

除了使用 `NamingStyle` 类成员常量，还可以通过以下全局常量直接访问不同的大小写格式：

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

## <span id="contributing">贡献方法</span>

如果你发现任何问题或有改进建议，欢迎提交 issue 或者 PR 到本项目的 [GitHub 仓库]。

## <span id="license">版权协议</span>

[naming-style] 采用 Apache 2.0 许可证。详细信息请查阅 [LICENSE](LICENSE) 文件。

[naming-style]: https://npmjs.com/package/@haixing_hu/naming-style
[GitHub 仓库]: https://github.com/Haixing-Hu/js-naming-style
