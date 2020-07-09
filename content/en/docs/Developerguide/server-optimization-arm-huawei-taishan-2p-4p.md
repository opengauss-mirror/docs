# Server Optimization – ARM Huawei Taishan 2P/4P<a name="EN-US_TOPIC_0260488208"></a>

The following are optional settings for optimizing MOT database performance running on an ARM/Kunpeng-based Huawei Taishan 2280 v2 server powered by 2-sockets with a total of 256 Cores[\[3\]](#_ftn3)  and Taishan 2480 v2 server powered by 4-sockets with a total of 256 Cores[\[4\]](#_ftn4).

Unless indicated otherwise, the following settings are for both client and server machines:

-   [BIOS](#section12321235121710)
-   [OS – Kernel and Boot](#section784441614224)
-   [NVMe Disk](#section1254857132614)
-   [Network](#section17901635182813)

## BIOS<a name="section12321235121710"></a>

Modify related BIOS settings, as follows:

1.  Select  **BIOS - Advanced** **-** **MISC Config**. Set** Support Smmu **to  **Disabled**.
2.  Select  **BIOS -** **Advanced - MISC Config**. Set  **CPU Prefetching Configuration**  to  **Disabled**.

    ![](figures/en-us_image_0260574086.png)

3.  Select  **BIOS - Advanced** **-** **Memory Config**. Set  **Die Interleaving**  to  **Disabled**.

    ![](figures/en-us_image_0260574085.png)

4.  Select  **BIOS** **-** **Advanced** **-** **Performance Config**. Set  **Power Policy**  to  **Performance**.

    ![](figures/en-us_image_0260574087.png)


## OS – Kernel and Boot<a name="section784441614224"></a>

The following operating system kernel and boot parameters are usually configured by a sysadmin.

Configure the kernel parameters, as follows:

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
kernel.sem = 32000 1024000000      500     32000
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

-   Tuned Service

    The following section is mandatory.

    The server must run a throughput-performance profile 

    ```
    [...]$ tuned-adm profile throughput-performance
    ```

    The  **throughput-performance**  profile is broadly applicable tuning that provides excellent performance across a variety of common server workloads.

    Other less suitable profiles for openGauss and MOT server that may affect MOT’s overall performance are – balanced, desktop, latency-performance, network-latency, network-throughput and powersave.

-   Boot Tuning

    Add  **iommu.passthrough=1**  to the  **kernel boot arguments**.

    When operating in  **pass-through **mode, the adapter does require** DMA translation to the memory,**  which improves performance.


## NVMe Disk<a name="section1254857132614"></a>

**Settings**

1.  Format a partition, as follows

    ```
    mkfs.xfs -f -b size=8192 -s size=512 /dev/nvme0n1p1.
    ```

2.  Set the mount options

    ```
    UUID=<device uuid>  /data1 xfs rw,noatime,inode64,allocsize=16m    0 0
    ```

3.  Add the following to the kernel – cmdline  **scsi\_mod.use\_blk\_mq=1**  in order to enable BFQ. BFQ is a blk-mq \(Multi-Queue Block IO Queueing Mechanism\) scheduler.

## Network<a name="section17901635182813"></a>

-   SmartNIC Driver Installation

    Perform the following if the server has Smart NIC installed, such as Hi1822 / Huawei IN200 NIC:

    1.  Verify that a NIC driver is installed.
    2.  Verify that the NIC is configured as 64 queues.

    For detailed instructions, you may refer to  [https://support.huawei.com/enterprise/de/doc/EDOC1100063073/42928ba6/configuring-64-queues](https://support.huawei.com/enterprise/de/doc/EDOC1100063073/42928ba6/configuring-64-queues)

    Quick instruction are as follows:

    -   Configure the NIC as 64 queues \(queue pairs\). The default settings may already exist in the following  **ini **file –  ./hinicconfig hinic0 -f std\_sh\_4x25ge\_dpdk\_cfg\_template0.ini.
    -   Reboot and verify.

-   IRQ Configuration

    IRQ enables network-to-core balancing and interrupt management. The following is an optimized manual configuration for two server types – 256 cores and 128 cores.

    -   For ARM Server 256, perform the following：

    1.  Disable the  **irqbalance**  service.
    2.  For a single NIC \(recommended setting\), map four cores per queue – /var/scripts/set\_irq\_affinity\_256.sh -x all enp4s0.

        For a double NIC, map the last 16 cores per half-socket to the NIC queues, as follows –

        -   /var/scripts/set\_irq\_affinity.sh -x 16-32,48-64,80-95,112-128 enp4s0
        -   /var/scripts/set\_irq\_affinity.sh -x 146-161,176-191,208-224,240-256 enp5s0

    3.  Configure the interrupt moderation, which changes the 1:1 ratio between packets and interrupts, as follows –  ethtool -C enp4s0 adaptive-rx off adaptive-tx off rx-usecs 62 tx-usecs 62.

    -   For ARM Server 128, perform the following：

    1.  Disable the  **irqbalance**  service.
    2.  For a single NIC \(recommended setting\), map two cores per queue – /var/scripts/set\_irq\_affinity\_128.sh -x all enp3s0.

        For a double NIC, map one NIC per socket, as follows：

        -   ./set\_irq\_affinity.sh -x 0-63 enp3s0
        -   ./set\_irq\_affinity.sh -x 64-128 enp4s0

    3.  Configure the interrupt moderation, which changes the 1:1 ratio between packets and interrupts, as follows –  ethtool-C enp4s0 adaptive-rx off adaptive-tx off rx-usecs 50 tx-usecs 50.

-   NIC Tune

    Configure the network buffer settings, as follows：

    -   Increase the RX/TX buffer size – ethtool -G enp4s0 rx  4096 tx 4096.
    -   Modify NIC parameters \(client action=off , server action=on\), as follows –
    -   ethtool -K $net\_dev tso $action
    -   ethtool -K $net\_dev lro $action
    -   ethtool -K $net\_dev gro $action
    -   ethtool -K $net\_dev gso $action

-   rc.local

    Set the following in order to ensure that the above settings persist through future reboots.

    Replace  **<256/128\>**  with 256 or 128 according to whether the server has 256 or 128 cores.

    Configure the server machine, as follows

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


