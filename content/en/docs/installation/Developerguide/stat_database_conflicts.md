# STAT\_DATABASE\_CONFLICTS<a name="EN-US_TOPIC_0245374701"></a>

**STAT\_DATABASE\_CONFLICTS**  displays statistics about database conflicts on the current node.

**Table  1**  STAT\_DATABASE\_CONFLICTS columns

<a name="en-us_topic_0237122597_table4154934155516"></a>
<table><thead align="left"><tr id="en-us_topic_0237122597_row18237123435511"><th class="cellrowborder" valign="top" width="20.03%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122597_p18237113415552"><a name="en-us_topic_0237122597_p18237113415552"></a><a name="en-us_topic_0237122597_p18237113415552"></a><strong id="b2026617365465"><a name="b2026617365465"></a><a name="b2026617365465"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.24%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122597_p1923733455515"><a name="en-us_topic_0237122597_p1923733455515"></a><a name="en-us_topic_0237122597_p1923733455515"></a><strong id="b189115368469"><a name="b189115368469"></a><a name="b189115368469"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.73%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122597_p1238834185513"><a name="en-us_topic_0237122597_p1238834185513"></a><a name="en-us_topic_0237122597_p1238834185513"></a><strong id="b19524113710468"><a name="b19524113710468"></a><a name="b19524113710468"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122597_row142381834195510"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122597_p1323919344558"><a name="en-us_topic_0237122597_p1323919344558"></a><a name="en-us_topic_0237122597_p1323919344558"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122597_p82393348553"><a name="en-us_topic_0237122597_p82393348553"></a><a name="en-us_topic_0237122597_p82393348553"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122597_p1723983495510"><a name="en-us_topic_0237122597_p1723983495510"></a><a name="en-us_topic_0237122597_p1723983495510"></a>Database ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122597_row1423933435511"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122597_p15239143425510"><a name="en-us_topic_0237122597_p15239143425510"></a><a name="en-us_topic_0237122597_p15239143425510"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122597_p202392340551"><a name="en-us_topic_0237122597_p202392340551"></a><a name="en-us_topic_0237122597_p202392340551"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122597_p62401134115515"><a name="en-us_topic_0237122597_p62401134115515"></a><a name="en-us_topic_0237122597_p62401134115515"></a>Database name</p>
</td>
</tr>
<tr id="en-us_topic_0237122597_row924023485518"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122597_p824023445519"><a name="en-us_topic_0237122597_p824023445519"></a><a name="en-us_topic_0237122597_p824023445519"></a>confl_tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122597_p1024019341556"><a name="en-us_topic_0237122597_p1024019341556"></a><a name="en-us_topic_0237122597_p1024019341556"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122597_p122401134105511"><a name="en-us_topic_0237122597_p122401134105511"></a><a name="en-us_topic_0237122597_p122401134105511"></a>Number of conflicting tablespaces</p>
</td>
</tr>
<tr id="en-us_topic_0237122597_row162408344556"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122597_p22411134165513"><a name="en-us_topic_0237122597_p22411134165513"></a><a name="en-us_topic_0237122597_p22411134165513"></a>confl_lock</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122597_p1424123445510"><a name="en-us_topic_0237122597_p1424123445510"></a><a name="en-us_topic_0237122597_p1424123445510"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122597_p17241134185520"><a name="en-us_topic_0237122597_p17241134185520"></a><a name="en-us_topic_0237122597_p17241134185520"></a>Number of conflicting locks</p>
</td>
</tr>
<tr id="en-us_topic_0237122597_row1624153465520"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122597_p3241123495516"><a name="en-us_topic_0237122597_p3241123495516"></a><a name="en-us_topic_0237122597_p3241123495516"></a>confl_snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122597_p42411934125517"><a name="en-us_topic_0237122597_p42411934125517"></a><a name="en-us_topic_0237122597_p42411934125517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122597_p524120348554"><a name="en-us_topic_0237122597_p524120348554"></a><a name="en-us_topic_0237122597_p524120348554"></a>Number of conflicting snapshots</p>
</td>
</tr>
<tr id="en-us_topic_0237122597_row6242153419557"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122597_p172429347554"><a name="en-us_topic_0237122597_p172429347554"></a><a name="en-us_topic_0237122597_p172429347554"></a>confl_bufferpin</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122597_p924293412556"><a name="en-us_topic_0237122597_p924293412556"></a><a name="en-us_topic_0237122597_p924293412556"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122597_p15242183485518"><a name="en-us_topic_0237122597_p15242183485518"></a><a name="en-us_topic_0237122597_p15242183485518"></a>Number of conflicting buffers</p>
</td>
</tr>
<tr id="en-us_topic_0237122597_row1524211349559"><td class="cellrowborder" valign="top" width="20.03%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122597_p52421234175517"><a name="en-us_topic_0237122597_p52421234175517"></a><a name="en-us_topic_0237122597_p52421234175517"></a>confl_deadlock</p>
</td>
<td class="cellrowborder" valign="top" width="16.24%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122597_p9242634135519"><a name="en-us_topic_0237122597_p9242634135519"></a><a name="en-us_topic_0237122597_p9242634135519"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="63.73%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122597_p924243465516"><a name="en-us_topic_0237122597_p924243465516"></a><a name="en-us_topic_0237122597_p924243465516"></a>Number of conflicting deadlocks</p>
</td>
</tr>
</tbody>
</table>

