
---
layout:     post
title:      浏览器报跨域错误
subtitle:   iframe 跨域 cors chrome
date:       2018-9-27
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - github
    - bug
    - 笔记
---
# 浏览器报跨域错误
### 背景
使用iframe时，子页面改变父页面location.href时
```
    window.top.href = 'http%3A%2F%2Fapieduexpe.17win.com%2Fapi%2Fcallback?redirect%3DaHR0cDovL2xvY2FsdGVzdC4xN3dpbi5jb206ODA2Ng==&scope=top'
```
浏览器报一下错误
```
uc-test.sit.91lyd.com/html/js/classLogin.6f97c481.js:1 Unsafe JavaScript attempt to initiate navigation for frame with origin 'http://localtest.17win.com:8066' from frame with URL 'http://uc-test.sit.91lyd.com/html/classLogin.html?action=login&appId=20010100010000&redirectUri=http%3A%2F%2Fapieduexpe.17win.com%2Fapi%2Fcallback?redirect%3DaHR0cDovL2xvY2FsdGVzdC4xN3dpbi5jb206ODA2Ng==&scope=top'. The frame attempting navigation is targeting its top-level window, but is neither same-origin with its target nor has it received a user gesture. See https://www.chromestatus.com/features/5851021045661696.

r @ uc-test.sit.91lyd.com/html/js/classLogin.6f97c481.js:1
o @ uc-test.sit.91lyd.com/html/js/classLogin.6f97c481.js:1
(anonymous) @ uc-test.sit.91lyd.com/html/js/classLogin.6f97c481.js:7
Promise.then (async)
(anonymous) @ uc-test.sit.91lyd.com/html/js/classLogin.6f97c481.js:7
n @ uc-test.sit.91lyd.com/html/js/manifest.bf4519e8.js:1
window.webpackJsonp @ uc-test.sit.91lyd.com/html/js/manifest.bf4519e8.js:1
(anonymous) @ uc-test.sit.91lyd.com/html/js/classLogin.6f97c481.js:1
uc-test.sit.91lyd.com/html/js/classLogin.6f97c481.js:1 Uncaught (in promise) DOMException: Failed to set the 'href' property on 'Location': The current window does not have permission to navigate the target frame to 'http://apieduexpe.17win.com/api/callback?redirect=aHR0cDovL2xvY2FsdGVzdC4xN3dpbi5jb206ODA2Ng&code=W6yDDiXl6wAIXkIa'.
    at r (http://uc-test.sit.91lyd.com/html/js/classLogin.6f97c481.js:1:6292)
    at Object.o [as passCode] (http://uc-test.sit.91lyd.com/html/js/classLogin.6f97c481.js:1:6553)
    at http://uc-test.sit.91lyd.com/html/js/classLogin.6f97c481.js:7:59255

```

后来发现是chrome68版本浏览器阻止了重定向，
需要手动点或者**弹出式窗口和重定向**设置允许的网址。

浏览器右上角，输入网址框的右侧
![image]()

![image]()