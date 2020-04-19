
## 问题：引入第三方包，打包会被打包在chunk里

如何让第三方包分别打包？

## 如果webpack exclude，排除了node_module里的包编译
如果引入的第三方包打包代码带es6语法在低版本浏览器会报错，

1. 通过alise 设置可以指定node_modeles里的包也进行编译
2. 如果第三方包引用的其他包也是es6语法的，如何处理？

## webpack mainFields的作用？
mainFields: ['idebug', 'browser', 'module', 'main']