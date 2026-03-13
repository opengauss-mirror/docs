# CREATE DIRECTORY

## 功能描述

创建一个目录对象。目录对象指向操作系统中的物理目录路径，它提供了一种安全的方式来管理数据库与操作系统文件的交互。在创建表时指定DIRECTORY选项创建外部表，允许用户使用SQL访问外部数据，而不需要将数据实际加载到数据库。

## 注意事项

- 创建目录对象需要GRANT ANY DIRECTORY权限，只有SYS用户能拥有目录对象，普通用户创建的目录对象归属SYS用户
- 目录对象的路径是数据库程序所在机器的路径, 支持相对路径/绝对路径，相对路径的起始路径是程序的运行路径
- 创建目录对象前需要提前在数据库节点创建目录，目录对象及父目录的属主和属组需要设置和数据库安装用户一致，并修改权限为700
- 由于目录对象只在创建节点有效，所以无法在其他节点访问外部表

## 语法格式

**stmt**

```SQL
CREATE [OR REPLACE] DIRECTORY directory_name AS directory_path
```

## 参数说明

- OR REPLACE：已存在同名目录对象就替换
- directory_name: 目录对象名字，长度限制最长63
- directory_path：目录对象所在的路径，需要用单引号括起来，长度限制最长187

## 示例

```SQL
-- 创建目录对象
CREATE DIRECTORY data_dir_0 AS '/home/ogracdba/test';

-- 创建或替换目录对象
CREATE OR REPLACE DIRECTORY data_dir_0 AS '/home/ogracdba/test';

-- 创建相对路径的目录对象
CREATE DIRECTORY data_dir_1 AS './dir';

```
