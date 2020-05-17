# vue-wheel-simple - Vue组件库轮子
[![Build Status](https://travis-ci.com/guooooooo/vue-wheel.svg?branch=master)](https://travis-ci.com/guooooooo/vue-wheel) ![npm](https://img.shields.io/npm/v/vue-wheel-simple)

## 介绍

个人学习及实践 Vue 过程中，封装组件库。

## 开始使用

1. 添加 css

  使用本框架前，请在 CSS 中开启 border-box

  ```css
  *, *::before, *::after{box-sizing: border-box;}
  ```

  你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
  ```css
  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```

2. 安装 vue-wheel-simple

  ```
  npm i --save vue-wheel-simple
  ```

3. 引入 vue-wheel-simple

```js
import { Button, ButtonGroup, Icon } from 'vue-wheel-simple';
import 'vue-wheel-simple/dist/index.css';
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码