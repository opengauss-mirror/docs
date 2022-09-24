# B-compatible Kernel Description<a name="EN-US_TOPIC_0000001201277572"></a>

**Table 1** B-compatible features implemented in the openGauss kernel

<a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_table53712060"></a>
<table><thead align="left"><tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row56018257"><th class="cellrowborder" valign="top" width="18.23%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p41184969"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p41184969"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p41184969"></a>Category</p>
</th>
<th class="cellrowborder" valign="top" width="34.54%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47648206"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47648206"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p47648206"></a>Overview</p>
</th>
<th class="cellrowborder" valign="top" width="47.23%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p36573630"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p36573630"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p36573630"></a>Link</p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>The CREATE DATABASE supports the IF NOT EXISTS option.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="CREATE-DATABASE.md">CREATE DATABASE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>The CREATE SCHEMA supports the IF NOT EXISTS option.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="CREATE-SCHEMA.md">CREATE SCHEMA</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>The ALTER USER supports the IF EXISTS option.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="ALTER-USER.md">ALTER USER</a>
</td>
</tr>
</tbody>
</table>
