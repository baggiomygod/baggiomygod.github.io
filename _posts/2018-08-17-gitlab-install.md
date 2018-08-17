---
layout:     post
title:      centos部署gitlab
subtitle:   
date:       2018-8-17
author:     wengfan
header-img: img/gitlab_bg.jpeg
catalog: true
tags:
    - gitlab
    - linux
---
# gitlab部署(centos)
今天在公司内网部署了gitlab，为前端团队管理前端代码，基本是按官网的操作，同时记录下遇到的问题。

1. 安装和配置需要的依赖 install and configure the necessary dependencies

- 在centOs6，以下命令将在系统防火墙中打开http和ssh访问

```
    yum install curl policycoreutils openssh-server openssh-clients -y
```

- 查看sshd是否启动 可以不执行，一般都为启动状态
 
```
        /etc/int.d/sshs status
        openssh-daemon (pid 1254) is running
```

- 接下来，安装Postfix以发送邮件通知。如果要使用其他解决方案发送邮件，可以跳过次步骤，在安装gitlab后配置外部的SMTP服务器

```
    // 下载Postfix过程中可能会出现配置选项。
    // 选择“internet Site”并按回车
    // 使用服务器的外部DNS作为“邮件名称”，然后按Enter键。
    // 如果有额外的配置出现，一致按回车确认即可
    sudo yum install postfix
    sudo service postfix start
    sudo chkconfig postfix on
```

1. 添加包gitlab软件包并安装
```
    curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

这里终端报错：```curl(6): coudnot resolve host: packages.gitlab.com```
百度后说是网络（墙）的原因，需要修改DNS解析服务器配置为8.8.8
于是根据搜索的结果输入一下命令

```
    echo "namesercer 8.8.8.8">>/etc/reslv.conf
```

再次输入,可以正常下载

```
    curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```
3. 安装gitlab包，并设置你要访问的url

```
    // gitlab.example.com 改为你要访问的地址
    // 如果是域名，需要在nginx里做下转发，否则还是用IP访问
    sudo EXTERNAL_URL="http://gitlab.example.com" yum -y install gitlab-ee
```

4. 访问http://gitlab.example.com，然后就可以注册使用了
