
# Vue源码
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
7. 它会质变html标签里的vue指令，v-model,事件等。
8. 如果识别到时v-model。就实例化一个wather:```new Wather(vm, 绑定值的key名， 值)```,并传入需要监听的key命
    - 执行Wather的过程中会访问一下data数据里当前绑定的值
    - 此时就会触发前面observer中在改data.key属性设置的defineProperty的get函数
    - get函数这个Wather是否已经在观察者列表里，如果没有就push到观察者列表里

9.  如果是事件就添加事件
10. 如果是文本就直接显示
    
#### 实例化wather
实例化Wather:```new Wather```的时候，会访问以下绑定wahter的data属性，此时会触发之前observer中设置的defineProperty的get方法，get方法会判断这个属性是否已经在观察这列表，如果没有就添加到观察者列表

#### 当我们改变值的时候，就会触发set方法，通知Dep观察者列表去更新数据