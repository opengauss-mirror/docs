## spqplugin.enable_spq

**参数说明**：参数值为布尔类型，该参数用于开启/关闭插件。

**取值范围**：布尔型

-   on表示使用新增兼容性功能。
-   off表示关闭兼容性功能，使用内核原有功能。

**默认值**：off

## spqplugin.cluster_map

**参数说明**：参数值为字符串类型，该参数用于指定计算节点ip地址及libcomm端口，配置的节点将接收和执行来自于主节点下发的多机计划并将计算结果返回给主节点，最终结果由主节点汇总计算返回给用户。

**取值范围**：字符串

spqplugin.cluster_map格式：
pgxc_node_name|ip|port
- pgxc_node_name 当前计算节点名称，与guc参数[pgxc_node_name](../DatabaseReference/openGauss事务.md)一致。且各个计算节点配置的节点名称应互不相同。
- ip 当前计算节点用于libcomm通信的ip地址，建议与集群通信ip配置为不同网段，避免相互之间网络影响。
- port 当前数据库端口。

以两节点为例，参数配置为：
```
spqplugin.cluster_map = 'node1|x.x.x.x|12300,node2|x.x.x.x|12300'
```

**默认值**：NULL（默认为空值，即不指定多机节点）

## spqplugin.spq_optimizer_log

**参数说明**：参数值为布尔类型，该参数用于开启/关闭多机并行优化器日志信息。

**取值范围**：布尔型

-   on表示开启多机并行优化器日志打印。
-   off表示关闭多机并行优化器日志打印。

**默认值**：off

## spqplugin.spq_optimizer_print_plan

**参数说明**：参数值为布尔类型，该参数用于开启/关闭打印多机并行计划树信息。

**取值范围**：布尔型

-   on表示开启多机并行计划树信息打印。
-   off表示关闭多机并行计划树信息打印。

**默认值**：off

## spqplugin.spq_optimizer_print_xform

**参数说明**：参数值为布尔类型，该参数用于开启/关闭打印多机并行xform信息。

**取值范围**：布尔型

-   on表示开启多机并行xorm信息打印。
-   off表示关闭多机并行xform信息打印。

**默认值**：off

## spqplugin.spq_optimizer_print_xform_results

**参数说明**：参数值为布尔类型，该参数用于开启/关闭打印多机并行xform输入输出结果信息。

**取值范围**：布尔型

-   on表示开启多机并行xorm输入输出结果信息打印。
-   off表示关闭多机并行xform输入输出结果信息打印。

**默认值**：off

## spqplugin.spq_optimizer_print_memo_after_exploration

**参数说明**：参数值为布尔类型，该参数用于开启/关闭打印多机并行memo优化过程。

**取值范围**：布尔型

-   on表示开启多机并行memo优化过程打印。
-   off表示关闭多机并行memo优化过程打印。

**默认值**：off

## spqplugin.spq_optimizer_print_memo_after_implementation

**参数说明**：参数值为布尔类型，该参数用于开启/关闭打印多机并行memo优化过程的替换计划。

**取值范围**：布尔型

-   on表示开启多机并行memo优化过程的替换计划打印。
-   off表示关闭多机并行memo优化过程的替换计划打印。

**默认值**：off

## spqplugin.spq_optimizer_print_memo_after_optimization

**参数说明**：参数值为布尔类型，该参数用于开启/关闭打印多机并行memo优化过程的最终计划。

**取值范围**：布尔型

-   on表示开启多机并行memo优化过程的最终计划打印。
-   off表示关闭多机并行memo优化过程的最终计划打印。

**默认值**：off

## spqplugin.spq_optimizer_print_job_scheduler

**参数说明**：参数值为布尔类型，该参数用于开启/关闭打印多机并行任务调度信息。

**取值范围**：布尔型

-   on表示开启多机并行任务调度信息打印。
-   off表示关闭多机并行任务调度信息打印。

**默认值**：off

