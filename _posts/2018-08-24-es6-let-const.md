---
layout:     post
title:      es6之let const
subtitle:   let const var
date:       2018-8-16
author:     wengfan
header-img: img/post-bg-hacker.jpg
catalog: true
tags:
    - es6
    - 面试
    - 笔记
---

# es6 let const 相比var的好处

### 1. 开发中使用var的问题
1. hosting 变量提升机制（摘自《理解ES6》）
    在函数作用于或全局作用域通过```var```关键字声明的变量，无论实际上是在哪里声明的，都会被当成当前作用域顶部声明的变量。
    以下函数举例说明这个问题：
    ```
        function getValue(condition) {
            if (condition) {
                var value = "blue"
                return value
            } else {
                console.log('value:', value)
                // 此处可以访问变量value,其值问undefined
                return null
            }

            // 此处可以访问变量value值为undefiend
        }

        getValue('test') // 'test'
        getValue(false) // value: undefined
    ```
    经过javascript引擎编译后
    以上代码等效于：
    ```
        function getValue(condition) {
            var value;
            if (condition) {
                value = "blue"
                return value
            } else {
                console.log('value:', value)
                // 此处可以访问变量value,其值问undefined
                return null
            }
        }
    ```
    我们可以看到value声明被提升到函数顶部，因此在else语句中也能访问到value(其值为undefined).而书写这点代码的本意可能是在if中创建并初始化value.

> 因此ECMAScript6引入块级作用于来清华变量声明周期的控制

### 2. 块级声明（词法作用于）
块级声明用于声明**作用于之外无法访问的变量**。
会计作用于存在于
- 函数内部 ```function () { 这里 }```
- 块中  ```{ 这里 }```

### 3. let声明
1. let声明的变量，其作用于被限制在当前代码块中。
将上面的例子稍作修改：
```
function getValue(condition) {
            if (condition) {
                let value = "blue"
                return value
            } else {
                // 此处可以无能访问变量value,会报错
                console.log('value:', value) // Uncaught ReferenceError: value is not defined
                return null
            }
        }
```

2. let禁止重声明
    在同一作用于中，不能声明相同标识符的变量
    ```
        // 1. 同一作用域
        var count = 1
        let count // 抛出错误

        // 2. var变量提升
        let count = 1
        if (true) {
            var count // 抛出错误
        }

        // 3. let在块级作用域中
        var count = 1
        if (true) {
            lat count // ok
        }
    ```

### 4. const
const与let的不同之处在是：
- 声明时必须初始化
- 不能被再赋值（如果是对象，其属性可以被修改）

### 5. 临时死区TDZ Temporal Dead Zone
> 临时死区后面简称TDZ

如果在let,const声明之前访问变量，会报错

javascript引擎处理变量声明时：
- 遇到var将其提升到作用域顶部
- 遇到let,const将其放到TDZ中

### 6. 循环中的块作用域绑定
1. var在循环中使用
```
    var arr = []
    for(var i = 0; i< 5; i++) {
        arr.push(function () {
            console.log(i)
        })
    }

    arr.forEach(function(itemFun){
        itemFun() // 输出5次 5
    })
```
以上代码输出5次5，而不是0，1，2，3，4
原因是，arr数组中的每个函数都保留了对i的引用，当for循环结束时，i等于5。此时调用itemFun()，打印出来的i都是5

仍用var声明，修复以上问题
```
    var arr = []
    for(var i = 0; i< 5; i++) {
        arr.push(
            // IIFE立即执行函数，每个i都都创建一个副本并保存为变量value.
            (function (value) {
                return function(){
                    console.log(value)
                }
            })(i)
        )
    }

    arr.forEach(function(itemFun){
        itemFun() // 输出 0,1,2,3,4
    })
```

2. 循环中使用let
let 声明在循环中，**每次迭代循环都会创建一个新的变量，并已之前迭代中同名的值将其初始化。**
```
    var arr = []
    for(let i = 0; i< 5; i++) {
        arr.push(function () {
            console.log(i)
        })
    }

    arr.forEach(function(itemFun){
        itemFun() // 输出5次 5
    })
```
    
### 7. 全局作用于绑定
1. var 存在的另一个问题是，在全局作用域下var声明的变量,会作为全局对象的属性。它会覆盖全局对象上的同名属性
2. let，const在全局作用域下声明不会被添加到全局对象上。因此它只是屏蔽了全局对象上的同名属性，而不会覆盖它
```
    RexExp // function(){...}
    window.RexExp // function(){...}
    var RegExp = 'sss'
    window.RexExp // 'sss'
```
let/const
```
    RexExp // function(){...}
    window.RexExp // function(){...}
    let RegExp = 'sss'
    window.RexExp // function(){...}
    RegExp // 'sss'
```

### 8. let conts实践中使用
 
默认使用const, 当确定只需要改变是使用let

因为，大部分变量的值在初始化后不会再改变（预料之外的变量值的改变是很多bug的源头）



### 9 总结
1. 使用let,const声明变量，我们只在需要它们的地方声明，因此大幅降低了产生错误的几率
2. 循环中使用let,const可以得到预期的结果，而使用var在某些情况下需要做更多的处理来规避错误的风险
3. 默认使用const,只在确实需要改变变量值的时候使用let.这样可以在某种程度上实现代码的不可变，从而防止某些错误产生