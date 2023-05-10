# ALTER EVENT TRIGGER

## 功能描述<a name="zh-cn_topic_0283137014_zh-cn_topic_0271320281_zh-cn_topic_0059777936_sb9efc89be09141c3b332116dd8c2b35d"></a>

修改事件触发器。


## 注意事项<a name="zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

只有系统管理员或者超级用户才有权限对事件触发器进行修改。
## 语法格式<a name="zh-cn_topic_0283130714_zh-cn_topic_0237122081_zh-cn_topic_0059777936_sf623225ad89841f9a3d73338aa22a6ed"></a>

```
ALTER EVENT TRIGGER name DISABLE
ALTER EVENT TRIGGER name ENABLE [ REPLICA | ALWAYS ]
ALTER EVENT TRIGGER name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
ALTER EVENT TRIGGER name RENAME TO new_name
```

## 参数说明<a name="zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777895_se717dd5fd464489bb0235495c62d3a9e"></a>

-   **name**

    要修改的事件触发器名称。

    取值范围：已存在的事件触发器。

-   **new\_name**

    修改后的新名称。

    取值范围：符合标识符命名规范的字符串，最大长度不超过63个字符，且不能与所在表上其他事件触发器同名。


## 示例<a name="zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>

请参见[CREATE EVENT TRIGGER](CREATE-EVENT-TRIGGER.md)的[示例](CREATE-EVENT-TRIGGER.md#zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669)。

## 相关链接<a name="zh-cn_topic_0283137014_zh-cn_topic_0237212081_zh-cn_topic_0059777895_see210f0a4a346d4c8e1c34bd85b3ec05"></a>

[CREATE EVENT TRIGGER](CREATE-EVENT-TRIGGER.md)，[DROP EVENT TRIGGER](DROP-EVENT-TRIGGER.md)

