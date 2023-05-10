# SESSION\_TIME

用于统计当前节点会话线程的运行时间信息，及各执行阶段所消耗时间。

**表 1**  SESSION\_TIME字段

<a name="zh-cn_topic_0237122631_table4160815142214"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122631_row72291153227"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122631_p122911518224"><a name="zh-cn_topic_0237122631_p122911518224"></a><a name="zh-cn_topic_0237122631_p122911518224"></a><strong id="zh-cn_topic_0237122631_b1623051592211"><a name="zh-cn_topic_0237122631_b1623051592211"></a><a name="zh-cn_topic_0237122631_b1623051592211"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122631_p1223017158227"><a name="zh-cn_topic_0237122631_p1223017158227"></a><a name="zh-cn_topic_0237122631_p1223017158227"></a><strong id="zh-cn_topic_0237122631_b15230191517220"><a name="zh-cn_topic_0237122631_b15230191517220"></a><a name="zh-cn_topic_0237122631_b15230191517220"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122631_p3230121552217"><a name="zh-cn_topic_0237122631_p3230121552217"></a><a name="zh-cn_topic_0237122631_p3230121552217"></a><strong id="zh-cn_topic_0237122631_b14230115122212"><a name="zh-cn_topic_0237122631_b14230115122212"></a><a name="zh-cn_topic_0237122631_b14230115122212"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122631_row323013156220"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122631_p3230141562211"><a name="zh-cn_topic_0237122631_p3230141562211"></a><a name="zh-cn_topic_0237122631_p3230141562211"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122631_p223117152229"><a name="zh-cn_topic_0237122631_p223117152229"></a><a name="zh-cn_topic_0237122631_p223117152229"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122631_p7231171517224"><a name="zh-cn_topic_0237122631_p7231171517224"></a><a name="zh-cn_topic_0237122631_p7231171517224"></a>线程启动时间+线程标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122631_row182311515112215"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122631_p13231151522212"><a name="zh-cn_topic_0237122631_p13231151522212"></a><a name="zh-cn_topic_0237122631_p13231151522212"></a>stat_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122631_p2231161511225"><a name="zh-cn_topic_0237122631_p2231161511225"></a><a name="zh-cn_topic_0237122631_p2231161511225"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122631_p162310152223"><a name="zh-cn_topic_0237122631_p162310152223"></a><a name="zh-cn_topic_0237122631_p162310152223"></a>统计编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122631_row12231415122211"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122631_p20231115182211"><a name="zh-cn_topic_0237122631_p20231115182211"></a><a name="zh-cn_topic_0237122631_p20231115182211"></a>stat_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122631_p122311115112213"><a name="zh-cn_topic_0237122631_p122311115112213"></a><a name="zh-cn_topic_0237122631_p122311115112213"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122631_p423231532220"><a name="zh-cn_topic_0237122631_p423231532220"></a><a name="zh-cn_topic_0237122631_p423231532220"></a>会话类型名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122631_row192326150224"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122631_p4232101542210"><a name="zh-cn_topic_0237122631_p4232101542210"></a><a name="zh-cn_topic_0237122631_p4232101542210"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122631_p162327151227"><a name="zh-cn_topic_0237122631_p162327151227"></a><a name="zh-cn_topic_0237122631_p162327151227"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122631_p723212159220"><a name="zh-cn_topic_0237122631_p723212159220"></a><a name="zh-cn_topic_0237122631_p723212159220"></a>会话值。</p>
</td>
</tr>
</tbody>
</table>

