---
layout:     post
title:      通信
subtitle:   
date:       2018-9-02
author:     wengfan
header-img: img/post-bg-js-version.jpg
catalog: true
tags:
    - 面试
    - 笔记
---
# 通信类
## 1. 什么是同源策略
同源策略是**限制**一个源加载的文档或脚本如何与来自另一个源的资源进行交互。
是一个用于隔离潜在恶意文件的安全机制
不同源：
    - cookie,localStorage,indexDB无法读取
    - DOM无法获得
    - ajax请求不能发送,ajax只适合同源通信
  
##### 源
- 协议 http://
- 域名 www.aa.com
- 端口号 :8080

## 2. 前后端如何通信
- ajax:只支持同源通信 (新通信api fetch)
- cors:支持非同源通信
- websocket:不受同源策略显示

## 3. 如何创建ajax
原生创建
- XMLHttpRequest
- 兼容性处理
- 事件的触发条件
- 事件的触发顺序

```
    function ajax(options) {
        var opt = {
            url: '',
            method: 'get',
            data: {},
            success: function(){},
            error: function(){}
        }
        // 潜复制
        for (var i in options) {
         if (options.hasOwnProperty(i)) {
             opt[i] = options[i];
         }
     }

     if (opt.url) {
        var xhr = XMLHttpRequest 
            ? new XMLHttpRequest 
            : new window.ActiveXObject('Microsoft.XMLHTTP')

        var data = opt.data,
            url = opt.url,
            method = opt.method.toUpperCase(),
            daraArr = []
        for (var k in data) {
            dataArr.push(k + '=' + data[k])
        }
        if (method === 'GET'){
            url = url + '?' + dataArr.join('&')
            xhr.open(type, url.replace(/\?$/g, ''), true)
            xhr.send()
        }
        if (method === 'post'){
            xhr.open(method, url, true)
            xmlhttp.setRequesrHeader('Content-type', 'application/x-www-form-urlencoded')
            xhr.send(dataArr.join('&'))
        }
        xhr.onload = function() {
            var res;
            if (opt.success && opt.success instanceof Function) {
                res = xhr.responseText
                if (typeof res === 'string') { // 返回成功
                    res = JSON.parse(res)
                    opt.success.call(xhr, res)
                }
            } else {
                if (opt.error && opt.error instanceof Function) {
                     opt.error.call(xhr, res);
                }
            }
        }
     }
        
    }
    

```
### 4. 跨域
CORS ---浏览器拦截请求，如果认为是跨域通信 会在header家一个origin,后端需要配置acess-allow-origin来允许跨域
JSONP
postMessage H5新增的
webSocket
Hash

##### JSONP， get
利用script标签，
```
<script src="http://**.***.com:8080?name:a&callback=jsonpCb">
返回一个jsonpCb函数
```
```
    function jsonp(url, onsuccess, onerror, charset) {
        未完
    }
```

#### Hash
页面通过iframe嵌入跨域页面是，可以通过hash实现两个跨域页面之间的通信
url/#/hashUrl

##### postMessage
写的demo报错为解决？

### CORS
(未完)