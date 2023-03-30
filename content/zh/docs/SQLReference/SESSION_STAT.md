# SESSION\_STAT<a name="ZH-CN_TOPIC_0245374733"></a>

当前节点以会话线程或AutoVacuum线程为单位，统计会话状态信息。

**表 1**  SESSION\_STAT字段

<a name="zh-cn_topic_0237122629_table1132215303204"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122629_row24058300203"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122629_p4405133014203"><a name="zh-cn_topic_0237122629_p4405133014203"></a><a name="zh-cn_topic_0237122629_p4405133014203"></a><strong id="zh-cn_topic_0237122629_b18405113014201"><a name="zh-cn_topic_0237122629_b18405113014201"></a><a name="zh-cn_topic_0237122629_b18405113014201"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122629_p10408230162015"><a name="zh-cn_topic_0237122629_p10408230162015"></a><a name="zh-cn_topic_0237122629_p10408230162015"></a><strong id="zh-cn_topic_0237122629_b040883011203"><a name="zh-cn_topic_0237122629_b040883011203"></a><a name="zh-cn_topic_0237122629_b040883011203"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122629_p16408113010206"><a name="zh-cn_topic_0237122629_p16408113010206"></a><a name="zh-cn_topic_0237122629_p16408113010206"></a><strong id="zh-cn_topic_0237122629_b1340833019202"><a name="zh-cn_topic_0237122629_b1340833019202"></a><a name="zh-cn_topic_0237122629_b1340833019202"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122629_row16408163018209"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122629_p1840843082018"><a name="zh-cn_topic_0237122629_p1840843082018"></a><a name="zh-cn_topic_0237122629_p1840843082018"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122629_p9408143042018"><a name="zh-cn_topic_0237122629_p9408143042018"></a><a name="zh-cn_topic_0237122629_p9408143042018"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122629_p124092030102014"><a name="zh-cn_topic_0237122629_p124092030102014"></a><a name="zh-cn_topic_0237122629_p124092030102014"></a>线程启动时间+线程标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122629_row1440919308205"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122629_p19409113013208"><a name="zh-cn_topic_0237122629_p19409113013208"></a><a name="zh-cn_topic_0237122629_p19409113013208"></a>statid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122629_p5409193062015"><a name="zh-cn_topic_0237122629_p5409193062015"></a><a name="zh-cn_topic_0237122629_p5409193062015"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122629_p84091630152017"><a name="zh-cn_topic_0237122629_p84091630152017"></a><a name="zh-cn_topic_0237122629_p84091630152017"></a>统计编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122629_row16409123017207"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122629_p184090303201"><a name="zh-cn_topic_0237122629_p184090303201"></a><a name="zh-cn_topic_0237122629_p184090303201"></a>statname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122629_p4410143015208"><a name="zh-cn_topic_0237122629_p4410143015208"></a><a name="zh-cn_topic_0237122629_p4410143015208"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122629_p8410183018209"><a name="zh-cn_topic_0237122629_p8410183018209"></a><a name="zh-cn_topic_0237122629_p8410183018209"></a>统计会话名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122629_row1041073013206"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122629_p144109300204"><a name="zh-cn_topic_0237122629_p144109300204"></a><a name="zh-cn_topic_0237122629_p144109300204"></a>statunit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122629_p141073014207"><a name="zh-cn_topic_0237122629_p141073014207"></a><a name="zh-cn_topic_0237122629_p141073014207"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122629_p241023042011"><a name="zh-cn_topic_0237122629_p241023042011"></a><a name="zh-cn_topic_0237122629_p241023042011"></a>统计会话单位。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122629_row1341033019209"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122629_p20410133018202"><a name="zh-cn_topic_0237122629_p20410133018202"></a><a name="zh-cn_topic_0237122629_p20410133018202"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122629_p10410113092016"><a name="zh-cn_topic_0237122629_p10410113092016"></a><a name="zh-cn_topic_0237122629_p10410113092016"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122629_p154114304208"><a name="zh-cn_topic_0237122629_p154114304208"></a><a name="zh-cn_topic_0237122629_p154114304208"></a>统计会话值。</p>
</td>
</tr>
</tbody>
</table>

