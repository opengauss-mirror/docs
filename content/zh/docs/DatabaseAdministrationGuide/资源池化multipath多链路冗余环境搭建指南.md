# 资源池化multipath多链路冗余环境搭建指南

为了进一步提高`openGauss`资源池化集群与`Dorado`存储设备（磁阵）之间的稳定性，为每个数据库节点新增冗余链路，以提高数据库集群的可靠性

本文以`openGauss`资源池化一主一备环境为例，介绍`multipath`多链路冗余环境的搭建流程

本次`multipath`多链路冗余环境搭建设备信息详情如下表所示。在正常集群的硬件配置基础之上，每个节点需要额外使用一张网卡进行备用链路搭建

<table>
  <tr>
    <td>机器名</td>
    <td>IP</td>
    <td>OS</td>
    <td>选定主网卡 && IP</td>
    <td>选定备网卡 && IP</td>
    <td>磁阵IP</td>
  </tr>
  <tr>
    <td>centos131</td>
    <td>x.x.x.131</td>
    <td>CentOS 7</td>
    <td>enp3s0f0: y.y.y.131</td>
    <td>enp3s0f1: y.y.y.34</td>
    <td>y.y.y.229</td>
  </tr>
  <tr>
    <td>opengauss133</td>
    <td>x.x.x.133</td>
    <td>CentOS 7</td>
    <td>enp2s0f0: y.y.y.35</td>
    <td>enp129s0f0: y.y.y.133</td>
    <td>y.y.y.229</td>
  </tr>
</table>

## 一.  需要安装的软件

所需安装的软件及功能概述：

<table>
  <tr>
    <td>软件</td>
    <td>功能概述</td>
  </tr>
  <tr>
    <td>open-iscsi</td>
    <td>允许主机系统通过 TCP/IP 网络连接到远程的 iSCSI 存储设备，使得这些存储设备在主机看来就像本地的磁盘一样，从而实现存储区域网络的功能</td>
  </tr>
  <tr>
    <td>libvirt-daemon-driver-storage-iscsi</td>
    <td>一个存储驱动程序，用于在基于libvirt的虚拟化环境中管理和使用 iSCSI 存储，iSCSI 存储驱动程序使得虚拟机能够方便地访问和使用 iSCSI 存储设备</td>
  </tr>
  <tr>
    <td>device-mapper-multipath</td>
    <td>要工作在设备映射器框架之上，能够将多个物理路径（通过不同的网络连接或者存储接口连接到存储设备的路径）虚拟成一个逻辑设备，为操作系统提供统一的存储访问接口</td>
  </tr>
</table>

在不同`OS`下的`device-mapper-multipath`版本推荐，如下表所示

<table>
  <tr>
    <td>OS</td>
    <td>device-mapper-multipath推荐版本</td>
  </tr>
  <tr>
    <td>centOS 7(x86)</td>
    <td>0.4.9-111.el7.x86_64 ~ 0.4.9-136.el7_9.x86_64</td>
  </tr>
  <tr>
    <td>openEuler 20.03(arm)</td>
    <td>0.8.4-12.oe1.aarch64</td>
  </tr>
  <tr>
    <td>openEuler 22.03(arm)</td>
    <td>0.8.7-6.oe2203.aarch64</td>
  </tr>
</table>

(1) 安装软件

```shell
yum install -y open-iscsi
yum install -y libvirt-daemon-driver-storage-iscsi
yum install -y device-mapper-multipath
```

(2) 使用`rpm -qa|grep app`检查软件是否正确安装，若未正确安装，该命令的输出为空

```shell
[root@centos131 ~]# rpm -qa|grep iscsi
iscsi-initiator-utils-6.2.0.874-22.el7_9.x86_64
libiscsi-1.9.0-7.el7.x86_64
libvirt-daemon-driver-storage-iscsi-4.5.0-36.el7_9.5.x86_64
iscsi-initiator-utils-iscsiuio-6.2.0.874-22.el7_9.x86_64

[root@centos131 ~]# rpm -qa|grep libvirt-daemon-driver-storage-iscsi
libvirt-daemon-driver-storage-iscsi-4.5.0-36.el7_9.5.x86_64

[root@centos131 ~]# rpm -qa|grep multipath
device-mapper-multipath-0.4.9-136.el7_9.x86_64
device-mapper-multipath-libs-0.4.9-136.el7_9.x86_64
```

## 二.  检查网卡与磁阵的连通性

(1) 使用`ping`命令测试四张网卡与磁阵的连通性

```shell
ping y.y.y.229 -I NIC // NIC表示待测网卡
```

检查131机器上的网卡`enp3s0f0`,`enp3s0f1`与磁阵的连通性

若网卡不通，则使用命令关闭反向路由检查，这里提供两种方法

