# SELECT INTO<a name="ZH-CN_TOPIC_0289900598"></a>

## 功能描述<a name="zh-cn_topic_0283137419_zh-cn_topic_0237122185_zh-cn_topic_0059779381_s8acfcbcb82b947e08be0c1bb0de2de86"></a>

SELECT INTO用于根据查询结果创建一个新表，并且将查询到的数据插入到新表中。

数据并不返回给客户端，这一点和普通的SELECT不同。新表的字段具有和SELECT的输出字段相同的名称和数据类型。

## 注意事项<a name="zh-cn_topic_0283137419_zh-cn_topic_0237122185_zh-cn_topic_0059779381_seabd3b47a66045ed92ad80da65bd79cc"></a>

CREATE TABLE AS的作用和SELECT INTO类似，且提供了SELECT INTO所提供功能的超集。建议使用CREATE TABLE AS语法替代SELECT INTO，因为SELECT INTO不能在存储过程中使用。

## 语法格式<a name="zh-cn_topic_0283137419_zh-cn_topic_0237122185_zh-cn_topic_0059779381_s95d36c6f79da4133a55b3776c59d3449"></a>

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    { * | {expression [ [ AS ] output_name ]} [, ...] }
    INTO [ [ GLOBAL | LOCAL ] [ TEMPORARY | TEMP ] | UNLOGGED ] [ TABLE ] new_table
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
    [ {FOR { UPDATE | SHARE } [ OF table_name [, ...] ] [ NOWAIT | WAIT N]} [...] ];
```

## 参数说明<a name="zh-cn_topic_0283137419_zh-cn_topic_0237122185_zh-cn_topic_0059779381_s5393efdc6e4a42e096e2fd326054418c"></a>

-   **new\_table**

    new\_table指定新建表的名称。


-   **UNLOGGED**

    指定表为非日志表。在非日志表中写入的数据不会被写入到预写日志中，这样就会比普通表快很多。但是，它也是不安全的，非日志表在冲突或异常关机后会被自动删截。非日志表中的内容也不会被复制到备用服务器中。在该类表中创建的索引也不会被自动记录。

    -   使用场景：非日志表不能保证数据的安全性，用户应该在确保数据已经做好备份的前提下使用，例如系统升级时进行数据的备份。
    -   故障处理：当异常关机等操作导致非日志表上的索引发生数据丢失时，用户应该对发生错误的索引进行重建。


-   **GLOBAL | LOCAL**

    创建临时表时可以在TEMP或TEMPORARY前指定GLOBAL或LOCAL关键字。如果指定GLOBAL关键字，openGauss会创建全局临时表，否则openGauss会创建本地临时表。

-   **TEMPORARY | TEMP**

    如果指定TEMP或TEMPORARY关键字，则创建的表为临时表。临时表分为全局临时表和本地临时表两种类型。创建临时表时如果指定GLOBAL关键字则为全局临时表，否则为本地临时表。

    全局临时表的元数据对所有会话可见，会话结束后元数据继续存在。会话与会话之间的用户数据、索引和统计信息相互隔离，每个会话只能看到和更改自己提交的数据。全局临时表有两种模式：一种是基于会话级别的（ON COMMIT PRESERVE ROWS），当会话结束时自动清空用户数据；一种是基于事务级别的（ON COMMIT PRESERVE ROWS），当执行commit或rollback时自动清空用户数据。建表时如果没有指定ON COMMIT选项，则缺省为会话级别。与本地临时表不同，全局临时表建表时可以指定非pg\_temp\_开头的schema。

    由于临时表只在当前会话创建，对于涉及对临时表操作的DDL语句，会产生DDL失败的报错。因此，建议DDL语句中不要对临时表进行操作。TEMP和TEMPORARY等价。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >
    >-   本地临时表通过每个会话独立的以pg\_temp开头的schema来保证只对当前会话可见，因此，不建议用户在日常操作中手动删除以pg\_tem、pg\_toast\_temp开头的schema。
    >
    >-   如果建表时不指定TEMPORARY/TEMP关键字，而指定表的schema为当前会话的pg\_temp\_开头的schema，则此表会被创建为临时表。
    >
    >-   ALTER/DROP全局临时表和索引，如果其它会话正在使用它，禁止操作。
    >
    >-   全局临时表的DDL只会影响当前会话的用户数据和索引。例如truncate、reindex、analyze只对当前会话有效。


>![](public_sys-resources/icon-note.png) **说明：** 
>SELECT INTO的其它参数可参考SELECT的[参数说明](SELECT.md#zh-cn_topic_0283136463_zh-cn_topic_0237122184_zh-cn_topic_0059777449_sa812f65b8e8c4c638ec7840697222ddc)。

## 示例<a name="zh-cn_topic_0283137419_zh-cn_topic_0237122185_zh-cn_topic_0059779381_s895bebf9e3214a0783610d5fc1ad2f31"></a>

```
--将tpcds.reason表中r_reason_sk小于5的值加入到新建表中。
openGauss=# SELECT * INTO tpcds.reason_t1 FROM tpcds.reason WHERE r_reason_sk < 5;
INSERT 0 6

--删除tpcds.reason_t1表。
openGauss=# DROP TABLE tpcds.reason_t1;
```

## 相关链接<a name="zh-cn_topic_0283137419_zh-cn_topic_0237122185_zh-cn_topic_0059779381_se82df922609a4e8eb3a6d6a011e508a6"></a>

[SELECT](SELECT.md)

## 优化建议<a name="zh-cn_topic_0283137419_zh-cn_topic_0237122185_zh-cn_topic_0059779381_section21815038152246"></a>

-   **DATABASE**

    不建议在事务中reindex database。

-   **SYSTEM**

    不建议在事务中reindex系统表。

