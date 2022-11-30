# TRANSACTIONS\_PREPARED\_XACTS<a name="ZH-CN_TOPIC_0245374754"></a>

显示当前准备好进行两阶段提交的事务的信息。

**表 1**  TRANSACTIONS\_PREPARED\_XACTS字段

<a name="zh-cn_topic_0237122650_table157661633165314"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122650_row1979217332535"><th class="cellrowborder" valign="top" width="17.299999999999997%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122650_p11792733105319"><a name="zh-cn_topic_0237122650_p11792733105319"></a><a name="zh-cn_topic_0237122650_p11792733105319"></a><strong id="zh-cn_topic_0237122650_b879219330532"><a name="zh-cn_topic_0237122650_b879219330532"></a><a name="zh-cn_topic_0237122650_b879219330532"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="27.200000000000003%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122650_p15792173385312"><a name="zh-cn_topic_0237122650_p15792173385312"></a><a name="zh-cn_topic_0237122650_p15792173385312"></a><strong id="zh-cn_topic_0237122650_b16792933125318"><a name="zh-cn_topic_0237122650_b16792933125318"></a><a name="zh-cn_topic_0237122650_b16792933125318"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="55.50000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122650_p1779203313536"><a name="zh-cn_topic_0237122650_p1779203313536"></a><a name="zh-cn_topic_0237122650_p1779203313536"></a><strong id="zh-cn_topic_0237122650_b579253345315"><a name="zh-cn_topic_0237122650_b579253345315"></a><a name="zh-cn_topic_0237122650_b579253345315"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122650_row77929335538"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122650_p6792633135317"><a name="zh-cn_topic_0237122650_p6792633135317"></a><a name="zh-cn_topic_0237122650_p6792633135317"></a>transaction</p>
</td>
<td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122650_p1979333315533"><a name="zh-cn_topic_0237122650_p1979333315533"></a><a name="zh-cn_topic_0237122650_p1979333315533"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="55.50000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122650_p197931033175312"><a name="zh-cn_topic_0237122650_p197931033175312"></a><a name="zh-cn_topic_0237122650_p197931033175312"></a>预备事务的数字事务标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122650_row87939335535"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122650_p1979313317536"><a name="zh-cn_topic_0237122650_p1979313317536"></a><a name="zh-cn_topic_0237122650_p1979313317536"></a>gid</p>
</td>
<td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122650_p197931233155313"><a name="zh-cn_topic_0237122650_p197931233155313"></a><a name="zh-cn_topic_0237122650_p197931233155313"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.50000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122650_p1879383385318"><a name="zh-cn_topic_0237122650_p1879383385318"></a><a name="zh-cn_topic_0237122650_p1879383385318"></a>赋予该事务的全局事务标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122650_row14793433165314"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122650_p1379383310535"><a name="zh-cn_topic_0237122650_p1379383310535"></a><a name="zh-cn_topic_0237122650_p1379383310535"></a>prepared</p>
</td>
<td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122650_p2793123375310"><a name="zh-cn_topic_0237122650_p2793123375310"></a><a name="zh-cn_topic_0237122650_p2793123375310"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="55.50000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122650_p179343315533"><a name="zh-cn_topic_0237122650_p179343315533"></a><a name="zh-cn_topic_0237122650_p179343315533"></a>事务准备好提交的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122650_row479311333534"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122650_p77931338531"><a name="zh-cn_topic_0237122650_p77931338531"></a><a name="zh-cn_topic_0237122650_p77931338531"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122650_p87936337530"><a name="zh-cn_topic_0237122650_p87936337530"></a><a name="zh-cn_topic_0237122650_p87936337530"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.50000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122650_p187939331532"><a name="zh-cn_topic_0237122650_p187939331532"></a><a name="zh-cn_topic_0237122650_p187939331532"></a>执行该事务的用户的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122650_row10793103325320"><td class="cellrowborder" valign="top" width="17.299999999999997%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122650_p579310332535"><a name="zh-cn_topic_0237122650_p579310332535"></a><a name="zh-cn_topic_0237122650_p579310332535"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="27.200000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122650_p679363320534"><a name="zh-cn_topic_0237122650_p679363320534"></a><a name="zh-cn_topic_0237122650_p679363320534"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.50000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122650_p107931433145316"><a name="zh-cn_topic_0237122650_p107931433145316"></a><a name="zh-cn_topic_0237122650_p107931433145316"></a>执行该事务所在的数据库名。</p>
</td>
</tr>
</tbody>
</table>
