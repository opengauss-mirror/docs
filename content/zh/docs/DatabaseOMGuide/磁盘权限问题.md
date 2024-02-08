# 磁盘权限问题

## 现象
磁盘没有权限禁止访问，出现"[GAUSS-51400]:Failed to execute the command : dd if=/dev/zero of=/home/test/dss/dev/dss-dba bs=2M count=51200 >/dev/null 2>&1. ERROR: dd: failed to open '/dev/xxx': Permission denied"，字样报错。

## 原因
用户对磁盘没有权限。

## 解决方案
修改磁盘权限或在XML文件中写入正确的磁盘信息。