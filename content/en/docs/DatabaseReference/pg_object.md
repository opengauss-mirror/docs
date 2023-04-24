# PG\_OBJECT<a name="EN-US_TOPIC_0289900403"></a>

**PG\_OBJECT**  records the creator, creation time, and last modification time of objects of specified types \(ordinary tables, indexes, sequences, views, stored procedures, and functions\).

**Table  1**  PG\_OBJECT columns

<a name="en-us_topic_0283137196_en-us_topic_0237122301_table370273621911"></a>
<table><thead align="left"><tr id="en-us_topic_0283137196_en-us_topic_0237122301_row177034367196"><th class="cellrowborder" valign="top" width="20.13201320132013%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137196_en-us_topic_0237122301_p3704103613192"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p3704103613192"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p3704103613192"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="18.08180818081808%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137196_en-us_topic_0237122301_p9704143618197"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p9704143618197"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p9704143618197"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="61.786178617861786%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137196_en-us_topic_0237122301_p470420360196"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p470420360196"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p470420360196"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137196_en-us_topic_0237122301_row770433620196"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p1670523618197"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1670523618197"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1670523618197"></a>object_oid</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p1470517367198"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1470517367198"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1470517367198"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p470503601915"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p470503601915"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p470503601915"></a>Object identifier</p>
</td>
</tr>
<tr id="en-us_topic_0283137196_en-us_topic_0237122301_row870533671915"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p1670683617193"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1670683617193"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1670683617193"></a>object_type</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p13706153610194"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p13706153610194"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p13706153610194"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p117061136121914"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p117061136121914"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p117061136121914"></a>Object type</p>
<a name="en-us_topic_0283137196_en-us_topic_0237122301_ul14461631102216"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_ul14461631102216"></a><ul id="en-us_topic_0283137196_en-us_topic_0237122301_ul14461631102216"><li><strong id="en-us_topic_0237122301_b11114203715014"><a name="en-us_topic_0237122301_b11114203715014"></a><a name="en-us_topic_0237122301_b11114203715014"></a>r</strong>: ordinary table</li><li><strong id="en-us_topic_0237122301_b42751471002"><a name="en-us_topic_0237122301_b42751471002"></a><a name="en-us_topic_0237122301_b42751471002"></a>i</strong>: index</li><li><strong id="en-us_topic_0237122301_b3311252208"><a name="en-us_topic_0237122301_b3311252208"></a><a name="en-us_topic_0237122301_b3311252208"></a>s</strong>: sequence</li><li><strong id="b1263193824415"><a name="b1263193824415"></a><a name="b1263193824415"></a>l</strong>: large sequence</li><li><strong id="en-us_topic_0237122301_b227317577010"><a name="en-us_topic_0237122301_b227317577010"></a><a name="en-us_topic_0237122301_b227317577010"></a>v</strong>: view</li><li><strong id="en-us_topic_0237122301_b128142044116"><a name="en-us_topic_0237122301_b128142044116"></a><a name="en-us_topic_0237122301_b128142044116"></a>p</strong>: stored procedure and function</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283137196_en-us_topic_0237122301_row470616364192"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p197066366199"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p197066366199"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p197066366199"></a>creator</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p4706133631911"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p4706133631911"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p4706133631911"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p370693681911"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p370693681911"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p370693681911"></a>ID of a creator</p>
</td>
</tr>
<tr id="en-us_topic_0283137196_en-us_topic_0237122301_row3706143601913"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p770713610197"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p770713610197"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p770713610197"></a>ctime</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p127071361199"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p127071361199"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p127071361199"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p9707203619192"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p9707203619192"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p9707203619192"></a>Creation time of an object</p>
</td>
</tr>
<tr id="en-us_topic_0283137196_en-us_topic_0237122301_row8707183613197"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p1870820360196"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1870820360196"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p1870820360196"></a>mtime</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p4708336141913"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p4708336141913"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p4708336141913"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137196_en-us_topic_0237122301_p13708143651914"><a name="en-us_topic_0283137196_en-us_topic_0237122301_p13708143651914"></a><a name="en-us_topic_0283137196_en-us_topic_0237122301_p13708143651914"></a>Last modification time of an object. The modification operations include <strong id="en-us_topic_0237122301_b154781515716"><a name="en-us_topic_0237122301_b154781515716"></a><a name="en-us_topic_0237122301_b154781515716"></a>ALTER</strong>, <strong id="en-us_topic_0237122301_b44831151414"><a name="en-us_topic_0237122301_b44831151414"></a><a name="en-us_topic_0237122301_b44831151414"></a>GRANT</strong>, and <strong id="en-us_topic_0237122301_b164847158114"><a name="en-us_topic_0237122301_b164847158114"></a><a name="en-us_topic_0237122301_b164847158114"></a>REVOKE</strong>.</p>
</td>
</tr>
<tr id="row95518631016"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="p148051512368"><a name="p148051512368"></a><a name="p148051512368"></a>createcsn</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="p19555691018"><a name="p19555691018"></a><a name="p19555691018"></a>int8</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p105517671010"><a name="p105517671010"></a><a name="p105517671010"></a>CSN when an object is created</p>
</td>
</tr>
<tr id="row35161421017"><td class="cellrowborder" valign="top" width="20.13201320132013%" headers="mcps1.2.4.1.1 "><p id="p1621411016"><a name="p1621411016"></a><a name="p1621411016"></a>changecsn</p>
</td>
<td class="cellrowborder" valign="top" width="18.08180818081808%" headers="mcps1.2.4.1.2 "><p id="p116141410109"><a name="p116141410109"></a><a name="p116141410109"></a>int8</p>
</td>
<td class="cellrowborder" valign="top" width="61.786178617861786%" headers="mcps1.2.4.1.3 "><p id="p161514101012"><a name="p161514101012"></a><a name="p161514101012"></a>CSN when DDL operations are performed on a table or an index</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-notice.gif) **NOTICE:**
>-   Objects created or modified during database initialization \(initdb\) cannot be recorded.  **PG\_OBJECT**  does not contain these object records.
>-   When an object created before the upgrade is modified again, the modification time \(specified by  **mtime**\) is recorded. When DDL operations are performed on a table or an index, the transaction commit sequence number \(specified by  **changecsn**\) of the transaction to which the table or index belongs is recorded. Because the creation time of the object cannot be obtained,  **ctime**  and  **createcsn**  are empty.
>-   The time recorded by  **ctime**  and  **mtime**  is the start time of the transaction to which the current operation belongs.
>-   The time of object modification due to capacity expansion is also recorded.
>-   **createcsn**  and  **changecsn**  record the transaction commit sequence number of the transaction to which the current operation belongs.

