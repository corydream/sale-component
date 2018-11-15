## 如何引入 ##
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
## 注意项 ##

- 如需使用日期选择框，它的 local 来自于 Angular 自身的国际化支持，需要在 `app.module.ts` 文件中 引入相应的 Angular 语言包。
```typescript
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
```

## API ##

### bgx-search-area ###

参数|说明|类型|默认值
---|---|---|---
[bgxCommonlyQueried]  |是否启用保存常用查询功能| boolean|	true
[bgxId]| 当前搜索区域启用保存常用查询功能时设置，唯一标识（建议以项目名为开头命名，避免冲突） |	string | -
[bgxSortId]|如需持久化用户搜索习惯，请提供此字段，唯一标识|string|-
[bgxOptions]| 动态生成搜索区域项|any[]| []
(bgxOnSearch)  | 点击搜索时的回调 | `EventEmitter< { [key: string]: any｜any[]; }>`| -
(bgxShowMore) |显示/隐藏更多搜索条件的回调 | `EventEmitter<boolean>`| -

### 搜索区域项 Class ###
**注意：如启用保存常用功能则必须提供 `key`**
### 共同API ###

参数|说明|类型|默认值
---|---|---|---
value| 双向绑定的值 |	`T`	| null 
key  |唯一标识符，如需要用到常用查询功能则为必填项|	string|	-
label| 用于标示当前控件项的内容|string| -
order | 控件的显示顺序 | number| 1
placeholder |	提示信息|	string|	`key` 属性值
width|控件宽度，单位 `px`|string|'auto'
onValueChange()  | `value`发生改变时，调用此函数 | `EventEmitter<any｜any[]>`| -

### TextBox ###

参数|说明|类型|默认值
---|---|---|---
value |双向绑定的值|string|-
addOnBefore |带标签的 input，设置前置标签|	string 丨 `TemplateRef<void>`|	-
addOnAfter| 带标签的 input，设置后置标签 |	string 丨 `TemplateRef<void>` | -
prefixIcon| 前缀图标|`string 丨 string[] 丨 Set<string> 丨 { [klass: string]: any; }`| -
onKeyupOfEnter() | 回车，调用此函数 | `EventEmitter<string>`| -

### Select ###

选择器有两种：`type: 'bgx' | 'nz'`，默认选择器 `bgx-select`

* `bgx-select`
* `nz-select`

#### 选择器共同API ####

参数|说明|类型|默认值
---|---|---|---
value |双向绑定的值| any丨any[] 丨 null|	-
type |选择器类型|	`'bgx' 丨 'nz'` |	'bgx'
mode| 设置选择器的模式 |	`'default' 丨 'multiple' 丨 'tags'`  | `'default'`
items|选项列表，支持返回 Observable 对象（主要用于处理异步请求）。注意：务必使用 => 定义处理方法 | `{label: string, value: string}[] 丨 () => Observable`  | []
maxMultipleCount| 最多选中多少个标签|number| Infinity
isLoading| 服务端搜索时的加载效果|boolean| false
serverSearch | 是否使用服务端搜索，当为 true 时，将不再在前端对 选项 进行过滤 |boolean| false
onSearch() | 文本框值变化时回调 | `EventEmitter<string>`| -

#### nz 选择器 ####

参数|说明|类型|默认值
---|---|---|---
scrollToBottom()  | 下拉列表滚动到底部的回调 | `EventEmitter<void>`| -

### TreeSelect ###

树选择有两种：`type: 'treeSelect' | 'selectBox'`，默认树选择器 `bgx-tree-select`

* `bgx-tree-select`
* `bgx-select-box`

#### 树选择共同API ####

参数|说明|类型|默认值
---|---|---|---
value |双向绑定的值| any[] 丨 []|	-
type |树选择类型| `'treeSelect' 丨 'selectBox'` | 'treeSelect'
items| 数据源，支持返回 Observable 对象（主要用于处理异步请求）。注意：务必使用 => 定义处理方法 | `any[] 丨 () => Observable`  | []
idField| 对象中的唯一标识符，与数据源中的属性名保持一致|string| 'id'
textField| 树选择中展示的项，与数据源中的属性名保持一致|string| 'name'
multiple | 是否多选 |boolean| true
onlyShowParent | 当所有子节点选中时只显示父节点 |boolean| true
maxHeight | 树选择的最大显示高度 |number| 300
showBoxHeight | 展示框的高度 |number| 32

#### SelectBox 平铺树选择 ####

参数|说明|类型|默认值
---|---|---|---
dropDownWidth | 下拉框的宽度 |number| 450
span | 设置树选项的排列（24栅格布局，默认一行4列） |number| 6
isOpen | 是否默认展开所有项 |boolean| true

### DatePicker ###

日期选择框有三种：`type: 'date' | 'range' | 'week'`

* `nz-date-picker`
* `nz-range-picker`
* `nz-week-picker`

#### 日期选择框共同API ####

参数|说明|类型|默认值
---|---|---|---
value |双向绑定的值| Date 丨无|	-
type |日期类型| `'date' 丨 'range' 丨 'week'` | 'date'

#### date 日期选择框 ####

参数|说明|类型|默认值
---|---|---|---
format| 日期格式 | string  | 'yyyy-MM-dd'
onOk() |点击确定按钮的回调|`EventEmitter<Date>`| -

#### range 日期范围选择框 ####

参数|说明|类型|默认值
---|---|---|---
format| 日期格式 | string  | 'yyyy-MM-dd'
placeholder| 日期范围选择框提示信息| `string[]` | ['开始日期', '结束日期']
ranges |预设时间范围快捷选择| `{ [ key: string ]: Date[] }` | 无
onOk() |点击确定按钮的回调|`EventEmitter<Date[]>`| -

#### week 星期选择框 ####

参数|说明|类型|默认值
---|---|---|---
format| 日期格式 | string  | 'yyyy-ww' 

### Checkbox ###

参数|说明|类型|默认值
---|---|---|---
value| 指定可选项，可双向绑定 | boolean｜`Array<{ label: string; value: string; checked?: boolean; }>`  | false｜`[]`
onValueChange| 选中数据变化时的回调 | boolean｜`EventEmitter<Array<{ label: string; value: string; checked?: boolean; }>>`  | -

### Render ###

自定义模板

**注意：必须提供 `value` ，如启用保存常用功能则必须提供 `key`**

参数|说明|类型|默认值
---|---|---|---
value |	双向绑定的值（必须与ngModel的属性名保持一致）| `{ [ ngModel属性名: string ]: any }`|-
renderContent |自定义模板| `TemplateRef<any>` | 无
