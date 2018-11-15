## 如何引入 ##

**此组件需要用到ueditor的js和css，为方便了解更多关于ueditor的[配置](http://fex.baidu.com/ueditor/#start-config)和[API](http://ueditor.baidu.com/doc/)，可以上[官方](http://ueditor.baidu.com/website/index.html)进行了解与学习**

``` typescript
import { BgxLegionModule } from 'sale-component'

@NgModule({
    imports: [
        BgxLegionModule
    ],
    exports: [],
    declarations: [],
    providers: [],
})
/**
* 以编辑器实例化页面为当前路径，指向编辑器资源文件（即dialog等文件夹）的路径。
* 鉴于很多同学在使用编辑器的时候出现的种种路径问题，此处强烈建议大家使用"相对于网站根目录的相对路径"进行配置。
* "相对于网站根目录的相对路径"也就是以斜杠开头的形如"/myProject/ueditor/"这样的路径。
* 如果站点中有多个不在同一层级的页面需要实例化编辑器，且引用了同一UEditor的时候，此处的URL可能不适用于每个页面的编辑器。
* 因此，UEditor提供了针对不同页面的编辑器可单独配置的根路径，具体来说，在需要实例化编辑器的页面最顶部写上如下代码即可。
*/
```

## 参数说明 ##

### API
属性|说明|类型|默认值
---|---|---|---
bgxPath | 资源的路径 | string  | https://proxy-gateway.banggood.cn/public/finance/ueditor-1.4.3.3/
bgxHook | 全局性的二次开发时使用 | Function | -
bgxConfig|  前端配置项说明，[见官网](http://fex.baidu.com/ueditor/#start-config) |	Object	| 默认配置（所有功能）
bgxLoadingTip | 初始化提示文本 |	string	|加载中...
bgxDisabled | boolean | false | 	是否禁用
bgxDelay | number | 50 | 延迟初始化UEditor，单位：毫秒
### 方法

方法名|参数|描述
---|---|---
bgxOnPreReady| Function |编辑器准备就绪之前会触发该事件，并会传递 `BgxUEditorComponent` 当前实例对象，可用于后续操作（比如：二次开发前的准备）
bgxOnReady |	Function |	编辑器准备就绪后会触发该事件，并会传递 `BgxUEditorComponent` 当前实例对象，可用于后续操作
bgxOnDestroy| Function|**编辑器组件销毁**后会触发该事件
ngModelChange | Function | 编辑器内容发生改变时会触发该事件

### 关于懒加载

懒加载在未到 `wdinow.UE` 时会启动，如果你在 `index.html` 已经使用 `<script src="ueditor.all.js"></script>` 加载过，懒加载流程将会失效。

**加载语言注意点**

懒加载会自动识别并引用，否则，需要自行在 `<head>` 加入语言版本脚本。

### 访问ueditor实例对象

首先，需要给组件定义一下模板变量：

```html
<bgx-ueditor [(ngModel)]="full_source" #full></bgx-ueditor>
```

使用 `@ViewChild` 访问组件，并使用 `this.full.Instance` 访问ueditor实例对象。

```typescript
export class DemoComponent {
    @ViewChild('full') full: BgxUEditorComponent;
    constructor(private el: ElementRef) {}

    getAllHtml() {
        // 通过 `this.full.Instance` 访问ueditor实例对象
        alert(this.full.Instance.getAllHtml())
    }
}
```

## 事件

虽说上节也可以直接注册ueditor事件，但当组件被销毁时可能会引发内存泄露。所以**不建议直接在ueditor实例中这么做**。组件本身提供 `addListener` 和 `removeListener` 来帮你处理。

```typescript
// 事件监听
this.full.addListener('focus', () => {
    this.focus = `fire focus in ${new Date().getTime()}`;
});
// 事件移除
this.full.removeListener('focus');
```

## 二次开发

**onPreReady**

`onPreReady` 是指在UEditor创建前会触发；因此，可以利用这个事件做一些针对二次开发的准备工作。比如，针对本实例创建自定义一个按钮：

```html
<bgx-ueditor [(ngModel)]="custom_source" (bgxOnPreReady)="onPreReady($event)" [bgxConfig]="custom"></bgx-ueditor>
```

```typescript
onPreReady(comp: BgxUEditorComponent) {
    UE.registerUI('button', function(editor, uiName) {
        //注册按钮执行时的command命令，使用命令默认就会带有回退操作
        editor.registerCommand(uiName, {
            execCommand: function() {
                alert('execCommand:' + uiName)
            }
        });
        //创建一个button
        var btn = new UE.ui.Button({
            //按钮的名字
            name: uiName,
            //提示
            title: uiName,
            //添加额外样式，指定icon图标，这里默认使用一个重复的icon
            cssRules: 'background-position: -500px 0;',
            //点击时执行的命令
            onclick: function() {
                //这里可以不用执行命令,做你自己的操作也可
                editor.execCommand(uiName);
            }
        });
        //当点到编辑内容上时，按钮要做的状态反射
        editor.addListener('selectionchange', function() {
            var state = editor.queryCommandState(uiName);
            if (state == -1) {
                btn.setDisabled(true);
                btn.setChecked(false);
            } else {
                btn.setDisabled(false);
                btn.setChecked(state);
            }
        });
        //因为你是添加button,所以需要返回这个button
        return btn;
    }, 5, comp.id);
    // comp.id 是指当前UEditor实例Id
}

```

**Hook**

hook调用会在UE加载完成后，UEditor初始化前调用，而且这个整个APP中只会调用一次，通过这个勾子可以做全局性的二次开发。

```typescript
    bgxHook = (UE: any): void => {
        // button 自定义按钮将在所有实例中有效。
        UE.registerUI('button', function(editor, uiName) {
            //注册按钮执行时的command命令，使用命令默认就会带有回退操作
            editor.registerCommand(uiName, {
                execCommand: function() {
                    alert('execCommand:' + uiName)
                }
            });
            //创建一个button
            var btn = new UE.ui.Button({
                //按钮的名字
                name: uiName,
                //提示
                title: uiName,
                //添加额外样式，指定icon图标，这里默认使用一个重复的icon
                cssRules: 'background-position: -500px 0;',
                //点击时执行的命令
                onclick: function() {
                    //这里可以不用执行命令,做你自己的操作也可
                    editor.execCommand(uiName);
                }
            });
            //当点到编辑内容上时，按钮要做的状态反射
            editor.addListener('selectionchange', function() {
                var state = editor.queryCommandState(uiName);
                if (state == -1) {
                    btn.setDisabled(true);
                    btn.setChecked(false);
                } else {
                    btn.setDisabled(false);
                    btn.setChecked(state);
                }
            });
            //因为你是添加button,所以需要返回这个button
            return btn;
        });
    }

```


## 表单非空校验

组件加入 `required` 当编辑器为空时会处于 `ng-invalid` 状态。

## 组件接口

```typescript
interface BgxUEditorComponent {
    /**
     * 获取UE实例
     * 
     * @readonly
     */
    get Instance(): any;

        /**
     * 设置编辑器语言
     * 
     * @param {('zh-cn' | 'en')} lang 
     */
    setLang(lang: 'zh-cn' | 'en') {}

    /**
     * 添加编辑器事件
     */
    addListener(eventName: 'destroy' | 'reset' | 'focus' | 'langReady' | 'beforeExecCommand' | 'afterExecCommand' | 'firstBeforeExecCommand' | 'beforeGetContent' | 'afterGetContent' | 'getAllHtml' | 'beforeSetContent' | 'afterSetContent' | 'selectionchange' | 'beforeSelectionChange' | 'afterSelectionChange', 
                fn: Function): void {}

    /**
     * 移除编辑器事件
     * 
     * @param {('destroy' | 'reset' | 'focus' | 'langReady' | 'beforeExecCommand' | 'afterExecCommand' | 'firstBeforeExecCommand' | 'beforeGetContent' | 'afterGetContent' | 'getAllHtml' | 'beforeSetContent' | 'afterSetContent' | 'selectionchange' | 'beforeSelectionChange' | 'afterSelectionChange')} eventName 
     */
    removeListener(eventName: 'destroy' | 'reset' | 'focus' | 'langReady' | 'beforeExecCommand' | 'afterExecCommand' | 'firstBeforeExecCommand' | 'beforeGetContent' | 'afterGetContent' | 'getAllHtml' | 'beforeSetContent' | 'afterSetContent' | 'selectionchange' | 'beforeSelectionChange' | 'afterSelectionChange'): void {}
}
```
