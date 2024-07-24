# PG\_PROC\_EXT

PG\_PROC\_EXT系统表是PG\_PROC的扩展，存储函数或过程的额外信息。

**表 1**  PG\_PROC\_EXT字段

<a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_table370273621911"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_row177034367196"><th class="cellrowborder" valign="top" width="20.13201320132013%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p3704103613192"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p3704103613192"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p3704103613192"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="18.08180818081808%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9704143618197"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9704143618197"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9704143618197"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="61.786178617861786%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470420360196"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470420360196"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470420360196"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_row770433620196"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670523618197"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670523618197"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670523618197"></a>proc_oid</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470503601915"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470503601915"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470503601915"></a>函数或过程标识符。</p>
</td>
</tr>
<tr id="row35161421019"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="p1621411019"><a name="p1621411019"></a><a name="p1621411019"></a>parallel_cursor_seq</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="p116141410112"><a name="p116141410112"></a><a name="p116141410112"></a>int2</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p161514101014"><a name="p161514101014"></a><a name="p161514101014"></a>仅函数使用，指定入参中并行游标的序号。</p>
</td>
</tr>
<tr id="row35161421020"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="p1621411020"><a name="p1621411020"></a><a name="p1621411020"></a>parallel_cursor_strategy</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="p116141410113"><a name="p116141410113"></a><a name="p116141410113"></a>int2</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p161514101015"><a name="p161514101015"></a><a name="p161514101015"></a>仅函数使用，指定并行游标数据分布方式。</p><a name="ul1867245610132"></a><a name="ul1867245610132"></a><ul id="ul1867245610132"><li>0：表示ANY。</li><li>1：表示HASH。</li></ul>
</td>
</tr>
<tr id="row35161421021"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="p1621411021"><a name="p1621411021"></a><a name="p1621411021"></a>parallel_cursor_partkey</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="p116141410114"><a name="p116141410114"></a><a name="p116141410114"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p161514101016"><a name="p161514101016"></a><a name="p161514101016"></a>仅函数使用，指定并行游标以HASH分布时的分布键。</p>
</td>
</tr>
</tbody>
</table>
