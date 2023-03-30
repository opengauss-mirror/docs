# 伪列ROWNUM<a name="ZH-CN_TOPIC_0000001152275227"></a>

## 可获得性<a name="section56086982"></a>

本特性自openGauss 1.0.1版本开始引入。

## 特性简介<a name="section35020791"></a>

ROWNUM为查询出来的每一行记录生成一个序号，从1开始依次递增且不会重复。

## 客户价值<a name="section46751668"></a>

-   兼容Oracle特性，方便数据库迁移。
-   与LIMIT特性类似，能够筛选出结果集的前n条记录。

## 特性描述<a name="section18111828"></a>

ROWNUM（伪列），给SQL查询中满足条件的记录按顺序标号得来。查询结果第一行ROWNUM为1，第二行为2，依次类推，第n行为n。通常用来筛选出查询结果集中的前n行数据，与openGauss中LIMIT功能类似。

## 特性增强<a name="section28788730"></a>

在内部执行时，优化器会将ROWNUM重写成LIMIT去执行，加快执行速率。

## 特性约束<a name="section06531946143616"></a>

-   ROWNUM是伪列，不可作为别名，以免SQL语句出现歧义；
-   创建索引时不可使用ROWNUM。例如：create index index\_name on table\(rownum\);
-   创建表时default值不可为ROWNUM。例如：create table table\_name\(id int default rownum\);
-   Where子句中不可使用rownum的别名。例如：select rownum rn from table where rn < 5;
-   在插入数据时不可使用ROWNUM。例如：insert into table values\(rownum,’blue’\);
-   不可在无表查询中使用ROWNUM。例如：select \* from \(values\(rownum,1\)\), x\(a,b\)；
-   若 having 子句中含有ROWNUM（且不在聚合函数中）时，group by子句中必须含有ROWNUM（且不在聚合函数中）。

## 依赖关系<a name="section57771982"></a>

无。

