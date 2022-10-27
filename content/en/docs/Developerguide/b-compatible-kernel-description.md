# MySQL-compatible Kernel Description<a name="EN-US_TOPIC_0000001201277572"></a>

**Table 1** MySQL-compatible features implemented in the openGauss kernel

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
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>ALTER VIEW supports the DEFINER option.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="ALTER-VIEW.md">ALTER VIEW</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>CREATE VIEW supports the DEFINER option.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="CREATE-VIEW.md">CREATE VIEW</a>
</td>
</tr>
<tr>
<td>DDL</td>
<td>The COMMENT option can be specified in the statements for creating and modifying objects.</td>
<td>
<a href="ALTER-FUNCTION.md">ALTER FUNCTION</a>,
<a href="ALTER-PROCEDURE.md">ALTER PROCEDURE</a>,
<a href="ALTER-TABLE.md">ALTER TABLE</a>,
<a href="CREATE-FUNCTION.md">CREATE FUNCTION</a>,
<a href="CREATE-INDEX.md">CREATE INDEX</a>,
<a href="CREATE-PROCEDURE.md">CREATE PROCEDURE</a>,
<a href="CREATE-TABLE.md">CREATE TABLE</a>,
<a href="CREATE-TABLE-PARTITION.md">CREATE TABLE PARTITION</a>, and
<a href="CREATE-TABLE-SUBPARTITION.md">CREATE TABLE SUBPARTITION</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a UNIQUEname="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>CREATE TABLE supports the creation of primary keys, UNIQUE indexes, and foreign key constraints.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="CREATE-TABLE.md">CREATE TABLE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a UNIQUEname="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>ALTER TABLE supports the creation of primary keys, UNIQUE indexes, and foreign key constraints.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="ALTER-TABLE.md">ALTER TABLE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>CREATE TABLE supports the creation of auto-increment columns.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="CREATE-TABLE.md">CREATE TABLE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DML</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>DELETE supports the deletion of data from multiple tables.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="DELETE.md">DELETE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DML</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>DELETE supports ORDER BY.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="DELETE.md">DELETE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DML</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>DELETE supports the deletion of data from a specified partition or subpartition.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="DELETE.md">DELETE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DML</p>
</td>
The <td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a UPDATEname="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>UPDATE supports the update of data from multiple tables.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="UPDATE.md">UPDATE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DML</p>
</td>
The <td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a UPDATEname="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>UPDATE supports ORDER BY and LIMIT.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="UPDATE.md">UPDATE</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DCL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a UPDATEname="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>User-defined variables can be set in sessions.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="SET.md">SET</a>
</td>
</tr>
<tr id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_p22758839"></a>DCL</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a UPDATEname="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>Global variables of SET can be enhanced.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a name="zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_zh-cn_topic_0058967566_ul55286870"></a><a href="SET.md">SET</a>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a>Data type</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>The NVARCHAR type is supported.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a href="character-types.md">Character Types</a>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a>Data type</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>The SET type is supported.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a href="set-type.md">SET Type</a>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a>Function and operator</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>The secure equality operator <=> is supported.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a href="simple-expressions.md">Simple Expressions</a>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a>Function and operator</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>The group_concat function is supported.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a href="aggregate-functions.md">Aggregate Functions</a>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a>Function and operator</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>The security functions aes_decrypt and aes_encrypt are supported.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a href="security-functions.md">Security Functions</a>
</td>
</tr>
<tr id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_row26793117"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p22758839"></a>Function and operator</p>
</td>
<td class="cellrowborder" valign="top" width="34.54%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_p31526653"></a>The character processing functions SHA, SHA1, and SHA2 are supported.</p>
</td>
<td class="cellrowborder" valign="top" width="47.23%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a name="en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_en-us_topic_0058967566_ul55286870"></a><a href="character-processing-functions-and-operators.md">Character Processing Functions and Operators</a>
</td>
</tr>
</tbody>
</table>
