# 设置shared_buffers后备节点manually stopped

## 现象
利用命令"gs_guc set -N all -I all -c "shared_buffers=80GB""设置guc参数shared_buffers后，集群重启，原主节点starting，原备节点manually stopped。

## 原因
机器内存小于数据库参数设置的内存要求，导致数据库无法正常启动。

## 解决方案
尝试改小shared_buffers。