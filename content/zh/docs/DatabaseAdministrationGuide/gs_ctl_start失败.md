# gs_ctl start 失败

## 现象
利用gs_ctl start命令启动数据库失败

## 原因
dd模拟空间太小导致gs_ctl start启动失败。

## 解决方案
擦除头部文件，重新用dd命令模拟块设备文件，dd模拟块设备大小一般不小10G，推荐大小为20G（模拟块设备的大小为bs*count）。
```shell
dd if=/dev/zero of=/home/test/dss/dev/dss-dba bs=2M count=100 conv=notrunc >/dev/null 2>&1
dd if=/dev/zero of=/home/test/dss/dev/dss-dba bs=2M count=10240 >/dev/null 2>&1