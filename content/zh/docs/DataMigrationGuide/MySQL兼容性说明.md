# MySQL兼容性说明<a name="ZH-CN_TOPIC_0000001201277572"></a>

openGauss的MySQL兼容性主要通过Dolphin插件和内核实现。Dolphin插件的说明可参考[Dolphin插件介绍](../ExtensionReference/dolphin-Extension.md)。在openGauss内核中实现的MySQL兼容性特性见下表。

**表 1**  在openGauss内核中实现的MySQL兼容性特性列表

<a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_table53712060"></a>

<table><thead align="left"><tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row56018257"><th class="cellrowborder" valign="top" width="18.23%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p41184969"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p41184969"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p41184969"></a><b>分类</b></p>
</th>
<th class="cellrowborder" valign="top" width="34.54%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p47648206"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p47648206"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p47648206"></a><b>概述</b></p>
</th>
<th class="cellrowborder" valign="top" width="47.23%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p36573630"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p36573630"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p36573630"></a><b>详细说明链接<b></p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>CREATE DATABASE支持IF NOT EXISTS选项</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../ExtensionReference/dolphin-CREATE-DATABASE.md">CREATE DATABASE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>CREATE SCHEMA支持IF NOT EXISTS选项</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/CREATE-SCHEMA.md">CREATE SCHEMA</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>ALTER USER支持IF EXISTS选项</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/ALTER-USER.md">ALTER USER</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>ALTER VIEW支持DEFINER选项</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/ALTER-VIEW.md">ALTER VIEW</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>CREATE VIEW支持DEFINER选项</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/CREATE-VIEW.md">CREATE VIEW</a>
</td>
</tr>
<tr>
<td>DDL</td>
<td>支持在创建、修改对象等语句中指定COMMENT选项</td>
<td>
<a href="../ExtensionReference/dolphin-ALTER-FUNCTION.md">ALTER FUNCTION</a>、
<a href="../SQLReference/ALTER-PROCEDURE.md">ALTER PROCEDURE</a>、
<a href="../ExtensionReference/dolphin-ALTER-TABLE.md">ALTER TABLE</a>、
<a href="../SQLReference/CREATE-FUNCTION.md">CREATE FUNCTION</a>、
<a href="../ExtensionReference/dolphin-CREATE-INDEX.md">CREATE INDEX</a>、
<a href="../SQLReference/CREATE-PROCEDURE.md">CREATE PROCEDURE</a>、
<a href="../ExtensionReference/dolphin-CREATE-TABLE.md">CREATE TABLE</a>、
<a href="../SQLReference/CREATE-TABLE-PARTITION.md">CREATE TABLE PARTITION</a>、
<a href="../SQLReference/CREATE-TABLE-SUBPARTITION.md">CREATE TABLE SUBPARTITION</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a UNIQUEname="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>CREATE TABLE支持创建主键、UNIQUE索引、外键约束</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../ExtensionReference/dolphin-CREATE-TABLE.md">CREATE TABLE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a UNIQUEname="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>ALTER TABLE支持创建主键、UNIQUE索引、外键约束</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../ExtensionReference/dolphin-ALTER-TABLE.md">ALTER TABLE</a>
</td>
</tr>
<tr>
<td>DDL</td>
<td>支持自增列</td>
<td>
<a href="../ExtensionReference/dolphin-ALTER-TABLE.md">ALTER TABLE</a>、
<a href="../ExtensionReference/dolphin-CREATE-TABLE.md">CREATE TABLE</a>
</td>
</tr>
<tr>
<td>DDL</td>
<td>支持前缀索引</td>
<td>
<a href="../ExtensionReference/dolphin-CREATE-INDEX.md">CREATE INDEX</a>
</td>
</tr>
<tr>
<td>DDL</td>
<td>支持指定字符集与排序规则</td>
<td>
<a href="../SQLReference/ALTER-SCHEMA.md">ALTER SCHEMA</a>、
<a href="../SQLReference/CREATE-SCHEMA.md">CREATE SCHEMA</a>、
<a href="../ExtensionReference/dolphin-ALTER-TABLE.md">ALTER TABLE</a>、
<a href="../ExtensionReference/dolphin-CREATE-TABLE.md">CREATE TABLE</a>
</td>
</tr>
<tr>
<td>DDL</td>
<td>修改表时支持在表第一列前面或者在指定列后面添加列</td>
<td>
<a href="../ExtensionReference/dolphin-ALTER-TABLE.md">ALTER TABLE</a>
</td>
</tr>
<tr>
<td>DDL</td>
<td>修改列名称/定义语法兼容</td>
<td>
<a href="../ExtensionReference/dolphin-ALTER-TABLE.md">ALTER TABLE</a>
</td>
</tr>
<tr>
<td>DDL</td>
<td>定时任务EVENT语法兼容</td>
<td>
<a href="../SQLReference/ALTER-EVENT.md">ALTER EVENT</a>、
<a href="../SQLReference/CREATE-EVENT.md">CREATE EVENT</a>、
<a href="../SQLReference/DROP-EVENT.md">DROP EVENT</a>、
<a href="../SQLReference/SHOW-EVENTS.md">SHOW EVENTS</a>
</td>
</tr>
<tr>
<td>DDL</td>
<td>创建分区表语法兼容</td>
<td>
<a href="../ExtensionReference/dolphin-CREATE-TABLE-PARTITION.md">CREATE TABLE PARTITION</a>、
<a href="../SQLReference/CREATE-TABLE-SUBPARTITION.md">CREATE TABLE SUBPARTITION</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DML</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>DELETE支持从多个表中删除数据</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/DELETE.md">DELETE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DML</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>DELETE支持ORDER BY和LIMIT</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/DELETE.md">DELETE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DML</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>DELETE支持从指定分区（或子分区）删除数据</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/DELETE.md">DELETE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DML</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>INSERT VALUES的右值表达式支持字段引用</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../ExtensionReference/dolphin-INSERT.md">INSERT</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DML</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a UPDATEname="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>UPDATE支持从多个表中更新数据</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../ExtensionReference/dolphin-UPDATE.md">UPDATE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DML</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a UPDATEname="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>UPDATE支持ORDER BY和LIMIT</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../ExtensionReference/dolphin-UPDATE.md">UPDATE</a>
</td>
</tr>
<tr>
<td>DML</td>
<td>SELECT INTO语法兼容</td>
<td>
<a href="../ExtensionReference/dolphin-SELECT.md">SELECT</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DCL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a UPDATEname="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持在会话中set用户自定义变量</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/SET.md">SET</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DCL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a UPDATEname="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持set全局变量增强</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/SET.md">SET</a>
</td>
</tr>
<tr>
<td>DCL</td>
<td>SET TRANSACTION语法兼容</td>
<td>
<a href="../SQLReference/SET-TRANSACTION.md">SET TRANSACTION</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>数据类型</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持NVARCHAR类型</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../ExtensionReference/dolphin-字符类型.md">字符类型</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>数据类型</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持SET数据类型</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/SET类型.md">SET类型</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>函数和操作符</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持安全等于操作符<=></p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/简单表达式.md">简单表达式</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>函数和操作符</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持group_concat函数</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/聚集函数.md">聚集函数</a>
</td>
</tr>
<tr>
<td>函数和操作符</td>
<td>支持LAST_INSERT_ID函数</td>
<td>
<a href="../SQLReference/SEQUENCE函数.md">SEQUENCE函数</a>
</td>
</tr>
<tr>
<td>函数和操作符</td>
<td>支持row_count()函数</td>
<td>
<a href="../SQLReference/窗口函数.md">row_count()函数</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>函数和操作符</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持安全函数aes_decrypt/aes_encrypt</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/安全函数.md">安全函数</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>函数和操作符</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持字符处理函数sha/sha1/sha2</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../ExtensionReference/dolphin-字符处理函数和操作符.md">字符处理函数和操作符</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>控制语句</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持label:loop/while/repeat循环语法</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/循环语句.md">循环语句</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持create table as语法中定义表字段属性</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../ExtensionReference/dolphin-CREATE-TABLE-AS.md">CREATE TABLE AS</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>优化器hint</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持force|use index语法指定扫描表使用的索引</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../PerformanceTuningGuide/INDEX-HINTS.md">INDEX_HINTS</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>声明语法</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持declare handler语法 </p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/错误捕获语句.md">错误捕获语句</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>声明语法</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持declare condition语法和declare cursor语法 </p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/基本结构.md">基本结构</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DCL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a UPDATEname="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持用户自定义变量在SQL语句中赋值</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/SET.md">SET</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DCL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持drop trigger语法 </p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/DROP-TRIGGER.md">drop trigger</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>SQL语法</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p31526653"></a>支持delimiter定义结束符</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="../SQLReference/DELIMITER.md">DELIMITER</a>
</td>
</tr>
</tbody>
</table>

