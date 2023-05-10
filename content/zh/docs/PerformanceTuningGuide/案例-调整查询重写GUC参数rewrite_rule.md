# 案例：调整查询重写GUC参数rewrite\_rule

rewrite\_rule包含了多个查询重写规则：magicset、partialpush、uniquecheck、disablerep、intargetlist、predpush。下面简要说明一下其中重要的几个规则的使用场景：

## 目标列子查询提升参数intargetlist<a name="section66521181379"></a>

通过将目标列中子查询提升，转为JOIN，往往可以极大提升查询性能。举例如下查询：

```
openGauss=#  set rewrite_rule='none';
SET
openGauss=# create table t1(c1 int,c2 int);
CREATE TABLE
openGauss=# create table t2(c1 int,c2 int);
CREATE TABLE
openGauss=#  explain (verbose on, costs off) select c1,(select avg(c2) from t2 where t2.c2=t1.c2) from t1 where t1.c1<100 order by t1.c2;
                  QUERY PLAN
-----------------------------------------------
 Sort
   Output: t1.c1, ((SubPlan 1)), t1.c2
   Sort Key: t1.c2
   ->  Seq Scan on public.t1
         Output: t1.c1, (SubPlan 1), t1.c2
         Filter: (t1.c1 < 100)
         SubPlan 1
           ->  Aggregate
                 Output: avg(t2.c2)
                 ->  Seq Scan on public.t2
                       Output: t2.c1, t2.c2
                       Filter: (t2.c2 = t1.c2)
(12 rows)
```

由于目标列中的相关子查询\(select avg\(c2\) from t2 where t2.c2=t1.c2\)无法提升的缘故，导致每扫描t1的一行数据，就会触发子查询的一次执行，效率低下。如果打开intargetlist参数会把子查询提升转为JOIN，来提升查询的性能：

```
openGauss=#  set rewrite_rule='intargetlist';
SET
openGauss=# explain (verbose on, costs off) select c1,(select avg(c2) from t2 where t2.c2=t1.c2) from t1 where t1.c1<100 order by t1.c2;
                  QUERY PLAN
-----------------------------------------------
 Sort
   Output: t1.c1, (avg(t2.c2)), t1.c2
   Sort Key: t1.c2
   ->  Hash Left Join
         Output: t1.c1, (avg(t2.c2)), t1.c2
         Hash Cond: (t1.c2 = t2.c2)
         ->  Seq Scan on public.t1
               Output: t1.c1, t1.c2
               Filter: (t1.c1 < 100)
         ->  Hash
               Output: (avg(t2.c2)), t2.c2
               ->  HashAggregate
                     Output: avg(t2.c2), t2.c2
                     Group By Key: t2.c2
                     ->  Seq Scan on public.t2
                           Output: t2.c2
(16 rows)
```

## 提升无agg的子查询uniquecheck<a name="section20180151614815"></a>

子链接提升需要保证对于每个条件只有一行输出，对于有agg的子查询可以自动提升，对于无agg的子查询如：

select t1.c1 from t1 where t1.c1 = \(select t2.c1 from t2 where t1.c1=t2.c2\) ;

重写为：

select t1.c1 from t1 join \(select t2.c1 from t2 where t2.c1 is not null group by t2.c1\(unique check\)\) tt\(c1\) on tt.c1=t1.c1;

为了保证语义等价，子查询tt必须保证对于每个group by t2.c1只能有一行输出。打开uniquecheck查询重写参数保证可以提升并且等价，如果在运行时输出了多于一行的数据，就会报错。

```
openGauss=# set rewrite_rule='uniquecheck';
SET
openGauss=#  explain verbose select t1.c1 from t1 where t1.c1 = (select t2.c1 from t2 where t1.c1=t2.c1);
                                     QUERY PLAN
-------------------------------------------------------------------------------------
 Hash Join  (cost=43.36..104.40 rows=2149 distinct=[200, 200] width=4)
   Output: t1.c1
   Hash Cond: (t1.c1 = subquery."?column?")
   ->  Seq Scan on public.t1  (cost=0.00..31.49 rows=2149 width=4)
         Output: t1.c1, t1.c2
   ->  Hash  (cost=40.86..40.86 rows=200 width=8)
         Output: subquery."?column?", subquery.c1
         ->  Subquery Scan on subquery  (cost=36.86..40.86 rows=200 width=8)
               Output: subquery."?column?", subquery.c1
               ->  HashAggregate  (cost=36.86..38.86 rows=200 width=4)
                     Output: t2.c1, t2.c1
                     Group By Key: t2.c1
                     Filter: (t2.c1 IS NOT NULL)
                     Unique Check Required
                     ->  Seq Scan on public.t2  (cost=0.00..31.49 rows=2149 width=4)
                           Output: t2.c1
(16 rows)
```

注意：因为分组group by t2.c1 unique check发生在过滤条件tt.c1=t1.c1之前，可能导致原来不报错的查询重写之后报错。举例：

有t1,t2表，其中的数据为：

```
openGauss=#  select * from t1 order by c2;
 c1 | c2
----+----
  1 |  1
  2 |  2
  3 |  3
(3 rows)
openGauss=#  select * from t2 order by c2;
 c1 | c2
----+----
  1 |  1
  2 |  2
  3 |  3
  4 |  4
  4 |  4
  5 |  5
(6 rows)
```

分别关闭和打开uniquecheck参数对比，打开之后报错。

```
openGauss=#  select t1.c1 from t1 where t1.c1 = (select t2.c1 from t2 where t1.c1=t2.c2) ;
 c1
----
  1
  2
  3
(3 rows)
openGauss=#  set rewrite_rule='uniquecheck';
SET
openGauss=#  select t1.c1 from t1 where t1.c1 = (select t2.c1 from t2 where t1.c1=t2.c2) ;
ERROR:  more than one row returned by a subquery used as an expression
```

