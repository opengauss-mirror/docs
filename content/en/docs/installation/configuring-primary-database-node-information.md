# Configuring Primary Database Node Information<a name="EN-US_TOPIC_0249784583"></a>

The information in bold is only an example. You can replace it as required. Each line of information is commented out.

**Configure the following information for the primary database node:**

```
<!--DBnode-->
<PARAM name="dataNum" value="1"/>
<!-- Database node port number -->
<PARAM name="dataPortBase" value="26000"/>
<!-- Data directory on the primary database node and data directories of standby nodes -->
<PARAM name="dataNode1" value="/opt/huawei/install/data/db1,node2,/opt/huawei/install/data/db1"/>
<!-- Number of nodes for which the synchronization mode is set on the database node -->
<PARAM name="dataNode1_syncNum" value="0"/>
```

**Table  1**  Parameter description

<a name="en-us_topic_0241802596_table642932620115"></a>
<table><thead align="left"><tr id="en-us_topic_0241802596_row1543052614113"><th class="cellrowborder" valign="top" width="14.321432143214322%" id="mcps1.2.4.1.1"><p id="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"></a><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p21592892202859"></a>Instance Type</p>
</th>
<th class="cellrowborder" valign="top" width="25.73257325732573%" id="mcps1.2.4.1.2"><p id="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"></a><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4193855202859"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="59.94599459945995%" id="mcps1.2.4.1.3"><p id="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"></a><a name="en-us_topic_0241802596_en-us_topic_0085434641_en-us_topic_0059782050_p4157954202859"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row178502422283"><td class="cellrowborder" rowspan="6" valign="top" width="14.321432143214322%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p20621423101039"></a>DBnode</p>
</td>
<td class="cellrowborder" valign="top" width="25.73257325732573%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p59722591101039"></a>dataNum</p>
</td>
<td class="cellrowborder" valign="top" width="59.94599459945995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p5691720101039"></a>Number of database nodes to be deployed on the current host.</p>
</td>
</tr>
<tr id="en-us_topic_0241802596_row1343016261112"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0241802596_p119281928007"><a name="en-us_topic_0241802596_p119281928007"></a><a name="en-us_topic_0241802596_p119281928007"></a>dataPortBase</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p6187782101039"></a>Basic port number of the database node. The default value is <strong id="b7321183910213"><a name="b7321183910213"></a><a name="b7321183910213"></a>40000</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0241802596_row1643082612118"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0241802596_p69281428009"><a name="en-us_topic_0241802596_p69281428009"></a><a name="en-us_topic_0241802596_p69281428009"></a>dataListenIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p45942115101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p45942115101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p45942115101039"></a>IP address being listened on. This address is used to receive requests for connections from other database nodes. If this parameter is not set, the value is determined based on <strong>backIp1</strong> of the corresponding host.</p>
<p id="en-us_topic_0241802596_p99295281018"><a name="en-us_topic_0241802596_p99295281018"></a><a name="en-us_topic_0241802596_p99295281018"></a>If a virtual IP address is configured, this parameter can be set to a virtual IP address.</p>
</td>
</tr>
<tr id="row66898585445"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434641_en-us_topic_0059782050_p47842238202859"><a name="en-us_topic_0085434641_en-us_topic_0059782050_p47842238202859"></a><a name="en-us_topic_0085434641_en-us_topic_0059782050_p47842238202859"></a>dataHaIp1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434641_en-us_topic_0059782050_p50016089202859"><a name="en-us_topic_0085434641_en-us_topic_0059782050_p50016089202859"></a><a name="en-us_topic_0085434641_en-us_topic_0059782050_p50016089202859"></a>IP address used for communication between the primary and standby database nodes. If this parameter is not set, the value is determined based on <strong>backIp</strong> of the corresponding host.</p>
<p id="en-us_topic_0085434641_en-us_topic_0059782050_p47491622202859"><a name="en-us_topic_0085434641_en-us_topic_0059782050_p47491622202859"></a><a name="en-us_topic_0085434641_en-us_topic_0059782050_p47491622202859"></a>This parameter can be set to the IP addresses of the hosts where the primary and standby database nodes reside.</p>
</td>
</tr>
<tr id="row1440738182918"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p31391807101039"></a>dataNode1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"><a name="en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"></a><a name="en-us_topic_0085434621_en-us_topic_0059782004_p59708452101039"></a>Directory for storing data of the database nodes on the current host. It is a data storage directory, and should be on a data disk.</p>
</td>
</tr>
<tr id="row122571559229"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1725855510222"><a name="p1725855510222"></a><a name="p1725855510222"></a>dataNode1_syncNum</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p18258155510227"><a name="p18258155510227"></a><a name="p18258155510227"></a>Number of nodes in synchronous mode in the current cluster. This parameter is optional. The value ranges from 0 to the number of standby database nodes.</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Database instance data directories

<a name="en-us_topic_0241802596_table15838192510429"></a>
<table><thead align="left"><tr id="en-us_topic_0241802596_row14838152510421"><th class="cellrowborder" valign="top" width="39.910000000000004%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241802596_en-us_topic_0085434665_en-us_topic_0059782055_p20433411202410"><a name="en-us_topic_0241802596_en-us_topic_0085434665_en-us_topic_0059782055_p20433411202410"></a><a name="en-us_topic_0241802596_en-us_topic_0085434665_en-us_topic_0059782055_p20433411202410"></a>Instance</p>
</th>
<th class="cellrowborder" valign="top" width="60.089999999999996%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241802596_en-us_topic_0085434665_en-us_topic_0059782055_p44493607202410"><a name="en-us_topic_0241802596_en-us_topic_0085434665_en-us_topic_0059782055_p44493607202410"></a><a name="en-us_topic_0241802596_en-us_topic_0085434665_en-us_topic_0059782055_p44493607202410"></a>Data Directory</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241802596_row8839162524215"><td class="cellrowborder" valign="top" width="39.910000000000004%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0085434665_en-us_topic_0059782055_p55748877202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p55748877202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p55748877202410"></a>Primary database node</p>
</td>
<td class="cellrowborder" valign="top" width="60.089999999999996%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0085434665_en-us_topic_0059782055_p19365159202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p19365159202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p19365159202410"></a>/opt/huawei/install/data/xxx</p>
<p id="en-us_topic_0085434665_en-us_topic_0059782055_p25074029202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p25074029202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p25074029202410"></a><strong id="b59801945162610"><a name="b59801945162610"></a><a name="b59801945162610"></a>xxx</strong> indicates the name of the current primary database node.</p>
</td>
</tr>
<tr id="en-us_topic_0241802596_row68397259423"><td class="cellrowborder" valign="top" width="39.910000000000004%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0085434665_en-us_topic_0059782055_p25356817202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p25356817202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p25356817202410"></a>Standby database node</p>
</td>
<td class="cellrowborder" valign="top" width="60.089999999999996%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0085434665_en-us_topic_0059782055_p40636326202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p40636326202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p40636326202410"></a>/opt/huawei/install/data/slaveX</p>
<p id="en-us_topic_0085434665_en-us_topic_0059782055_p3208132202410"><a name="en-us_topic_0085434665_en-us_topic_0059782055_p3208132202410"></a><a name="en-us_topic_0085434665_en-us_topic_0059782055_p3208132202410"></a><strong id="b1730145962613"><a name="b1730145962613"></a><a name="b1730145962613"></a>xxx</strong> indicates the name of the current standby database node.</p>
</td>
</tr>
</tbody>
</table>

