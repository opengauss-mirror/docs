# USE db_name<a name="ZH-CN_TOPIC_0289900448"></a>

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

USE db_name语句将db_name数据库作为默认（当前）数据库使用，用于后续语句。该数据库保持为默认数据库，直到语段的结尾，或者直到发布一个不同的USE语句。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

N/A

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
USE db_name
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **db_name**

  ​    数据库名。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--切换到db1库
openGauss=# USE db1;
SET
openGauss=# CREATE TABLE test(a text);
CREATE TABLE
openGauss=# INSERT INTO test VALUES('db1');
INSERT 0 1

--切换到db2库
openGauss=# USE db2;
SET
openGauss=# CREATE TABLE test(a text);
CREATE TABLE
openGauss=# INSERT INTO test VALUES('db2');
INSERT 0 1
openGauss=# select a from db1.test;
  a  
-----
 db1
(1 row)

openGauss=# select a from db2.test;
  a  
-----
 db2
(1 row)

openGauss=# select a from test;
  a  
-----
 db2
(1 row)

--切换到db1库
openGauss=# USE db1;
SET
openGauss=# select a from test;
  a  
-----
 db1
(1 row)
```

## 相关链接<a name="section156744489391"></a>

N/A