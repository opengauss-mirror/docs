---
description: 本文介绍 openGauss 数据库 GAUSS-03701 -- GAUSS-03710 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-03701 -- GAUSS-03710

GAUSS-03701: "spg\_redo: unknown op code %u"

SQLSTATE: XX000

错误原因：redo操作类型错误。

解决办法：内部错误，属于预防性报错机制。请联系技术支持工程师提供技术支持。

GAUSS-03702: "inconsistent tuple chain links in page %u of index '%s'"

SQLSTATE: XX000

错误原因：spgist内部tuple chain list出错。

解决办法：内部错误，属于预防性报错机制。请联系技术支持工程师提供技术支持。

GAUSS-03703: "unexpected SPGiST tuple state: %d"

SQLSTATE: XX000

系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03704: "inconsistent counts of deletable tuples"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03705: "redirection leads to root page of index '%s'"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03706: "allTheSame should not occur for k-d trees"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03707: "spgmerge: unimplemented"

SQLSTATE: XX000

错误原因：SPGIN索引不支持merge操作。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03708: "SPGiST does not support mark/restore"

SQLSTATE: XX000

系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03709: "inconsistent inner\_consistent results for allTheSame inner tuple"

SQLSTATE: XX000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-03710: "SP-GiST only supports forward scan direction"

SQLSTATE: XX000

系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。
