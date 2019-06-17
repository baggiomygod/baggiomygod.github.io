# html2canvas BUG记录
IE中报找不到成员

1.0.0.rc.1版本还没有解决这个bug,需要自己修改源码解决

dist/html2canvas.js
```
// 搜索 if ( rule && rule.cssText) 改为如下代码
if (rule && typeof rule.cssText === 'string')
```

将html2canvas放到src下引入
业务代码中加入支持IE11以及edge的代码
```
downloadPNG() {
      this.reportLoaing = true;
      // ...
      html2canvas(document.getElementById('report-download'),
        {
          logging: true,
          useCORS: true,
        })
        .then((canvas) => {
            // edge ok
          if (this.isEdge()) {
            const blob = canvas.msToBlob();
            this.saveAs(blob, '我的测评报告.png');
            this.reportLoaing = false;
            return;
          }
          // ie11 html2canvas.js中修改源码bug  if (rule && typeof rule.cssText === 'string')
          if (this.isIE()) {
            const blob = canvas.msToBlob();
            navigator.msSaveBlob(blob, '我的测评报告.png'); // ie11 save blob
            this.reportLoaing = false;
            return;
          }
            // qq 微信浏览器
          if (this.isWx() || this.isQQ()) {
            if (this.reportImage) {
              this.showImage = true;
              this.reportLoaing = false;
              return;
            }
            this.drawImg(canvas);
            this.showImage = true;
            return;
          }
         
          // 现代浏览器
          canvas.toBlob((blob) => {
            this.saveAs(blob, '我的测评报告');
            this.reportLoaing = false;
          });
        });
    },
```

#### 参考
> 1374: Fixed Member not found error in IE11 for cssText #1832
> 
https://github.com/niklasvh/html2canvas/pull/1832