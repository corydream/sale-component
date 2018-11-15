
## 如何引入 
``` typescript

	import { BgxLegionModule } from 'sale-component';
	@NgModule({
		imports: [BgxLegionModule],
		exports: [],
		declarations: [],
		providers: [],
	})
	export class DemoModule { }

```
## BgxUpload
参数|说明|类型|默认值
---|---|---|---
[bgxAccept] | 接受上传的文件类型, 详见<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">input accept Attribute</a> | string | -
[bgxAction] | 必选参数, 上传的地址 | string | -
[bgxBeforeUpload] | 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。注意：IE9 不支持该方法；注意：务必使用 => 定义处理方法。 | (file, fileList) => `boolean` | -
[bgxCustomRequest] | 通过覆盖默认的上传行为，可以自定义自己的上传实现；注意：务必使用 `=>` 定义处理方法。 | (item) => Subscription | -
[bgxData] | 上传所需参数或返回上传参数的方法；注意：务必使用 `=>` 定义处理方法。 | `Object｜((file: UploadFile) => Object)` | -
[bgxDisabled] | 是否禁用 | boolean | false
[bgxMode] | 文件上传的模式，支持`business` `base` | string | base
[bgxImgSize] | 文件的尺寸 | boolean | false
[bgxTextName] | 文件名 | boolean | true
[bgxRemoveLoading] | 删除文件的loading | boolean | true
[bgxFileList] | 文件列表，双向绑定 | UploadFile[] | -
[bgxLimit] | 限制单次最多上传数量，`bgxMultiple` 打开时有效；0 表示不限 | number | 0
[bgxSize] | 限制文件大小，单位：KB；`0` 表示不限 | number | 0
[bgxHeaders] | 	设置上传的请求头部，IE10 以上有效；注意：务必使用 => 定义处理方法。 | `Object｜((file: UploadFile) => Object)` | -
[bgxMultiple] | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件。 | boolean | false
[bgxName] | 发到后台的文件参数名 | string | 'file'
[bgxShowUploadList] | 是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon | `Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean } `|true
[bgxType] | 上传类型，支持`drag` `select`| string | 'select'
[bgxShowButton] | 是否展示上传按钮 | boolean | true
[bgxWithCredentials] | 上传请求时是否携带 cookie | boolean | false
[bgxPreview] | 	点击文件链接或预览图标时的回调；注意：务必使用` => `定义处理方法。 | `(file: UploadFile) => void` | -
[bgxRemove] | 点击移除文件时的回调，返回值为 false 时不移除。支持返回 Observable 对象；注意：务必使用 => 定义处理方法。 | `(file: UploadFile) => boolean｜Observable` | -
(bgxChange)   | 	上传文件改变时的状态 | EventEmitter | -

> 注意：在bgxMode为business时，bgxBeforeUpload和bgxCustomRequest无用

#### bgxChange

> 开始、上传进度、完成、失败都会调用这个函数。

文件状态改变的回调，返回为：

```js
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1. `file` 当前操作的文件对象。

   ```js
   {
      uid: 'uid',      // 文件唯一标识
      name: 'xx.png'   // 文件名
	  status: 'done', // 状态有：uploading done error removed
	  type: 'image/*', // 文件类型，只有图片才有默认预览功能
      response: '{"status": "success"}' // 服务端响应内容
   }
   ```

2. `fileList` 当前的文件列表。
3. `event` 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。

#### bgxCustomRequest

默认使用HTML5方式上传（即：使用 `HttpClient`），允许覆盖默认行为实现定制需求，例如直接与阿里云交互等。

`bgxCustomRequest` 回调传递以下参数：

- `onProgress: (event: { percent: number }): void`
- `onError: (event: Error): void`
- `onSuccess: (body: Object, xhr?: Object): void`
- `data: Object`
- `filename: String`
- `file: File`
- `withCredentials: Boolean`
- `action: String`
- `headers: Object`

