# SHUTDOWN

## 功能说明

数据库提供专用 SQL 语句实现优雅停机：执行SHUTDOWN命令时，系统先停止 TCP 侦听，等待所有会话的事务执行完毕后，再终止主进程。

## 使用须知

-- 若在事务开启状态下执行SHUTDOWN命令，系统将触发报错

-- 未指定IMMEDIATE或ABORT参数时；默认采用normal模式：该模式下，执行SHUTDOWN会停止接收客户端请求，等待未完成事务执行完毕、已连接会话断开后再停机

-- 当SHUTDOWN采用normal或immediate模式时，数据库停机前会保存统计信息，并刷新写入SYS_DML_STATS系统表

## 语法结构

SHUTDOWN [ IMMEDIATE | ABORT ]

### 参数解释

-- IMMEDIATE
  停止接收客户端请求，回滚所有未完成事务，随即退出主进程。

-- ABORT
  停止接收客户端请求，主进程立即退出（不等待事务处理）。

## 样例

-- 执行如下语句可立即停止数据库实例

SHUTDOWN ABORT;
