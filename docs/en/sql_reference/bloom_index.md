---
description: This document describes BLOOM in openGauss, covering topics such as 1. Introduction, 2. Parameters.
keywords: [openGauss, BLOOM, SQL, 1. Introduction, 2. Parameters]
---

# BLOOM

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:19:48.341Z -->

## 1. Introduction

Bloom provides an index access method based on Bloom filters.

A Bloom filter is a space-efficient data structure used to test whether an element is a member of a set. For the index access method, it allows fast exclusion of non-matching tuples by signature, and its size is determined at index creation.

A signature is a lossy representation of the index attributes, and is therefore prone to reporting false positives; that is, it may report that an element is in the set when it is not. Therefore, index search results must always be rechecked using the actual attribute values from heap entries. Larger signatures reduce the false positive probability and thus the number of useless heap accesses, but of course also make the index larger and therefore slower to scan.

This type of index is most useful when a table has many attributes and queries test arbitrary combinations of them. A conventional btree index is faster than a bloom index, but it may require many btree indexes to support all possible queries, whereas only one bloom index is needed. Note, however, that bloom indexes support only equality queries, whereas btree indexes can also perform inequality and range searches.

## 2. Parameters

The following parameters are accepted in the WITH clause when creating an index:

- length:

  The length of each signature (index entry) in bits. It is rounded to the nearest multiple of 16. The default value is 80 bits, and the maximum value is 4096 bits.

- col1 — col32

  The number of bits generated for each index column. The name of each parameter indicates the number of the index column it controls. The default value is 2 bits.

## 3. Examples

This is an example of creating a bloom index:

```sql
CREATE INDEX bloomidx ON tbloom USING bloom (i1,i2,i3)
       WITH (length=80, col1=2, col2=2, col3=4);
```

The signature length of the index is 80 bits, with attributes i1 and i2 mapped to 2 bits, attribute i3 mapped to 4 bits, and the remaining attributes mapped to 2 bits by default.

The following is a more complete example of bloom index definition and usage, along with a comparison against an equivalent btree index. The bloom index is much smaller than the btree index and can perform better.

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

A sequential scan on this large table takes a long time:

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

Even with a btree index defined, the result is still a sequential scan:

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

For this type of search, defining a bloom index on the table is better than a btree index:

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

Now, the main problem with btree search is that btree is inefficient when the search condition does not constrain the leading index column. A better strategy for btree is to create a separate index on each column. The planner would then choose something like this:

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

Although this query runs much faster than using any single index, a price is paid in terms of index size. Each single-column btree index occupies 22 MB, so the total space required is 132 MB, which is more than eight times the space used by the bloom index.

## 4. Limitations

The bloom index currently supports only int4 and text types. The operator class of a bloom index requires only a hash function for the index data type and an equality operator for searches. The following example shows the operator class definition for the text data type:

```sql
CREATE OPERATOR CLASS text_ops
DEFAULT FOR TYPE text USING bloom AS
    OPERATOR    1   =(text, text),
    FUNCTION    1   hashtext(text);
```
