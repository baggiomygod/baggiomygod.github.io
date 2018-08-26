---
layout:     post
title:      typescript之接口
subtitle:   官方文档 笔记
date:       2018-8-256
author:     wengfan
header-img: img/post-bg-ts.png
catalog: true
tags:
    - typescript
    - 学习笔记
---

# typescript 之接口
typescript的核心原则之一就是对值所就要有的解构进行类型检查。
在typescript中，接口的左右就是为这些类型命名和为你的代码和第三方代码定义契约
    
### 接口初探
labelValue接口就好比一个名字，它代表一个label属性且类型为string的对象。
需要注意的是，我们在这里并不能像其他语言里一样，说传给printLabel的对象实现了这个接口。
我们只会去关注值得外形。只要传入的对象满足上面提到的必要条件，那么它就是被允许的

> 注意： 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
```
        interface LabelledValue{
            label: string
        }

        function printLabel(labelledObj: LabelledValue) {
            alert(labelledObj.label)
        }

        let obj = {
            size: 10, label: 'sss'
        }

        printLabel(obj)
```

### 可选属性
    接口里的属性不全都是必需的。有些是指在某条件下存在，或者根本不存在。可选属性在应用“optionbags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了

```

```
    可选属性的好处之一是可以对可能存在的属性进行预定义，
    二是，可以捕获引用了不存在的属性时的错误
```

```

### readonly vs const
最简单的判断readonly还是const得方法是看要把它作为变量使用还是作为一个属性。
- const: 作为一个变量
- readonly: 作为属性

### 额外的属性检查
如果传入接口为定义的属性，ts会对其进行检查把那个抛出错误提示

```
interface SquareConfig {
    color?: string;
    width?: number;
}


let test: SquareConfig = {
    colour: 'red', // Type 'colour' is not assignable to type 'SquareConfig'.
    width: 1
}
```

如果确定这个对象可能具有某些特殊用途的额外属性。可以在接口中定义一个**字符串索引签名**

```
    interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}


let test: SquareConfig = {
    colour: 'red',   // ok
    width: 1
}
```


### 函数类型

接口也可以描述函数类型

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。它就是一个只有参数列表和返回值类型的函数定义。

参数列表里每隔参数都需要名字和类型
```
    interface ISearchFunc {
        (source: string, substring: string): boolean
    }

    let searchFun: ISearchFunc
    // 函数类型的类型检查，函数的参数名不需要与接口定义的名字匹配。
    searchFun = function (sou:string, sub:string) {
        //...
        return false
    }
    // 参数也可以不指定类型，ts类型系统会推断出参数类型
    searchFun2 = function (sou, sub) {
        //...
        return false
    }
    searchFun2(1,2) // error

```

### 可索引的类型
我们也可以描述哪些能够通过“索引的得到”的类型，如: arr[10], obj["keyName"]。
```
        interface StringArray{
            [index: number]: string // 当用number去索引StringArray时会得到string类型的返回值
        }
        let myArray: StringArray

        myArray = ["bob", "fred"]

        let myStr: string = myArray[0]
```

    共有两种索引签名：字符串和数字。可以同时使用两种类型的索引，但是**数字索引的返回值必须是字符串索引返回值类型的子类型**
    这是一位使用number来索引时，js会将它转换成string然后去索引对象。
```
        class Animal {
            name: string
        }
        class Dog {
            preed: string
        }

        interface Andog {
            [x: number]: Animal
            [x: string]: Dog
        }
```


### 类类型 
> 接口描述了类的公共部分，而不是公共和私有两个部分。它不会帮你检查类是否有某些私有成员
    ##### 实现接口
        ts也能够用它来明明确的墙纸一个类去符合某种契约
    ```
            // 类接口，需要有一个时间类型的currentTime属性
            interface ClockInterface {
                currentTime: Date
            }
            class Clock implements ClockInterface {
                currentTime: Date
                constructor(h: number, m: number) {

                }
            }
    ```

    你也可以在接口中描述一个方法，在类里实现它，
    ```
            interface ClockInterface {
                currentTime: Date
                setTime(d: Date)  // 描述一个方法
            }

            class Clock implements ClockInterface {
                currentTime: Date
                setTime(d: Date) {
                    this.currentTime = d
                }
                constructor(h: number, m: number)
            }
    ```
    接口描述一个类的**公共部分**，而不是公共和私有两部分。它不会帮你检查类是否具有某些私有成员
    
    ##### 类静态部分与实例部分的取悦
    
    当你操作类和接口的时候，你要知道类是具有两这个类型的：
            1. 静态部分的类型
            2. 实例的类型
    当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误
    ```
            interface ClockInterface{
                new (hour: number: minute: number)
            }
            class Clock implements ClockInterface {
                currentTime: Date
                constructor(h: number, m:number)
            }
    ```
    这里因为当一个类实现了一个接口时，只对其**实例**部分进行检查。constructor存在于类的静态部分，所以不在检查的乏味内。

因此，我们应该直接操作类的静态部分。
我们定义两个接口，ClockConstructor为构造函数所用，ClockInterface为实例方法所用

    ```
                interface ClockContructor {
                    new (housr: number, minute: number): ClockInterface
                }

                interface ClockInterface {
                    h:number
                    tick()
                }

                function createClock(ctor: ClockContructor, hour: number, minute: number): ClockInterface {
                    return new ctor(hour, minute)
                }

                class DigitalClock implements ClockInterface {
                    h: number
                    constructor(h: number, m: number) { 
                        
                    }
                    tick() {
                        console.log('beep beep')
                    }
                }

                class AnalogClock implements ClockInterface {
                    h:number
                    constructor(h: number, m: number) { }

                    tick() {
                        console.log('tick tick')
                    }
                }

                let digital = createClock(DigitalClock, 12, 7)
                let analog = createClock(AnalogClock, 1, 2)

                alert(digital.h)
                alert(analog.h)
    ```
### 继承接口

### 混合类型
    接口能够描述js里丰富的类型。因为js其动态灵活的特点，有事你会希望一个对象可以同时具有上面提到的多种类型
```
    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }

    function getCounter(): Counter {
        let counter = <Counter>function (start: number) { return start + 's' };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }

    let c = getCounter()
    alert(c(10))
    c.interval = 11
    alert(c.interval)
```
### 接口继承类
    当接口继承一个类类型时，它会继承类的成员但不包括其实现。就好像接口声明了所有类中存在的成员，但并没有提供具体的实现一样。
    接口同样会继承类的private和protected成员。
    **这意味着当你创建一个接口继承了一个拥有私有或收保护成员的类时，这个接口类型智能被这个类或其子类实现**

    当你有一个庞大的继承解构时这很有用，但要指出的时你的代码只在子类拥有特定属性时起作用。这个类除了继承至基类外，与其他类没有任何关系
```
    class Control {
            private state: any
        }
        /* SelectableCotrol包含了Control的所有成员，
           包括私有成员state.
           因为state是私有成员，所以只能够是Control的子类才能实现接口SelectableCotrol
           因为只有Control的子类才能够拥有一个声明与Control的自由成员state
        */

    // 实际上SelectableCotrol接口和拥有select方法的Control类是一样的。
    interface SelectableCotrol extends Control {
            select(): void
    }
    // Button 是Control的子类
    class Button extends Control implements SelectableCotrol{
            select() { 
                alert()
            }
        }

    class TextBox extends Control {
            select () {}
        }

    // error Image 不是Control的子类，不能实现接口SelectableCotrol，因为缺少state属性
    class Image implements SelectableCotrol {
            select() {

            }
        }


```
    




