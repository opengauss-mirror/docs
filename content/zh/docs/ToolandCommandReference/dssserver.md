# dssserver

## 背景信息<a name="zh-cn_topic_0287276000_zh-cn_topic_0237152404_zh-cn_topic_0059777816_section2761723143810"></a>

dssserver是独立进程，直接管理磁阵裸设备，并对外提供类似分布式文件系统的能力。通过共享内存和客户端API动态库，为数据库提供创建文件、删除文件、扩展和收缩文件、读写文件的能力。也是一个可执行的命令，能够通过其启动一个dssserver进程。

## 语法<a name="section1366329102015"></a>

启动dssserver进程

```
dssserver -D $DSS_HOME
```

## 参数说明<a name="zh-cn_topic_0287276000_zh-cn_topic_0237152404_zh-cn_topic_0059777816_s2298a1889844418daec3743b9a4b57fb"></a>

dssserver作为一个独立的进程，在启动之前需要提供配置文件dss\_inst.ini，相关的配置参数整理如下：

-   LSNR\_PATH

    **参数说明：** dssserver进程需要的socket文件路径。

    **取值范围：** 字符串，最大长度为89。

    **默认值：** \/tmp\/

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >+ om安装后的默认值为$DSS\_HOME

-   LOG\_HOME

    **参数说明：** 日志路径。

    **取值范围：** 字符串类型，最大长度为171。

    **默认值：** ""

-   \_LOG\_BACKUP\_FILE\_COUNT

    **参数说明：** 日志文件最多保留的个数。

    **取值范围：** 整型，0\~128。

    **默认值：** 20

-   \_LOG\_MAX\_FILE\_SIZE

    **参数说明：** 单个日志文件最大大小。

    **取值范围：** 整型 , \[1M,4G\]。

    **默认值：** 256M

-   INST\_ID

    **参数说明：** 实例号，每个主备下的dssserver进程各不相同。

    **取值范围：** 整型，0\~63。

    **默认值：** 0

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >+ om安装后的默认值为0~63中的某个值

-   STORAGE\_MODE

    **参数说明：** DSS对应的存储设备类型，磁阵的话配置为RAID或者CLUSTER\_RAID，非磁阵配置成DISK。

    **取值范围：** 字符串。

    **默认值：** DISK

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >+ om安装后的默认值为CLUSTER_RAID

-   \_LOG\_LEVEL

    **参数说明：** 日志级别。

    **取值范围：** 整型，0\~4087。

    **默认值：** 519

-   MAX\_SESSION\_NUMS

    **参数说明：** 最大的会话连接数量。

    **取值范围：** 整型，\[16,16320\]。

    **默认值：** 8192

-   DISK\_LOCK\_INTERVAL

    **参数说明：** 磁盘锁加锁超时时间。

    **取值范围：** 整型，1\~600000, 单位：毫秒。

    **默认值：** 100

-   DLOCK\_RETRY\_COUNT

    **参数说明：** 磁盘加锁重试次数。

    **取值范围：** 整型，1\~500000。

    **默认值：** 50

-   \_AUDIT\_BACKUP\_FILE\_COUNT

    **参数说明：** 审计备份文件个数。

    **取值范围：** 整型，0\~128。

    **默认值：** 10

-   \_AUDIT\_MAX\_FILE\_SIZE

    **参数说明：** 审计备份文件最大大小。

    **取值范围：** 整型，1M\~4G。

    **默认值：** 10M

-   \_LOG\_FILE\_PERMISSIONS

    **参数说明：** 日志文件权限。

    **取值范围：** 整型，600\~777。

    **默认值：** 600

-   \_LOG\_PATH\_PERMISSIONS

    **参数说明：** 日志路径权限。

    **取值范围：** 整型，700\~777。

    **默认值：** 700

-   \_SHM\_KEY

    **参数说明：** 共享内存KEY。

    **取值范围：** 整型，1\~64。

    **默认值：** 1

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >+ om安装后的默认值为1~64中的某个值

-   DSS\_NODES\_LIST

    **参数说明：** dss instance节点之间mes通信url。

    **取值范围：** 字符串。格式为 inst\_Id:ip:port，inst\_Id:ip:port..........。字符串最大长度为4735，节点个数不超过64，通过“:”间隔。inst_Id取值范围为0-63；ip为有效的IPv4，最大长度不超过63；port取值范围1024-65535。

    **默认值：** 0:127.0.0.1:1611

-   INTERCONNECT\_TYPE

    **参数说明：** 通信协议类型。

    **取值范围：** 字符串，TCP/RDMA。

    **默认值：** TCP

-   INTERCONNECT\_CHANNEL\_NUM

    **参数说明：** 内部通信mes链接通道个数。

    **取值范围：** 整型，1\~32。

    **默认值：** 2

