# 增量物化视图<a name="ZH-CN_TOPIC_0295970206"></a>

## 概述<a name="ZH-CN_TOPIC_0295970207"></a>

增量物化视图可以对物化视图增量刷新，需要用户手动执行语句完成对物化视图在一段时间内的增量数据刷新。与全量创建物化视图的不同在于目前增量物化视图所支持场景较小。目前物化视图创建语句仅支持基表扫描语句或者UNION ALL语句。

## 使用<a name="ZH-CN_TOPIC_0295970208"></a>

### 语法格式<a name="section1980464963719"></a>

- 创建增量物化视图

    ```
    CREATE INCREMENTAL MATERIALIZED VIEW [ view_name ] AS { query_block }; 
    ```

- 全量刷新物化视图

    ```
    REFRESH MATERIALIZED VIEW [ view_name ];
    ```

- 增量刷新物化视图

    ```
    REFRESH INCREMENTAL MATERIALIZED VIEW [ view_name ];
    ```

- 删除物化视图

    ```
    DROP MATERIALIZED VIEW [ view_name ];
    ```

- 查询物化视图

    ```
    SELECT * FROM [ view_name ];
    ```

### 示例<a name="section1433113611463"></a>

```
--准备数据。
openGauss=# CREATE TABLE t1(c1 int, c2 int);
openGauss=# INSERT INTO t1 VALUES(1, 1);
openGauss=# INSERT INTO t1 VALUES(2, 2);

--创建增量物化视图。
openGauss=# CREATE INCREMENTAL MATERIALIZED VIEW mv AS SELECT * FROM t1;
CREATE MATERIALIZED VIEW

--插入数据。
openGauss=# INSERT INTO t1 VALUES(3, 3);
INSERT 0 1

--增量刷新物化视图。
openGauss=# REFRESH INCREMENTAL MATERIALIZED VIEW mv;
REFRESH MATERIALIZED VIEW

--查询物化视图结果。
openGauss=# SELECT * FROM mv;
 c1 | c2 
----+----
  1 |  1
  2 |  2
  3 |  3
(3 rows)

--插入数据。
openGauss=# INSERT INTO t1 VALUES(4, 4);
INSERT 0 1

--全量刷新物化视图。
openGauss=# REFRESH MATERIALIZED VIEW mv;
REFRESH MATERIALIZED VIEW

--查询物化视图结果。
openGauss=# select * from mv;
 c1 | c2 
----+----
  1 |  1
  2 |  2
  3 |  3
  4 |  4
(4 rows)

--删除物化视图。
openGauss=# DROP MATERIALIZED VIEW mv;
DROP MATERIALIZED VIEW
```

## 支持和约束<a name="ZH-CN_TOPIC_0295970209"></a>

### 支持场景<a name="section1490618598164"></a>

- 单表查询语句。
- 多个单表查询的UNION ALL。
- 物化视图上支持创建索引。
- 物化视图支持Analyze操作。

### 不支持场景<a name="section10338102122020"></a>

- 物化视图中不支持多表Join连接计划以及subquery计划。
- 除少部分ALTER操作外，不支持对物化视图中基表执行绝大多数DDL操作。
- 物化视图不支持增删改操作，只支持查询语句。
- 不支持用临时表/hashbucket/unlog/分区表创建物化视图。
- 不支持物化视图嵌套创建（即物化视图上创建物化视图）。
- 不支持视图上创建增量物化视图。
- 仅支持行存表，不支持列存表。
- 不支持UNLOGGED类型的物化视图，不支持WITH语法。

### 约束<a name="section16598132020150"></a>

- 物化视图定义如果为UNION ALL，则其中每个子查询需使用不同的基表。
- 增量物化视图的创建、全量刷新、删除过程中会给基表加高级别锁，若物化视图的定义为UNION ALL，需要注意业务逻辑，避免死锁产生。
