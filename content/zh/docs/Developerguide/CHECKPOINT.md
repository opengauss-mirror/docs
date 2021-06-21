# CHECKPOINT<a name="ZH-CN_TOPIC_0289900495"></a>

## 功能描述<a name="zh-cn_topic_0283137558_zh-cn_topic_0237122089_zh-cn_topic_0059778147_s45168794daa74bc2a308ea3c943e0a93"></a>

检查点（CHECKPOINT）是一个事务日志中的点，所有数据文件都在该点被更新以反映日志中的信息，所有数据文件都将被刷新到磁盘。

设置事务日志检查点。预写式日志（WAL）缺省时在事务日志中每隔一段时间放置一个检查点。可以使用gs\_guc命令设置相关运行时参数（checkpoint\_segments，checkpoint\_timeout和incremental\_checkpoint\_timeout）来调整这个原子化检查点的间隔。

## 注意事项<a name="zh-cn_topic_0283137558_zh-cn_topic_0237122089_zh-cn_topic_0059778147_s86cf086bf81043cba0f2133b169b333d"></a>

-   只有系统管理员和运维管理员可以调用CHECKPOINT。
-   CHECKPOINT强制立即进行检查，而不是等到下一次调度时的检查点。

## 语法格式<a name="zh-cn_topic_0283137558_zh-cn_topic_0237122089_zh-cn_topic_0059778147_s9089f4a8029c4cdaaf4f52fc3153da03"></a>

```
CHECKPOINT;
```

## 参数说明<a name="zh-cn_topic_0283137558_zh-cn_topic_0237122089_zh-cn_topic_0059778147_sf5626489e88940cda9697ac4b596920d"></a>

无。

## 示例<a name="zh-cn_topic_0283137558_zh-cn_topic_0237122089_zh-cn_topic_0059778147_s09b9f59580a44f179986ca468bb6eb57"></a>

```
--设置检查点。
openGauss=# CHECKPOINT;
```

