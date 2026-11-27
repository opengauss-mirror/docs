---
description: 本文介绍 openGauss 数据库 GAUSS-02201 -- GAUSS-02210 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-02201 -- GAUSS-02210

GAUSS-02202: "Failed to PREPARE the transaction on one or more nodes"

SQLSTATE: XX000

错误原因：系统内部错误：无法在节点上准备所需的事务。

解决办法：内部错误，请联系技术支持工程师提供技术支持。

GAUSS-02209: "Error while running COPY"

SQLSTATE: XX000

错误原因：系统内部错误：在收集信息时发现来自于DN的非预期响应。

解决办法：内部错误，请联系技术支持工程师提供技术支持。

GAUSS-02210: "could not obtain connection from pool"

SQLSTATE: XX000

错误原因：无法从连接池中获得连接。

解决办法：建议设置更大的max\_pool\_size值。
