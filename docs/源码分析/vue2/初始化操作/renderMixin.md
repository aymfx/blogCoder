---
title: renderMixin 分析
---

> 这里挂载了一些渲染方法 和一些私有的工具方法

- installRenderHelpers(Vue.prototype) 运行时的私有的工具方法
- vm.$nextTick 在下一次 dom 更新后出发
- vm.\_render 私有的渲染函数

```javascript
installRenderHelpers(Vue.prototype);

Vue.prototype.$nextTick = function (fn: (...args: any[]) => any) {};

Vue.prototype._render = function (): VNode {};
```

## installRenderHelpers 工具函数的实现

在原型链注入一些私有的方法，用于 render 的时候进行调用

```javascript
export function installRenderHelpers(target: any) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
```

## vm.$nextTick

将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。

```javascript
Vue.prototype.$nextTick = function (fn: (...args: any[]) => any) {
  return nextTick(fn, this); //绑定到自己的实例上
};
```
