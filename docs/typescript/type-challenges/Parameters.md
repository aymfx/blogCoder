---
title: Parameters
date: 2020-10-14
group: type-challenges
---

# 实现内置的 Parameters 类型，而不是直接使用它

```typescript
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
```
