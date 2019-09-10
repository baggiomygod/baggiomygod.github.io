---
layout:     post
title:      js类
subtitle:   
date:       2018-9-02
author:     wengfan
header-img: img/post-bg-js-version.jpg
catalog: true
tags:
    - 面试
    - 笔记
    - 类
---
# 面向对象类
### 1. 声明一个类
ES5:
```
    function Animal(name) {
        this.name = name
    }
```
es6:
```
    class Animal{
        constructor(name) {
            this.name = name
        }
    }
```

## 2. 继承

### 2.1 借助构造函数实现继承
```
    // 父类构造函数
    function Animal(name){
        this.name = name
    }
    // 子类构造函数
    function Cat(){
        Parent.call(this, 'cat...')
        this.tyle = 'cat type'
    }
```
 > 构造函数继承：只继承了属性，没有继承原型链上的方法

### 2.2 借助原型链实现继承
```
    function Animal(name) {
        this.name = name
    }
    function Dog(){
        this.type = 'dog'
    }
    Dog.prototype = new Animal()
```
> 原型继承子类实例__proto__指向同一个原型对象，所以属性会被共享
```
    let dog1 = new Dog('d1')
    dog1.type // dog,这是自身的属性
    dog1.name // d1, 这是通过原型链读取的的值
    通过原型继承方式继承来的属性所有的子类的实例都可以访问到，也就是共享的
```

### 2.3 组合继承
```
    function Animal(name){
        this.name = name
    }
    function Cat(){
        Animal.call(this)  // 构造函数
        this.type = 'cat type'
    }
    Cat.prototype = new Animal() // 原型链

    let cat1 = new Cat() // 有自身的属性name和type, 不会再从原型链网上找， 因此不共享属性name
    let cat2 = new Cat() // 有自身的属性name和type, 不会再从原型链网上找， 因此不共享属性name
```
> 组合继承缺点，父级构造函数指定了两次：Animal.call(this),new Animal()

### 2.4组合继承优化

```
    function Animal(name){
        this.name = name
    }
    function Cat(){
        Animal.call(this)  // 构造函数
        this.type = 'cat type'
    }
    Cat.prototype = Animal.prototype  // 直接将子类原型指向父类原型
```
> 缺点实例的constructor指向了其构造函数的父类
```
    let c1 = new Cat()
    c1.__proto__ === Animal.prototype // true
```
### 2.5 组合继承优化2
```
    function Animal(name){
        this.name = name
    }
    function Cat(){
        Animal.call(this)  // 构造函数
        this.type = 'cat type'
    }
    // 通过Object.create方式创建，实现了隔离
    Cat.prototype = Object.create(Animal.prototype)
    // 然后在手动指定子类的constructor属性为Cat
    Cat.prototype.constructor = Cat 
```
Object.create(obj)创建的对象，通过__proto__属相访问obj属性
而Cat.prototype = Animal.prototype 方式直接指向Animal.prototype属性

```
    let c1 = new Cat()
    c1.__proto__ === Animal.prototype // false
    Cat.__proto__ === Animal.prototype // false
    // Cat.prototype属性是Object.create()创建返回的对象， 不直接是Animal
    Cat.prototype 
    // Animal{}
    // -__protp__:
    //      - constructor: f Animal(name)
    //      - __proto__: Object
```