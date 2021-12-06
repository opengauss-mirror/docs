# gs\_ctl<a name="ZH-CN_TOPIC_0249632282"></a>

## 背景信息<a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_saed7059efc5d469189c9e53a984ba786"></a>

gs\_ctl是openGauss提供的数据库服务控制工具，可以用来启停数据库服务和查询数据库状态。主要供openGauss管理模块调用。

gs\_ctl工具由操作系统用户omm执行。

-   启动、停止、重启openGauss节点。
-   在不停止数据库的情况下，重新加载配置文件（postgresql.conf，pg\_hba.conf）。
-   主备切换、主备状态查询、重建和重建状态查询。

## 参数说明<a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_sfeccdff45fda4d8dacf4cefb2b8103f8"></a>

gs\_ctl参数可分为如下几类：

-   option参数，详细请参见[表1](#zh-cn_topic_0237152408_zh-cn_topic_0059777628_t56b333c48c5e46cc93262560e23032f5)。
-   公共参数，详细请参见[表2](#zh-cn_topic_0237152408_zh-cn_topic_0059777628_t09253ddb2a8a4d4a8ba32b103310bb68)。
-   start和restart模式的参数，详细请参见[表3](#zh-cn_topic_0237152408_zh-cn_topic_0059777628_t6d75b31bab9540b284e45222396ae38b)。
-   stop和restart模式的参数，详细请参见[表4](#zh-cn_topic_0237152408_zh-cn_topic_0059777628_t5406d28e9445424c9fcf63658cffc13a)。
-   switchover模式的参数，详细请参见[表5](#zh-cn_topic_0237152408_zh-cn_topic_0059777628_tb40c07f148df463c8012b9e7183fdb31)。
- build参数，详细请参见[表6](#zh-cn_topic_0237152408_zh-cn_topic_0059777628_t22fb7e7152bf4c939f6316c48cb80b5b)。

  **表 1**  option参数

  <a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_t56b333c48c5e46cc93262560e23032f5"></a>
  <table><thead align="left"><tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r3929a183903a469ab774fba257d687b4"><th class="cellrowborder" valign="top" width="25.3%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_afa4039b4b9364850ae1fec4b95e894fc"></a>参数</p>
  </th>
  <th class="cellrowborder" valign="top" width="74.7%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8b8a2d3711244e90b0305a484e90f9ff"></a>参数说明</p>
  </th>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r3b3072e09eb74375b7f20d0c3e927d43"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"></a>init</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"></a>创建数据库。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r3b3072e09eb74375b7f20d0c3e927d43"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9aa8c25f9ad146b995556d1ffc70bfe1"></a>start</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a72ab2ed393d541928b39adae53cfcdca"></a>启动数据库。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r31c37425852d4a24a3d79984a227aec5"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a95a12ca9f06c4f51987e568cbdfdbe0c"></a>restart</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ae23478cff6104615ad729d85fe238cfd"></a>重启数据库。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r515fd2102d1d4bd3bd5bfded3a737b80"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8954793ab7324bbbadc2918ac5a879b5"></a>build</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a37cc0cf546a24ea5af5c2fd108b781f7"></a>在主机上重建备实例或级联备实例。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r0cd18abaee9141439b20f10f5909a508"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aafaefbf4f86c4c5780185eb041db1e19"></a>stop</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a789c0f0db6af439da52f73d557be2018"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a789c0f0db6af439da52f73d557be2018"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a789c0f0db6af439da52f73d557be2018"></a>停止数据库。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_rac69552e400344fdb7e6fd33ec6c5510"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab247effbdee84ab1844e1083db41e26c"></a>reload</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa66695e9ba8247a68218d9a5729c9b2b"></a>重载配置文件（postgresql.conf, pg_hba.conf）。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r3608cac8fce041f2b62be02691c710fd"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adba39c429e9e4997b2a8aa0db8a78a02"></a>status</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2e88523db73c404fb4094dceffa62c8b"></a>显示数据库运行状态。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r268eda7d24344929b4fbe045815c4f75"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ab2e63109e845538bc05f10e56770b7"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ab2e63109e845538bc05f10e56770b7"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ab2e63109e845538bc05f10e56770b7"></a>promote</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a055cecf55ede4cf09b08d2273fe6acd1"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a055cecf55ede4cf09b08d2273fe6acd1"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a055cecf55ede4cf09b08d2273fe6acd1"></a>在指定的数据目录运行的备用服务器被命令退出故障恢复，并开始进行读写操作。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r268eda7d24344929b4fbe045815c4f75"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ab2e63109e845538bc05f10e56770b7"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ab2e63109e845538bc05f10e56770b7"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ab2e63109e845538bc05f10e56770b7"></a>finishredo</p></td><td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a055cecf55ede4cf09b08d2273fe6acd1"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a055cecf55ede4cf09b08d2273fe6acd1"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a055cecf55ede4cf09b08d2273fe6acd1"></a>主机故障时，备机停止回放，强制升主。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r50cd614425ec45d2b87aece8def5e24c"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ae5c5bba77f88420786ff7db5c596e690"></a>failover</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7fe6061dec954ed387a854ada948b7a7"></a>在主机异常时，将备机切换为主机。</p>
  <p id="p0444145125912"><a name="p0444145125912"></a><a name="p0444145125912"></a>切换成功后，需要执行gs_om -t refreshconf 命令记录当前主备机信息，确保gs_om -t refreshconf 命令执行成功，否则再次重启会影响数据库状态。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_rf3ffc423f13a4943b18d24be85bcc74f"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1ad3e7a546a04d24bb48bf4b19fd0d7c"></a>switchover</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a68a9c0e9002d4338abf24a3427f8f1e8"></a>在主备机正常时，出于维护的需要，将备机切换为主机，可保证切换过程中数据不丢失。</p>
  <p id="p12188127154613"><a name="p12188127154613"></a><a name="p12188127154613"></a>必须在要切换为主机的备机上，执行switchover命令才会生效。在主机上执行switchover命令，仅做查询使用。</p>
  <p id="p1977111500144"><a name="p1977111500144"></a><a name="p1977111500144"></a>切换成功后，需要执行gs_om -t refreshconf 命令记录当前主备机信息，确保gs_om -t refreshconf 命令执行成功，否则再次重启会影响数据库状态。</p>
  <p id="p1701525967"><a name="p1701525967"></a><a name="p1701525967"></a>switchover命令下发后，命令如果超时返回，后台进程的执行状态可能处于不可确定状态。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r30b3aa9baf20460baf9e2b4f5fc55af3"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a94884c00e8b84621bc978b3fba6fce4c"></a>query</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac4b07e8b28234e978cab7d001aa11b5f"></a>查询主备机之间的状态信息。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r2ce5962d0dea41f3908b55f917778497"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a24e6f45222114f2d9cee95b0f1dcaba9"></a>notify</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ae482529d18be4765a5527786608c11f7"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ae482529d18be4765a5527786608c11f7"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ae482529d18be4765a5527786608c11f7"></a>启动后再指定主备机。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r35e8037818c84fdeafe486b78988f621"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a988038b433da4187a1c13d0b953ce677"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a988038b433da4187a1c13d0b953ce677"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a988038b433da4187a1c13d0b953ce677"></a>kill</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ace0b93e9463342b2b8ff00cf1a70f9eb"></a>给指定的进程发送信号量。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r49b9f0118eb54e7da572b7511322b93d"><td class="cellrowborder" valign="top" width="25.3%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adccdef7fcf8b42f5bd5f7d70d8412846"></a>querybuild</p>
  </td>
  <td class="cellrowborder" valign="top" width="74.7%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a21c9b7614320489fa62f71f15d1d2a27"></a>查看数据库的重建进度。</p>
  </td>
  </tr>
  </tbody>
  </table>

**表 2**  公共参数

<a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_t09253ddb2a8a4d4a8ba32b103310bb68"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_re02c46dcbf4e4581add1ede94a47195b"><th class="cellrowborder" valign="top" width="22.117788221177882%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a627aed148a2c4a589506fd90e3f8fc69"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="30.846915308469153%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adfb6a48d792f4bde9dfb7c7b1a5e42a1"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2cba61b60f9243788c1cbe92c94e6daf"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r6ae94b168ff1431ebeb1d02a8183345a"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9e74fdf5ce3d46778827a47d380b2ea5"></a>-D, --pgdata=DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a4b9205991e3849a7a44b9a3ac909dc85"></a>指定数据目录的位置。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5ad801744e3b4022a7dbdc1cd590100e"></a>DATADIR的取值必须为有效的数据目录。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r01437712745143c7b52a1c5f2b9f7b52"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_acc6554d5f9c94bd4a1451ba393465ed5"></a>-s,  --silent</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a168a488e0d82416bbba1ace430f442b5"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a168a488e0d82416bbba1ace430f442b5"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a168a488e0d82416bbba1ace430f442b5"></a>对于promote、reload、restart、stop命令仅打印部分提示信息，对其他命令不生效。打印信息如：server promoting、server shuting down。不打印信息如：waiting for server to shut down、server stopped等提示信息。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9d3d22f0e42647aa8785ad994873baf4"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r5d93022a354a4f6f863cdc9623106c56"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab7908eb6834847459104aac6fa8283da"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab7908eb6834847459104aac6fa8283da"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab7908eb6834847459104aac6fa8283da"></a>-t, --timeout=SECS</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a23aa7828a0404bb58c0e6de885ece985"></a>等待数据库启动、关闭或者主备切换完成的最大秒数。如果等待超时，命令会结束退出，并通知不再等待。此后，可以通过gs_om -t status --detail或其他查看数据库状态的命令，来确认数据库是否启动、关闭或主备切换成功。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a980dac01704a4f59863b07666f3dd4cc"></a>取值范围：整型（秒）。</p>
<p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1fb7733ef113445da45a4e4d70b1f9ca"></a>默认值：等待数据库启动、关闭或者主备切换完成：60秒。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ref8aa84c54b14adcb701e33c5c907ed5"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a>-V , --version</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a>打印gs_ctl的版本信息然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ref8aa84c54b14adcb701e33c5c907ed5"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a>-w</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a>需要等待操作完成。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a>默认值：数据库启动、停止或者重新启动时，需要等待操作完成。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ref8aa84c54b14adcb701e33c5c907ed5"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7a7b146805574b938f4a23672e78d8cb"></a>-W</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aa081bb56d1854020bb02b2e359cebdb1"></a>不用等待操作完成。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a33149e11a4c94a1bbf09be44fbf9b102"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_rda88e0e994ae424dadad636f9e78b7e5"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a7e919b02ae9c496b905b10d49d68288b"></a>-M</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adc2efb8705614ebea2da5b1f32f126a5"></a>-M后面需要跟SERVERMODE参数，表示在启动时指定数据库的启动模式。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a0a0b08af01b940589b8c259607d1ccc6"></a>SERVERMODE的取值范围：</p>
<a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"></a><ul id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_u09654e02b6264b058493a0ce3b2ded8a"><li>primary：本端以主机模式启动。</li><li>standby：本端以备机模式启动。</li><li>cascade_standby：本端以级联备机模式启动。</li><li>pending：本端处于等待状态，等待提升为主机或者备机。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_row79165943917"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_p16108598396"><a name="zh-cn_topic_0237152408_p16108598396"></a><a name="zh-cn_topic_0237152408_p16108598396"></a>-T</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_p110125916399"><a name="zh-cn_topic_0237152408_p110125916399"></a><a name="zh-cn_topic_0237152408_p110125916399"></a>-T 后面跟term，升主命令时会用此term作为主机term，build时会连接大于等于此term的主机进行build。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_p2106594397"><a name="zh-cn_topic_0237152408_p2106594397"></a><a name="zh-cn_topic_0237152408_p2106594397"></a>term的取值范围，无符号整型。</p>
</td>
</tr>
<tr id="row89351326193410"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="p19935152683419"><a name="p19935152683419"></a><a name="p19935152683419"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="p19935726153414"><a name="p19935726153414"></a><a name="p19935726153414"></a>打印更多调试信息。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p1493592615345"><a name="p1493592615345"></a><a name="p1493592615345"></a>无参数</p>
</td>
</tr>
    <tr id="row89351326193410"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="p19935152683419"><a name="p19935152683419"></a><a name="p19935152683419"></a>-q</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="p19935726153414"><a name="p19935726153414"></a><a name="p19935726153414"></a>生成完成个后不自动启动，需要调用者启动。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="p1493592615345"><a name="p1493592615345"></a><a name="p1493592615345"></a>无参数</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r0297ef20051849eeaa6c1304ff282801"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3327025f553a4190952a4672db74812c"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3327025f553a4190952a4672db74812c"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3327025f553a4190952a4672db74812c"></a>-P PASSWORD</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6a27bbf91dbb433880d743b86417fb26"></a>与-U参数配合使用，指定连接本地数据库的用户密码。</p>
<div class="note" id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ne6f7bcb5417f4c138370cbce3b36ef7e"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_abacde9d6a0a0402c9bfd182eeda50b4e"></a>当省略-U参数，且认证方法为trust时，-P参数无效。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a12c5999e28f1411ba911fdceaa7aafb8"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r3f82716aafe84968a563d032cd248c85"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ab6aad2f1529840f1b2a6762e779f24cd"></a>-U USERNAME</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a01b2184f49e74df6bb9bb71308bc6332"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a01b2184f49e74df6bb9bb71308bc6332"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a01b2184f49e74df6bb9bb71308bc6332"></a>指定连接数据库的用户。此参数只能与notify、query、failover、switchover和querybuild参数配合使用。</p>
<p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p107010214249"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p107010214249"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p107010214249"></a>对于域用户，使用DOMAIN\username格式。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9a836135fb374d04b5806858c044cde5"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9a836135fb374d04b5806858c044cde5"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9a836135fb374d04b5806858c044cde5"></a>取值范围：openGauss中存在的用户。</p>
<p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a36dd99768f494af69454ba3bff85dc3d"></a>默认值：省略此参数则使用与当前操作系统用户同名的用户。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r4e2f2b577bcb4896bff694fd6fea6e41"><td class="cellrowborder" valign="top" width="22.117788221177882%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_af0e38378554e49f69576073cc765f909"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_af0e38378554e49f69576073cc765f909"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_af0e38378554e49f69576073cc765f909"></a>-?, --help</p>
</td>
<td class="cellrowborder" valign="top" width="30.846915308469153%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac427b89a55cf4503a0ede3a0efe0d4fa"></a>显示关于gs_ctl命令行参数的帮助信息。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_afcd7cb5814f3493386a8ebfe513f3bda"></a>-</p>
</td>
</tr>
</tbody>
</table>




**表 3**  start或restart共有参数

<a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_t6d75b31bab9540b284e45222396ae38b"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ra5163707ec6f459aa581508ce3a64fa7"><th class="cellrowborder" valign="top" width="21.38%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ac0ee49977caa40c7945710295fab97bf"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="31.41%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad3fc3779415b4b9c8a584fee18eb648b"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="47.21%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a441e795a40bb4b5fa4f030cbeefb05a6"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r42ebb4c1c5cd41b0a856b710b85a92ea"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5496ae6ad3214c39869994e9026e313e"></a>-c, --core-file</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a5a07ca188c8c45e9b9a83b4ea11b28c3"></a>允许gaussdb进程产生内核文件。</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a22dba39a77524229b149b65a3e86d56b"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r8f755f6ca8bb430c8bc93b6be21aee87"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_adcc95d9ffcd54c76aed728963a6459b0"></a>-l, --log=FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9c59a13e823a4b87847dbd49870af20b"></a>把服务器日志输出附加在FILENAME文件上。</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a32570024fed54df39f2a465f7a0f7c0c"></a>FILENAME的取值为启动数据库服务的用户有权限的文件。</p>
<p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c07cd58886744b8939f1e1fc612bac3"></a>例如，data目录下的某文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_rf8dad388443e4dba914ce4e5f7a3c107"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8f940255687342c484301bee3304d0ec"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8f940255687342c484301bee3304d0ec"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a8f940255687342c484301bee3304d0ec"></a>-o OPTIONS</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2345efd82ccf4eea9f9b79a70e62c29e"></a>声明要直接传递给由openGauss执行的gaussdb的命令行选项。</p>
<p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a488d1701ff6344a69a773fb4ab82b9b6"></a>参数通常都用单或者双引号包围以保证它们作为一个整体传递。</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a2b9dcd6d15c046b89a02df0fc7bacd93"></a><a href="gaussdb.md">gaussdb</a>支持的参数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ra613cc55a1f04bd59cd73853322ae8ab"><td class="cellrowborder" valign="top" width="21.38%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aef6eee5442074ecc93f82596ea94d5d6"></a>-p PATH-TO-POSTGRES</p>
</td>
<td class="cellrowborder" valign="top" width="31.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aec524f247a2b452882655ed0d498acce"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aec524f247a2b452882655ed0d498acce"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_aec524f247a2b452882655ed0d498acce"></a>声明gaussdb可执行文件的位置。</p>
</td>
<td class="cellrowborder" valign="top" width="47.21%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a28061e2923834c0c9293440118b10948"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a28061e2923834c0c9293440118b10948"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a28061e2923834c0c9293440118b10948"></a>缺省位于gs_ctl自身所在目录，一般不需要此选项。</p>
</td>
</tr>
</tbody>
</table>

**表 4**  stop和restart共有参数

<a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_t5406d28e9445424c9fcf63658cffc13a"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_re62fdea480ab4246aa49656499aec578"><th class="cellrowborder" valign="top" width="21.14788521147885%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3c47cee9186f46aa990412a8d288537c"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="31.81681831816818%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3314d30c5a73417d9ab25ea01e533b61"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p765714214249"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p765714214249"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p765714214249"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r7831cd85a10a4bb3b4d6c79f8e29eaf2"><td class="cellrowborder" valign="top" width="21.14788521147885%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a560da27731a646e6a636064b18132803"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a560da27731a646e6a636064b18132803"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a560da27731a646e6a636064b18132803"></a>-m, --mode=MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.81681831816818%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a904c92157deb4efc9c8d31a00c2a2731"></a>声明关闭模式。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p742860814249"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p742860814249"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p742860814249"></a>mode的取值：</p>
<a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ue13279906755488aac7fce36fb412625"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ue13279906755488aac7fce36fb412625"></a><ul id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ue13279906755488aac7fce36fb412625"><li>fast：不等待客户端中断连接，所有活跃事务都被回滚并且客户端都被强制断开，然后服务器将被关闭。</li><li>immediate：强行关闭，在下次重新启动的时候将导致故障恢复。</li></ul>
<p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ad5673b7093f647b683169b8540d62b5c"></a>默认值：fast</p>
</td>
</tr>
</tbody>
</table>

**表 5**  switchover参数

<a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_tb40c07f148df463c8012b9e7183fdb31"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_re3e64b56d74d42f4914d7bb1d03aa970"><th class="cellrowborder" valign="top" width="21.14788521147885%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a6981c07ab61443f79893635fc5612a3a"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="31.81681831816818%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p797816293442"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p797816293442"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_zh-cn_topic_0058968123_p797816293442"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="47.03529647035297%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a14f1971c36c7486f9a9f15bc9da3056e"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r9a3a522b0caf495da096a1ff8ba20aee"><td class="cellrowborder" valign="top" width="21.14788521147885%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a80258760e4f74ab0b9d58c4d526713ed"></a>-m SWITCHOVER-MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.81681831816818%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a56dac3daa98d4aeaafff709d28416938"></a>声明双机主备实例正常时切换的切换模式。</p>
</td>
<td class="cellrowborder" valign="top" width="47.03529647035297%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a46084dc528fd40b4acf2cb824712259d"></a>mode的取值：</p>
<a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"></a><ul id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ub1c664579d5c471aad1c937aff62631d"><li>fast：不等待客户端中断连接，所有活跃事务都被回滚并且客户端都被强制断开，然后服务器将被切换。</li><li>smart：本版本暂不支持该模式。</li></ul>
<p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_af569c9abf23c46238bafee5bc8e39620"></a>默认值：fast</p>
</td>
</tr>
</tbody>
</table>
**表 6**  build参数

<a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_t22fb7e7152bf4c939f6316c48cb80b5b"></a>

<table><thead align="left"><tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_r991543695e1942e391e7bb42b7c235fe"><th class="cellrowborder" valign="top" width="21.12%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a98babff2b333444a8845163c25408eac"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a98babff2b333444a8845163c25408eac"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a98babff2b333444a8845163c25408eac"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="31.45%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a3e6730e8b8ce49a5aa198182a721ccc5"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="47.43%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a1e922689402e46a88e12d16055e73cfe"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row1566219017310"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="p126622017319"><a name="p126622017319"></a><a name="p126622017319"></a>-b MODE</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="p1966215010318"><a name="p1966215010318"></a><a name="p1966215010318"></a>指定重建备机的模式。</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="p887411245513"><a name="p887411245513"></a><a name="p887411245513"></a>mode的取值：</p>
<p id="p13270172819514"><a name="p13270172819514"></a><a name="p13270172819514"></a>● full：通过全量镜像的方式重新同步 主机的数据目录。</p>
<p id="p466319111169"><a name="p466319111169"></a><a name="p466319111169"></a>● incremental：通过解析Xlog日志获 取主备机差异的数据进行增量修复备机。</p>
<p id="p106721111857"><a name="p106721111857"></a><a name="p106721111857"></a>说明：增量重建适用于主备双主等因日志造成的不一致的场景。</p>
<p id="p15978143115518"><a name="p15978143115518"></a><a name="p15978143115518"></a>警告 ● 增量重建适用于主备双主等因日志 造成的不一致场景。</p>
<p id="p643515574347"><a name="p643515574347"></a><a name="p643515574347"></a>● 增量重建不适用于一主一备并且没有开启最大高可用的场景，此种场景下需要使用全量重建或者开启最大高可用后再进行增量重建。</p>
<p id="p105751436553"><a name="p105751436553"></a><a name="p105751436553"></a>● 备机数据文件损坏、数据目录丢失等故障通过增量重建的方式无法修复，此时可通过全量重建的方式重新修复备机。</p>
<p id="p381916183516"><a name="p381916183516"></a><a name="p381916183516"></a>● auto（不指定）：先增量，增量失败后进行会自动进行一次全量重建。</p>
<p id="p106721111857"><a name="p106721111857"></a><a name="p106721111857"></a>默认值：auto</p>
<p id="p106721111857"><a name="p106721111857"></a><a name="p106721111857"></a>说明：重建级联备机需要加上-M cascade_standy参数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_ra22c49a9c167449bb1a36edb91560c19"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9da0d3e3b65b47ee96a180628738bba0"></a>-r, --recvtimeout=INTERVAL</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_abcde5641cb3145d196b83dd4cf7a67f2"></a>指定重建过程中备机日志接收等待主机响应的超时时间。</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a922e766e1f6e46629141bfed8e92b5f9"></a>取值范围：整型（秒）。</p>
<p id="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"></a><a name="zh-cn_topic_0237152408_zh-cn_topic_0059777628_a9fe1c06008014c0a87419691c6a20e1e"></a>默认值：120秒</p>
<p id="p452620194414"><a name="p452620194414"></a><a name="p452620194414"></a>提示：超时时间需根据业务繁忙程度设置，业务繁忙等待主机的响应时间需加长，建议超时时间=checkpoint的执行时间+1min。</p>
</td>
</tr>
<tr id="row2029662921416"><td class="cellrowborder" valign="top" width="21.12%" headers="mcps1.2.4.1.1 "><p id="p62971529151411"><a name="p62971529151411"></a><a name="p62971529151411"></a>-q</p>
</td>
<td class="cellrowborder" valign="top" width="31.45%" headers="mcps1.2.4.1.2 "><p id="p13298629141413"><a name="p13298629141413"></a><a name="p13298629141413"></a>重建结束后，是否自动重启。
</p>
<p id="p858016150165"><a name="p858016150165"></a><a name="p858016150165"></a>指定参数场合，不自动重启。</p>
<p id="p1232613751612"><a name="p1232613751612"></a><a name="p1232613751612"></a>未指定场合，自动重启。重启默认最大等待时间是60秒。如果在此时间内数据库未能启动成功，就会报不再等待，命令退出。此后可以通过gs_om -t status --detail或其他查看数据库状态的命令，来确认数据库是否启动成功。</p>
</td>
<td class="cellrowborder" valign="top" width="47.43%" headers="mcps1.2.4.1.3 "><p id="p729832991415"><a name="p729832991415"></a><a name="p729832991415"></a>无参数</p>
</td>
</tr>
</tbody>
</table>

**表 7**  query参数

<a name="table198621411133319"></a>

<table><thead align="left"><tr id="row2086211117339"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p2862181110338"><a name="p2862181110338"></a><a name="p2862181110338"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p88621511133318"><a name="p88621511133318"></a><a name="p88621511133318"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1986251123315"><a name="p1986251123315"></a><a name="p1986251123315"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="row386211112337"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p68621111193318"><a name="p68621111193318"></a><a name="p68621111193318"></a>-L</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1886241133318"><a name="p1886241133318"></a><a name="p1886241133318"></a>查询lsn并展示最大长度。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1186261112338"><a name="p1186261112338"></a><a name="p1186261112338"></a>无参数</p>
</td>
</tr>
</tbody>
</table>
