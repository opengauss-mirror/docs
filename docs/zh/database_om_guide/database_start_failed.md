# 数据库启动失败

## 现象
数据库启动失败，进入$GAUSSLOG查看cm日志，发现是dms和dss重启5次之后依然失败，dms日志出现"cause depend recourse inst not alive"报错字样。查看dss日志，发现dss启动失败。出现"dss failed to start up"报错字样。

## 原因
dss没有成功拉起导致dms拉起失败。

## 解决方案
使用命令lsof - i:dss命令查看端口，如果发现端口备cm_agent占用，尝试使用cm_ctl stop && cm_ctl start命令重新拉起。
