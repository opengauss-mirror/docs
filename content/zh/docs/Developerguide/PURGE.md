# PURGE<a name="ZH-CN_TOPIC_0000001151429881"></a>

## 功能描述<a name="section625854265112"></a>

使用PURGE语句可以实现如下功能：

-   从回收站中清理表或索引，并释放对象相关的全部空间。
-   清理回收站。
-   清理回收站中指定表空间的对象。

## 注意事项<a name="section749425816510"></a>

-   清除（PURGE）操作支持：表（PURGE  TABLE）、索引（PURGE INDEX）、回收站（PURGE RECYCLEBIN）。


-   执行PURGE操作的权限要求如下：

    -   PURGE TABLE：用户必须是表的所有者，且用户必须拥有表所在模式的USAGE权限，系统管理员默认拥有此权限。
    -   PURGE INDEX：用户必须是索引的所有者，用户必须拥有索引所在模式的USAGE权限，系统管理员默认拥有此权限。
    -   PURGE RECYCLEBIN：普通用户只能清理回收站中当前用户拥有的对象，且用户必须拥有对象所在模式的USAGE权限，系统管理员默认可以清理回收站所有对象。


## 语法格式<a name="section2067414318544"></a>

```
PURGE { TABLE [schema_name.]table_name
        | INDEX index_name
        | RECYCLEBIN
      }
```

## 参数说明<a name="section19287181805211"></a>

-   _\[  __schema\_name.__  \]_

    模式名。


-   TABLE  _\[ schema\_name. \] table\_name_

    清空回收站中指定的表。


-   INDEX  _index\_name_

    清空回收站中指定的索引。


-   RECYCLEBIN

    清空回收站中的对象。


## 示例<a name="section763816452134"></a>

```
-- 创建表空间reason_table_space
openGauss=#  CREATE TABLESPACE REASON_TABLE_SPACE1 owner tpcds RELATIVE location 'tablespace/tsp_reason1';
-- 在表空间创建表tpcds.reason_t1
openGauss=#  CREATE TABLE tpcds.reason_t1
 (
  r_reason_sk    integer,
  r_reason_id    character(16),
  r_reason_desc  character(100)
  ) tablespace reason_table_space1;
-- 在表空间创建表tpcds.reason_t2
openGauss=#  CREATE TABLE tpcds.reason_t2
 (
  r_reason_sk    integer,
  r_reason_id    character(16),
  r_reason_desc  character(100)
  ) tablespace reason_table_space1;
-- 在表空间创建表tpcds.reason_t3
openGauss=#  CREATE TABLE tpcds.reason_t3
 (
  r_reason_sk    integer,
  r_reason_id    character(16),
  r_reason_desc  character(100)
  ) tablespace reason_table_space1;
-- 对表tpcds.reason_t1创建索引
openGauss=#  CREATE INDEX index_t1 on tpcds.reason_t1(r_reason_id);
openGauss=#  DROP TABLE tpcds.reason_t1;
openGauss=#  DROP TABLE tpcds.reason_t2;
openGauss=#  DROP TABLE tpcds.reason_t3;
--查看回收站
openGauss=#  SELECT rcyname,rcyoriginname,rcytablespace FROM GS_RECYCLEBIN;
        rcyname        | rcyoriginname | rcytablespace
-----------------------+---------------+---------------
 BIN$16409$2CEE988==$0 | reason_t1     |         16408
 BIN$16412$2CF2188==$0 | reason_t2     |         16408
 BIN$16415$2CF2EC8==$0 | reason_t3     |         16408
 BIN$16418$2CF3EC8==$0 | index_t1     |             0
(4 rows)
--PURGE清除表
openGauss=#  PURGE TABLE tpcds.reason_t3;
openGauss=#  SELECT rcyname,rcyoriginname,rcytablespace FROM GS_RECYCLEBIN;
        rcyname        | rcyoriginname | rcytablespace
-----------------------+---------------+---------------
 BIN$16409$2CEE988==$0 | reason_t1     |         16408
 BIN$16412$2CF2188==$0 | reason_t2     |         16408
 BIN$16418$2CF3EC8==$0 | index_t1     |             0
(3 rows)
--PURGE清除索引
openGauss=#  PURGE INDEX tindex_t1;
openGauss=#  SELECT rcyname,rcyoriginname,rcytablespace FROM GS_RECYCLEBIN;
        rcyname        | rcyoriginname | rcytablespace
-----------------------+---------------+---------------
 BIN$16409$2CEE988==$0 | reason_t1     |         16408
 BIN$16412$2CF2188==$0 | reason_t2     |         16408
(2 rows)
--PURGE清除回收站所有对象
openGauss=#  PURGE recyclebin;
openGauss=#  SELECT rcyname,rcyoriginname,rcytablespace FROM GS_RECYCLEBIN;
        rcyname        | rcyoriginname | rcytablespace
-----------------------+---------------+---------------
(0 rows)

```
