# GUC参数log\_directory设置不正确引起的core问题<a name="ZH-CN_TOPIC_0289901017"></a>

## 问题现象<a name="zh-cn_topic_0283137178_zh-cn_topic_0059778167_s7a2ed06fefd0448fae90f40fe4291f8d"></a>

数据库进程拉起后出现coredump，日志无内容。

## 原因分析<a name="zh-cn_topic_0283137178_zh-cn_topic_0059778167_s74d2dfcb815b4d8ca504c549a923e5ed"></a>

GUC参数log\_directory设置的路径不可读取或无访问权限，数据库在启动过程中进行校验失败，通过panic日志退出程序。

## 处理办法<a name="zh-cn_topic_0283137178_section485620163250"></a>

GUC参数log\_directory设置为合法路径，具体请参考[log\_directory](../DatabaseReference/记录日志的位置.md#zh-cn_topic_0283136719_zh-cn_topic_0237124721_zh-cn_topic_0059778787_sfbedf09fcf1a4223a4538679f80f12a9)。

