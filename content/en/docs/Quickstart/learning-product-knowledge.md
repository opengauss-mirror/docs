# Learning Product Knowledge<a name="EN-US_TOPIC_0241702870"></a>

openGauss is a relational database. It uses the client/server, single-process multi-thread architecture, and supports standalone and one-primary and multiple-standby deployment modes. In the primary/standby deployment mode, the standby node can be read, and HA and read expansion are supported.

## Product Features<a name="section292105889"></a>

Compared with other open-source databases, openGauss has the following features: composite application scenarios, high performance, and high availability.

-   Composite application scenarios
    -   Row-store, supporting frequent service data updates
    -   Column-store, supporting service data appending and analysis
    -   Memory table, supporting high throughput, low latency, and ultra-high performance

-   High performance
    -   The multi-core data structure, incremental checkpoints, and large memory buffer management are used to implement 1 million transactions per minute \(tpmC\).
    -   The server connection pool supports tens of thousands of concurrent connections.

-   High availability \(HA\)
    -   Replication between the primary and standby nodes can be deployed in synchronous or asynchronous mode.
    -   Data page CRC check is supported. Damaged data pages are automatically restored by the standby node.
    -   The standby node recovers in parallel and can be promoted to primary to provide services within 10 seconds.


## Software Architecture<a name="section14990164016812"></a>

openGauss includes the openGauss servers, client driver, and OM modules. This chapter describes the relationship between these modules.

