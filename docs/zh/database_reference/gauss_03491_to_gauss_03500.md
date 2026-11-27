---
description: 本文介绍 openGauss 数据库 GAUSS-03491 -- GAUSS-03500 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-03491 -- GAUSS-03500

GAUSS-03492: "cannot assign OIDs during recovery"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03493: "Open file %s failed. %s\\n"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03494: "Close file %s failed. %s\\n"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03495: "seek file %s failed. %s\\n"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03496: "clog\_redo: unknown op code %u"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03498: "recovery is in progress"

SQLSTATE: 55000

错误原因：系统处于前滚阶段，不能执行WAL控制函数。

解决办法：请等待系统启动完毕后，重新执行WAL控制函数。

GAUSS-03500: "WAL level not sufficient for creating a restore point"

SQLSTATE: 55000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。
