# GLOBAL\_TRANSACTIONS\_PREPARED\_XACTS

显示各节点当前准备好进行两阶段提交的事务的信息。

**表 1**  GLOBAL\_TRANSACTIONS\_PREPARED\_XACTS字段

<a name="zh-cn_topic_0237122652_table14218153075419"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122652_row17246173016546"><th class="cellrowborder" valign="top" width="20.150000000000002%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122652_p824613055410"><a name="zh-cn_topic_0237122652_p824613055410"></a><a name="zh-cn_topic_0237122652_p824613055410"></a><strong id="zh-cn_topic_0237122652_b1246143013542"><a name="zh-cn_topic_0237122652_b1246143013542"></a><a name="zh-cn_topic_0237122652_b1246143013542"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="28.33%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122652_p102461530155412"><a name="zh-cn_topic_0237122652_p102461530155412"></a><a name="zh-cn_topic_0237122652_p102461530155412"></a><strong id="zh-cn_topic_0237122652_b424618300549"><a name="zh-cn_topic_0237122652_b424618300549"></a><a name="zh-cn_topic_0237122652_b424618300549"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.519999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122652_p11246530195410"><a name="zh-cn_topic_0237122652_p11246530195410"></a><a name="zh-cn_topic_0237122652_p11246530195410"></a><strong id="zh-cn_topic_0237122652_b15246153020548"><a name="zh-cn_topic_0237122652_b15246153020548"></a><a name="zh-cn_topic_0237122652_b15246153020548"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122652_row4246183017540"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122652_p92462301540"><a name="zh-cn_topic_0237122652_p92462301540"></a><a name="zh-cn_topic_0237122652_p92462301540"></a>transaction</p>
</td>
<td class="cellrowborder" valign="top" width="28.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122652_p524673095412"><a name="zh-cn_topic_0237122652_p524673095412"></a><a name="zh-cn_topic_0237122652_p524673095412"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122652_p1824615301542"><a name="zh-cn_topic_0237122652_p1824615301542"></a><a name="zh-cn_topic_0237122652_p1824615301542"></a>预备事务的数字事务标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122652_row102461230205415"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122652_p3246430175418"><a name="zh-cn_topic_0237122652_p3246430175418"></a><a name="zh-cn_topic_0237122652_p3246430175418"></a>gid</p>
</td>
<td class="cellrowborder" valign="top" width="28.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122652_p17246730195415"><a name="zh-cn_topic_0237122652_p17246730195415"></a><a name="zh-cn_topic_0237122652_p17246730195415"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122652_p142461530105410"><a name="zh-cn_topic_0237122652_p142461530105410"></a><a name="zh-cn_topic_0237122652_p142461530105410"></a>赋予该事务的全局事务标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122652_row18246173015419"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122652_p14246230135418"><a name="zh-cn_topic_0237122652_p14246230135418"></a><a name="zh-cn_topic_0237122652_p14246230135418"></a>prepared</p>
</td>
<td class="cellrowborder" valign="top" width="28.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122652_p1246183012549"><a name="zh-cn_topic_0237122652_p1246183012549"></a><a name="zh-cn_topic_0237122652_p1246183012549"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122652_p5247203035414"><a name="zh-cn_topic_0237122652_p5247203035414"></a><a name="zh-cn_topic_0237122652_p5247203035414"></a>事务准备好提交的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122652_row10247113085413"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122652_p1324783019548"><a name="zh-cn_topic_0237122652_p1324783019548"></a><a name="zh-cn_topic_0237122652_p1324783019548"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="28.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122652_p4247430195412"><a name="zh-cn_topic_0237122652_p4247430195412"></a><a name="zh-cn_topic_0237122652_p4247430195412"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122652_p15247730105417"><a name="zh-cn_topic_0237122652_p15247730105417"></a><a name="zh-cn_topic_0237122652_p15247730105417"></a>执行该事务的用户的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122652_row124733018549"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122652_p162477307548"><a name="zh-cn_topic_0237122652_p162477307548"></a><a name="zh-cn_topic_0237122652_p162477307548"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="28.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122652_p2247113065418"><a name="zh-cn_topic_0237122652_p2247113065418"></a><a name="zh-cn_topic_0237122652_p2247113065418"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122652_p13247830195416"><a name="zh-cn_topic_0237122652_p13247830195416"></a><a name="zh-cn_topic_0237122652_p13247830195416"></a>执行该事务所在的数据库名。</p>
</td>
</tr>
</tbody>
</table>