[en-us\_topic\_0040044488.md\#f078d2fc7ab574c8aa05c4a988e0df1b3](en-us_topic_0040044488.md#f078d2fc7ab574c8aa05c4a988e0df1b3)  shows the openGauss software architecture. In the documentation of openGauss, each openGauss server is called an instance.

**Figure  1**  Software architecture<a name="f078d2fc7ab574c8aa05c4a988e0df1b3"></a>  


![](figures/opengauss逻辑架构图1.png)

For details about the meaning of each module in the figure, see  [en-us\_topic\_0040044488.md\#t17e13a118cb14f5facbde93d2db56660](en-us_topic_0040044488.md#t17e13a118cb14f5facbde93d2db56660).

**Table  1**  Module description

<a name="t17e13a118cb14f5facbde93d2db56660"></a>
<table><thead align="left"><tr id="r23e99de572e449a48226ecb3a7fdce97"><th class="cellrowborder" valign="top" width="14.530000000000001%" id="mcps1.2.4.1.1"><p id="add4f3914898b4c079553e3408c8b5d0e"><a name="add4f3914898b4c079553e3408c8b5d0e"></a><a name="add4f3914898b4c079553e3408c8b5d0e"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="32.09%" id="mcps1.2.4.1.2"><p id="a273e4853355e4ac5acbb41e5343381e5"><a name="a273e4853355e4ac5acbb41e5343381e5"></a><a name="a273e4853355e4ac5acbb41e5343381e5"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="53.38%" id="mcps1.2.4.1.3"><p id="a92b9271afb2c46ceaa69ab2e4931c646"><a name="a92b9271afb2c46ceaa69ab2e4931c646"></a><a name="a92b9271afb2c46ceaa69ab2e4931c646"></a>Remarks</p>
</th>
</tr>
</thead>
<tbody><tr id="rfd4ccf9040a844d1a49cc65c144bb10c"><td class="cellrowborder" valign="top" width="14.530000000000001%" headers="mcps1.2.4.1.1 "><p id="a064db1f7c1304b5182a5ddd5aef10999"><a name="a064db1f7c1304b5182a5ddd5aef10999"></a><a name="a064db1f7c1304b5182a5ddd5aef10999"></a>OM</p>
</td>
<td class="cellrowborder" valign="top" width="32.09%" headers="mcps1.2.4.1.2 "><p id="a981be26a319a4315a86d608e7ec3ce74"><a name="a981be26a319a4315a86d608e7ec3ce74"></a><a name="a981be26a319a4315a86d608e7ec3ce74"></a>Operation Manager provides management interfaces and tools for openGauss routine O&amp;M and configuration management.</p>
</td>
<td class="cellrowborder" valign="top" width="53.38%" headers="mcps1.2.4.1.3 "><p id="a0eb7a30899f24185a7dec414c4602f1a"><a name="a0eb7a30899f24185a7dec414c4602f1a"></a><a name="a0eb7a30899f24185a7dec414c4602f1a"></a>Different from the server and client driver modules, the OM provides users with tools to manage openGauss instances.</p>
</td>
</tr>
<tr id="r010b48617bed4420ad1ed1f7b5c6039a"><td class="cellrowborder" valign="top" width="14.530000000000001%" headers="mcps1.2.4.1.1 "><p id="a5e39cb7dd58c43168e9adea00a5ef9ce"><a name="a5e39cb7dd58c43168e9adea00a5ef9ce"></a><a name="a5e39cb7dd58c43168e9adea00a5ef9ce"></a>Client driver</p>
</td>
<td class="cellrowborder" valign="top" width="32.09%" headers="mcps1.2.4.1.2 "><p id="ad932a4b0cda242a28115b277996d34d5"><a name="ad932a4b0cda242a28115b277996d34d5"></a><a name="ad932a4b0cda242a28115b277996d34d5"></a>The client driver receives access requests from applications and returns execution results to the applications. It communicates with openGauss instances, delivers SQL statements to openGauss instances, and receives command execution results.</p>
</td>
<td class="cellrowborder" valign="top" width="53.38%" headers="mcps1.2.4.1.3 "><p id="p23234897162914"><a name="p23234897162914"></a><a name="p23234897162914"></a>It receives the access requests from applications, and returns the execution results to the applications. The client driver is responsible for establishing a link to the openGauss instance, transmitting an SQL command of an application to the openGauss instance, and receiving the command execution result of the openGauss instance.</p>
<p id="p1240492914490"><a name="p1240492914490"></a><a name="p1240492914490"></a>The client driver and application run in the same process and are deployed on the same physical node.</p>
</td>
</tr>
<tr id="r76b2e096c5fa4c4f9b26fb06ecb41827"><td class="cellrowborder" valign="top" width="14.530000000000001%" headers="mcps1.2.4.1.1 "><p id="ae4e00dcd40564c05b97ba8dcce29c28d"><a name="ae4e00dcd40564c05b97ba8dcce29c28d"></a><a name="ae4e00dcd40564c05b97ba8dcce29c28d"></a>Primary/Standby openGauss server</p>
</td>
<td class="cellrowborder" valign="top" width="32.09%" headers="mcps1.2.4.1.2 "><p id="a42da52cdf2c44452a63c9be1ab956b29"><a name="a42da52cdf2c44452a63c9be1ab956b29"></a><a name="a42da52cdf2c44452a63c9be1ab956b29"></a>The primary/standby openGauss server stores service data (stored by row-store, column-store, or memory table), executes data query tasks, and returns execution results to the client driver.</p>
</td>
<td class="cellrowborder" valign="top" width="53.38%" headers="mcps1.2.4.1.3 "><p id="p1933624014508"><a name="p1933624014508"></a><a name="p1933624014508"></a>It stores service data, executes data queries, and returns executed results to the client driver.</p>
<p id="p56577630162914"><a name="p56577630162914"></a><a name="p56577630162914"></a>openGauss instances are classified into primary and standby instances. One primary and multiple standbys are supported. You are advised to deploy the primary and standby openGauss servers on different physical nodes.</p>
</td>
</tr>
<tr id="r239ecf59d9624912a07ca573b95d71e1"><td class="cellrowborder" valign="top" width="14.530000000000001%" headers="mcps1.2.4.1.1 "><p id="a160443f3a6df4967838ac30193cb787f"><a name="a160443f3a6df4967838ac30193cb787f"></a><a name="a160443f3a6df4967838ac30193cb787f"></a>Storage</p>
</td>
<td class="cellrowborder" valign="top" width="32.09%" headers="mcps1.2.4.1.2 "><p id="a4cae42d00e6e4e17aed7b4d7f2a43c27"><a name="a4cae42d00e6e4e17aed7b4d7f2a43c27"></a><a name="a4cae42d00e6e4e17aed7b4d7f2a43c27"></a>It functions as the server's local storage node to store data permanently.</p>
</td>
<td class="cellrowborder" valign="top" width="53.38%" headers="mcps1.2.4.1.3 "><p id="ab9552856b54f46a4b96df77dd5853eee"><a name="ab9552856b54f46a4b96df77dd5853eee"></a><a name="ab9552856b54f46a4b96df77dd5853eee"></a>-</p>
</td>
</tr>
</tbody>
</table>

## Typical Networking<a name="section84507541599"></a>

To ensure the security of application data, you are advised to divide an openGauss typical network into two independent networks: front-end service network and data management and storage network.

**Figure  2**  Typical networking<a name="en-us_topic_0085434654_en-us_topic_0059782024_fa885dc600f6a4c38860244454d95c7e4"></a>  
![](figures/typical-networking.png "typical-networking")

[en-us\_topic\_0040044502.md\#en-us\_topic\_0085434654\_en-us\_topic\_0059782024\_tb80dc4a120b64f6093f63535ce9998ef](en-us_topic_0040044502.md#en-us_topic_0085434654_en-us_topic_0059782024_tb80dc4a120b64f6093f63535ce9998ef)  describes the network division.

**Table  2**  Network division

<a name="en-us_topic_0085434654_en-us_topic_0059782024_tb80dc4a120b64f6093f63535ce9998ef"></a>
<table><thead align="left"><tr id="en-us_topic_0085434654_en-us_topic_0059782024_r157fdb513ba046169c041938f8315c67"><th class="cellrowborder" valign="top" width="21.62%" id="mcps1.2.3.1.1"><p id="en-us_topic_0085434654_en-us_topic_0059782024_a0eca89497f4e4f1a9a06630ed6d6342d"><a name="en-us_topic_0085434654_en-us_topic_0059782024_a0eca89497f4e4f1a9a06630ed6d6342d"></a><a name="en-us_topic_0085434654_en-us_topic_0059782024_a0eca89497f4e4f1a9a06630ed6d6342d"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="78.38000000000001%" id="mcps1.2.3.1.2"><p id="en-us_topic_0085434654_en-us_topic_0059782024_a5f2a39fe351c4e9da8c5f8726e62f0b9"><a name="en-us_topic_0085434654_en-us_topic_0059782024_a5f2a39fe351c4e9da8c5f8726e62f0b9"></a><a name="en-us_topic_0085434654_en-us_topic_0059782024_a5f2a39fe351c4e9da8c5f8726e62f0b9"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0085434654_en-us_topic_0059782024_rc849bac0400340e4b0844f155986cf8e"><td class="cellrowborder" valign="top" width="21.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0085434654_en-us_topic_0059782024_a47067c6256d64ec9a78c551a2e408a32"><a name="en-us_topic_0085434654_en-us_topic_0059782024_a47067c6256d64ec9a78c551a2e408a32"></a><a name="en-us_topic_0085434654_en-us_topic_0059782024_a47067c6256d64ec9a78c551a2e408a32"></a>Database management and storage network</p>
</td>
<td class="cellrowborder" valign="top" width="78.38000000000001%" headers="mcps1.2.3.1.2 "><p id="p13825610164710"><a name="p13825610164710"></a><a name="p13825610164710"></a>The database administrator uses this network to invoke OM scripts to manage and maintain openGauss instances. It is also used for <span id="text6273337182014"><a name="text6273337182014"></a><a name="text6273337182014"></a>openGauss</span> primary/standby communication networking. The database management and storage network are also used for applications to execute system monitoring.</p>
</td>
</tr>
<tr id="en-us_topic_0085434654_en-us_topic_0059782024_r8ce2e458c24243cd8e5035626c37982d"><td class="cellrowborder" valign="top" width="21.62%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0085434654_en-us_topic_0059782024_en-us_topic_0009209708_p760730711167"><a name="en-us_topic_0085434654_en-us_topic_0059782024_en-us_topic_0009209708_p760730711167"></a><a name="en-us_topic_0085434654_en-us_topic_0059782024_en-us_topic_0009209708_p760730711167"></a>Front-end service network</p>
</td>
<td class="cellrowborder" valign="top" width="78.38000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0085434654_en-us_topic_0059782024_a25190193e921462d9eae93aa756ef832"><a name="en-us_topic_0085434654_en-us_topic_0059782024_a25190193e921462d9eae93aa756ef832"></a><a name="en-us_topic_0085434654_en-us_topic_0059782024_a25190193e921462d9eae93aa756ef832"></a>External clients access the <span id="text17105438192010"><a name="text17105438192010"></a><a name="text17105438192010"></a>openGauss</span> database through this network.</p>
</td>
</tr>
</tbody>
</table>

The typical networking has the following advantages:

-   The service network is isolated from the database management and storage network, effectively protecting the security of back-end storage data.
-   The isolation between the service network and database management and storage network prevents attackers from managing database servers through the Internet, improving system security.

Network exclusiveness and 1:1 bandwidth convergence ratio are the basic requirements for openGauss database network performance. Therefore, in the production system, the back-end storage network shown in  [en-us\_topic\_0040044502.md\#en-us\_topic\_0085434654\_en-us\_topic\_0059782024\_fa885dc600f6a4c38860244454d95c7e4](en-us_topic_0040044502.md#en-us_topic_0085434654_en-us_topic_0059782024_fa885dc600f6a4c38860244454d95c7e4)  must meet the requirements of exclusiveness and 1:1 bandwidth convergence ratio. For example, in  [en-us\_topic\_0189276253.md\#en-us\_topic\_0085434654\_en-us\_topic\_0059782024\_fig397545395542](en-us_topic_0189276253.md#en-us_topic_0085434654_en-us_topic_0059782024_fig397545395542), the Fat-tree networking is used. To achieve a convergence ratio of 1:1, the bandwidth doubles each time the switching network layer is increased by one layer. In the figure, each bold line indicates the 80GE bandwidth, that is, the sum of the bandwidth upper limits of eight physical machines. At the access layer, each switch provides 160GE downlink bandwidth and 160GE uplink bandwidth. The convergence ratio is 1:1. The access bandwidth of each switch at the aggregation layer is 320GE.

For the test system, the preceding requirements can be lowered.

**Figure  3**  Database management and storage network<a name="en-us_topic_0085434654_en-us_topic_0059782024_fig397545395542"></a>  


![](figures/opengauss网络组网示例.png)

