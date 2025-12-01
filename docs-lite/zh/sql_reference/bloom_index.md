# BLOOM

## 1. 介绍

bloom提供了一种基于Bloom过滤器的索引访问方法。

Bloom过滤器是一种节省空间的数据结构，用于测试元素是否是集合的成员。对于索引访问方法，它允许通过签名快速排除不匹配的元组，其大小在索引创建时确定。

签名是索引属性的有损表示，因此容易报告误报；也就是说，可能会报告某个元素在集合中，而它不在集合中。因此，必须始终使用堆条目中的实际属性值重新检查索引搜索结果。较大的签名会降低误报的几率，从而减少无用的堆访问次数，但当然也会使索引变大，从而使扫描速度变慢。

当表具有许多属性并且查询测试它们的任意组合时，这种类型的索引最有用。传统的btree索引比bloom索引更快，但它可能需要许多 btree索引来支持所有可能的查询，但只需要一个bloom索引。但请注意，bloom索引仅支持相等查询，而btree索引也可以执行不等式和范围搜索。

## 2. 参数

创建索引时在其WITH子句中接受以下参数：

- length
每个签名（索引条目）的长度（以bit为单位）。它被四舍五入到最接近的16的倍数。默认值为 80 bits，最大值为4096 bits。

- col1 — col32
为每个索引列生成的bit数。每个参数的名称是指它控制的索引列的编号。默认值为2 bits。

## 3. 示例

这是创建bloom索引的示例：

```sql
CREATE INDEX bloomidx ON tbloom USING bloom (i1,i2,i3)
       WITH (length=80, col1=2, col2=2, col3=4);
```

索引的签名长度为80 bits，属性i1和i2映射到2个bit位，属性i3映射到4个bit位,其余属性默认映射2个bit位。

下面是一个更完整的bloom指数定义和用法示例，以及与等效btree索引的比较。bloom指数比btree索引小得多，并且可以表现得更好。

```sql
openGauss=#CREATE TABLE tbloom AS
   SELECT
     (random() * 100000)::int as i1,
     (random() * 100000)::int as i2,
     (random() * 100000)::int as i3,
     (random() * 100000)::int as i4,
     (random() * 100000)::int as i5,
     (random() * 100000)::int as i6
   FROM
  generate_series(1,1000000);
```

对这个大表进行顺序扫描需要很长时间：

```sql
openGauss=# EXPLAIN ANALYZE SELECT * FROM tbloom WHERE i2 = 898732 AND i5 = 123451;
                                                QUERY PLAN
-----------------------------------------------------------------------------------------------------------
 Seq Scan on tbloom  (cost=0.00..21411.00 rows=1 width=24) (actual time=1159.983..1159.983 rows=0 loops=1)
   Filter: ((i2 = 898732) AND (i5 = 123451))
   Rows Removed by Filter: 1000000
 Total runtime: 1160.182 ms
(4 rows)

```

即使定义了btree索引，结果仍然是顺序扫描：

```sql
openGauss=# CREATE INDEX btreeidx ON tbloom (i1, i2, i3, i4, i5, i6);
CREATE INDEX
openGauss=# SELECT pg_size_pretty(pg_relation_size('btreeidx'));
 pg_size_pretty
----------------
 39 MB
(1 row)

openGauss=# EXPLAIN ANALYZE SELECT * FROM tbloom WHERE i2 = 898732 AND i5 = 123451;
                                               QUERY PLAN
---------------------------------------------------------------------------------------------------------
 Seq Scan on tbloom  (cost=0.00..21411.00 rows=1 width=24) (actual time=566.108..566.108 rows=0 loops=1)
   Filter: ((i2 = 898732) AND (i5 = 123451))
   Rows Removed by Filter: 1000000
 Total runtime: 566.301 ms
(4 rows)
```

在处理此类搜索时，在表上定义bloom索引比 btree 更好：

```sql
openGauss=# CREATE INDEX bloomidx ON tbloom USING bloom (i1, i2, i3, i4, i5, i6);
CREATE INDEX
openGauss=# SELECT pg_size_pretty(pg_relation_size('bloomidx'));
 pg_size_pretty
----------------
 15 MB
(1 row)

openGauss=# EXPLAIN ANALYZE SELECT * FROM tbloom WHERE i2 = 898732 AND i5 = 123451;
                                                       QUERY PLAN
-------------------------------------------------------------------------------------------------------------------------
 Bitmap Heap Scan on tbloom  (cost=17848.25..17852.27 rows=1 width=24) (actual time=14.183..14.183 rows=0 loops=1)
   Recheck Cond: ((i2 = 898732) AND (i5 = 123451))
   Rows Removed by Index Recheck: 242
   Heap Blocks: exact=241
   ->  Bitmap Index Scan on bloomidx  (cost=0.00..17848.25 rows=1 width=0) (actual time=13.042..13.042 rows=242 loops=1)
         Index Cond: ((i2 = 898732) AND (i5 = 123451))
 Total runtime: 14.621 ms
(7 rows)

```

现在，btree搜索的主要问题是，当搜索条件不约束前导索引列时，btree效率低下。btree的更好策略是在每列上创建一个单独的索引。然后规划者会选择这样的东西：

```sql
openGauss=# CREATE INDEX btreeidx1 ON tbloom (i1);
CREATE INDEX
openGauss=# CREATE INDEX btreeidx2 ON tbloom (i2);
CREATE INDEX
openGauss=# CREATE INDEX btreeidx3 ON tbloom (i3);
CREATE INDEX
openGauss=# CREATE INDEX btreeidx4 ON tbloom (i4);
CREATE INDEX
openGauss=# CREATE INDEX btreeidx5 ON tbloom (i5);
CREATE INDEX
openGauss=# CREATE INDEX btreeidx6 ON tbloom (i6);
CREATE INDEX
openGauss=# EXPLAIN ANALYZE SELECT * FROM tbloom WHERE i2 = 898732 AND i5 = 123451;
                                                       QUERY PLAN
-------------------------------------------------------------------------------------------------------------------------
 Bitmap Heap Scan on tbloom  (cost=8.92..12.93 rows=1 width=24) (actual time=0.256..0.256 rows=0 loops=1)
   Recheck Cond: ((i5 = 123451) AND (i2 = 898732))
   ->  BitmapAnd  (cost=8.92..8.92 rows=1 width=0) (actual time=0.252..0.252 rows=0 loops=1)
         ->  Bitmap Index Scan on btreeidx5  (cost=0.00..4.33 rows=11 width=0) (actual time=0.249..0.249 rows=0 loops=1)
               Index Cond: (i5 = 123451)
         ->  Bitmap Index Scan on btreeidx2  (cost=0.00..4.33 rows=11 width=0) (Actual time: never executed)
               Index Cond: (i2 = 898732)
 Total runtime: 0.529 ms
(8 rows)

```

尽管此查询的运行速度比使用任何一个索引都要快得多，但我们在索引大小方面付出了代价。每个单列btree索引占用22MB，因此所需的总空间为132MB，是bloom索引所用空间的八倍多。

## 4. 限制

bloom索引目前仅支持int4和text类型。
bloom索引的运算符类只需要索引数据类型的哈希函数和用于搜索的相等运算符。此示例显示了text数据类型的运算符类定义：

```sql
CREATE OPERATOR CLASS text_ops
DEFAULT FOR TYPE text USING bloom AS
    OPERATOR    1   =(text, text),
    FUNCTION    1   hashtext(text);
```