## spqplugin.spq_optimizer_print_group_properties

**参数说明**：参数值为布尔类型，该参数用于开启/关闭打印多机并行算子属性信息。

**取值范围**：布尔型

-   on表示开启多机并行算子属性信息打印。
-   off表示关闭多机并行算子属性信息打印。

**默认值**：off

## spqplugin.spq_optimizer_print_optimization_cost

**参数说明**：参数值为布尔类型，该参数用于开启/关闭打印多机并行优化代价信息。

**取值范围**：布尔型

-   on表示开启多机并行优化代价信息打印。
-   off表示关闭多机并行优化代价信息打印。

**默认值**：off

## spqplugin.spq_optimizer_print_optimization_stats

**参数说明**：参数值为布尔类型，该参数用于开启/关闭打印多机并行优化状态信息。

**取值范围**：布尔型

-   on表示开启多机并行优化状态信息打印。
-   off表示关闭多机并行优化状态信息打印。

**默认值**：off

## spqplugin.spq_optimizer_enable_nljoin

**参数说明**：参数值为布尔类型，该参数用于控制多机并行nested loop算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成nested loop算子。
-   off表示不允许多机并行优化器生成nested loop算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_indexjoin

**参数说明**：参数值为布尔类型，该参数用于控制多机并行index join算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成index join算子。
-   off表示不允许多机并行优化器生成index join算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_motions

**参数说明**：参数值为布尔类型，该参数用于控制多机并行motion算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成motion算子。
-   off表示不允许多机并行优化器生成motion算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_motion_broadcast

**参数说明**：参数值为布尔类型，该参数用于控制多机并行motion broadcast算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成motion broadcast算子。
-   off表示不允许多机并行优化器生成motion broadcast算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_motion_gather

**参数说明**：参数值为布尔类型，该参数用于控制多机并行motion gather算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成motion gather算子。
-   off表示不允许多机并行优化器生成motion gather算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_motion_redistribute

**参数说明**：参数值为布尔类型，该参数用于控制多机并行motion redistribute算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成motion redistribute算子。
-   off表示不允许多机并行优化器生成motion redistribute算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_sort

**参数说明**：参数值为布尔类型，该参数用于控制多机并行sort算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成sort算子。
-   off表示不允许多机并行优化器生成sort算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_materialize

**参数说明**：参数值为布尔类型，该参数用于控制多机并行materialize算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成materialize算子。
-   off表示不允许多机并行优化器生成materialize算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_partition_propagation

**参数说明**：参数值为布尔类型，该参数用于控制多机并行partition propagation算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成partition propagation算子。
-   off表示不允许多机并行优化器生成partition propagation算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_partition_selection

**参数说明**：参数值为布尔类型，该参数用于控制多机并行partition selection算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成partition selection算子。
-   off表示不允许多机并行优化器生成partition selection算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_outerjoin_rewrite

**参数说明**：参数值为布尔类型，该参数用于控制多机并行外连接重写。

**取值范围**：布尔型

-   on表示开启多机并行外连接重写。
-   off表示关闭多机并行外连接重写。

**默认值**：on

## spqplugin.spq_optimizer_enable_multiple_distinct_aggs

**参数说明**：参数值为布尔类型，该参数用于控制多机并行distinct agg。

**取值范围**：布尔型

-   on表示允许多机并行计划中包含多个distinct agg。
-   off表示不允许多机并行计划中包含多个distinct agg。

**默认值**：off

## spqplugin.spq_optimizer_enable_direct_dispatch

**参数说明**：参数值为布尔类型，该参数用于控制多机并行优化器分配任务。

**取值范围**：布尔型

-   on表示允许多机并行优化器直接分配任务。
-   off表示不允许多机并行优化器直接分配任务。

**默认值**：on

## spqplugin.spq_optimizer_enable_hashjoin_redistribute_broadcast_children

**参数说明**：参数值为布尔类型，该参数用于控制多机并行hash join算子左右子树的生成。

