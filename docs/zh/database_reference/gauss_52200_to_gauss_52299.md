---
description: 本文介绍 openGauss 数据库 GAUSS-52200 -- GAUSS-52299 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-52200 -- GAUSS-52299

GAUSS-52200: "Unable to import module: %s."

SQLSTATE: 无

错误原因：采用系统默认python执行工具，导致导入包错：缺少python依赖的库。

解决办法：重新安装python。

GAUSS-52201: "The current python version %s is not supported."

SQLSTATE: 无

错误原因：操作系统默认的Python不是2.6.X或2.7.X。

解决办法：替换操作系统默认的Python编译器版本。
