---
layout:     post
title:      import和require的区别
subtitle:   import require
date:       2019-6-6
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - javascript
    - 笔记
    - es6
---
# import和require区别
### 1.遵循的规范不同
- require: AMD规范引入方式
- import是es6的一个语法标准，如果兼容浏览器必须转化成es5

### 2. 调用时间不同
- require: 是运行时调用，所以require理论上可以运用在代码的任何地方
- import: 是编译时运行，必须放在文件开头

### 3. 本质
- require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
- import是解构过程，但是目前所有引擎都没有实现import,我们在node中使用babel支持es6，也仅仅将ES6转码为ES5再执行，import语法会被转码为require

## require/exports
遵循CommonJs/AMD,只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化。
```
    const fs = require('fs')
    exports.fs = fs
    module.exports = fs

    // 异步加载，代码分割
    require.ensure
```

## import / export
遵循ES6规范，支持编译时静态分析，便于js引入宏和类型检验，动态绑定
```
    import fs from 'fs'
    import { default as fs } from 'fs'
    import { readFile } from 'fs'
    import { readFile as read } from 'fs'
    import fs, {readFile} from 'fs'

    export default fs
    export const fs
    export function readFile
    export {readFile, read}
    export * from 'fs'
```

1. 通过require引入基础数据类型时，属于复制该变量
2. 通过reqire引入复杂数据类型，数据浅拷贝该对象
3. 出现模块之间循环引用时，会输出已经执行的模块，而未执行的模块不输出
4. CommonJs模块默认export的时一个对象，即导出的时基础数据类型

## 总结
- requre: 运行时加载，CommonJs/AMD规范；社区方案，提供了服务器、浏览器的模块加载方案。只能在运行时确定模块的依赖关系及输入和输出的变量,无法进行静态优化。
- import: 编译时加载，ES6规范；语言规则层面支持模块功能。支持编译时静态分析，便于JS引入宏和类型检验。动态绑定