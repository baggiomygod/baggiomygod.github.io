---
layout:     post
title:      typescript之基础类型
subtitle:   
date:       2018-8-16
author:     wengfan
header-img: img/post-bg-debug.png
catalog: true
tags:
    - typescript
    - 学习笔记
---
# typescript 之基础类型
### 布尔
        ```
            let isDone: boolean = false
        ```
### 数字
        ```
            let num:number = 123
            let num:number = 0xf00d
        ```
### 字符串类型
        ```
            let str:string = 'ss'
        ```

### 数组
        ```
            // number类型的数组
            let list: number[] = [1,2,3]
            let list: string[] = ['a','b','c']
            // 数组泛型
            let list: Arrat<number> = [12,3,4]
        ```
### 元组Tuple
        元组类型允许表示一个已知元素数量和类型的数组，各个元素的类型不必相同。
        ```
            // Declare a tuple type 生命一个元组类型
            let x: [string, number]
            x = ['sss', 12] // ok
            x = [10, 'ss'] // error
        ```

        
    当访问一个越界的元素，会使用联合类型替代
    ```
        x[3] = 'world'
        console.log(x[5].toString())
    ```

### 枚举
    enum类型是对js标准数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字
    ```
        enum Color {Red, Green, Blue}
        let c: Color = Color.Green
    ```

    默认情况下，从0开始为元素编号。你也可以手动的指定成员的数值。
    ```
        enum Color {Red = 1, Green, Blue}
        let c: Color = Color.Green
        console.log(c) // 2
    ```
    或者，全部都采用手动赋值
    ```
        enum Color {Red = 1, Green = 3, Blue = 5}
        let c: Color = Color.Green
        console.log(c) // 3
    ```

    枚举类型提供的一个便利是你可以由枚举的值得到它的名字
    ```
        enum Color {Red = 1, Green, Blue}
        let colorName: string = Coloe[2]

        console.log(colorName) // Green
    ```

    Any
    有时候，我们想为哪些编程阶段还不清楚类型的变量指定一个类型。这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。这种情况下，我们不希望类型检查器对这些值进行检查而是直接让他们通过编译阶段的价差。
    ```
        let notSure: any = 4
        notSure = 'sss'
        notSure = false
    ```

    当你只知道一部分数据类型时：
    ```
        let list = any[] = [1, false, 'sss']

        list[1] = 100
    ```

    Void  没有任何类型
    某种程度上说，void类型像是与any类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型时void
    ```
        function warnUser(): void {
            alert('sss')
        }
    ```

    Null & undefined

    typescript里，undefined和null两者各有自己的类型undefined, null.

    ```
        let u:  undefined = undefined
        let n: null = unll
    ```
> 默认情况下null和undefined是所有类型的子类型。就是说你可以把null,undefined赋值给number类型的变量

     当你指定--strictNullChecks标记，null和undefined只能赋值给void和他么各自。
     这能避免很多常见的问题。
     也许在某处你想传入一个string，null 或 undefined ，你可以使用联合类型 string | null | undefined

> 注意: 我们鼓励尽可能地使用 --strictNullChecks

### Never
    never 类型表示的时哪些用不存在的值得类型。
    例如， naver类型时哪些**总是会抛出异常或根本就不会有返回值的函数表达式** 或 **箭头函数表达式的返回值类型**；变量也可能是never类型，当它们被永不为真的类型保护所约束时

    never类型是任何类型的子类型，也可以赋值给任何类型，
        ```
            // 返回never的函数必须存在无法达到的终点
            function error(message: string): never {
                throw new Error(message)
            }

            // 推断的返回值类型为 never
            function fail() {
                return error('sss')
            }

            // 返回never的函数必须存在不发到达的终点
            function infiniteLoop(): never {
                while (true) {
                    
                }
            }
        ```

### 类型断言

        有时候你会遇到这样的情况，你会比typescript更了解某个值得详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型

        通过类型断言的方式可以告诉编译器，“相信我，我知道自己在干什么”。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起左右。typescript会假设你，程序员，已经进行了必须的检查

        类型断言的两种方式：两种方式等价
        1. 尖括号
        ```
            let someValue: any = "sadsa"
            let strLength: number = (<string>someValue).length // <类型断言>str
        ```

        2. as语法(jsx里只能使用这种)
        ```
            let someValue: any = "dsada"
            let strLength: number = (someValue as string).length
        ```
        

