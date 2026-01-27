# GLOBAL\_SESSION\_STAT

各节点上以会话线程或AutoVacuum线程为单位，统计会话状态信息。

**表 1**  GLOBAL\_SESSION\_STAT字段

<a name="zh-cn_topic_0237122630_table5356772213"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122630_row7441877211"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122630_p64420715219"><a name="zh-cn_topic_0237122630_p64420715219"></a><a name="zh-cn_topic_0237122630_p64420715219"></a><strong id="zh-cn_topic_0237122630_b1444297132119"><a name="zh-cn_topic_0237122630_b1444297132119"></a><a name="zh-cn_topic_0237122630_b1444297132119"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122630_p1644211782112"><a name="zh-cn_topic_0237122630_p1644211782112"></a><a name="zh-cn_topic_0237122630_p1644211782112"></a><strong id="zh-cn_topic_0237122630_b844219792118"><a name="zh-cn_topic_0237122630_b844219792118"></a><a name="zh-cn_topic_0237122630_b844219792118"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122630_p14422792113"><a name="zh-cn_topic_0237122630_p14422792113"></a><a name="zh-cn_topic_0237122630_p14422792113"></a><strong id="zh-cn_topic_0237122630_b1744217122110"><a name="zh-cn_topic_0237122630_b1744217122110"></a><a name="zh-cn_topic_0237122630_b1744217122110"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122630_row244327202118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122630_p204436711215"><a name="zh-cn_topic_0237122630_p204436711215"></a><a name="zh-cn_topic_0237122630_p204436711215"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122630_p14430712114"><a name="zh-cn_topic_0237122630_p14430712114"></a><a name="zh-cn_topic_0237122630_p14430712114"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122630_p134431078214"><a name="zh-cn_topic_0237122630_p134431078214"></a><a name="zh-cn_topic_0237122630_p134431078214"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122630_row124433719219"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122630_p1244315732111"><a name="zh-cn_topic_0237122630_p1244315732111"></a><a name="zh-cn_topic_0237122630_p1244315732111"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122630_p644418719216"><a name="zh-cn_topic_0237122630_p644418719216"></a><a name="zh-cn_topic_0237122630_p644418719216"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122630_p244412718217"><a name="zh-cn_topic_0237122630_p244412718217"></a><a name="zh-cn_topic_0237122630_p244412718217"></a>线程启动时间+线程标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122630_row8444127172117"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122630_p844414719216"><a name="zh-cn_topic_0237122630_p844414719216"></a><a name="zh-cn_topic_0237122630_p844414719216"></a>statid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122630_p154444732117"><a name="zh-cn_topic_0237122630_p154444732117"></a><a name="zh-cn_topic_0237122630_p154444732117"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122630_p114441670215"><a name="zh-cn_topic_0237122630_p114441670215"></a><a name="zh-cn_topic_0237122630_p114441670215"></a>统计编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122630_row124449714214"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122630_p12444070211"><a name="zh-cn_topic_0237122630_p12444070211"></a><a name="zh-cn_topic_0237122630_p12444070211"></a>statname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122630_p944517713212"><a name="zh-cn_topic_0237122630_p944517713212"></a><a name="zh-cn_topic_0237122630_p944517713212"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122630_p444557202116"><a name="zh-cn_topic_0237122630_p444557202116"></a><a name="zh-cn_topic_0237122630_p444557202116"></a>统计会话名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122630_row1044547172116"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122630_p1244513715212"><a name="zh-cn_topic_0237122630_p1244513715212"></a><a name="zh-cn_topic_0237122630_p1244513715212"></a>statunit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122630_p944512782117"><a name="zh-cn_topic_0237122630_p944512782117"></a><a name="zh-cn_topic_0237122630_p944512782117"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122630_p94451878212"><a name="zh-cn_topic_0237122630_p94451878212"></a><a name="zh-cn_topic_0237122630_p94451878212"></a>统计会话单位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122630_row12445979218"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122630_p15445117112117"><a name="zh-cn_topic_0237122630_p15445117112117"></a><a name="zh-cn_topic_0237122630_p15445117112117"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122630_p1446173213"><a name="zh-cn_topic_0237122630_p1446173213"></a><a name="zh-cn_topic_0237122630_p1446173213"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122630_p444613720212"><a name="zh-cn_topic_0237122630_p444613720212"></a><a name="zh-cn_topic_0237122630_p444613720212"></a>统计会话值。</p>
</td>
</tr>
</tbody>
</table>
