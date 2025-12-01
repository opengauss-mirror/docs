# 智能基数估计

## 概述

智能基数估计使用库内贝叶斯网络模型对多列数据样本联和分布进行建模，从而能够对多列等值查询提供更加准确的基数估计。更加准确的基数估计能够显著提高优化器对于计划和算子的选择的准确性，从而提高数据库整体吞吐量。

### 可获得性<a name="section1420315335481"></a>

本特性自openGauss 3.1.0版本开始引入。

### 特性简介<a name="section18982185114134"></a>

智能基数估计利用库内轻量级算法进行多列数据分布建模，并且提供多列等值基数估计的能力。在数据分布倾斜并且列之间相关性强的数据场景下能够提供更准确的估计结果，从而给优化器提供准确的代价参考，提高计划生成准确率，提高数据库查询执行效率。

### 客户价值<a name="section1160749171918"></a>

通过本功能，用户可以通过创建智能统计信息改善多列统计的准确率，从而提升查询优化性能。

### 特性描述<a name="section165492040132317"></a>

智能估计基数首先利用数据库内数据样本进行数据分布建模，并且将模型压缩存储在数据库中。优化器在执行计划生成阶段触发智能估计，实现对代价更精确的估计，并且生成更优的计划。

### 特性增强<a name="section818524702617"></a>

无

### 特性约束<a name="section13678185110268"></a>

- 数据库运行状态良好，无资源紧张状况。
- 仅支持FLOAT8，Double Precision，FlOAT4，REAL，INT16，BIGINT，INTEGER，VARCHAR，CHARACTER VARYING，CHAR，CHARACTER，NUMERIC数据类型。
- 仅支持不超过64列的查询基数估计。
- 为了保证系统性能，模型创建只利用一定量的数据样本（最多200,000），如果数据过于稀疏，估计结果可能不准确。
- 为了能够充分利用有限的内存进行模型访问加速，建议创建AI统计列数量不超过30个，否则可能会触发内存替换。
- 如果出现过长的变长字符串类型数据，可能会影响基数估计模型创建和估计的性能。
- 当前版本同时创建MCV和贝叶斯网络情况下，基数估计性能较低，不建议统计创建。

### 依赖关系<a name="section11899817102719"></a>

依赖于数据库内的多列统计信息创建语法和数据采样算法。

## 前置条件

数据库运行正常，GUC参数enable_ai_stats设置为on，multi_stats_type设置为'BAYESNET'或者'ALL'。

## 使用指导

1. 设置采样方式为按照采样率采样，即设置GUC参数default\_statistics\_target为\[-100, -1\]之间的整数，表示采样百分比。
2. 使用ANALYZE\(\(\[column\_name,\]\)\) 进行数据统计和模型创建。
3. 输入查询，如果查询涉及到的等值查询列上有统计模型创建，那么会自动使用统计模型进行选择率估计。
4. 不再需要智能统计模型的时候，使用ALTER TABLE \[table\_name\] DELETE STATISTICS \(\(\[column\_name,\]\)\)进行统计信息以及模型删除。

其他使用的方法详见SQL接口章节[ALTER TABLE](../sql_reference/alter_table.md)和[ANALYZE | ANALYSE](../sql_reference/analyze_analyse.md)。

## 最佳实践

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

## 常见问题处理

如果遇到异常场景导致模型无法创建，ABO优化器会只创建传统统计信息，请根据对应的告警信息进行相应处理。
