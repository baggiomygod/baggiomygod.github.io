
---
layout:     post
title:      安装mongodb(linux)
subtitle:   
date:       2018-8-20
author:     wengfan
header-img: img/post-bg-unix-linux.jpg
catalog: true
tags:
    - linux
    - - mongodb
---

# 安装mongodb(linux)
    参考 https://blog.csdn.net/wanchaopeng/article/details/80861255
1. 首先在官网下载linux版本的安装包
    https://www.mongodb.com/download-center?jmp=nav#community
    选择linux 64-bit egacy x64
    将下载好的.tgz包复制到服务器上

2. 解压
将安装包解压到安装目录
   ```
    tar -zxvf mondodb-linux-x86_64-4.0.1,tgz
    mv mondodb-linux-x86_64-4.0.1,tgz /user/local/mongodb
   ```

3. 在/usr/local/mongodb目录下创建logs(存放日志)和db(存放数据)文件夹
   ```
    mkdir data
    mkdir log
    mkdir etc
   ```

4. 编辑配置配件 etc/mongodb.conf
   ```
    vim etc/mongodb.conf
   ```
配置
```
    dbpath=/usr/local/mongodb/mongodbserver/data
    logpath=/usr/local/mongodb/mongodbserver/log/mongodb.log
    port=27017
    bind_ip=0.0.0.0 // 设置可以通过ip访问，默认127.0.0.1
    fork=true
    journal=false
    storageEngine=mmapv1
``

6. 启动mongodb
在bin目录下
   ```
   cd bin
   bin# sudo ./mongod --config /usr/local/mongodb/etc/mongodb.conf

    //about to fork child process, waiting until server is ready for connections.
    forked process: 14232
    child process started successfully, parent exiting
    ```
启动成功
