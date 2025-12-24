# 表空间管理

表空间（`TABLESPACE`）是数据库中用于管理物理存储空间的逻辑容器。它是数据库对象与磁盘文件之间的桥梁。`OGRAC`的表空间由一个或者多个数据文件组成，一个数据文件专属于一个表空间，从数据库的存储逻辑上看，数据库中所有的数据对象都存在表空间中，从物理存储上看，其均存储在对应的数据文件上。数据库中可以存在多个表的空间，表空间满足创建、删除、扩容等基本功能需求，一个表空间也专属于一个数据库。

## 表空间类型

- `SYSTEM`表空间：存放数据库的元数据，不支持自动扩展，不建议在`SYSTEM`表空间存储用户数据，如果`SYSTEM`表空间已满，需要扩展表空间以满足需求。
- `TEMP`表空间：数据库自动维护。主要用于执行产生大量临时数据的`SQL`语句时，使用该表空间分配临时段进行换入换出，比如创建索引、无法在内存中完成的排序操作、`SQL`语句的中间结果集等。
- `UNDO`表空间：存放`Undo`数据。执行增删改等`DML`操作时，将执行前的旧数据写入`UNDO`表空间，主要用于`MVCC`的可见性判断、事务回滚、一致性读等操作。
- `USERS`表空间：默认的用户表空间，如果创建某新用户后没有明确指定表空间，新用户的所有信息将存放在`USERS`表空间中。
- `SYSAUX`表空间：数据库创建时自动新建，主要存储`WSR`表、`CBO`统计信息表的相关数据。
- `TEMP2`：存放`NOLOGING`表的数据
- `TEMP2_UNDO`：存放`NOLOGING`表的Undo数据

## 表空间操作

### 表空间创建

​    用户可使用 `CREATE TABLESPACE` 命令创建表空间：

```sql
CREATE TABLESPACE TABLESPACE_NAME EXTENTS PAGE_NUM DATAFILE 'DATA_FILE_NAME' SIZE FILE_SIZE AUTOEXTEND ON NEXT EXTEND_SIZE;
```

- `EXTENTS`参数标识一个`EXTENT`中包含的`PAGE`数量，取值范围为[8,8192]，改制必须为2的整次幂，该参数不指定时默认为8。
- `EXTENTS`是表存储行数据向表空间申请空间的基本单位，适当增大可以提升IO性能，但是小表可能会造成空间浪费。
- `DETAFILE 'DATA_FILE_NAME' SIZE FILE_SIZE`标识指定的数据文件的名称，其初始文件大小为`FILE_SIZE`。
- `AUTOEXTEND ON NEXT EXTEND_SIZE`设置自动扩展，既表空间数据插满`FILE_SIZE`后自动扩展`EXTEND_SIZE`。

示例：

创建一个名为`openGaussSpace`的表空间，一个`EXTENTS`包含`16`个`PAGE`，指定其数据文件为`openGaussSpace1`，数据文件的初始大小为`128M`，比设置自动扩展`64M`。

```sql
CREATE TABLESPACE openGaussSpace EXTENTS 16 DATAFILE 'openGaussSpace1' SIZE 128M AUTOEXTEND ON NEXT 64M;
-- 在该表空间上创建表结构并插入数据
CREATE TABLE DEPT(f1 INT, f2 INT, f3 INT) TABLESPACE OPENGAUSSSPACE;
INSERT INTO DEPT VALUES(1, 2, 3),(2, 3, 4),(null, 4, 5);
COMMIT;
```

### 表空间信息查看

DBA可通过`ADM_TABLESPACES`以及`ADM_SEGMENTS`查看表空间的相关信息，示例如下：

```sql
SQL> SELECT PAGE_SIZE, EXTENT_PAGES, DATAFILE_COUNT, TOTAL_SIZE, USED_SIZE FROM ADM_TABLESPACES WHERE TABLESPACE_NAME = 'OPENGAUSSSPACE';
PAGE_SIZE            EXTENT_PAGES DATAFILE_COUNT TOTAL_SIZE           USED_SIZE           
-------------------- ------------ -------------- -------------------- --------------------
8192                 16           1              134217728            147456              
                                               
SQL> SELECT SEGMENT_NAME, SEGMENT_TYPE, PAGES, EXTENTS FROM ADM_SEGMENTS WHERE TABLESPACE_NAME = 'OPENGAUSSSPACE';
SEGMENT_NAME                                                     SEGMENT_TYPE PAGES                EXTENTS             
---------------------------------------------------------------- ------------ -------------------- --------------------
DEPT                                                             TABLE        16                   1                   
```

### 表空间修改

​    用户可使用 `ALTER TABLESPACE` 命令修改表空间的名称，扩展或缩小表空间

```sql
-- 表空间名称修改
ALTER TABLESPACE TABLESPACE_NAME RENAME TO TABLESPACE_NAME_NEW;
-- 表空间扩展 增加DATAFILE
ALTER TABLESPACE TABLESPACE_NAME ADD DATAFILE 'FILE_NAME' SIZE FILE_SIZE;
-- 表空间删除DATAFILE
ALTER TABLESPACE TABLESPACE_NAME DROP DATAFILE 'FILE_NAME';
-- AUTOEXTEND的开启与关闭
ALTER TABLESPACE TABLESPACE_NAME AUTOEXTEND OFF[ON];
-- 表空间缩小
ALTER TABLESPACE TABLESPACE_NAME SHRINK SPACE KEEP FILE_SIZE;
```

示例：

```sql
-- 表空间名称修改
ALTER TABLESPACE openGaussSpace RENAME TO openGaussSpaceNew;
-- 扩展表空间增加DATAFILE
ALTER TABLESPACE openGaussSpace ADD DATAFILE 'openGaussSpace2' SIZE 128M;
-- 删除表空间的DATAFILE
ALTER TABLESPACE openGaussSpace DROP DATAFILE 'openGaussSpace2';
-- 自动扩展的开启与关闭
ALTER TABLESPACE openGaussSpace AUTOEXTEND OFF[ON];
-- 缩小表空间
ALTER TABLESPACE openGaussSpace SHRINK SPACE KEEP 200M;
```

### 表空间删除

 用户可使用 `DROP TABLESPACE` 命令删除手动创建的表空间，不能删除`SYSTEM`、`TEMP`、`UNDO`、`USERS`、`SYSAUX`表空间。

删除表空间前应查看表空间的使用情况，清空表空间的数据，最后再执行 `DROP TABLESPACE` 操作。

```sql
SELECT * FROM ADM_TABLESPACES WHERE TABLESPACE_NAME = 'OPENGAUSSSPACE';
SELECT * FROM ADM_SEGMENTS WHERE TABLESPACE_NAME = 'OPENGAUSSSPACE';
```

```sql
-- 删除表
DROP TABLE TABLE_NAME;
-- 清空表空间
PURGE TABLESPACE TABLESPACE_NAME;
-- 删除表空间
DROP TABLESPACE TABLESPACE_NAME;
```