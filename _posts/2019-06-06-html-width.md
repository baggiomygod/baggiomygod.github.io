---
layout:     post
title:      offsetWidth clientWidth scrollWidth区别
subtitle:   
date:       2019-6-6
author:     wengfan
header-img: img/post-bg-debug.png
catalog: true
tags:
    - 笔记
---

# offsetWidth clientWidth scrollWidth区别
- scrollWidth：对象的实际内容的宽度，不包边线宽度，会随对象中内容超过可视区后而变大。 

- clientWidth：对象内容的可视区的宽度，不包滚动条等边线，会随对象显示大小的变化而改变。 

- offsetWidth：对象整体的实际宽度，包滚动条等边线，会随对象显示大小的变化而改变。

