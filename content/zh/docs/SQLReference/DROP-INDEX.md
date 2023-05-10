# DROP INDEX

## 功能描述<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s6e7bed7d44604f749e4ea7043f81b07b"></a>

删除索引。

## 注意事项<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_saafc32e8c71d4cb7b7d30678c9e4658d"></a>

只有索引的所有者或者拥有索引所在表的INDEX权限的用户有权限执行DROP INDEX命令，系统管理员默认拥有此权限。

对于全局临时表，当某个会话已经初始化了全局临时表对象（包括创建全局临时表和第一次向全局临时表内插入数据）时，其他会话不能够执行该表上索引的删除操作。

## 语法格式<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s79208f25fe214e06b6c7f661c030f3d1"></a>

```
DROP INDEX [ CONCURRENTLY ] [ IF EXISTS ] 
    index_name [, ...] [ CASCADE | RESTRICT ];
```

## 参数说明<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s99e6f6efb9f3448f9de8894607958cd3"></a>

-   **CONCURRENTLY**

    以不加锁的方式删除索引。删除索引时，一般会阻塞其他语句对该索引所依赖表的访问。加此关键字，可实现删除过程中不做阻塞。

    此选项只能指定一个索引的名称，并且CASCADE选项不支持。

    普通DROP INDEX命令可以在事务内执行，但是DROP INDEX CONCURRENTLY不可以在事务内执行。

-   **IF EXISTS**

    如果指定的索引不存在，则发出一个notice而不是抛出一个错误。

-   **index\_name**

    要删除的索引名。

    取值范围：已存在的索引。

-   **CASCADE | RESTRICT**
    -   CASCADE：表示允许级联删除依赖于该索引的对象。
    -   RESTRICT（缺省值）：表示有依赖与此索引的对象存在，则该索引无法被删除。


## 示例<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s95dd4a9a45334e81be4841d86d7a47f1"></a>

请参见CREATE INDEX的[示例](CREATE-INDEX.md#zh-cn_topic_0283136578_zh-cn_topic_0237122106_zh-cn_topic_0059777455_s985289833081489e9d77c485755bd362)。

## 相关链接<a name="zh-cn_topic_0283136794_zh-cn_topic_0237122140_zh-cn_topic_0059779018_s299c55b981d1489986df6a6cf27b73d1"></a>

[ALTER INDEX](ALTER-INDEX.md)，[CREATE INDEX](CREATE-INDEX.md)

