# 排序查询结果

排序试图针对特定查询衡量文档的相关度，从而将众多的匹配文档中相关度最高的文档排在最前。openGauss提供了两个预置的排序函数。函数考虑了词法、距离和结构信息；也就是，他们考虑查询词在文档中出现的频率、紧密程度以及他们出现的地方在文档中的重要性。然而，相关性的概念是模糊的，并且是跟应用强相关的。不同的应用程序可能需要额外的信息来排序，比如，文档的修改时间、内置的排序函数等。也可以开发自己的排序函数或者采用附加因素组合这些排序函数的结果来满足特定需求。

两个预置的排序函数：

```
ts_rank([ weights float4[], ] vector tsvector, query tsquery [, normalization integer ]) returns float4
```

基于词素匹配率对vector进行排序：

```
ts_rank_cd([ weights float4[], ] vector tsvector, query tsquery [, normalization integer ]) returns float4
```

该函数需要位置信息的输入。因此它不能在“剥离”tsvector值的情况下运行—它将总是返回零。

对于这两个函数，可选的weights参数提供给词加权重的能力，词的权重大小取决于所加的权值。权重阵列指定在排序时为每类词汇加多大的权重。

```
{D-weight, C-weight, B-weight, A-weight}
```

如果没有提供weights，则使用缺省值：\{0.1, 0.2, 0.4, 1.0\}。

通常的权重是用来标记文档特殊领域的词，如标题或最初的摘要，所以相对于文章主体中的词它们有着更高或更低的重要性。

由于较长的文档有更多的机会包含查询词，因此有必要考虑文档的大小。例如，包含有5个搜索词的一百字文档比包含有5个搜索词的一千字文档相关性更高。两个预置的排序函数都采用了一个整型的标准化选项来定义文档长度是否影响排序及如何影响。这个整型选项控制多个行为，所以它是一个屏蔽字：可以使用|指定一个或多个行为（例如，2|4）。

-   0（缺省）表示：跟长度大小没有关系
-   1 表示：排名（rank）除以（文档长度的对数+1）
-   2表示：排名除以文档的长度
-   4表示：排名除以两个扩展词间的调和平均距离。只能使用ts\_rank\_cd实现
-   8表示：排名除以文档中单独词的数量
-   16表示：排名除以单独词数量的对数+1
-   32表示：排名除以排名本身+1

当指定多个标志位时，会按照所列的顺序依次进行转换。

需要特别注意的是，排序函数不使用任何全局信息，所以不可能产生一个某些情况下需要的1%或100%的理想标准值。标准化选项32 \(rank/\(rank+1\)\)可用于所有规模的从零到一之间的排序，当然，这只是一个表面变化；它不会影响搜索结果的排序。

下面是一个例子，仅选择排名前十的匹配：

```
openGauss=# SELECT id, title, ts_rank_cd(to_tsvector(body), query) AS rank 
FROM tsearch.pgweb, to_tsquery('america') query 
WHERE query @@ to_tsvector(body) 
ORDER BY rank DESC 
LIMIT 10;
 id |  title  | rank 
----+---------+------
 11 | Brazil  |   .2
  2 | America |   .1
 12 | Canada  |   .1
 13 | Mexico  |   .1
(4 rows)
```

这是使用标准化排序的相同例子：

```
openGauss=# SELECT id, title, ts_rank_cd(to_tsvector(body), query, 32 /* rank/(rank+1) */ ) AS rank 
FROM tsearch.pgweb, to_tsquery('america') query 
WHERE  query @@ to_tsvector(body) 
ORDER BY rank DESC 
LIMIT 10;
 id |  title  |   rank   
----+---------+----------
 11 | Brazil  |  .166667
  2 | America | .0909091
 12 | Canada  | .0909091
 13 | Mexico  | .0909091
(4 rows)
```

下面是使用中文分词法排序查询的例子：

```
openGauss=# CREATE TABLE tsearch.ts_ngram(id int, body text);
openGauss=# INSERT INTO tsearch.ts_ngram VALUES(1, '中文');
openGauss=# INSERT INTO tsearch.ts_ngram VALUES(2, '中文检索');
openGauss=# INSERT INTO tsearch.ts_ngram VALUES(3, '检索中文');
--精确匹配
openGauss=# SELECT id, body, ts_rank_cd(to_tsvector('ngram',body), query) AS rank FROM tsearch.ts_ngram, to_tsquery('中文') query WHERE query @@ to_tsvector(body);
 id | body | rank 
----+------+------
  1 | 中文 |   .1
(1 row)

--模糊匹配
openGauss=# SELECT id, body, ts_rank_cd(to_tsvector('ngram',body), query) AS rank FROM tsearch.ts_ngram, to_tsquery('中文') query WHERE query @@ to_tsvector('ngram',body);
 id |   body   | rank 
----+----------+------
  3 | 检索中文 |   .1
  1 | 中文     |   .1
  2 | 中文检索 |   .1
(3 rows)
```

排序要遍历每个匹配的tsvector，因此资源消耗多，可能会因为I/O限制导致排序慢。可是这是很难避免的，因为实际查询中通常会有大量的匹配。

