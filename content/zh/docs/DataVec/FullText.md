# 全文检索索引
全文检索索引是指通过对文本数据集的文本内容建立索引，支持快速、灵活地查询并返回包含特定关键词或短语的文档，并根据相关性对返回的文档集进行排序。openGauss 目前支持两种全文索引：GIN索引 和 BM25索引。BM25索引采用BM25算法进行相关性评分，并基于DAAT MaxScore算法进行快速剪枝搜索，查询响应时间较GIN索引提升几十倍甚至百倍以上，帮您快速获取与搜索词最相关的文档，提升RAG系统的性能。
- [GIN](../SQLReference/GIN索引.md)
- [BM25](BM25索引.md)