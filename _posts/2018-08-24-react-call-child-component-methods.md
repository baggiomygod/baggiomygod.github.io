---
layout:     post
title:      react父组件调用子组件方法
subtitle:   react组件通信
date:       2018-8-24
author:     wengfan
header-img: img/post-bg-re-vs-ng2.jpg
catalog: true
tags:
    - react
    - 笔记
---

# react父组件调用子组件方法(typescript)

Parent.tsx
```
    import * as React from 'react'
    import Child from './Child'

    class Parent extends React.Component{
        public childRef:any = React.createRef();
        constructor(props:any){
            super(props)
        }
        // 调用子组件方法
        public callChildMethod = () => {
            this.childRef.getValue()
        }
        // 将子组件对象赋值给this.childRef
        public onChildRef = (child:any) => {
            this.childRef = child
        }
        public render () {
            return (
                <div class="parent-wrap">
                    <Child onRef={this.onChildRef} />
                    <Button onClick={this.callChildMethod}>
                </div>
            )
        }
    }
```

Child.tsx
```
    import * as React from 'react

    interface IChildProps {
        onRef: any
    }
    class Child extends React.Comporent{
        constructor(props: IChildProps) {
            super(props)
        }
        public componentDidMount(){
            this.props.onRef(this) // 调用父组件onChildRef方法,传入this
        }
        public getValue = () => {
            console.log('child getValue...')
        }
        public render () {
            
            return (
                <div>children</div>
            )
        }
    }
```


