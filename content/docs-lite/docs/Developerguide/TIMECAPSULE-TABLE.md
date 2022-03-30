# TIMECAPSULE TABLE<a name="ZH-CN_TOPIC_0000001151110015"></a>

## 功能描述<a name="section1788163418319"></a>

在人为操作或应用程序错误时，使用TIMECAPSULE TABLE语句恢复可将表恢复到一个早期状态。

表可以闪回到过去的时间点，这依赖于系统中保存的旧版本数据。此外openGauss数据库不能恢复到通过DDL操作改变了表结构的早期状态。

## 注意事项<a name="section3945357031"></a>

-   TIMECAPSULE TABLE语句的用法主要分为两大类：闪回旧版本数据和从回收站中闪回。
    -   TO TIMECAPSULE和TO CSN能够将表闪回到过去的某个版本。
    -   回收站记录了DROP和TRUNCATE的对象数据。TO BEFORE DROP和TO BEFORE TRUNCATE就是从回收站中闪回。

-   不支持闪回表的对象类型：系统表、列存表、内存表、DFS表、全局临时表、本地临时表、UNLOGGED表、序列表、hashbucket表。
-   闪回点和当前点之间，执行过修改表结构或影响物理存储的语句（DDL、DCL、VACUUM FULL），闪回失败。

-   执行闪回删除需要用户具有如下权限：用户必须具有垃圾对象所在schema的create和usage权限，并且用户必须是schema的所有者或者是垃圾对象的所有者。

    执行闪回TRUNCATE需要用户具有如下权限：用户必须具有垃圾对象所在schema的create和usage权限，并且用户必须是schema的所有者或者是垃圾对象的所有者，另外用户必须具有垃圾对象的TRUNCATE权限。

-   不适用闪回drop/truncate功能的场景或表：
    -   回收站关闭场景：enable\_recyclebin = off；
    -   系统处于维护态（xc\_maintenance\_mode = on）或升级场景；
    -   多对象删除场景：DROP/TRUNCATE TABLE命令同时指定多个对象；
    -   系统表、列存表、内存表、DFS表、全局临时表、本地临时表、UNLOGGED表、序列表、hashbucket表。


## 语法格式<a name="section34914247413"></a>

```
TIMECAPSULE TABLE [schema.]table_name TO { CSN expr | TIMESTAMP expr | BEFORE { DROP [RENAME TO table_name] | TRUNCATE } }
```

## 参数说明<a name="section1168716336410"></a>

-   **schema\_name**

    指定模式包含的表。如果缺省，则为当前模式。

-   **table\_name**

    指定表名。


-   **TO CSN**

    指定要返回表的时间点对应的事务提交序列号（CSN）。expr必须计算一个数字，代表有效的CSN。

-   **TO TIMESTAMP**

    指定要返回表的时间点对应的时间戳。expr必须计算一个过去有效的时间戳（使用TO\_TIMESTAMP函数将字符串转换为时间类型）。表将被闪回到指定时间戳大约3秒内的时间点。

    说明：闪回点过旧时，因旧版本被回收导致无法获取旧版本，会导致闪回失败并报错：Restore point too old。

-   **TO BEFORE DROP**

    使用这个子句检索回收站中已删除的表及其子对象。

    你可以指定原始用户指定的表的名称，或对象删除时数据库分配的系统生成名称。

    -   回收站中系统生成的对象名称是唯一的。因此，如果指定系统生成名称，那么数据库检索指定的对象。使用“select  \* from gs\_recyclebin;”语句查看回收站中的内容。
    -   如果指定了用户指定的名称，且如果回收站中包含多个该名称的对象，然后数据库检索回收站中最近移动的对象。如果想要检索更早版本的表，你可以这样做：

        -   指定你想要检索的表的系统生成名称。

        -   执行TIMECAPSULE TABLE ... TO BEFORE  DROP语句，直到你要检索的表。

    -   恢复DROP表时，只恢复基表名，其他子对象名均保持回收站对象名。用户可根据需要，执行DDL命令手工调整子对象名。
    -   回收站对象不支持DML、DCL、DDL等写操作，不支持DQL查询操作（后续支持）。
    -   recyclebin\_retention\_time配置参数用于设置回收站对象保留时间，超过该时间的回收站对象将被自动清理。

-   **RENAME  TO**

    为从回收站中检索的表指定一个新名称。

-   **TRUNCATE**

    闪回到TRUNCATE之前。


## 示例<a name="section1596654110417"></a>

```
-- 删除表tpcds.reason_t2
DROP TABLE IF EXISTS tpcds.reason_t2;
-- 创建表tpcds.reason_t2
openGauss=# CREATE TABLE tpcds.reason_t2
 (
  r_reason_sk    integer,
  r_reason_id    character(16),
  r_reason_desc  character(100)
  );
--向表tpcds.reason_t2中插入记录
openGauss=#  INSERT INTO tpcds.reason_t2 VALUES (1, 'AA', 'reason1'),(2, 'AB', 'reason2'),(3, 'AC', 'reason3');
INSERT 0 3
--清空tpcds.reason_t2表中的数据
openGauss=#  TRUNCATE TABLE tpcds.reason_t2;
--查询tpcds.reason_t2表中的数据
openGauss=#  select * from tpcds.reason_t2;
 r_reason_sk | r_reason_id | r_reason_desc 
-------------+-------------+---------------
(0 rows)
--执行闪回TRUNCATE
openGauss=#  TIMECAPSULE TABLE tpcds.reason_t2 to BEFORE TRUNCATE;
openGauss=#  select * from tpcds.reason_t2;
 r_reason_sk |   r_reason_id    |                                            r_reason_desc                                             
-------------+------------------+------------------------------------------------------------------------------------------------------
           1 | AA               | reason1                                                                                             
           2 | AB               | reason2                                                                                             
           3 | AC               | reason3                                                                                             
(3 rows)
--删除表tpcds.reason_t2
openGauss=#  DROP TABLE tpcds.reason_t2;
--执行闪回DROP
openGauss=#  TIMECAPSULE TABLE tpcds.reason_t2 to BEFORE DROP;
TimeCapsule Table
```

