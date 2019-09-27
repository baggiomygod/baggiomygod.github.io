---
layout:     post
title:      css padding-right无效问题
subtitle:   padding
date:       2019-04-30
author:     wengfan
header-img: img/post-bg-debug.png
catalog: true
tags:
    - css
    - 笔记
---

# css padding-rigth
```
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 140px;
    background-color: #fff;
    padding: 0 230px;
    box-sizing: border-box;
```
页面padding-right没有生效

加上解决
```
    border-top: 4px solid #eee;
```

### 原因？
(待确定)