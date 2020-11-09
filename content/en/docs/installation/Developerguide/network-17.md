# Network<a name="EN-US_TOPIC_0257867363"></a>

## SmartNIC Driver Installation<a name="en-us_topic_0257713367_section618714295303"></a>

Perform the following if the server has Smart NIC installed, such as Hi1822 / Huawei IN200 NIC:

1.  Verify that a NIC driver is installed.
2.  Verify that the NIC is configured as 64 queues.

For detailed instructions, you may refer to  [https://support.huawei.com/enterprise/de/doc/EDOC1100063073/42928ba6/configuring-64-queues](https://support.huawei.com/enterprise/de/doc/EDOC1100063073/42928ba6/configuring-64-queues)

Quick instruction are as follows:

-   Configure the NIC as 64 queues \(queue pairs\). The default settings may already exist in the following  **ini **file – ./hinicconfig hinic0 -f std\_sh\_4x25ge\_dpdk\_cfg\_template0.ini.
-   Reboot and verify.

## IRQ Configuration<a name="en-us_topic_0257713367_section3318646153112"></a>

IRQ enables network-to-core balancing and interrupt management. The following is an optimized manual configuration for two server types – 256 cores and 128 cores.

-   For ARM Server 256, perform the following:
    1.  Disable the  **irqbalance**  service.
    2.  For a single NIC \(recommended setting\), map four cores per queue – /var/scripts/set\_irq\_affinity\_256.sh -x all enp4s0.

        For a double NIC, map the last 16 cores per half-socket to the NIC queues, as follows –

        -   /var/scripts/set\_irq\_affinity.sh -x 16-32,48-64,80-95,112-128 enp4s0
        -   /var/scripts/set\_irq\_affinity.sh -x 146-161,176-191,208-224,240-256 enp5s0

    3.  Configure the interrupt moderation, which changes the 1:1 ratio between packets and interrupts, as follows – ethtool -C enp4s0 adaptive-rx off adaptive-tx off rx-usecs 62 tx-usecs 62.


-   For ARM Server 128, perform the following:
    1.  Disable the  **irqbalance**  service.
    2.  For a single NIC \(recommended setting\), map two cores per queue – /var/scripts/set\_irq\_affinity\_128.sh -x all enp3s0.

        For a double NIC, map one NIC per socket, as follows –

        -   ./set\_irq\_affinity.sh -x 0-63 enp3s0
        -   ./set\_irq\_affinity.sh -x 64-128 enp4s0

    3.  Configure the interrupt moderation, which changes the 1:1 ratio between packets and interrupts, as follows – ethtool-C enp4s0 adaptive-rx off adaptive-tx off rx-usecs 50 tx-usecs 50.


## NIC Tune<a name="en-us_topic_0257713367_section733714413344"></a>

Configure the network buffer settings, as follows :

-   Increase the RX/TX buffer size – ethtool -G enp4s0 rx  4096 tx 4096.
-   Modify NIC parameters \(client action=off , server action=on\), as follows –
-   ethtool -K $net\_dev tso $action
-   ethtool -K $net\_dev lro $action
-   ethtool -K $net\_dev gro $action
-   ethtool -K $net\_dev gso $action

## rc.local<a name="en-us_topic_0257713367_section154741618358"></a>

Set the following in order to ensure that the above settings persist through future reboots.

Replace  **<256/128\>**  with 256 or 128 according to whether the server has 256 or 128 cores.

Configure the server machine, as follows.

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

