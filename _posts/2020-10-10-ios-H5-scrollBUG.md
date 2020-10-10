---
layout:     post
title:      部分版本ios浏览器或app内嵌页面H5滚动不流畅 bug
subtitle:   
date:       2020-10-10
author:     wengfan
header-img: img/post-bg-re-vs-ng2.jpg
catalog: true
tags:
    - react
    - 笔记
---

给有滚动条的元素添加：-webkit-overflow-scrolling:touch;
```
 #app{
            overflow-y:auto;
            -webkit-overflow-scrolling:touch;
        }
```