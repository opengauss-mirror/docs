# PG\_STAT\_PROGRESS\_COPY<a name="ZH-CN_TOPIC_0289900596"></a>

PG\_STAT\_PROGRESS\__COPY视图显示当前系统内所有正在执行COPY命令的进度信息。

超级用户/管理员能够查看所有COPY命令进度信息，普通用户只能查看到到该用户执行的COPY命令进度信息，无法查看其他用户执行
的COPY命令进度信息(只会显示线程标识符和数据库oid)。

**表 1**  PG\_STAT\_PROGRESS\_COPY字段

<table>
<thead align="left">
<tr id="zh-cn_topic_0289900596_1">
<th class="cellrowborder" valign="top" width="20%"><p id="zh-cn_topic_0289900596_1_name"><a name="zh-cn_topic_0289900596_1_name"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="32%"><p id="zh-cn_topic_0289900596_1_type"><a name="zh-cn_topic_0289900596_1_type"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="48%"><p id="zh-cn_topic_0289900596_1_desc"><a name="zh-cn_topic_0289900596_1_desc"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="zh-cn_topic_0289900596_2">
<td class="cellrowborder" valign="top" width="20%" headers="zh-cn_topic_0289900596_1_name"><p id="zh-cn_topic_0289900596_2_name"><a name="zh-cn_topic_0289900596_2_name"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_type"><p id="zh-cn_topic_0289900596_2_type"><a name="zh-cn_topic_0289900596_2_type"></a>int8</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="zh-cn_topic_0289900596_1_desc"><p id="zh-cn_topic_0289900596_2_desc"><a name="zh-cn_topic_0289900596_2_desc"></a>正在执行COPY命令的线程标识符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0289900596_3">
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_name"><p id="zh-cn_topic_0289900596_3_name"><a name="zh-cn_topic_0289900596_3_name"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_type"><p id="zh-cn_topic_0289900596_3_type"><a name="zh-cn_topic_0289900596_3_type"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="zh-cn_topic_0289900596_1_desc"><p id="zh-cn_topic_0289900596_3_desc"><a name="zh-cn_topic_0289900596_3_desc"></a>执行COPY命令的线程连接的数据库标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0289900596_4">
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_4_name"><p id="zh-cn_topic_0289900596_4_name"><a name="zh-cn_topic_0289900596_4_name"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_type"><p id="zh-cn_topic_0289900596_4_type"><a name="zh-cn_topic_0289900596_4_type" herf="pg_database.md"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="zh-cn_topic_0289900596_4_desc"><p id="zh-cn_topic_0289900596_4_desc"><a name="zh-cn_topic_0289900596_4_desc"></a>执行COPY命令的线程连接的数据库名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0289900596_5"><td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_name"><p id="zh-cn_topic_0289900596_5_name"><a name="zh-cn_topic_0289900596_5_name"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_type"><p id="zh-cn_topic_0289900596_5_type"><a name="zh-cn_topic_0289900596_5_type"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="zh-cn_topic_0289900596_5_desc"><p id="zh-cn_topic_0289900596_5_desc"><a name="zh-cn_topic_0289900596_5_desc"></a>COPY命令的目标关系</p>
</td>
</tr>
<tr id="zh-cn_topic_0289900596_6"><td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_6_name"><p id="zh-cn_topic_0289900596_6_name"><a name="zh-cn_topic_0289900596_6_name"></a>command</p>
</td>
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_type"><p id="zh-cn_topic_0289900596_6_type"><a name="zh-cn_topic_0289900596_6_type"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="zh-cn_topic_0289900596_6_desc"><p id="zh-cn_topic_0289900596_6_desc"><a name="zh-cn_topic_0289900596_6_desc"></a>具体的命令：COPY TO ， COPY FROM</p>
</td>
</tr>
<tr id="zh-cn_topic_0289900596_7"><td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_7_name"><p id="zh-cn_topic_0289900596_7_name"><a name="zh-cn_topic_0289900596_7_name"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_7_type"><p id="zh-cn_topic_0289900596_7_type"><a name="zh-cn_topic_0289900596_7_type"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="zh-cn_topic_0289900596_1_desc"><p id="zh-cn_topic_0289900596_7_desc"><a name="zh-cn_topic_0289900596_7_desc"></a>COPY类型，当前支持FILE/PIPE</p>
</td>
</tr>
<tr id="zh-cn_topic_0289900596_8"><td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_name"><p id="zh-cn_topic_0289900596_8_name"><a name="zh-cn_topic_0289900596_8_name"></a>bytes_processed</p>
</td>
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_type"><p id="zh-cn_topic_0289900596_8_type"><a name="zh-cn_topic_0289900596_8_type"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="zh-cn_topic_0289900596_1_desc"><p id="zh-cn_topic_0289900596_8_desc"><a name="zh-cn_topic_0289900596_8_desc"></a>当前已COPY的字节数</p>
</td>
</tr>
<tr id="zh-cn_topic_0289900596_9"><td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_name"><p id="zh-cn_topic_0289900596_9_name"><a name="zh-cn_topic_0289900596_9_name"></a>bytes_total</p>
</td>
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_type"><p id="zh-cn_topic_0289900596_9_type"><a name="zh-cn_topic_0289900596_9_type"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="zh-cn_topic_0289900596_1_desc"><p id="zh-cn_topic_0289900596_9_desc"><a name="zh-cn_topic_0289900596_9_desc"></a>COPY的总字节数，仅限于COPY FROM FILE类型</p>
</td>
</tr>
<tr id="zh-cn_topic_0289900596_10"><td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_name"><p id="zh-cn_topic_0289900596_10_name"><a name="zh-cn_topic_0289900596_10_name"></a>tuples_processed</p>
</td>
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_type"><p id="zh-cn_topic_0289900596_10_type"><a name="zh-cn_topic_0289900596_10_type"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="zh-cn_topic_0289900596_1_desc"><p id="zh-cn_topic_0289900596_10_desc"><a name="zh-cn_topic_0289900596_10_desc"></a>当前COPY已处理的元组数量</p>
</td>
</tr>
<tr id="zh-cn_topic_0289900596_11"><td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_name"><p id="zh-cn_topic_0289900596_11_name"><a name="zh-cn_topic_0289900596_11_name"></a>tuples_excluded</p>
</td>
<td class="cellrowborder" valign="top" width="32%" headers="zh-cn_topic_0289900596_1_type"><p id="zh-cn_topic_0289900596_11_type"><a name="zh-cn_topic_0289900596_11_type"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="48%" headers="zh-cn_topic_0289900596_1_desc"><p id="zh-cn_topic_0289900596_11_desc"><a name="zh-cn_topic_0289900596_11_desc"></a>当前被COPY WHERE子句排除的元组数量</p>
</td>
</tr>
</tbody>
</table>
