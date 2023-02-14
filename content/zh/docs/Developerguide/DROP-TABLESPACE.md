# DROP TABLESPACE

## 功能描述<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_s73f8a05d2e0248f18e34a613fcde3fb6"></a>

删除一个表空间。

## 注意事项<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_s8573862b21234deaa562c0502d4cae55"></a>

-   只有表空间所有者或者被授予了表空间DROP权限的用户有权限执行DROP TABLESPACE命令，系统管理员默认拥有此权限。
-   在删除一个表空间之前，表空间里面不能有任何数据库对象，否则会报错。
-   DROP TABLESPACE不支持回滚，因此，不能出现在事务块内部。
-   执行DROP TABLESPACE操作时，如果有另外的会话执行\\db查询操作，可能会由于tablespace事务的原因导致查询失败，请重新执行\\db查询操作。
-   如果执行DROP TABLESPACE失败，需要再次执行一次DROP TABLESPACE IF EXISTS。

## 语法格式<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_s6c3564e4565e4a808f931d50ab12c041"></a>

```
DROP TABLESPACE [ IF EXISTS ] tablespace_name;
```

## 参数说明<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_sd3609e09c22149eba3e6e64c989573b6"></a>

-   **IF EXISTS**

    如果指定的表空间不存在，则发出一个notice而不是抛出一个错误。

-   **tablespace\_name**

    表空间的名称。

    取值范围：已存在的表空间的名称。


## 示例<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_sbcb08a6a5edc433b951080b230808c35"></a>

请参见CREATE TABLESPACE的[示例](CREATE-TABLESPACE.md#zh-cn_topic_0283137328_zh-cn_topic_0237122120_zh-cn_topic_0059777670_s4e5e97caa377440d87fad0d49b56323e)。

## 相关链接<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_s5f1d0e75c90d465fadd639b26f10ab64"></a>

[ALTER TABLESPACE](ALTER-TABLESPACE.md)，  [CREATE TABLESPACE](CREATE-TABLESPACE.md)

## 优化建议<a name="zh-cn_topic_0283137549_zh-cn_topic_0237122153_zh-cn_topic_0059779073_section29255108114255"></a>

-   drop database

    不支持在事务中删除database。