a. 法一：重启会失效
```shell
echo 0 > /proc/sys/net/ipv4/conf/all/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp3s0f0/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp3s0f1/rp_filter
```
b. 法二：写入文件，长期有效，之后使用命令`sysctl -p`让配置信息生效
```shell
vim /etc/sysctl.conf

net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.all.rp_filter = 0
net.ipv4.tcp_tw_recycle = 0
net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.enp3s0f0.rp_filter = 0
net.ipv4.conf.enp3s0f1.rp_filter = 0
```
再检查133机器上的网卡`enp2s0f0`，`enp129s0f0`与磁阵的连通性

使用命令关闭反向路由检查

重启失效
```shell
echo 0 > /proc/sys/net/ipv4/conf/all/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp2s0f0/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp129s0f0/rp_filter
```

```shell
vim /etc/sysctl.conf

net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.all.rp_filter = 0
net.ipv4.tcp_tw_recycle = 0
net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.enp129s0f0.rp_filter = 0
net.ipv4.conf.enp2s0f0.rp_filter = 0
```
备注：若关闭反向路由检查后，网卡依旧`ping`不通磁阵，可联系物料管理员协助处理

## 三.  发现并连接磁阵

在131机器上使用命令发现目标磁阵

(1) 使用`iscsiadm`命令执行`discovery`发现目标磁阵，并用指定网卡登录

```shell
iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f0
iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f1
```
```shell
[root@centos131 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f0

y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
Logging in to [iface: iscsi_enp3s0f0, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] (multiple)
Logging in to [iface: iscsi_enp3s0f1, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] (multiple)
Login to [iface: iscsi_enp3s0f0, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] successful.
Login to [iface: iscsi_enp3s0f1, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] successful.

[root@centos131 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f1

y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
```

在133机器上的操作与机器131上的相同

```shell
[root@opengauss133 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp2s0f0
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229

[root@opengauss133 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp129s0f0
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
```

从上面的命令输出可以看到，133少了2条链路，这里介绍冗余链路的配置过程

```shell
**********************************
******  冗余链路的配置过程  ********
**********************************

(1) 建立iscsi端口

iscsiadm -m iface -I iscsi_enp2s0f0 --op=new
iscsiadm -m iface -I iscsi_enp129s0f0 --op=new

(2) 绑定iscsi端口，建立网卡与iscsi端口之间的映射关系

iscsiadm -m iface -I iscsi_enp2s0f0 --op=update -n iface.net_ifacename -v enp2s0f0
iscsiadm -m iface -I iscsi_enp129s0f0 --op=update -n iface.net_ifacename -v enp129s0f0

(3) 确认iface配置

iscsiadm -m iface

(4) 重启iscsi服务

systemctl restart iscsi.service

(5) 若重启导致网络不通，执行关闭反向路由

echo 0 > /proc/sys/net/ipv4/conf/all/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp2s0f0/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp129s0f0/rp_filter

(6) 再次发射存储映射信息

iscsiadm -m discovery -t st -p y.y.y.229

(7) 查看端口服务信息

netstat -anp|grep 3260

**********************************
******  冗余链路的配置过程  ********
**********************************
```

## 四.  在Dorado的device manager平台进行主机和启动器绑定映射，并生成4块盘

(1) 创建主机`cenos131`，`centos133`

(2) 创建主机组`centos_hg`

(3) 将主机加入主机组

(4) 创建`lun`---为了生成4块盘

```shell
[15:0:0:1]   disk    HUAWEI   XSG1             6000  /dev/sdl   36382028100c0772b338f5c8900000011   214GB
[15:0:0:2]   disk    HUAWEI   XSG1             6000  /dev/sdm   36382028100c0772b338f5c8900000012   214GB
[15:0:0:3]   disk    HUAWEI   XSG1             6000  /dev/sdn   36382028100c0772b338f5c8900000015   214GB
[15:0:0:4]   disk    HUAWEI   XSG1             6000  /dev/sdo   36382028100c0772b338f5c8900000016   214GB
```


## 五.  启动multipath

```shell
systemctl enable multipathd
systemctl start multipathd
```

使用`multipath -ll`查看盘的映射情况，当其输出为空时，表示配置有误，修复方法如下：

(1) 检查`multipath`的相关模块是否安装成功

```shell
[root@centos131 ~]# lsmod |grep dm_multipath

dm_multipath           27792  2 dm_round_robin,dm_service_time
dm_mod                128595  12 dm_multipath,dm_log,dm_mirror
```

(2) 将`dm-multipath`内核模块加载到`Linux`系统内核中，该模块是多路径功能的核心组成部分，主要用于实现存储设备的多路径访问

```shell
modprobe dm-multipath
```

(3) 将`dm-round-robin`内核模块加载到`Linux`系统内核中，该模块是`Linux`系统中设备映射器的一部分，主要功能是实现一种轮询的`I/O`调度策略 

```shell
modprobe dm-round-robin
```

(4) 开启`multipath`服务
```shell
service multipathd start

Redirecting to /bin/systemctl start multipathd.service
```

