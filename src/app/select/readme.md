
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
## bgx-select参数说明
参数|说明|类型|默认值
---|---|---|---
[ngModel]| 当前选中的 bgx-option 的 bgxValue 值，可双向绑定，当 bgxMode 为 multiple 时，ngModel 为数组 | any 丨 any[] | -
[bgxAllowClear] | 支持清除 | boolean | true
[bgxDisabled] | 是否禁用| boolean | false
[bgxServerSearch] | 选择框是否使用服务端搜索 | boolean | false
[bgxListSearchServer] | 搜索框是否使用服务端搜索 | boolean | false
[bgxMaxMultipleCount] | 最多选中多少个标签 | number | Infinity
[bgxTextShow] | bgxMode为multiple时,选择内容过多时,是否启用文字展示 | boolean | true
[bgxMode] | 设置 bgx-select 的模式 | 'multiple' / 'default' | 'default'
[bgxNotFoundContent] | 当下拉列表为空时显示的内容 | string | '无匹配结果'
[bgxPlaceHolder] | 选择框默认文字 | string | '请选择...'
[bgxSearchPlaceholder] | 搜索框默认文字 | string | '请输入...'
[bgxSize] | 选择框大小，可选 large/small | string | default
(ngModelChange) | 选中的 bgx-option 发生变化时，调用此函数 | EventEmitter<any[]> | -
(bgxOpenChange) | 下拉菜单打开状态变化回调 | EventEmitter<boolean> | -
(bgxOnSearch) | bgxServerSearch为true时,文本框值变化时回调 | EventEmitter<string> | -
(bgxOnListSearch) | bgxListSearchServer为true时,搜索框值变化时回调 | EventEmitter<string> | -

## bgx-option参数说明
参数|说明|类型|默认值
---|---|---|---
[bgxDisabled] | 是否禁用 | boolean | false
[bgxLabel] | 选中该 bgx-option 后，bgx-select 中显示的文字 | string | -
[bgxValue] | bgx-select 中 ngModel 的值 | any | -
[bgxCustomContent] | 是否自定义在下拉菜单中的Template内容，当为 true 时，bgx-option 包裹的内容将直接渲染在下拉菜单中 | boolean | false
