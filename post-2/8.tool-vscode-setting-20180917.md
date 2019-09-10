
# vscode配置记录

```
    {   
        // 1. 是否忽略推荐的扩展
        "extensions.ignoreRecommendations": false,
        // 2. doSomething () {}, 方法名与括号之间加空格
        "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
        // 3. 解决vetur插件格式化.vue文件时''--被转成-->""
        "vetur.format.defaultFormatter.js": "vscode-typescript", 
        "vetur.format.defaultFormatter.html": "js-beautify-html"
    }
```