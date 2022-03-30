# DROP DIRECTORY<a name="ZH-CN_TOPIC_0289900633"></a>

## 功能描述<a name="zh-cn_topic_0283137028_zh-cn_topic_0237122136_zh-cn_topic_0059779050_s7810bb02b5b247fd92d22d7e328c870f"></a>

删除指定的directory对象。

## 注意事项<a name="zh-cn_topic_0283137028_zh-cn_topic_0237122136_zh-cn_topic_0059779050_sd775e695334845048410c46ecc8adaea"></a>

当enable\_access\_server\_directory=off时，只允许初始用户删除directory对象；当enable\_access\_server\_directory=on时，具有SYSADMIN权限的用户、directory对象的属主、被授予了该directory的DROP权限的用户或者继承了内置角色gs\_role\_directory\_drop权限的用户可以删除directory对象。

## 语法格式<a name="zh-cn_topic_0283137028_zh-cn_topic_0237122136_zh-cn_topic_0059779050_s6d36dd755c5a47d086e5b767a88f208b"></a>

```
DROP DIRECTORY [ IF EXISTS ] directory_name;
```

## 参数说明<a name="zh-cn_topic_0283137028_zh-cn_topic_0237122136_section1185722174518"></a>

-   **directory\_name**

    目录名称。

    取值范围：已经存在的目录名。


## 示例<a name="zh-cn_topic_0283137028_zh-cn_topic_0237122136_section54683394512"></a>

```
--创建目录。
openGauss=# CREATE OR REPLACE DIRECTORY  dir  as '/tmp/';

--删除目录。
openGauss=# DROP DIRECTORY dir;
```

## 相关链接<a name="zh-cn_topic_0283137028_zh-cn_topic_0237122136_section14134121715454"></a>

[CREATE DIRECTORY](CREATE-DIRECTORY.md)，[ALTER DIRECTORY](ALTER-DIRECTORY.md)

