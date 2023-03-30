# NIC Multi-Queue Interruption Settings<a name="EN-US_TOPIC_0283137185"></a>

The single-core capability of TaiShan servers is insufficient and the number of cores is large. Therefore, NIC multi-queue interruption \(16 queues by default\) needs to be deployed on the server and the client. The client and server must be configured with at least GE NICs and are connected through optical fibers.

The recommended configuration is as follows:

-   The NIC on the server is configured with 16 interrupt queues.
-   The NIC on the client is configured with 48 interrupt queues.

## Procedure<a name="en-us_topic_0263913270_section38551240"></a>

1.  Download  [IN500\_solution\_5.1.0.SPC401.zip](https://support.huawei.com/enterprise/zh/software/250968786-ESW2000173161).
2.  Decompress  **IN500\_solution\_5.1.0.SPC401.zip**  and go to the  **tools\\linux\_arm**  directory.
3.  Decompress the  **nic-ZIP**  package and install the hinicadm as user  **root**.

    ![](figures/en-us_image_0283137116.png)

4.  Check the NIC corresponding to the connected physical port. The network port and the NIC name vary according to different hardware platforms. Take the following server as an example. The private network port enp3s0 is used and belongs to the hinic0 NIC.

    ![](figures/en-us_image_0283136765.png)

    ![](figures/en-us_image_0283136553.png)

5.  Go to the  **config**  directory and use the hinicconfig tool to configure the interrupt queue FW configuration file. Modify the value according to the actual situation.
    -   64-queue configuration file:  **std\_sh\_4x25ge\_dpdk\_cfg\_template0.ini**
    -   16-queue configuration file:  **std\_sh\_4x25ge\_nic\_cfg\_template0.ini**

    1.  Modify the maximum number of interrupt queues supported by the system.
        1.  Set the number of queues for hinic0 to different values. \(The default value is  **16**  and it can be changed as needed.\)

            ```
            ./hinicconfig hinic0 -f std_sh_4x25ge_dpdk_cfg_template0.ini
            ```

        2.  Run the  **reboot**  command to restart OS for the modification to take effect.
        3.  Run the  **ethtool -l enp3s0**  command to check whether the modification is successful. For example, the following figure shows that the value is changed to  **64**.

            ![](figures/en-us_image_0283137457.png)

    2.  Modify the number of queues in use.

        Run the following command to change the number of NIC interrupt queues to  **48**:

        ```
        ethtool -L enp3s0 combined 48
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >The optimized value varies depending on the platform and application. For the current 128-core platform, the optimized value is  **16**  for the server and  **48**  for the client.



