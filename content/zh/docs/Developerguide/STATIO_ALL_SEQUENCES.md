# STATIO\_ALL\_SEQUENCES<a name="ZH-CN_TOPIC_0245374797"></a>

STATIO\_ALL\_SEQUENCES视图包含数据库中每个序列的每一行，显示特定序列关于I/O的统计。

**表 1**  STATIO\_ALL\_SEQUENCES字段

<a name="zh-cn_topic_0237122693_table159871453260"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122693_row1263114611263"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122693_p264114602618"><a name="zh-cn_topic_0237122693_p264114602618"></a><a name="zh-cn_topic_0237122693_p264114602618"></a><strong id="zh-cn_topic_0237122693_b12641467262"><a name="zh-cn_topic_0237122693_b12641467262"></a><a name="zh-cn_topic_0237122693_b12641467262"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122693_p1064246102612"><a name="zh-cn_topic_0237122693_p1064246102612"></a><a name="zh-cn_topic_0237122693_p1064246102612"></a><strong id="zh-cn_topic_0237122693_b664154652619"><a name="zh-cn_topic_0237122693_b664154652619"></a><a name="zh-cn_topic_0237122693_b664154652619"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122693_p1964104622612"><a name="zh-cn_topic_0237122693_p1964104622612"></a><a name="zh-cn_topic_0237122693_p1964104622612"></a><strong id="zh-cn_topic_0237122693_b176410469261"><a name="zh-cn_topic_0237122693_b176410469261"></a><a name="zh-cn_topic_0237122693_b176410469261"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122693_row1164114614267"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122693_p765124672611"><a name="zh-cn_topic_0237122693_p765124672611"></a><a name="zh-cn_topic_0237122693_p765124672611"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122693_p76554672611"><a name="zh-cn_topic_0237122693_p76554672611"></a><a name="zh-cn_topic_0237122693_p76554672611"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122693_p26514617261"><a name="zh-cn_topic_0237122693_p26514617261"></a><a name="zh-cn_topic_0237122693_p26514617261"></a>序列OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122693_row16656465267"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122693_p965104682618"><a name="zh-cn_topic_0237122693_p965104682618"></a><a name="zh-cn_topic_0237122693_p965104682618"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122693_p186510462262"><a name="zh-cn_topic_0237122693_p186510462262"></a><a name="zh-cn_topic_0237122693_p186510462262"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122693_p766104614263"><a name="zh-cn_topic_0237122693_p766104614263"></a><a name="zh-cn_topic_0237122693_p766104614263"></a>序列中模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122693_row18661246112611"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122693_p66614469269"><a name="zh-cn_topic_0237122693_p66614469269"></a><a name="zh-cn_topic_0237122693_p66614469269"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122693_p1566164614260"><a name="zh-cn_topic_0237122693_p1566164614260"></a><a name="zh-cn_topic_0237122693_p1566164614260"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122693_p196620464263"><a name="zh-cn_topic_0237122693_p196620464263"></a><a name="zh-cn_topic_0237122693_p196620464263"></a>序列名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122693_row766124632613"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122693_p86624615263"><a name="zh-cn_topic_0237122693_p86624615263"></a><a name="zh-cn_topic_0237122693_p86624615263"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122693_p167174652618"><a name="zh-cn_topic_0237122693_p167174652618"></a><a name="zh-cn_topic_0237122693_p167174652618"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122693_p146712466267"><a name="zh-cn_topic_0237122693_p146712466267"></a><a name="zh-cn_topic_0237122693_p146712466267"></a>从序列中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122693_row1467124613265"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122693_p46784617262"><a name="zh-cn_topic_0237122693_p46784617262"></a><a name="zh-cn_topic_0237122693_p46784617262"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122693_p26784613262"><a name="zh-cn_topic_0237122693_p26784613262"></a><a name="zh-cn_topic_0237122693_p26784613262"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122693_p146744622611"><a name="zh-cn_topic_0237122693_p146744622611"></a><a name="zh-cn_topic_0237122693_p146744622611"></a>序列中缓存命中数。</p>
</td>
</tr>
</tbody>
</table>
