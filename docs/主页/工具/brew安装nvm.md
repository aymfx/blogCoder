---
title: brew安装nvm
date: 2020-10-23
group: 工具
---

## 卸载 nodeJS

```shell
brew uninstall --ignore-dependencies node
brew uninstall --force node
```

## 安装 nvm

```shell
brew update
brew install nvm
```

## 创建环境

- 创建.nvm 文件夹

```shell
mkdir ~/.nvm

```

- 创建 bash_profile 并且写入变量

```shell
vim ~/.bash_profile
```

```shell
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

然后按 **ESC + :wq** 文件

- 最后执行文件

```shell
source ~/.bash_profile
```

- 测试是否变成全局变量

```shell
nvm -v
```

## nvm 命令行

```shell
nvm install node //安装 node（最新的）
nvm install 14   // 指定版本安装
nvm use 14 //使用14版本
nvm ls //查看所有版本
```
