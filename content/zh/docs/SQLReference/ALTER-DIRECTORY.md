# ALTER DIRECTORY

## 功能描述<a name="zh-cn_topic_0283137159_zh-cn_topic_0237122058_zh-cn_topic_0059778392_sc84e6980912549c4bbd6895f97ac39f1"></a>

对directory属性进行修改。

## 注意事项<a name="zh-cn_topic_0283137159_zh-cn_topic_0237122058_zh-cn_topic_0059778392_sb3569429c1304678895bcf79fb6304cf"></a>

-   目前只支持修改directory属主。
-   当enable_access_server_directory=off时，只允许初始用户修改directory属主；当enable_access_server_directory=on时，具有SYSADMIN权限的用户和directory对象的属主可以修改directory，且要求该用户是新属主的成员。
-   当修改directory属主时，若新属主与原属主相同，视为未修改属主。即使用户没有修改DIERECTORY的权限，也不会报错。

## 语法格式<a name="zh-cn_topic_0283137159_zh-cn_topic_0237122058_section185432369210"></a>

```
ALTER DIRECTORY directory_name
    OWNER TO new_owner;
```

## 参数描述<a name="zh-cn_topic_0283137159_zh-cn_topic_0237122058_section37023591411"></a>

**directory\_name**

需要修改的目录名称，范围为已经存在的目录名称。

## 示例<a name="zh-cn_topic_0283137159_zh-cn_topic_0237122058_section162752045154311"></a>

```
--创建目录。
openGauss=# CREATE OR REPLACE DIRECTORY  dir  as '/tmp/';

--修改目录的owner。
openGauss=# ALTER DIRECTORY dir OWNER TO system;

--删除目录。
openGauss=# DROP DIRECTORY dir;
```

## 相关链接<a name="zh-cn_topic_0283137159_zh-cn_topic_0237122058_section613212620440"></a>

[CREATE DIRECTORY](CREATE-DIRECTORY.md)，[DROP DIRECTORY](DROP-DIRECTORY.md)

