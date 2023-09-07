# gs\_checkos<a name="ZH-CN_TOPIC_0249632239"></a>

## Background<a name="en-us_topic_0237152331_en-us_topic_0059778883_section39821515163211"></a>

**gs\_checkos** helps you check information about the OS version, control parameters, and disk configurations, and configure control parameters, I/O parameters, network parameters, and THP services.

## Prerequisites<a name="en-us_topic_0237152331_en-us_topic_0059778883_scab2909286904a92959e438b7ac1b8c7"></a>

- The hardware and network are working properly.

- The trust relationship of user **root** among the hosts is normal.

- Only user **root** is authorized to run the **gs\_checkos** command.

  ![](public_sys-resources/icon-note.gif) **NOTE:**

  This tool cannot be invoked independently. For security purposes, it will be automatically deleted after the preinstallation is complete in enterprise-edition installation mode.

## Syntax<a name="en-us_topic_0237152331_en-us_topic_0059778883_s991d75846f4c48a298084c67b46b40ee"></a>

-   Check OS information.

    ```
    gs_checkos -i ITEM [-f HOSTFILE] [-h HOSTNAME] [-X XMLFILE] [--detail] [-o OUTPUT] [-l LOGFILE] 
    ```

-   Display help information.

    ```
    gs_checkos -? | --help 
    ```

-   Display the version number.

    ```
    gs_checkos -V | --version
    ```


## Parameter Description<a name="en-us_topic_0237152331_en-us_topic_0059778883_s79c5f0d8e9e742deacd81d9e296c2960"></a>

