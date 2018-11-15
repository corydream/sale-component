### SelectBox 平铺树选择 ###

平铺树选择控件。

#### 何时使用 ####

类似 Select 的选择控件，可选择的数据结构是一个平铺的树形结构时，可以使用 SelectBox，例如公司层级、部门人员展示及选择等等
支持拼音搜索，首字母搜索

#### 注意事项 ####
SelectBox组件主要用于ERP中，用于平铺展示部门数据及选择。
数组中的每个对象只能有一个子集！！！

#### 如何引入 ####
单独引入
``` typescript
import { BgxSelectBoxModule } from 'bgx-legion'

@NgModule({
    imports: [BgxSelectBoxModule],
    exports: [],
    declarations: [],
    providers: [],
})

```

整个ant组件库引入
``` typescript
import { AntModule } from './../../ant-ui/ant.module';
@NgModule({
    imports: [AntModule],
    exports: [],
    declarations: [],
    providers: [],
})
export class DemoModule { }
```

**代码演示**

注意，演示文档是在bgx-legion项目中，所以引入模块不是`import { BgxSelectBoxModule } from 'bgx-legion'`，而是从本地引入

*** 新建你的模块，引入按钮组件 ***
[import , lang:"typescript"](select-box-demo.module.ts)

*** 新建你的组件 ***
[import , lang:"typescript"](select-box-demo.component.ts)

*** 在组件的模版中使用 ***

[import](select-box-demo.component.1.html)

#### SelectBox
属性|说明|类型|默认值|必填项
---|---|---|---|---
bgxItems|数据源 |	any[]	|[]|是
bgxDisabled  |	是否禁止|	boolean|	false|否
bgxPlaceholder| 树选择提示|string| ''|否
bgxAllowFilter  | 是否允许进行树搜索 | boolean| true| 否
bgxFilterPlaceholder  |	搜索提示|	string|	'请输入关键词'|否
bgxSize|选择框大小，可选 large，small|string|default|否
bgxMaxVisibleItemCount  | 选择框最大显示数量 | number| 3|否
bgxSpan|设置树选项的排列（24栅格布局，默认一行4列）|number|6|否
bgxIsOpen|是否默认展开所有树选项|boolean|false|否
bgxOnlyShowParent | 当所有子节点选中时只显示父节点| boolean|false|否
bgxId  |	对象中的唯一标识符，与数据源中的属性名保持一致	| string | 'id'	|是
bgxTextField | 在树选择中展示的项，与数据源中的属性名保持一致 | string | 'name' |是
bgxChildrenField | 属性中包含的子节点，与数据源种的属性名保持一致 | string | null |否
bgxWidth|树选择的宽度|number或string（百分比）|300|否
bgxMaxHeight|树选择的最大显示高度|number|300|否
bgxDropDownWidth|下拉框的宽度|number|600 最大宽度800|否
bgxShowBoxHeight|展示框的高度|number|-|否

