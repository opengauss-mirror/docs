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
*********************************
*****  冗余链路的配置过程-开始  *****
*********************************

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

*********************************
*****  冗余链路的配置过程-结束  *****
*********************************
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

为了确保在多人共用的环境中，`multipath`的配置过程对他人的环境没有影响，需要做一些预操作

a. 启用并初始化多链路配置文件

```shell
mpathconf --enable
```
执行完该命令之后，会在`/etc`下生成一个空的`multipath.conf`文件，其内容如下所示。该文件为`multipath`的核心文件，负责`multipath`相关的各种功能控制与参数配置，是异常重要的

```shell
# device-mapper-multipath configuration file

# For a complete list of the default configuration values, run either:
# # multipath -t
# or
# # multipathd show config

# For a list of configuration options with descriptions, see the
# multipath.conf man page.

defaults {
        user_friendly_names yes
        find_multipaths yes
}

blacklist_exceptions {
        property "(SCSI_IDENT_|ID_WWN)"
}

blacklist {
}
```

为了避免对他人环境的影响，在`blacklist`中写入`wwid "3*"`将所有的设备加入到`blacklist`中，再将多路径设备（第四步中生成的4块盘）加入到`blacklist_exceptions`中

在该操作之后，`multipath`扫描多路径设备时，除了`blacklist_exceptions`中的设备外，其他设备均会被忽略

b. `multipath`核心配置文件`multipath.conf`简介

`multipath.conf`文件可分为几个部分，见下表：

<table>
  <tr>
    <td>子部分</td>
    <td>功能说明</td>
  </tr>
  <tr>
    <td>blacklist</td>
    <td>黑名单，不被视为多路径设备的设备列表</td>
  </tr>
  <tr>
    <td>blacklist_exceptions：</td>
    <td>黑名单的豁免名单，若出现在黑名单中的设备被加入到该名单中，会被扫描为多路径设备</td>
  </tr>
  <tr>
    <td>defaults</td>
    <td>multipath的常规默认设置</td>
  </tr>
  <tr>
    <td>multipaths</td>
    <td>各个多路径设备特性的设置，这些值会覆盖在配置文件中的 overrides, devices, 和 defaults 部分指定的值</td>
  </tr>
  <tr>
    <td>device</td>
    <td>各个存储控制器的设置，这些值覆盖了在配置文件的 defaults 部分中指定的内容</td>
  </tr>
  <tr>
    <td>overrides</td>
    <td>适用于所有设备的设置，这些值覆盖了在配置文件的 devices 和 defaults 部分中指定的值</td>
  </tr>
</table>

当系统决定多路径设备的属性时，它会按照以下顺序检查 multipath.conf 文件中的单独部分的设置：

```shell
multipaths --> overrides --> devices --> defaults
```
c. `defaults`、`multipaths`关键参数说明

当在`multipaths`与`defaults`中有相同的参数时，会优先使用`multipaths`中的设定的参数

```shell
defaults {
       polling_interval        5
       path_selector           "round-robin 0"
       path_grouping_policy    multibus
       uid_attribute           ID_SERIAL
       prio                    alua
       path_checker            readsector0
       rr_min_io               100
       max_fds                 8192
       rr_weight               priorities
       failback                immediate
       no_path_retry           fail
       user_friendly_names     yes
}

multipaths {
       multipath {
               wwid                    3600508b4000156d700012000000b0000
               alias                   yellow
               path_grouping_policy    multibus
               path_selector           "round-robin 0"
               failback                manual
               rr_weight               priorities
               no_path_retry           5
       }
       multipath {
               wwid                    1DEC_____321816758474
               alias                   red
       }
}
```
在这两个子部分，有几个重要的参数需要介绍

`polling_interval`: 用于设置多路径设备的路径状态轮询间隔，即系统检查各条路径是否可用以及状态是否发生变化的时间周期

默认值通常在 5 到 10 秒之间，取值越小，路径状态的检查越频繁，系统能更快检测到路径故障并切换，但会增加系统开销

`path_selector`: 用于指定检查存储路径状态的方法，具体取值参考下表（默认值为`tur`）
<table>
  <caption>path_selector参数值介绍</caption>
  <tr>
    <td>参数值</td>
    <td>功能说明</td>
    <td>特点</td>
  </tr>
  <tr>
    <td>tur</td>
    <td>通过向存储设备发送特定的scsi命令[TEST_UNIT_READY]检查路径状态</td>
    <td>通用，简单</td>
  </tr>
  <tr>
    <td>emc_clariion</td>
    <td>专门为EMC Clariion存储设备设计的路径检查器</td>
    <td>充分利用设备优势，通用性差</td>
  </tr>
  <tr>
    <td>hp_sw</td>
    <td>专门为惠普存储设备设计的路径检查器</td>
    <td>充分利用设备优势，通用性差</td>
  </tr>
  <tr>
    <td>netapp_fcp</td>
    <td>适用于NetApp的光纤通道存储设备的路径检查器</td>
    <td>充分利用设备优势，通用性差</td>
  </tr>
  <tr>
    <td>readsector0</td>
    <td>读取存储设备的第0扇区检查路径状态的路径检查器</td>
    <td>原始，速度慢，通用</td>
  </tr>
  <tr>
    <td>write_file</td>
    <td>向指定文件写入数据来检查路径状态的路径检查器</td>
    <td>具有一定的灵活性</td>
  </tr>
