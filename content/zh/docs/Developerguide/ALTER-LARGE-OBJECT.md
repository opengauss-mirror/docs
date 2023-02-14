# ALTER LARGE OBJECT

## 功能描述<a name="zh-cn_topic_0283137719_zh-cn_topic_0237122064_zh-cn_topic_0059778505_sbaf83721f63f42a9ba63625707e18b5c"></a>

ALTER LARGE OBJECT用于更改一个large object的定义。它的唯一的功能是分配一个新的所有者。

## 注意事项<a name="zh-cn_topic_0283137719_zh-cn_topic_0237122064_zh-cn_topic_0059778505_saab423042807475180e48512143509e9"></a>

使用ALTER LARGE OBJECT必须是系统管理员或者是其所有者。

## 语法格式<a name="zh-cn_topic_0283137719_zh-cn_topic_0237122064_zh-cn_topic_0059778505_sc544d982cf6142e9bdb66283e857ce80"></a>

```
ALTER LARGE OBJECT large_object_oid
    OWNER TO new_owner;
```

## 参数说明<a name="zh-cn_topic_0283137719_zh-cn_topic_0237122064_zh-cn_topic_0059778505_s02711c36b6fc4b46a8757c4e3495899b"></a>

-   **large\_object\_oid**

    要被变large object的OID 。

    取值范围：已存在的大对象名。

-   **OWNER TO new\_owner**

    large object新的所有者。

    取值范围：已存在的用户名/角色名。


## 示例<a name="zh-cn_topic_0283137719_zh-cn_topic_0237122064_zh-cn_topic_0059778505_s6e23110aff5940ea87da3c0f9569f987"></a>

无。
