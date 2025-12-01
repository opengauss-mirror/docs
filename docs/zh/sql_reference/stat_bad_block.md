# STAT\_BAD\_BLOCK

获得当前节点表、索引等文件的读取失败信息。

**表 1**  STAT\_BAD\_BLOCK字段

<a name="zh-cn_topic_0237122612_table131262044171211"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122612_row1921714417121"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122612_p721704451214"><a name="zh-cn_topic_0237122612_p721704451214"></a><a name="zh-cn_topic_0237122612_p721704451214"></a><strong id="zh-cn_topic_0237122612_b1721764414127"><a name="zh-cn_topic_0237122612_b1721764414127"></a><a name="zh-cn_topic_0237122612_b1721764414127"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="28.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122612_p32171244141215"><a name="zh-cn_topic_0237122612_p32171244141215"></a><a name="zh-cn_topic_0237122612_p32171244141215"></a><strong id="zh-cn_topic_0237122612_b4217174419123"><a name="zh-cn_topic_0237122612_b4217174419123"></a><a name="zh-cn_topic_0237122612_b4217174419123"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="54%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122612_p16217174411122"><a name="zh-cn_topic_0237122612_p16217174411122"></a><a name="zh-cn_topic_0237122612_p16217174411122"></a><strong id="zh-cn_topic_0237122612_b1721714441220"><a name="zh-cn_topic_0237122612_b1721714441220"></a><a name="zh-cn_topic_0237122612_b1721714441220"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122612_row7217194441210"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122612_p1621794491211"><a name="zh-cn_topic_0237122612_p1621794491211"></a><a name="zh-cn_topic_0237122612_p1621794491211"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122612_p2218174401218"><a name="zh-cn_topic_0237122612_p2218174401218"></a><a name="zh-cn_topic_0237122612_p2218174401218"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122612_p1218844161218"><a name="zh-cn_topic_0237122612_p1218844161218"></a><a name="zh-cn_topic_0237122612_p1218844161218"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122612_row621854451212"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122612_p4218184471216"><a name="zh-cn_topic_0237122612_p4218184471216"></a><a name="zh-cn_topic_0237122612_p4218184471216"></a>databaseid</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122612_p1218194419121"><a name="zh-cn_topic_0237122612_p1218194419121"></a><a name="zh-cn_topic_0237122612_p1218194419121"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122612_p142181044161213"><a name="zh-cn_topic_0237122612_p142181044161213"></a><a name="zh-cn_topic_0237122612_p142181044161213"></a>database的oid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122612_row1321874417126"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122612_p4218154414124"><a name="zh-cn_topic_0237122612_p4218154414124"></a><a name="zh-cn_topic_0237122612_p4218154414124"></a>tablespaceid</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122612_p6218174411215"><a name="zh-cn_topic_0237122612_p6218174411215"></a><a name="zh-cn_topic_0237122612_p6218174411215"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122612_p10218184415129"><a name="zh-cn_topic_0237122612_p10218184415129"></a><a name="zh-cn_topic_0237122612_p10218184415129"></a>tablespace的oid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122612_row82181944131218"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122612_p12219124414121"><a name="zh-cn_topic_0237122612_p12219124414121"></a><a name="zh-cn_topic_0237122612_p12219124414121"></a>relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122612_p142191644161214"><a name="zh-cn_topic_0237122612_p142191644161214"></a><a name="zh-cn_topic_0237122612_p142191644161214"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122612_p14219134418120"><a name="zh-cn_topic_0237122612_p14219134418120"></a><a name="zh-cn_topic_0237122612_p14219134418120"></a>relation的file node。</p>
</td>
</tr>
<tr id="row313210192173"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122443_p18806205716524"><a name="zh-cn_topic_0237122443_p18806205716524"></a><a name="zh-cn_topic_0237122443_p18806205716524"></a>bucketid</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122443_p6806957115211"><a name="zh-cn_topic_0237122443_p6806957115211"></a><a name="zh-cn_topic_0237122443_p6806957115211"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122443_p1180655775215"><a name="zh-cn_topic_0237122443_p1180655775215"></a><a name="zh-cn_topic_0237122443_p1180655775215"></a>一致性hash bucket ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122612_row1521954416128"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122612_p92191445121"><a name="zh-cn_topic_0237122612_p92191445121"></a><a name="zh-cn_topic_0237122612_p92191445121"></a>forknum</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122612_p4219114419122"><a name="zh-cn_topic_0237122612_p4219114419122"></a><a name="zh-cn_topic_0237122612_p4219114419122"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122612_p52190447127"><a name="zh-cn_topic_0237122612_p52190447127"></a><a name="zh-cn_topic_0237122612_p52190447127"></a>fork编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122612_row132191544121217"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122612_p19219144171211"><a name="zh-cn_topic_0237122612_p19219144171211"></a><a name="zh-cn_topic_0237122612_p19219144171211"></a>error_count</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122612_p4219644101210"><a name="zh-cn_topic_0237122612_p4219644101210"></a><a name="zh-cn_topic_0237122612_p4219644101210"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122612_p1921974418129"><a name="zh-cn_topic_0237122612_p1921974418129"></a><a name="zh-cn_topic_0237122612_p1921974418129"></a>error的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122612_row7220124416126"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122612_p12220244151214"><a name="zh-cn_topic_0237122612_p12220244151214"></a><a name="zh-cn_topic_0237122612_p12220244151214"></a>first_time</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122612_p122020448123"><a name="zh-cn_topic_0237122612_p122020448123"></a><a name="zh-cn_topic_0237122612_p122020448123"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122612_p13220154419129"><a name="zh-cn_topic_0237122612_p13220154419129"></a><a name="zh-cn_topic_0237122612_p13220154419129"></a>坏块第一次出现的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122612_row14220144431213"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122612_p13220114451211"><a name="zh-cn_topic_0237122612_p13220114451211"></a><a name="zh-cn_topic_0237122612_p13220114451211"></a>last_time</p>
</td>
<td class="cellrowborder" valign="top" width="28.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122612_p322014441216"><a name="zh-cn_topic_0237122612_p322014441216"></a><a name="zh-cn_topic_0237122612_p322014441216"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="54%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122612_p722064420123"><a name="zh-cn_topic_0237122612_p722064420123"></a><a name="zh-cn_topic_0237122612_p722064420123"></a>坏块最后出现的时间。</p>
</td>
</tr>
</tbody>
</table>
