# SELECT INTO<a name="ZH-CN_TOPIC_0242370649"></a>

## 功能描述<a name="zh-cn_topic_0237122185_zh-cn_topic_0059779381_s8acfcbcb82b947e08be0c1bb0de2de86"></a>

SELECT INTO用于根据查询结果创建一个新表，并且将查询到的数据插入到新表中。

数据并不返回给客户端，这一点和普通的SELECT不同。新表的字段具有和SELECT的输出字段相同的名称和数据类型。

## 注意事项<a name="zh-cn_topic_0237122185_zh-cn_topic_0059779381_seabd3b47a66045ed92ad80da65bd79cc"></a>

CREATE TABLE AS的作用和SELECT INTO类似，且提供了SELECT INTO所提供功能的超集。建议使用CREATE TABLE AS语法替代SELECT INTO，因为SELECT INTO不能在存储过程中使用。

## 语法格式<a name="zh-cn_topic_0237122185_zh-cn_topic_0059779381_s95d36c6f79da4133a55b3776c59d3449"></a>

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    { * | {expression [ [ AS ] output_name ]} [, ...] }
    INTO [ UNLOGGED ] [ TABLE ] new_table
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY expression [, ...] ]
    [ HAVING condition [, ...] ]
    [ WINDOW {window_name AS ( window_definition )} [, ...] ]
    [ { UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]
    [ {FOR { UPDATE | SHARE } [ OF table_name [, ...] ] [ NOWAIT ]} [...] ];
```

## 参数说明<a name="zh-cn_topic_0237122185_zh-cn_topic_0059779381_s5393efdc6e4a42e096e2fd326054418c"></a>

**INTO \[ UNLOGGED \] \[ TABLE \] new\_table**

+ **new\_table**指定新建表的名称。

- **UNLOGGED**

    指定表为非日志表。在非日志表中写入的数据不会被写入到预写日志中，这样就会比普通表快很多。但是，它也是不安全的，非日志表在冲突或异常关机后会被自动删截。非日志表中的内容也不会被复制到备用服务器中。在该类表中创建的索引也不会被自动记录。

    - 使用场景：非日志表不能保证数据的安全性，用户应该在确保数据已经做好备份的前提下使用，例如系统升级时进行数据的备份。
    - 故障处理：当异常关机等操作导致非日志表上的索引发生数据丢失时，用户应该对发生错误的索引进行重建。
    
    SELECT INTO的其它参数可参考SELECT的参数说明。


## 示例<a name="zh-cn_topic_0237122185_zh-cn_topic_0059779381_s895bebf9e3214a0783610d5fc1ad2f31"></a>

```
--将tpcds.reason表中r_reason_sk小于5的值加入到新建表中。
postgres=# SELECT * INTO tpcds.reason_t1 FROM tpcds.reason WHERE r_reason_sk < 5;
INSERT 0 6

--删除tpcds.reason_t1表。
postgres=# DROP TABLE tpcds.reason_t1;
```

## 相关链接<a name="zh-cn_topic_0237122185_zh-cn_topic_0059779381_se82df922609a4e8eb3a6d6a011e508a6"></a>

[SELECT](SELECT.md)

## 优化建议<a name="zh-cn_topic_0237122185_zh-cn_topic_0059779381_section21815038152246"></a>

-   **DATABASE**

    不建议在事务中reindex database。

-   **SYSTEM**

    不建议在事务中reindex系统表。