**取值范围**：布尔型

-   on表示允许多机并行hash join算子子树包含redistribute和broadcast。
-   off表示不允许多机并行hash join算子子树包含redistribute和broadcast。

**默认值**：off

## spqplugin.spq_optimizer_discard_redistribute_hashjoin

**参数说明**：参数值为布尔类型，该参数用于控制多机并行redistribute hash join算子的生成。

**取值范围**：布尔型

-   on表示舍弃多机并行redistribute hash join算子。
-   off表示不舍弃多机并行redistribute hash join算子。

**默认值**：off

## spqplugin.spq_optimizer_enable_broadcast_nestloop_outer_child

**参数说明**：参数值为布尔类型，该参数用于控制多机并行nested loop算子子树的生成。

**取值范围**：布尔型

-   on表示允许多机并行nested loop算子外连接包含broadcast。
-   off表示不允许多机并行nested loop算子外连接包含broadcast。

**默认值**：on

## spqplugin.spq_optimizer_enable_streaming_material

**参数说明**：参数值为布尔类型，该参数用于控制多机并行nested loop算子子树的生成。

**取值范围**：布尔型

-   on表示允许多机并行nested loop算子外连接包含broadcast。
-   off表示不允许多机并行nested loop算子外连接包含broadcast。

**默认值**：on

## spqplugin.spq_optimizer_enable_gather_on_segment_for_dml

**参数说明**：参数值为布尔类型，该参数用于控制多机并行DML优化。

**取值范围**：布尔型

-   on表示允许多机并行优化器中强制实施非主聚集来启用DML优化。
-   off表示不允许多机并行优化器中强制实施非主聚集来启用DML优化。

**默认值**：on

## spqplugin.spq_optimizer_enable_assert_maxonerow

**参数说明**：参数值为布尔类型，该参数用于控制多机并行行数检查。

**取值范围**：布尔型

-   on表示允许多机并行启用Assert MaxOneRow计划以在运行时检查行数。
-   off表示不允许多机并行启用Assert MaxOneRow计划以在运行时检查行数。

**默认值**：on

## spqplugin.spq_optimizer_enable_constant_expression_evaluation

**参数说明**：参数值为布尔类型，该参数用于控制多机并行常量表达式求值。

**取值范围**：布尔型

-   on表示允许多机并行常量表达式求值。
-   off表示不允许多机并行常量表达式求值。

**默认值**：on

## spqplugin.spq_optimizer_enable_bitmapscan

**参数说明**：参数值为布尔类型，该参数用于控制多机并行bitmap scan算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成bitmap scan算子。
-   off表示不允许多机并行优化器生成bitmap scan算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_outerjoin_to_unionall_rewrite

**参数说明**：参数值为布尔类型，该参数用于控制多机并行外连接是否重写为unionall。

**取值范围**：布尔型

-   on表示允许多机并行将外连接重写为unionall。
-   off表示不允许多机并行将外连接重写为unionall。

**默认值**：off

## spqplugin.spq_optimizer_enable_ctas

**参数说明**：参数值为布尔类型，该参数用于控制多机并行是否生成CTAS计划。

**取值范围**：布尔型

-   on表示允许多机并行生成CTAS计划。
-   off表示不允许多机并行生成CTAS计划。

**默认值**：off

## spqplugin.spq_optimizer_enable_partial_index

**参数说明**：参数值为布尔类型，该参数用于控制多机并行是否生成partial索引计划。

**取值范围**：布尔型

-   on表示允许多机并行生成partial索引计划。
-   off表示不允许多机并行生成partial索引计划。

**默认值**：on

## spqplugin.spq_optimizer_enable_dml

**参数说明**：参数值为布尔类型，该参数用于控制是否允许DML多机执行。

**取值范围**：布尔型

-   on表示允许DML多机并行。
-   off表示不允许DML多机并行。

**默认值**：off

## spqplugin.spq_optimizer_enable_dml_triggers

