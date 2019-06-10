---
layout:     post
title:      react实现插槽slot
subtitle:   react 插槽
date:       2019-06-09
author:     wengfan
header-img: img/post-bg-re-vs-ng2.jpg
catalog: true
tags:
    - react
    - 笔记
---
# react 实现类似vue的slot
使用过vue的都知道，vue有slot这么一个非常方便的功能。那么在react如何实现插槽呢？

react父组件在子组件内部直接写元素，在子组件用{this.props.children}即可
**代码演示**
父组件 index.tsx
```
import FilterForm from './FilterForm'

...

render {
    return (
        <FilterForm getTableData={bindPropFun}>
            <Button type="primary" onClick={this.showAddEditDialog} icon="plus">新增</Button>
        </FilterForm>
    )
}
```

子组件 FilterForm.tsx
```
    <Col span={6} className="add-blog-item">
        <FormItem>
            {this.props.children}
        </FormItem>
    </Col>
```

### 总结
通过react实现slot，个人的感受是，react的设计非常的灵活，可以自定义实现一些高级的功能，不需要刻意去记忆很多功能api。相比vue对开发者技术能力要求更高，另一方面也需要开发者对react的api掌握要比较深。
