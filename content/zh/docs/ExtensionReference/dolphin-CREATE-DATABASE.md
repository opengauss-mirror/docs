# CREATE DATABASE

## 功能描述<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s3ea6af3a84d74f1ab7dceb8bb54ed134"></a>

创建一个新的数据库。缺省情况下新数据库将通过复制标准系统数据库template0来创建，且仅支持使用template0来创建。

创建一个新的模式。可以设定模式的默认字符集和字符序。

## 注意事项<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s818d4df5d095482f86d8e7258a75df1b"></a>

相比于原始的openGauss，dolphin对于CREATE DATABASE语法的修改为：

- 增加可修改项 [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ] [ [DEFAULT] COLLATE [ = ] default_collation ]。

## 语法格式<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s819ed4de9ed04006954df8016e5e4858"></a>

```
CREATE DATABASE [IF NOT EXISTS] database_name
               [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ] [ [DEFAULT] COLLATE [ = ] default_collation ];
```

## 参数说明<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s1d6127a393bf4f6d8fdac63105932d16"></a>

- **database\_name**

  数据库名称。

  取值范围：字符串，要符合标识符的命名规范。

- **[ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ]**

  指定模式的默认字符集，单独指定时会将模式的默认字符序设置为指定的字符集的默认字符序。

-  **[ [DEFAULT] COLLATE [ = ] default_collation ]**

  指定模式的默认字符序，单独指定时会将模式的默认字符集设置为指定的字符序对应的字符集。

  ![](public_sys-resources/icon-note.png) **说明：** 

  -   B兼容性下，仅在 dolphin.b_compatibility_mode 为on时支持该语法。
  -   使用该语法时，语法等效于CREATE SCHEMA，实际为创建SCHEMA语法, database\_name 为SCHEMA名称 。
  -   B兼容性下， dolphin.b_compatibility_mode 为on时，不指定 default_charset 、default_collation ，而指定其他CREATE DATABASE 语法选项，语法仍为CREATE DATABASE语法。
  -   B兼容性下， dolphin.b_compatibility_mode 为on时，当不指定任何选项，语法等同为CREATE SCHEMA语法；dolphin.b_compatibility_mode 为off时，语法等同为CREATE DATABASE 语法。



## 示例<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c"></a>

```
-- 打开 dolphin.b_compatibility_mode 开关
openGauss=# set dolphin.b_compatibility_mode = on;
SET
openGauss=# create database test1;
CREATE SCHEMA
openGauss=# create database test2 charset 'utf8';
CREATE SCHEMA
openGauss=# drop database if exists test1;
```

## 相关链接<a name="zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER DATABASE](dolphin-ALTER-DATABASE.md)，[DROP DATABASE](dolphin-DROP-DATABASE.md),  [CREATE DATABASE](../SQLReference/CREATE-DATABASE.md)
