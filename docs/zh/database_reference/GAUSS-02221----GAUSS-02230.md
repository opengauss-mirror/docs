---
description: 本文介绍 openGauss 数据库 GAUSS-02221 -- GAUSS-02230 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-02221 -- GAUSS-02230

GAUSS-02221: "Could not begin transaction on Datanodes"

SQLSTATE: XX000

错误原因：无法在主节点上开始事务。

解决办法：请检查当前集群连接状态。

GAUSS-02223: "Could not begin transaction on coordinators"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-02225: "Unexpected response from coordinator %u"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-02228: "prepared transaction with identifier '%s' does not exist"

SQLSTATE: XX000

错误原因：事务标识参数不存在。

解决办法：请检查输入参数，重新执行操作。

GAUSS-02229: "NULL junk attribute"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-02230: "Failed to read response from Datanode %u when ending query"

SQLSTATE: XX000

错误原因：无法从DN收到结果。

解决办法：检查DN的状态，重启集群后，重新查询。
