# isomorphic-mobie（移动端前后端同构）

## 概述

该项目是为了解决之前的qmjy-mobile项目的SEO问题

该架构的想法来源于以下两个项目
* git@github.com:smashercosmo/react-stack-playground.git
* git@github.com:laoqiren/isomorphic-redux-CNode.git

用到的技术栈
* React 构建Web组件
* React-router 客户端路由及ssr路由
* redux 管理应用state
* react服务端渲染 实现同构
* node/express 提供服务
* webpack 构建
* webpack-isomorphic-tools 处理ssr静态资源
* typescript 使用一些es6的语法和类型判断

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

## TODO
* 首屏加载速度问题