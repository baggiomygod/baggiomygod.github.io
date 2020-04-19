---
layout:     post
title:      web worker API
subtitle:   
date:       2019-09-27
author:     wengfan
header-img: img/post-bg-debug.png
catalog: true
tags:
    - web worker
    - 笔记
---

# web workers

通过使用web workers，web应用程序可以独立于主线程的后台线程中，运行一个脚本操作。这样做的好处是可以在独立的线程中执行费时的处理任务，从而允许主线程（通常是UI线程）不会因此被阻塞/放慢.

**web workers**makes it possible to tun a script operation in a background thread separate from the man execution thread of a web application. The advantage of  this is that laborious processing can be performed in a separate thread, alliwing the main (usually the UI) thread to run without being blocked/slowed down

## web workers 概念与用法
使用构造还是Worker()创建一个worker对象，构造函数接受一个javascript文件url，这个文件包含将在worker线程中运行的代码。

worker将运行一个与当前window不同的全局上下文中，这个上下文由一个对象表示
- DedicateWorkerGlobalScope, 标准worker
- ShareWorkerGlobalScope, 共享worker

主线层和worker线程相互之间使用```postMessage()```方法来发送信息，并且通过```onmessage```这个event handler来接收信息。数据的交互方法为传递副本，而不是直接共享数据

其他种类的worker
- Shared Worker, 可以被不同窗体的多个脚本运行
- Service Workers，一般作为web应用程序、浏览器和网络之间的代理服务
- Chrome Workers，是一种仅适用于firefox的worker

## Web Worker接口

- AbstractWorker
- Worker
- SharedWorker
- WorkerGlobalScope
- DedicateWorkerGlobalScope
- ShareWorkerGlobalScope
- WorkerNavigator

## 示例


> 参考
> - https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API