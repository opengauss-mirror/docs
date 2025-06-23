# DELETE

## 功能描述<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_se9507fb26df547a795ac7940e3a19ebf"></a>

DELETE从指定的表里删除满足WHERE子句的行。如果WHERE子句不存在，将删除表中所有行，结果只保留表结构。

## 注意事项<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_sfc96c070e8574f4ea9a2726e898fda17"></a>

本章节仅包含shark新增语法，原openGauss的UPDATE语法未作修改。原openGauss的UPDATE语法请参考章节[DELETE](../SQLReference/DELETE.md)。

## 语法格式<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_s84baecef89484d5f87f57b0545b46202"></a>

```
单表删除：
[ WITH [ RECURSIVE ] with_query [, ...] ]
DELETE [/*+ plan_hint */] [FROM] [ ONLY ] table_name [ * ] [ [ [partition_clause]  [ [ AS ] alias ] ] | [ [ [ AS ] alias ] [partitions_clause] ] ]
    [ USING using_list ]
    [ FROM from_list 
    [JOIN join_table ON join_condition]... ]
    [ WHERE condition | WHERE CURRENT OF cursor_name ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ]
    [ LIMIT { count } ]
    [ RETURNING { * | { output_expr [ [ AS ] output_name ] } [, ...] } ];

多表删除：
[ WITH [ RECURSIVE ] with_query [, ...] ]
DELETE [/*+ plan_hint */] [FROM] 
    {[ ONLY ] table_name [ * ] [ [ [partition_clause]  [ [ AS ] alias ] ] | [ [ [ AS ] alias ] [partitions_clause] ] ]} [, ...]
    [ USING using_list ]
    [ FROM from_list 
    [JOIN join_table ON join_condition]... ]
    [ WHERE condition  ];
或
[ WITH [ RECURSIVE ] with_query [, ...] ]
DELETE [/*+ plan_hint */]
    {[ ONLY ] table_name [ * ] [ [ [partition_clause]  [ [ AS ] alias ] ] | [ [ [ AS ] alias ] [partitions_clause] ] ]} [, ...]
    [ FROM using_list ]
    [ WHERE condition ];
```

## 参数说明<a name="zh-cn_topic_0283136795_zh-cn_topic_0237122131_zh-cn_topic_0059778379_s6df87c0dd87c49e29a034e0ff3385ca7"></a>

- **JOIN**

JOIN包含 INNER JOIN，LEFT JOIN，RIGHT JOIN，FULL JOIN，CROSS JOIN。


