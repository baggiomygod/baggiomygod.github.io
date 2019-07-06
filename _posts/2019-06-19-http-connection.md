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

# http长连接

## 1. 什么是长连接
HTTP1.1规定默认保持长连接，数据传输完成了保持TCP连接不断开，等待同域名下继续用这个通道传输数据；相反的就是短链接

### 长连接（持久连接）
所谓持久连接，就是重用TCP连接，多个HTTP请求公用一个TCP连接。

HTTP1.1改变了HTTP协议的语义，默认使用持久连接。除非明确告知（通过Connection: close 首部），否则服务器默认会保持TCP连接打开。如果你使用的时HTTP1.1,从技术上