---
layout:     post
title:      js类型转换
subtitle:   
date:       2018-9-01
author:     wengfan
header-img: img/post-bg-js-version.jpg
catalog: true
tags:
    - es6
    - 面试
    - 笔记
---
# 类型转换
### 1. 显示类型换砖
- Number
    1. undefined string ---> NaN
    2. null '' ---> 0
    3. '1' ---> 1
    4. {a:1} ---> NaN: 
        对象的转换过程是：
        1. 先调用对象的valueOf()方法
        2. 如果不是原始类型，调用toString
        3. 如果是原始类型Number()进行转换

- String
  原始类型转换：

  对象类型转换：
    1. 先对对象使用toString()方法
    2. 如果返回的时原始类型---String()
    3. 返回符合类型---在调用valueOf()----原始类型---Sring()
- Boolean

### 2. 隐式类型转换
```
   [] + []   // ''  
   [] + {}   // [object, object]
   {} + []   // 0: {}当做代码块， + [] ---> 0
   {} + {}   // "[object Object[object Object]"
   true + true // 2
   1 + {a:1}  // '1[object,object]'
```

