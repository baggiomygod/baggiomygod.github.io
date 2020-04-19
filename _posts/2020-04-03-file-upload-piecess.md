---
layout:     post
title:      js + express 实现大文件分片上传
subtitle:   
date:       2020-04-03
author:     wengfan
header-img: img/post-bg-debug.png
catalog: true
tags:
    - express
    - 文件上传
---

## 大文件分片上传

## 前端

##### 原理
分片主要是通过 File API 的 slice() 进行实现切片，然后通过构建 FormData 发送数据。

##### 1. 设定每隔chunk的大小


##### 2. 获取到能够分片的总数

##### 3. 获取到文件的一些基本信息

##### 4. 循环每个分片， 进行操作

##### 5. 一些其他的操作函数

## 后端
后端express使用`multer`，需要使用`body-parser`进行请求主体解析

关于`multier`处理：
    - [express 使用 multer 做文件上传时自定义文件名和存储路径](http://www.ptbird.cn/express-multer-upload-diy-savepath-and-savename.html)
    - [基于 multer 的文件上传后缀过滤及异常控制](http://www.ptbird.cn/multer-upload-extname-filter-err-handle.html)

### 分片上传处理

##### 1. 分片上传中间件

##### 2. 分片上传的route处理 

##### 3. 分片合并route

##### 5. 提供一个图片访问路由


## 实例代码
https://github.com/postbird/axios-express-chunk-upload
