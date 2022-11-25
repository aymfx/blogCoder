---
title: 实现Omit
date: 2020-10-04
group: type-challenges
---

## 不使用 Omit 实现 TypeScript 的 Omit\<T, K> 泛型。 Omit 会创建一个省略 K 中字段的 T 对象。

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false,
};
```
