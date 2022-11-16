---
title: Git常用命令
---

## 修改远程提交的仓库地址

- git remote set-url origin xxx

## 添加远程仓库

- git remote add origin xxx

## 创建公钥

- ssh-keygen -o

## 覆盖远程分支代码 强制推送到远端

- git push --set-upstream origin dev -f

## 显示当前的 Git 配置

- git config --list

## 设置提交代码时的用户信息

- git config [--global] user.name "[name]"
- git config [--global] user.email "[email address]"

## 提交时显示所有 diff 信息

- git commit -v

## 列出所有本地分支和远程分支

- git branch -a

## 合并指定分支到当前分支

- git merge [branch]

## 删除分支

- git branch -d [branch-name]

## 删除远程分支

- git push origin --delete [branch-name]
- git branch -dr [remote/branch]

## 暂时将未提交的变化移除，稍后再移入

- git stash
- git stash pop

## 新建一个 commit，用来撤销指定 commit 后者的所有变化都将被前者抵消，并且应用到当前分支

- git revert [commit]
