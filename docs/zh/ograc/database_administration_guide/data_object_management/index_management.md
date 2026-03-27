# 索引管理

索引是一种数据库对象，它能够为表中的某一列或多个列建立一个有序的数据结构，使得数据库引擎能够快速定位到满足条件的数据行，而无需扫描整张表，创建合适的索引是数据库中提升数据检索速度的核心技术与手段。 

## 索引创建

从索引所占据的列的数量划分，可以分为单列索引和联合索引；从索引类型上看，可分为普通索引，函数索引，唯一索引（包括主键），分区索引。`OGRAC`支持上述索引类型，各种索引的创建方式如下：

### 基本语法

```sql
CREATE INDEX INDEX_NAME ON [Schema.]TABLE_NAME ({COLUMN_NAME | (COLUMN_NAME1, COLUMAN_NAME2, ...) | EXPRESSION | FUNCTION}) [TABLESPACE TABLESPACE_NAME];
```

- `INDEX_NAME`：索引的名称，用户自定义，在一个表中必须是唯一的。
- `Schema`：可选参数，指定索引所属的模式（`Schema`），如果不指定，则默认使用当前用户的模式。
- `TABLE_NAME`：索引所属的表名。
- `COLUMN_NAME`：索引所基于的列名，创建联合索引时多个列名之间用逗号分隔。
- `EXPRESSION`：基于表达式的索引。
- `FUNCTION`：基于函数的索引。
- `TABLESPACE OPENGAUSSSPACE`：可选参数，指定索引所在的表空间，默认使用当前表空间。

### 示例

```sql
DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS 
(
    ID INT CONSTRAINT PK_IDX PRIMARY KEY , -- 主键可以在创表时直接指定，其更像是一种约束
    AGE INT ,
    NAME VARCHAR(10),
    ADDRESS VARCHAR(50),
    SALARY NUMBER(20,4),
    USER_ID INT
) TABLESPACE OPENGAUSSSPACE;

-- 用户可通过CREATE INDEX创建索引
CREATE INDEX AGE_IDX ON USERS(AGE) TABLESPACE OPENGAUSSSPACE; -- 单列普通索引
CREATE INDEX ADDRESS_UPPER_IDX ON USERS(UPPER(ADDRESS)) TABLESPACE OPENGAUSSSPACE; -- 函数索引
CREATE INDEX ID_AGE_IDX2 ON USERS(ID, AGE) TABLESPACE OPENGAUSSSPACE; -- 联合索引
CREATE UNIQUE INDEX USER_IDX ON USERS(USER_ID) TABLESPACE OPENGAUSSSPACE; -- 唯一索引
```

注意：`OGRAC`要求联合索引的最大列数为`16`。

## 分区索引创建

分区索引是指在分区表上创建的索引，创建方式与普通表索引相同。

```SQL
CREATE TABLE orders (
    order_id    NUMBER,
    order_date  DATE,
    customer_id NUMBER,
    region      VARCHAR2(10),
    amount      NUMBER
)
PARTITION BY RANGE (order_date)
SUBPARTITION BY LIST (region)
(
  PARTITION p_2024_q1 VALUES LESS THAN (DATE '2024-04-01')
    (SUBPARTITION p_2024_q1_east VALUES ('EAST'),
     SUBPARTITION p_2024_q1_west VALUES ('WEST')),
  PARTITION p_2024_q2 VALUES LESS THAN (DATE '2024-07-01')
    (SUBPARTITION p_2024_q2_east VALUES ('EAST'),
     SUBPARTITION p_2024_q2_west VALUES ('WEST'))
);

-- 分区表上创建普通索引
CREATE INDEX idx_order_date ON orders(order_date);
-- 分区表上创建联合索引
CREATE INDEX idx_order_date_region ON orders(order_date, region);
-- 分区表上创建唯一索引
CREATE UNIQUE INDEX idx_order_id ON orders(order_id);
-- 分区表上创建函数索引
CREATE INDEX idx_region_upper ON orders(UPPER(region));
```

## 索引重建

当表发生频繁的`INSERT`、`UPDATE`、`DELETE`操作时，索引也会随之动态调整，导致磁盘的物理文件上存在空间碎片，索引项的逻辑顺序与物理存储顺序不一致，影响顺序扫描性能。重建索引（`Index Rebuild`） 就是指删除旧的索引结构，并按照原始定义重新创建一个新的、整洁的索引的过程。这个过程会重新组织索引的数据页，消除碎片，优化存储结构。用户可通过以下命令重建索引：

```sql
ALTER INDEX INDEX_NAME ON TABLE_NAME REBUILD;
```

数据库重启回滚期间不支持重建索引。

## 索引修改

`OGRAC`不支持修改已创建索引的结构，只允许修改已创建索引的名称。

```sql
ALTER INDEX AGE_IDX ON USERS RENAME TO AGE_IDX_NEW;

ALTER INDEX idx_order_date ON orders RENAME TO idx_order_date_new;
```

## 索引删除

用户可使用`DROP INDEX`删除索引。数据库重启回滚期间不支持删除索引，删除表时索引会一并删除。

