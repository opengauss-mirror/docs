# Dolphin概述与安装

## 概述

openGauss提供dolphin Extension（版本为dolphin-1.0.0）。dolphin Extension是openGauss的MySQL兼容性数据库（dbcompatibility='B'）扩展，从关键字、数据类型、常量与宏、函数和操作符、表达式、类型转换、DDL/DML/DCL语法、存储过程/自定义函数、系统视图等方面兼容MySQL数据库。dolphin插件继承内核原有SQL语法，在[dolphin语法介绍](dolphin_keywords.md)中，将主要介绍对于内核语法有新增、修改的内容，和内核保持一致的语法等将不再额外写出。

## 安装

插件自动安装加载，无须手动安装加载。如果需要手动编译加载插件，步骤如下：
    
### 编译安装

1. [编译安装openGauss](https://gitcode.com/opengauss/openGauss-server#%E7%BC%96%E8%AF%91)。

2. 将[dolphin源码](https://gitcode.com/opengauss/Plugin/tree/master/contrib/dolphin)拷贝到openGauss-server源码的contrib目录下。

3. 进入dolphin目录执行make install。

4. 创建B库并使用初始用户连接B库。

```
openGauss=# create database db_name dbcompatibility 'B';
```

### OM安装

1. om安装的openGauss。

2. 拷贝插件所需文件：
        dolphin.so 路径： app/lib/postgresql/。
        dolphin.control和dolphin--1.0.sql 路径 app/share/postgresql/Extension。

3. 创建B库并使用初始用户连接B库。

## dolphin限制

- 不支持删除dolphin插件。
- dolphin插件只能在B兼容性数据库下创建。
- dolphin插件需要在pg_catalog等schema下创建数据类型、函数等，所以加载dolphin插件需要初始用户权限。B兼容性数据库必须加载dolphin插件才可被连接。openGauss将在第一次通过初始用户或拥有初始用户权限的用户连接B数据库时自动加载dolphin插件。
- dolphin中所有新增/修改的语法不支持在gsql客户端通过```\h```查看帮助说明，不支持在gsql客户端自动补齐。
- dolphin插件的创建会删除数据库存在的插件所需的同名函数和类型以及之前存在的与之依赖的对象。
- dolphin插件依赖于public schema，因此不支持使用drop schema的方式删除public schema。
- 连接安装有dolphin插件的B兼容性数据库时，会默认修改GUC参数[behavior_compat_options](../database_reference/platform_and_client_compatibility.md#zh-cn_topic_0283137574_zh-cn_topic_0237124754_section1980124735516)，增加```display_leading_zero```和```select_into_return_null```选项，以保持兼容性。
- 连接安装有dolphin插件的B兼容性数据库时，会默认修改GUC参数[datestyle](../database_reference/locale_and_formatting.md#zh-cn_topic_0283136798_zh-cn_topic_0237124733_zh-cn_topic_0059778109_s6464b29eb2274134845cea28f39d915e)为```ISO, YMD```，以保持兼容性。手动修改该参数可能会导致日期格式产生歧义。
- dolphin插件依赖dblink插件，会在加载dolphin插件之前，自动加载dblink。
- 设置upgrade_mode为非0时，创建B兼容性数据库后不会自动创建dolphin插件。该限制主要是控制升级过程中不允许创建插件，避免回滚的时候无法删除。
- 基于一些需求特性，dolphin会移除openGauss某些语法功能。具体见：[不支持语法](dolphin_unsupported_syntax.md)
