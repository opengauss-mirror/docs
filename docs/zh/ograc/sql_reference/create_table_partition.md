# CREATE TABLE PARTITION

## 功能描述

创建分区表。
分区表是将一个逻辑上的大表，在物理存储上分割成多个更小、更易管理的部分（称为“分区”或“子表”）的技术。每个分区可以独立存储、备份、维护和查询，但对用户和应用来说，它仍然像一张完整的表。oGRAC支持范围分区，列表分区，哈希分区，间隔分区。

## 注意事项

分区表和普通表的属性存在一些不兼容。

- 当前支持RANGE、LIST、HASH、INTERVAL四种分区
- 分区键不超过16个字段
- 支持设置为分区键的列类型：UINT32、UINT64、INTEGER、BIGINT、REAL、NUMBER、NUMBER2、NUMBER3、DECIMAL、DATE、TIMESTAMP、INTERVAL_DS、INTERVAL_YM、CHAR、VARCHAR、STRING、BINARY、RAW
- 最多支持16777216个分区，采用HASH分区时最多支持8388608个分区

## 语法格式

**stmt:**

```
CREATE TABLE [IF NOT EXISTS] [schema_name.]table_name
    ({column_def_clause}[,...] [external_constraint][,...])
    [ON COMMIT {DELETE|PRESERVE} ROWS]
    [physical_properties_clause]
    [table_attr_clause]
    [CRMODE PAGE]
```

**column_def_clause:**

```
    column_name {datatype | SERIAL}
    [DEFAULT expr [ON UPDATE expr]]
    [AUTO_INCREMENT]
    [COMMENT 'comment_str']
    [COLLATE collation_name]
    [col_level_constraint][...]
```

**col_level_constraint:**

```
    CONSTRAINT constraint_name {[NOT] NULL
                                | UNIQUE
                                | PRIMARY KEY
                                | CHECK(expr)
                                | refenence_clause }[...]
```

**refenence_clause:**

```
    REFRENCES [schema_name.]table_name[(column_name)] [ON DELETE {CASCADE | SET NULL}]
```

**external_constraint:**

```
    CONSTRAINT constraint_name {UNIQUE(column_name[,...]) [using_index_clause]
                                | PRIMARY KEY(column_name[,...]) [using_index_clause]
                                | CHECK(expr)
                                | FOREIGN KEY(column_name[,...]) refenence_extend_clause}
```

**using_index_clause:**

```
    USING INDEX [ INITRANS int
                | TABLESPACE tablespace_name
                | LOCAL [({PARTITION partition_name [TABLESPACE tablespace_name | INITRANS int | PCTFREE int | ({SUBPARTITION subpartition_name[TABLESPACE tablespace_name]} [,...] )]}[,...])]
              ] [ ...]
```

**refenence_extend_clause:**

```
    REFRENCES [schema_name.]table_name[(column_name[,...])] [ON DELETE {CASCADE | SET NULL}]
```

**table_attr_clause**

```
    [column_attr_clause]
    [AUTO_INCREMENT [=] value]
    [table_partition_clause]
```

**column_attr_clause**

```
    [LOB (LOB_item) STORE AS LOB_segname [(LOB_parameters)]]
    [APPENDONLY {ON|OFF}]
```

**LOB_parameters**

```
    [TABLESPACE tablespace_name | {ENABLE | DISABLE} STORAGE IN ROW][ ...]
```

**table_partition_clause**

```
    range_partition_clause
    | list_partition_clause
    | hash_partition_clause
    | interval_partition_clause 
```

**range_partition_clause**

```
    PARTITION BY RANGE (partition_key[,...]) 
    [SUBPARTITION BY {RANGE|LIST|HASH} (subpartition_key [,...])]
    (range_partition_item[,...])

```

**range_partition_item**

```
    PARTITION partition_name VALUES LESS THAN ({value | MAXVALUE}[,...]) [physical_properties_clause] [(subpartition_item[,...])]
```

**subpartition_item**

```
    SUBPARTITION subpartition_name [{VALUES LESS THAN ({value | MAXVALUE}[,...]) | VALUES ({value | DEFAULT}[,...])}] [TABLESPACE tablespace_name]
```

**list_partition_clause**

```
    PARTITION BY LIST (partition_key[,...])
    [SUBPARTITION BY {RANGE|LIST|HASH} (subpartition_key [,...])]
    (list_partition_item[,...])
```

**list_partition_item**

```
    PARTITION partition_name VALUES ([value][,...] [DEFAULT]) [physical_properties_clause] [(subpartition_item[,...])]
```

**hash_partition_clause**

```
    PARTITION BY HASH (partition_key[,...])
    [SUBPARTITION BY {RANGE|LIST|HASH} (subpartition_key [,...])]
    ({HashPartitionItem1[,...] | hash_partition_item2})
```

**HashPartitionItem1**

```
    PARTITION partition_name  [physical_properties_clause] [(subpartition_item[,...])]
```

