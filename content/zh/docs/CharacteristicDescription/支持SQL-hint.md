# 支持SQL hint<a name="ZH-CN_TOPIC_0000001162578986"></a>

## 可获得性<a name="section56086982"></a>

本特性自openGauss 1.1.0版本开始引入。

## 特性简介<a name="section35020791"></a>

支持SQL hint影响执行计划生成。

## 客户价值<a name="section46751668"></a>

提升SQL查询性能。

## 特性描述<a name="section18111828"></a>

Plan Hint为用户提供了直接影响执行计划生成的手段，用户可以通过指定join顺序，join、stream、scan方法，指定结果行数，指定重分布过程中的倾斜信息等多个手段来进行执行计划的调优，以提升查询的性能。

## 特性增强<a name="section28788730"></a>

支持planhint设置session级优化器参数。

支持指定子查询不展开。

支持单query禁用gpc。

## 特性约束<a name="section06531946143616"></a>

无。

## 依赖关系<a name="section57771982"></a>

无。
