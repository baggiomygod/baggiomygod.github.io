---
layout:     post
title:      js性能瓶颈
subtitle:   javascript performance
date:       2019-6-3
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - javascript
    - 笔记
    - 性能
---

# js性能瓶颈
https://segmentfault.com/a/1190000008340139

浏览器在下载完某个页面依赖的脚本之后，其还需要经过语法分析、解释与运行这些步骤。

## 到底是什么拖慢了我们应用的启动时间

##### 1. 启动阶段
在启动阶段，语法分析，编译与脚本执行占据了javascript引擎运行的绝大部分时间。这些过程造成的延迟会真实地反映到用户可交互时延上；

当我们应用包体积非常大的时候，使用一些现代的打包技巧，譬如代码分割，treeShajing,service worker缓存等等会对启动时间有很大的影响。

另一个角度来看，即使是小模块，你代码写的很糟糕或者使用了很糟的依赖库都会倒是你的主线程花费大量的事件在编译或者荣誉的函数调用中。我们必须清楚地认识到全面评测以挖掘出真正性能瓶颈的重要性


#### 2. javascript语法的解析和编译是否称为大部分网站的瓶颈？
