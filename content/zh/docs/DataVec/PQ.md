# PQ

## 介绍

本章节主要介绍openGauss数据库DataVec向量引擎PQ（Product Quantization）特性的安装使用步骤，以指导用户顺利完成操作。本特性将DataVec向量引擎和自研PQ算法相结合，以提高向量检索的查询性能。
>![](../../../docs-lite/zh/docs/BriefTutorial/public_sys-resources/icon-note.gif) **限制：<br>**
>PQ特性暂时只支持ARM架构环境。<br>
>PQ特性暂时只支持HNSW和IVF索引。<br>
>PQ特性暂时只支持vector数据类型，在其他向量数据类型构建HNSW-PQ以及IVF-PQ索引会导致执行失败。<br>
>在创建PQ索引前需要先插入数据，无数据情况下会创建失败。<br>
>创建PQ索引时表中的数据量小于pq_ksub可以正常创建索引，但会提示参与训练码本的数据量较少，召回率可能会偏低。<br>
>创建IVF-PQ索引时，如果表数据量小于索引选项lists，会提示召回率低。<br>
>PQ不支持ustore表建立索引。
## 安装准备

### 环境要求
PQ特性只支持ARM架构环境。

### 容器化部署openGauss
详见[容器镜像安装](https://docs.opengauss.org/zh/docs/latest-lite/docs/InstallationGuide/%E5%AE%B9%E5%99%A8%E9%95%9C%E5%83%8F%E5%AE%89%E8%A3%85.html)。

ARM架构环境镜像中默认已经安装PQ检索加速安装包，加速包默认安装路径为/usr/local/sra_recall

## 使用PQ

### HNSW-PQ
```
openGauss=# CREATE INDEX [INDEX_NAME] 
ON [TABLE_NAME] 
USING hnsw (COLUMN_NAME [TYPE]_[DISTANCE_FUN]_ops) 
with (m=<M>, ef_construction=<EF_CONSTRUCTION>, enable_pq = on, pq_m = <PQ_M>, pq_ksub = <PQ_KSUB>);
```

- `INDEX_NAME` - 索引名称
- `TABLE_NAME` - 表名
- `COLUMN_NAME` - 向量数据列名

#### HNSW-PQ索引操作符

HNSW索引操作符`[TYPE]_[DISTANCE_FUN]_ops` 格式：

- `TYPE` - 向量类型
    - vector

HNSW-PQ索引支持向量数据维度：
名称 | 维度限制 
--- | --- 
vector | 2,000

- `DISTANCE_FUN` - 距离函数
    - l2
    - ip
    - cosine

#### vector 索引操作符
索引操作符 | 描述 
--- | --- 
vector_l2_ops | L2距离
vector_ip_ops | 内积
vector_cosine_ops | 余弦距离

#### 索引选项
-   `m` - 每个图层最大连接数 2~100（默认为16）
-   `ef_construction` - 用于图形构造的动态候选集大小 4~1000，必须大于等于2*m（默认为64）
-   `enable_pq` - 开启pq量化压缩（默认off）
-   `pq_m` - 切分的子空间数量 1~2000（默认为8）。对于高维向量，pq_m的上限受页面大小限制，可能会在创建索引时报错，并给出当前向量维度对应pq_m的上限，还需结合pq_m的其他限制确定最终值。

	**示例：** 使用L2距离创建HNSW-PQ索引，其中表items中向量为2000维。
	```
	openGauss=# CREATE INDEX ON items USING hnsw (embedding 	vector_l2_ops) WITH (enable_pq=on, pq_m=2000);
	ERROR: vector and pqcode must on the same page, max pq_m is 72
	```
     对于HNSW-PQ索引，2000维的vector pq_m的最大值是72，由于维度%pq_m=0的限制，pq_m的最大值是50。
-   `pq_ksub` - 每个子空间的聚类中心数量 1~256（默认为256） <br>

**设置建议：**

- pq_m：切分子空间越多，精度越高（由于HNSWPQ内置精排，某些情况下切分子空间越多精度不会有明显变化），同时性能越低。该值必须要能整除数据集维度，否则索引无法创建成功，推荐值为`维度/4`。
- pq_ksub：聚类中心越多，精度越高，但同时性能越低。推荐值为`256`。
- 其余参数设置与[向量索引](../../../docs-lite/zh/docs/SQLReference/向量索引.md)中HNSW索引中相同。

#### GUC参数
-   `hnsw_earlystop_threshold` - 设置图搜索的最大连续迭代次数 160~INT32_MAX-1 (默认INT32_MAX)

	**示例：** 使用L2距离计算创建HNSW-PQ索引并设置`m = 16, ef_construction = 64, pq_m=32`，并设置`hnsw_earlystop_threshold`为320。

	```
	openGauss=# CREATE INDEX ON items USING hnsw (embedding vector_l2_ops) WITH (m = 16, ef_construction = 64, enable_pq=on, 		pq_m=32);
	openGauss=# SET hnsw_earlystop_threshold = 320;
	```

### IVF-PQ

```
openGauss=# CREATE INDEX [INDEX_NAME]
ON [TABLE_NAME]
USING ivfflat (COLUMN_NAME [TYPE]_[DISTANCE_FUN]_ops)
with (lists = <LISTS>, enable_pq = on, pq_m = <PQ_M>, pq_ksub = <PQ_KSUB>, by_residual = on);
```

- `INDEX_NAME` - 索引名称
- `TABLE_NAME` - 表名
- `COLUMN_NAME` - 向量数据列名

#### IVF-PQ索引操作符

IVFFLAT索引操作符 `[TYPE]_[DISTANCE_FUN]_ops` 格式：

- `TYPE` -向量类型
  - vector

IVF-PQ索引执行向量数据维度：
名称 | 维度限制 
--- | --- 
 vector | 2,000 

- `DISTANCE_FUN` - 距离函数
	 - l2
	 - ip
	 - cosine
#### vector索引操作符
索引操作符 | operator | 描述
--- | --- | ---
vector_l2_ops | <->|L2距离
vector_ip_ops | <#>|内积
vector_cosine_ops|<=>|余弦距离

#### 索引选项

- `lists` - 倒排表（单元格）聚类中心数量（默认为100）
- `enable_pq` - 开启pq量化压缩（默认off）
- `pq_m` - 仅在`enable_pq`开启时有效，切分的子空间数量 1~2000（默认为8）。对于高维向量，pq_m的上限受页面大小限制，可能会在创建索引时报错，并给出当前向量维度对应pq_m的上限，还需结合pq_m的其他限制确定最终值。
- `pq_ksub`  - 仅在`enable_pq`开启时有效，每个子空间的聚类中心数量 1~256 （默认256）
- `by_residual` - 仅在`enable_pq`开启时有效，启用残差运算（默认off）

	**示例：** 使用带残差的L2距离计算创建IVF-PQ索引并设置`lists = 200, pq_m = 4, pq_ksub = 256`。
	
	```
	openGauss=# CREATE INDEX ON items USING ivfflat (embedding 	vector_l2_ops) WITH (lists = 200,
	enable_pq = on, pq_m = 4, pq_ksub = 256, by_residual = on);
	```

**设置建议：**

- pq_m：切分子空间越多，精度越高，同时性能越低。该值需要能整除数据集维度，推荐值为`维度/4`。
- pq_ksub：聚类中心越多，精度越高，但同时性能越低。推荐值为`256`。
- by_residual：启动残差计算可以提升精度，但是会增加构建索引的时间。推荐值`off`。
- 其余参数设置与[向量索引](../../../docs-lite/zh/docs/SQLReference/向量索引.md)中IVFFLAT索引相同。

#### 查询选项

- `ivfflat_probe` - 查询时候选集的大小，参见[DataVec向量引擎参数](../../../docs-lite/zh/docs/DatabaseReference/DataVec向量引擎参数.md)。

	**示例：**

	```
	openGauss=# SET ivfflat_probes = 10;
	```

- `ivfpq_kreorder` - 设置参与精排候选集的大小，参见[DataVec向量引擎参数](../../../docs-lite/zh/docs/DatabaseReference/DataVec向量引擎参数.md)。

	**示例：**

	```
	openGauss=# SET ivfpq_kreorder = 10;
	```
