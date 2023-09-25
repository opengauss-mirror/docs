# libsmartscan 安装
1.获取Libsmartscan_5.1.0_openEuler_aarch64.tar.gz。

2.解压tar包，创建log目录。
```
tar -zxvf Libsmartscan_5.1.0_openEuler_aarch64.tar.gz
cd Libsmartscan_5.1.0_openEuler_aarch64
mkdir log
```

3.添加如下环境变量：
```
export UCX_NET_DEVCES=enp132s0 #enp132s0为libsmartscan监听ip对应的网口
export UCX_TLS=tcp
export UCX_IB_REG_METHODS=rcache,odp,direct
export LD_LIBRARY_PATH=/path/to/Libsmartscan_5.1.0_openEuler_aarch64/LibSmartScan_ThirdParty
/rpc/openEuler_2003_armlib:$LD_LIBRARY_PATH
```

4.配置参数，启动libsmartscan
```
./libsmartscan
```