```SQL
-- 普通表索引删除
DROP INDEX AGE_IDX ON USERS;
DROP INDEX USER_IDX ON USERS;

-- 分区表索引删除
DROP INDEX idx_order_date ON orders;
DROP INDEX idx_order_date_region ON orders;

-- 删除主键时需要通过删除约束的方式完成
ALTER TABLE USERS DROP CONSTRAINT PK_IDX;
```

部分场景下主键约束可以不指定名称，比如：

```SQL
DROP TABLE IF EXISTS TEST;
CREATE TABLE TEST(COL1 INT PRIMARY KEY, COL2 INT);
```

该场景下可以通过`ADM_INDEXES`或者`DB_INDEXES`查看主键的名称并删除，示例如下：

```sql
SQL> SELECT INDEX_NAME FROM ADM_INDEXES WHERE TABLE_NAME = 'TEST' AND IS_PRIMARY = 'Y';

INDEX_NAME                                                      
----------------------------------------------------------------
_PK_SYS_1_27                                                    

1 rows fetched.

SQL> ALTER TABLE TEST DROP CONSTRAINT _PK_SYS_1_27;

Succeed.
```

## 索引失效

用户可通过`UNUSABLE`命令失效索引。索引失效后，数据库不会对该表进行的增删改等操作的同时维护索引结构。如果用户后续重新启用索引，并须通过命令重建索引（重建索引后自动生效）或删除索引后重新创建。

```sql
ALTER INDEX AGE_IDX ON USERS UNUSABLE; -- 索引失效
ALTER INDEX AGE_IDX ON USERS REBUILD;  -- 索引重建

ALTER INDEX idx_order_date ON orders UNUSABLE; -- 分区表索引失效
ALTER INDEX idx_order_date ON orders REBUILD;  -- 分区表索引重建
```

## 索引信息查看

用户可通过`ADM_INDEXES`或者`DB_INDEXES`查看索引的相关信息。

```SQL
SQL> SELECT INDEX_NAME, INDEX_TYPE, TABLESPACE_NAME, IS_PRIMARY, IS_UNIQUE, COLUMNS FROM ADM_INDEXES WHERE TABLE_NAME = 'USERS';

INDEX_NAME                                                       INDEX_TYPE TABLESPACE_NAME                                                  IS_PRIMARY IS_UNIQUE COLUMNS                                                         
---------------------------------------------------------------- ---------- ---------------------------------------------------------------- ---------- --------- ----------------------------------------------------------------
PK_IDX                                                           NORMAL     OPENGAUSSSPACE                                                   Y          N         ID                                                              
USER_IDX                                                         NORMAL     OPENGAUSSSPACE                                                   N          Y         USER_ID                                                         
ID_AGE_IDX2                                                      NORMAL     OPENGAUSSSPACE                                                   N          N         ID, AGE                                                         
ADDRESS_UPPER_IDX                                                NORMAL     OPENGAUSSSPACE                                                   N          N         UPPER(ADDRESS)                                                  
AGE_IDX                                                          NORMAL     OPENGAUSSSPACE                                                   N          N         AGE                                                             

5 rows fetched.

SQL> SELECT INDEX_NAME, INDEX_TYPE, TABLESPACE_NAME, IS_PRIMARY, IS_UNIQUE, COLUMNS FROM ADM_INDEXES WHERE TABLE_NAME = 'ORDERS';

INDEX_NAME                                                       INDEX_TYPE TABLESPACE_NAME                                                  IS_PRIMARY IS_UNIQUE COLUMNS                                                         
---------------------------------------------------------------- ---------- ---------------------------------------------------------------- ---------- --------- ----------------------------------------------------------------
IDX_ORDER_ID                                                     NORMAL     SYSTEM                                                           N          Y         ORDER_ID                                                        
IDX_ORDER_DATE_REGION                                            NORMAL     SYSTEM                                                           N          N         ORDER_DATE, REGION                                              
IDX_ORDER_DATE_NEW                                               NORMAL     SYSTEM                                                           N          N         ORDER_DATE                                                      
IDX_REGION_UPPER                                                 NORMAL     SYSTEM                                                           N          N         UPPER(region)                                                   

4 rows fetched.

```

- `INDEX_NAME`：索引名称
- `INDEX_TYPE`：索引类型
- `TABLESPACE_NAME`：索引所在的表空间名称
- `IS_PRIMARY`：是否为主键索引，`Y`表示是，`N`表示否
- `IS_UNIQUE`：是否为唯一索引，`Y`表示是，`N`表示否
- `COLUMNS`：索引包含的列名，多个列名之间用逗号分隔

## 索引扫描方式

当前`OGRAC`支持的索引扫描方式如下：

- Index Unique Scan（唯一索引扫描）：查询条件使用唯一索引的全部列的等值查询。
- Index Range Scan（索引范围扫描）：非唯一索引 或 唯一索引但未提供全部列。查询条件含 =, >, >=, <, <=, BETWEEN, IN 等范围或等值操作。
- Index Full Scan（索引全扫描）：通常按照索引的物理存储顺序进行扫描，不依赖查询条件。
- Index Fast Full Scan（索引快速全扫描）：使用块扫描方式，并且要求查询的所有字段都包含在索引中，扫描结果是无序的，order by使用索引排序时冲突、hint_no_ffs冲突。
- Index Skip Scan（索引跳跃扫描）：用于范围查询在前，等值查询在后，查询条件不包含前导第一列的查询场景。