---
layout:     post
title:      typescript之命名空间
subtitle:   官方文档 笔记
date:       2018-8-27
author:     wengfan
header-img: img/post-bg-ts.png
catalog: true
tags:
    - typescript
    - 学习笔记
---
# 命名空间
> 任何使用```module```关键字声明的一个内部模块的地方都应该使用namespace关键字来替换。

## 第一步
定义一个简单的字符串验证器，假设你会使用它们来验证表单里的yoghurt输入或验证外部数据
```
    interface StringValidator{
        isAcceptable(s:string): boolean
    }

    let letterRegexp = /^[A-Za-z]+$/
    let numberRegexp = /^[0-9]+$/

    // 验证字母
    class LetterOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
    // 验证数字
    class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }

    let strings = ["Hello", "98052", "101"];

    let validators:{ [s:string]: StringValidator } = {}
    validators["ZIP code"] = new ZipCodeValidator();
    validators["Letters only"] = new LettersOnlyValidator();

    for(let s of strings) {
        for (let name in validators) {
            let isMatch = validators[name].isAcceptable(s)
            console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`)
        }
    }
```

### 命名空间

随着更多验证器的加入，我们需要一种手段来阻止代码，以便于在记录它们类型的同时还不用担心其它对象产生命名冲突。因此，我们把验证器包裹到一个命名空间内，而不是放在全局命名空间

下面的例子，我们把所有的**验证器**方法哦一个叫```Validation```的命名空间里。因为我们想让这些接口和类在命名空间之外也是可访问的，所以需要使用```export```.相反的，变量 lettersRegexp和numberRegexp是实现的细节，不需要导出，因此它们在命名空间外是不能访问的。在文件末尾的测试代码里，由于是在命名空间之外访问，因此需要限定类型的名称，比如 Validation.LettersOnlyValidator。
```
    namespace Validation {
        export interface StringValidator {
            isAcceptable(s: string): boolean;
        }

        const lettersRegexp = /^[A-Za-z]+$/;
        const numberRegexp = /^[0-9]+$/;

        export class LettersOnlyValidator implements StringValidator {
            isAcceptable(s: string) {
                return lettersRegexp.test(s);
            }
        }

        export class ZipCodeValidator implements StringValidator {
            isAcceptable(s: string) {
                return s.length === 5 && numberRegexp.test(s);
            }
        }
    }

    // Validators to use
    let validators: { [s: string]: Validation.StringValidator; } = {};
    validators["ZIP code"] = new Validation.ZipCodeValidator();
    validators["Letters only"] = new Validation.LettersOnlyValidator();

    for (let s of strings) {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
        }
    }
```

### 分离到多文件
当应用变得越来越大时，我们需要将代码分离到不同文件中以便维护

##### 多文件命名空间
Validation.ts
```
    namespace Validation {
        export interface StringValidator {
            isAcceptable(s: string): boolean;
        }
    }
```
LettersOnlyValidator.ts
```
    /// <reference path="Validation.ts" />
    namespace Validation {
        const lettersRegexp = /^[A-Za-z]+$/;
        export class LettersOnlyValidator implements StringValidator {
            isAcceptable(s: string) {
                return lettersRegexp.test(s);
            }
        }
    }
```
ZipCodeValidator.ts
```
    /// <reference path="Validation.ts" />
    namespace Validation {
        const numberRegexp = /^[0-9]+$/;
        export class ZipCodeValidator implements StringValidator {
            isAcceptable(s: string) {
                return s.length === 5 && numberRegexp.test(s);
            }
        }
    }

```
Test.ts
```
    /// <reference path="Validation.ts" />
    /// <reference path="LettersOnlyValidator.ts" />
    /// <reference path="ZipCodeValidator.ts" />

    // Some samples to try
    let strings = ["Hello", "98052", "101"];

    // Validators to use
    let validators: { [s: string]: Validation.StringValidator; } = {};
    validators["ZIP code"] = new Validation.ZipCodeValidator();
    validators["Letters only"] = new Validation.LettersOnlyValidator();

    // Show whether each string passed each validator
    for (let s of strings) {
        for (let name in validators) {
            console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
        }
    }
```

### 别名
另一种简化命名空间操作的方法是使用import q = x.y.z给常用的对象起一个短的名字。 不要与用来加载模块的 import x = require('name')语法弄混了，这里的语法是为指定的符号创建一个别名。 你可以用这种方法为任意标识符创建别名，也包括导入的模块中的对象。
```
    namespace Shapes {
        export namespace Polygons {
            export class Triangle { }
            export class Square { }
        }
    }

    import polygons = Shapes.Polygons;
    let sq = new polygons.Square(); // Same as "new Shapes.Polygons.Square()"
```

> 导入没有.d.ts的第三方库，自己应如何写一个.d.ts文件？
## 使用其他的js库
为了描述不是用typescript便携的类库的类型，我们需要声明类库导出的API。由于大部分程序库只提供少数的顶级对象，命名空间是用来表示它们的一个好办法

我们称其为**声明**是因为它不是外部程序的具体实现。我们常在.d.ts里写这些声明。

### 外部命名空间

流行的程序库D3在全局对象d3里定义它的功能。因为这个库通过一个<script>标签加载（不通过模块加载器），它的声明文件使用内部模块来定义它的类型。

为了让typescript编译器识别它的类型，我们使用外部命名空间声明。

d3.d.ts
```
    declare namespace D3 {
        export interface Selectors {
            select: {
                (selector: string): Selection;
                (element: EventTarget): Selection;
            };
        }

        export interface Event {
             x: number;
            y: number;
        }

        export interface Base extends Selectors {
            event: Event;
        }
    }
    declare var d3:D3.base
```