**参数说明**：参数值为布尔类型，该参数用于控制是否允许DML多机执行。

**取值范围**：布尔型

-   on表示允许DML多机并行。
-   off表示不允许DML多机并行。

**默认值**：off

## spqplugin.spq_optimizer_enable_dml_constraints

**参数说明**：参数值为布尔类型，该参数用于控制是否允许DML多机执行。

**取值范围**：布尔型

-   on表示允许具有检查约束和NOT NULL约束的DML多机并行。
-   off表示不允许具有检查约束和NOT NULL约束的DML多机并行。

**默认值**：off

## spqplugin.spq_optimizer_enable_master_only_queries

**参数说明**：参数值为布尔类型，该参数用于控制是否允许catalog表查询多机执行。

**取值范围**：布尔型

-   on表示允许catalog表查询多机执行。
-   off表示不允许catalog表查询多机执行。

**默认值**：off

## spqplugin.spq_optimizer_enable_hashjoin

**参数说明**：参数值为布尔类型，该参数用于控制多机并行hashjoin算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成hashjoin算子。
-   off表示不允许多机并行优化器生成hashjoin算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_dynamictablescan

**参数说明**：参数值为布尔类型，该参数用于控制多机并行dynamictablescan算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成dynamictablescan算子。
-   off表示不允许多机并行优化器生成dynamictablescan算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_indexscan

**参数说明**：参数值为布尔类型，该参数用于控制多机并行indexscan算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成indexscan算子。
-   off表示不允许多机并行优化器生成indexscan算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_indexonlyscan

**参数说明**：参数值为布尔类型，该参数用于控制多机并行indexonlyscan算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成indexonlyscan算子。
-   off表示不允许多机并行优化器生成indexonlyscan算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_tablescan

**参数说明**：参数值为布尔类型，该参数用于控制多机并行tablescan算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成tablescan算子。
-   off表示不允许多机并行优化器生成tablescan算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_seqsharescan

**参数说明**：参数值为布尔类型，该参数用于控制多机并行seqsharescan算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成seqsharescan算子。
-   off表示不允许多机并行优化器生成seqsharescan算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_shareindexscan

**参数说明**：参数值为布尔类型，该参数用于控制多机并行shareindexscan算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成shareindexscan算子。
-   off表示不允许多机并行优化器生成shareindexscan算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_hashagg

**参数说明**：参数值为布尔类型，该参数用于控制多机并行hashagg算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成hashagg算子。
-   off表示不允许多机并行优化器生成hashagg算子。

**默认值**：on

## spqplugin.spq_optimizer_enable_groupagg

**参数说明**：参数值为布尔类型，该参数用于控制多机并行groupagg算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成groupagg算子。
-   off表示不允许多机并行优化器生成groupagg算子。

**默认值**：on

## spqplugin.spq_optimizer_expand_fulljoin

**参数说明**：参数值为布尔类型，该参数用于控制多机并行使用union all扩展外连接。

**取值范围**：布尔型

-   on表示允许多机并行多机并行使用union all扩展外连接。
-   off表示不允许多机并行多机并行使用union all扩展外连接。

**默认值**：off

## spqplugin.spq_optimizer_enable_mergejoin

**参数说明**：参数值为布尔类型，该参数用于控制多机并行mergejoin算子的生成。

**取值范围**：布尔型

-   on表示允许多机并行优化器生成mergejoin算子。
-   off表示不允许多机并行优化器生成mergejoin算子。

**默认值**：on

## spqplugin.spq_optimizer_prune_unused_columns

**参数说明**：参数值为布尔类型，该参数用于控制多机并行优化计划。

**取值范围**：布尔型

-   on表示允许多机并行优化器修剪未使用的列。
-   off表示不允许多机并行优化器修剪未使用的列。

**默认值**：on

## spqplugin.spq_optimizer_enable_redistribute_nestloop_loj_inner_child

**参数说明**：参数值为布尔类型，该参数用于控制多机并行优化计划。

