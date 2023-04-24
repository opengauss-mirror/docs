# GS\_TXN\_SNAPSHOT<a name="EN-US_TOPIC_0000001151428985"></a>

**GS\_TXN\_SNAPSHOT** is a timestamp-CSN mapping table. It periodically samples and maintains an appropriate time range to estimate the CSN value corresponding to the timestamp in the range.

**Table 1** GS\_TXN\_SNAPSHOT columns

<a name="en-us_topic_0283137196_en-us_topic_0237122301_table370273621911"></a>
<table><thead align="left"><tr id="en-us_topic_0283137196_en-us_topic_0237122301_row177034367196"><th class="cellrowborder" valign="top" width="20.13201320132013%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137196_en-us_topic_0237122301_p3704103613192"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p3704103613192"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p3704103613192"></a><b>Name</b></p>
</th>
<th class="cellrowborder" valign="top" width="18.08180818081808%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137196_en-us_topic_0237122301_p9704143618197"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p9704143618197"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p9704143618197"></a><b>Data Type</b></p>
</th>
<th class="cellrowborder" valign="top" width="61.786178617861786%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137196_en-us_topic_0237122301_p470420360196"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p470420360196"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p470420360196"></a><b>Description</b></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137196_en-us_topic_0237122301_row770433620196"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p1670523618197"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1670523618197"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1670523618197"></a>snptime</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p1470517367198"></a>timestamp with time zonetz</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p470503601915"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p470503601915"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p470503601915"></a>Snapshot time.</p>
</td>
</tr>
<tr id="en-us_topic_0283137196_en-us_topic_0237122301_row870533671915"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p1670683617193"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1670683617193"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1670683617193"></a>snpxmin</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p13706153610194"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p13706153610194"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p13706153610194"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p15173114115017"><a name="p15173114115017"></a><a name="p15173114115017"></a>Minimum transaction ID snapshots.</p>
</td>
</tr>
<tr id="en-us_topic_0283137196_en-us_topic_0237122301_row470616364192"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p197066366199"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p197066366199"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p197066366199"></a>snpcsn</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p4706133631911"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p4706133631911"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p4706133631911"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p1047215715010"><a name="p1047215715010"></a><a name="p1047215715010"></a>Commit sequence number (CSN) snapshots.</p>
</td>
</tr>
<tr id="en-us_topic_0283137196_en-us_topic_0237122301_row3706143601913"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p770713610197"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p770713610197"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p770713610197"></a>snpsnapshot</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p127071361199"><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p127071361199"></a><a name="zh-cn_topic_0283137196_zh-cn_topic_0237122301_p127071361199"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p9707203619192"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p9707203619192"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p9707203619192"></a>Serialized snapshot text.</p>
</td>
</tr>
</tbody>
</table>
