---
layout:     post
title:      fetch
subtitle:   fetch
date:       2019-6-2
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - http
    - fetch
---

# fetch
XMLHttpRequest的最新替代技术

## fetch有点
- 接口更简单、简介、更加语义化
- 基于promise,更加好的流程化控制，可以不断then把参数传递下去，外加async/await,异步变同步的书写爹妈
- 利于同构，ismorphic-fetch是对whatwg-fetch和node-fetch的一种封装，一份代码就可以在两种环境下跑
- 新的web api很多内置支持fetch,比如servie worker

## fetch的缺点
- 兼容性（edge, firefox 55+, chrome 60+, safari 11+...）
- 不支持progress
- 默认不带cookie: 
  
  credentials: omit, // 忽略cookie发送
  credentials: same-origin, // 只能同域发送
  credentials: include, // 同域，跨域都可发送

- 某些错误http状态图400，500等不会reject,相反它会被resolve
- 不支持timeout处理
- 不支持jsonp(引入fetch-json来支持)
- 不支持超时处理

## 解决兼容性
- ismorphic-fetch: /ise'morfik/, 使可以在浏览器和node环境运行
- whatwg-fetch： 处理兼容性

## 解决fetch不支持超时处理 timeout
fetch不像大多数ajax库那样对请求设置超时timeout,它没有有关超时的feature。所以在feature标准添加超时feature之前，都需要polyfill该特性

<!-- https://www.cnblogs.com/wonyun/p/fetch_polyfill_timeout_jsonp_cookie_progress.html -->
实际上，我们真正需要的是```abort()```,timeout可以通过```timeout + abort```实现，起到真正超时丢弃当前请求

在目前的fetch知道规范中，fetch并不是一个具体实例，而只是一个方法；其返回的promise实例根据Promise指导规范标准是不能abort的，也不能手动改变promise实例的状态，只能由内部来根据请求结果来改变promise状态

> 实现fetch的timeout功能，其思想就是新创建一个可以手动控制promise状态的实例，根据不同情况来对新promise实例进行resolve或者reject,从而达到timeout的功能

方法一
```
    var oldFetch = fetch // 拦截原始的fetch方法
    // 定义新的fetch方法
    window.fetch = (input, opts) => {
        return new Promise((resolve, reject) => {
            var timeoutId = setTimeout(function () {
                reject(new Error('fetch timeout'))
            }, opts.timeout)
            oldFetch(input, opts)
                .then(
                    res => {
                        clearTimeout(timeoutId)
                        resolve(res)
                    },
                    err => {
                        clearTimeout(timeoutId)
                        reject(err)
                    }
                )
        })


    }
```
在方法一的基础上可以模拟类似XHR的abort功能：
```
    var olfFetch = fetch
    window.fetch = function (input, opts) {
        return new Promise((resolve, reject) => {
            var abort_promise = () => {
                reject(new Error('fetch abort'))
            }
            var p = oldFetch(input, opts).then(resolve, reject)
            p.abort = abort_promise
            return p
        })
    }
```

方法二：
Promise.race接收一个promise实例的数组```[peomise1, promise2]```,表示多个promise实例中任何一个先改变状态，那么race方法返回的promise实例状态就跟着改变。
```
    var oldFetch = fetch
    window.fetch = (input, opts) => {
        var fetchPromise = oldFetch(input, opts)
        var timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('fetch timeout'))
            }, opts.timeout)
        })
        return Promise.race([fetchPromise, timeoutPromise])
    }
```