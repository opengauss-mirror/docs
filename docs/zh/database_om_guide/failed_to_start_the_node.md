---
description: 本文介绍 openGauss 节点启动失败 的相关内容，涵盖 现象、原因 等内容。
keywords: [openGauss, 节点启动失败, 数据库运维, 现象, 原因]
---

# 节点启动失败

## 现象

节点启动失败，且观察该节点进程发现不存在cm_server,cm_agent,om_minitor等进程。且$GAUSSLOG/cm目录下没有对应的日志。查看om_monitor日志，发现om_monitor日志报错：limit值小于640000，导致启动失败。

## 原因

ulimit设置过小，导致启动失败。

## 解决方案

修改/etc/security/limits.conf文件，切回到root用户，重新执行预安装。
