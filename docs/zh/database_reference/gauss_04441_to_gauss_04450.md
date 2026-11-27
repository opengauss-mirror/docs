---
description: 本文介绍 openGauss 数据库 GAUSS-04441 -- GAUSS-04450 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-04441 -- GAUSS-04450

GAUSS-04441: "Unsupport store format, only support ORC format for DFS table."

SQLSTATE: XX000

错误原因：系统内部错误。HDFS表检测数据格式，发现不是ORC格式。

解决办法：修改数据格式。

GAUSS-04442: "'INSERT' is not supported by the type of relation."

SQLSTATE: D0011

错误原因：该表不支持insert操作。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-04443: "'DELETE' is not supported by the type of relation."

SQLSTATE: D0011

错误原因：该表不支持delete操作。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-04444: "'UPDATE' is not supported by the type of relation."

SQLSTATE: D0011

错误原因：该表不支持update操作。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-04449: "parent of GROUPING is not Agg node"

SQLSTATE: 42P27

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-04450: "parent of GROUPINGID is not Agg node"

SQLSTATE: 42P27

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。
