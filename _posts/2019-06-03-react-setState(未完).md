---
layout:     post
title:      react setState理解
subtitle:   react
date:       2019-06-03
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - react
---

# react之 setState
在代码调用setState函数之后，React会将传入的参数对象与数组当前的状态合并，然后触发所谓的调和过程（reconciliation）.经过调和过程，react会以相对高效的方式根据新的状态构建react元素树的节点差异，然后根据差异对界面进行最小化冲渲染。


## setState的注意点
1. setState通过引发一次组件的更新过程来引发重新绘制
2. 多次setState函数调用产生的效果会合并
3. setState不会立刻改变react组件的state值
4. setState调用引起的react的更新生命周期函数4个函数
   - shouldComponentUpdate
   - componentWillUpdate
   - render
   - componentDidUpdate


https://juejin.im/post/5b45c57c51882519790c7441
## react合成事件中的setState
合成事件:onChange, onClick
react为了解决跨平台，兼容性问题，自己封装了一套事件机制，代理了原生的事件。

## 声明周期函数中的setState
在componentDidmount等钩子函数中，setState是异步的

## setState中的批量更新


## 总结
1. setState 只在合成事件和钩子函数中是异步的，在原生事件和setTimeout中都是同步的
2. setState 的异步不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中无法立马拿到更新后的值，形式了所谓的‘异步’，可以通过setState({}, callbacl)中的callback拿到更新后的值
3. setState的批量更新优化也是建立在‘异步’(合成事件，钩子函数)智商的，在原生事件和setTimeout中不会批量更新，在‘异步’中如果对同一个值进行多次setState,setState的批量更新策略会对其进行覆盖，取最后一次的执行，如果同时setState多个不同的值，在更新时会对其进行合并更新、