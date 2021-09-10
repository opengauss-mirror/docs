# RELEASE SAVEPOINT<a name="ZH-CN_TOPIC_0289899874"></a>

## 功能描述<a name="zh-cn_topic_0283137262_zh-cn_topic_0237122177_zh-cn_topic_0059778044_section16730316162219"></a>

RELEASE SAVEPOINT删除一个当前事务先前定义的保存点。

把一个保存点删除就令其无法作为回滚点使用，除此之外它没有其它用户可见的行为。它并不能撤销在保存点建立起来之后执行的命令的影响。要撤销那些命令可以使用ROLLBACK TO SAVEPOINT 。在不再需要的时候删除一个保存点可以令系统在事务结束之前提前回收一些资源。

RELEASE SAVEPOINT也删除所有在指定的保存点建立之后的所有保存点。

## 注意事项<a name="zh-cn_topic_0283137262_zh-cn_topic_0237122177_zh-cn_topic_0059778044_section3731161611223"></a>

-   不能RELEASE一个没有定义的保存点，语法上会报错。
-   如果事务在回滚状态，则不能释放保存点。
-   如果多个保存点拥有同样的名称，只有最近定义的那个才被释放。

## 语法格式<a name="zh-cn_topic_0283137262_zh-cn_topic_0237122177_zh-cn_topic_0059778044_section1173201615228"></a>

```
RELEASE [ SAVEPOINT ] savepoint_name;
```

## 参数说明<a name="zh-cn_topic_0283137262_zh-cn_topic_0237122177_zh-cn_topic_0059778044_section1073417167224"></a>

**savepoint\_name**

要删除的保存点的名称

## 示例<a name="zh-cn_topic_0283137262_zh-cn_topic_0237122177_zh-cn_topic_0059778044_section147341160228"></a>

```
--创建一个新表。
openGauss=# CREATE TABLE tpcds.table1(a int);

--开启事务。
openGauss=# START TRANSACTION;

--插入数据。
openGauss=# INSERT INTO tpcds.table1 VALUES (3);

--建立保存点。
openGauss=# SAVEPOINT my_savepoint;

--插入数据。
openGauss=# INSERT INTO tpcds.table1 VALUES (4);

--删除保存点。
openGauss=# RELEASE SAVEPOINT my_savepoint;

--提交事务。
openGauss=# COMMIT;

--查询表的内容，会同时看到3和4。
openGauss=# SELECT * FROM tpcds.table1;

--删除表。
openGauss=# DROP TABLE tpcds.table1;
```

## 相关链接<a name="zh-cn_topic_0283137262_zh-cn_topic_0237122177_zh-cn_topic_0059778044_section1873501692219"></a>

[SAVEPOINT](SAVEPOINT.md)，[ROLLBACK TO SAVEPOINT](ROLLBACK-TO-SAVEPOINT.md)

