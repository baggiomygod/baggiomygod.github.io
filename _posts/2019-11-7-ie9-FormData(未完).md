

ie9中以下代码报错：
instanceof 操作数无效：缺少 function
```
if (params instanceof window.FormData){}
```

原因：
ie9不支持FormData, 这里右边的FormData为undefined

解决：
1. 引入formdata-polyfill
 https://www.npmjs.com/package/formdata-polyfill

2. 判断FormData是否支持
```
    if (window.FormData && params && (params instanceof window.FormData))
```