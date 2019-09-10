---
layout:     post
title:      react 转换html字符串为html元素处理\t
subtitle:   html dangerouslySetInnerHTML
date:       2019-01-04
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - react
    - html
---

# react 转换html字符串为html元素,并处理\t

后台返回html字符串时，如果前端不做处理会显示标签字符串
<p>文字...</p>

在react中可以使用dangerouslySetInnerHTML处理 代码如下
```

    renderHtml = (html) => {
        if (!html) {
        return ''
        }
        return (
            <div className="text-pre" dangerouslySetInnerHTML={{ __html:html}} />
        )
    }
    render () {
        const res = '<p>\n\t\t标题1\t\t\t<p>'
        return (
            {this.renderHtml(res)}
        )
    }
```

但是字符串里的\t会有奇怪的布局咋table,可以通过css处理
```
    .text-pre {
        white-space:pre;
    }
```

参考： https://blog.csdn.net/qq_31126175/article/details/84139545