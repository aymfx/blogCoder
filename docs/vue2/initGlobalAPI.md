---
title: 【初始化操作】initGlobalAPI分析
date: 2022-10-07
group: 初始化
---

> 这个函数帮助 Vue 挂载了很多的全局方法和属性

- Vue.config 配置数据
- Vue.util 一些工具函数 使用者尽量不要去操作
- Vue.set()
- Vue.delete()
- Vue.nextTick()
- Vue.observable()
- Vue.options
- Vue.use()
- Vue.mixin()
- Vue.extend()
- Vue.component()
- Vue.directive()
- Vue.filter()
- Vue.compile() //这个是 runtime+compile 版本才会有的一个全局方法

```javascript
// vue-analyse/src/core/global-api/index.ts
export function initGlobalAPI(Vue: GlobalAPI) {
  // 配置文件 通过Object.defineProperty 定义到Vue 够着函数的属性里面去
  const configDef: Record<string, any> = {};
  configDef.get = () => config;
  if (__DEV__) {
    configDef.set = () => {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }

  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  // 公开实效的方法。注意:这些不被认为是公共API的一部分——避免依赖它们，除非你意识到风险。
  Vue.util = {
    warn,
    extend,
    mergeOptions,
    defineReactive,
  };
  // 作用: 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')
  Vue.set = set;

  //作用: 删除对象的 property。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到 property 被删除的限制，但是你应该很少会使用它。

  Vue.delete = del;

  // 作用:  在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API 显式可观察API
  // 让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。 返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器，
  Vue.observable = <T>(obj: T): T => {
    observe(obj);
    return obj;
  };

  //  添加  'components' 'directives' 'filters' 空选项
  Vue.options = Object.create(null);
  ASSET_TYPES.forEach((type) => {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  // 它用于标识在Weex的多实例场景中扩展所有普通对象组件的“基本”构造函数。
  Vue.options._base = Vue;

  // 添加keepalive 内置的组件
  extend(Vue.options.components, builtInComponents);

  // 初始化安装插件的API
  initUse(Vue);

  // 全局注册一个混入
  initMixin(Vue);

  // 初始化一个扩展方法 方便生成子组件
  initExtend(Vue);

  // 注册或者获取 全局的 指令 过滤器 组件 方法  'component', 'directive', 'filter'
  initAssetRegisters(Vue);
}
```

## Vue.use()

安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。

```javascript
// /vue-analyse/src/core/global-api/use.ts
Vue.use = function (plugin: Function | any) {
  const installedPlugins =
    this._installedPlugins || (this._installedPlugins = []);
  if (installedPlugins.indexOf(plugin) > -1) {
    // 当 install 方法被同一个插件多次调用，插件将只会被安装一次。
    return this;
  }

  // additional parameters
  const args = toArray(arguments, 1);
  args.unshift(this);
  if (isFunction(plugin.install)) {
    // 插件是一个对象，必须提供 install 方法
    plugin.install.apply(plugin, args);
  } else if (isFunction(plugin)) {
    // 如果插件是一个函数，它会被作为 install 方法
    plugin.apply(null, args);
  }
  installedPlugins.push(plugin);
  return this;
};
```

## Vue.mixin()

全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。

```javascript
// /vue-analyse/src/core/global-api/mixin.ts

Vue.mixin = function (mixin: Object) {
  this.options = mergeOptions(this.options, mixin);
  return this;
};
```

## Vue.extend()

使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。data 选项是特例，需要注意 - 在 Vue.extend() 中它必须是函数,实现还是比较复杂的类似一个子类继承父类的方式

```javascript
// /vue-analyse/src/core/global-api/extend.ts

  Vue.extend = function (extendOptions: any): typeof Component {
    extendOptions = extendOptions || {}
    const Super = this
    const SuperId = Super.cid
    // 缓存子类
    const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }
    // 获取组件名称
    const name =
      getComponentName(extendOptions) || getComponentName(Super.options)
    if (__DEV__ && name) {
      validateComponentName(name)
    }

    const Sub = function VueComponent(this: any, options: any) {
      this._init(options)
    } as unknown as typeof Component
    Sub.prototype = Object.create(Super.prototype)
    Sub.prototype.constructor = Sub
    Sub.cid = cid++
    Sub.options = mergeOptions(Super.options, extendOptions)
    Sub['super'] = Super

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    // 对于道具和计算属性，我们在扩展时在扩展原型的Vue实例上定义代理getter。这样可以避免对创建的每个实例调用Object.defineProperty。
    if (Sub.options.props) {
      initProps(Sub)
    }
    if (Sub.options.computed) {
      initComputed(Sub)
    }

    // allow further extension/mixin/plugin usage 允许进一步使用扩展/mixin/插件
    Sub.extend = Super.extend
    Sub.mixin = Super.mixin
    Sub.use = Super.use

    // create asset registers, so extended classes
    // can have their private assets too.
    // 创建资产注册，这样扩展类也可以拥有它们的私有资产。
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type]
    })
    // enable recursive self-lookup
    //方便递归
    if (name) {
      Sub.options.components[name] = Sub
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    // 在扩展时保留对超级选项的引用。稍后在实例化时，我们可以检查Super的选项是否已经更新。
    Sub.superOptions = Super.options
    Sub.extendOptions = extendOptions
    Sub.sealedOptions = extend({}, Sub.options)

    // cache constructor
    cachedCtors[SuperId] = Sub
    return Sub
  }
```

## initAssetRegisters 函数

这个函数的作用就是遍历生成三个全局方法

- Vue.component() 全局注册组件 利用的原理是 Vue.extend 实现的
- Vue.directive() 全局的指令
- Vue.filter() 全局的过滤函数

```javascript
// vue-analyse/src/core/global-api/assets.ts
export function initAssetRegisters(Vue: GlobalAPI) {
  /**
   * Create asset registration methods.
   */
  // 'component', 'directive', 'filter'
  // 注册或获取全局过滤器。
  // 注册或获取全局组件。注册还会自动使用给定的 id 设置组件的名称
  // 注册或获取全局指令。
  ASSET_TYPES.forEach((type) => {
    // @ts-expect-error function is not exact same type
    Vue[type] = function (
      id: string,
      definition?: Function | Object
    ): Function | Object | void {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (__DEV__ && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          //对象
          // @ts-expect-error
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && isFunction(definition)) {
          //函数
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
```

## Vue.compile()

当我们打包的入口文件 引入了 runtime-with-compiler.ts 文件时表示会在全局注入这个编译的方法

```javascript
// vue-analyse/src/platforms/web/runtime-with-compiler.ts
Vue.compile = compileToFunctions;
```

流程图
![20220829172009](https://raw.githubusercontent.com/aymfx/pic/mian/img/20220829172009.png)
