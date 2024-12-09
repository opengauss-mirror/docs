# PQ

## 介绍

本章节主要介绍openGauss数据库DataVec向量引擎PQ（Product Quantization）特性的安装使用步骤，以指导用户顺利完成操作。本特性将DataVec向量引擎和自研PQ算法相结合，以提高向量检索的查询性能。

## 安装准备

### 获取PQ加速安装包
```
libkvecturbo.so
```

### 配置环境变量
```
export DATAVEC_HNSWPQ_LIB_PATH=<YOUR_SO_PATH>
```

- `YOUR_SO_PATH`为libkvecturbo.so所在路径

### 安装OpenMP（可选）
OpenMP用于构建索引时中子空间聚类中心的Kmeans计算以及查询时与聚类中心计算加速。如果未安装，会大幅度延长检索时间以及索引构建时间。

```
yum install libomp-devel
```

## 环境要求
PQ特性只支持ARM架构环境

## 安装与卸载

### 启用PQ特性
设置GUC参数`enable_hnswpq = on`启用PQ特性，详情请参考[PQ参数](../DatabaseReference/PQ参数.md)。

### 关闭PQ特性
设置GUC参数`enable_hnswpq = off`关闭PQ特性，详情请参考[PQ参数](../DatabaseReference/PQ参数.md)。

## 使用PQ

### HNSWPQ
```
CREATE INDEX [INDEX_NAME] 
ON [TABLE_NAME] 
USING hnsw (COLUMN_NAME [TYPE]_[DISTANCE_FUN]_ops) 
with (m=<M>, ef_construction=<EF_CONSTRUCTION>, enable_pq = on, pq_m = <PQ_M>, pq_ksub = <PQ_KSUB>);
```

- `INDEX_NAME` - 索引名称
- `TABLE_NAME` - 表名
- `COLUMN_NAME` - 向量数据列名

#### HNSWPQ索引操作符

HNSW索引操作符`[TYPE]_[DISTANCE_FUN]_ops` 格式：

- `TYPE` - 向量类型
    - vector

HNSWPQ索引支持向量数据维度：
名称 | 维度限制 
--- | --- 
vector | 2,000

- `DISTANCE_FUN` - 距离函数
    - l2
    - ip
    - cosine

##### vector 索引操作符
索引操作符 | 描述 
--- | --- 
vector_l2_ops | L2距离
vector_ip_ops | 内积
vector_cosine_ops | 余弦距离

#### 索引选项
-   `m` - 每个图层最大连接数（默认为16）
-   `ef_construction` - 用于图形构造的动态候选集大小 2~100（默认为64）
-   `storage` - 索引存储类型：astore/ustore（默认为astore）
-   `parallel_workers` - 构建索引并行度 1~32（默认为1并发构建）
-   `enable_pq` - 开启pq量化压缩（默认off）
-   `pq_m` - 切分的子空间数量 1~65535（默认为8）
-   `pq_ksub` - 每个子空间的聚类中心数量 1~256（默认为256）

**示例：** 使用L2距离计算创建HNSWPQ索引并设置`m = 16, ef_construction = 64, pq_m=32`。

```
openGauss=# CREATE INDEX ON items USING hnsw (embedding vector_l2_ops) WITH (m = 16, ef_construction = 64, enable_pq=on, pq_m=32);
```
**设置建议：**

- pq_m：切分子空间越多，精度越高，同时性能越低。该值需要能整除数据集维度，推荐值为`维度/4`。
- pq_ksub：聚类中心越多，精度越高，但同时性能越低。推荐值为`256`。
- 其余参数设置与[向量索引](../SQLReference/向量索引.md)中HNSW索引中相同。

>![](public_sys-resources/icon-note.png) **限制：<br>**
>PQ特性暂时只支持ARM架构环境。<br>
>PQ特性暂时只支持HNSW索引。<br>
>PQ特性暂时只支持vector数据类型，在其他向量数据类型构建HNSWPQ索引会导致执行失败。