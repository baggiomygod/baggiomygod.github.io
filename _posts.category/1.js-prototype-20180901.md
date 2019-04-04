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

# 原型链
## 创建对象的几种方法
1.普通对象
   ```
    const obj1 = {a: 1}
    const obj2 = new Object({name: '1'})
   ```
2.构造函数
   ```
    const M = function(){}
    const obj3 - new M()
   ```
3.Object.create()
   
   ```
    const P = {name: 'ss'}

    const obj4 = Object.create(P)
   ```

## 原型链

### 1.首先理解构造函数、实例、原型对象三者的关系
构造函数有一个prototype属性，指向原型对象
原型原型对象的constructor属相指向它的构造函数
```
    function M (){}
    M.prototype.constrtucot === M // true
```

构造函数与实力
构造函数与实力关联

实力的__proto__指向其构造函数的原型对象
```
    const m = new M()
    m.__proto__

    m.__proto__ === M.prototype // true
```

### 2. 什么是原型链
1. m.__ptoto__---->M.prototype
2. M.prototype.__proto__---->Object.prototype

当访问一个实例的属性时，如果没有就会通过__proto__属性，一层层往上找--->直到Object.prototype

> 只有实例有__proto__,
> 构造函数也有这个属性因为它同时也是实例
> 普通对象```const obj = {a:1}```的构造函数是Object
> ```obj.__proto__ === Object.prototype // true```
> ```obj instanceof Object // true```


### 3.instanceof
instanceof的原理是判断实例的__proto__属性和其构造函数的prototype属性是不是同一个引用

```
// 因为m.__proto__ === M.prototype true
m instanceof M // true

// 因为M.prototype.__proto__ === Object.prototype true
M instanceof Object // true

// 所以
m instanceof Object // true
```

### **Object.prototype.__proto__**值是null
```
    Object.prototype.__proto__ // null
```

**instanceof 只要是在同一条原型链上都返回true**
使用constructor去判断对象是否是某个构造函数的实例
实例对象的constructor属性指向其构造函数，比用instanceof判断某个实例是否有某个构造函数生成更严谨
```
    m.constructor === M // true

    m.constructor === Object // false
```

### new 运算符
1. 一个新对象被创建
2. 构造函数被执行

```let p = new Person()```
new创建构造函数内部的流程:
```
  1. let p = {}; // 一个新对象被创建，作为将要返回的对象实例。
  2. p.__proto__ = Person.prototype; // 将对象的__proto__属相指向构造函数的prototye
  3. Person.apply(p); // 将空对象赋值给构造函数的this（上下文this指向新实例，也就是this与实例关联）
  4. 开始执行构造函数内部代码：
    > 如果构造函数返回一个对象，那么这个对象将会取代new出来的对象。
    > 如果构造函数没有返回对象，那么实例就是第一部创建的p对象
    > 如果构造函数返回一个基础数据类型，实例也是第一部创建的p对象
```
  等价于
```
    function defineNew(Cls){
      let o = {};
      o.__proto__ = Cls.prototype;
      let result = Cls.call(o);
      // 如果构造函数返回是对象，对象将代替new出来的对象
      if (typeof result === 'object'){
        return result;
      } else {
        return o;
      }
    }
```
