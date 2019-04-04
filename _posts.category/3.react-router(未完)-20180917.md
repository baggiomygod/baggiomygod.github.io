---
layout:     post
title:      react-router
subtitle:   
date:       2018-9-17
author:     wengfan
header-img: img/post-bg-re-vs-ng2.jpg
catalog: true
tags:
    - react
    - 笔记
    - react-router
---
# react-router

## react-router和react-router-dom

##### react-router
react-router提供了一些router的核心api, 包括：Router、Route、Switch等。但是它没有提供dom操作进行跳转的api

##### react-router-dom
react-router-dom提供了BrowserRouter, Route, Link等api,我们可以通过dom的事件控制路由。例如点击一个按钮进行跳转，大多数情况下我们是这种情况，所以在开发过程中，我们更多是使用React-router-dom

## react-router-dom核心用法

### HashRouter和BrowserRouter

##### HashRouter
通过hash值来对路由进行控制
```
    localhost:3000/#/demo
```
##### BrowserRouter
很多情况下我们则不是这种情况，我们不需要这个#，因为它看起来很怪，这时我们就需要用到BrowserRouter。
```
    localhost:3000/demo
```
它的原理是使用HTML5 history API来使你的内容随着url动态改变。

#### BroserRouter basename