**取值范围**：布尔型

-   on表示允许多机并行nested loop左连接为redistribute。
-   off表示不允许多机并行nested loop左连接为redistribute。

**默认值**：on

## spqplugin.spq_optimizer_force_comprehensive_join_implementation

**参数说明**：参数值为布尔类型，该参数用于控制多机并行优化计划。

**取值范围**：布尔型

-   on表示允许多机并行使用comprehensive join。
-   off表示不允许多机并行使用comprehensive join。

**默认值**：off

## spqplugin.spq_optimizer_enable_replicated_table

**参数说明**：参数值为布尔类型，该参数用于控制是否允许replicate表查询多机执行。

**取值范围**：布尔型

-   on表示允许replicate表查询多机执行。
-   off表示不允许replicate表查询多机执行。

**默认值**：on

## spqplugin.spq_optimizer_enumerate_plans

**参数说明**：参数值为布尔类型，该参数用于控制多机并行优化计划。

**取值范围**：布尔型

-   on表示允许多机并行枚举计划。
-   off表示不允许多机并行枚举计划。

**默认值**：off

## spqplugin.spq_optimizer_sample_plans

**参数说明**：参数值为布尔类型，该参数用于控制多机并行优化计划。

**取值范围**：布尔型

-   on表示允许多机并行抽样计划。
-   off表示不允许多机并行抽样计划。

**默认值**：off

## spqplugin.spq_optimizer_extract_dxl_stats

**参数说明**：参数值为布尔类型，该参数用于控制多机并行在dxl中提取计划统计信息。

**取值范围**：布尔型

-   on表示允许多机并行在dxl中提取计划统计信息。
-   off表示不允许多机并行在dxl中提取计划统计信息。

**默认值**：off

## spqplugin.spq_optimizer_extract_dxl_stats_all_nodes

**参数说明**：参数值为布尔类型，该参数用于控制多机并行在dxl中提取计划统计信息。

**取值范围**：布尔型

-   on表示允许多机并行在所有节点dxl中提取计划统计信息。
-   off表示不允许多机并行在所有节点dxl中提取计划统计信息。

**默认值**：off

## spqplugin.spq_optimizer_print_missing_stats

**参数说明**：参数值为布尔类型，该参数用于控制多机并行打印缺少统计信息的列。

**取值范围**：布尔型

-   on表示允许多机并行打印缺少统计信息的列。
-   off表示不允许多机并行打印缺少统计信息的列。

**默认值**：on

## spqplugin.spq_optimizer_dpe_stats

**参数说明**：参数值为布尔类型，该参数用于控制多机并行为具有动态分区消除的分区表启用统计派生。

**取值范围**：布尔型

-   on表示允许多机并行为具有动态分区消除的分区表启用统计派生。
-   off表示不允许多机并行为具有动态分区消除的分区表启用统计派生。

**默认值**：on

## spqplugin.spq_optimizer_enable_derive_stats_all_groups

**参数说明**：参数值为布尔类型，该参数用于控制多机并行为所有组启用统计派生。

**取值范围**：布尔型

-   on表示允许多机并行为所有组启用统计派生。
-   off表示不允许多机并行为所有组启用统计派生。

**默认值**：off

## spqplugin.spq_optimizer_force_multistage_agg

**参数说明**：参数值为布尔类型，该参数用于控制多机并行计划生成。

**取值范围**：布尔型

-   on表示允许多机并行强制生成multistage agg计划。
-   off表示不允许多机并行强制生成multistage agg计划。

**默认值**：off

## spqplugin.spq_optimizer_force_three_stage_scalar_dqa

**参数说明**：参数值为布尔类型，该参数用于控制多机并行计划生成。

**取值范围**：布尔型

-   on表示允许多机并行强制为distinct qualified aggregate生成三阶段agg计划。
-   off表示不允许多机并行强制为distinct qualified aggregate生成三阶段agg计划。

