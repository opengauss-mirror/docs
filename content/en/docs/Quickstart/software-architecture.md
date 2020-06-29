# Software Architecture<a name="EN-US_TOPIC_0241702872"></a>

openGauss includes the openGauss servers, client driver, and OM modules. This chapter describes the relationship between these modules.

[Figure 1](#f078d2fc7ab574c8aa05c4a988e0df1b3)  shows the openGauss software architecture. In the documentation of openGauss, each openGauss server is called an instance.

**Figure  1**  Software architecture<a name="f078d2fc7ab574c8aa05c4a988e0df1b3"></a>  


![](figures/opengauss逻辑架构图1.png)

For details about the meaning of each module in the figure, see  [Table 1](#t17e13a118cb14f5facbde93d2db56660).

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