</table>

`path_grouping_policy`: 用于定义多路径设备的路径分组策略，默认值为`failover`

<table>
  <caption>path_grouping_policy参数值介绍</caption>
  <tr>
    <td>参数值</td>
    <td>功能说明</td>
  </tr>
  <tr>
    <td>failover</td>
    <td>是一种主备模式的路径分组策略。在这种模式下，多条路径被分为活动路径和备用路径。通常只有活动路径用于数据传输，当活动路径出现故障时，备用路径会自动接管，确保数据的连续性</td>
  </tr>
  <tr>
    <td>multibus</td>
    <td>负载均衡模式。在这种策略下，所有路径同时参与工作，数据会根据一定的算法分布在不同的路径上进行传输，实现负载均衡，充分利用所有可用路径的带宽，提高整体性能</td>
  </tr>
  <tr>
    <td>group_by_serial</td>
    <td>根据存储设备的序列号对路径进行分组。具有相同序列号的存储设备的路径会被分在同一组，同一组内的路径按照一定的规则进行主备或负载均衡配置</td>
  </tr>
  <tr>
    <td>group_by_prio</td>
    <td>按照路径的优先级进行分组。用户可以为每条路径设置不同的优先级，优先级高的路径会被优先选择用于数据传输，当高优先级路径不可用时，再选择低优先级路径</td>
  </tr>
  <tr>
    <td>group_by_node_name</td>
    <td>根据存储设备的节点名称对路径进行分组</td>
  </tr>
</table>

`failback`: 用于控制当故障路径恢复正常后，是否自动将数据传输切换回原来的主路径，默认值为`manual`

<table>
  <caption>failback参数值介绍</caption>
  <tr>
    <td>参数值</td>
    <td>功能说明</td>
  </tr>
  <tr>
    <td>immediate</td>
    <td>当故障路径恢复后，系统会立即将数据传输切换回原主路径，这种方式能快速恢复到故障前的路径状态，最大限度地利用原主路径的性能优势</td>
  </tr>
  <tr>
    <td>manual</td>
    <td>故障路径恢复后，系统不会自动切换回原主路径，而是继续使用当前的备用路径或负载均衡路径，需要管理员手动干预才能将数据传输切换回原主路径</td>
  </tr>
  <tr>
    <td>followover</td>
    <td>指定只有路径组的第一个路径处于活跃状态时，才能执行自动故障恢复。当另一个节点请求故障切换时，这会让节点自动进行故障恢复</td>
  </tr>
  <tr>
    <td>delayed</td>
    <td>在故障路径恢复后延迟一段时间再进行切换，以避免在路径刚恢复时可能存在的不稳定因素对数据传输造成影响</td>
  </tr>
</table>

`fast_io_fail_tmo`: 当检测到当前路径I/O出现问题时，在此时间内（以`s`为单位）未解决，`multipathd`进程会认为该路径故障并进行路径切换

`no_path_retry`: 路径故障后的重试次数

`multipath`的参数很多，极其重要的参数在这里列出，可以根据不同场景需要自行配置

(1) 启动`multipathd`服务并设置开机启动

```shell
systemctl enable multipathd   // 设置开机启动
systemctl start multipathd    // 启动multipathd服务
```
(2) 清除多链路残留，重新配置并加载多链路，显示多链路拓扑

```shell
multipath -F   // 清除多链路残留
multipath -v2  // 重新加载多链路
multipath -ll  // 显示多链路拓扑
```

(3) 使用`multipath -ll`查看盘的映射情况，当其输出为空时，表示配置有误，修复方法如下：

a. 检查`multipath`的相关模块是否安装成功

```shell
[root@centos131 ~]# lsmod |grep dm_multipath

dm_multipath           27792  2 dm_round_robin,dm_service_time
dm_mod                128595  12 dm_multipath,dm_log,dm_mirror
```

b. 将`dm-multipath`内核模块加载到`Linux`系统内核中，该模块是多路径功能的核心组成部分，主要用于实现存储设备的多路径访问

```shell
modprobe dm-multipath
```

c. 将`dm-round-robin`内核模块加载到`Linux`系统内核中，该模块是`Linux`系统中设备映射器的一部分，主要功能是实现一种轮询的`I/O`调度策略 

