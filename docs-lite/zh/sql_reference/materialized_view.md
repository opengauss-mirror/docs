# 物化视图<a name="ZH-CN_TOPIC_0295970202"></a>

物化视图是一种特殊的物理表，物化视图是相对普通视图而言的。普通视图是虚拟表，应用的局限性较大，任何对视图的查询实际上都是转换为对SQL语句的查询，性能并没有实际上提高。物化视图实际上就是存储SQL执行语句的结果，起到缓存的效果。

目前Ustore引擎不支持创建、使用物化视图。

目前物化视图导出不支持导出物化视图中的数据。

## 使用

### 语法格式

- 创建物化视图日志

    ```
    CREATE MATERIALIZED VIEW LOG ON table_name; 
    ```

- 删除物化视图日志

    ```
    DROP MATERIALIZED VIEW LOG ON table_name;
    ```

### 参数说明

- **table\_name**

  要创建的物化视图日志所属表的名称。

### 示例

```
--准备数据。
openGauss=# CREATE TABLE t1(c1 int, c2 int);
openGauss=# INSERT INTO t1 VALUES(1, 1);
openGauss=# INSERT INTO t1 VALUES(2, 2);

--创建增量物化视图日志。
openGauss=# CREATE MATERIALIZED VIEW LOG ON t1;
CREATE MATERIALIZED VIEW LOG

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

--删除物化视图日志。
openGauss=# DROP MATERIALIZED VIEW LOG ON t1;
DROP MATERIALIZED VIEW LOG
```
