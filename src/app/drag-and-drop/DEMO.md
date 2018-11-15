#### 如何引入 ####
单独引入
``` typescript
import { DndModule } from 'bgx-legion'

@NgModule({
    imports: [DndModule],
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

#### 参数说明

##### Draggable

**属性**

属性|说明|类型|默认值
---|---|---|---
dragEnabled|是否允许拖拽 |	boolean	|false
removeAnimation |	是否去除所有动画效果|	boolean	|false
removeTransition | 是否去除所有过渡效果|	boolean|	false
dragData | 拖拽、移动、复制的数据 | any| -
dropZones |	允许指定与此组件相关联的拖放区域的字符串数组|	Array<string>|	-
dragImage | 设置在拖动过程中显示的图片 | string或DragImage或Function| -

**方法**

方法名|参数|描述
---|---|---
onDragStart|DragDropData |	拖拽开始时调用，DragDropData包括DragData和MouseEvent
onDragEnd |	DragDropData|	拖拽结束时调用，DragDropData包括DragData和MouseEvent
onDragSuccess| any|在拖拽成功并结束后调用

##### Droppable

**属性**

属性|说明|类型|默认值
---|---|---|---
dropEnabled |	是否允许将拖拽数据释放在此元素或容器	|boolean| false
dropZones |	允许指定与此组件相关联的拖放区域的字符串数组|	Array<string>	| -

**方法**

方法名|参数|描述
---|---|---
onDropSuccess|DragDropData |	释放成功后调用，DragDropData包括DragData和MouseEvent
onDragEnter |DragDropData	|	拖拽的源对象进入目标对象时调用，DragDropData包括DragData和MouseEvent
onDragOver| DragDropData|拖拽的源对象穿过目标对象时调用，DragDropData包括DragData和MouseEvent
onDragLeave| DragDropData|拖拽的源对象离开目标对象时调用，DragDropData包括DragData和MouseEvent
allowDrop|Function|返回一个boolean的方法，主要用于处理一些业务逻辑或过滤的处理