```shell
modprobe dm-round-robin
```

d. 开启`multipath`服务
```shell
service multipathd start

Redirecting to /bin/systemctl start multipathd.service
```

e. 使用`multipath -v2`命令验证多路径功能是否正常启用

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

f. 退出之前建立的会话

```shell
[root@centos131 ~]# iscsiadm -m session -u
Logging out of session [sid: 38, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260]
Logging out of session [sid: 39, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260]
```

g. 重新发现磁阵并连接

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

h. 查看建立的`TCP`会话

```shell
[root@centos131 ~]# iscsiadm -m session
tcp: [40] y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229 (non-flash)
tcp: [41] y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229 (non-flash)
```

i. 使用命令`multipath -ll`查看多链路拓扑并检查盘的映射情况

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

注意：经过该步骤之后，需要检查各个节点上`multipath`对4块盘生成的盘符`dm-*`是否一致。若一致，可继续执行后续安装步骤；若不一致，可使用下述方法处理

(4) 各个节点`multipath`对4块盘生成的盘符不一致的解决方法[可选步骤]

a. 逐一修改各个节点的`multipath.conf`文件中的参数，并为多路径设备（4块盘）统一别名

```shell
vim /etc/multipath.conf

defaults {
        user_friendly_names no
        find_multipaths no
}

multipaths {
        multipath {
                wwid "36382028100c0772b109f1ce700000007"
                alias   aa
        }
        multipath {
                wwid "36382028100c0772b109f1ce700000008"
                alias   bb
        }
        multipath {
                wwid "36382028100c0772b109f1ce700000009"
                alias   cc
        }
        multipath {
                wwid "36382028100c0772b109f1ce70000000a"
                alias   dd
        }
}
```

在`defaults`部分，将`user_friendly_names`设置为`no`，并在`multipaths`部分，使用参数`alias`为每个多路径设备起别名

b. 清除多链路残留，重新配置并加载多链路，显示多链路拓扑

```shell
multipath -F   // 清除多链路残留
multipath -v2  // 重新加载多链路
multipath -ll  // 显示多路径拓扑

dd (36382028100c0772b109f1ce70000000a) dm-6 HUAWEI,XSG1
size=50G features='1 queue_if_no_path' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=1 status=active
  |- 0:0:0:4 sdn     8:208 active ready running
  `- 1:0:0:4 sdm     8:192 active ready running
aa (36382028100c0772b109f1ce700000007) dm-3 HUAWEI,XSG1
size=1000G features='1 queue_if_no_path' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=1 status=active
  |- 0:0:0:1 sdh     8:112 active ready running
  `- 1:0:0:1 sda     8:0   active ready running
bb (36382028100c0772b109f1ce700000008) dm-4 HUAWEI,XSG1
size=500G features='1 queue_if_no_path' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=1 status=active
  |- 0:0:0:2 sdj     8:144 active ready running
  `- 1:0:0:2 sdi     8:128 active ready running
cc (36382028100c0772b109f1ce700000009) dm-5 HUAWEI,XSG1
size=50G features='1 queue_if_no_path' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=1 status=active
  |- 0:0:0:3 sdl     8:176 active ready running
  `- 1:0:0:3 sdk     8:160 active ready running
```
从该命令的输出中，可以看到4个多路径设备的别名都设置为了`aa`、`bb`、`cc`及`dd`的形式

c. 进入`/dev/mapper`目录下，查看4个多路径设备产生的软链接

```shell
[root@openGauss54 ~]# cd /dev/mapper
[root@openGauss54 mapper]# ll
total 0
lrwxrwxrwx. 1 root root       7 Dec 18 10:12 aa -> ../dm-3
lrwxrwxrwx. 1 root root       7 Dec 18 10:12 bb -> ../dm-4
lrwxrwxrwx. 1 root root       7 Dec 18 10:12 cc -> ../dm-5
lrwxrwxrwx. 1 root root       7 Dec 18 10:12 dd -> ../dm-6
```
后续搭建资源池化集群环境时，在`xml`对应位置直接使用，例如，`/dev/mapper/aa`

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

在资源池化集群的`xml`文件中，若各个节点的多路径盘符一致，则将四个盘的盘符修改为相应的编号`/dev/dm-*`即可；若不一致，则使用对应的软链接`/dev/mapper/**`即可，后续流程与资源池化环境搭建相同

## 八.  可靠性&&可用性测试

后续测试，可在主备同时跑`TPCC`，期间可使用命令`ip link set NIC down`或者`ifdown NIC`对网卡进行`DOWN`操作，可持续几分钟，或者使用脚本在一段时间内反复执行`DOWN`和`UP`操作且中间可夹杂`SLEEP`操作，观察集群状态和业务执行情况，以验证`multipath`多链路冗余环境给集群带来的可用性及可靠性