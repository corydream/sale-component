
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

## 参数说明 ##
属性|说明|类型|默认值|必填项
---|---|---|---|---
bgxItems|数据源 |	any[]	|[]|是
bgxMultiple  |	是否多选|	boolean	|false|否
bgxDisabled  |	是否禁止|	boolean|	false|否
bgxPlaceholder| 树选择提示|string| ''|否
bgxAllowFilter  | 是否允许进行树搜索 | boolean| true| 否
bgxFilterPlaceholder  |	搜索提示|	string|	'请输入关键词'|否
bgxSize|选择框大小，可选 large，small|string|default|否
bgxIdField  |	对象中的唯一标识符，与数据源中的属性名保持一致	| string | 'id'	|是
bgxTextField | 在树选择中展示的项，与数据源中的属性名保持一致 | string | 'name' |是
bgxChildrenField | 属性中包含的子项，与数据源种的属性名保持一致 | string | null |否
bgxAllowParentSelection | 是否允许通过选择父节点进行选择所有子节点| boolean|false|否
bgxOnlyShowParent | 当所有子节点选中时只显示父节点| boolean|false|否
bgxWidth|树选择的宽度|number或string（百分比）|300|否
bgxMaxHeight|树选择的最大显示高度|number|300|否
bgxShowBoxHeight|展示框的高度|number|-|否