-   WORK\_THREAD\_COUNT

    **参数说明：** 内部通信mes工作线程数量。

    **取值范围：** 整型，2\~64。

    **默认值：** 2

-   RECV\_MSG\_POOL\_SIZE

    **参数说明：** 消息接收内存池大小。

    **取值范围：** 整型，1M\~1G。

    **默认值：** 16M

-   MES\_ELAPSED\_SWITCH

    **参数说明：** 内部通信mes统计计数时延开关。

    **取范围：** 布尔型，FALSE/TRUE。TRUE表示当前开启mes通信计数统计时延，FALSE表示不开启。

    **默认值：** FALSE

-   DISK\_LOCK\_FILE\_PATH

    **参数说明**：STORAGE\_MODE为DISK时，所用锁的文件保存路径。

    **取值范围：** 字符串，最大长度为107。

    **默认值：** $DSS\_HOME

-   SSL\_CA

    **参数说明：** CA服务器的根证书。

    **取值范围：** 字符串，最大长度为255。建议设置为CA服务器的根证书的绝对路径，否则可能导致证书加载失败。

    **默认值：** NA，表示没有CA服务器根证书。

-   SSL\_KEY

    **参数说明：** 指定服务器私钥文件，用以对公钥加密的数据进行解密。

    **取值范围：** 字符串，最大长度255。建议设置为私钥文件的绝对路径，否则可能导致私钥加载失败。

    **默认值：** NA，表示没有服务器私钥。

-   SSL\_CRL

    **参数说明：** 证书吊销列表。如果客户端证书在改列表中，则当前客户端证书被视为无效证书。

    **取值范围：** 字符串，最大长度为255。建议设置为吊销证书的据对路径，否则可能导致证书加载失败。

    **默认值：** NA，表示没有吊销列表。

-   SSL\_CERT

    **参数说明：** 指定服务器证书文件路径，证书文件的内容包含服务器端的公钥，公钥会被发送给对端来对数据进行加密。

    **取值范围：** 字符串，最大长度为255。建议设置为设备书的据对路径，否则可能导致证书加载失败。

    **默认值：** NA，表示没有服务器证书。

-   SSL\_CIPHER

    **参数说明：** SSL通讯使用的加密算法。

    **取值范围：** 字符串。

    **默认值：**""

-   SSL\_PWD\_CIPHERTEXT

    **参数说明：** 私钥密码。

    **取值范围：** 字符串，最大长度为1023。

    **默认值：** NA，表示私钥文件没有加密。

-   SSL\_CERT\_NOTIFY\_TIME

    **参数说明：** SSL服务器证书到期前提醒的天数。

    **取值范围：** 整型，7\~180，单位：天。

    **默认值：** 30

-   POOL\_NAMES

    **参数说明：** 存储池配置。

    **取值范围：** 字符串。

    **默认值：**""

-   IMAGE\_NAMES

    **参数说明：** image配置。

    **取值范围：** 字符串。

    **默认值：** 空

-   CEPH\_CONFIG

    **参数说明：** ceph集群配置文件。

    **取值范围：** 字符串。

    **默认值：** "/etc/ceph/ceph.conf"

-   VOLUME\_TYPES

    **参数说明：** 卷类型。

    **取值范围：** 字符串。

    **默认值：**""

-   DSS\_CM\_SO\_NAME

    **参数说明：** cm的二进制文件名。

    **取值范围：** 字符串。

    **默认值：**""

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >+ om安装后的默认值为libclient.so

-   CLUSTER\_RUN\_MODE

    **参数说明：** DORADO双集群启动模式。

    **取值范围：**"cluster_primary" | "cluster_standby"

    **默认值：**"cluster_primary"

-   \_BLACKBOX_\_DETAIL\_ON

    **参数说明：** 黑匣子日志开启时，是否要打印共享内存信息。

    **取值范围：** 布尔型，FALSE/TRUE。TRUE表示当黑匣子日志开启时，打印共享内存信息；FALSE表示当黑匣子开启时，不打印共享内存信息。如果黑匣子功能没有开启，则该参数不生效。

    **默认值：** FALSE

-   WORK\_THREADS

    **参数说明：** 控制单个reactor线程池线程的数量。

    **取值范围：** 整型，16\~128。

    **默认值：** 16

-   IO\_THREADS

    **参数说明：** 控制reactor的数量。

    **取值范围：** 整型，1\~8。

    **默认值：** 2

## 日志<a name="zh-cn_topic_0287276000_zh-cn_topic_0237152404_zh-cn_topic_0059777816_s2298a1889844418daec3743b9a4b57fb"></a>
DSS日志类型如下：
-   RUN日志

打印数据库DSS模式下DSS运行RUN级别信息。如果DSS运行故障，且开启RUN级别日志，请查看dsscmd.rlog和dssinstance.rlog。

日志目录：默认为$DSS_HOME/log/run。
-   DEBUG日志

