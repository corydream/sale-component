## 如何使用ant官方提供的angular组件

- 从bgx-legion引入你需要的模块，bgx-legion将暴露ant官方的所有组件，目的是为了提供统一的调用入口方便日后升级维护；

`安装npm install bgx-legion`

`import { ButtonModule } from 'bgx-legion'`

- 按模块引入，切忌整个组件库模块引入

如果需要按钮，则引入按钮模块
``` typescript
import { ButtonModule } from 'bgx-legion'

@NgModule({
    imports: [ButtonModule],
    exports: [],
    declarations: [],
    providers: [],
})

```

