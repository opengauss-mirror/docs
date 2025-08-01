# SMP并行执行

## 可获得性<a name="section3480125215575"></a>

本特性自openGauss 1.1.0版本开始引入。

## 特性简介<a name="section5814521587"></a>

openGauss的SMP并行技术是一种利用计算机多核CPU架构来实现多线程并行计算，以充分利用CPU资源来提高查询性能的技术。

## 客户价值<a name="section148987345811"></a>

SMP并行技术充分利用了系统多核的能力，来提高重查询的性能。

## 特性描述<a name="section117041846581"></a>

在复杂查询场景中，单个查询的执行较长，系统并发度低，通过SMP并行执行技术实现算子级的并行，能够有效减少查询执行时间，提升查询性能及资源利用率。SMP并行技术的整体实现思想是对于能够并行的查询算子，将数据分片，启动若干个工作线程分别计算，最后将结果汇总，返回前端。SMP并行执行增加数据交互算子**Stream**，实现多个工作线程之间的数据交互，确保查询的正确性，完成整体的查询。

## 特性增强<a name="section21149265913"></a>

-   openGauss 6.0.0 新增支持如下场景的并行：
    -   cmd中声明的NO SCROLL游标和作为并行函数入参的游标表达式支持并行。
    -   存在游标表达式入参的函数，如果创建时指定parallel_enable_clause，作为表函数执行支持并行。具体说明和约束请参见[CREATE-FUNCTION](../SQLReference/CREATE-FUNCTION.md)。
-   openGauss 7.0.0-RC1 新增支持如下场景的并行：
    -   Astore批量IUD场景支持并行。


## 特性约束<a name="section51513617597"></a>

-   索引扫描不支持并行执行。
-   MergeJoin不支持并行执行，openGauss 7.0.0-RC1版本新增特性，如果最优计划为MergeJoin则走串行计划。
-   WindowAgg order by不支持并行执行。
-   仅cmd中声明的NO SCROLL游标和作为并行函数入参的游标表达式支持并行，其他cursor不支持并行执行。
-   存储过程和函数内的查询不支持并行执行。
-   不支持子查询subplan和initplan的并行，以及包含子查询的算子的并行。
-   查询语句中带有median操作的查询不支持并行执行。
-   物化视图的更新不支持并行执行。
-   会触发trigger的查询不支持并行执行，特别的，对包含外键的表执行INSERT/UPDATE/DELETE操作会触发trigger。 
-   包含rownum的查询不支持并行执行。
-   涉及拼接大于1G的LOB的语句不支持并行执行。

## 依赖关系<a name="section20491151513592"></a>

无。

