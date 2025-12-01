# OPTIMIZE TABLE 

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

重建表和索引的物理空间，释放可回收空间给操作系统，并更新相关表的统计信息。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   需要表vacuum/owner或superuser权限。
-   b数据库的optimize操作支持多表，openGauss的optimize操作只支持单表。
-   b数据库的optimize属于Online DDL操作，处理过程的主要阶段不影响表的读写；但openGauss的optimize会阻塞表的读写，表数据量较大时可能会存在长时间锁表情况，请谨慎操作。
-   optimize也会被其他事务或两阶段事务阻塞。
-   尽量不要并发执行optimize多张表，如果需要并发执行，请降低并发数量，一般在3以下。
-   执行optimize时需要确保数据目录当前剩余空间大于该表当前占用空间，不然可能会失败。
-   表在短时间内删除大量数据后不要立即执行optimize，尝试等待几秒或执行若干其他事务后再执行，不然可能出现元组处于HEAPTUPLE_RECENTLY_DEAD状态无法正常回收的情况。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
OPTIMIZE [VERBOSE] [NO_WRITE_TO_BINLOG | LOCAL] TABLE tbl_name

```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **[VERBOSE]**

       查看optimize处理详情，可缺省。

- **[NO_WRITE_TO_BINLOG | LOCAL]**

       仅兼容语法，无实际效果，可缺省。

- **tbl_name**

       表名，可指定表名。也可以指定schema_name.table_name。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--创建doc表
openGauss=# create table doc(id serial primary key, content varchar(255));
NOTICE:  CREATE TABLE will create implicit sequence "doc_id_seq" for serial column "doc.id"
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "doc_pkey" for table "doc"
CREATE TABLE

--插入10000条数据
openGauss=# insert into doc(content) select 'abcd1234' from generate_series(1,10000) as content;
INSERT 0 100000

--删除9000条数据
openGauss=# delete from doc where id <= 9000;
DELETE 9000

--optimize表
openGauss=# optimize table doc;
VACUUM

--optimize表（查看处理详情）
openGauss=# optimize verbose table doc;
INFO:  vacuuming "public.doc"(primary pid=24692)
INFO:  "doc": found 9000 removable, 1000 nonremovable row versions in 55 pages(primary pid=24692)
DETAIL:  0 dead row versions cannot be removed yet.
CPU 0.00s/0.04u sec elapsed 0.04 sec.
INFO:  analyzing "public.doc"(primary pid=24692)
INFO:  ANALYZE INFO : "doc": scanned 6 of 6 pages, containing 1000 live rows and 0 dead rows; 1000 rows in sample, 1000 estimated total rows(primary pid=24692)
VACUUM
```
