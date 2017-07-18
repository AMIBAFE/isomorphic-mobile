# isomorphic-mobie（移动端前后端同构）

## 概述

该项目是为了解决之前的[qmjy-mobile](https://github.com/xuyongtao/react-typescript-webpack-demo)项目的SEO问题

该架构的想法来源于以下两个项目
* [react-stack-playground](https://github.com/smashercosmo/react-stack-playground)
* [基于react->express->mongo技术栈的同构SPA](https://github.com/laoqiren/isomorphic-redux-CNode)

用到的技术栈
* React 构建Web组件
* React-router 客户端路由及ssr路由
* redux 管理应用state
* react服务端渲染 实现同构
* node/express 提供服务
* webpack 构建
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) 处理ssr静态资源
* typescript 使用一些es6的语法和类型判断，由于客户端和服务端都是同一套ui代码（ts或tsx文件），需要用到ts-node来为服务端搭建编译ts或tsx文件环境

## 线下前端人员运行

```bash
$ cd 项目根目录（如：cd ~/workplace/isomorphic-mobie）
$ npm install
$ ./debug
```

测试api可在根目录下的server/api/创建对应的接口文档

## 线上管理人员运行

```bash
$ cd 项目根目录（如：cd ~/isomorphic-mobie）
$ npm install
$ ./release 
$ ./run-prod-server
```

## 注意点
* 需要在npm下载的redux包中的index.d.ts文件的98行补上以下代码

```javascript
export interface Dispatch<S> {
  <R>(asyncAction: (dispatch: Dispatch<S>, getState: () => S) => R): R;
}
```

* 开发过程中，如有修改或添加server/api下的文件，请重新执行./debug
* 由于正式服务器有多个版本的node，切换频繁。为了解决切换过程中，跑该项目的node进程突然死掉，再次跑起来的node版本不合适，故使用了docker来搭建虚拟环境。（可用过docker images查看已搭建好的镜像。本项目用的是wap这个镜像，跑该项目的容器名为run_wap，可通过docker ps查看）。
* 设置ts-loader的参数{transpileOnly: true}，对没有修改过的文件不会再重新编译，提升webpack的编译速度。当然，改设置会使类型检查失效，该项目使用[fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin)来创建一个异步的进程来做类型检查的工作。
* 静态资源缓存（给资源加chunkhash，生产换用HashedModuleIdsPlugin开发环境用NamedModulesPlugin来保证模块的id不变，从而使每次重新编译不至于chunkhash值一直都变）

## 拓展文档
* [docker介绍文档](https://www.gitbook.com/book/yeasy/docker_practice 'Docker — 从入门到实践')
* [单页面应用vue ssr](https://zhuanlan.zhihu.com/p/27213057 '如何用 Vue 构建大型单页面应用')
* [JWT](https://github.com/hokaccha/node-jwt-simple) 请求验证，防止暴力刷接口

## TODO
* 提升首屏页面加载速度（只直出首屏页面可视内容，其他在客户端上延迟处理，在客户端上通过 react 的 dom diff 机制来动态挂载，无页面刷新的感知）
* [~~按需加载，代码分割（没有好的解决方案）~~](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/code-splitting.md)
* webpack配置优化（使编译速度加快）