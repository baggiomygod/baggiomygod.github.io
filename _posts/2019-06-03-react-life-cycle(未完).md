
---
layout:     post
title:      react 生命周期
subtitle:   react
date:       2019-6-3
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - react
---

# react生命周期
- 初始化阶段：
  - getDefaultProps:获取实例的默认属性
  - getInitialState:获取每隔实例的初始化状态
  - componentWillMount: 组件即将而被状态，渲染到页面上
  - render: 组件在这里生成虚拟DOM节点
  - componentDidMounted: 组件真正在被装在之后
- 运行中状态
  - componentWillReceiveProps: 组件将要接收属性的时候调用
  - shouldComponentUpdate: 组件接受到新属性或者新状态的时候
  - componentWillUpdate: 组件将更新不能修改属性和状态
  - render: 组件重新渲染
  - componentDidUpdate: 组件已更新
- 销毁阶段
  - componentWillUnmount：组件即将销毁

