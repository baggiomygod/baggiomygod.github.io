---
layout:     post
title:      数组排序
subtitle:   array javascript sort
date:       2019-5-20
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - javascript
    - 笔记
---
```
    var arr=[{dep:3,name:'baggio'},{dep:4,name:'raul'},{dep:1,name:'messi'},{dep:2,name:'figo'}];
    arr.sort(compare("dep"));
    console.log(arr);    
    function compare(key){
        return function(obj1,obj2){
            var  val1=obj1[key];
            var val2=obj2[key];
            return val1<=val2?-1:1;
        }
    }
```