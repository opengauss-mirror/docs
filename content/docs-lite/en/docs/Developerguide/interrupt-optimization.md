# Interrupt Optimization<a name="EN-US_TOPIC_0289900743"></a>

1.  When the CPU usage of the openGauss database is greater than 90%, the CPU becomes a bottleneck. In this case, you need to enable offloading to offload network slices to the NIC.

    Run the following commands to enable the tso, lro, gro and gso features.

    ```
    ethtool –K enp3s0 tso on 
    ethtool –K enp3s0 lro on 
    ethtool –K enp3s0 gro on 
    ethtool –K enp3s0 gso on
    ```

2.  Run the following command to bind the NIC interrupt queues to the CPU core.

    ```
    sh bind_net_irq.sh  16
    ```


