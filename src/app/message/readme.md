
## 如何引入 
``` typescript
	import { BgxLegionModule, BgxMessageService } from 'bgx-legion'
    @NgModule({
    	imports: [BgxLegionModule],
    	exports: [],
    	declarations: [],
    	providers: [BgxMessageService],
	})
```
## bgxMessageService
组件提供了一些服务方法，使用方式和参数如下：
```
bgxMessageService.success(content, [options])
bgxMessageService.error(content, [options])
bgxMessageService.info(content, [options])
bgxMessageService.warning(content, [options])
bgxMessageService.loading(content, [options])
```

参数|说明|类型|默认值
---|---|---|---
content | 提示内容 | string | -
options | 支持设置针对当前提示框的参数，见下方表格 | object | -


options 支持设置的参数如下：

参数|说明|类型|默认值
---|---|---|---
bgxDuration | 持续时间(毫秒)，当设置为0时不消失 | number | 3000
bgxPauseOnHover | 鼠标移上时禁止自动移除 | boolean | true
bgxAnimate | 开关动画效果 | boolean | true
bgxClosable | 是否显示关闭按钮 | boolean | true

还提供了全局销毁方法：
```
NzMessageService.remove(id) // 移除特定id的消息，当id为空时，移除所有消息（该消息id通过上述方法返回值中得到）
```

全局配置（BGX_MESSAGE_CONFIG）

参数|说明|类型|默认值
---|---|---|---
bgxDuration | 持续时间(毫秒)，当设置为0时不消失 | number | 3000
bgxPauseOnHover | 鼠标移上时禁止自动移除 | boolean | true
bgxAnimate | 开关动画效果 | boolean | true
bgxClosable | 是否显示关闭按钮 | boolean | true
nzMaxStack | 同一时间可展示的最大提示数量 | number | 8