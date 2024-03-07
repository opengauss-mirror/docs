# 设置日志级别导致主节点coredump

## 现象
利用命令"gs_guc set -N all -I all -c "client_min_messages=DEBUG5"",设置日志级别为DEBUG5后查看节点状态，主节点CoreDump。

## 原因
目前资源池化不支持设置日志级别为DEBUG5.

## 解决方案
建议日志级别不低于log级别。