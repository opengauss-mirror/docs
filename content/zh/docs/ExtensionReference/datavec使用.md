# DataVec使用

## 创建Extension<a name="section21088306113"></a>

创建DataVec Extension可直接使用CREATE Extension命令进行创建：

```
openGauss=# CREATE EXTENSION DATAVEC;
```

## 使用Extension<a name="section107391050141118"></a>

### 创建向量表

DataVec新增多种向量数据类型（vector、bitvector、sparsevector等），向量表的创建与openGauss原生语法保持一致，创建时指定存储向量类型即可。
```
CREATE TABLE [TABLE_NAME]
(
    COL1 DATATYPE,
    ...,
    COLN VECTORTYPE,
);
```

示例1：创建一个带有3维向量的表。

```
openGauss=# CREATE TABLE items (val vector(3));

```

### 数据插入

向量的数据插入与openGauss原生语法保持一致，使用INSERT或者COPY插入，指定数据类型即可。

```
INSERT INTO [TABLE_NAME] VALUES 
(
    DATA1,
    ...,
    [0.1, 0.3, 0.6, ...]
);
```

示例2：向量数据的插入。

```
openGauss=# INSERT INTO items (val) VALUES ('[1,2,3]'), ('[4,5,6]');

```

### 向量索引创建

DataVec目前支持了IVFFLAT、HNSW及HNSWPQ等算法，基于openGauss中的ASTORE和USTORE存储实现，通过索引结构能过够高效地检索出查询结果。

```
CREATE INDEX [INDFEX_NAME]
ON [TABLE_NAME]
USING [ivfflat|hnsw|...]
WITH (
    lists=<LISTS>,|
    m=<M>,
    ef_construction=<EF_CONSTRUCTION>,
    ...
);
```

示例3：索引创建。

```
openGauss=# CREATE INDEX ON items USING ivfflat (val vector_l2_ops) WITH (lists = 100);
openGauss=# CREATE INDEX ON items USING ivfflat (val vector_ip_ops) WITH (lists = 100);
openGauss=# CREATE INDEX ON items USING ivfflat (val vector_cosine_ops) WITH (lists = 100);
openGauss=# CREATE INDEX ON items USING hnsw (val vector_cosine_ops) WITH (m = 16);
```
>![](public_sys-resources/icon-note.png) **说明：** 
>
>索引最大支持2000维向量。

### 向量检索
通过ANN索引，DataVec可以进行高效的近似搜索；此外还可以进行非索引的精确检索。

```
SELECT COL1, COLN 
FROM [TABLE_NAME] 
ORDER BY COLN [VECTOR_OPERATER]  '[0.1, 0.3, 0.7, ...]' 
LIMIT <TOPK>;
```

示例4：计算最近邻。

```
openGauss=# SELECT * FROM items ORDER BY val <-> '[3,1,2]' LIMIT 5;
openGauss=# SELECT * FROM items ORDER BY val <#> '[3,1,2]' LIMIT 5;
openGauss=# SELECT * FROM items ORDER BY val <=> '[3,1,2]' LIMIT 5;
```

## 删除Extension<a name="section1587441381220"></a>

在openGauss中删除DataVec Extension的方法如下所示：

```
openGauss=# DROP EXTENSION DATAVEC [CASCADE];
```

>![](public_sys-resources/icon-note.png) **说明：** 
>
>如果Extension被其它对象依赖，需要加入CASCADE（级联）关键字，删除所有依赖对象。

