# 内核MySQL兼容性说明<a name="ZH-CN_TOPIC_0000001201277572"></a>

**表 1**  在openGauss内核中实现的MySQL兼容性特性列表

<a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_table53712060"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row56018257"><th class="cellrowborder" valign="top" width="18.23%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p41184969"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p41184969"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p41184969"></a>分类</p>
</th>
<th class="cellrowborder" valign="top" width="34.54%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p47648206"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p47648206"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p47648206"></a>概述</p>
</th>
<th class="cellrowborder" valign="top" width="47.23%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p36573630"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p36573630"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p36573630"></a>详细说明链接</p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>CREATE DATABASE支持IF NOT EXISTS选项</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="CREATE-DATABASE.md">CREATE DATABASE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>CREATE SCHEMA支持IF NOT EXISTS选项</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="CREATE-SCHEMA.md">CREATE SCHEMA</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>ALTER USER支持IF EXISTS选项</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="ALTER-USER.md">ALTER USER</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>ALTER VIEW支持DEFINER选项</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="ALTER-VIEW.md">ALTER VIEW</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>CREATE VIEW支持DEFINER选项</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="CREATE-VIEW.md">CREATE VIEW</a>
</td>
</tr>
<tr>
<td>DDL</td>
<td>支持在创建、修改对象等语句中指定COMMENT选项</td>
<td>
<a href="ALTER-FUNCTION.md">ALTER FUNCTION</a>、
<a href="ALTER-PROCEDURE.md">ALTER PROCEDURE</a>、
<a href="ALTER-TABLE.md">ALTER TABLE</a>、
<a href="CREATE-FUNCTION.md">CREATE FUNCTION</a>、
<a href="CREATE-INDEX.md">CREATE INDEX</a>、
<a href="CREATE-PROCEDURE.md">CREATE PROCEDURE</a>、
<a href="CREATE-TABLE.md">CREATE TABLE</a>、
<a href="CREATE-TABLE-PARTITION.md">CREATE TABLE PARTITION</a>、
<a href="CREATE-TABLE-SUBPARTITION.md">CREATE TABLE SUBPARTITION</a>
</td>
</tr>
</tbody>
</table>