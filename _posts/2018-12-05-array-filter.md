---
layout:     post
title:      js 数组去重、提取重复数据(未完)
subtitle:   array filter
date:       2018-12-05
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - array
    - javascript
    - 笔记
---
# js 数组去重、提取重复数据
（未完）

```
    function eliminateDuplicates(items) {
        return [...new Set(items)];
    }

    let numbers = [1, 2, 3, 3, 3, 4, 5],
        noDuplicates = eliminateDuplicates(numbers);

    console.log(noDuplicates);      // [1,2,3,4,5]
```