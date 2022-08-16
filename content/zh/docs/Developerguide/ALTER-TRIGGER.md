# ALTER TRIGGER<a name="ZH-CN_TOPIC_0289900315"></a>

## 功能描述<a name="zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777936_sb9efc89be09141c3b113326dd8c2b35d"></a>

修改触发器名称。

>![](public_sys-resources/icon-note.gif) **说明：** 
>
>目前只支持修改名称。

## 注意事项<a name="zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

触发器所在表的所有者或者被授予了ALTER ANY SEQUENCE权限的用户可以执行ALTER TRIGGER操作，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777936_sf623225ad89841f9a333d738aa22a6ed"></a>

```
ALTER TRIGGER trigger_name ON table_name RENAME TO new_name;
```

## 参数说明<a name="zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **trigger\_name**

    要修改的触发器名称。

    取值范围：已存在的触发器。

-   **table\_name**

    要修改的触发器所在的表名称。

    取值范围：已存在的含触发器的表。

-   **new\_name**

    修改后的新名称。

    取值范围：符合标识符命名规范的字符串，最大长度不超过63个字符，且不能与所在表上其他触发器同名。


## 示例<a name="zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

请参见[CREATE TRIGGER](CREATE-TRIGGER.md)的示例。

## 相关链接<a name="zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[CREATE TRIGGER](CREATE-TRIGGER.md)，[DROP TRIGGER](DROP-TRIGGER.md)，[ALTER TABLE](ALTER-TABLE.md)

