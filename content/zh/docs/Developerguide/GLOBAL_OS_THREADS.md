# GLOBAL\_OS\_THREADS<a name="ZH-CN_TOPIC_0245374659"></a>

提供openGauss中所有正常节点下的线程状态信息。

**表 1**  GLOBAL\_OS\_THREADS字段

<a name="zh-cn_topic_0237122555_table927914033118"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122555_row153626043111"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122555_p7362100103113"><a name="zh-cn_topic_0237122555_p7362100103113"></a><a name="zh-cn_topic_0237122555_p7362100103113"></a><strong id="zh-cn_topic_0237122555_b23626010319"><a name="zh-cn_topic_0237122555_b23626010319"></a><a name="zh-cn_topic_0237122555_b23626010319"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122555_p936280193111"><a name="zh-cn_topic_0237122555_p936280193111"></a><a name="zh-cn_topic_0237122555_p936280193111"></a><strong id="zh-cn_topic_0237122555_b636319053117"><a name="zh-cn_topic_0237122555_b636319053117"></a><a name="zh-cn_topic_0237122555_b636319053117"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122555_p1836318013318"><a name="zh-cn_topic_0237122555_p1836318013318"></a><a name="zh-cn_topic_0237122555_p1836318013318"></a><strong id="zh-cn_topic_0237122555_b193632018316"><a name="zh-cn_topic_0237122555_b193632018316"></a><a name="zh-cn_topic_0237122555_b193632018316"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122555_row1363140143118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122555_p153631017313"><a name="zh-cn_topic_0237122555_p153631017313"></a><a name="zh-cn_topic_0237122555_p153631017313"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122555_p1363190193118"><a name="zh-cn_topic_0237122555_p1363190193118"></a><a name="zh-cn_topic_0237122555_p1363190193118"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122555_p1536330163114"><a name="zh-cn_topic_0237122555_p1536330163114"></a><a name="zh-cn_topic_0237122555_p1536330163114"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122555_row936350123120"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122555_p3363140193110"><a name="zh-cn_topic_0237122555_p3363140193110"></a><a name="zh-cn_topic_0237122555_p3363140193110"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122555_p03631508317"><a name="zh-cn_topic_0237122555_p03631508317"></a><a name="zh-cn_topic_0237122555_p03631508317"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122555_p6364306315"><a name="zh-cn_topic_0237122555_p6364306315"></a><a name="zh-cn_topic_0237122555_p6364306315"></a>当前节点进程中正在运行的线程号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122555_row13641103312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122555_p1736490113110"><a name="zh-cn_topic_0237122555_p1736490113110"></a><a name="zh-cn_topic_0237122555_p1736490113110"></a>lwpid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122555_p1636418014319"><a name="zh-cn_topic_0237122555_p1636418014319"></a><a name="zh-cn_topic_0237122555_p1636418014319"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122555_p1036416010315"><a name="zh-cn_topic_0237122555_p1036416010315"></a><a name="zh-cn_topic_0237122555_p1036416010315"></a>与pid对应的轻量级线程号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122555_row7364908318"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122555_p1036412017316"><a name="zh-cn_topic_0237122555_p1036412017316"></a><a name="zh-cn_topic_0237122555_p1036412017316"></a>thread_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122555_p83640073115"><a name="zh-cn_topic_0237122555_p83640073115"></a><a name="zh-cn_topic_0237122555_p83640073115"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122555_p33641808310"><a name="zh-cn_topic_0237122555_p33641808310"></a><a name="zh-cn_topic_0237122555_p33641808310"></a>与pid对应的线程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122555_row93645010314"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122555_p0365190173119"><a name="zh-cn_topic_0237122555_p0365190173119"></a><a name="zh-cn_topic_0237122555_p0365190173119"></a>creation_time</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122555_p33656019310"><a name="zh-cn_topic_0237122555_p33656019310"></a><a name="zh-cn_topic_0237122555_p33656019310"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122555_p7365505313"><a name="zh-cn_topic_0237122555_p7365505313"></a><a name="zh-cn_topic_0237122555_p7365505313"></a>与pid对应的线程创建的时间。</p>
</td>
</tr>
</tbody>
</table>
