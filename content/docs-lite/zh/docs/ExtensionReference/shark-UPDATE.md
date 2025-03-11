# UPDATE

## 功能描述<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_s85747c5f88e64562a8ff9ddacda19939"></a>

更新表中的数据。UPDATE修改满足条件的所有行中指定的字段值，WHERE子句声明条件，SET子句指定的字段会被修改，没有出现的字段则保持它们的原值。

## 注意事项<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_s7e9e912f472543cbb190edb83e5f22d3"></a>

   本章节仅包含shark新增语法，原openGauss的UPDATE语法未作修改。原openGauss的UPDATE语法请参考章节[UPDATE](../SQLReference/UPDATE.md)

## 语法格式<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_sd8d9ff15ff6c45c9aebd16c861936c07"></a>

```
单表更新：
[ WITH [ RECURSIVE ] with_query [, ...] ]
UPDATE [/*+ plan_hint */] [ ONLY ] table_name [ partition_clause ] [ * ] [ [ AS ] alias ]
SET {column_name = { expression | DEFAULT } 
    |( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }}[, ...]
    [ FROM from_list] [JOIN join_table ON join_condition]... ]
    [ WHERE condition | WHERE CURRENT OF cursor_name ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ]
    [ LIMIT { count } ]
    [ RETURNING {* 
                | {output_expression [ [ AS ] output_name ]} [, ...] }];

多表更新：
[ WITH [ RECURSIVE ] with_query [, ...] ]
UPDATE [/*+ plan_hint */] table_list
SET {column_name = { expression | DEFAULT } 
    |( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }}[, ...]
    [ FROM from_list] [ WHERE condition ];

where sub_query can be:
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
{ * | {expression [ [ AS ] output_name ]} [, ...] }
[ FROM from_item [, ...] ] [JOIN join_table ON join_condition]... ]
[ WHERE condition ]
[ GROUP BY grouping_element [, ...] ]
[ HAVING condition [, ...] ]
[ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
[ LIMIT { [offset,] count | ALL } ]
```

## 参数说明<a name="zh-cn_topic_0283137651_zh-cn_topic_0237122194_zh-cn_topic_0059778969_sf3e3262b89854b3d829a94054116838d"></a>

- **JOIN**

JOIN包含 INNER JOIN，LEFT JOIN，RIGHT JOIN，FULL JOIN，CROSS JOIN。
  
  