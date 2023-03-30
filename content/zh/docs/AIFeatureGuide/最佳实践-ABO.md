# 最佳实践<a name="ZH-CN_TOPIC_0000001316466040"></a>

生成如下数据表：

```
benchmark=# \d part;
id             | integer                  |
p_brand        | character varying(256)   |
p_type         | character varying(256)   |
p_container    | character varying(256)   |
p_mfgr         | character varying(256)   |
```

插入10,000,000行数据：

```
benchmark=# select count(1) from part1;
10000000
```

在数据表上创建四种不同的多列索引：

```
benchmark=# select * from pg_indexes where tablename='part1';
public     | part1     | brand_type_container  |              | CREATE INDEX brand_type_container ON part1 USING btree (p_brand, p_type, p_container) TABLESPACE pg_default
public     | part1     | brand_type_mfgr       |              | CREATE INDEX brand_type_mfgr ON part1 USING btree (p_brand, p_type, p_mfgr) TABLESPACE pg_default
public     | part1     | brand_container_mfgr  |              | CREATE INDEX brand_container_mfgr ON part1 USING btree (p_brand, p_container, p_mfgr) TABLESPACE pg_default
public     | part1     | type_container_mfgr   |              | CREATE INDEX type_container_mfgr ON part1 USING btree (p_type, p_container, p_mfgr) TABLESPACE pg_default
```

针对数据表生成一批包含多列等值条件的查询，如下：

```
explain analyze select * from part1 where p_container='LG CASE' AND p_brand='Brand#34' AND p_mfgr='Manufacturer#2' AND p_type='SMALL BRUSHED COPPER';
```

分别测试不创建多列统计信息和创建ABO统计信息场景下的执行计划：

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

通过以上操作可以看出，在这个场景下，ABO基数估计加速了查询10+倍。

