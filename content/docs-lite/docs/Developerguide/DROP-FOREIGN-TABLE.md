# DROP FOREIGN TABLE<a name="ZH-CN_TOPIC_0289899895"></a>

## 功能描述<a name="zh-cn_topic_0283137169_section57611418144918"></a>

删除指定的外表。

## 注意事项<a name="zh-cn_topic_0283137169_section67466306494"></a>

DROP FOREIGN TABLE会强制删除指定的表，删除表后，依赖该表的索引会被删除，因此引用该表的函数和存储过程将无法执行。

## 语法格式<a name="zh-cn_topic_0283137169_section20143164116497"></a>

```
DROP FOREIGN TABLE [ IF EXISTS ] 
    table_name [, ...] [ CASCADE | RESTRICT ];
```

## 参数说明<a name="zh-cn_topic_0283137169_section4910646204920"></a>

-   **IF EXISTS**

    如果指定的表不存在，则发出一个notice而不是抛出一个错误。

-   **table\_name**

    表名称。

    取值范围：已存在的表名。

-   **CASCADE | RESTRICT**

    -   CASCADE：级联删除依赖于表的对象（比如视图）。

    -   RESTRICT：如果存在依赖对象，则拒绝删除该表。这个是缺省。



## 相关链接<a name="zh-cn_topic_0283137169_section1811945514913"></a>

[ALTER FOREIGN TABLE](ALTER-FOREIGN-TABLE.md)，[CREATE FOREIGN TABLE](CREATE-FOREIGN-TABLE.md)

