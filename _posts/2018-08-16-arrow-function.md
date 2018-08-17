---
layout:     post
title:      箭头函数arrow function
subtitle:   
date:       2018-8-17
author:     wengfan
header-img: img/post-bg-hacker.jpg
catalog: true
tags:
    - es6
    - 笔记
---
# ES6之箭头函数

### 1.箭头函数有花括号{}与没有的区别
 - （) => {} 默认没有返回值，如果需要返回值需要写```return```
 -  () => 1 + 1 默认返回，
 ```
    const arrowFun1 = () => { 1 + 1 }
    const arrowFun2 = () => 1 + 1
    alert(arrFun1()) // undefined
    alert(arrowFun2()) // undefined
 ```
 以上代码等效
 ```
    var arrowFun1 = function () { 1 + 1; };
    var arrowFun2 = function () { return 1 + 1; };
    alert(arrFun1());
    alert(arrowFun2());
 ```

 有时我们也会看到箭头函数带圆括号的，其实它和第二种情况是一样的，默认return
 ```
 const arrowFun3 = () => (1 + 1)
 //等效
 var arrowFun3 = function () { 
     return (1 + 1); 
    };
 ```
