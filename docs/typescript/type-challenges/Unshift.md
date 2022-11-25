---
title: Unshift
date: 2020-10-18
group: type-challenges
---

## Unshift 实现类型版本的 Array.unshift。

```typescript
type Unshift<T extends unknown[], U> = [U, ...T];
type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
```
