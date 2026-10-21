---
description: 本文介绍 openGauss 数据库 GAUSS-04711 -- GAUSS-04720 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-04711 -- GAUSS-04720

GAUSS-04714: "Unsupported data type : %u."

SQLSTATE: 0A000

错误原因：HDFS表不支持的数据类型。

解决办法：根据提示的信息变更定义类型为HDFS表支持类型。

GAUSS-04715: "Invalid string for 'COMPRESSION' option."

SQLSTATE: 22023

错误原因：无效的压缩模式。

解决办法：创建表时设置正确压缩模式，HDFS只支持zlib和snappy。
