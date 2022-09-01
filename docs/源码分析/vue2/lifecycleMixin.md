---
title: 【初始化操作】lifecycleMixin 分析
sort: 4
---

> 这个方法帮助 Vue 构造函数挂载了实例和生命周期相关的方法

- vm.\_update 一个内部的私有的组件更新
- vm.$destory() 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
- vm.$forceUpdate() 迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

```javascript
// /Users/liuyang/aymfx/gitRepository/vue-analyse/src/core/instance/lifecycle.ts
Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {};

Vue.prototype.$forceUpdate = function () {};

Vue.prototype.$destroy = function () {};
```

从上面可以看出\_update 函数是接受一个虚拟组件实例的，组件内部更新就是靠这个方法实现的，具体的实现规则，暂时不暂开讲解

流程图
![20220829110548](https://raw.githubusercontent.com/aymfx/pic/mian/img/20220829110548.png)
