# gs\_checkos<a name="ZH-CN_TOPIC_0249632239"></a>

## 背景信息<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_section39821515163211"></a>

gs\_checkos工具用来帮助检查操作系统、控制参数、磁盘配置等内容，并对系统控制参数、I/O配置、网络配置和THP服务等信息进行配置。

## 前提条件<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_scab2909286904a92959e438b7ac1b8c7"></a>

- 当前的硬件和网络环境正常。

- 各主机间root互信状态正常。

- 只能使用root用户执行gs\_checkos命令。

  ![](public_sys-resources/icon-note.gif) **说明：**

  该工具不支持独立调用，出于安全考虑，企业版安装方式下，前置完成后会自动删除。

## 语法<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s991d75846f4c48a298084c67b46b40ee"></a>

-   检查操作系统信息

    ```
    gs_checkos -i ITEM [-f HOSTFILE] [-h HOSTNAME] [-X XMLFILE] [--detail] [-o OUTPUT] [-l LOGFILE] 
    ```

-   显示帮助信息

    ```
    gs_checkos -? | --help 
    ```

-   显示版本号信息

    ```
    gs_checkos -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s79c5f0d8e9e742deacd81d9e296c2960"></a>

-   -i

    列表编号。格式：-i A、-i B1、-i A1 -i A2或-i A1,A2。

    取值范围：A1...A14、B1...B8。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >A1...A14 表示只检查操作系统参数，并不设置。
    >B1...B8 表示将参数系统参数设置为期望值。
    >A和B不能同时输入。

    详细的检查项请参见[表1](#zh-cn_topic_0237152331_zh-cn_topic_0059778883_t5348bfc47f50450687012eacb1a1ba4e)。

-   -f

    主机名称列表文件。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-f和-h参数不能同时使用。

    取值范围：主机名称的列表。

-   -h

    指定需要检查的主机名称，可以同时指定多个主机，主机之间使用“,”分割。

    取值范围：openGauss的主机名称。如果不指定主机，则检查当前主机。

-   -X

    openGaussXML配置文件。

-   --detail

    显示检查结果详情。

-   -o

    指定OS检查报告输出到指定的文件。

    不指定则将检查结果输出到屏幕上。

-   -l

    指定日志文件及存放路径。

    默认值：/tmp/gs\_checkos/gs\_checkos-YYYY-MM-DD\_hhmmss.log。

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。


**表 1**  操作系统检查项

<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_t5348bfc47f50450687012eacb1a1ba4e"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r96d5e4d71c8c46a18f130b0cc1968953"><th class="cellrowborder" valign="top" width="9.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"></a>编号</p>
</th>
<th class="cellrowborder" valign="top" width="29.24%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"></a>检查项</p>
</th>
<th class="cellrowborder" valign="top" width="61.49%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"></a>检查项详细说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5b3c92f7b05e4985874423addad78ee3"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"></a>A1</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a>操作系统版本（OS version status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"></a>操作系统版本检查：保证主机平台是支持的openEuler和CentOS平台中的一种。同时保证<span id="text14744214448"><a name="text14744214448"></a><a name="text14744214448"></a>openGauss</span>各个主机的平台是属于同一混编范围的。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rb2f376211ded4f38bfd31e2bfe310480"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a>A2</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a>内核版本（Kernel version status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a>内核版本检查。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r8eb67a4d5ad8404ebf97db57b971e9da"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a>A3</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a>Unicode状态（Unicode status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a>字符集设置检查：保证<span id="text208091928446"><a name="text208091928446"></a><a name="text208091928446"></a>openGauss</span>各个主机的字符集一致。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r73edb318777c4391bf4786a68c3bfe15"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a>A4</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"></a>时区状态（Time zone status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a>时区时间设置检查：保证<span id="text1572533184416"><a name="text1572533184416"></a><a name="text1572533184416"></a>openGauss</span>各个主机的时区状态一致。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rcaa7080fa9e04d3fb757cfea2b58b042"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a>A5</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a>交换内存状态（Swap memory status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a>Swap分区检查：各个主机的swap分区大小必须小于等于各主机内存总大小。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rc10298339e724f9d94e6645a42384db2"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a>A6</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a>系统控制参数（System control parameters status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a>内核参数检查：保证当前内核中的参数值和默认的期望值保持一致。</p>
<p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_afadfa1e0ad1b442eb13eabd0365616d8"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_afadfa1e0ad1b442eb13eabd0365616d8"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_afadfa1e0ad1b442eb13eabd0365616d8"></a>详细的内核参数请参见<a href="#zh-cn_topic_0237152331_section15489145820128">操作系统参数</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r24f0ef2ad50f4a87b554a01c70871c8f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a>A7</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"></a>文件系统配置状态（File system configuration status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a>系统文件句柄检查：系统文件句柄的参数值必须大于等于100万。</p>
<p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a65726c175c38436c85da99b4c0bf8894"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a65726c175c38436c85da99b4c0bf8894"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a65726c175c38436c85da99b4c0bf8894"></a>线程堆栈大小检查：线程堆栈大小大于等于3072KB。</p>
<p id="zh-cn_topic_0237152331_p19824808473"><a name="zh-cn_topic_0237152331_p19824808473"></a><a name="zh-cn_topic_0237152331_p19824808473"></a>进程最大可用虚拟内存：系统进程最大可用虚拟内存为unlimited。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r1f0c3a5d936f4d118d7502e9358f2dc3"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"></a>A8</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"></a>磁盘配置状态（Disk configuration status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"></a>硬盘挂载参数检查：格式为xfs的硬盘，其挂载格式必须为：“rw,noatime,inode64,allocsize=16m”。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5f0c920f5297418184dcdb383ab11e9a"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"></a>A9</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p268185614498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p268185614498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p268185614498"></a>预读块大小状态（Pre-read block size status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"></a>预读参数检查：预读参数期望值为16384。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rf7012454f0ce4cffb8014b14f9e92d75"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"></a>A10</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p775452414498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p775452414498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p775452414498"></a>IO调度状态（IO scheduler status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p849398214577"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p849398214577"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p849398214577"></a>IO调度策略检查：IO调度策略的方式为deadline。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r85f359a3d5e24942b3ac64b9523be912"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c2e3bde982045b48212566332c48c99"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c2e3bde982045b48212566332c48c99"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c2e3bde982045b48212566332c48c99"></a>A11</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p553515314498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p553515314498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p553515314498"></a>网卡配置状态（Network card configuration status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_p5979493020544"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_p5979493020544"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_p5979493020544"></a>万兆以下网卡参数检查：</p>
<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ul40343061205457"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ul40343061205457"></a><ul id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ul40343061205457"><li>确保网卡mtu=1500。</li></ul>
<p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p940381016360"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p940381016360"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p940381016360"></a>万兆及以上网卡参数检查：</p>
<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ub28d2fa108374491b1b20bc4b2d4aaca"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ub28d2fa108374491b1b20bc4b2d4aaca"></a><ul id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ub28d2fa108374491b1b20bc4b2d4aaca"><li>当网卡为非绑定模式，同时网卡类型为万兆时，确保mtu=1500，rx/tx &gt;=4096。</li><li>当网卡为绑定模式时，需保证绑定的每个网卡类型均为万兆，然后再确保mtu=1500，rx/tx&gt;=4096。</li><li><span id="text13525166115714"><a name="text13525166115714"></a><a name="text13525166115714"></a>openGauss</span>周边设备（例如交换机等）的网卡也要设置成与<span id="text172801221114413"><a name="text172801221114413"></a><a name="text172801221114413"></a>openGauss</span>部署的主机一致的值。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rf8671f8071d240c9a9d0b9b04ad9e848"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a491b6b3976ce48f4933a0de48638f01b"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a491b6b3976ce48f4933a0de48638f01b"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a491b6b3976ce48f4933a0de48638f01b"></a>A12</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ab7258b33d9104498928d2c464f027b6d"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ab7258b33d9104498928d2c464f027b6d"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ab7258b33d9104498928d2c464f027b6d"></a>时间一致性（Time consistency status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_abcca7e99b1724a8d979ce058b73e2b36"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_abcca7e99b1724a8d979ce058b73e2b36"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_abcca7e99b1724a8d979ce058b73e2b36"></a>时间一致性检查：确认ntp服务启动，<span id="text1241915274573"><a name="text1241915274573"></a><a name="text1241915274573"></a>openGauss</span>各个主机的系统时间误差不超过60s。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r4928203b328e4631b6ac3a17fab90e7f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a42626dd0bd2343b0a82d60fc7fbb41db"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a42626dd0bd2343b0a82d60fc7fbb41db"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a42626dd0bd2343b0a82d60fc7fbb41db"></a>A13</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa59901951e354cb283cfd318292bff80"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa59901951e354cb283cfd318292bff80"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa59901951e354cb283cfd318292bff80"></a>防火墙状态（Firewall service status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac401b0f2fe8440018d2f4bee2eb6cc4a"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac401b0f2fe8440018d2f4bee2eb6cc4a"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac401b0f2fe8440018d2f4bee2eb6cc4a"></a>防火墙检查： 确认防火墙的状态为关闭状态。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r1699df01aeec4d02b08e7bcff5f7fcc0"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p941454714496"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p941454714496"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p941454714496"></a>A14</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa356d7160cf84df6bcbc72a1f81473e4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa356d7160cf84df6bcbc72a1f81473e4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa356d7160cf84df6bcbc72a1f81473e4"></a>THP服务（THP service status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af756574835464dac889741e26500ee45"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af756574835464dac889741e26500ee45"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af756574835464dac889741e26500ee45"></a>THP服务检查：确认THP服务状态为关闭状态。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r7a1a89e18a204b68b2120fcfa6914a58"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"></a>B1</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"></a>设置系统控制参数（Set system control parameters）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"></a>内核参数设置：当实际值不满足检查条件期望时，对结果为Abnormal项参数进行修改设置；对Warning项不进行设置，由用户根据实际环境设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r11c8b6aa951b4435b59f1db495499c16"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"></a>B2</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p370081631505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p370081631505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p370081631505"></a>设置文件系统配置值（Set file system configuration value）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p448711891505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p448711891505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p448711891505"></a>系统文件句柄设置：当系统文件句柄的参数值小于100万时，对其进行修改设置。</p>
<p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ae5adf3c1b9a94fe085f6162c172573b4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ae5adf3c1b9a94fe085f6162c172573b4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ae5adf3c1b9a94fe085f6162c172573b4"></a>线程堆栈大小设置：线程堆栈大小小于3072KB时，对其进行设置。</p>
<p id="zh-cn_topic_0237152331_p116311512135014"><a name="zh-cn_topic_0237152331_p116311512135014"></a><a name="zh-cn_topic_0237152331_p116311512135014"></a>进程最大可用虚拟内存设置：系统进程最大可用虚拟内存不为unlimited时对其进行修改设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5cc6eaca17574b558edd607dacf979d8"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"></a>B3</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p60782711505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p60782711505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p60782711505"></a>设置预读块大小值（Set pre-read block size value）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p225779491505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p225779491505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p225779491505"></a>硬盘预读参数设置：当系统的实际值小于16384时，对其进行修改设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ra05346e39a6244748e5e145c6075b85f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"></a>B4</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p378100851505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p378100851505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p378100851505"></a>设置IO调度值（Set IO scheduler value）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p427180071505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p427180071505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p427180071505"></a>IO配置项的设置：当系统的实际值不为deadline时，对其进行修改设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rff336c30b6524b058795688afdab8a85"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"></a>B5</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p26908721506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p26908721506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p26908721506"></a>设置网卡配置值（Set network card configuration value）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p166340511506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p166340511506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p166340511506"></a>万兆网卡参数设置：对不满足万兆网卡的RX、TX参数进行设置，不对MTU参数进行设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r90e329f1dde24bbfaa307549b8755680"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"></a>B6</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p130471551506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p130471551506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p130471551506"></a>设置THP服务（Set THP service）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p501866071506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p501866071506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p501866071506"></a>THP服务设置：如果THP服务启动，将该服务关闭。</p>
</td>
</tr>
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B7</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>设置欧拉系统属性（Set RemoveIPC value）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>欧拉系统属性检查：检查设置欧拉系统文件/usr/lib/systemd/system/systemd-logind.service，/etc/systemd/logind.conf中配置项RemoveIPC属性值是否为no，当不为no时，对其进行修改设置。</p>
</td>
</tr>
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B8</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>设置sshd服务应用pam模块（Set Session Process）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>远程设备继承系统默认资源：修改/etc/pam.d/sshd服务文件，添加配置项session required pam_limits.so，来控制用户使用的资源。</p>
</td>
</tr>       
</tbody>
</table>



>![](public_sys-resources/icon-note.gif) **说明：** 
>
> -   A6选项检查标准来自配置文件check\_list.conf下\[/etc/sysctl.conf\]、\[SUGGEST:/etc/sysctl.conf\]域：
>    若\[/etc/sysctl.conf\]下参数值与系统实际参数值不同，A6检查提示Abnormal，可以使用B1参数进行设置。
>    若\[SUGGEST:/etc/sysctl.conf\]下参数值与系统实际参数值不同，A6检查提示Warning，B1参数不会进行设置，需根据实际情况进行手动设置。
>
> -   A7选项检查系统文件句柄标准来自配置文件check\_list.conf下\[/etc/security/limits.conf\]域open file参数，可以使用B2参数进行设置。
>
> -   A11选项检查万兆网卡参数“MTU”、“RX”、“TX”标准来自配置文件check\_list.conf下\[/sbin/ifconfig\]域，可以使用B5参数对RX、TX进行设置，MTU需用户手动设置。
>
> -   使用gs\_checkos设置的内核参数值和文件句柄参数值，需重启新会话生效。

## 操作系统参数<a name="zh-cn_topic_0237152331_section15489145820128"></a>

**表 2**  操作系统参数

<a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_table174711620568"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row134711465560"><th class="cellrowborder" valign="top" width="24.08240824082408%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p258931915710"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p258931915710"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p258931915710"></a>参数名称</p>
</th>
<th class="cellrowborder" valign="top" width="52.04520452045204%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1358931917574"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1358931917574"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1358931917574"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="23.87238723872387%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p6590119125718"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p6590119125718"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p6590119125718"></a>推荐取值</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row647214625611"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1125722695711"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1125722695711"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1125722695711"></a>net.ipv4.tcp_max_tw_buckets</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p182571426125710"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p182571426125710"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p182571426125710"></a>表示同时保持TIME_WAIT状态的TCP/IP连接最大数量。如果超过所配置的取值，TIME_WAIT将立刻被释放并打印警告信息。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p42571268571"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p42571268571"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p42571268571"></a>10000</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row4472364569"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p59261713115813"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p59261713115813"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p59261713115813"></a>net.ipv4.tcp_tw_reuse</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p169261713135818"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p169261713135818"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p169261713135818"></a>允许将TIME-WAIT状态的sockets重新用于新的TCP连接。</p>
<a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul99261213185819"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul99261213185819"></a><ul id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul99261213185819"><li>0表示关闭。</li><li>1表示开启。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1692713134587"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1692713134587"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1692713134587"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row94736616569"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p292717139588"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p292717139588"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p292717139588"></a>net.ipv4.tcp_tw_recycle</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1992811310580"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1992811310580"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1992811310580"></a>表示开启TCP连接中TIME-WAIT状态sockets的快速回收。</p>
<a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul17928101395817"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul17928101395817"></a><ul id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul17928101395817"><li>0表示关闭。</li><li>1表示开启。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1928613155814"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1928613155814"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1928613155814"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row4676171295719"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11929181313586"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11929181313586"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11929181313586"></a>net.ipv4.tcp_keepalive_time</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p199291139588"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p199291139588"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p199291139588"></a>表示当keepalive启用的时候，TCP发送keepalive消息的频度。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p892911355817"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p892911355817"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p892911355817"></a>30</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row17677191218575"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1492941395814"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1492941395814"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1492941395814"></a>net.ipv4.tcp_keepalive_probes</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p49291138584"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p49291138584"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p49291138584"></a>在认定连接失效之前，发送TCP的keepalive探测包数量。这个值乘以tcp_keepalive_intvl之后决定了一个连接发送了keepalive之后可以有多少时间没有回应。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5930181310585"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5930181310585"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5930181310585"></a>9</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1467720124571"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1593010138588"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1593010138588"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1593010138588"></a>net.ipv4.tcp_keepalive_intvl</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p59301313185815"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p59301313185815"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p59301313185815"></a>当探测没有确认时，重新发送探测的频度。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4931151314582"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4931151314582"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4931151314582"></a>30</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row885193417577"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p209310131583"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p209310131583"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p209310131583"></a>net.ipv4.tcp_retries1</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p6932131313581"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p6932131313581"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p6932131313581"></a>在连接建立过程中TCP协议最大重试次数。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p793281355810"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p793281355810"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p793281355810"></a>5</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row785253455720"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17932713145816"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17932713145816"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17932713145816"></a>net.ipv4.tcp_syn_retries</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p189321613175819"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p189321613175819"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p189321613175819"></a>TCP协议SYN报文最大重试次数。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p693313136582"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p693313136582"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p693313136582"></a>5</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row10853153425712"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1293371305814"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1293371305814"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1293371305814"></a>net.ipv4.tcp_synack_retries</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17933201318587"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17933201318587"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17933201318587"></a>TCP协议SYN应答报文最大重试次数。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p99331013155811"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p99331013155811"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p99331013155811"></a>5</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row0188144110571"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p203091939195813"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p203091939195813"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p203091939195813"></a>net.ipv4.tcp_retries2</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1331013399587"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1331013399587"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1331013399587"></a>控制内核向已经建立连接的远程主机重新发送数据的次数，低值可以更早的检测到与远程主机失效的连接，因此服务器可以更快的释放该连接。</p>
<p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p133103392585"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p133103392585"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p133103392585"></a>发生“connection reset by peer”时可以尝试调大该值规避问题。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p83101739145811"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p83101739145811"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p83101739145811"></a>12</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row0188184135716"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p10310183915815"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p10310183915815"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p10310183915815"></a>vm.overcommit_memory</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12311173912584"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12311173912584"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12311173912584"></a>控制在做内存分配的时候，内核的检查方式。</p>
<a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul14311183913587"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul14311183913587"></a><ul id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul14311183913587"><li>0：表示系统会尽量精确计算当前可用的内存。</li><li>1：表示不作检查直接返回成功。</li><li>2：内存总量×vm.overcommit_ratio/100＋SWAP的总量，如果申请空间超过此数值则返回失败。</li></ul>
<p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p193123394589"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p193123394589"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p193123394589"></a>内核默认是2过于保守，推荐设置为0，如果系统压力大可以设置为1。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13313153945816"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13313153945816"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13313153945816"></a>0</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row3361592574"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19529155145913"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19529155145913"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19529155145913"></a>net.ipv4.tcp_rmem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1452915511595"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1452915511595"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1452915511595"></a>TCP协议接收端缓冲区的可用内存大小。分无压力、有压力、和压力大三个区间，单位为页面。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5529155105915"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5529155105915"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p5529155105915"></a>8192 250000 16777216</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row10378590579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p953010511591"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p953010511591"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p953010511591"></a>net.ipv4.tcp_wmem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1153017545918"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1153017545918"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1153017545918"></a>TCP协议发送端缓冲区的可用内存大小。分无压力、有压力、和压力大三个区间，单位为页面。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p195301356597"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p195301356597"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p195301356597"></a>8192 250000 16777216</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row2387595578"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163351922125910"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163351922125910"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163351922125910"></a>net.core.wmem_max</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p14335132214593"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p14335132214593"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p14335132214593"></a>socket发送端缓冲区大小的最大值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p633582217598"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p633582217598"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p633582217598"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row33995910574"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12336132225915"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12336132225915"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12336132225915"></a>net.core.rmem_max</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p2336172218596"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p2336172218596"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p2336172218596"></a>socket接收端缓冲区大小的最大值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163361222205919"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163361222205919"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163361222205919"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1739559195711"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8336142211595"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8336142211595"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8336142211595"></a>net.core.wmem_default</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p6337182218592"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p6337182218592"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p6337182218592"></a>socket发送端缓冲区大小的默认值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p193371222105920"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p193371222105920"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p193371222105920"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row14011595570"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p333715223593"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p333715223593"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p333715223593"></a>net.core.rmem_default</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163371922175915"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163371922175915"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163371922175915"></a>socket接收端缓冲区大小的默认值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13338122275917"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13338122275917"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13338122275917"></a>21299200</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1041959195714"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1833892275911"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1833892275911"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1833892275911"></a>net.ipv4.ip_local_port_range</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p0338112235914"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p0338112235914"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p0338112235914"></a>物理机可用临时端口范围。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p14339142235915"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p14339142235915"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p14339142235915"></a>26000-65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row0425596573"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1933992225914"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1933992225914"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1933992225914"></a>kernel.sem</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p933942215595"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p933942215595"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p933942215595"></a>内核信号量参数设置大小。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12340132213597"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12340132213597"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12340132213597"></a>250 6400000 1000 25600</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row44385915579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p934010229591"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p934010229591"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p934010229591"></a>vm.min_free_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p183405228591"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p183405228591"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p183405228591"></a>保证物理内存有足够空闲空间，防止突发性换页。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17341142215591"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17341142215591"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17341142215591"></a>系统总内存的5%</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row9431359105719"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11341322145910"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11341322145910"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p11341322145910"></a>net.core.somaxconn</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1234282213599"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1234282213599"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1234282213599"></a>定义了系统中每一个端口最大的监听队列的长度，这是个全局的参数。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p534272295916"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p534272295916"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p534272295916"></a>65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row11442059175716"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163421022125917"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163421022125917"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p163421022125917"></a>net.ipv4.tcp_syncookies</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1534362218593"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1534362218593"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1534362218593"></a>当出现SYN等待队列溢出时，启用cookies来处理，可防范少量SYN攻击。</p>
<a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul534318226591"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul534318226591"></a><ul id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul534318226591"><li>0表示关闭SYN Cookies。</li><li>1表示开启SYN Cookies。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p133441022135919"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p133441022135919"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p133441022135919"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row119054135715"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1671381607"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1671381607"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1671381607"></a>net.core.netdev_max_backlog</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1975811012"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1975811012"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1975811012"></a>在每个网络接口接收数据包的速率比内核处理这些包的速率快时，允许送到队列的数据包的最大数目。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1287819014"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1287819014"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1287819014"></a>65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1319012411575"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19813814012"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19813814012"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p19813814012"></a>net.ipv4.tcp_max_syn_backlog</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13818816015"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13818816015"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p13818816015"></a>记录的那些尚未收到客户端确认信息的连接请求的最大值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1791986010"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1791986010"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1791986010"></a>65535</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row111911441145720"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p20914818010"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p20914818010"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p20914818010"></a>net.ipv4.tcp_fin_timeout</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p7978801"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p7978801"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p7978801"></a>系统默认的超时时间。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17101281003"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17101281003"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17101281003"></a>60</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row171915417579"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p61016819012"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p61016819012"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p61016819012"></a>kernel.shmall</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1810481505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1810481505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1810481505"></a>内核可用的共享内存总量。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8101081004"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8101081004"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8101081004"></a>1152921504606846720</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1093874517594"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4118812012"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4118812012"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p4118812012"></a>kernel.shmmax</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p131117813014"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p131117813014"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p131117813014"></a>内核参数定义单个共享内存段的最大值。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p181188803"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p181188803"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p181188803"></a>18446744073709551615</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row1493934585918"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p412986019"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p412986019"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p412986019"></a>net.ipv4.tcp_sack</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p112881904"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p112881904"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p112881904"></a>启用有选择的应答，通过有选择地应答乱序接受到的报文来提高性能，让发送者只发送丢失的报文段（对于广域网来说）这个选项应该启用，但是会增加对CPU的占用。</p>
<a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul112208308"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul112208308"></a><ul id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul112208308"><li>0表示关闭。</li><li>1表示开启。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17131181208"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17131181208"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p17131181208"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row199407451592"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p111418818011"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p111418818011"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p111418818011"></a>net.ipv4.tcp_timestamps</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p10141681903"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p10141681903"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p10141681903"></a>TCP时间戳（会在TCP包头增加12节），以一种比重发超时更精确的方式（参考RFC 1323）来启用对RTT的计算，启用可以实现更好的性能。</p>
<a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul814881508"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul814881508"></a><ul id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_ul814881508"><li>0表示关闭。</li><li>1表示开启。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p18151381901"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p18151381901"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p18151381901"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row3940154515911"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p02308185016"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p02308185016"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p02308185016"></a>vm.extfrag_threshold</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p62301518909"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p62301518909"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p62301518909"></a>系统内存不够用时，linux会为当前系统内存碎片情况打分，如果超过vm.extfrag_threshold的值，kswapd就会触发memory compaction。所以这个值设置的接近1000，说明系统在内存碎片的处理倾向于把旧的页换出，以符合申请的需要，而设置接近0，表示系统在内存碎片的处理倾向做memory compaction。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p923111816015"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p923111816015"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p923111816015"></a>500</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row14114125155912"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8231218904"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8231218904"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p8231218904"></a>vm.overcommit_ratio</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1823117183015"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1823117183015"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p1823117183015"></a>系统使用绝不过量使用内存的算法时，系统整个内存地址空间不得超过swap+RAM值的此参数百分比，当vm.overcommit_memory=2时此参数生效。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12232121819017"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12232121819017"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p12232121819017"></a>90</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_row151152051125910"><td class="cellrowborder" valign="top" width="24.08240824082408%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p2233161813015"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p2233161813015"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p2233161813015"></a>MTU</p>
</td>
<td class="cellrowborder" valign="top" width="52.04520452045204%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p32330181404"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p32330181404"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p32330181404"></a>节点网卡最大传输单元。OS默认值为1500，调整为8192可以提升SCTP协议数据收发的性能。</p>
</td>
<td class="cellrowborder" valign="top" width="23.87238723872387%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p223412181010"><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p223412181010"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0085031791_p223412181010"></a>8192</p>
</td>
</tr>
</tbody>
</table>


## 文件系统参数<a name="zh-cn_topic_0237152331_section975717139147"></a>

-   soft nofile

    说明：soft nofile表示软限制，用户使用的文件句柄数量可以超过该限制，但是如果超过会有告警信息。

    推荐取值：1000000

-   hard nofile

    说明：hard nofile表示硬限制，是一个严格的限制，用户使用的文件句柄数量一定不能超过该设置。

    推荐取值：1000000

-   stack size

    说明：线程堆栈大小。

    推荐值：3072


## 示例<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s0a0dfe17cef247ad9b50e77ed84aff9f"></a>

使用如下命令检查操作系统参数。

```
gs_checkos -i A -h plat1 -X /opt/software/openGauss/clusterconfig.xml --detail -o /var/log/checkos 
Performing operation system check/set. Output the result to the file /var/log/checkos.
Operation system check/set is completed.
Total numbers:14. Abnormal numbers:0. Warning number:1.

```

查看操作系统参数检查结果。

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

## 相关命令<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s3229172816a643dda00f100421b8a903"></a>

[gs\_check](gs_check.md)，[gs\_checkperf](gs_checkperf.md)

