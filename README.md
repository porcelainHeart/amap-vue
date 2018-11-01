# 介绍

文档地址:  [AMapVue]()

----

`AMapVue` 是一套基于 `高德地图SDK` 的地图组件库，主要用于地图相关功能展示与交互

## 特性

- 基于 `高德地图SDK` 开发的 UI 组件
- 提供简单易用的地图展示组件
- 提供等同高德地图api的开发能力

## 贡献

如果你在使用 `AMapVue` 时遇到问题，或者有好的建议，欢迎提 [Issue]()

或者你也可以参与这个组件库的开发与维护 [Pull Request]()

## 组件库开发规范

- 组件template统一使用 [pug](https://pugjs.org/zh-cn/api/getting-started.html) 语法
- css使用less, 类名按照 [BEM](http://getbem.com/) 规范
- 组件需要有完善的文档, 后续会逐步完善 `unit test`, `d.ts` 等
- 组件依赖其他第三方包时应该按需引入
- 组件内部不能包含创建全局变量, 调用后端接口等产生副作用的逻辑
- 开发组件需要关注的目录如下: 
  - /packages  组件目录 应该包含一个src目录与index.js文件
  - /packages/index.js  添加需要导出的组件
  - /components.json  组件列表, 编译时依赖
  - /examples/docs  组件文档
  ```
  注意：编写文档时，template 中不要使用自闭合标签
  ```
  - /examples/nav.config.json  导航栏与路由配置