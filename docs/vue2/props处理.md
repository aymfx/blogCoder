---
title: 【响应式原理】props处理
date: 2022-10-09
group: 响应式原理
---

> 这边文章主要分析 props 是如何被处理的

```javascript
if (opts.props) initProps(vm, opts.props);
```

## 规范的模式

props 在初始化前需要转成规范的模式，一般传入的值有两种

第一种 数组的形式

```javascript
export default {
  props: ['age', 'name'],
};
```

第二种 键值对的形式，可以定义默认值

```javascript
export default {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true,
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100,
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' };
      },
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].includes(value);
      },
    },
  },
};
```

在初始化的过程中，实际在前面的 initMixin 里面有合并 option 的操作，这里会对 props 进行一次序列化的操作，以便规范 props 的代码,主要的结果是转成 {name:{type:null}} 保证 props 是键值对 并且值包含 type 属性

```javascript
// vue-analyse/src/core/instance/init.ts
vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor as any),
        options || {},
        vm
      )

// vue-analyse/src/core/util/options.ts
// mergeOptions（）
export function mergeOptions(
  parent: Record<string, any>,
  child: Record<string, any>,
  vm?: Component | null
): ComponentOptions {
   // 其他代码省略
   normalizeProps(child, vm)
}

function normalizeProps(options: Record<string, any>, vm?: Component | null) {
  const props = options.props
  if (!props) return
  const res: Record<string, any> = {}
  let i, val, name
  if (isArray(props)) {
    //对props进行处理
    i = props.length
    while (i--) {
      val = props[i]
      if (typeof val === 'string') {
        name = camelize(val)
        res[name] = { type: null } //tyep类型为null
      } else if (__DEV__) {
        warn('props must be strings when using array syntax.')
      }
    }
  } else if (isPlainObject(props)) {
    // {name:{type:String,default:'ly'},"age":String}
    for (const key in props) {
      val = props[key]
      name = camelize(key)
      res[name] = isPlainObject(val) ? val : { type: val }
    }
  } else if (__DEV__) {
    warn(
      `Invalid value for option "props": expected an Array or an Object, ` +
        `but got ${toRawType(props)}.`,
      vm
    )
  }
  options.props = res
}
```

最终展示的模样

```javascript
//之前

{
  props:['age','name']
}

//之后

{
  props:{
    age:{
      type:null
    },
    name:{
      type:null
    }
  }
}

```

## props 初始化

这是初始化的操作，需要值得注意的是以下三点

- const value = validateProp(key, propsOptions, propsData, vm) **props 校验值和求和**
- defineReactive(props, key, value) **props 响应式**
- proxy(vm, `_props`, key) // props 代理

```javascript
function initProps(vm: Component, propsOptions: Object) {
  const propsData = vm.$options.propsData || {};
  const props = (vm._props = shallowReactive({}));
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  // 缓存prop keys，以便以后的道具更新可以使用数组迭代，而不是动态的对象键枚举。
  const keys: string[] = (vm.$options._propKeys = []);
  const isRoot = !vm.$parent;
  // root instance props should be converted
  //根实例道具应该被转换
  if (!isRoot) {
    toggleObserving(false);
  }
  for (const key in propsOptions) {
    keys.push(key); //缓存键
    const value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (__DEV__) {
      const hyphenatedKey = hyphenate(key);
      if (
        isReservedAttribute(hyphenatedKey) ||
        config.isReservedAttr(hyphenatedKey)
      ) {
        warn(
          `"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`,
          vm
        );
      }
      defineReactive(props, key, value, () => {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            `Avoid mutating a prop directly since the value will be ` +
              `overwritten whenever the parent component re-renders. ` +
              `Instead, use a data or computed property based on the prop's ` +
              `value. Prop being mutated: "${key}"`,
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    // static props 在Vue.extend()期间已经在组件的原型上代理了。我们只需要实例化时定义的代理道具。
    if (!(key in vm)) {
      proxy(vm, `_props`, key); //代理
    }
  }
  toggleObserving(true);
}
```

## validateProp(key, propsOptions, propsData, vm) 校验值求和
