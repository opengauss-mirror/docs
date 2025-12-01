# om_monitor进程启动未成功

## 现象
数据库无法启动，检查进程发现不存在om_monitor进程，且报错出现limit设置过小。

## 原因
参数limit过小导致数据库无法启动。

## 解决方案
修改系统文件/etc/security/limits.confs，通过ulimit -n xxx命令修改limit的值。