# datavec概述

openGauss提供DataVec Extension（版本为datavec-1.0）。DataVec是一个基于openGauss的向量扩展，目前支持的向量功能有：精确和近似的最近邻搜索、L2距离&余弦距离&内积、向量索引、向量操作函数和操作符。作为openGauss的扩展，DataVec 使用熟悉的SQL语法操作向量，简化了用户使用向量数据库的过程。

伴随着深度学习的不断发展，非结构化数据如图片、视频、音频等得以通过向量的方式进行表征。这种表征方式使得在搜索、推荐、广告等业务中，基于向量的K近邻(K-Nearest Neighbors,KNN)检索需求变得尤为重要。如何在海量数据中高效地实现这一需求，成为了一个重要的研究方向和基础能力。

DataVec的目标是存储和检索由神经网络及机器学习等大模型生成的高维向量数据。为了实现这一目标，DataVec目前支持IVFFlat和HNSW两种索引结构，以加速向量相似度查询。IVFFlat(Inverted File Flat)是一种基于倒排文件的索引结构，适用于大规模数据集的快速检索。HNSW(Hierarchical Navigable Small World)则是一种基于图的索引结构，能够在高维空间中实现高效地近似最近邻搜索。