打印数据库DSS模式下DSS运行DEBUG级别信息。如果DSS运行故障，且开启DEBUG级别日志，请查看dsscmd.dlog和dssinstance.dlog。

日志目录：默认为$DSS_HOME/log/debug。
-   操作日志

打印数据库DSS模式下DSS运行OPER级别信息。如果DSS运行故障，且开启OPER级别日志，请查看dsscmd.olog。

日志目录：默认为$DSS_HOME/log/oper。

-   审计日志

打印数据库DSS模式下DSS运行审计数据或者元数据进行修改或查询的信息。

日志目录：默认为$DSS_HOME/log/audit。
-   黑匣子日志

打印数据库DSS模式下，dssserver进程异常终止时的异常基本信息。黑匣子日志默认开启，如需关闭，需配置参数_LOG_LEVEL=0, 重启dssserver后生效。

日志目录：默认为$DSS_HOME/log/blackbox。

DSS通过_LOG_LEVEL参数控制审计日志外的其他日志的记录情况。如果要记录多种日志类型，请将参数设置为各个日志类型对应的参数取值之和。各日志类型对应的参数取值见表1。

**表 1**  日志类型对应的_LOG_LEVEL取值

<a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_t1ca85b79b4344a59a8aca574c9fdc12f"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_r5daad08487584e29aa6e6ad7f5a3edcd"><th class="cellrowborder" valign="top" width="33.08%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_afd61d293ec6840938510b01e9770512f"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_afd61d293ec6840938510b01e9770512f"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_afd61d293ec6840938510b01e9770512f"></a>日志类型</p>
</th>
<th class="cellrowborder" valign="top" width="66.92%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a7be9ab09335f41e39e0ccb3152427ef7"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a7be9ab09335f41e39e0ccb3152427ef7"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a7be9ab09335f41e39e0ccb3152427ef7"></a>_LOG_LEVEL参数取值（十进制）</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_r047aa31b43af4aeb88a1c80c165a6710"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aab1ebe4a89b1493094bfce58e66fec9d"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aab1ebe4a89b1493094bfce58e66fec9d"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aab1ebe4a89b1493094bfce58e66fec9d"></a>RUN ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a34e4633eff1a4681919b6c11a36482d2"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a34e4633eff1a4681919b6c11a36482d2"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a34e4633eff1a4681919b6c11a36482d2"></a>1</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_r8081f8a1ca494dff85307d299d3ab528"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aca0a2e2466da49caa92f0e21e25bbe37"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aca0a2e2466da49caa92f0e21e25bbe37"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aca0a2e2466da49caa92f0e21e25bbe37"></a>RUN WARNING</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p131616692420"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p131616692420"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p131616692420"></a>2</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_rb092b2f0586241e08c5b35bbc1e6b715"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p624572592420"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p624572592420"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p624572592420"></a>RUN INFORMATION</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a864026c549b54e6b8a8ae525e80e49ee"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a864026c549b54e6b8a8ae525e80e49ee"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a864026c549b54e6b8a8ae525e80e49ee"></a>4</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_r047aa31b43af4aeb88a1c80c165a6710"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aab1ebe4a89b1493094bfce58e66fec9d"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aab1ebe4a89b1493094bfce58e66fec9d"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aab1ebe4a89b1493094bfce58e66fec9d"></a>DEBUG ERROR</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a34e4633eff1a4681919b6c11a36482d2"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a34e4633eff1a4681919b6c11a36482d2"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a34e4633eff1a4681919b6c11a36482d2"></a>16</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_r8081f8a1ca494dff85307d299d3ab528"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aca0a2e2466da49caa92f0e21e25bbe37"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aca0a2e2466da49caa92f0e21e25bbe37"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_aca0a2e2466da49caa92f0e21e25bbe37"></a>DEBUG WARNING</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p131616692420"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p131616692420"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p131616692420"></a>32</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_rb092b2f0586241e08c5b35bbc1e6b715"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p624572592420"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p624572592420"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p624572592420"></a>DEBUG INFORMATION</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a864026c549b54e6b8a8ae525e80e49ee"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a864026c549b54e6b8a8ae525e80e49ee"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a864026c549b54e6b8a8ae525e80e49ee"></a>64</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_r4ec86a23bd3049d3a49a00ee9900f1e8"><td class="cellrowborder" valign="top" width="33.08%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p561868592420"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p561868592420"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_zh-cn_topic_0058966253_p561868592420"></a>OPER LOG</p>
</td>
<td class="cellrowborder" valign="top" width="66.92%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a5aff11a3f4ec49ffb548481d7592f801"><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a5aff11a3f4ec49ffb548481d7592f801"></a><a name="zh-cn_topic_0283137134_zh-cn_topic_0237122032_zh-cn_topic_0059778480_a5aff11a3f4ec49ffb548481d7592f801"></a>512</p>
</td>
</tbody>
</table>