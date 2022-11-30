# STAT\_DATABASE\_CONFLICTS<a name="ZH-CN_TOPIC_0245374701"></a>

显示当前节点数据库冲突状态的统计信息。

**表 1**  STAT\_DATABASE\_CONFLICTS字段

<a name="zh-cn_topic_0237122597_table4154934155516"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122597_row18237123435511"><th class="cellrowborder" valign="top" width="20.03%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122597_p18237113415552"><a name="zh-cn_topic_0237122597_p18237113415552"></a><a name="zh-cn_topic_0237122597_p18237113415552"></a><strong id="zh-cn_topic_0237122597_b12237134155515"><a name="zh-cn_topic_0237122597_b12237134155515"></a><a name="zh-cn_topic_0237122597_b12237134155515"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.24%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122597_p1923733455515"><a name="zh-cn_topic_0237122597_p1923733455515"></a><a name="zh-cn_topic_0237122597_p1923733455515"></a><strong id="zh-cn_topic_0237122597_b72381334165515"><a name="zh-cn_topic_0237122597_b72381334165515"></a><a name="zh-cn_topic_0237122597_b72381334165515"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.73%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122597_p1238834185513"><a name="zh-cn_topic_0237122597_p1238834185513"></a><a name="zh-cn_topic_0237122597_p1238834185513"></a><strong id="zh-cn_topic_0237122597_b1223819347557"><a name="zh-cn_topic_0237122597_b1223819347557"></a><a name="zh-cn_topic_0237122597_b1223819347557"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122597_row142381834195510"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122597_p1323919344558"><a name="zh-cn_topic_0237122597_p1323919344558"></a><a name="zh-cn_topic_0237122597_p1323919344558"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122597_p82393348553"><a name="zh-cn_topic_0237122597_p82393348553"></a><a name="zh-cn_topic_0237122597_p82393348553"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122597_p1723983495510"><a name="zh-cn_topic_0237122597_p1723983495510"></a><a name="zh-cn_topic_0237122597_p1723983495510"></a>数据库标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122597_row1423933435511"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122597_p15239143425510"><a name="zh-cn_topic_0237122597_p15239143425510"></a><a name="zh-cn_topic_0237122597_p15239143425510"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122597_p202392340551"><a name="zh-cn_topic_0237122597_p202392340551"></a><a name="zh-cn_topic_0237122597_p202392340551"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122597_p62401134115515"><a name="zh-cn_topic_0237122597_p62401134115515"></a><a name="zh-cn_topic_0237122597_p62401134115515"></a>数据库名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122597_row924023485518"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122597_p824023445519"><a name="zh-cn_topic_0237122597_p824023445519"></a><a name="zh-cn_topic_0237122597_p824023445519"></a>confl_tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122597_p1024019341556"><a name="zh-cn_topic_0237122597_p1024019341556"></a><a name="zh-cn_topic_0237122597_p1024019341556"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122597_p122401134105511"><a name="zh-cn_topic_0237122597_p122401134105511"></a><a name="zh-cn_topic_0237122597_p122401134105511"></a>冲突的表空间的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122597_row162408344556"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122597_p22411134165513"><a name="zh-cn_topic_0237122597_p22411134165513"></a><a name="zh-cn_topic_0237122597_p22411134165513"></a>confl_lock</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122597_p1424123445510"><a name="zh-cn_topic_0237122597_p1424123445510"></a><a name="zh-cn_topic_0237122597_p1424123445510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122597_p17241134185520"><a name="zh-cn_topic_0237122597_p17241134185520"></a><a name="zh-cn_topic_0237122597_p17241134185520"></a>冲突的锁数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122597_row1624153465520"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122597_p3241123495516"><a name="zh-cn_topic_0237122597_p3241123495516"></a><a name="zh-cn_topic_0237122597_p3241123495516"></a>confl_snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122597_p42411934125517"><a name="zh-cn_topic_0237122597_p42411934125517"></a><a name="zh-cn_topic_0237122597_p42411934125517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122597_p524120348554"><a name="zh-cn_topic_0237122597_p524120348554"></a><a name="zh-cn_topic_0237122597_p524120348554"></a>冲突的快照数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122597_row6242153419557"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122597_p172429347554"><a name="zh-cn_topic_0237122597_p172429347554"></a><a name="zh-cn_topic_0237122597_p172429347554"></a>confl_bufferpin</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122597_p924293412556"><a name="zh-cn_topic_0237122597_p924293412556"></a><a name="zh-cn_topic_0237122597_p924293412556"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122597_p15242183485518"><a name="zh-cn_topic_0237122597_p15242183485518"></a><a name="zh-cn_topic_0237122597_p15242183485518"></a>冲突的缓冲区数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122597_row1524211349559"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122597_p52421234175517"><a name="zh-cn_topic_0237122597_p52421234175517"></a><a name="zh-cn_topic_0237122597_p52421234175517"></a>confl_deadlock</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122597_p9242634135519"><a name="zh-cn_topic_0237122597_p9242634135519"></a><a name="zh-cn_topic_0237122597_p9242634135519"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122597_p924243465516"><a name="zh-cn_topic_0237122597_p924243465516"></a><a name="zh-cn_topic_0237122597_p924243465516"></a>冲突的死锁数目。</p>
</td>
</tr>
</tbody>
</table>
