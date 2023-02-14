# ALTER SYNONYM

## 功能描述<a name="zh-cn_topic_0283137325_zh-cn_topic_0237122074_zh-cn_topic_0059778392_sc84e6980912549c4bbd6895f97ac39f1"></a>

修改SYNONYM对象的属性。

## 注意事项<a name="zh-cn_topic_0283137325_zh-cn_topic_0237122074_zh-cn_topic_0059778392_sb3569429c1304678895bcf79fb6304cf"></a>

-   目前仅支持修改SYNONYM对象的属主。
-   只有系统管理员有权限修改SYNONYM对象的属主信息。
-   新属主必须具有SYNONYM对象所在模式的CREATE权限。

## 语法格式<a name="zh-cn_topic_0283137325_zh-cn_topic_0237122074_section185432369210"></a>

```
ALTER SYNONYM synonym_name
    OWNER TO new_owner;
```

## 参数描述<a name="zh-cn_topic_0283137325_zh-cn_topic_0237122074_section37023591411"></a>

-   **synonym**

    待修改的同义词名字，可以带模式名。

    取值范围：字符串，需要符合标识符的命名规范。


-   **new\_owner**

    同义词对象的新所有者。

    取值范围：字符串，有效的用户名。


## 示例<a name="zh-cn_topic_0283137325_zh-cn_topic_0237122074_section162752045154311"></a>

```
--创建同义词t1。
openGauss=#  CREATE OR REPLACE SYNONYM t1 FOR ot.t1;

--创建新用户u1。
openGauss=# CREATE USER u1 PASSWORD 'user@111';

--修改同义词t1的owner为u1。
openGauss=# ALTER SYNONYM t1 OWNER TO u1;

--删除同义词t1。
openGauss=# DROP SYNONYM t1;

--删除用户u1。
openGauss=# DROP USER u1;
```

## 相关链接<a name="zh-cn_topic_0283137325_zh-cn_topic_0237122074_section613212620440"></a>

[CREATE SYNONYM](CREATE-SYNONYM.md)，[DROP SYNONYM](DROP-SYNONYM.md)
