# ARM服务器优化指导<a name="ZH-CN_TOPIC_0257836914"></a>

-   BIOS

请按下图进行配置

![](figures/zh-cn_image_0257861506.png)

![](figures/zh-cn_image_0257861511.png)

![](figures/zh-cn_image_0257861526.png)

-   操作系统

请按如下方式修改/etc/sysctl.conf配置文件修改内核参数

```
net.ipv4.ip_local_port_range = 9000 65535
kernel.sysrq = 1
kernel.panic_on_oops = 1
kernel.panic = 5
kernel.hung_task_timeout_secs = 3600
kernel.hung_task_panic = 1
vm.oom_dump_tasks = 1
kernel.softlockup_panic = 1
fs.file-max = 640000
kernel.msgmnb = 7000000
kernel.sched_min_granularity_ns = 10000000
kernel.sched_wakeup_granularity_ns = 15000000
kernel.numa_balancing=0
vm.max_map_count = 1048576
net.ipv4.tcp_max_tw_buckets = 10000
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_keepalive_time = 30
net.ipv4.tcp_keepalive_probes = 9
net.ipv4.tcp_keepalive_intvl = 30
net.ipv4.tcp_retries2 = 80
kernel.sem = 32000   1024000000      500     32000
kernel.shmall = 52805669
kernel.shmmax = 18446744073692774399
sys.fs.file-max = 6536438
net.core.wmem_max = 21299200
net.core.rmem_max = 21299200
net.core.wmem_default = 21299200
net.core.rmem_default = 21299200
net.ipv4.tcp_rmem = 8192 250000 16777216
net.ipv4.tcp_wmem = 8192 250000 16777216
net.core.somaxconn = 65535
vm.min_free_kbytes = 5270325
net.core.netdev_max_backlog = 65535
net.ipv4.tcp_max_syn_backlog = 65535
net.ipv4.tcp_syncookies = 1
vm.overcommit_memory = 0
net.ipv4.tcp_retries1 = 5
net.ipv4.tcp_syn_retries = 5
##NEW
kernel.sched_autogroup_enabled=0
kernel.sched_min_granularity_ns=2000000
kernel.sched_latency_ns=10000000
kernel.sched_wakeup_granularity_ns=5000000
kernel.sched_migration_cost_ns=500000
vm.dirty_background_bytes=33554432
kernel.shmmax=21474836480
net.ipv4.tcp_timestamps = 0
net.ipv6.conf.all.disable_ipv6=1
net.ipv6.conf.default.disable_ipv6=1
net.ipv4.tcp_keepalive_time=600
net.ipv4.tcp_keepalive_probes=3
kernel.core_uses_pid=1
```

调优守护程序使用Throughput-performance配置文件：

```
[...]$ tuned-adm profile throughput-performance
```

调优启动参数，将如下配置加入内核启动参数：

```
iommu.passthrough=1
```

-   调优硬盘/SSD

请按如下方式格式化分区，其中nvme0n1p1为测试机上NVMe盘名，请替换为本机NVMe盘名：

```
– mkfs.xfs -f -b size=8192 -s size=512 /dev/nvme0n1p1
```

将如下配置项加入内核参数以启用BFQ：

```
scsi_mod.use_blk_mq=1
```

-   网络

请按照厂商建议安装网卡驱动程序并配置消息队列长度，以华为Hi1822网卡为例，请参考如下链接安装Hi1822智能网卡驱动：

[https://support.huawei.com/enterprise/de/doc/EDOC1100063073/42928ba6/configuring-64-queues](https://support.huawei.com/enterprise/de/doc/EDOC1100063073/42928ba6/configuring-64-queues)

配置消息队列为64：

```
./hinicconfig hinic0 -f std_sh_4x25ge_dpdk_cfg_template0.ini
```

请按如下方式配置IRQ：

先禁用irqbalance系统服务；随后按照如下方式进行配置（以下enp5s0/enp4s0/enp3s0仅为示例，请根据实际情况替换为本机网卡名）：

四路ARM服务器单网卡：

```
/var/scripts/set_irq_affinity_256.sh -x all enp4s0.
```

四路ARM服务器双网卡：

```
 /var/scripts/set_irq_affinity.sh -x 16-32,48-64,80-95,112-128 enp4s0
 /var/scripts/set_irq_affinity.sh -x 146-161,176-191,208-224,240-256 enp5s0
```

两路ARM服务器单网卡：

```
/var/scripts/set_irq_affinity_128.sh -x all enp3s0
```

两路ARM服务器双网卡：

```
./set_irq_affinity.sh -x 0-63 enp3s0
./set_irq_affinity.sh -x 64-128 enp4s0
```

四路服务器上请按如下方式配置中断：

```
ethtool -C enp4s0 adaptive-rx off adaptive-tx off rx-usecs 62 tx-usecs 62
```

两路服务器上请按如下方式配置中断：

```
ethtool-C enp4s0 adaptive-rx off adaptive-tx off rx-usecs 50 tx-usecs 50
```

配置增大缓冲区大小以调优网卡：

```
ethtool -G enp4s0 rx  4096 tx 4096
```

修改网卡参数，服务端为on，客户端为off：

```
 ethtool -K $net_dev tso on/off
 ethtool -K $net_dev lro on/off
 ethtool -K $net_dev gro on/off
 ethtool -K $net_dev gso on/off
```

调优rc\_local，其中<256/128\>处请按照本机物理核心数设置：

```
killall -9 polkitd

service sysmonitor stop
service irqbalance stop
service rsyslog stop
service firewalld stop

echo madvise > /sys/kernel/mm/transparent_hugepage/enabled

/var/scripts/net_tune.sh enp4s0
/var/scripts/net_tune.sh enp5s0

ethtool -G enp4s0 rx  4096 tx 4096
ethtool -G enp5s0 rx  4096 tx 4096
/var/scripts/set_irq_affinity_<256/128>.sh -x all enp4s0
ethtool -C enp4s0 adaptive-rx off adaptive-tx off rx-usecs 62 tx-usecs 62
```
