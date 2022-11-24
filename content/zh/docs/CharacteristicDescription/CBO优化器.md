# CBO优化器<a name="ZH-CN_TOPIC_0000001088278192"></a>

## 可获得性<a name="section3480125215575"></a>

本特性自openGauss 1.0.0版本开始引入。

## 特性简介<a name="section5814521587"></a>

openGauss优化器是基于代价的优化（Cost-Based Optimization，简称CBO）。

## 客户价值<a name="section148987345811"></a>

openGauss CBO优化器能够在众多计划中依据代价选出最高效的执行计划，最大限度的满足客户业务要求。

## 特性描述<a name="section117041846581"></a>

在CBO优化器模型下，数据库根据表的元组数、字段宽度、NULL记录比率、DISTINCT值、MCV值、HB值等表的特征值，以及一定的代价计算模型，计算出每一个执行步骤的不同执行方式的输出元组数和执行代价（cost），进而选出整体执行代价最小、首元组返回代价最小的执行方式进行执行。

## 特性增强<a name="section21149265913"></a>

无。

## 特性约束<a name="section51513617597"></a>

无。

## 依赖关系<a name="section20491151513592"></a>

无。
