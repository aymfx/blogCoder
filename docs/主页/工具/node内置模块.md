---
title: node内置模块
sort: 6
---

## Events

```javascript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
```

该对象公开了两个方法

- `emit` 用于触发事件。
- `on` 用于添加回调函数（会在事件被触发时执行）。

```javascript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('shot', () => {
  console.log('you shot !!!');
});

eventEmitter.once('shot', () => {
  console.log('you shot again !!!');
});

eventEmitter.emit('shot');
eventEmitter.emit('shot');

/**
 *      you shot !!!
        you shot again !!!
        you shot !!!
 * 
 */
```

EventEmitter 对象还公开了其他几个与事件进行交互的方法，例如：

- `once()`: 添加单次监听器。
- `removeListener()` / `off()`: 从事件中移除事件监听器。
- `removeAllListeners()`: 移除事件的所有监听器。

## HTTP

```javascript
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('你好世界\n');
});

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
```

## https

```javascript
const https = require('https');
const options = {
  hostname: 'nodejs.cn',
  port: 443,
  path: '/todos',
  method: 'GET',
};

const req = https.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
```

```javascript
const https = require('https');

const data = JSON.stringify({
  todo: '做点事情',
});

const options = {
  hostname: 'nodejs.cn',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = https.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
```

## FS

- `r+` 打开文件用于读写。
- `w+` 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
- `a` 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
- `a+` 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。

### 文件属性判断 stat()

- 使用 `stats.isFile()` 和 `stats.isDirectory()` 判断文件是否目录或文件。
- 使用 `stats.isSymbolicLink()` 判断文件是否符号链接。
- 使用 `stats.size` 获取文件的大小（以字节为单位）。

```javascript
const fs = require('fs');
fs.stat('./b.js', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  //可以访问 `stats` 中的文件属性
  console.log('%s', stats);
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSymbolicLink());
  console.log(stats.size);
});
```

### 文件路径

由于平台的不统一性，我们可以用 path 实现统一的操作

### 从路径中获取信息

- `dirname`: 获取文件的父文件夹。
- `basename`: 获取文件名部分。
- `extname`: 获取文件的扩展名。

```javascript
const path = require('path');
const notes = '/users/joe/notes.txt';
console.log(path.dirname(notes), path.basename(notes), path.extname(notes)); //users/joe notes.txt .txt
console.log(path.basename(notes, path.extname(notes))); //notes
```

### 使用路径

- `path.join()` 用于连接路径的两个或者多个片段

- `path.resolve()` 获得相对路径的绝对路径计算

- `path.normalize()` 是另一个有用的函数，当包含诸如 `.`、`..` 或双斜杠之类的相对说明符时，其会尝试计算实际的路径：

- `path.isAbsolute()` 如果是绝对路径，则返回 true。

- `path.parse()` 解析对象的路径为组成其的片段：

  - `root`: 根路径。

  - `dir`: 从根路径开始的文件夹路径。

  - `base`: 文件名 + 扩展名

  - `name`: 文件名

  - `ext`: 文件扩展名

### readFile 和 readFileSync 读取文件

这意味着大文件会对内存的消耗和程序执行的速度产生重大的影响。

```javascript
const fs = require('fs');
const path = require('path');
const joincurrent = path.join(__dirname, './'); // /Users/liuyang/aymfx/gitRepository/study-liuyang/demos/
const reslovecurrent = path.resolve('../'); // /Users/liuyang/aymfx/gitRepository/study-liuyang
console.log(joincurrent, reslovecurrent);
fs.readFile('./test.txt', 'utf-8', (err, data) => {
  console.log(data); //
});
const res = fs.readFileSync('./test.txt', 'utf-8');
console.log(res);
```

### writeFile 和 writeFileSync 操作

- `r+` 打开文件用于读写。
- `w+` 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
- `a` 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
- `a+` 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件

将内容追加到文件末尾的便捷方法是 `fs.appendFile()`（及其对应的 `fs.appendFileSync()`）

所有这些方法都是在将全部内容写入文件之后才会将控制权返回给程序

```javascript
const fs = require('fs');

const res = fs.readFileSync('./test.txt', 'utf-8');
console.log(res);
const text = '我是追加';

// fs.writeFile('./test.txt',text,(err)=>{console.log(err)}) //覆盖操作
// fs.writeFileSync('./test.txt',text) //覆盖操作
// fs.writeFileSync('./test.txt',text,{ flag: 'a+' }) //按照操作符 追加操作

fs.appendFile('./test.txt', text, (err) => {
  console.log(err);
});
fs.writeFileSync('./test.txt', text);
```

### 检查文件夹是否存在

使用 `fs.access()` 检查文件夹是否存在以及 Node.js 是否具有访问权限。

```javascript
import { access, constants } from 'fs';
access('./aa', constants.R_OK, (err, info) => {
  console.log(err, info);
});
```

### 创建新的文件夹

使用 `fs.mkdir()` 或 `fs.mkdirSync()` 可以创建新的文件夹。

```javascript
import { access, constants, mkdir, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

function createDir(name) {
  name = resolve('./', name);
  if (!existsSync(name)) {
    mkdirSync(name);
  }
}

createDir('dist');
```

### 读取目录的内容

