# SQL防火墙能力

## 可获得性<a name="section14707931165614"></a>

本特性自openGauss 7.0.0-RC2版本开始引入。

## 特性简介<a name="section43398242"></a>

该特性通过配置SQL防火墙规则，限制指定SQL的执行并发数，保证业务的稳定性和健壮性。

## 客户价值<a name="section55039858"></a>

在生产环境中，会出现如下场景：1、某类SQL并发急剧上升，可能是由于异常调用；2、未优化SQL，这些场景会导致SQL在执行时资源被大量占用，影响其他SQL的执行。通过本特性，可以限制指定SQL的执行并发数，保证业务的稳定性和健壮性。

## 特性描述<a name="section25596675"></a>

该特性通过系统表和系统函数实现SQL防火墙规则的配置，在业务SQL执行时，通过检查是否匹配SQL防火墙规则，如果匹配则拦截报错，否则继续执行。

## 特性增强<a name="section29043486"></a>

无。

## 特性约束<a name="section27741012910"></a>

- 该特性需要打开enable_sql_limit参数。

- 不支持游标、存储过程、多语句、触发器场景。

- 不能对驱动连接涉及的SQL语句（如：select name,setting from pg_settings where name in ('connection_info')）进行限制。

- 备机SQL防火墙规则的生效依赖于xlog日志的同步，如果备机xlog日志堆积过多，可能导致备机SQL防火墙规则的生效时间延迟。

- SQL防火墙规则会影响业务性能，SQL防火墙规则越多，规则匹配时间越长，对业务性能的影响越大，所以使用时仅保留必要的SQL防火墙规则。

## 依赖关系<a name="section57771982"></a>

无

## 基本原理<a name="section8406643144717"></a>

通过系统函数新增、修改、删除、查询SQL防火墙规则，配置SQL防火墙规则时，支持指定unique_sql_id或关键字的两种方式；业务SQL执行时，在analyze和rewrite阶段之后，可以获取SQL的unique_sql_id；对于指定unique_sql_id的规则，直接匹配unique_sql_id是否一致，对于指定关键字的规则，通过关键字匹配SQL，如果匹配到对应的规则，则判断当前并发数是否超过规则配置的并发数，如果超过则拦截报错，否则继续执行。

## 使用场景<a name="section8406643144719"></a>

在业务需要限制指定SQL的执行并发数时，可以通过本特性进行配置。

## 使用指导<a name="section8406643144718"></a>

参考[SQL防火墙系统函数](../SQLReference/SQL防火墙系统函数.md)。

1、新增SQL防火墙规则

```sql
openGauss=# select gs_create_sql_limit('query_1','sqlid',0,0,'','','{3466980236}','{db1}','{usr1}');
 gs_create_sql_limit
--------------------
                  1
(1 row)

openGauss=# select gs_create_sql_limit('rule_keywords','select',0,0,'now()','','{select,count,from,test,where,i,>,and,i,<}','','');
 gs_create_sql_limit
--------------------
                  2
(1 row)
```

2、修改SQL防火墙规则

```sql
openGauss=# select gs_update_sql_limit(1,'sqlid',0,100,'','','{3466980236}','{db1}','{usr1}');
 gs_update_sql_limit
--------------------
                  1
(1 row)

openGauss=# select gs_update_sql_limit(2,'select',0,100,'','','{select,count,from,test,where,i,>,and,i,<}','','');
 gs_update_sql_limit
--------------------
                  2
(1 row)
```

3、查询SQL防火墙规则

查询指定的规则ID

```sql
openGauss=# select * from gs_select_sql_limit(1);
 limit_id | is_valid | work_node | max_concurrency | hit_count | reject_count
---------+----------+-----------+-----------------+-----------+--------------
       1 | t        | 0         |             100 |         0 |            0
(1 row)
```

查询所有规则

```sql
openGauss=# select * from gs_select_sql_limit();
 limit_id | is_valid | work_node | max_concurrency | hit_count | reject_count
---------+----------+-----------+-----------------+-----------+--------------
       1 | t        | 0         |             100 |         0 |            0
       2 | t        | 0         |             100 |         0 |            0
(2 rows)
```

4、删除SQL防火墙规则

```sql
openGauss=# select gs_delete_sql_limit(1);
 gs_delete_sql_limit
---------------------
                  1
(1 row)

openGauss=# select gs_delete_sql_limit(2);
 gs_delete_sql_limit
---------------------
                  2
(1 row)
```
