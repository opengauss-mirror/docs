# 磁盘满故障引起的core问题<a name="ZH-CN_TOPIC_0289900936"></a>

## 问题现象<a name="zh-cn_topic_0283137100_zh-cn_topic_0059778167_s7a2ed06fefd0448fae90f40fe4291f8d"></a>

TPCC运行时，注入磁盘满故障，数据库进程gaussdb core掉，如下图所示。

![](figures/zh_image_0289900420.png)

## 原因分析<a name="zh-cn_topic_0283137100_zh-cn_topic_0059778167_s74d2dfcb815b4d8ca504c549a923e5ed"></a>

数据库本身机制，在磁盘满时，Xlog日志无法进行写入，通过panic日志退出程序。

## 处理办法<a name="zh-cn_topic_0283137100_section485620163250"></a>

外部监控磁盘使用状况，定时进行清理磁盘。

