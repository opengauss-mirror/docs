# SHOW STORAGE ENGINES 

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

列出支持的存储引擎信息。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-  结果为系统对执行语句的用户所支持的存储引擎。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW [STORAGE] ENGINES
```

## 字段说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **Engine**

       存储引擎名称。

- **Support**

       存储引擎支持情况，取值为DEFAULT、YES、NO。DEFAULT为默认创建该存储引擎的表，YES为可支持创建该存储引擎的表，NO为不支持。

- **Comment**

       存储引擎说明。

- **Transactions**

       存储引擎对事务的支持情况。

- **XA**

       存储引擎对XA事务的支持情况（暂为空）。

- **Savepoints**

       存储引擎对Savepoint的支持情况。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
testdb_m=# show storage engines;
 Engine  | Support |            Comment             | Transactions | XA | Savepoints 
---------+---------+--------------------------------+--------------+----+------------
 ASTORE  | DEFAULT | Append Update Storage Engine   | YES          |    | YES
 USTORE  | YES     | In-place Update Storage Engine | YES          |    | YES
 row     | DEFAULT | Row-Oriented Table             | YES          |    | YES
 column  | YES     | Column-Oriented Table          | YES          |    | YES
 mot_fdw | NO      | Memory-Optimized Table         | YES          |    | NO
(5 rows)

```