**hash_partition_item2**

```
    PARTITIONS partition_count (STORE IN (tablespace_name[,...]))
```

**interval_partition_clause**

```
    PARTITION BY RANGE (partition_key) INTERVAL (value)
    [STORE IN (TABLESPACE tablespace_name[,...])]
    [SUBPARTITION BY {RANGE|LIST|HASH} (subpartition_key [,...])]
    (range_partition_item[,...])
```

**physical_properties_clause**

```
    segment_attr_clause
    | FORMAT row_format_clause
```

**segment_attr_clause**

```
    { physical_attr_clause | TABLESPACE tablespace_name}[ ...]
```

**physical_attr_clause**

```
    {
        PCTFREE int
        | INITRANS int
        | MAXTRANS int
        | storage_clause
    }[ ...]
```

**storage_clause**

```
    STORAGE ({INITIAL int [K|M|G|T] | MAXSIZE {UNLIMITED | int [K|M|G|T]}}[ ...])
```

## 参数说明

- [普通表共有的参数](create_table.md#参数说明)
- range_partition_clause: RANGE分区
- list_partition_clause: LIST分区
- hash_partition_clause: HASH分区
- interval_partition_clause: INTERVAL分区
- partition_key: 分区键所在列的集合
- VALUES LESS THAN: RANGE分区的分区键最大值
- SUBPARTITION BY {RANGE|LIST|HASH}: 定义二级分区分区方式
- MAXVALUE：分区特殊定义，最大值
- VALUES(value): LIST分区键值
- VALUES(DEFAULT): DEFAULT分区，默认值所在分区
- PARTITIONS partition_count: HASH分区数，指定后自动创建partition_count个分区，数据均匀分布

## 示例

```SQL
-- 范围分区

CREATE TABLE sales_range (
sale_id NUMBER,
sale_date DATE,
amount NUMBER,
region VARCHAR2(50)
)
PARTITION BY RANGE (sale_date) (
PARTITION sales_q1 VALUES LESS THAN (TO_DATE('2024-04-01', 'YYYY-MM-DD')),
PARTITION sales_q2 VALUES LESS THAN (TO_DATE('2024-07-01', 'YYYY-MM-DD')),
PARTITION sales_q3 VALUES LESS THAN (TO_DATE('2024-10-01', 'YYYY-MM-DD')),
PARTITION sales_q4 VALUES LESS THAN (MAXVALUE)
);

-- 列表分区

CREATE TABLE employees_list (
emp_id NUMBER,
emp_name VARCHAR2(100),
department VARCHAR2(50),
salary NUMBER
)
PARTITION BY LIST (department) (
PARTITION dept_sales VALUES ('SALES', 'MARKETING'),
PARTITION dept_tech VALUES ('IT', 'ENGINEERING'),
PARTITION dept_hr VALUES ('HR', 'ADMIN'),
PARTITION dept_other VALUES (DEFAULT)
);

-- 哈希分区方式1：指定分区名称

CREATE TABLE products_hash (
product_id NUMBER,
product_name VARCHAR2(200),
category VARCHAR2(100)
)
PARTITION BY HASH (product_id) (
PARTITION p1,
PARTITION p2,
PARTITION p3,
PARTITION p4
);

-- 哈希分区方式2：指定分区数量

CREATE TABLE orders_hash (
order_id NUMBER,
order_date DATE,
customer_id NUMBER
)
PARTITION BY HASH (order_id)
PARTITIONS 8;

-- 间隔分区
CREATE TABLE sales_interval (
sale_id NUMBER,
sale_date DATE,
amount NUMBER,
region VARCHAR2(50)
)
PARTITION BY RANGE (sale_date)
INTERVAL (NUMTOYMINTERVAL(1, 'MONTH'))
(
PARTITION sales_historical VALUES LESS THAN (TO_DATE('2024-01-01', 'YYYY-MM-DD')),
PARTITION sales_jan_2024 VALUES LESS THAN (TO_DATE('2024-02-01', 'YYYY-MM-DD'))
);

-- 二级分区 RANGE + LIST

CREATE TABLE sales_subpart (
    sale_id      NUMBER,
    sale_date    DATE,
    region       VARCHAR2(20),
    product_type VARCHAR2(30),
    amount       NUMBER
)
PARTITION BY RANGE (sale_date)
SUBPARTITION BY LIST (region)
(
    PARTITION sales_2023 VALUES LESS THAN (DATE '2024-01-01')
    (
        SUBPARTITION north VALUES ('NORTH'),
        SUBPARTITION south VALUES ('SOUTH'),
        SUBPARTITION east VALUES ('EAST'),
        SUBPARTITION west VALUES ('WEST'),
        SUBPARTITION other VALUES (DEFAULT)
    ),
    PARTITION sales_2024 VALUES LESS THAN (DATE '2025-01-01'),
    PARTITION sales_future VALUES LESS THAN (MAXVALUE)
);
```
