---
layout:     post
title:      Promise
subtitle:   promise.race
date:       2019-6-2
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - javascript
    - 笔记
    - promise
---

# Promise.race (rece /reis/:赛道 )
Promise.race(iterable)方法返回一个Promise,一旦迭代器中的某个Promis状态变为fulfilled或rejected,返回的promise就会是fulfilled或rejected状态

## 使用到的场景
fetch不支持超时
