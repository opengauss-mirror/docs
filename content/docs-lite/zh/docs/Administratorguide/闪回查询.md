# 闪回查询<a name="ZH-CN_TOPIC_0000001178093828"></a>

## 背景信息<a name="section028145412219"></a>

闪回查询可以查询过去某个时间点表的某个snapshot数据，这一特性可用于查看和逻辑重建意外删除或更改的受损数据。闪回查询基于MVCC多版本机制，通过检索查询旧版本，获取指定老版本数据。

## 前提条件<a name="section17975164121712"></a>

-   undo\_retention\_time参数用于设置undo旧版本的保留时间。

## 语法<a name="section1489051111232"></a>

```
{[ ONLY ] table_name [ * ] [ partition_clause ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
[ TABLESAMPLE sampling_method ( argument [, ...] ) [ REPEATABLE ( seed ) ] ]
[TIMECAPSULE { TIMESTAMP | CSN } expression ]
|( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
|with_query_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
|function_name ( [ argument [, ...] ] ) [ AS ] alias [ ( column_alias [, ...] | column_definition [, ...] ) ]
|function_name ( [ argument [, ...] ] ) AS ( column_definition [, ...] )
|from_item [ NATURAL ] join_type from_item [ ON join_condition | USING ( join_column [, ...] ) ]}
```

语法树中“TIMECAPSULE \{TIMESTAMP | CSN\} expression”为闪回功能新增表达方式，其中TIMECAPSULE表示使用闪回功能，TIMESTAMP以及CSN表示闪回功能使用具体时间点信息或使用CSN（commit sequence number）信息。

## 参数说明<a name="section1446502852320"></a>

-   TIMESTAMP
    -   指要查询某个表在TIMESTAMP这个时间点上的数据，TIMESTAMP指一个具体的历史时间。


-   CSN
    -   指要查询整个数据库逻辑提交序下某个CSN点的数据，CSN指一个具体逻辑提交时间点，数据库中的CSN为写一致性点，每个CSN代表整个数据库的一个一致性点，查询某个CSN下的数据代表SQL查询数据库在该一致性点的相关数据。


## 使用示例<a name="section128804136369"></a>

-   示例1：

    ```
    SELECT * FROM t1 TIMECAPSULE TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
    ```

-   示例2：

    ```
    SELECT * FROM t1 TIMECAPSULE CSN 9617;
    ```

-   示例3：

    ```
    SELECT * FROM t1 AS t TIMECAPSULE TIMESTAMP to_timestamp ('2020-02-11 10:13:22.724718', 'YYYY-MM-DD HH24:MI:SS.FF');
    ```

-   示例4：

    ```
    SELECT * FROM t1 AS t TIMECAPSULE CSN 9617;
    ```


