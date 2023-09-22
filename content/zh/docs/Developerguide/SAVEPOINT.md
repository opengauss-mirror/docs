# SAVEPOINT<a name="ZH-CN_TOPIC_0289899933"></a>

## 功能描述<a name="zh-cn_topic_0283137144_zh-cn_topic_0237122183_zh-cn_topic_0059777880_section532518817713"></a>

SAVEPOINT用于在当前事务里建立一个新的保存点。

保存点是事务中的一个特殊记号，它允许将那些在它建立后执行的命令全部回滚，把事务的状态恢复到保存点所在的时刻。

## 注意事项<a name="zh-cn_topic_0283137144_zh-cn_topic_0237122183_zh-cn_topic_0059777880_section7325138279"></a>

-   使用ROLLBACK TO SAVEPOINT回滚到一个保存点。使用RELEASE SAVEPOINT删除一个保存点，但是保留该保存点建立后执行的命令的效果。
-   保存点只能在一个事务块里面建立。在一个事务里面可以定义多个保存点。
-   由于节点故障或者通信故障引起的节点线程或进程退出导致的报错，以及由于COPY FROM操作中源数据与目标表的表结构不一致导致的报错，均不能正常回滚到保存点之前，而是整个事务回滚。
-   SQL标准要求，使用savepoint建立一个同名保存点时，需要自动删除前面那个同名保存点。在openGauss数据库里，我们将保留旧的保存点，但是在回滚或者释放的时候，只使用最近的那个。释放了新的保存点将导致旧的再次成为ROLLBACK TO SAVEPOINT和RELEASE SAVEPOINT可以访问的保存点。除此之外，SAVEPOINT是完全符合SQL标准的。

## 语法格式<a name="zh-cn_topic_0283137144_zh-cn_topic_0237122183_zh-cn_topic_0059777880_section173261081673"></a>

```
SAVEPOINT savepoint_name;
```

## 参数说明<a name="zh-cn_topic_0283137144_zh-cn_topic_0237122183_zh-cn_topic_0059777880_section7327198178"></a>

savepoint\_name

新建保存点的名称。

## 示例<a name="zh-cn_topic_0283137144_zh-cn_topic_0237122183_zh-cn_topic_0059777880_section11329989719"></a>

```
--创建一个新表。
openGauss=# CREATE TABLE table1(a int);

--开启事务。
openGauss=# START TRANSACTION;

--插入数据。
openGauss=# INSERT INTO table1 VALUES (1);

--建立保存点。
openGauss=# SAVEPOINT my_savepoint;

--插入数据。
openGauss=# INSERT INTO table1 VALUES (2);

--回滚保存点。
openGauss=# ROLLBACK TO SAVEPOINT my_savepoint;

--插入数据。
openGauss=# INSERT INTO table1 VALUES (3);

--提交事务。
openGauss=# COMMIT;

--查询表的内容，会同时看到1和3,不能看到2，因为2被回滚。
openGauss=# SELECT * FROM table1;

--删除表。
openGauss=# DROP TABLE table1;

--创建一个新表。
openGauss=# CREATE TABLE table2(a int);

--开启事务。
openGauss=# START TRANSACTION;

--插入数据。
openGauss=# INSERT INTO table2 VALUES (3);

--建立保存点。
openGauss=# SAVEPOINT my_savepoint;

--插入数据。
openGauss=# INSERT INTO table2 VALUES (4);

--删除保存点。
openGauss=# RELEASE SAVEPOINT my_savepoint;

--提交事务。
openGauss=# COMMIT;

--查询表的内容，会同时看到3和4。
openGauss=# SELECT * FROM table2;

--删除表。
openGauss=# DROP TABLE table2;
```

## 相关链接<a name="zh-cn_topic_0283137144_zh-cn_topic_0237122183_zh-cn_topic_0059777880_section183301781176"></a>

[RELEASE SAVEPOINT](RELEASE-SAVEPOINT.md)，[ROLLBACK TO SAVEPOINT](ROLLBACK-TO-SAVEPOINT.md)

