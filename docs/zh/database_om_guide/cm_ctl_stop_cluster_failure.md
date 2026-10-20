---
description: 本文介绍 openGauss cm_ctl stop集群失败 的相关内容，涵盖 现象、原因 等内容。
keywords: [openGauss, cm_ctl stop集群失败, 数据库运维, 现象, 原因]
---

# cm_ctl stop集群失败

## 现象

cm_ctl stop集群失败，利用ssh命令检查互信，发现无法连通。

## 原因

数据库互信掉了。/etc/hosts文件中互信记录被删除。

## 解决方案

修改/etc/hosts文件，按下图方法将记录添加回来。

![Alt text](image-6.png)
