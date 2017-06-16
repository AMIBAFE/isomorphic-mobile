# isomorphic-mobie（移动端前后端同构）

## 概述

该项目是为了解决之前的[qmjy-mobile](http://121.41.5.131:3000/x-bird/qmjy-mobile '全民教育移动端')项目的SEO问题

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

* 由于正式服务器有多个版本的node，切换频繁。为了解决切换过程中，跑该项目的node进程突然死掉，再次跑起来的node版本不合适，故使用了docker来搭建虚拟环境。（可用过docker images查看已搭建好的镜像。本项目用的是wap这个镜像，跑该项目的容器名为run_wap，可通过docker ps查看）。

## 相关文档
* [docker介绍文档](https://www.gitbook.com/book/yeasy/docker_practice 'Docker — 从入门到实践')
* [单页面应用vue ssr](https://zhuanlan.zhihu.com/p/27213057 '如何用 Vue 构建大型单页面应用')

## TODO
* 首页加载速度问题