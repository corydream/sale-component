<!-- ### dropdown-search ###

下拉列表需要系列操作（增删改查）数据时使用


#### 何时使用 ####

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。 -->

#### 如何引入 ####
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
## API ##

### dropdown-search参数说明 ###

属性|说明|类型|默认值
---|---|---|---
[bgxId]| 唯一标识（建议以项目名为开头命名，避免冲突） | string | -
[bgxSize] | 设置按钮大小，可选值为 `small` `large` 或者不设| string | default
[bgxContent] | 获取搜索数据的回调,注意：务必使用 => 定义处理方法。 |`() => BgxQueryContentItem[]`| -
(bgxOnClick) | 点击搜索时的回调 | EventEmitter<BgxQueryContentItem[]> | -

### BgxQueryContentItem

属性|说明|类型|默认值
---|---|---|---
[name] | 输入框属性名 | string | -
[value] | 输入框属性值 | string | -