使用 `fs.readdir()` 或 `fs.readdirSync()` 可以读取目录的内容。

```javascript
import { access, constants, mkdir, existsSync, mkdirSync, readdir } from 'fs';
import { resolve } from 'path';

readdir('dist', (err, info) => {
  console.log(err, info);
}); //null [ 'a.js' ]
```

### 重命名文件夹

使用 `fs.rename()` 或 `fs.renameSync()` 可以重命名文件夹。 第一个参数是当前的路径，第二个参数是新的路径

```javascript
import {
  access,
  constants,
  mkdir,
  existsSync,
  mkdirSync,
  readdir,
  renameSync,
} from 'fs';
import { resolve } from 'path';

renameSync('dist', 'build', (err, info) => {
  console.log(err, info);
}); //null [ 'a.js' ]
```

### 删除文件夹

使用 `fs.rmdir()` 或 `fs.rmdirSync()` 可以删除文件夹。

删除包含内容的文件夹可能会更复杂。

```javascript
import {
  access,
  constants,
  mkdir,
  existsSync,
  mkdirSync,
  rmdirSync,
  renameSync,
} from 'fs';
import { resolve } from 'path';
rmdirSync('build', { recursive: true }, (err, info) => {
  console.log(err, info);
}); //recursive 为true 表示递归删除子文件
```

- `fs.access()`: 检查文件是否存在，以及 Node.js 是否有权限访问。
- `fs.appendFile()`: 追加数据到文件。如果文件不存在，则创建文件。
- `fs.chmod()`: 更改文件（通过传入的文件名指定）的权限。相关方法：`fs.lchmod()`、`fs.fchmod()`。
- `fs.chown()`: 更改文件（通过传入的文件名指定）的所有者和群组。相关方法：`fs.fchown()`、`fs.lchown()`。
- `fs.close()`: 关闭文件描述符。
- `fs.copyFile()`: 拷贝文件。
- `fs.createReadStream()`: 创建可读的文件流。
- `fs.createWriteStream()`: 创建可写的文件流。
- `fs.link()`: 新建指向文件的硬链接。
- `fs.mkdir()`: 新建文件夹。
- `fs.mkdtemp()`: 创建临时目录。
- `fs.open()`: 设置文件模式。
- `fs.readdir()`: 读取目录的内容。
- `fs.readFile()`: 读取文件的内容。相关方法：`fs.read()`。
- `fs.readlink()`: 读取符号链接的值。
- `fs.realpath()`: 将相对的文件路径指针（`.`、`..`）解析为完整的路径。
- `fs.rename()`: 重命名文件或文件夹。
- `fs.rmdir()`: 删除文件夹。
- `fs.stat()`: 返回文件（通过传入的文件名指定）的状态。相关方法：`fs.fstat()`、`fs.lstat()`。
- `fs.symlink()`: 新建文件的符号链接。
- `fs.truncate()`: 将传递的文件名标识的文件截断为指定的长度。相关方法：`fs.ftruncate()`。
- `fs.unlink()`: 删除文件或符号链接。
- `fs.unwatchFile()`: 停止监视文件上的更改。
- `fs.utimes()`: 更改文件（通过传入的文件名指定）的时间戳。相关方法：`fs.futimes()`。
- `fs.watchFile()`: 开始监视文件上的更改。相关方法：`fs.watch()`。
- `fs.writeFile()`: 将数据写入文件。相关方法：`fs.write()`。

### 软件包版本

鉴于使用了 semver（语义版本控制），所有的版本都有 3 个数字，第一个是主版本，第二个是次版本，第三个是补丁版本

- 如果写入的是 `〜0.13.0`，则只更新补丁版本：即 `0.13.1` 可以，但 `0.14.0` 不可以。
- 如果写入的是 `^0.13.0`，则要更新补丁版本和次版本：即 `0.13.1`、`0.14.0`、依此类推。
- 如果写入的是 `0.13.0`，则始终使用确切的版本。

当发布新的版本时，不仅仅是随心所欲地增加数字，还要遵循以下规则

- 当进行不兼容的 API 更改时，则升级主版本。
- 当以向后兼容的方式添加功能时，则升级次版本。
- 当进行向后兼容的缺陷修复时，则升级补丁版本。

规则符号的含义

- `^`: 只会执行不更改最左边非零数字的更新。 如果写入的是 `^0.13.0`，则当运行 `npm update` 时，可以更新到 `0.13.1`、`0.13.2` 等，但不能更新到 `0.14.0` 或更高版本。 如果写入的是 `^1.13.0`，则当运行 `npm update` 时，可以更新到 `1.13.1`、`1.14.0` 等，但不能更新到 `2.0.0` 或更高版本。
- `~`: 如果写入的是 `〜0.13.0`，则当运行 `npm update` 时，会更新到补丁版本：即 `0.13.1` 可以，但 `0.14.0` 不可以。
- `>`: 接受高于指定版本的任何版本。
- `>=`: 接受等于或高于指定版本的任何版本。
- `<=`: 接受等于或低于指定版本的任何版本。
- `<`: 接受低于指定版本的任何版本。
- `=`: 接受确切的版本。
- `-`: 接受一定范围的版本。例如：`2.1.0 - 2.6.2`。
- `||`: 组合集合。例如 `< 2.1 || > 2.6`。
