---
description: This document describes PG\_PROC\_EXT in openGauss.
keywords: [openGauss, PG\_PROC\_EXT, database reference]
---

# PG\_PROC\_EXT

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:48:05.302Z -->

PG\_PROC\_EXT is an extension of PG\_PROC and stores additional information about functions or procedures.

**Table 1**  PG\_PROC\_EXT columns

<a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_table370273621911"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_row177034367196"><th class="cellrowborder" valign="top" width="20.13201320132013%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p3704103613192"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p3704103613192"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p3704103613192"></a>Name</p></th>
<th class="cellrowborder" valign="top" width="18.08180818081808%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9704143618197"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9704143618197"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p9704143618197"></a>Type</p></th>
<th class="cellrowborder" valign="top" width="61.786178617861786%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470420360196"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470420360196"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470420360196"></a>Description</p></th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_row770433620196"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670523618197"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670523618197"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1670523618197"></a>proc_oid</p></td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"></a>oid</p></td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470503601915"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470503601915"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p470503601915"></a>Identifier of the function or procedure.</p></td>
</tr>
<tr id="row35161421019"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="p1621411019"><a name="p1621411019"></a><a name="p1621411019"></a>parallel_cursor_seq</p></td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="p116141410112"><a name="p116141410112"></a><a name="p116141410112"></a>int2</p></td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p161514101014"><a name="p161514101014"></a><a name="p161514101014"></a>Used only by functions. Specifies the sequence number of the parallel cursor in the input parameters.</p></td>
</tr>
<tr id="row35161421020"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="p1621411020"><a name="p1621411020"></a><a name="p1621411020"></a>parallel_cursor_strategy</p></td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="p116141410113"><a name="p116141410113"></a><a name="p116141410113"></a>int2</p></td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p161514101015"><a name="p161514101015"></a><a name="p161514101015"></a>Used only by functions. Specifies the data distribution mode of the parallel cursor.</p><a name="ul1867245610132"></a><a name="ul1867245610132"></a><ul id="ul1867245610132"><li>0:  ANY.</li><li>1:  HASH.</li></ul></td>
</tr>
<tr id="row35161421021"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="p1621411021"><a name="p1621411021"></a><a name="p1621411021"></a>parallel_cursor_partkey</p></td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="p116141410114"><a name="p116141410114"></a><a name="p116141410114"></a>text[]</p></td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p161514101016"><a name="p161514101016"></a><a name="p161514101016"></a>Used only by functions. Specifies the distribution key when the parallel cursor is distributed by HASH.</p></td>
</tr>
<tr id="row35161421021"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="p1621411021"><a name="p1621411021"></a><a name="p1621411021"></a>result_cache</p></td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="p116141410114"><a name="p116141410114"></a><a name="p116141410114"></a>bool</p></td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p161514101016"><a name="p161514101016"></a><a name="p161514101016"></a>Whether function result caching is supported.</p><a name="ul1867245610132"></a><a name="ul1867245610132"></a><ul id="ul1867245610132"><li>true: supported.</li><li>false: not supported.</li></ul></td>
</tr>
</tbody>
</table>
