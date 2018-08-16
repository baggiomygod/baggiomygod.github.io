---
layout:     post
title:      linux (centos)安装部署nginx
subtitle:   linux系统安装nginx
date:       2018-8-16
author:     wengfan
header-img: img/post-bg-keybord.jpg
catalog: true
tags:
    - nginx
    - centos
---
### linux (centos)安装部署nginx
### 1. 背景
今年加入的新公司之前没有前后端分离的项目，我也在入职后在参与的第一个项目中推动了公司的第一个前后端分离项目。因为前后端分离，前端代码的部署需要用到ngnix。由于之前并没有使用nginx的经验，所以这次部署过程中，根据网络上搜到的资料，将不走一步一步记录下来，最终完成部署。现在，将他写成笔记，供后续查阅，也希望给有和我一样需求的ngnix小白带来一点帮助。

### 2. 起步

首先,我们从网络下载nginx压缩包
1. ngnix-1.12.2.tar.gz复制到opt/soft
2. tar  -zxvf ngnix-1.12.2.tar.gz

##### 安装nginx
    1、安装prce(重定向支持)和openssl(https支持，如果不需要https可以不安装。)
                
        - yum -y install pcre*
        - yum -y install openssl*
        - tar  -zxvf ngnix-1.12.2.tar.gz
        - ./configure --prefix=/usr/local/nginx（必须先建好目录)
                
        - make 
        - make install （这步报错了，但是没有影响后面）
        ```
            (error: make *** No rule to make target 'build', need by 'default' stop) 
            # unbuntu
            apt-get install openssl
            apt-get install libssl-dev

            # centos
            yum -y install openssl openssl-devel
        ```
3. 打包文件放到: home文件夹下 /home/dist // 前端包位置
4. 修改nginx配置文件conf/nginx.conf
        ```
            server {
                listen 8080;
                server_name localhost;
                
                location / {
                    root home/dist; # 前端包位置
                    index index.html index.htm;
                    try_files $uri/ /index.html;  # 使vue单页应用支持新开窗口
                }
                location /urlname {
                    poxy_pass http://10.10.10.12:8080 // 代理后台服务地址
                }
                # ...
            }
        ```
5. 启动nginx
        ```
            nginx -c /opt/soft/nginx-1.11.13/conf/nginx.conf
            ps -ef|grep nginx

            kill -INT 777 
            or
            kill -QUIT 1011
        ```
6  提示：nginx nginx command not found
        https://blog.csdn.net/pythondafahao/article/details/79826290
        // 修改profile文件
        ```
            vim /etc/profile
            
            export PATH=$PATH:/usr/local/nginx/sbin
            
            source /etc/profile 刷新
        
        ```
 7  再次启动项目
        ```
            nginx -c /opt/soft/nginx-1.11.13/conf/nginx.conf
            ps -ef|grep nginx
        ```
### 3. 总结
现在我们已经完成了nginx的安装，并完成了前端代码的配置。nginx还有很多功能需要学习，我也会在未来学习实践后记录下来，继续坚持分享