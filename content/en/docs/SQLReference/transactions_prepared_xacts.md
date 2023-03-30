# TRANSACTIONS\_PREPARED\_XACTS<a name="EN-US_TOPIC_0245374754"></a>

**TRANSACTIONS\_PREPARED\_XACTS**  displays information about transactions that are currently prepared for two-phase commit.

**Table  1**  TRANSACTIONS\_PREPARED\_XACTS columns

<a name="en-us_topic_0237122650_table157661633165314"></a>
<table><thead align="left"><tr id="en-us_topic_0237122650_row1979217332535"><th class="cellrowborder" valign="top" width="17.299999999999997%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122650_p11792733105319"><a name="en-us_topic_0237122650_p11792733105319"></a><a name="en-us_topic_0237122650_p11792733105319"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="27.200000000000003%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122650_p15792173385312"><a name="en-us_topic_0237122650_p15792173385312"></a><a name="en-us_topic_0237122650_p15792173385312"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="55.50000000000001%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122650_p1779203313536"><a name="en-us_topic_0237122650_p1779203313536"></a><a name="en-us_topic_0237122650_p1779203313536"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122650_row77929335538"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122650_p6792633135317"><a name="en-us_topic_0237122650_p6792633135317"></a><a name="en-us_topic_0237122650_p6792633135317"></a>transaction</p>
</td>
<td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122650_p1979333315533"><a name="en-us_topic_0237122650_p1979333315533"></a><a name="en-us_topic_0237122650_p1979333315533"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="55.50000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122650_p197931033175312"><a name="en-us_topic_0237122650_p197931033175312"></a><a name="en-us_topic_0237122650_p197931033175312"></a>Numeric transaction identifier of the prepared transaction</p>
</td>
</tr>
<tr id="en-us_topic_0237122650_row87939335535"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122650_p1979313317536"><a name="en-us_topic_0237122650_p1979313317536"></a><a name="en-us_topic_0237122650_p1979313317536"></a>gid</p>
</td>
<td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122650_p197931233155313"><a name="en-us_topic_0237122650_p197931233155313"></a><a name="en-us_topic_0237122650_p197931233155313"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.50000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122650_p1879383385318"><a name="en-us_topic_0237122650_p1879383385318"></a><a name="en-us_topic_0237122650_p1879383385318"></a>Global transaction identifier that was assigned to the transaction</p>
</td>
</tr>
<tr id="en-us_topic_0237122650_row14793433165314"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122650_p1379383310535"><a name="en-us_topic_0237122650_p1379383310535"></a><a name="en-us_topic_0237122650_p1379383310535"></a>prepared</p>
</td>
<td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122650_p2793123375310"><a name="en-us_topic_0237122650_p2793123375310"></a><a name="en-us_topic_0237122650_p2793123375310"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.50000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122650_p179343315533"><a name="en-us_topic_0237122650_p179343315533"></a><a name="en-us_topic_0237122650_p179343315533"></a>Time at which the transaction is prepared for commit</p>
</td>
</tr>
<tr id="en-us_topic_0237122650_row479311333534"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122650_p77931338531"><a name="en-us_topic_0237122650_p77931338531"></a><a name="en-us_topic_0237122650_p77931338531"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122650_p87936337530"><a name="en-us_topic_0237122650_p87936337530"></a><a name="en-us_topic_0237122650_p87936337530"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.50000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122650_p187939331532"><a name="en-us_topic_0237122650_p187939331532"></a><a name="en-us_topic_0237122650_p187939331532"></a>Name of the user that executes the transaction</p>
</td>
</tr>
<tr id="en-us_topic_0237122650_row10793103325320"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122650_p579310332535"><a name="en-us_topic_0237122650_p579310332535"></a><a name="en-us_topic_0237122650_p579310332535"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122650_p679363320534"><a name="en-us_topic_0237122650_p679363320534"></a><a name="en-us_topic_0237122650_p679363320534"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.50000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122650_p107931433145316"><a name="en-us_topic_0237122650_p107931433145316"></a><a name="en-us_topic_0237122650_p107931433145316"></a>Name of the database in which the transaction is executed</p>
</td>
</tr>
</tbody>
</table>

