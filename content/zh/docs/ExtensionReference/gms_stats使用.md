# gms_stats使用

## 创建Extension<a name="section21088306113"></a>

创建gms_stats Extension可直接使用CREATE Extension命令进行创建：

```
openGauss=# CREATE Extension gms_stats;
```

## 使用Extension<a name="section107391050141118"></a>


创建用于测试的schema,table和materialized view.

```sql
openGauss=# create schema gms_stats_test;
CREATE SCHEMA
openGauss=# set search_path=gms_stats_test;
SET
openGauss=# create table normal_table(a int, b char(10));
CREATE TABLE
openGauss=# insert into normal_table select generate_series(1,500), 'abc';
INSERT 0 500
openGauss=# 
openGauss=# create table partition_table(a int) partition by range(a) (partition p1 values less than(100),partition p2 values less than(maxvalue));
CREATE TABLE
openGauss=# insert into partition_table select generate_series(1,600);
INSERT 0 600
openGauss=# 
openGauss=# create materialized view mv_tb as select * from normal_table;
CREATE MATERIALIZED VIEW
openGauss=# 
openGauss=# select schemaname, tablename, attname, avg_width, most_common_vals, most_common_freqs from pg_stats where schemaname='gms_stats_test' order by tablename, attname;
 schemaname | tablename | attname | avg_width | most_common_vals | most_common_freqs 
------------+-----------+---------+-----------+------------------+-------------------
(0 rows)
```

查询结果

```
openGauss=# begin
openGauss$# gms_stats.gather_schema_stats('gms_stats_test');
openGauss$# end;
openGauss$# /
NOTICE:  PL/SQL procedure successfully completed.
CONTEXT:  SQL statement "CALL gms_stats.gather_schema_stats('gms_stats_test')"
PL/pgSQL function inline_code_block line 2 at PERFORM
ANONYMOUS BLOCK EXECUTE
openGauss=# select schemaname, tablename, attname, avg_width, most_common_vals, most_common_freqs from pg_stats where schemaname='gms_stats_test' order by tablename, attname;
   schemaname   |    tablename    | attname | avg_width | most_common_vals | most_common_freqs 
----------------+-----------------+---------+-----------+------------------+-------------------
 gms_stats_test | mv_tb           | a       |         4 |                  | 
 gms_stats_test | mv_tb           | b       |        11 | {"abc       "}   | {1}
 gms_stats_test | normal_table    | a       |         4 |                  | 
 gms_stats_test | normal_table    | b       |        11 | {"abc       "}   | {1}
 gms_stats_test | partition_table | a       |         4 |                  | 
(5 rows)

## 删除Extension<a name="section1587441381220"></a>

在openGauss中删除gms_stats Extension的方法如下所示：

```
openGauss=# DROP Extension gms_stats [CASCADE];
```

>![](public_sys-resources/icon-note.png) **说明：** 
>
>如果Extension被其它对象依赖，需要加入CASCADE（级联）关键字，删除所有依赖对象。