**默认值**：on

## spqplugin.spq_optimizer_force_expanded_distinct_aggs

**参数说明**：参数值为布尔类型，该参数用于控制多机并行计划生成。

**取值范围**：布尔型

-   on表示允许多机并行强制扩展distinct agg。
-   off表示不允许多机并行强制扩展distinct agg。

**默认值**：on

## spqplugin.spq_optimizer_force_agg_skew_avoidance

**参数说明**：参数值为布尔类型，该参数用于控制多机并行计划生成。

**取值范围**：布尔型

-   on表示允许多机并行强制选择避免数据倾斜的agg计划。
-   off表示不允许多机并行强制选择避免数据倾斜的agg计划。

**默认值**：on

## spqplugin.spq_optimizer_penalize_skew

**参数说明**：参数值为布尔类型，该参数用于控制多机并行计划生成。

**取值范围**：布尔型

-   on表示允许多机并行惩罚数据倾斜计划。
-   off表示不允许多机并行惩罚数据倾斜计划。

**默认值**：on

## spqplugin.spq_optimizer_prune_computed_columns

**参数说明**：参数值为布尔类型，该参数用于控制多机并行修剪未使用的计算列。

**取值范围**：布尔型

-   on表示允许多机并行修剪预处理时未使用的计算列。
-   off表示不允许多机并行修剪预处理时未使用的计算列。

**默认值**：on

## spqplugin.spq_enable_btbuild

**参数说明**：参数值为布尔类型，该参数用于多机并行创建btree索引。

**取值范围**：布尔型

-   on表示使用多机并行创建btree索引。
-   off表示不使用多机并行创建btree索引，使用内核原有功能。

**默认值**：off

## spqplugin.spq_enable_btbuild_cic

**参数说明**：参数值为布尔类型，该参数用于多机并行在线创建btree索引。

**取值范围**：布尔型

-   on表示使用多机并行在线创建btree索引。
-   off表示不使用多机并行在线创建btree索引，使用内核原有功能。

**默认值**：off

## spqplugin.spq_enable_insert_select

**参数说明**：参数值为布尔类型，该参数用于控制多机并行insert操作。

**取值范围**：布尔型

-   on表示使用多机并行插入数据。
-   off表示不使用多机并行插入数据，使用内核原有功能。

**默认值**：off

## spqplugin.spq_enable_insert_from_tableless

**参数说明**：参数值为布尔类型，该参数用于控制多机并行不带子查询的insert操作。

**取值范围**：布尔型

-   on表示允许多机并行不带子查询的insert操作。
-   off表示使用多机并行insert的语句需要带有子查询。

**默认值**：off

## spqplugin.spq_enable_insert_order_sensitive

**参数说明**：参数值为布尔类型，该参数用于保证按照查询结果的顺序写入数据。

**取值范围**：布尔型

-   on表示按照查询结果的顺序写入数据。
-   off表示不保证写入数据的顺序。

**默认值**：off

## spqplugin.spq_enable_delete

**参数说明**：参数值为布尔类型，该参数用于控制多机并行delete操作。

**取值范围**：布尔型

-   on表示使用多机并行删除数据。
-   off表示不使用多机并行删除数据，使用内核原有功能。

**默认值**：off

## spqplugin.spq_enable_update

**参数说明**：参数值为布尔类型，该参数用于控制多机并行update操作。

**取值范围**：布尔型

-   on表示使用多机并行更新数据。
-   off表示不使用多机并行更新数据，使用内核原有功能。

**默认值**：off

## comm_max_stream

**参数说明**: 参数值为整数，该参数用于限制多机并行中两个节点间最大stream个数（streamID个数）。

-   计算公式：  dop * dop * stream个数
-   若链接多个QE节点: (dop * dop * stream个数) * QE节点数
-   同时运行多个plan共用当前所有streamID，因此总stream数需要每个plan的stream个数相加

**取值范围**：1\~60000

**默认值**：1024
