---
layout:     post
title:      import 和 import * as 引入区别
subtitle:   es6 module
date:       2019-7-9
author:     wengfan
header-img: img/post-bg-js-version.jpg
catalog: true
tags:
    - es6
---

# import vs import * as

```import a from 'a.js'```
只导出```export default```

```import * as from 'a.js'```
导出所有

a.js
```
export const a = 1

export function fn () {
  console.log('this is fn...')
}

export default {
  x: 'x',
  y: 'y'
}

```

b.js
```
import a1 from './a'
import * as a2 from './a'

/*
    {x: 'x', y: 'y'}
*/
console.log(a1)

/*
    {
        a: 1,
        fn,
        default:{x: 'x', y: 'y'}
    }
*/
console.log(a2)
```