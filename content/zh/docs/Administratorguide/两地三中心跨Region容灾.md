# 两地三中心跨Region容灾

要实现跨Region容灾，需要部署两套数据库实例，一套主数据库实例，一套灾备数据库实例。主数据库实例和灾备数据库实例一般部署在相距较远的两个不同城市。数据库实例之间借助存储介质或者不借助存储介质直接实现数据的全量和增量同步。当主数据库实例（即生产数据库实例）出现地域性故障，数据完全无法恢复时。可考虑启用将灾备数据库实例升主，以接管业务。

openGauss当前提供基于流式复制的异地容灾解决方案。

## 基于流式复制的异地容灾解决方案

### 概述

从openGauss 3.1.0版本开始，两地三中心跨Region容灾开始提供该解决方案。

### 规格与约束

本节就该解决方案的特性规格与约束进行详细描述，管理人员需重点关注。

#### 特性规格

- 主数据库实例或灾备数据库实例内网络时延要求<=10毫秒，主备数据库实例之间异地网络时延要求<=100毫秒。该时延范围内可保证容灾的正常运行，否则会导致主备数据库实例断链等情况出现。

- 在网络带宽非瓶颈，灾备数据库实例打开并行回放前提下，不同硬件规格可支持主数据库实例日志产生速度如下表所示。在该日志产生速度下可以保证RPO、RTO，否则无法保证。

  **表 1**  典型配置下日志产生速率

  <a name="table17799174017294"></a>

  <table><thead align="left"><tr id="row128001840172918"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p38001240152916"><a name="p38001240152916"></a><a name="p38001240152916"></a>典型配置</p>
  </th>
  <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p3800204013293"><a name="p3800204013293"></a><a name="p3800204013293"></a>支持主数据库实例日志产生速率</p>
  </th>
  </tr>
  </thead>
  <tbody><tr id="row38001640102916"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p15800940112913"><a name="p15800940112913"></a><a name="p15800940112913"></a>96U/768G/SATA SSD</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1280016403297"><a name="p1280016403297"></a><a name="p1280016403297"></a>&lt;=10MB/s</p>
  </td>
  </tr>
  <tr id="row179471532813"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p137941115112820"><a name="p137941115112820"></a><a name="p137941115112820"></a>128U/2T/NVMe SSD</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p7794015152814"><a name="p7794015152814"></a><a name="p7794015152814"></a>&lt;=40MB/s</p>
  </td>
  </tr>
  </tbody>
  </table>

- 如果磁盘混合部署，应采用低配部分的规格（比如数据库实例内有NVMe和SATA盘，请参考SATA盘配置的规格）。

- 灾备数据库实例升主允许丢失一定的数据，RPO<=10秒 ；灾备数据库实例处于normal态，灾备升主RTO<=10分钟，数据库实例处于degraded状态等叠加故障场景下，执行灾备数据库实例升主RTO一般在20分钟以内。

- 演练特性：计划内主备数据库实例倒换，无数据丢失RPO=0，RTO<=20分钟\(包含主数据库实例降为灾备实例，灾备数据库实例升主两个流程\)。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>经过测试，SATA SSD极限写入速率在240MB/s左右，SAS SSD可以达到500MB/s以上的写入速度，NVMe SSD表现则更为优异。如果硬件条件达不到如上标准，则可支持的主数据库实例单分片日志产生速度应下调，才可保证RPO、RTO。
>
>主备数据库实例出现文件句柄，内存等资源耗尽时，无法保证RPO，RTO。

#### 特性约束

