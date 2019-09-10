---
layout:     post
title:      ckeditor实现图片上传七牛云
subtitle:   ckeditor qiniu
date:       2019-09-10
author:     wengfan
header-img: img/post-bg-debug.png
catalog: true
tags:
    - 富文本
---

# ckedtior实现七牛云上传

1. 实现上传七牛云类
```
import * as qiniu from 'qiniu-js'
import axios from 'axios'

class QiniuUploadAdapter {
  constructor(vue, loader) {
    this.vm = vue;
    this.loader = loader
    this.observable = null
    this.qiniuData = {
      token: '',
      file: '',
      key: '',
      imgURL: '',
    }
  }

  // Starts the upload process.
  async upload() {
    const file = await this.loader.file
    const vm = this;
    const suffix = file.name.split('.')
    const ext = suffix.splice(suffix.length - 1, 1)[0]
    
    // 获取七牛token domain
    const tokenAndDomain = await this.getQiniuTokenDomian()
    this.qiniuData.file = file
    this.qiniuData.token = tokenAndDomain.token
    this.qiniuData.imgURL = tokenAndDomain.domain
    this.qiniuData.key = `image/${suffix.join('.')}_${new Date().getTime()}.${ext}`

    // 创建七牛云上传
    const observable = qiniu.upload(
      this.qiniuData.file,
      this.qiniuData.key,
      this.qiniuData.token,
      {},
      {
        useCdnDomain: true,
        region: null,
      },
    );
    this.observable = observable

    // 上传七牛元
    return this.loader.file
      .then(file => new Promise((resolve, reject) => {
        // 开始上传
        this.observable.subscribe({
          next(res) {
            console.log('subscribe:', res)
          },
          // 上传完成回调，resolve
          complete(res) {
            const url = `${vm.qiniuData.imgURL}/${res.key}`;
            const response = {
              default: url,
            }
            resolve(response)
          },
          error(err) {
          }
        });
      }));
  }

  // Aborts the upload process.
  abort() {
    // if (this.xhr) {
    //   this.xhr.abort();
    // }
  }

  // 获取token
  getQiniuTokenDomian() {
    return new Promise(resolve => axios.get(
      '/api/taccadmin/taccmanage/admin/upload/token',
      {
        params: { bucketName: 'qiniu_public' },
      },
    ).then((res) => {
        if (res.token) {
          resolve(res)
        }
      })
      .catch(() => {
        // console.log('qiniu token:', error);
      }))
  }
}

export default QiniuUploadAdapter
```

editor
```
    import CKEditor from '@ckeditor-doc'
    import '@ckeditor-zh' // 中文
    import QiniuUploadAdapter from './QiniuUploadAdapter'

    mounted(){
        initCKEditor()
    },
    methods: {
     // 自定义上传插件
    customUploadAdapterPlugin(editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new QiniuUploadAdapter(this, loader)
      }
    },
    initCKEditor() {
      // eslint-disabled-next-line
      CKEditor.create(document.querySelector(`#${this.editorId}`), {
        language: 'zh-cn',
        extraPlugins: [this.customUploadAdapterPlugin], // 这里引入自定义插件
      }).then((editor) => {
        const toolbarContainer = document.querySelector(`#${this.toolbarId}`);
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        this.editor = editor // 将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
        if (this.editor.state === 'ready') {
          // 填充编辑器
          this.setEditorData()
        }
      }).catch((error) => {
        console.error(error);
      });
    },
    }
```