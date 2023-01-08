> 该函数主要作用是在原型上挂载了几个属性和方法，方便实例对象调用

- Vue.prototype.$data  _data的代理
- Vue.prototype.$props  _props的代理
- Vue.protptype.$set 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')   这是Vue.set全局属性的别名
- Vue.prototype.$delete 删除对象的 property。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到 property 被删除的限制，但是你应该很少会使用它。 这是全局属性Vue.delete的别名
- Vue.prototype.$watch 观察 Vue 实例上的一个表达式或者一个函数计算结果的变化。回调函数得到的参数为新值和旧值。表达式只接受简单的键路径。对于更复杂的表达式，用一个函数取代。

以上是摘自官方的解释，下面是对应的在这个stateMixin()函数的实现

```javascript

export function stateMixin(Vue: typeof Component) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  // 在使用object.defineproperty时，由于某种原因，flow在直接声明定义对象时存在问题，因此我们必须在这里循序渐进地构建对象。
  const dataDef: any = {}
  //get劫持 返回私有的 _data _props，但是不允许set操作
  dataDef.get = function () {
    return this._data
  }
  const propsDef: any = {}
  propsDef.get = function () {
    return this._props
  }
  if (__DEV__) {
    // 劫持了set方法 防止被篡改
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
        this
      )
    }
    propsDef.set = function () {
      warn(`$props is readonly.`, this)
    }
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef) //定义了$data作为访问代理，可以访问私有的_data  Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象 property 的访问。
  Object.defineProperty(Vue.prototype, '$props', propsDef) //定义了$props作为访问代理 可以访问私有的_props 当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象 property 的访问。

  Vue.prototype.$set = set //定义了set操作
  Vue.prototype.$delete = del //定义 delete操作

  // 观察 Vue 实例上的一个表达式或者一个函数计算结果的变化。回调函数得到的参数为新值和旧值。表达式只接受简单的键路径。对于更复杂的表达式，用一个函数取代。 定义了一个watch监听器
  Vue.prototype.$watch = function (
    expOrFn: string | (() => any),
    cb: any,
    options?: Record<string, any>
  ): Function {
    const vm: Component = this
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {}
    options.user = true
    const watcher = new Watcher(vm, expOrFn, cb, options)
    if (options.immediate) {
      //表达式含有 immediate 表示需要立即执行一次
      const info = `callback for immediate watcher "${watcher.expression}"`
      pushTarget()
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info)
      popTarget()
    }
    return function unwatchFn() {
      watcher.teardown() //这个返回的是移除这个监听
    }
  }
}

```

对应的流程图

![image-20220827151458071](https://raw.githubusercontent.com/aymfx/pic/mian/img/image-20220827151458071.png)
