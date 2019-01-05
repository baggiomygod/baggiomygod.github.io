---
layout:     post
title:      正则表达式lastIndex
subtitle:   RegExp lastIndex
date:       2019-01-03
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - 正则表达式
---

# 正则表达式lastIndex
```
const fileReg = /^.+\.(pdf|xlsx|xls|docx|doc)/ig // 匹配word pdf excel文件
console.log(fileReg.test(item.name)) // true
const isMatch = fileReg.test(item.name) // false
if (isMatch) {
    console.log('是XX文件')
} else {
    console.log('不是XX文件')
}
<!-- this.fileReg.lastIndex = 0 -->
```
这里第一次匹配返回了true,但是程序却进入了else语句

## lastIndex
js正则表达式的使用方式有两种
1. 正则表达式对象的方法，
    - exec(str):
    - test(str):
2. 字符串对象的方法
    - str.match(RegExp)
    - str.replace(RegExp, '')
    - str.split(search)

##### lastIndex属性用于规定下次匹配的其实位置
上次匹配的结果是由方法RegExp.exec()和RegExp.test()找到的，它们都以lastIndex属性多指的位置作为下一次检索的起始点

这样，就可以通过反复调用这两个方法来遍历一个字符串中的所有匹配文本。

且该属性只在**设置表示g才使用**

### 解决
1. 去掉g,不全局匹配
// 略
2. 将lastIndex设为0
```
const fileReg = /^.+\.(pdf|xlsx|xls|docx|doc)/ig // 匹配word pdf excel文件
console.log(fileReg.test(item.name)) // true
this.fileReg.lastIndex = 0
const isMatch = fileReg.test(item.name) // true
if (isMatch) {
    console.log('是XX文件') // 程序正确运行
} else {
    console.log('不是XX文件')
}
```

参考： https://blog.csdn.net/mr_lp/article/details/53670647