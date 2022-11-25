---
title: push
date: 2020-10-15
group: type-challenges
---

## 在类型系统里实现通用的 Array.push

```typescript
type Push<T extends any[], U> = [...T, U];
type Result = Push<[1, 2], '3'>; // [1, 2, '3']
```
