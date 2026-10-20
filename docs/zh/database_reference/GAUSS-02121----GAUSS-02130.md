---
description: 本文介绍 openGauss 数据库 GAUSS-02121 -- GAUSS-02130 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-02121 -- GAUSS-02130

GAUSS-02124: "Bucket id\(%d:%d\) out of range."

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-02125: "Node\(%d\) has no buckets on it."

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-02128: "PGXC Group %s: group already defined"

SQLSTATE: 42710

错误原因：group已经被定义过。

解决办法：删除已定义的同名group，或修改新的group名称。

GAUSS-02129: "PGXC node %s: only Datanodes can be group members"

SQLSTATE: 42601

错误原因：group的成员只能为DN类型。

解决办法：修改创建node group的SQL语句。
