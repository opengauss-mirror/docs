# SQL自诊断

用户在执行查询或者执行INSERT/DELETE/UPDATE/CREATE TABLE AS语句时，可能会遇到性能问题。这种情况下，通过查询[GS\_WLM\_SESSION\_STATISTICS](../DatabaseReference/GS_WLM_SESSION_STATISTICS.md)、[GS\_WLM\_SESSION\_HISTORY](../DatabaseReference/GS_WLM_SESSION_HISTORY.md)视图的warning字段可以获得对应查询可能导致性能问题的告警信息，为性能调优提供参考。

SQL自诊断的告警类型与[resource\_track\_level](../DatabaseReference/负载管理.md#zh-cn_topic_0283137479_zh-cn_topic_0237124729_section153571329142612)的设置有关系。如果resource\_track\_level设置为query，则可以诊断多列/单列统计信息未收集和SQL不下推的告警。如果resource\_track\_level设置为operator，则可以诊断所有的告警场景。

SQL自诊断的诊断范围与[resource\_track\_cost](../DatabaseReference/负载管理.md#zh-cn_topic_0283137479_zh-cn_topic_0237124729_section1089022732713)的设置有关系。当SQL的代价大于resource\_track\_cost时，SQL才会被诊断。SQL的代价可以通过explain来确认。

## 告警场景<a name="zh-cn_topic_0237121523_section1451592315913"></a>

目前支持对多列/单列统计信息未收集导致性能问题的场景上报告警。

如果存在单列或者多列统计信息未收集，则上报相关告警。调优方法可以参考[更新统计信息](更新统计信息.md)和[统计信息调优](统计信息调优.md)。

告警信息示例：

整表的统计信息未收集：

```
Statistic Not Collect:
    schema_test.t1
```

单列统计信息未收集：

```
Statistic Not Collect:
    schema_test.t2(c1,c2)
```

多列统计信息未收集：

```
Statistic Not Collect:
    schema_test.t3((c1,c2))
```

单列和多列统计信息未收集：

```
Statistic Not Collect:
    schema_test.t4(c1,c2)    schema_test.t4((c1,c2))
```

## 规格约束<a name="zh-cn_topic_0237121523_section728715105125"></a>

1.  告警字符串长度上限为2048。如果告警信息超过这个长度（例如存在大量未收集统计信息的超长表名、列名等信息）则不告警，只上报warning：

    ```
    WARNING, "Planner issue report is truncated, the rest of planner issues will be skipped"
    ```

2.  如果query存在limit节点（即查询语句中包含limit），则不会上报limit节点以下的Operator级别的告警。

