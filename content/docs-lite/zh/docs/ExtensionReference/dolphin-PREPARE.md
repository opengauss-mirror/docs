# PREPARE

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

创建一个预备语句。

预备语句是服务端的对象，可以用于优化性能。在执行PREPARE语句的时候，指定的查询被解析、分析、重写。当随后发出EXECUTE语句的时候，预备语句被规划和执行。这种设计避免了重复解析、分析工作。PREPARE语句创建后在整个数据库会话期间一直存在，一旦创建成功，即便是在事务块中创建，事务回滚，PREPARE也不会删除。只能通过显式调用DEALLOCATE进行删除，会话结束时，PREPARE也会自动删除。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>
相比于原始的openGauss，dolphin对于PREPARE语法的修改为：

1. 支持 PREPARE FROM 语法。

2. statement 支持加单引号，且单引号内的statement必须是单个query。加单引号的场景，statement除了```SELECT、INSERT、UPDATE、DELETE、MERGE INTO或VALUES```语句外，还支持其他最终会转换成SelectStmt的语句，如部分```SHOW```系列语句等。

3. statement 中的绑定参数支持使用```?```，需要先将```dolphin.b_compatibility_mode```设置为```on```，且不能同时在一个语句中同时使用```$```和```?```作为参数占位符。将```dolphin.b_compatibility_mode```设置为```on```后，```?```将不能作为操作符使用。

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
PREPARE name [ ( data_type [, ...] ) ] { AS | FROM } statement;
PREPARE name [ ( data_type [, ...] ) ] { AS | FROM } 'statement';
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **name**

    指定预备语句的名称。它必须在该会话中是唯一的。

- **data_type**

    参数的数据类型。

- **statement**

    是SELECT INSERT、UPDATE、DELETE、MERGE INTO或VALUES语句之一。

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
openGauss=# CREATE TABLE test(name text, age int);
CREATE TABLE
openGauss=# INSERT INTO test values('a',18);
INSERT 0 1
openGauss=# PREPARE stmt FROM SELECT * FROM test;
PREPARE
openGauss=# EXECUTE stmt;
 name | age 
------+-----
 a    |  18
(1 row)
openGauss=# set dolphin.b_compatibility_mode to on;
SET
openGauss=# PREPARE stmt1 FROM 'SELECT sqrt(pow(?,2) + pow(?,2)) as test';;
PREPARE
openGauss=# EXECUTE stmt1 USING 6,8;
 test
------
   10
(1 row)
```
