# openGauss在线DDL特性简介

## 可获得性

本特性自openGauss 7.0.0-RC3 版本开始引入。

## 特性简介

在客户的业务场景中，openGauss部分DDL操作（如修改列类型、修改压缩属性、分区分裂合并等）需要重建数据，重建操作会将被操作表的已有数据经过重建处理后拷贝到新的数据文件中，该操作的执行时长和被操作表的数据量直接相关。此前openGauss除了在线创建索引场景都只支持离线DDL，此时如果对业务表进行DDL操作，会全程对该表加八级锁，在此期间并发业务对该表不可访问，进而阻塞业务。并且随着客户的业务表数据越来越大，这类DDL的执行时间甚至可能达数小时或数天，在DDL窗口期阻塞如此长时间的业务是不可接受的。
openGauss在线DDL (Online DDL) 特性主要功能是通过辅助表+追增的模式，缩短DDL操作持有八级锁的时间，允许并发业务在数据重建期间对被操作表执行DML、DQL操作，避免业务长时间阻塞，解决客户业务变更的痛点问题。

## 客户价值

openGauss在线DDL特性主要针对客户对大表进行DDL操作变更，并导致DDL线程需要对原表进行重建的场景。该特性允许DDL线程只在较短时间内持有八级锁，并在数据重建期间允许并发DML、DQL正常执行，避免DDL执行期间业务被长时间阻塞的问题，提高openGauss竞争力。

## 特性描述

openGauss在线DDL特性执行传统主备中Astore、段页式的普通表和分区表在线执行修改列数据类型、修改压缩属性、增加表约束(范围约束、非空约束)、分区表分裂合并分区、VACUUM FULL/CLUSTER。具体而言，在线DDL对 ALTER TABLE、VACUUM FULL、CLUSTER 语法新增了CONCURRENTLY关键字，用于触发在线DDL操作。在线DDL操作会将DDL操作分为 (1)DDL准备、(2)基线数据拷贝、(3)增量数据合并、 (4) DDL提交，共四个阶段。其中第一、第四阶段还需要短暂获取八级锁，第二、第三阶段作为DDL主要耗时阶段，以四级锁为主，允许并发DML操作。通过该特性可以提高DDL期间被操作表的并发能力，允许短事务对该表进行并发DML、DQL，避免阻塞业务。
为保证事务原子性、一致性。DDL事务和并发DML之间互相独立，在线DDL事务回滚不会导致已提交的并发DML事务数据丢失，并发DML事务回滚则不会追增至新表中。

为便于可视化online ddl运行状态，新增online_ddl_status视图，用于查询当前数据库的在线DDL事务运行状态。online_ddl_type列取值包括"CHECK"、"REWRITE"、"VACUUM"、"CLUSTER"、"INVALID"。status列取值包括"NONE"、"START"、"PREPARE"、"RERITE_CATALOG"、"BASELINE_COPY"、"CATCHUP"、"COMMITTING"、"END"、"UNKNOWN"。
| 列名            | 数据类型    | 描述                            |
| --------------- | ----------- | ------------------------------- |
| relid           | Oid         | 被操作表的oid                   |
| hash_entry_key  | text        | 被操作表的spcnode/dbnode/reloid |
| transaction_id  | int8        | 被操作表的基线事务id            |
| start_time      | timestamptz | online ddl启动时间              |
| online_ddl_type | text        | online ddl 类型                 |
| temp_schem_name | text        | 本次操作创建的临时schema的名字  |
| status          | text        | online ddl状态                  |
| extra_info      | text        | 额外信息                        |


## 特性增强

7.0.0-RC3 版本引入在线DDL功能增强特性，支持在线执行VACUUM FULL、CLUSTER、分区表分裂合并分区操作。同时新增online_ddl_status视图，用于查询当前数据库的在线DDL事务运行状态。

## 特性约束

- 本特性目前支持传统主备场景的Astore、段页式的分区表和普通表并发执行以下DDL操作：修改压缩属性、修改列数据类型和增加表约束（范围约束、非空约束）。
- 在线DDL操作不意味不会对表加锁，还是会在DDL部分流程对表加排他锁，只是DDL持八级锁时间会变短很多。此外，数据追增阶段需要保证追增数据已提交才能追增。因此本特性不适用于存在对被操作表并发修改的长事务的业务场景，否则可能导致在线DDL线程被阻塞。
- 新增数据和已有数据需要满足ALTER TABLE后的相关约束，否则在线DDL操作会报错。
- 沿用在线创建索引的约束：不支持显式事务内执行在线DDL，不支持带global索引的分区表执行在线DDL。
- 在线DDL操作分为2个事务，如果第二个事务报错回滚，会导致第一个事务创建的临时schema和临时表暂时残留，后续由two phase cleaner线程定期清理。
- 离线VACUUM FULL/CLUSTER操作在主要流程持有七级锁，为保证数据一致性，在线VACUUM FULL/CLUSTER会在准备阶段和DDL提交阶段加八级锁。
- 在线VACUUM FULL/CLUSTER操作会按照对应的规则重新整理基线数据，新增数据则会基于appned only原则追增到数据末尾。
- 在线VACUUM FULL重建分区表时，会对每个分区分别进行在线VACUUM FULL操作。如果执行过程中报错，对于已经完成重建的分区，在线VACUUM FULL操作不会回滚。
## 依赖关系

