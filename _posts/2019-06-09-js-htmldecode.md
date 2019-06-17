---
layout:     post
title:      js反转义特殊符号
subtitle:   
date:       2019-6-9
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - javascript
    - 笔记
---

# js转义和反转义特殊符号的方法

开发中我们经常会遇到后端返回转义之后的字符串, 如：
```
    content: "&lt;script&gt;alert(1)&lt;/script&gt;"
```

这样如果不经过转义直接显示会有问题，此时就需要我们手动对其进行转义。
通常有以下几种方法：

//HTML反转义
```
function HTMLDecode(text) 
{ 
    var temp = document.createElement("div"); 
    temp.innerHTML = text; 
    var output = temp.innerText || temp.textContent; 
    temp = null; 
    return output; 
} 
```

// 
```
//HTML转义
function HTMLEncode(html) 
{ 
    var temp = document.createElement ("div"); 
    (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html); 
    var output = temp.innerHTML; 
    temp = null; 
    return output; 
} 
```

## vue中
```
<div v-html="htmlStr">
```

## react中
```
<div dangerouslySetInnerHTML={{ __html: htmlStr }} />
```