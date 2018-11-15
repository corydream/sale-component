## 如何引入 ##
``` typescript
import { BgxLegionModule } from 'bgx-legion';
@NgModule({
    imports: [BgxLegionModule],
    exports: [],
    declarations: [],
    providers: [],
})
export class DemoModule { }
```
> 注意:**使用此组件需要进行如下操作**

```
    1. yarn add quill 或者 npm install quill --save
    2. 修改angular.json
    ...
        "architect": {
            "build": {
                "options": {
                    ...
                    "styles": [
                        ...
                        "node_modules/quill/dist/quill.snow.css"
                    ],
                    "scripts": [
                        ...
                        "node_modules/quill/dist/quill.min.js"
                    ]
                }
            }
        }
        ...
```


## 参数说明 ##
**为方便了解更多关于quill的配置和API，可以上[官方](https://quilljs.com/)进行了解与学习**

### API ###
属性|说明|类型|默认值
---|---|---|---
bgxTheme| 主题 |	string	| 'snow'
bgxModules | 编辑器配置 |	Object	|defatulModules
bgxReadOnly |编辑器内容是否只读|	boolean|	false
bgxPlaceholder | 文本提示 | string| '请输入内容'
bgxMaxLength |	文本最大长度|	number|	-
bgxMinLength | 文本最小长度 | number| -
bgxRequired | 文本是否必填，主要用于form表达	| boolean |	false
bgxFormats | 支持若干的格式设置，包括UI controls和API calls| string[]| -
bgxStyle | 自定义样式 | any| {}
bgxStrict | 严格模式 | boolean| true
bgxBounds | DOM元素或者一个CSS选择器，在编辑的UI元素（即提示，等）应限制。目前，它只考虑左右边界。 | HTMLElement或string| -
bgxScrollingContainer | 滚动内容 | HTMLElement或string| null

#### DefaultModules ###

``` typescript
defaultModules = { // 默认配置
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // 切换按钮
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // 自定义按钮值
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // 上/下标
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // 缩进
    [{ 'direction': 'rtl' }],                         // 文本方向
    [{ 'size': ['small', false, 'large', 'huge'] }],  // 自定义下拉
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': this.emptyArray.slice() }, { 'background': this.emptyArray.slice() }], // 默认主题的下拉菜单
    [{ 'font': this.emptyArray.slice() }],
    [{ 'align': this.emptyArray.slice() }],

    ['clean'], // 清除格式按钮
    ['link', 'image', 'video'] // 链接、图像、视频按钮
    ]
};
```
***除默认配置toolbar之外，modules中还有keyboard，history，clipboard，formula，syntax属性，可在[官方-modules](https://quilljs.com/docs/modules)了解更多***

### 方法

方法名|参数|描述
---|---|---
bgxOnEditorCreated| any |	编辑器创建后，返回editor编辑器实例
bgxOnContentChanged |	any |	编辑器内容改变时，返回一个对象包含editor,html,text,delta,oldContents,source
bgxOnSelectionChanged| any|选择行后，返回一个对象包含editor,range（所在行的下标）,oldRange,source
