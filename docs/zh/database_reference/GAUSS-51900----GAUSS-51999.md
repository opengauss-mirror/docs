---
description: 本文介绍 openGauss 数据库 GAUSS-51900 -- GAUSS-51999 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-51900 -- GAUSS-51999

GAUSS-51900: "The current OS is not supported."

SQLSTATE: 无

错误原因：不支持当前的操作系统。

解决办法：检查切换与之匹配的操作系统进行操作。

GAUSS-51901: "The OS versions are different among cluster nodes."

SQLSTATE: 无

错误原因：集群节点间操作系统版本不一致。

解决办法：确保集群中每个节点的操作系统版本一致。
