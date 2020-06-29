# OS Environment Settings<a name="EN-US_TOPIC_0257867356"></a>

## NUMA<a name="en-us_topic_0257713350_section5699151619139"></a>

Disable NUMA balancing, as described below. MOT performs its own memory management with extremely efficient NUMA-awareness, much more than the default methods used by the operating system.

```
echo 0 > /proc/sys/kernel/numa_balancing
```

## Services<a name="en-us_topic_0257713350_section92741649191313"></a>

Disable Services, as described below.

```
service sysmonitor stop           # OPTIONAL, performance
service irqbalance stop           # MANADATORY
service rsyslog stop       # OPTIONAL, performance
```

## Tuned Service<a name="en-us_topic_0257713350_section4570143217158"></a>

The following section is mandatory.

The server must run the throughput-performance profile.

```
[...]$ tuned-adm profile throughput-performance 
```

The  **throughput-performance**  profile is broadly applicable tuning that provides excellent performance across a variety of common server workloads.

Other less suitable profiles for openGauss and MOT server that may affect MOT’s overall performance are – balanced, desktop, latency-performance, network-latency, network-throughput and powersave

## Sysctl<a name="en-us_topic_0257713350_section88771035101716"></a>

The following lists the recommended operating system settings for best performance.

-   Add the following settings to /etc/sysctl.conf and run sysctl -p

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
    kernel.sem = 250 6400000 1000 25600
    net.core.wmem_max = 21299200
    net.core.rmem_max = 21299200
    net.core.wmem_default = 21299200
    net.core.rmem_default = 21299200
    #net.sctp.sctp_mem = 94500000 915000000 927000000
    #net.sctp.sctp_rmem = 8192 250000 16777216
    #net.sctp.sctp_wmem = 8192 250000 16777216
    net.ipv4.tcp_rmem = 8192 250000 16777216
    net.ipv4.tcp_wmem = 8192 250000 16777216
    net.core.somaxconn = 65535
    vm.min_free_kbytes = 26351629
    net.core.netdev_max_backlog = 65535
    net.ipv4.tcp_max_syn_backlog = 65535
    #net.sctp.addip_enable = 0
    net.ipv4.tcp_syncookies = 1
    vm.overcommit_memory = 0
    net.ipv4.tcp_retries1 = 5
    net.ipv4.tcp_syn_retries = 5
    ```

-   Update the section of /etc/security/limits.conf to the following –

    ```
    <user> soft nofile 100000
    <user> hard nofile 100000
    ```


The  **soft**  and a  **hard**  limit settings specify the quantity of files that a process may have opened at once. The soft limit may be changed by each process running these limits up to the hard limit value.

