---
description: 本文介绍 openGauss 数据库 GAUSS-04391 -- GAUSS-04400 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-04391 -- GAUSS-04400

GAUSS-04391: "Failed to initialze NativeTargetAsmPrinter for LLVM."

SQLSTATE: XX000

错误原因：启动数据库时初始化LLVM本地对象ASM打印器失败。

解决办法：重新启动数据库。

GAUSS-04392: "Failed to initialze NativeTargetAsmParser for LLVM."

SQLSTATE: XX000

错误原因：启动数据库时初始化LLVM本地对象ASM解析器失败。

解决办法：重新启动数据库。

GAUSS-04400: "Include identical distribution column '%s'"

SQLSTATE: 42P16

错误原因：建表时指定了两个相同的分布列。

解决办法：修改建表语句。
