---
title: 【初始化操作】initMixin分析
---

> 该函数主要做的一件事就是在 Vue 构造函数上面挂载了一个私有的方法 Vue.prototype.\_init,它会在实例化的时候自动被调用。

- Vue.prototype.\_init

## InitMIxin 做了哪些事

```javascript
//vue-analyse/src/core/instance/init.ts
export function initMixin(Vue: typeof Component) {
  Vue.prototype._init = function (options?: Record<string, any>) {
    //....
  };
}
```

从这个函数可以看出它给 Vue 的原型上加了一个私有的方法\_init,我们再实例化的时候会去调用这个私有的方法，现在我们要具体看下这个方法内部做了那些事(删减了一些不是必须的代码)

```javascript
  // 初始化操作  new Vue() ===> this._init()
  Vue.prototype._init = function (options?: Record<string, any>) {
    const vm: Component = this

    // merge options  合并options的选项
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      // 优化内部组件实例化，因为动态选项合并非常慢，而且内部组件选项都不需要特殊处理。
      initInternalComponent(vm, options as any)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor as any),
        options || {},
        vm
      )
    }

    /* istanbul ignore else */
    if (__DEV__) {
      initProxy(vm) // 开发环境使用代理
    } else {
      vm._renderProxy = vm
    }

    // expose real self
    vm._self = vm
    initLifecycle(vm) //初始化生命周期
    initEvents(vm) //初始化事件
    initRender(vm) //初始化渲染函数
    callHook(vm, 'beforeCreate', undefined, false /* setContext */) //beforeCreate 被调用
    initInjections(vm) // resolve injections before data/props  //初始化inject inject的属性要在data/props之前
    initState(vm)  //初始化state data和props
    initProvide(vm) // resolve provide after data/props 初始化provide  provide属性要在data/props之后
    callHook(vm, 'created') //created 被调用

    if (vm.$options.el) { //判断有没el  有就开始挂载
      vm.$mount(vm.$options.el)
    }
  }
```

对应的流程图

![image-20220827150335631](https://raw.githubusercontent.com/aymfx/pic/mian/img/image-20220827150335631.png)
