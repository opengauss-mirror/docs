# 缺少glibc等软件依赖导致预安装失败

## 问题现象

因缺少某个软件导致预安装/安装失败。

## 解决方法

安装缺少的软件。为确保数据库集群安装成功，操作系统上需要安装glibc、libaio-devel、libnsl（openEuler+x86环境中）、libreadline.so.7。