(5) 使用`multipath -v2`命令验证多路径功能是否正常启用

```shell
multipath -v2

Nov 15 16:34:16 | sdg: alua not supported
Nov 15 16:34:16 | sdi: alua not supported
Nov 15 16:34:16 | sdk: alua not supported
Nov 15 16:34:16 | sdm: alua not supported
Nov 15 16:34:16 | sdf: alua not supported
Nov 15 16:34:16 | sdh: alua not supported
Nov 15 16:34:16 | sdj: alua not supported
Nov 15 16:34:16 | sdl: alua not supported
```

```shell
[root@centos131 ~]# multipath -ll

[root@centos131 ~]# iscsiadm -m session
tcp: [38] y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229 (non-flash)
tcp: [39] y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229 (non-flash)
```

(6) 退出之前建立的会话

```shell
[root@centos131 ~]# iscsiadm -m session -u
Logging out of session [sid: 38, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260]
Logging out of session [sid: 39, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260]
```

(7) 重新发现磁阵并连接

```shell
[root@centos131 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f0
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
Logging in to [iface: iscsi_enp3s0f0, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] (multiple)
Logging in to [iface: iscsi_enp3s0f1, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] (multiple)
Login to [iface: iscsi_enp3s0f0, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] successful.
Login to [iface: iscsi_enp3s0f1, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] successful.

[root@centos131 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f1
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
```

(8) 查看建立的`TCP`会话

```shell
[root@centos131 ~]# iscsiadm -m session
tcp: [40] y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229 (non-flash)
tcp: [41] y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229 (non-flash)
```

(9) 使用命令`multipath -ll`查看盘的映射情况

```shell
[root@centos131 ~]# multipath -ll
Nov 15 16:35:38 | sdk: alua not supported
Nov 15 16:35:38 | sdm: alua not supported
mpathe (36382028100c0772b338f5c8900000016) dm-6 HUAWEI  ,XSG1
size=200G features='0' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=-1 status=active
  |- 50:0:0:4 sdk 8:160 active ready running
  `- 51:0:0:4 sdm 8:192 active ready running
Nov 15 16:35:38 | sdi: alua not supported
Nov 15 16:35:38 | sdl: alua not supported
mpathd (36382028100c0772b338f5c8900000015) dm-5 HUAWEI  ,XSG1
size=200G features='0' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=-1 status=active
  |- 50:0:0:3 sdi 8:128 active ready running
  `- 51:0:0:3 sdl 8:176 active ready running
Nov 15 16:35:38 | sdg: alua not supported
Nov 15 16:35:38 | sdj: alua not supported
mpathc (36382028100c0772b338f5c8900000012) dm-4 HUAWEI  ,XSG1
size=200G features='0' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=-1 status=active
  |- 50:0:0:2 sdg 8:96  active ready running
  `- 51:0:0:2 sdj 8:144 active ready running
Nov 15 16:35:38 | sdf: alua not supported
Nov 15 16:35:38 | sdh: alua not supported
mpathb (36382028100c0772b338f5c8900000011) dm-3 HUAWEI  ,XSG1
size=200G features='0' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=-1 status=active
  |- 50:0:0:1 sdf 8:80  active ready running
  `- 51:0:0:1 sdh 8:112 active ready running
```

经过该步骤之后，在`multipath -ll`命令的输出中，`mpathb`、`mpathc`、`mpathd`及`mpathe`为多链路的标志且可观察到第四步生成的4块盘所对应的盘符`dm-*`，每个盘都有两条链路且状态都是`active ready running`

## 六.  查看四块盘生成的盘符

使用`ll /dev/dm-*`命令依次查看对应盘的盘符

```shell
[root@centos131 script]# ll /dev/dm-3
brw-rw---- 1 root disk 253, 3 Nov 15 16:35 /dev/dm-3
[root@centos131 script]# ll /dev/dm-4
brw-rw---- 1 root disk 253, 4 Nov 15 16:35 /dev/dm-4
[root@centos131 script]# ll /dev/dm-5
brw-rw---- 1 root disk 253, 5 Nov 15 16:35 /dev/dm-5
[root@centos131 script]# ll /dev/dm-6
brw-rw---- 1 root disk 253, 6 Nov 15 16:35 /dev/dm-6
```

## 七.  资源池化环境搭建

在资源池化集群的`xml`文件中，将四个盘的盘符修改为相应的编号`/dev/dm-*`即可，后续流程与资源池化环境搭建相同

## 八.  可靠性&&可用性测试

后续测试，可在主备同时跑`TPCC`，期间可使用命令`ip link set NIC down`或者`ifdown NIC`对网卡进行`DOWN`操作，可持续几分钟，或者使用脚本在一段时间内反复执行`DOWN`和`UP`操作且中间可夹杂`SLEEP`操作，观察集群状态和业务执行情况，以验证`multipath`多链路冗余环境给集群带来的可用性及可靠性