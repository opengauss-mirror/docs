# CREATE INDEX

## 功能描述

在指定的表上创建索引，用于提升查询性能。

## 注意事项

- 创建索引需要CREATE ANY INDEX权限
- 复合索引包含的列数不超过16个，最大长度4052
- LOB/ARRAY/IMAGE类型不支持创建普通索引，函数索引的参数是表达式时，结果不能为LOB/ARRAY/IMAGE类型
- 函数索引支持abs、decode、jsonb_value、json_value、lower、nvl、nvl2、radians、regexp_instr、regexp_substr、reverse、substr、substrb、to_char、to_date、to_number、trim、trunc、upper
- 分区索引只支持分区表，分区表可以创建分区索引和全局索引，分区索引和分区数需要一致

## 语法格式

**stmt**

```
CREATE [UNIQUE] INDEX [IF NOT EXISTS] [schema_name.]index_name ON index_table_clause
    [CRMODE PAGE]
    [PARALLEL n]
    [REVERSE]
    [NOLOGING]
```

**index_table_clause**

```
    [schema_name.]table_name
    ({column_name | column_expr }[,...])
    index_attr_clause
```

**index_attr_clause**

```
    [[TABLESPACE tablespace_name] [index_partition_clause]]
```

**index_partition_clause**

```
    LOCAL [({PARTITION partition_name [TABLESPACE tablespace_name] [PCTFREE int]}[,...])]
```

## 参数说明

- column_expr: 索引表达式，函数索引列表达式仅支持部分函数表达式[注意事项](#注意事项)。
- CRMODE：MVCC模式。PAGE是页级MVCC, 默认和表的CRMODE一致
- PARALLEL：并行创建索引的并行度。不支持函数索引/临时表索引/在线创建索引
- REVERSE：反向索引
- NOLOGING：创建索引时不记录REDO
- LOCAL：分区索引，即每个分区上单独创建索引
- PCTFREE: 指定索引块中为未来索引条目更新预留的空间百分比，单位%

## 示例

```SQL
-- 在employees表的last_name列上创建普通索引
CREATE INDEX idx_emp_lastname ON employees(last_name);

-- 在departments表的department_name列上创建唯一索引
CREATE UNIQUE INDEX idx_dept_name ON departments(department_name);

-- 在orders表上创建客户和日期的复合索引
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);


-- 创建反向键索引，减少索引块争用
CREATE INDEX idx_emp_id_reverse ON employees(manager_id) REVERSE;

-- 在分区表sales上创建本地分区索引
CREATE INDEX idx_sales_date_local ON sales(sale_date) LOCAL;

-- 指定每个分区的表空间和属性
CREATE INDEX idx_sales_product_local ON sales(product_id, sale_date) LOCAL
(
    PARTITION p1_2023 TABLESPACE idx_ts1 COMPRESS,
    PARTITION p2_2023 TABLESPACE idx_ts2,
    PARTITION p3_2023 TABLESPACE idx_ts3,
    PARTITION p4_2023 TABLESPACE idx_ts3,
    PARTITION p5_future TABLESPACE idx_ts3
);

-- 在表达式上创建索引（需语法支持idx_column_expr）
CREATE INDEX idx_emp_upper_name ON employees(UPPER(last_name));


-- 大型表的并行索引创建
CREATE INDEX idx_logs_timestamp ON application_logs(log_timestamp, user_id)
PARALLEL 8
NOLOGGING
TABLESPACE logs_index_ts
CRMODE PAGE;
```
