# TPCC运行时，注入磁盘满故障，TPCC卡住的问题

## 问题现象<a name="zh-cn_topic_0283136782_section526616331423"></a>

TPCC运行时，注入磁盘满故障，TPCC卡住，故障消除后，TPCC自动续跑。

## 原因分析<a name="zh-cn_topic_0283136782_section1710704115427"></a>

数据库本身机制，在性能日志（gs\_profile）所在磁盘满时，导致无法写入而陷入无限等待，表现为TPCC卡住。磁盘满故障消除后，性能日志能正常写入，TPCC恢复正常。

## 处理分析<a name="zh-cn_topic_0283136782_section12323144814214"></a>

外部监控磁盘使用状况，定时进行清理磁盘。

