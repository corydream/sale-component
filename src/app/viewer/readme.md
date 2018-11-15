
## 如何引入 
``` typescript

	import { SaleComponentModule } from 'sale-component';
	@NgModule({
		imports: [SaleComponentModule],
		exports: [],
		declarations: [],
		providers: [],
	})
	export class DemoModule { }

```
## BgxViewerService参数说明
组件提供了一些服务方法，使用方式和参数如下：
```
BgxViewerService.create([options])
```

参数|说明|类型|默认值
---|---|---|---
bgxSource | 图片元数据 | BgxOptionConfig[] | []
bgxCurrent | 图片索引,默认展示第几张图片 | number | 0
bgxMaskClosable | 点击蒙层是否允许关闭 | boolean | false

## BgxOptionConfig
参数|说明|类型|默认值
---|---|---|---
[src] | 图片路径 | string | -
[thumbSrc] | 图片缩略图路径 | string | -

