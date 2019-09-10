---
layout:     post
title:      mobx初体验
subtitle:   
date:       2018-9-12
author:     wengfan
header-img: img/post-bg-re-vs-ng2.jpg
catalog: true
tags:
    - react
    - 笔记
    - mobx
---
# mobx初体验
### 安装
```
   npm i mobx -S 
   npm i mobx-resct -S // React绑定库
```
任何源自应用状态的东西都应该自动地获得

React和mobx是一对强力组合。
- React通过提供机制把状态转换为可渲染组件并对其进行渲染。
- 而mobx提供机制来存储和更新应用状态供React使用

对于应用开发中的常见问题：
- React提供可优化UI渲染的机制，这种机制就是通过使用虚拟DOM来减少昂贵的DOM变化的数量
- mobx提供了优化应用状态与React组件同步的机制，这种机制就是使响应式虚拟依赖状态图标，它只有在真正需要的时候才更新并且永远保持是最新的。
  
## 核心改变

### Observable state 可观察的状态
mobx为现有的数据结构（对象、数组、类实例）添加了可观察的功能。通过使用```@observable```装饰器来给你的类属性添加注解就可以简单地完成这一切
```
    
```
### Computed Values 计算值

### Reactions 反应

### React组件

### 自定义 reactions

