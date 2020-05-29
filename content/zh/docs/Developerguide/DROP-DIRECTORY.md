# DROP DIRECTORY<a name="ZH-CN_TOPIC_0242370600"></a>

## 功能描述<a name="zh-cn_topic_0237122136_zh-cn_topic_0059779050_s7810bb02b5b247fd92d22d7e328c870f"></a>

删除指定的directory表项。

## 注意事项<a name="zh-cn_topic_0237122136_zh-cn_topic_0059779050_sd775e695334845048410c46ecc8adaea"></a>

默认只有初始化用户可以执行drop操作，当enable\_access\_server\_directory开启时（可参考[enable\_access\_server\_directory](操作审计.md#zh-cn_topic_0237124747_section4279164545515)），sysadmin权限的用户也可以执行drop操作。

## 语法格式<a name="zh-cn_topic_0237122136_zh-cn_topic_0059779050_s6d36dd755c5a47d086e5b767a88f208b"></a>

```
DROP DIRECTORY [ IF EXISTS ] directory_name;
```

## 参数说明<a name="zh-cn_topic_0237122136_section1185722174518"></a>

-   **directory\_name**

    目录名称。

    取值范围：已经存在的目录名。


## 示例<a name="zh-cn_topic_0237122136_section54683394512"></a>

```
--创建目录。
postgres=# CREATE OR REPLACE DIRECTORY  dir  as '/tmp/';

--删除外部表。
postgres=# DROP DIRECTORY dir;
```

## 相关链接<a name="zh-cn_topic_0237122136_section14134121715454"></a>

[CREATE DIRECTORY](CREATE-DIRECTORY.md#ZH-CN_TOPIC_0242370565)，[ALTER DIRECTORY](ALTER-DIRECTORY.md#ZH-CN_TOPIC_0242370522)