-   -i

    Specifies the number of a check item. The format is **-i A**, **-i B1**, and **-i A1 -i A2** or **-i A1,A2**.

    Value range: A1 to A14 and B1 to B8

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >
    >Items from A1 to A14 indicate that OS parameters need to be checked but not to be set.
    >Items from B1 to B8 indicate that system parameters need to be set to expected values.
    >Items A and items B cannot be simultaneously set.

    [Table 1](#en-us_topic_0237152331_en-us_topic_0059778883_t5348bfc47f50450687012eacb1a1ba4e) lists the check items.

-   -f

    Specifies the file of a host name list.

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >-The **-f** and **-h** parameters cannot be used together.

    Value range: a host name list

-   -h

    Specifies the name of a host to be checked. You can specify multiple hosts and separate the host names with commas (,).

    Value range: openGauss host name. If no host is specified, the current host is checked.

-   --skip-os-check

    Specifies whether to skip the parameter for the OS. By default, the parameter is check for the OS. If the parameter is specified, the configuration is dropped.

-   -X

    Specifies the openGauss XML configuration file.

-   --detail

    Displays detailed check results.

-   -o

    Specifies the file for saving OS check reports.

    If this parameter is not specified, OS check results are displayed on the screen.

-   -l

    Specifies a log file and its storage path.

    Default value: **/tmp/gs\_checkos/gs\_checkos-YYYY-MM-DD\_hhmmss.log**

-   -?, --help

    Display the help information.

-   -V, --version

    Displays version information.


**Table 1** OS check items

<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_t5348bfc47f50450687012eacb1a1ba4e"></a>
<table><thead align="left"><tr id="en-us_topic_0237152331_en-us_topic_0059778883_r96d5e4d71c8c46a18f130b0cc1968953"><th class="cellrowborder" valign="top" width="9.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152331_en-us_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"></a>No.</p>
</th>
<th class="cellrowborder" valign="top" width="29.24%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152331_en-us_topic_0059778883_a9436a520200b4257948723d78a376e0c"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a9436a520200b4257948723d78a376e0c"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a9436a520200b4257948723d78a376e0c"></a>Check Item</p>
</th>
<th class="cellrowborder" valign="top" width="61.49%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152331_en-us_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"><a name="en-us_topic_0237152331_en-us_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5b3c92f7b05e4985874423addad78ee3"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"></a>A1</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_aaee89948999b4c6499ac2b915649500b"><a name="en-us_topic_0237152331_en-us_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a>OS version status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p312231214577"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p312231214577"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p312231214577"></a>Check the OS version. Ensure that the host platform supports openEuler or CentOS. In addition, you need to ensure that the all host platforms of <span id="text14744214448"><a name="text14744214448"></a><a name="text14744214448"></a>openGauss</span> belong to the same hybrid range. </p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rb2f376211ded4f38bfd31e2bfe310480"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a>A2</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a>Kernel version status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"><a name="en-us_topic_0237152331_en-us_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a>Check the kernel version.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r8eb67a4d5ad8404ebf97db57b971e9da"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a>A3</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a>Unicode status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a>Check the character set. Ensure that the character sets of <span id="text208091928446"><a name="text208091928446"></a><a name="text208091928446"></a>openGauss</span> hosts are consistent.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r73edb318777c4391bf4786a68c3bfe15"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a>A4</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p891624214498"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p891624214498"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p891624214498"></a>Time zone status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_a495a913742ce40088d7362facbc2ae77"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a>Checks the time zone setting. Ensure that the time zones of <span id="text1572533184416"><a name="text1572533184416"></a><a name="text1572533184416"></a>openGauss</span> hosts are consistent. </p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rcaa7080fa9e04d3fb757cfea2b58b042"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a>A5</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a>Swap memory status</p>
</td>
Check the <td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"><a name="en-us_topic_0237152331_en-us_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a>Check the swap partition. Ensure that the swap partition size of each host is less than or equals to the total memory size of the host.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rc10298339e724f9d94e6645a42384db2"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a>A6</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a>System control parameters status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"><a name="en-us_topic_0237152331_en-us_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a>Check the kernel parameter. Ensure that the parameter value of the current kernel is consistent with the default value.</p>
<p id="en-us_topic_0237152331_en-us_topic_0059778883_afadfa1e0ad1b442eb13eabd0365616d8"><a name="en-us_topic_0237152331_en-us_topic_0059778883_afadfa1e0ad1b442eb13eabd0365616d8"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_afadfa1e0ad1b442eb13eabd0365616d8"></a>For details, see <a href="#en-us_topic_0237152331_section15489145820128">OS Parameters</a>.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r24f0ef2ad50f4a87b554a01c70871c8f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a>A7</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p778356414498"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p778356414498"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p778356414498"></a>File system configuration status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a>Check the system file handle. Ensure that the parameter value of the system file handle is greater than or equal to 1,000,000.</p>
<p id="en-us_topic_0237152331_en-us_topic_0059778883_a65726c175c38436c85da99b4c0bf8894"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a65726c175c38436c85da99b4c0bf8894"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a65726c175c38436c85da99b4c0bf8894"></a>Check the thread stack size. Ensure that the size is greater than or equal to 3072 KB.</p>
<p id="en-us_topic_0237152331_p19824808473"><a name="en-us_topic_0237152331_p19824808473"></a><a name="en-us_topic_0237152331_p19824808473"></a>Check the maximum available virtual memory of processes. Ensure that the maximum available virtual memory of system processes is <strong>unlimited</strong>.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r1f0c3a5d936f4d118d7502e9358f2dc3"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"></a>A8</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"><a name="en-us_topic_0237152331_en-us_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"></a>Disk configuration status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"></a>Check the hard disk mounting parameter. Ensure that the disk format is XFS and its mounting mode is <strong>rw,noatime,inode64,allocsize=16m</strong>.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5f0c920f5297418184dcdb383ab11e9a"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"></a>A9</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p268185614498"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p268185614498"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p268185614498"></a>Pre-read block size status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"><a name="en-us_topic_0237152331_en-us_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"></a>Checks the pre-read parameter. Ensure that the expected value of the pre-read parameter is <strong>16384</strong>.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rf7012454f0ce4cffb8014b14f9e92d75"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"></a>A10</p>
</td>
The <td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p775452414498"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p775452414498"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p775452414498"></a>I/O scheduler status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p849398214577"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p849398214577"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p849398214577"></a>Checks the I/O scheduling policy. Ensure that the I/O scheduling policy is <strong>deadline</strong>.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r85f359a3d5e24942b3ac64b9523be912"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c2e3bde982045b48212566332c48c99"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c2e3bde982045b48212566332c48c99"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c2e3bde982045b48212566332c48c99"></a>A11</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p553515314498"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p553515314498"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p553515314498"></a>Network card configuration status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_p5979493020544"><a name="en-us_topic_0237152331_en-us_topic_0059778883_p5979493020544"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_p5979493020544"></a>Check the NIC smaller than 10GE.</p>
<a name="en-us_topic_0237152331_en-us_topic_0059778883_ul40343061205457"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_ul40343061205457"></a><ul id="en-us_topic_0237152331_en-us_topic_0059778883_ul40343061205457"><li>. Ensure that the MTU of the NIC is 1500.</li></ul>
<p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p940381016360"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p940381016360"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p940381016360"></a>Check the NIC larger than or equal to 10GE.</p>
<a name="en-us_topic_0237152331_en-us_topic_0059778883_ub28d2fa108374491b1b20bc4b2d4aaca"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_ub28d2fa108374491b1b20bc4b2d4aaca"></a><ul id="en-us_topic_0237152331_en-us_topic_0059778883_ub28d2fa108374491b1b20bc4b2d4aaca"><li>If a 10GE NIC is used and not bound, ensure that the MTU is 1500 and the values of <strong>rx</strong> and <strong>tx</strong> are each greater than or equal to 4096. </li><li>When the NIC is in binding mode, ensure that the type of each binding NIC is 10GE, the value of **mtu** is **1500**, and the value of **rx/tx** is greater than or equal to **4096**. </li><li>The NIC of <span id="text13525166115714"><a name="text13525166115714"></a><a name="text13525166115714"></a>openGauss</span>'s peripheral devices (such as switches) should be set to the same as that of the <span id="text172801221114413"><a name="text172801221114413"></a><a name="text172801221114413"></a>openGauss</span> hosts.</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rf8671f8071d240c9a9d0b9b04ad9e848"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a491b6b3976ce48f4933a0de48638f01b"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a491b6b3976ce48f4933a0de48638f01b"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a491b6b3976ce48f4933a0de48638f01b"></a>A12</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_ab7258b33d9104498928d2c464f027b6d"><a name="en-us_topic_0237152331_en-us_topic_0059778883_ab7258b33d9104498928d2c464f027b6d"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_ab7258b33d9104498928d2c464f027b6d"></a>Time consistency status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_abcca7e99b1724a8d979ce058b73e2b36"><a name="en-us_topic_0237152331_en-us_topic_0059778883_abcca7e99b1724a8d979ce058b73e2b36"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_abcca7e99b1724a8d979ce058b73e2b36"></a>Check the time consistency status. Ensure that the NTP service is started and the system time deviation of each host does not exceed 60s.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r4928203b328e4631b6ac3a17fab90e7f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a42626dd0bd2343b0a82d60fc7fbb41db"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a42626dd0bd2343b0a82d60fc7fbb41db"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a42626dd0bd2343b0a82d60fc7fbb41db"></a>A13</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_aa59901951e354cb283cfd318292bff80"><a name="en-us_topic_0237152331_en-us_topic_0059778883_aa59901951e354cb283cfd318292bff80"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_aa59901951e354cb283cfd318292bff80"></a>Firewall service status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_ac401b0f2fe8440018d2f4bee2eb6cc4a"><a name="en-us_topic_0237152331_en-us_topic_0059778883_ac401b0f2fe8440018d2f4bee2eb6cc4a"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_ac401b0f2fe8440018d2f4bee2eb6cc4a"></a>Check the firewall status. Ensure that the firewall is disabled.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r1699df01aeec4d02b08e7bcff5f7fcc0"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p941454714496"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p941454714496"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p941454714496"></a>A14</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_aa356d7160cf84df6bcbc72a1f81473e4"><a name="en-us_topic_0237152331_en-us_topic_0059778883_aa356d7160cf84df6bcbc72a1f81473e4"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_aa356d7160cf84df6bcbc72a1f81473e4"></a>THP service status</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_af756574835464dac889741e26500ee45"><a name="en-us_topic_0237152331_en-us_topic_0059778883_af756574835464dac889741e26500ee45"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_af756574835464dac889741e26500ee45"></a>Check the THP service status. Ensure that the THP service is disabled.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r7a1a89e18a204b68b2120fcfa6914a58"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"></a>B1</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"><a name="en-us_topic_0237152331_en-us_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"></a>Set system control parameters</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"><a name="en-us_topic_0237152331_en-us_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"></a>Set the kernel parameter. When the actual value does not meet check requirements, reset the parameter whose result is **Abnormal**. Do not set the **Warning** parameter here. You can set the value of **Warning** as needed.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r11c8b6aa951b4435b59f1db495499c16"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"></a>B2</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p370081631505"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p370081631505"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p370081631505"></a>Set file system configuration value</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p448711891505"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p448711891505"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p448711891505"></a>Sets the system file handle. When the parameter value of the system file handle is less than 1000000, reset the parameter.</p>
<p id="en-us_topic_0237152331_en-us_topic_0059778883_ae5adf3c1b9a94fe085f6162c172573b4"><a name="en-us_topic_0237152331_en-us_topic_0059778883_ae5adf3c1b9a94fe085f6162c172573b4"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_ae5adf3c1b9a94fe085f6162c172573b4"></a>Set the thread stack size. Ensure that the size is greater than or equal to 3072 KB.</p>
<p id="en-us_topic_0237152331_p116311512135014"><a name="en-us_topic_0237152331_p116311512135014"></a><a name="en-us_topic_0237152331_p116311512135014"></a>Set the maximum available virtual memory of processes: If the maximum available virtual memory of system processes is not <strong>unlimited</strong>, change it to <strong>unlimited</strong>.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5cc6eaca17574b558edd607dacf979d8"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"></a>B3</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p60782711505"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p60782711505"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p60782711505"></a>Set pre-read block size value</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p225779491505"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p225779491505"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p225779491505"></a>Set the hard disk pre-read parameter: When the actual value is less than 16384, reset the parameter.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ra05346e39a6244748e5e145c6075b85f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"></a>B4</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p378100851505"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p378100851505"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p378100851505"></a>Set IO scheduler value</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p427180071505"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p427180071505"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p427180071505"></a>Set the I/O configuration item. If the actual value of the system is not <strong>deadline</strong>, reset the parameter.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rff336c30b6524b058795688afdab8a85"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"></a>B5</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p26908721506"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p26908721506"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p26908721506"></a>Set network card configuration value</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p166340511506"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p166340511506"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p166340511506"></a>Sets the 10GE NIC parameters. Set the <strong>rx</strong> and <strong>tx</strong> parameters that do not meet 10GE NIC requirements. Do not set the <strong>mtu</strong> parameter.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r90e329f1dde24bbfaa307549b8755680"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"></a>B6</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p130471551506"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p130471551506"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p130471551506"></a>Set THP service</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p501866071506"><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p501866071506"></a><a name="en-us_topic_0237152331_en-us_topic_0059778883_en-us_topic_0058968139_p501866071506"></a>Set the THP service. If the THP service is enabled, disable it.</p>
</td>
</tr>
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B7</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>Set RemoveIPC value</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>Check EulerOS attributes. Set the value of RemoveIPC in files <strong>/usr/lib/systemd/system/systemd-logind.service</strong> and <strong>/etc/systemd/logind.conf</strong> to <strong>no</strong>.</p>
</td>
</tr>
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B8</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>Set Session Process</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>Set a remote device to inherit default system resources. Modify the <strong>/etc/pam.d/sshd</strong> service file and add the <strong>session required pam_limits.so</strong> configuration item to control resources used by users.</p>
</td>
</tr>       
</tbody>
</table>



>![](public_sys-resources/icon-note.gif) **NOTE:**
>
> -   A6 is checked based on the **\[/etc/sysctl.conf\]** and **\[SUGGEST:/etc/sysctl.conf\]** domains in the **check\_list.conf** configuration file.
>    If the parameter value in **\[/etc/sysctl.conf\]** differs from the actual value, An **Abnormal** message is displayed during the check of A6. You can set the parameter by using B1.
>    If the parameter value in **\[SUGGEST:/etc/sysctl.conf\]** differs from the actual value, a **Warning** message is displayed during the check of A6. B1 does not set the parameter. You need to manually set the parameter as needed.
>
> -   A7 is checked based on the **open file** parameter in the **\[/etc/security/limits.conf\]** domain in the **check\_list.conf** configuration file. You can set the parameter using B2.
>
> -   The **mtu**, **rx**, and **tx** parameters of item A11 need to be checked based on the **\[/sbin/ifconfig\]** domain in the **check\_list.conf** configuration file. You can set the **rx** and **tx** parameters using item B5 and set the **mtu** parameter manually.
>
> -   Use configured **gs\_checkos** kernel parameter value and file handles parameter value to restart the new session.

## OS Parameters<a name="en-us_topic_0237152331_section15489145820128"></a>

**Table 2** OS parameters

<a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_table174711620568"></a>
<table><thead align="left"><tr id="en-us_topic_0237152331_en-us_topic_0085031791_row134711465560"><th class="cellrowborder" valign="top" width="24.08240824082408%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237152331_en-us_topic_0085031791_p258931915710"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p258931915710"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p258931915710"></a>Parameter Name</p>
</th>
<th class="cellrowborder" valign="top" width="52.04520452045204%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237152331_en-us_topic_0085031791_p1358931917574"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1358931917574"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1358931917574"></a>Parameter Description</p>
</th>
<th class="cellrowborder" valign="top" width="23.87238723872387%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237152331_en-us_topic_0085031791_p6590119125718"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p6590119125718"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p6590119125718"></a>Recommended Value</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row647214625611"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1125722695711"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1125722695711"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1125722695711"></a>net.ipv4.tcp_max_tw_buckets</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p182571426125710"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p182571426125710"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p182571426125710"></a>Specifies the maximum number of TCP/IP connections concurrently remaining in the <strong>TIME_WAIT</strong> state. If the number of TCP/IP connections concurrently remaining in the **TIME_WAIT** state exceeds the value of this parameter, the TCP/IP connections in the **TIME_WAIT** state will be released immediately, and warning information will be displayed.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p42571268571"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p42571268571"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p42571268571"></a>10000</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row4472364569"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p59261713115813"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p59261713115813"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p59261713115813"></a>net.ipv4.tcp_tw_reuse</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p169261713135818"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p169261713135818"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p169261713135818"></a>Reuses sockets whose status is <strong>TIME-WAIT</strong> for new TCP connections.</p>
<a name="en-us_topic_0237152331_en-us_topic_0085031791_ul99261213185819"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_ul99261213185819"></a><ul id="en-us_topic_0237152331_en-us_topic_0085031791_ul99261213185819"><li><strong>0</strong>: disabled. </li><li><strong>1</strong>: enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1692713134587"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1692713134587"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1692713134587"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row94736616569"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p292717139588"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p292717139588"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p292717139588"></a>net.ipv4.tcp_tw_recycle</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p1992811310580"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1992811310580"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1992811310580"></a>Rapidly reclaims sockets whose status is <strong>TIME-WAIT</strong> in TCP connections.</p>
<a name="en-us_topic_0237152331_en-us_topic_0085031791_ul17928101395817"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_ul17928101395817"></a><ul id="en-us_topic_0237152331_en-us_topic_0085031791_ul17928101395817"><li><strong>0</strong>: disabled. </li><li><strong>1</strong>: enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1928613155814"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1928613155814"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1928613155814"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row4676171295719"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11929181313586"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11929181313586"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11929181313586"></a>net.ipv4.tcp_keepalive_time</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p199291139588"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p199291139588"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p199291139588"></a>Specifies how often Keepalived messages are sent through TCP connections when Keepalived is enabled.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p892911355817"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p892911355817"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p892911355817"></a>30</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row17677191218575"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1492941395814"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1492941395814"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1492941395814"></a>net.ipv4.tcp_keepalive_probes</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p49291138584"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p49291138584"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p49291138584"></a>Specifies the number of Keepalived detection packets sent through a TCP connection before the connection is regarded invalid. The product of the parameter value multiplied by the value of the **tcp_keepalive_intvl** parameter determines the response timeout after a keepalive message is sent through a connection.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5930181310585"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5930181310585"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5930181310585"></a>9</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1467720124571"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1593010138588"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1593010138588"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1593010138588"></a>net.ipv4.tcp_keepalive_intvl</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p59301313185815"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p59301313185815"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p59301313185815"></a>Specifies how often keepalive detection packets are sent again when the previous packets are not acknowledged.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4931151314582"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4931151314582"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4931151314582"></a>30</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row885193417577"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p209310131583"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p209310131583"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p209310131583"></a>net.ipv4.tcp_retries1</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p6932131313581"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p6932131313581"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p6932131313581"></a>Specifies the maximum TCP retries during connection establishment.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p793281355810"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p793281355810"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p793281355810"></a>5</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row785253455720"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17932713145816"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17932713145816"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17932713145816"></a>net.ipv4.tcp_syn_retries</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p189321613175819"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p189321613175819"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p189321613175819"></a>Specifies the maximum SYN packet retries in the TCP.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p693313136582"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p693313136582"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p693313136582"></a>5</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row10853153425712"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1293371305814"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1293371305814"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1293371305814"></a>net.ipv4.tcp_synack_retries</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p17933201318587"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p17933201318587"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p17933201318587"></a>Specifies the maximum SYN response packet retries in the TCP.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p99331013155811"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p99331013155811"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p99331013155811"></a>5</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row0188144110571"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p203091939195813"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p203091939195813"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p203091939195813"></a>net.ipv4.tcp_retries2</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p1331013399587"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1331013399587"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1331013399587"></a>Specifies the number of times that the kernel re-sends data to a connected remote host. A smaller value leads to earlier detection of an invalid connection to the remote host, and the server can quickly release this connection.</p>
<p id="en-us_topic_0237152331_en-us_topic_0085031791_p133103392585"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p133103392585"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p133103392585"></a>If "connection reset by peer" is displayed, increase the value of this parameter to avoid the problem.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p83101739145811"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p83101739145811"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p83101739145811"></a>12</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row0188184135716"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p10310183915815"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p10310183915815"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p10310183915815"></a>vm.overcommit_memory</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p12311173912584"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p12311173912584"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p12311173912584"></a>Specifies the kernel check method during memory allocation.</p>
<a name="en-us_topic_0237152331_en-us_topic_0085031791_ul14311183913587"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_ul14311183913587"></a><ul id="en-us_topic_0237152331_en-us_topic_0085031791_ul14311183913587"><li><strong>0</strong>: The system accurately calculates the current available memory. </li><li><strong>1</strong>: The system returns a success message without a kernel check. </li><li>**2**: The system returns a failure message if the memory size you have applied for exceeds the result of the following formula: Total memory size x Value of **vm.overcommit\_ratio**/100 + Total swap size.</li></ul>
<p id="en-us_topic_0237152331_en-us_topic_0085031791_p193123394589"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p193123394589"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p193123394589"></a>The default value for a kernel is <strong>2</strong>, which is too conservative. The recommended value is <strong>0</strong>. If system loads are high, set this parameter to <strong>1</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13313153945816"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13313153945816"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13313153945816"></a>0</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row3361592574"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19529155145913"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19529155145913"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19529155145913"></a>net.ipv4.tcp_rmem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p1452915511595"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1452915511595"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1452915511595"></a>Specifies the free memory in the TCP receiver buffer. Three memory size ranges in the unit of page are provided: **min**, **default**, and **max**.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5529155105915"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5529155105915"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5529155105915"></a>8192 250000 16777216</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row10378590579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p953010511591"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p953010511591"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p953010511591"></a>net.ipv4.tcp_wmem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p1153017545918"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1153017545918"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1153017545918"></a>Free memory in the TCP sender buffer. Three memory size ranges in the unit of page are provided: **min**, **default**, and **max**.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p195301356597"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p195301356597"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p195301356597"></a>8192 250000 16777216</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row2387595578"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163351922125910"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163351922125910"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163351922125910"></a>net.core.wmem_max</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p14335132214593"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p14335132214593"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p14335132214593"></a>Specifies the maximum size of the socket sender buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p633582217598"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p633582217598"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p633582217598"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row33995910574"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12336132225915"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12336132225915"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12336132225915"></a>net.core.rmem_max</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p2336172218596"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p2336172218596"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p2336172218596"></a>Specifies the maximum size of the socket receiver buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163361222205919"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163361222205919"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163361222205919"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1739559195711"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8336142211595"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8336142211595"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8336142211595"></a>net.core.wmem_default</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p6337182218592"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p6337182218592"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p6337182218592"></a>Specifies the default size of the socket sender buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p193371222105920"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p193371222105920"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p193371222105920"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row14011595570"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p333715223593"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p333715223593"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p333715223593"></a>net.core.rmem_default</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p163371922175915"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p163371922175915"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p163371922175915"></a>Specifies the default size of the socket receive buffer.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13338122275917"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13338122275917"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13338122275917"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1041959195714"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1833892275911"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1833892275911"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1833892275911"></a>net.ipv4.ip_local_port_range</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p0338112235914"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p0338112235914"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p0338112235914"></a>Specifies the range of temporary ports that can be used by a physical machine.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p14339142235915"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p14339142235915"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p14339142235915"></a>26000-65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row0425596573"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1933992225914"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1933992225914"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1933992225914"></a>kernel.sem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p933942215595"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p933942215595"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p933942215595"></a>Specifies the settings of semaphore parameters for the kernel.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12340132213597"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12340132213597"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12340132213597"></a>250 6400000 1000 25600</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row44385915579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p934010229591"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p934010229591"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p934010229591"></a>vm.min_free_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p183405228591"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p183405228591"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p183405228591"></a>Specifies the minimum free physical memory reserved for unexpected page breaks.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p17341142215591"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p17341142215591"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p17341142215591"></a>5% of the total system memory</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row9431359105719"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11341322145910"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11341322145910"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11341322145910"></a>net.core.somaxconn</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p1234282213599"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1234282213599"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1234282213599"></a>Specifies the maximum length of the listening queue of each port. This is a global parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p534272295916"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p534272295916"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p534272295916"></a>65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row11442059175716"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163421022125917"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163421022125917"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163421022125917"></a>net.ipv4.tcp_syncookies</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p1534362218593"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1534362218593"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1534362218593"></a>Specifies whether to enable SYN cookies to guard the OS against SYN attacks when the SYN waiting queue overflows.</p>
<a name="en-us_topic_0237152331_en-us_topic_0085031791_ul534318226591"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_ul534318226591"></a><ul id="en-us_topic_0237152331_en-us_topic_0085031791_ul534318226591"><li><strong>0</strong>: disabled. </li><li><strong>1</strong>: enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p133441022135919"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p133441022135919"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p133441022135919"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row119054135715"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1671381607"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1671381607"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1671381607"></a>net.core.netdev_max_backlog</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p1975811012"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1975811012"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1975811012"></a>Specifies the maximum number of data packets that can be sent to the queue when the rate at which the network device receives data packets is higher than that at which the kernel processes the data packets.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1287819014"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1287819014"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1287819014"></a>65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1319012411575"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19813814012"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19813814012"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19813814012"></a>net.ipv4.tcp_max_syn_backlog</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p13818816015"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p13818816015"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p13818816015"></a>Specifies the maximum number of unacknowledged connection requests.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1791986010"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1791986010"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1791986010"></a>65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row111911441145720"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p20914818010"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p20914818010"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p20914818010"></a>net.ipv4.tcp_fin_timeout</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p7978801"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p7978801"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p7978801"></a>Specifies the default timeout.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17101281003"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17101281003"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17101281003"></a>60</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row171915417579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p61016819012"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p61016819012"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p61016819012"></a>kernel.shmall</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p1810481505"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1810481505"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1810481505"></a>Specifies the total shared free memory of the kernel.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8101081004"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8101081004"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8101081004"></a>1152921504606846720</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1093874517594"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4118812012"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4118812012"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4118812012"></a>kernel.shmmax</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p131117813014"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p131117813014"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p131117813014"></a>Specifies the maximum value of a shared memory segment.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p181188803"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p181188803"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p181188803"></a>18446744073709551615</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1493934585918"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p412986019"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p412986019"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p412986019"></a>net.ipv4.tcp_sack</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p112881904"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p112881904"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p112881904"></a>Specifies whether selective acknowledgment is enabled. The selective acknowledgment on out-of-order packets can increase system performance. Enabling this function will allow the sender to send only lost packets (for wide area networks), but this will increase CPU usage.</p>
<a name="en-us_topic_0237152331_en-us_topic_0085031791_ul112208308"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_ul112208308"></a><ul id="en-us_topic_0237152331_en-us_topic_0085031791_ul112208308"><li><strong>0</strong>: disabled. </li><li><strong>1</strong>: enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17131181208"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17131181208"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17131181208"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row199407451592"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p111418818011"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p111418818011"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p111418818011"></a>net.ipv4.tcp_timestamps</p>
</td>
The <td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p10141681903"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p10141681903"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p10141681903"></a>Specifies whether the TCP timestamp (12 bytes are added in the TCP packet header) enables a more accurate RTT calculation than the retransmission timeout (for details, see RFC 1323) for better performance.</p>
<a name="en-us_topic_0237152331_en-us_topic_0085031791_ul814881508"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_ul814881508"></a><ul id="en-us_topic_0237152331_en-us_topic_0085031791_ul814881508"><li><strong>0</strong>: disabled. </li><li><strong>1</strong>: enabled.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p18151381901"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p18151381901"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p18151381901"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row3940154515911"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p02308185016"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p02308185016"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p02308185016"></a>vm.extfrag_threshold</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p62301518909"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p62301518909"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p62301518909"></a>Specifies when the system memory is insufficient, Linux will score the current system memory fragments. If the score is higher than the value of <strong>vm.extfrag_threshold</strong>, <strong>kswapd</strong> triggers memory compaction. When the value of this parameter is close to **1000**, the system tends to swap out old pages when processing memory fragments to meet the application requirements. When the value of this parameter is close to **0**, the system tends to do memory compaction when processing memory fragments.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p923111816015"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p923111816015"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p923111816015"></a>500</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row14114125155912"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8231218904"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8231218904"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8231218904"></a>vm.overcommit_ratio</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p1823117183015"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1823117183015"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p1823117183015"></a>When the system uses the algorithms where memory usage never exceeds the thresholds, the total memory address space of the system cannot exceed the value of <strong>swap+RAM</strong> multiplied by the percentage specified by this parameter. When the value of <strong>vm.overcommit_memory</strong> is set to <strong>2</strong>, this parameter takes effect.</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12232121819017"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12232121819017"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12232121819017"></a>90</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row151152051125910"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p2233161813015"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p2233161813015"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p2233161813015"></a>MTU</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237152331_en-us_topic_0085031791_p32330181404"><a name="en-us_topic_0237152331_en-us_topic_0085031791_p32330181404"></a><a name="en-us_topic_0237152331_en-us_topic_0085031791_p32330181404"></a>Specifies the maximum transmission unit (MTU) for a node NIC. The default value in the OS is <strong id="b18906717134619"><a name="b18906717134619"></a><a name="b18906717134619"></a>1500</strong>. </p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p223412181010"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p223412181010"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p223412181010"></a>8192</p>
</td>
</tr>
</tbody>
</table>


## File System Parameters<a name="en-us_topic_0237152331_section975717139147"></a>

-   soft nofile

    Indicates the soft limit. The number of file handles used by a user can exceed this value, but an alarm message will be sent if the value is exceeded.

    Recommended value: **1000000**

-   hard nofile

    Indicates the hard limit. The number of file handles used by a user cannot exceed this value.

    Recommended value: **1000000**

-   stack size

    Specifies the thread stack size.

    Recommended value: **3072**


## Examples<a name="en-us_topic_0237152331_en-us_topic_0059778883_s0a0dfe17cef247ad9b50e77ed84aff9f"></a>

Run the following commands to check the OS parameters:

```
gs_checkos -i A -h plat1 -X /opt/software/openGauss/clusterconfig.xml --detail -o /var/log/checkos 
Performing operation system check/set. Output the result to the file /var/log/checkos.
Operation system check/set is completed.
Total numbers:14. Abnormal numbers:0. Warning number:1.

```

Query check results.

```
vim /var/log/checkos 
Checking items:
    A1. [ OS version status ]                                   : Normal
    A2. [ openGauss version status ]                               : Normal
    A3. [ Unicode status ]                                      : Normal
    A4. [ Time zone status ]                                    : Normal
    A5. [ Swap memory status ]                                  : Normal
    A6. [ System control parameters status ]                    : Normal
    A7. [ File system configuration status ]                    : Normal
    A8. [ Disk configuration status ]                           : Normal
    A9. [ Pre-read block size status ]                          : Normal
    A10.[ IO scheduler status ]                                 : Normal
    A11.[ Network card configuration status ]                   : Normal
    A12.[ Time consistency status ]                             : Warning
    A13.[ Firewall service status ]                             : Normal
    A14.[ THP service status ]                                  : Normal
```

## Related Commands<a name="en-us_topic_0237152331_en-us_topic_0059778883_s3229172816a643dda00f100421b8a903"></a>

[gs\_check](gs_check.md), [gs\_checkperf](gs_checkperf.md)
