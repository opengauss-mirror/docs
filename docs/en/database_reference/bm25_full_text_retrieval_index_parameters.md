# BM25 Full-Text Search Index Parameters

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:38:20.974Z -->

## enable_bm25_taat<a name="section14941640131"></a>

**Parameter description**: When the BM25 index scan is used, enabling this parameter uses the TAAT method to traverse by search term, scoring, aggregating, and sorting all documents that contain the search term, and finally returns the top n documents with the highest scores. This method is slower but has higher recall. When disabled, the DAAT MaxScore method is used to prune documents, which is faster but may cause some loss in recall.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: Boolean type

- `on`: Enables the TAAT scan feature.
- `off`: Enables the DAAT MaxScore scan feature.

**Setting recommendation**: When you want to retrieve the sorted results of all documents related to the search term, it is recommended to enable this parameter. Otherwise, it is recommended to keep this parameter disabled.

**Default value**: off

**Setting syntax**:

```
set enable_bm25_taat = on;
```

## bm25_topk<a name="section14941640131"></a>

**Parameter description**: The dynamic top-k candidate set size used during BM25 index scans.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method (Method 3).

**Value range**: Integer, 5 to 200

**Setting recommendation**: It is recommended to set the value to be greater than or equal to `Limit`. If insufficient data of the `Limit` size is obtained, `bm25_topk` is automatically expanded to continue scanning until enough data is obtained or no more data meets the condition.

**Default value**: 5

**Setting syntax**:

```
set bm25_topk = 10;
```

>[!NOTE]Note
>
> If the value is less than `Limit`, `bm25_topk` may be expanded multiple times to continue scanning, which reduces query efficiency.<br>
> Because the TAAT method scores all candidate documents containing the search terms by default, this parameter takes effect only when `enable_bm25_taat` is disabled.

## bm25_k1<a name="section14941640131"></a>

**Parameter description**: A BM25 algorithm parameter that affects the impact of term frequency on the document score. A larger value results in a higher term frequency score. In most cases, keep the default value 1.2.

This parameter is of the USERSET type. See method 3 in [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: floating-point, 0.0–3.0

**Default value**: 1.2

**Setting syntax**:

```
set bm25_k1 = 1.5;
```

## bm25_b<a name="section14941640131"></a>

**Parameter description**: A BM25 algorithm parameter used to adjust the impact of document length on document scoring. A larger `bm25_b` imposes a greater penalty on document length. When `bm25_b` = 0, long and short documents with the same term frequency receive the same score. A larger `bm25_b` results in lower scores for long documents and higher scores for short documents. In general, keep the default value 0.75.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method (method 3).

**Value range**: floating-point, 0.0–1.0

**Default value**: 0.75

**Setting syntax**:

```
set bm25_b = 0.5;
```

## max_score_ratio<a name="section14941640131"></a>

**Parameter description**: Controls the scaling ratio of the search term MaxScore when the BM25 index is scanned using DAAT MaxScore.

This parameter is of the USERSET type. See [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846) for the corresponding setting method.

**Value range**: floating-point, 0.5 to 1.3

**Default value**: 1.05

**Setting syntax**:

```
set max_score_ratio = 0.9;
```

>[!NOTE]Note
>
>When new documents are added, the average document length changes continuously. Therefore, the MaxScore of a document term is an estimated value. This parameter is added to adjust MaxScore, and a value greater than 1.0 is recommended.<br>
>During document scanning, when this parameter is less than 1.0, MaxScore is reduced, enabling more aggressive pruning, fewer documents to scan, faster query speed, and some loss in recall. Conversely, when this parameter is greater than 1.0, pruning is more relaxed, query speed is slightly slower, and recall is higher.
>When `bm25_topk` and `max_score_ratio` are set unreasonably, because `Limit` n > `bm25_topk`, internal multi-round query expansion may cause the query results to not be sorted strictly in descending order by score.
