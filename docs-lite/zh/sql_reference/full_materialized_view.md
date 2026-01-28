# 全量物化视图<a name="ZH-CN_TOPIC_0295970203"></a>

## 概述<a name="ZH-CN_TOPIC_0295970204"></a>

全量物化视图仅支持对已创建的物化视图进行全量更新，而不支持进行增量更新。创建全量物化视图语法和CREATE TABLE AS语法类似。

## 使用<a name="ZH-CN_TOPIC_0295970205"></a>

### 语法格式<a name="section1810714714319"></a>

- 创建全量物化视图

    ```
    CREATE MATERIALIZED VIEW [ view_name ] AS { query_block }; 
    ```

- 全量刷新物化视图

    ```
    REFRESH MATERIALIZED VIEW [ view_name ];
    ```

- 删除物化视图

    ```
    DROP MATERIALIZED VIEW [ view_name ];
    ```

- 查询物化视图

    ```
    SELECT * FROM [ view_name ];
    ```

### 示例<a name="section653116105315"></a>

```
--准备数据。
openGauss=# CREATE TABLE t1(c1 int, c2 int);
openGauss=# INSERT INTO t1 VALUES(1, 1);
openGauss=# INSERT INTO t1 VALUES(2, 2);

--创建全量物化视图。
openGauss=# CREATE MATERIALIZED VIEW mv AS select count(*) from t1;
CREATE MATERIALIZED VIEW

--查询物化视图结果。
openGauss=# SELECT * FROM mv;
 count 
-------
     2
(1 row)

--向物化视图中基表插入数据。
openGauss=# INSERT INTO t1 VALUES(3, 3);
INSERT 0 1

--对全量物化视图做全量刷新。
openGauss=# REFRESH MATERIALIZED VIEW mv;
REFRESH MATERIALIZED VIEW

--查询物化视图结果。
openGauss=# SELECT * FROM mv;
 count 
-------
     3
(1 row)

--删除物化视图。
openGauss=# DROP MATERIALIZED VIEW mv;
DROP MATERIALIZED VIEW
```

## 支持和约束<a name="ZH-CN_TOPIC_0295970434"></a>

### 支持场景<a name="section794144810159"></a>

- 通常全量物化视图所支持的查询范围与CREATE TABLE AS语句一致。
- 全量物化视图上支持创建索引。
- 支持analyze、explain。

### 不支持场景<a name="section14823202371412"></a>

物化视图不支持增删改操作，只支持查询语句。

## 约束<a name="section16598132020150"></a>

全量物化视图的刷新、删除过程中会给基表加高级别锁，若物化视图的定义涉及多张表，需要注意业务逻辑，避免死锁产生。
