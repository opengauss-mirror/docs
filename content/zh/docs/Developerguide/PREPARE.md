# PREPARE

## 功能描述<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_s73bdfafa6f9743e9a9e0a4f7b40cc2c2"></a>

创建一个预备语句。

预备语句是服务端的对象，可以用于优化性能。在执行PREPARE语句的时候，指定的查询被解析、分析、重写。当随后发出EXECUTE语句的时候，预备语句被规划和执行。这种设计避免了重复解析、分析工作。PREPARE语句创建后在整个数据库会话期间一直存在，一旦创建成功，即便是在事务块中创建，事务回滚，PREPARE也不会删除。只能通过显式调用[DEALLOCATE](DEALLOCATE.md)进行删除，会话结束时，PREPARE也会自动删除。

## 注意事项<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_s241a4288629344c38e10c79ec40b39f8"></a>

无。

## 语法格式<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_sf8edb0f958e14e4f9f6e68dd67c64c6b"></a>

```
PREPARE name [ ( data_type [, ...] ) ] AS statement;
```

## 参数说明<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_se1710433f9c54ff7b687d23534316d63"></a>

-   **name**

    指定预备语句的名称。它必须在该会话中是唯一的。

-   **data\_type**

    参数的数据类型。

-   **statement**

    是SELECT INSERT、UPDATE、DELETE、MERGE INTO或VALUES语句之一。


## 示例<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_zh-cn_topic_0059778631_s7efb6d3c532445a8a87cf6dee4c7181d"></a>

请参见EXECUTE的[示例](EXECUTE.md#zh-cn_topic_0283137468_zh-cn_topic_0237122161_zh-cn_topic_0059777447_s8a46083a59d940c3aaa2535b2f783645)。

## 相关链接<a name="zh-cn_topic_0283137580_zh-cn_topic_0237122171_section1690451517271"></a>

[DEALLOCATE](DEALLOCATE.md)