-  搭建容灾关系前，主集群需创建具有流复制权限的容灾用户，用于容灾鉴权，主备集群必须使用相同的容灾用户名和密码，一次容灾搭建后，该用户密码不可修改。若需修改容灾用户名与密码，需要解除容灾，使用新的容灾用户重新进行搭建。容灾用户密码中不可包含以下字符“| ;&$<>`\'"{}()[]~*?!\n空白”。
-  搭建容灾的主备集群版本号必须相同。
- 流式容灾搭建前不支持已存在首备及级联备。
-  搭建容灾关系时，如果集群副本数<=2，会设置most_available_sync为on，在容灾解除或者failover后此参数不会恢复初始值，持续保证集群为最大可用模式。
-  搭建容灾关系时，会设置synchronous_commit为on，解除容灾或failover升主时恢复初始值。
-  灾备集群可读不可写。
-  灾备集群通过failover命令升主后，和原主集群灾备关系将失效，需要重新搭建容灾关系。
- 在主数据库实例和灾备数据库实例处于normal状态时可进行容灾搭建；在主数据库实例处于normal态并且灾备数据库实例已经升主的情况下，主数据库实例可执行容灾解除，其他数据库实例状态不支持。在主数据库实例和灾备数据库实例处于normal状态时，通过计划内switchover命令，主数据库实例可切换为灾备数据库实例，灾备数据库实例可切换为主数据库实例。灾备数据库实例处于非Normal且非Degraded状态时，无法升主，无法作为灾备数据库实例继续提供容灾服务，需要手动修复或重建灾备数据库实例。
- 灾备集群DN多数派故障或者CMS、DN全故障，无法启动容灾，灾备集群无法升主，无法作为灾备集群，需要重建灾备集群。
- 主集群如果进行了强切操作，需要重建灾备集群。
-  主集群和灾备集群都支持gs_probackup工具中的全备和增备。容灾状态下，主集群和灾备集群都不能做恢复。如果主数据库实例要做恢复，需要先解除容灾关系，在完成备份恢复后重新搭建容灾关系。
- 容灾关系搭建之后，不支持DN实例端口修改。
-  建立容灾关系的主数据库实例与灾备数据库实例之间不支持GUC参数的同步。
- 主备集群不支持节点替换、修复、升降副本，DCF模式。
- 当灾备数据库实例为2副本时，灾备数据库实例在1个副本损坏时，仍可以升主对外提供服务，如果剩余的这个副本也损坏，将导致不可避免的数据丢失。
- 容灾状态下仅支持灰度升级，且继承原升级约束，容灾状态下升级需要遵循先升级主集群，再升级备集群，再提交备集群，再提交主集群的顺序。
- 建议对于流式容灾流复制IP的选择，应考虑尽量使集群内的网络平面与跨集群网络平面分离，便于压力分流并提高安全性。

### 影响容灾性能指标的GUC参数设置<a name="ZH-CN_TOPIC_0000001276547749"></a>

#### 检查点相关参数设置的影响<a name="section1564175012403"></a>

-   特性规格中描述的容灾性能指标均为检查点相关参数设置默认值情况下测得。
-   检查点相关参数描述参见《开发者指南》中“GUC参数说明 \> 预写式日志 \> 检查点”章节。其中"enable\_incremental\_checkpoint"为on时，设置自动WAL检查点之间的最长时间将由"incremental\_checkpoint\_timeout"决定，如果不采用默认值并将其改大，将可能导致实例重启时会有大量日志需要回放，进而影响到容灾指标RTO变大，无法达到特性规格。

#### 极致RTO相关参数设置的影响<a name="section129219253118"></a>

极致RTO相关参数描述参见《开发者指南》中“GUC参数说明 \> 预写式日志 \> 日志回放“章节的recovery\_parse\_workers和recovery\_redo\_workers参数描述。如果要开启极致RTO，应至少满足每台机器上的逻辑CPU数大于打开极致RTO后额外启动的线程数（计算公式为 \(recovery\_parse\_workers \* \(recovery\_redo\_workers + 2\) + 5\) \* 每台机器上的DN实例数），否则可能出现线程对CPU资源争抢的情况，导致容灾流程中部分操作耗时变长，无法达到容灾特性规格。

### 基本操作<a name="ZH-CN_TOPIC_0000001262512081"></a>

#### 容灾搭建<a name="ZH-CN_TOPIC_0000001217672260"></a>

##### 容灾搭建前主数据库实例业务负载评估<a name="section6899193815717"></a>

**数据量**：

- 主数据库实例存储数据量，直接影响容灾搭建需要传输的数据量。该值结合异地网络带宽，直接影响容灾搭建时长，可在搭建容灾接口的"time-out"设置超时时间，当前默认值为20min。超时时间的评估与主数据库实例搭容灾前的数据量与异地可使用带宽相关，计算公式为“数据量/传输速率 = 耗时”。

  例如：主数据库实例有100TB数据，异地数据库实例间可用带宽为512Mbps（传输速率为64MB/s），搭建容灾传递这些数据需要时间为1638400s（100\*1024\*1024/64，大约19天）。


**日志产生速率**：

- 该值影响容灾搭建过程中主数据库实例需要保留在主数据库实例本地的日志量，灾备数据库实例在完成全量数据恢复后将与主数据库实例建立流式复制关系，如果主数据库实例未对日志进行保留，将可能导致流式复制关系建立失败。

  例如：经过计算搭建过程要持续2天，那么这2天内的日志需要在搭建完成前保留在主数据库实例本地磁盘。

- 如果主数据库实例日志产生速率大于异地传输带宽；或者在带宽充足的情况下，主数据库实例日志产生速率大于灾备数据库实例的日志回放速率，即超规格场景搭建容灾后将导致RPO/RTO无法保持在特性规格水平。

##### 容灾搭建调用接口<a name="section9319195834315"></a>

容灾搭建时需要对主备数据库实例发送搭建请求，参考《工具参考》中gs\_sdr工具。

>![](public_sys-resources/icon-notice.gif) **须知：**  
>
>-   容灾搭建时需要在主数据库实例和灾备数据库实例使用相同容灾用户名和密码用于数据库实例间鉴权，该用户的权限为Replication（Replication属性是特定的角色，仅用于复制）。
>-   搭建容灾前需要在主集群创建容灾用户。
>-   一次容灾搭建后，该用户密码不可修改，伴随整个容灾生命周期。若需修改容灾用户名与密码，需要解除容灾，使用新的容灾用户重新进行搭建。
>-   容灾搭建过程可在"time\_out"设置超时时间，当前默认值为20min。超时时间的评估与主数据库实例搭容灾前的数据量与异地可使用带宽相关，计算公式为“数据量/传输速率 = 耗时”。
>    例如：主数据库实例有100TB数据，异地数据库实例间可用带宽为512Mbps（传输速率为64MB/s），搭建容灾传递这些数据需要时间为1638400s（100\*1024\*1024/64，大约19天）。

#### 灾备数据库实例升主failover<a name="ZH-CN_TOPIC_0000001217832244"></a>

向灾备数据库实例发送灾备数据库实例升主的请求，参考《工具参考》中gs\_sdr工具。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>-   灾备数据库实例升主后会进行容灾信息清除。
>-   如果主数据库实例处于正常状态，正在处理业务，灾备数据库实例因要主动解除容灾可以执行该命令。在该命令下发后，灾备数据库实例将不会再接收主机的日志，会导致容灾指标RPO值持续增长，直到主备数据库实例中断联系，RPO值为空。RPO值查询参见查询主备数据库实例容灾状态。

#### 主数据库实例容灾信息清除<a name="ZH-CN_TOPIC_0000001262792037"></a>

向主数据库实例发送容灾信息清除的请求，参考《工具参考》中gs\_sdr工具。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>-   该操作会对主数据库实例进行容灾信息清除。
>-   该操作只能在灾备数据库实例升主后，对主数据库实例进行操作。在灾备数据库实例未升主条件下执行，将会导致容灾关系被破坏。

#### 计划内倒换switchover<a name="ZH-CN_TOPIC_0000001262632081"></a>

向主备数据库实例发送计划内switchover的请求，参考《工具参考》中gs\_sdr工具。

#### 查询主备数据库实例容灾状态<a name="ZH-CN_TOPIC_0000001262912023"></a>

向主备数据库实例发送容灾状态查询的请求，参考《工具参考》中gs\_sdr工具。

#### 容灾状态下主备数据库实例升级<a name="ZH-CN_TOPIC_0000001218152192"></a>

##### 大版本升级<a name="section02171934143419"></a>

1.  主数据库实例先升级，主数据库实例升级完成后，备数据库实例升级。
2.  升级完成后，灾备数据库实例先提交，主数据库实例后提交。

##### 小版本升级<a name="section132691016174618"></a>

1.  主备数据库实例可以同时执行升级命令。
2.  升级完成后，灾备数据库实例先提交，主数据库实例再提交。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>-   备数据库实例提交前，主数据库实例需要升级完成。
>-   备数据库实例先提交，主数据库实例后提交。
>-   备数据库实例已提交情况下，主数据库实例不可回滚。
>-   主备数据库实例升级过程中，不可发生主备数据库实例的切换。

### 故障处理<a name="ZH-CN_TOPIC_0000001217672262"></a>

介绍使用基于流式复制的异地容灾解决方案可能遇到的常见问题，并提供故障处理步骤。

下表列出了不同操作中问题现象、原因、解决方案。

#### 容灾搭建异常<a name="section12239185113"></a>

**表** 容灾搭建错误信息参考

<a name="table1122311841111"></a>

<table><thead align="left"><tr id="row32240187117"><th class="cellrowborder" valign="top" width="34.88%" id="mcps1.2.3.1.1"><p id="p152248182110"><a name="p152248182110"></a><a name="p152248182110"></a><strong id="b15224171891116"><a name="b15224171891116"></a><a name="b15224171891116"></a>故障描述</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.12%" id="mcps1.2.3.1.2"><p id="p62243182118"><a name="p62243182118"></a><a name="p62243182118"></a><strong id="b112248189114"><a name="b112248189114"></a><a name="b112248189114"></a>原因和解决方案</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row18224718191112"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="p9224151831117"><a name="p9224151831117"></a><a name="p9224151831117"></a>容灾搭建中主数据库实例执行容灾搭建返回如下错误，执行超时</p>
<p id="p622421816118"><a name="p622421816118"></a><a name="p622421816118"></a>Result exception error : Failed to do check main standby connection. Because Waiting timeout: XXs。</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="p722401851117"><a name="p722401851117"></a><a name="p722401851117"></a><strong id="b1522461841111"><a name="b1522461841111"></a><a name="b1522461841111"></a>原因：</strong>在主数据库实例数据量较大，或者异地网络带宽较小时，可能会出现灾备数据库实例未完成数据拷贝，主数据库实例就已经超时退出容灾搭建流程的情况。</p>
<p id="p82244182113"><a name="p82244182113"></a><a name="p82244182113"></a><strong id="b422441831118"><a name="b422441831118"></a><a name="b422441831118"></a>解决方案：</strong></p>
<a name="ul82241183118"></a><a name="ul82241183118"></a><ul id="ul82241183118"><li>若灾备数据库实例处于搭建过程中或者搭建已完成，可直接重入主数据库实例容灾搭建流程，主数据库实例会重新进入等待灾备连接状态。若能重新设置超时参数，可根据主数据库实例数据量大小与异地网络带宽，重新估算超时时间后再执行重入。</li><li>若灾备数据库实例搭建过程也失败了，需要先针对灾备数据库实例进行故障处理，再重入数据库实例容灾搭建流程。</li></ul>
</td>
</tr>
    <tr id="row18224718191112"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="p9224151831117"><a name="p9224151831117"></a><a name="p9224151831117"></a>搭建容灾关系过程中，由于主集群内的主dn发生切换导致容灾搭建失败。</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="p722401851117"><a name="p722401851117"></a><a name="p722401851117"></a><strong id="b1522461841111"><a name="b1522461841111"></a><a name="b1522461841111"></a>原因：</strong>主集群的主dn发生切换，灾备集群连接主集群进行数据build时断连导致搭建失败。</p>
<p id="p82244182113"><a name="p82244182113"></a><a name="p82244182113"></a><strong id="b422441831118"><a name="b422441831118"></a><a name="b422441831118"></a>解决方案：</strong></p>
<a name="ul82241183118"></a><a name="ul82241183118"></a><ul id="ul82241183118"><li>确认是否有人为进行主集群内主备切换的操作，如果有则停止该操作，如果没有则忽略。重新下发搭建命令。</li></ul>
</td>
</tr>
</tbody>
</table>



#### 灾备升主failover异常<a name="section11920103834912"></a>

**表**  灾备升主failover错误信息参考

<a name="table3165100125214"></a>

<table><thead align="left"><tr id="row131654015210"><th class="cellrowborder" valign="top" width="34.88%" id="mcps1.2.3.1.1"><p id="p131651103522"><a name="p131651103522"></a><a name="p131651103522"></a><strong id="b316511012527"><a name="b316511012527"></a><a name="b316511012527"></a>故障描述</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.12%" id="mcps1.2.3.1.2"><p id="p1916513085211"><a name="p1916513085211"></a><a name="p1916513085211"></a><strong id="b121659014521"><a name="b121659014521"></a><a name="b121659014521"></a>原因和解决方案</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row1416617018523"><td class="cellrowborder" valign="top" width="34.88%" headers="mcps1.2.3.1.1 "><p id="p01668035216"><a name="p01668035216"></a><a name="p01668035216"></a>灾备数据库实例有故障节点未参与灾备数据库实例升主。</p>
</td>
<td class="cellrowborder" valign="top" width="65.12%" headers="mcps1.2.3.1.2 "><p id="p1216618005217"><a name="p1216618005217"></a><a name="p1216618005217"></a><strong id="b1816619055218"><a name="b1816619055218"></a><a name="b1816619055218"></a>原因：</strong>因服务器宕机，网络中断等原因导致节点脱离灾备数据库实例，没有参与灾备数据库实例升主。</p>
<div class="p" id="p17166100175215"><a name="p17166100175215"></a><a name="p17166100175215"></a><strong id="b21664012527"><a name="b21664012527"></a><a name="b21664012527"></a>解决方案：</strong><a name="ol164751524152310"></a><a name="ol164751524152310"></a><ol id="ol164751524152310"><li>故障节点修复后重新加入数据库实例。</li><li>修改CMS和CMA中关于数据库实例灾备模式的参数，切回主数据库实例配置。<pre class="screen" id="screen158157388235"><a name="screen158157388235"></a><a name="screen158157388235"></a>gs_guc set -Z cmserver -N all -I all -c "backup_open = 0"
gs_guc set -Z cmagent -N all -I all -c "agent_backup_open=0"
gs_guc set -Z cmagent -N all -I all -c "disaster_recovery_type= 0"</pre>
</li><li>接入故障节点，查询CMS和CMA的进程ID，使用kill -9命令杀掉进程，然后进程会被om_monitor重启，完成CMS和CMA参数修改的生效。</li><li>手动修复改节点后使用cm_ctl start-n NODEID -D DATADIR。</li></ol>
</div>
</td>
</tr>
</tbody>
</table>


#### 计划内倒换switchover异常<a name="section1282142716550"></a>

**表** 计划内switchover错误信息参考

<a name="table19231757135517"></a>

<table><thead align="left"><tr id="row192305745520"><th class="cellrowborder" valign="top" width="34.79%" id="mcps1.2.3.1.1"><p id="p6923185711556"><a name="p6923185711556"></a><a name="p6923185711556"></a><strong id="b14923557205516"><a name="b14923557205516"></a><a name="b14923557205516"></a>故障描述</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.21000000000001%" id="mcps1.2.3.1.2"><p id="p3923115795513"><a name="p3923115795513"></a><a name="p3923115795513"></a><strong id="b7923165725516"><a name="b7923165725516"></a><a name="b7923165725516"></a>原因和解决方案</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row2923357105515"><td class="cellrowborder" valign="top" width="34.79%" headers="mcps1.2.3.1.1 "><p id="p792325713550"><a name="p792325713550"></a><a name="p792325713550"></a>计划内switchover中主数据库实例执行命令返回如下错误，提示主数据库实例产生一致性点失败</p>
<p id="p6923175745511"><a name="p6923175745511"></a><a name="p6923175745511"></a>Result exception error : Failed to generate switchover barrier before switchover</p>
</td>
<td class="cellrowborder" valign="top" width="65.21000000000001%" headers="mcps1.2.3.1.2 "><p id="p0923105725512"><a name="p0923105725512"></a><a name="p0923105725512"></a><strong id="b6923115712551"><a name="b6923115712551"></a><a name="b6923115712551"></a>原因：</strong>在主数据库实例接收到计划内switchover命令，主数据库实例降为灾备数据库实例前会先产生一致性点switchover barrier，这是执行switchover的前提，用于保证主备数据库实例所有DN分片的日志停止在一致性点。由于主数据库实例内网络抖动等原因导致主数据库实例内产生switchover barrier失败将放弃本次计划内switchover。</p>
<p id="p71271175581"><a name="p71271175581"></a><a name="p71271175581"></a><strong id="b131274765818"><a name="b131274765818"></a><a name="b131274765818"></a>解决方案：</strong></p>
<a name="ul165953251100"></a><a name="ul165953251100"></a><ul id="ul165953251100"><li>等待灾备数据库实例执行switchover灾备升主命令超时退出后，计划内倒换switchover可在主数据库实例和灾备数据库实例重入执行。</li><li>若多次执行switchover均出现日志截断失败，需进一步分析流式容灾相关日志文件。</li></ul>
</td>
</tr>
<tr id="row09241574559"><td class="cellrowborder" valign="top" width="34.79%" headers="mcps1.2.3.1.1 "><p id="p1892435714553"><a name="p1892435714553"></a><a name="p1892435714553"></a>Result exception error : Failed to do check switchover_barrier on all main standby dn and cn. Because check timeout: XXs</p>
</td>
<td class="cellrowborder" valign="top" width="65.21000000000001%" headers="mcps1.2.3.1.2 "><p id="p99249578555"><a name="p99249578555"></a><a name="p99249578555"></a><strong id="b41411021113310"><a name="b41411021113310"></a><a name="b41411021113310"></a>原因：</strong>在灾备数据库实例接收到计划内switchover命令，灾备数据库实例升为主数据库实例前会先在首备DN上查询是否收到一致性点switchover barrier，这是执行swichover的前提，用于保证主备数据库实例DN的日志停止在一致性点。由于异地网络异常等原因，灾备数据库实例在超时时间内无法获得switchover barrier将放弃执行本次计划内switchover。</p>
<p id="p17275132623311"><a name="p17275132623311"></a><a name="p17275132623311"></a><strong id="b17169142717338"><a name="b17169142717338"></a><a name="b17169142717338"></a>解决方案：</strong></p>
<a name="ul103067349390"></a><a name="ul103067349390"></a><ul id="ul103067349390"><li>等待主数据库实例执行switchover主降备命令超时退出后，计划内倒换switchover可在主数据库实例和灾备数据库实例重入执行。</li><li>若多次执行switchover灾备数据库实例均出现switchover barrier获取失败，需进一步分析流式容灾相关日志文件。</li></ul>
</td>
</tr>
</tbody>
</table>

#### 灾备集群数据库实例故障

**表** 灾备集群数据库实例错误信息参考故障描述

<table><thead align="left"><tr id="row192305745520"><th class="cellrowborder" valign="top" width="34.79%" id="mcps1.2.3.1.1"><p id="p6923185711556"><a name="p6923185711556"></a><a name="p6923185711556"></a><strong id="b14923557205516"><a name="b14923557205516"></a><a name="b14923557205516"></a>故障描述</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.21000000000001%" id="mcps1.2.3.1.2"><p id="p3923115795513"><a name="p3923115795513"></a><a name="p3923115795513"></a><strong id="b7923165725516"><a name="b7923165725516"></a><a name="b7923165725516"></a>原因和解决方案</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row2923357105515"><td class="cellrowborder" valign="top" width="34.79%" headers="mcps1.2.3.1.1 "><p id="p792325713550"><a name="p792325713550"></a><a name="p792325713550"></a>灾备集群节点CM_AGENT故障。该节点上DN实例状态显示为Unknown；部分首备显示Main Standby Need repair(Connecting)。</p>
</td>
<td class="cellrowborder" valign="top" width="65.21000000000001%" headers="mcps1.2.3.1.2 "><p id="p0923105725512"><a name="p0923105725512"></a><a name="p0923105725512"></a><strong id="b6923115712551"><a name="b6923115712551"></a><a name="b6923115712551"></a>原因：</strong>节点CM_AGENT发生故障
    </p>
<a name="ul165953251100"></a><a name="ul165953251100"></a><ul id="ul165953251100"><li>该节点上DN状态无法上报CM_SERVER，DN实例显示为Unknown。</li><li>若该节点上存在首备实例(Main Standby)，则会触发首备切换。由于原首备实例并无异常，并与主数据库实例主DN存在正常流复制关系，而主数据库实例该分片主DN只允许一个首备的连接，导致新首备无法连接到主集群分片主DN，实例状态显示为Main Standby Need repair(Connecting)。</li></ul>
</p>
<p id="p71271175581"><a name="p71271175581"></a><a name="p71271175581"></a><strong id="b131274765818"><a name="b131274765818"></a><a name="b131274765818"></a>解决方案：</strong></p>
<a name="ul165953251100"></a><a name="ul165953251100"></a><ul id="ul165953251100"><li>等观察灾备集群的CM_AGENT告警信息“ALM_AI_AbnormalCMSProcess”，并尝试修复发生故障的CM_AGENT。故障排除后新首备的连接可恢复。</li><li>若如果故障的CM_AGENT短时间内无法修复，执行gs_ctl stop -D DATADIR命令或者kill命令手动停止该节点上的DN进程，可恢复。</li></ul>
</td>
</tr>