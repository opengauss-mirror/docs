# 布尔类型

相比于原始的openGauss，dolphin对于布尔类型的修改主要为：

- 将布尔类型的输出表现从't'和'f'修改为'1'和'0'。此修改仅在除了gs_dump，gs_dumpall，gsql，gs_probackup，gs_rewind，gs_clean以外的工具生效，如JDBC。

关于原始的openGauss的布尔类型，更多信息请见[openGauss布尔类型](../SQLReference/布尔类型.md)。

## 示例<a name="zh-cn_topic_0283137359_zh-cn_topic_0237121929_zh-cn_topic_0059777457_s2cf0ef56c49a4e58b4a2e5507196b56f"></a>

```
--gsql中，布尔类型回显仍是't'和'f'。
openGauss=# SELECT true;
 bool
------
 t
(1 row)

openGauss=# SELECT false;
 bool
------
 f
(1 row)
```

