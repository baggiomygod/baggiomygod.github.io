---
layout:     post
title:      react
subtitle:   
date:       2019-6-2
author:     wengfan
header-img: img/post-bg-re-vs-ng2.jpg
catalog: true
tags:
    - react
    - 笔记
---

# react
## 为什么虚拟DOM会提高性能
虚拟DOM相当于在js和真实dom中间加了缓存，利用dom diff 算法避免了没必要的dom操作，从而提高性能

用js对象结构表示DO树的结构，然后用这个树构建一个真正的DOM树，查到文档中。当状态变更时，重新构建dom对象树，然后用新的dom树与旧的dom树进行比较，将变化的部分重新渲染

## 理解react 虚拟DOM
这是普通的HTML标签写法
```<a class="link" href="http:/www.baidu.com">react...</a>```

这是js搜东生成相同dom的写法
```
var a = document.createElement('a')
a.setAttribute('class', 'link')
a.setAttribute('href', 'xxx')
a.appendChild(document.createTextNode('react...'))
```

这是一种封装，react.createElement
```
    const a = React.createElement('a', {
        className: 'link',
        href: 'xxx'
    }, 'react...') 
```

所有html结构，都可以用js dom来构造，而且能将构造的步骤封装起来，做到[数据-dom结构]的映射

缓存初始化数据，新数据进来时，与旧数据对比，找到差异，根据差异本省的性质进行dom操作；无差异，则不做任何操作

dom本身在js中就是一种数据结构，在控制台可以看到body数据结构。然而，dom相关的数据丰富而复杂，我们其实只是关心少数元素的少数属性

建立一个js plain object,非常轻量，用它保存我们真正关心的与dom相关的少数数据；对它进行操作，然后对比操作前后的差异，再根据映射关系去操作真正的dom,无疑可以提供性能。


### react.createElement
https://www.zhihu.com/question/29504639?sort=created
```
    const a = {
        type: 'a',
        props: {
            children: 'React',
            className: 'link',
            href: 'xxxx'
        },
        _isReactElement: true
    }

    React.render(a, document.body)
```
如上，React.render(ReactElement, DOM)中所谓的ReactElement。是指私有属性_isReactElement为true的一种数据结构，而非真正的element

React.createClass所谓的属性，实质是：
```
    var type = function (props, context) {
        this.props = props
    }
    type.prototype.render = function () {
        return {
            type: 'a',
            props: this.props,
            _isReactElement: true
        }
    }
    var a = {
        type: type,
        props: {
            children: 'React',
            className: 'link',
            href: 'xxxx'
        },
        _isReactElement: true
    }
    React.render(a, document.body)

```
