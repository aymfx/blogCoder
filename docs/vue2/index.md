---
title: 准备阶段
---

## 目录

**入口文件初始化**

- [Vue 构造函数](/vue2/构造函数.md)
- [initMixin 函数](/vue2/initMixin.md)
- [stateMixin 函数](/vue2/stateMixin.md)
- [eventsMixin 函数](/vue2/eventsMixin.md)
- [lifecycleMixin 函数](/vue2/lifecycleMixin.md)
- [renderMixin 函数](/vue2/renderMixin.md)
- [initGlobalAPI 函数](/vue2/initGlobalAPI.md)

**响应式原理**

- [核心思想](/vue2/介绍.md)
- [props 处理](/vue2/props处理.md)

## 准备

- Vue 源码版本 2.7.8
- 增加 map 文件方便断点 在 package.json --scripts --- dev 配置改成如下可以自动生成.map 文件

  - "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:full-dev", 增加--sourcemap

- 2.7.8 已用了 ts 进行类型判断，flow 已经不在 vue2.0 使用了
- 主要分析目录

![image-20220827102128861](https://raw.githubusercontent.com/aymfx/pic/mian/img/image-20220827102128861.png)

## 通过 rollup 构建版本

```sh

"dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:full-dev",
"dev:cjs": "rollup -w -c scripts/config.js --environment TARGET:runtime-cjs-dev",
"dev:esm": "rollup -w -c scripts/config.js --environment TARGET:runtime-esm",
"dev:ssr": "rollup -w -c scripts/config.js --environment TARGET:server-renderer",
"dev:compiler": "rollup -w -c scripts/config.js --environment TARGET:compiler ",

```