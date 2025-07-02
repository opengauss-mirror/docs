# gs_preupgradechk

## 背景信息<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_section39821515163211"></a>

gs_preupgradechk工具用来检查集群中cpu、内存、磁盘、网络、进程等资源情况。

## 前提条件<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_scab2909286904a92959e438b7ac1b8c7"></a>

- 各主机间普通用户正常。

- 普通用户执行gs_preupgradechk命令。

  ![](public_sys-resources/icon-note.png) **说明：**

  若为环境变量分离的模式安装的数据库，普通用户需要source环境变量分离文件ENVFILE。
  若为环境变量不分离的模式安装的数据库，普通用户需要source ~/.bashrc。


## 语法<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s991d75846f4c48a298084c67b46b40ee"></a>

-   检查操作系统信息

    ```
    gs_preupgradechk -i ITEM [-l LOGFILE]
    ```

-   显示帮助信息

    ```
    gs_preupgradechk -? | --help 
    ```

-   显示版本号信息

    ```
    gs_preupgradechk -V | --version
    ```


## 参数说明<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s79c5f0d8e9e742deacd81d9e296c2960"></a>

-   -i

    列表编号。格式：-i A或-i A1,A2。

    取值范围：A1...A7。

    详细的检查项请参见[表1](#zh-cn_topic_0237152331_zh-cn_topic_0059778883_t5348bfc47f50450687012eacb1a1ba4e)。

-   -l

    指定日志文件及存放路径。

    默认值：$GAUSSLOG/om/gs\_preupgradechk-YYYY-MM-DD\_hhmmss.log。

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
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a>cpu使用率（cpu used status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"></a>检查cpu的使用率，大于95%报错；大于85报warning；其他正常。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rb2f376211ded4f38bfd31e2bfe310480"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a>A2</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a>内存使用率 （mem used status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a>检查内存的使用率，大于95%报错；大于85报warning；其他正常。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r8eb67a4d5ad8404ebf97db57b971e9da"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a>A3</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a>磁盘空间 （disk used status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a>磁盘空间设置检查：保证/tmp目录、/home目录有50M的空间；资源池化data和log的使用率不超过datastorage_threshold_value_check设置的值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r73edb318777c4391bf4786a68c3bfe15"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a>A4</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"></a>进程状态 （process status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a>保证集群的状态正常。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rcaa7080fa9e04d3fb757cfea2b58b042"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a>A5</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a>网络状态（network status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a>保证各个节点的网络可以互通。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rc10298339e724f9d94e6645a42384db2"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a>A6</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a>数据库参数 （database status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a>process_used_memory的值达到了max_process_memory的90%，报Warning，否则正常；活跃连接数大于20，报Warning，否则正常。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r24f0ef2ad50f4a87b554a01c70871c8f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a>A7</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"></a>备机回放延迟（replaygay status）</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a>传统主备：备机回放的延迟时间不超过5min，否则报Error；资源池化不校验。</p>
</td>
</tr>       
</tbody>
</table>


## 示例<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s0a0dfe17cef247ad9b50e77ed84aff9f"></a>

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
    do not check replaygay.                                 [Normal]

[openGaussxxx]
    Memory usage is at 23.4%                                [Normal]
    All disk space is enough.                               [Normal]
    process is normal                                       [Normal]
    successfully checked network                            [Normal]
    CPU usage is at 18.0%                                   [Normal]
    max_process_memory is greater than process_used_memory  [Normal]
    The number of active connections is 1                   [Normal]
    do not check replaygay.                                 [Normal]

[openGaussxxx]
    Memory usage is at 31.7%                                [Normal]
    All disk space is enough.                               [Normal]
    process is normal                                       [Normal]
    successfully checked network                            [Normal]
    CPU usage is at 20.0%                                   [Normal]
    max_process_memory is greater than process_used_memory  [Normal]
    The number of active connections is 1                   [Normal]
    the replaygay time is 0min.                             [Normal]
```
