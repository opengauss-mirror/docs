# DROP TRIGGER

## 功能描述<a name="zh-cn_topic_0283137186_zh-cn_topic_0237122156_zh-cn_topic_0059777895_sed6f06f3d4d94b38b10c7592f98bacdb"></a>

删除触发器。

## 注意事项<a name="zh-cn_topic_0283137186_zh-cn_topic_0237122156_zh-cn_topic_0059777895_s115556a9029e407ca47ff01fea8de0cb"></a>

触发器的所有者或者被授予了DROP ANY TRIGGER权限的用户可以执行DROP TRIGGER操作，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0283137186_zh-cn_topic_0237122156_zh-cn_topic_0059777895_sf4510c6bdb8443de98b3b31a1fed9107"></a>

```
DROP TRIGGER [ IF EXISTS ] trigger_name ON table_name [ CASCADE | RESTRICT ];
```

## 参数说明<a name="zh-cn_topic_0283137186_zh-cn_topic_0237122156_zh-cn_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **IF EXISTS**

    如果指定的触发器不存在，则发出一个notice而不是抛出一个错误。

-   **trigger\_name**

    要删除的触发器名称。

    取值范围：已存在的触发器。

-   **table\_name**

    要删除的触发器所在的表名称。

    取值范围：已存在的含触发器的表。

-   **CASCADE | RESTRICT**
    -   CASCADE：级联删除依赖此触发器的对象。
    -   RESTRICT：如果有依赖对象存在，则拒绝删除此触发器。此选项为缺省值。


## 示例<a name="zh-cn_topic_0283137186_zh-cn_topic_0237122156_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

请参见[CREATE TRIGGER](CREATE-TRIGGER.md)的[示例](CREATE-TRIGGER.md#zh-cn_topic_0283137165_zh-cn_topic_0237122123_zh-cn_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa)。

## 相关链接<a name="zh-cn_topic_0283137186_zh-cn_topic_0237122156_zh-cn_topic_0059777895_see210f0a4a344c6d8e1bc34d85b3ec05"></a>

[CREATE TRIGGER](CREATE-TRIGGER.md)，[ALTER TRIGGER](ALTER-TRIGGER.md)，[ALTER TABLE](ALTER-TABLE.md)
