---
layout:     post
title:      DOM相关知识
subtitle:   
date:       2018-8-30
author:     wengfan
header-img: img/post-bg-js-version.jpg
catalog: true
tags:
    - es6
    - 面试
    - 笔记
---
# DOM
### DOM事件的级别
#### DOM0 
```
    element.onclick=funciton(){}
```

#### DOM2
DOM2阶段定义了addEventListener方法来注册事件
> attachEvent---IE
``` 
    element.addEventListener('click', function(){

    }, false) // false:冒泡，true: 捕获
```

#### DOM3 
DOM3阶段添加了一些新的事件:mouse keyup...
element.addEventListener('keyup', function(){

},false)

> DOM1 设计时没有和事件相关的内容

### DOM事件模型（冒泡 捕获）
- 冒泡
- 捕获
  
### DOM事件流、具体流程
完整是事件流分3个阶段:
1. 捕获阶段: 事件从window传到目标元素的过程(第一个接收到事件的对象是window-->document-->html-->body-->...-->button)
2. 目标阶段: 
3. 冒泡阶段: 从目标元素到达window对象

js获取html, document.documentElement, 获取HTML节点
```
    document.documentElement

    <html>
        ...
    </html>
```
获取body：
document.body

### Event对象的常见应用

- event.preventDefault() ---阻止默认事件
- event.stopPropagation() --- 阻止事件冒泡
- event.stopImmediatePropagatopn()
    除了阻止冒泡，还阻止这个元素上绑定的同类型的事件

> MDN解释：
如果有**多个相同类型事件**的监听函数绑定到同一个元素，当该类型事件触发时，它们会被按照被添加的顺序执行。如果其中某个函数执行了```event.stopImmediatePropagation()```方法，则当前元素剩下的监听函数将不会被执行

- event.currentTarget --- 绑定事件的元素
- event.target --- 当前被点击的元素
```
      <div id="parent">
        <button>1</button>
        <button>2</button>
        <button>3</button>
    </div>
  <script>
    var parentEl = document.getElementById('parent')
    parentEl.addEventListener('click', (e) => {
      let currentTarget = e.currentTarget
      let target = e.target

      console.log('绑定事件的元素:', currentTarget)
      console.log('事件触发的元素:', target)
    }, false)

  </script>
```
以上代码：当点击button1时
绑定事件的元素currentTarget:', <div id="parent"></div>
事件触发的元素target:', <button>1<button>

以上代码：当点击parent时
绑定事件的元素currentTarget:', <div id="parent"></div>
事件触发的元素target:', <div id="parent"></div>

### 自定义事件
- Event()
```
    // 1.定义自定义事件
    var Eve = new Event('custome')

    // 2.注册自定义事件
    ele.addEventListener('custome', () => {

    }, false)

    // 3.触发这个事件
    ele.dispatchEvent(Eve)
```

- CustomEvent
可以为自定义事件添加一些数据, 其他与Event相同
```
    var customeEve = new CustomEvent('custome', Options)
```