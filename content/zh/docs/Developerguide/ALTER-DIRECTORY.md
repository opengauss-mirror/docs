# ALTER DIRECTORY<a name="ZH-CN_TOPIC_0242370522"></a>

## 功能描述<a name="zh-cn_topic_0237122058_zh-cn_topic_0059778392_sc84e6980912549c4bbd6895f97ac39f1"></a>

对directory属性进行修改。

## 注意事项<a name="zh-cn_topic_0237122058_zh-cn_topic_0059778392_sb3569429c1304678895bcf79fb6304cf"></a>

-   目前只支持修改directory属主。
-   属主仅允许是sysadmin权限用户，不允许赋予普通用户。

## 语法格式<a name="zh-cn_topic_0237122058_section185432369210"></a>

```
ALTER DIRECTORY directory_name
    OWNER TO new_owner;
```

## 参数描述<a name="zh-cn_topic_0237122058_section37023591411"></a>

**directory\_name**

需要修改的目录名称，范围为已经存在的目录名称。

## 示例<a name="zh-cn_topic_0237122058_section162752045154311"></a>

```
--创建目录。
postgres=# CREATE OR REPLACE DIRECTORY  dir  as '/tmp/';

--修改目录的owner。
postgres=# ALTER DIRECTORY dir OWNER TO system;

--删除外部表。
postgres=# DROP DIRECTORY dir;
```

## 相关链接<a name="zh-cn_topic_0237122058_section613212620440"></a>

[CREATE DIRECTORY](CREATE-DIRECTORY.md)，[DROP DIRECTORY](DROP-DIRECTORY.md)