无。

## 基本原理

本特性的整体思路如下：先将旧表拷贝至基于新的元数据创建的新表，然后追增并发DML在旧表新增的数据。引入ddlDeltaLog表记录在线DDL期间所有并发INSERT/UPDATE/DELETE操作，包括操作类型及该记录在旧表的ctid，同时引入ctidMap表记录新旧表之间的ctid映射关系。在追增数据时，遍历ddlDeltalLog，针对每一条日志，根据操作类型和ctidMap中映射的新表ctid同步更新新表。具体分为以下4个阶段：

1. 准备阶段
    (1) 创建临时schema、追增日志表ddlDeltaLog表、向ddlDeltaLogs全局hash表注册本次在线DDL的信息。
    (2) 获取快照sp1，用于扫描基线数据。
    (3) 重启新事务，使ddlDeltaLog对外可见。
    (4) 用四级锁重新打开表，释放八级锁，此后允许并发DML操作。
2. 基线数据拷贝阶段
    (1) 创建ddlCtidMap用于记录新旧表ctid映射关系。
    (2) 用获取快照sp1快照扫描旧表，并拷贝至临时表temp_table，并把新旧表的ctid映射关系记录到ddlCtidMap。
3. 增量数据合并阶段
    (1) 多次遍历ddlDeltalog，每次遍历根据ddlDeltaLog中的记录向temp_table追增数据。
4. DDL提交阶段
    (1) 重新获取八级锁。
    (2) 最后一次追增，将ddlDeltaLog所有剩余日志全部同步到新表。
    (3) 交换新旧表的relfilenode。
    (4) 清理在线DDL相关信息，提交事务。

## 使用指导

openGauss在线DDL特性涉及传统主备中Astore、段页式支持修改列数据类型、修改压缩属性、添加约束(包括范围约束和非空约束)、VACUUM FULL、CLUSTER、分区表分裂合并分区，并新增关键字CONCURRENTLY用于触发在线DDL功能：

```sql
ALTER TABLE [CONCURRENTLY] table_name ......
```

以普通表table为例，在线DDL的相关语法如下：

```sql
drop table if exists employee;
CREATE TABLE employee (
    id      INT,
    name    VARCHAR,
    email   VARCHAR,
    age     INT
);
CREATE INDEX idx_employee ON employee (id);
```

- 修改字段的数据类型:

```sql
ALTER TABLE CONCURRENTLY employee ALTER COLUMN age TYPE VARCHAR;
```

- 修改行存压缩属性: 

```sql
ALTER TABLE CONCURRENTLY employee SET (compresstype = 2, compress_level = 30);
```

- 给表增加非空约束: 

```sql
ALTER TABLE CONCURRENTLY employee ALTER id SET NOT NULL;
```

- 给表增加范围约束:

```sql
ALTER TABLE CONCURRENTLY emplyee ADD CONSTRAINT chk_employee_age (age >=18 AND age <=65);
```

对表做在线VACUUM FULL:
```sql
VACUUM FULL CONCURRENTLY employee;
```

对表做在线CLUSTER:
```sql
CLUSTER CONCURRENTLY employee USING idx_employee;
```

以分区表orders为例:
```sql
drop table if exists orders;
CREATE TABLE orders (
    order_id    INT          NOT NULL,
    customer_id INT,
    product_name VARCHAR(100),
    region      VARCHAR(50)
)
PARTITION BY RANGE (order_id)
(
    PARTITION p1 VALUES LESS THAN (1000),
    PARTITION p2 VALUES LESS THAN (2000),
    PARTITION p3 VALUES LESS THAN (3000),
    PARTITION p4 VALUES LESS THAN (MAXVALUE)
);
CREATE INDEX idx_orders ON orders (customer_id) local;
```

对整个表执行vacuum full concurrently
```sql
VACUUM FULL CONCURRENTLY orders;
```

对分区p1执行vacuum full concurrently
```sql
VACUUM FULL CONCURRENTLY orders partition(p1);
```

对整个表执行cluster concurrently
```sql
CLUSTER CONCURRENTLY orders USING idx_orders;
```

对分区p1执行cluster concurrently
```sql
cluster CONCURRENTLY orders partition(p1) USING idx_orders;
```

将分区p1分裂成p11和p12
```sql
ALTER TABLE CONCURRENTLY orders SPLIT PARTITION p1 AT (500) INTO (PARTITION p11, PARTITION p12);
```

将分区p3和p3合并成p5
```sql
ALTER TABLE CONCURRENTLY orders MERGE PARTITIONS p3, p4 INTO PARTITION p5;
```

此外，在线DDL新增SIGHUP级参数log_online_ddl_level，用于调整在线DDL日志打印级别，该参数仅用于功能验证，正常使用不建议开启。

新增系统函数online_ddl_status()，用于查询当前数据库的在线DDL事务运行状态。
```sql
SELECT * FROM online_ddl_status();
```


## 使用场景

openGauss传统主备场景对大表进行DDL操作并且需要重建数据的场景，如修改列数据类型、修改行存压缩属性、添加约束（不用重建但需要扫表，包括非空约束、范围约束）、VACUUM FULL、CLUSTER、分区表分裂合并分区等。
