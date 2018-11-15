# 用于管理基础组件库

- 开发时候启动服务： `npm start`
- 在服务端启动项目： `npm run dist_serve`
- 启动本文档服务：`npm run book_serve`
注意：当修改文档的时候会自动的重新刷新和编译，如果你新建了md文档，最好重新跑一遍`npm run book_serve`，以便将新的文档添加到watch队列


本UI库遵循ant design设计规范，作为棒谷的UI的基础组件


# 开发组件的要求
- 公共组件使用单独的模块进行整合
- 统一在index.ts中暴露模块接口，以供他人使用
- 代码规范参考[代码规范](doc/code_specs.md)


## 使用说明
`npm install bgsale-component --save`

``` typescript
import { ButtonModule } from 'bgsale-component';

@NgModule({
  imports: [CommonModule,  ButtonModule],
  exports: [],
  declarations: [],
  providers: []
})
export class YourModule { }

```

## 关于NG-ZORRO组件调用的方式

NG-ZORRO是ant design的组件库，所有的组件一律采用以下方式调用，目的是将来能为所有的项目统一管理升级组件库


``` typescript
import { 模块名 } from 'bgsale-component'

@NgModule({
  imports: [CommonModule,  模块名],
  exports: [],
  declarations: [],
  providers: []
})
export class YourModule { }

