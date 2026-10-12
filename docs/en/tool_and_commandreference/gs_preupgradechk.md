# gs_preupgradechk

## Background<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_section39821515163211"></a>

The gs_preupgradechk tool is used to check resources such as CPU, memory, disk, network, and processes in the cluster.

## Prerequisites<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_scab2909286904a92959e438b7ac1b8c7"></a>

- The common user accounts on all hosts are normal.

- Run the `gs_preupgradechk` command as a common user.

    >[!NOTE] Note
    >
    >If the database is installed in environment-variable-separated mode, the common user needs to source the environment variable separation file `ENVFILE`.
    >If the database is installed in non-environment-variable-separated mode, the common user needs to source `~/.bashrc`.

## Syntax<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s991d75846f4c48a298084c67b46b40ee"></a>

- Check operating system information

    ```
    gs_preupgradechk -i ITEM [-l LOGFILE]
    ```

- Display help information

    ```
    gs_preupgradechk -? | --help 
    ```

- Display version number information

    ```
    gs_preupgradechk -V | --version
    ```

## Parameter Description<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s79c5f0d8e9e742deacd81d9e296c2960"></a>

- -i

    Item ID list. Format: -i A or -i A1,A2.

    Value range: A1...A7.

    For details about the check items, see [Table 1](#zh-cn_topic_0237152331_zh-cn_topic_0059778883_t5348bfc47f50450687012eacb1a1ba4e).

- -l

    Specifies the log file and its storage path.

    Default value: $GAUSSLOG/om/gs\_preupgradechk-YYYY-MM-DD\_hhmmss.log.

- -?, --help

    Display help information.

- -V, --version

    Display version number information.

**Table 1**  Operating System Check Items

<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_t5348bfc47f50450687012eacb1a1ba4e"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r96d5e4d71c8c46a18f130b0cc1968953"><th class="cellrowborder" valign="top" width="9.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"></a>ID</p>
</th>
<th class="cellrowborder" valign="top" width="29.24%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"></a>Check Item</p>
</th>
<th class="cellrowborder" valign="top" width="61.49%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5b3c92f7b05e4985874423addad78ee3"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"></a>A1</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a>CPU Usage Status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"></a>Check CPU usage. An error is reported if usage is greater than 95%. A warning is reported if usage is greater than 85%. Otherwise, the status is normal.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rb2f376211ded4f38bfd31e2bfe310480"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a>A2</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a>Memory Usage Status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a>Check memory usage. An error is reported if usage is greater than 95%. A warning is reported if usage is greater than 85%. Otherwise, the status is normal.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r8eb67a4d5ad8404ebf97db57b971e9da"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a>A3</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a>Disk Space</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a>Check disk space: Ensure that the /tmp directory and the /home directory have at least 50 MB of free space. For resource pooling, the usage of data and log directories must not exceed the value set by `datastorage_threshold_value_check`.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r73edb318777c4391bf4786a68c3bfe15"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a>A4</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"></a>Process Status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a>Ensure that the cluster status is normal.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rcaa7080fa9e04d3fb757cfea2b58b042"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a>A5</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a>Network Status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a>Ensure that the network between all nodes is reachable.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rc10298339e724f9d94e6645a42384db2"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a>A6</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a>Database Parameters</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a>If `process_used_memory` reaches 90% of `max_process_memory`, a warning is reported. Otherwise, the status is normal. If the number of active connections is greater than 20, a warning is reported. Otherwise, the status is normal.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r24f0ef2ad50f4a87b554a01c70871c8f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a>A7</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"></a>Standby Replay Lag</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a>Traditional primary-standby: An error is reported if the amount of data to be replayed on the standby exceeds 1 GB. A warning is reported if it exceeds 300 MB. Otherwise, the status is normal. Resource pooling does not perform this check.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s0a0dfe17cef247ad9b50e77ed84aff9f"></a>

```
gs_preupgradechk -i A
Checking all item
Successfully checked all item, result is 
[openGaussxxx]
    Memory usage is at 18.0%                                [Normal]
    All disk space is enough.                               [Normal]
    process is normal                                       [Normal]
    successfully checked network                            [Normal]
    CPU usage is at 1.8%                                    [Normal]
    max_process_memory is greater than process_used_memory  [Normal]
    The number of active connections is 1                   [Normal]
    Do not check replay.                                    [Normal]

[openGaussxxx]
    Memory usage is at 23.4%                                [Normal]
    All disk space is enough.                               [Normal]
    process is normal                                       [Normal]
    successfully checked network                            [Normal]
    CPU usage is at 18.0%                                   [Normal]
    max_process_memory is greater than process_used_memory  [Normal]
    The number of active connections is 1                   [Normal]
    Do not check replay.                                    [Normal]

[openGaussxxx]
    Memory usage is at 31.7%                                [Normal]
    All disk space is enough.                               [Normal]
    process is normal                                       [Normal]
    successfully checked network                            [Normal]
    CPU usage is at 20.0%                                   [Normal]
    max_process_memory is greater than process_used_memory  [Normal]
    The number of active connections is 1                   [Normal]
    The replay lag is 0 bytes.                              [Normal]
```
