---
layout:     post
title:      css实现圆弧渐变效果
subtitle:   linear-gradient border-radius
date:       2018-8-16
author:     wengfan
header-img: img/blog/css/linear-gradient.png
catalog: true
tags:
    - css
    - 笔记
---

# css实现圆弧渐变效果

![image](https://ws3.sinaimg.cn/large/006tNbRwgy1fukmat326aj313f02sgm1.jpg)

HTML
```
     <div class="main">
        <div class="center"></div>
    </div>
```

CSS
```
    .main{
                width: 100%;
                height: 100px;
                background-color: rgba(23,13,62,1)
            }
            .center{
                width: 60%;
                height: 100px;
                margin: 0 auto;
                border-radius: 0 0 100% 100%;
                background: 
                linear-gradient(
                    0deg,
                    rgba(87,221,255, .5),
                    rgba(87,221,255, .3),
                    transparent,
                    transparent,
                    transparent,
                    transparent,
                    transparent
                ),
                linear-gradient(
                    90deg,
                    transparent,
                    transparent,
                    rgba(87,221,255, .1),
                    rgba(87,221,255, .1),
                    transparent,
                    transparent
                )
                
            }
```