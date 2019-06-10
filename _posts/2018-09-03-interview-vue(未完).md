
# 1. Vue源码
当我们使用vue的时候，会先new Vue并传图options
new Vue({
    data:{},
    methods:{},
    created(){},
    mounted(){},
    ...
})
##### observer
1. 首先，vue对拿到传入的options,并调用**observe**方法
2. 它会遍历options的data属性，判断data的各个属性是否有嵌套
3. 如果有嵌套就递归。
4. 没有就对这个data的key设置defineProperty
5. defineProperty中的get函数，判断wather实例是否存在，如果存在就添加到观察这列表
6. set函数，判断值是否改变，如果改变，就同时监听列表调用update，更新数据

另一块是：
#### Compile 编译模板
7. 它会html标签里的vue指令，v-model,事件等。
8. 如果识别到时v-model。就实例化一个wather:```new Wather(vm, 绑定值的key名， 值)```,并传入需要监听的key命
    - 执行Wather的过程中会访问一下data数据里当前绑定的值
    - 此时就会触发前面observer中在改data.key属性设置的defineProperty的get函数
    - get函数这个Wather是否已经在观察者列表里，如果没有就push到观察者列表里

9.  如果是事件就添加事件
10. 如果是文本就直接显示
    
#### 实例化wather
实例化Wather:```new Wather```的时候，会访问以下绑定wahter的data属性，此时会触发之前observer中设置的defineProperty的get方法，get方法会判断这个属性是否已经在观察这列表，如果没有就添加到观察者列表

#### 当我们改变值的时候，就会触发set方法，通知Dep观察者列表去更新数据


# 2. MVVM 
https://gmiam.com/post/evo.html 
 - MVVM框架：一个响应式的组件系统、通过吧页面抽象成一个个组件来增加复用性、降低复杂性
 - 数据相应系统：一单数据变化自动更新到视图
 - VirtualDOM 把最少的变动应用到DOM上，提升性能
 
 ### Virtual DOM
 Virtual DOM就是用JS来模拟DOM树（因为JS操作比DOM快很多）

 每次数据变动用新生成的树与之前的树作对比，计算最终的差异补丁到真正的DOM树上

 Vue2.0底层基于Snabbdom（https://github.com/snabbdom/snabbdom）这个Virtual DOM做了整合优化。

 > 深度剖析：如何实现一个 Virtual DOM 算法 https://github.com/livoras/blog/issues/13
 

 我们需要一个简单的书写方式来帮我们解析成对应的语法规则
 ### HTMLParse
 Vue 2.0 的 Parse 原型基于 John Resig 的 HTML Parser，这个 Parser 写的很小巧，可以到这里了解 http://ejohn.org/blog/pure-javascript-html-parser/

 基本的HTML解析方法
 ```
 let results = '';

 HTMLParser(html, {
    start(tag, attr, unary) { // tag:标签名；attr:属性；unary:?
        results += `<${tag}`;
        for(let i = 0; i<attrs.length; i++){
                results +=` ${attrs[i].name}="${attrs[i].escaped} "`;
            }
            results += `${unary ? '/' : ''}>`;
        },
    end(tag) { // 闭合标签
          results += `</${tag}>`;  
        },
    chars(text) { // 文本内容
            results += text;
        },
    comment(text) { // 注释
            results += `<!--${text}-->`;
    }
    })；
    return results;
 ```
可以看出它把HTML解析后对相应的数据都传入了处理函数，Vue在它的基础上做了升级与优化处理，在拿到对相应节点数据后做一些自己的解析处理。如：分析v-if、v-for、v-on等属性指令。也就出来了Vue的模板系统

### 响应系统
数据响应主要是依据ES5的getter与setter来做数据变化的钩子处理
```
Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
        return val;
    },
    set: newVal => {
        if (newVal === val) {
            return;
        }
        val = newVal;
    }
    })
```
这样取值和赋值的过程中都可以做一些我们自己的处理，比如set的时候我们可以判断值是否真的发生变化，变化了可以出发我们的重新渲染函数，做虚拟DOM比对处理更新界面。

Vue在第一次渲染的时候回读取需要的数据，所以它在get的时候会做“依赖收集”，后面只有依赖的数据变动才会出发重新渲染

> vue2.0源码分析值理解响应架构https://segmentfault.com/a/1190000007334535

> 使用Proxy库做响应处理，功能更强（不考虑兼容）https://github.com/nx-js/observer-util



### 例子
```
<script src="../dist/evo.js"></script>
...
<div id="app">
    <div :message="message">{{ message }}</div>
    <a v-for="(item, index) in arr" @click="popMsg(item.text)">{{index}}, {{item.text}}</a>

    <my-component :message="message"></my-component>
    <div v-if="first">first</div>
    <div v-else>second</div>
</div>
<script>
    
</script>
```