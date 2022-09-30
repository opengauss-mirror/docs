# Best Practice<a name="EN-US_TOPIC_0000001316466040"></a>

The following data table is generated:

```
benchmark=# \d part;
id             | integer                  |
p_brand        | character varying(256)   |
p_type         | character varying(256)   |
p_container    | character varying(256)   |
p_mfgr         | character varying(256)   |
```

Insert 10 million lines of data.

```
benchmark=# select count(1) from part1;
10000000
```

Create four different multi-column indexes on the data table:

```
benchmark=# select * from pg_indexes where tablename='part1';
public     | part1     | brand_type_container  |              | CREATE INDEX brand_type_container ON part1 USING btree (p_brand, p_type, p_container) TABLESPACE pg_default
public     | part1     | brand_type_mfgr       |              | CREATE INDEX brand_type_mfgr ON part1 USING btree (p_brand, p_type, p_mfgr) TABLESPACE pg_default
public     | part1     | brand_container_mfgr  |              | CREATE INDEX brand_container_mfgr ON part1 USING btree (p_brand, p_container, p_mfgr) TABLESPACE pg_default
public     | part1     | type_container_mfgr   |              | CREATE INDEX type_container_mfgr ON part1 USING btree (p_type, p_container, p_mfgr) TABLESPACE pg_default
```

Generate a batch of queries that contain multiple columns of equality conditions for the data table as follows:

```
explain analyze select * from part1 where p_container='LG CASE' AND p_brand='Brand#34' AND p_mfgr='Manufacturer#2' AND p_type='SMALL BRUSHED COPPER';
```

Test the execution plan in the scenarios where multi-column statistics are not created and ABO statistics are created.

```
benchmark=# explain analyze select * from part1 where p_container='LG CASE' AND p_brand='Brand#34' AND p_mfgr='Manufacturer#2' AND p_type='SMALL BRUSHED COPPER';
Bitmap Heap Scan on part1 (cost=5.30..336.06 rows=17 width=56) (actual time=0.953..7.061 rows=103 loops=1)
  Recheck Cond: (((p_brand)::text = 'Brand#34'::text) AND ((p_type)::text = 'SMALL BRUSHED COPPER'::text) AND ((p_container)::text = 'LG CASE'::text))
  Filter: ((p_mfgr)::text = 'Manufacturer#2'::text)
  Rows Removed by Filter: 773
  Heap Blocks: exact=871
  ->  Bitmap Index Scan on brand_type_container  (cost=0.00..5.30 rows=84 width=0) (actual time=0.704..0.704 rows=876 loops=1)
      Index Cond: (((p_brand)::text = 'Brand#34'::text) AND ((p_type)::text = 'SMALL BRUSHED COPPER'::text) AND ((p_container)::text = 'LG CASE'::text))
Total runtime: 7.213 ms
```

```
benchmark=# explain analyze select * from part1 where p_container='LG CASE' AND p_brand='Brand#34' AND p_mfgr='Manufacturer#2' AND p_type='SMALL BRUSHED COPPER';
Bitmap Heap Scan on part1  (cost=10.59..723.97 rows=210 width=56) (actual time=0.112..0.434 rows=103 loops=1)
  Recheck Cond: (((p_type)::text = 'SMALL BRUSHED COPPER'::text) AND ((p_container)::text = 'LG CASE'::text) AND ((p_mfgr)::text = 'Manufacturer#2'::text))
  Filter: ((p_brand)::text = 'Brand#34'::text)
  Rows Removed by Filter: 64
  Heap Blocks: exact=167
  ->  Bitmap Index Scan on type_container_mfgr  (cost=0.00..10.54 rows=183 width=0) (actual time=0.081..0.081 rows=167 loops=1)
      Index Cond: (((p_type)::text = 'SMALL BRUSHED COPPER'::text) AND ((p_container)::text = 'LG CASE'::text) AND ((p_mfgr)::text = 'Manufacturer#2'::text))
Total runtime: 0.533 ms
```

According to the preceding operations, in this scenario, the ABO cardinality estimation accelerates the query by more than 10 times.
