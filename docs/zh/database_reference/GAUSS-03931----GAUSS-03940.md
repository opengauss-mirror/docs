---
description: 本文介绍 openGauss 数据库 GAUSS-03931 -- GAUSS-03940 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-03931 -- GAUSS-03940

GAUSS-03935: "user mapping not found for '%s'"

SQLSTATE: 42704

错误原因：初始化Foreign data wrapper出现问题。

解决办法：请检查使用中的gds、hdfs外表以及roach、obs设置是否正确。若不正确，请联系技术支持工程师提供技术支持。

GAUSS-03936: "foreign-data wrapper handler function %u did not return an FdwRoutine struct"

SQLSTATE: XX000

错误原因：初始化Foreign data wrapper出现问题。

解决办法：请检查使用中的gds、hdfs外表以及roach、obs设置是否正确。若不正确，请联系技术支持工程师提供技术支持。

GAUSS-03937: "foreign-data wrapper '%s' has no handler"

SQLSTATE: 55000

错误原因：初始化Foreign data wrapper出现问题。

解决办法：请检查使用中的gds、hdfs外表以及roach、obs设置是否正确。若否，请联系技术支持工程师提供技术支持。

GAUSS-03940: "unexpected delimiter"

SQLSTATE: F0000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。
