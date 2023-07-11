# ndpplugin安装

openGauss-5.1.0版本已经默认编译安装ndpplugin插件，使用步骤如下：

1.获取LibSmartScan_5.1.0_openEuler_aarch64.tar.gz并解压。
```
tar -zxvf LibSmartScan_5.1.0_openEuler_aarch64.tar.gz
```
2.添加如下环境变量：
```
export LD_LIBRARY_PATH=/path/to/LibSmartScan_5.1.0_openEuler_aarch64/LibSmartScan_ThirdParty/ceph/openEuler_2003_armlib:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH=/path/to/LibSmartScan_5.1.0_openEuler_aarch64/LibSmartScan_ThirdParty/rpc/openEuler_2003_armlib:$LD_LIBRARY_PATH
```
3.postgresql.conf添加guc参数：
```
shared_preload_libraries = 'ndpplugin'
synchronize_seqscans = off
```
4.启动libsmartscan服务，见 **[libsmartscan安装](libsmartscan-安装.md)**。

5.创建数据库并连接数据库开始使用。
```
openGauss=# create extension ndpplugin;
CREATE EXTENSION
```
