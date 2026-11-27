---
description: 本文介绍 openGauss 数据库 GAUSS-50800 -- GAUSS-50899 错误码的含义与处理方法，帮助用户定位并解决对应数据库问题。
keywords: [openGauss, GAUSS, 错误码]
---

# GAUSS-50800 -- GAUSS-50899

GAUSS-50800: "Regular tasks are not started."

SQLSTATE: 无

错误原因：定时任务未启动。

解决办法：启动定时任务。

GAUSS-50801: "Failed to set up tasks."

SQLSTATE: 无

错误原因：设置任务失败

解决办法：重新执行

GAUSS-50802: "Failed to %s·service."

SQLSTATE: 无

错误原因：重启定时任务服务失败。

解决办法：查看日志，查找出错误详细信息。

GAUSS-50803: "Failed to check user cron."

SQLSTATE: 无

错误原因：检查定时任务失败。

解决办法：检查集群状态是否正常，/bin/om\_monitor/\[cron\]文件是否存在。
