## bgx-legion的开发规范

本规范适用范围为本UI组件库

一般通用规则不必细说，重点强调以下一些事项：
- class 名称开头一律大写；
- 每一个类和方法都需要写注释
- export的contant 名称使用大写字母，使用下划线分割，如：`DEFAULT_IMAGE_MAP`; 在方法内的contant不做此要求；

```ts
// 对外输出的需要使用大写字母，下划线分割
export const  DEFAULT_IMAGE_MAP = 'DEFAULT_IMAGE_MAP'
// 方法内的不作要求
class Example {
    fuc () {
        const youconst = 'test'
    }
}
```
- 修饰后缀使用点号分隔，单词之间用中划线，如project-mangage.component；根据文件的功能的不同，修饰词也不同，有这几种修饰词 module|service|routing|pipe|const
`按照ng generate的规则，它会自动生成中划线的文件，我们跟它保持一致`
- html文件命名，和调用它的组件同名
- 文件名称：组件以component作为修饰名称 文件命名
`如sidebar.component.ts，相应的如module|service|routing；`
- 组件的selector名称前缀：app|demo|bui
	1. app代表整个应用的组件；
	2. demo 用于展示demo
	3. bui 用于基础组件的前缀；

- 类的初始化属性，成员变量的声明一律放到constructor的前面,方法放到constructor后面
- 组件的输入属性，成员变量的声明一律放到constructor的前面,方法放到constructor后面
- input属性和output在类中属性的放置顺序要规范，按照顺序，input在前面，output在后面;
```ts
// 如下顺序
class TabComponent {
	public _title: string;
    @Iutput() tabTitle: string;
 	@Output() afterSelect: EventEmitter<any> = new EventEmitter();
	constructor() {
	}
	getIndex(index) {
		return index;
	}
}
```
- 组件的输入属性和输出属性使用驼峰方式命名：`@Iutput() tabTitle`，且写在同一行内；
```ts
class Abc {
    @Iutput() tabTitle: string;
}
```
- 组件模板最好单独写，除非很短，否则都需要单独一个html文件
- SCSS/less文件命名方式，各个单词之间使用"-"分隔，如`nav-bar.scss`


文件命名的规则看起来很麻烦，其实只要用ng generate都很方便生成文件。

（为了开发的时候能快速区分文件的功能，希望大家遵守同一套规范，有好的建议也可以发出来）


