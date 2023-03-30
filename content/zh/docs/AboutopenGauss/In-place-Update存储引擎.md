# In-place Update存储引擎<a name="ZH-CN_TOPIC_0000001168230024"></a>

## 可获得性<a name="section1076382216287"></a>

本特性自openGauss 2.1.0 版本开始引入。

## 特性简介<a name="section732915401281"></a>

In-place Update存储引擎（原地更新），是openGauss内核新增的一种存储模式。openGauss内核此前的版本使用的行存储引擎是Append Update（追加更新）模式。追加更新对于业务中的增、删以及HOT（HeapOnly Tuple） Update（即同一页面内更新）有很好的表现，但对于跨数据页面的非HOT UPDATE场景，垃圾回收不够高效，Ustore存储引擎可很好解决上述问题

## 客户价值<a name="section103921852122817"></a>

In-place Update存储引擎可有效的降低多次更新元组后占用存储空间问题。

## 特性描述<a name="section811017719290"></a>

新增的In-place update存储引擎很好的解决了Append update存储引擎空间膨胀和元组较大的问题，高效回滚段的设计是In-place update存储引擎的基础。

## 特性增强<a name="section1359382119297"></a>

无。

## 特性约束<a name="section13355203802911"></a>

无。

## 依赖关系<a name="section101449415302"></a>

无。

