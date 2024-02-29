# dd模拟块设备失败

## 现象
dd模拟块设备失败。

## 原因
dd模拟创建的块设备太大，创建失败。

## 解决方案
dd模拟创建的块设备大小为bs*count，选择合适的大小创建，推荐大小为20G。一般不小于10G。创建命令如下（以20G大小为例）
```shell
#/home/test/dss/dev/dss-dba 目录为写入卷名加dd模拟出来的设备名字的文件
dd if=/dev/zero of=/home/test/dss/dev/dss-dba bs=2M count=10240 >/dev/null 2>&1
```