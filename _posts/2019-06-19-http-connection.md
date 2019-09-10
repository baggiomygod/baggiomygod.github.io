---
layout:     post
title:      HTTP长连接
subtitle:   http kee-palive
date:       2019-6-19
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - http
    - keep-alive
---

# HTTP 长连接 短连接
## 概念
HTTP短连接(非持久连接, HTTP1.0)：是指，客户端和服务端进行一次HTTP请求/响应，就关闭连接。所以，下次的HTTP请求/响应操作就需要建立连接

HTTP长连接（持久连接， HTTP1.1）：是指，客户端和服务端建立一次连接后，可以在这条连接上进行多次请求/响应。持久连接可以设置过期时间，也可以不设置。

## http短连接
# http长连接
## 1. 使用设置
### 设置HTTP短连接
header
```Connection: close```

### 设置HTTP长连接，有过期时间
连接建立之后，空闲超过60s,就会失效

**connection字段只有服务器端设置才有效**

```
    Connection: keep-alive
    Keep-alive: timeout=60
```

## 2. 什么是长连接
HTTP1.1规定默认保持长连接，数据传输完成了保持TCP连接不断开，等待同域名下继续用这个通道传输数据；相反的就是短链接

### 长连接（持久连接）
所谓持久连接，就是重用TCP连接，多个HTTP请求公用一个TCP连接。

HTTP1.1改变了HTTP协议的语义，默认使用持久连接。除非明确告知（通过Connection: close 首部），否则服务器默认会保持TCP连接打开。如果你使用的时HTTP1.1,从技术上