# SUMMARY\_USER\_LOGIN<a name="EN-US_TOPIC_0245374828"></a>

**SUMMARY\_USER\_LOGIN**  records the number of user logins and logouts on the primary database node. 

**Table  1**  SUMMARY\_USER\_LOGIN columns

<a name="en-us_topic_0237122724_table592784702314"></a>
<table><thead align="left"><tr id="en-us_topic_0237122724_row1619848162316"><th class="cellrowborder" valign="top" width="25.14%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122724_p31954832320"><a name="en-us_topic_0237122724_p31954832320"></a><a name="en-us_topic_0237122724_p31954832320"></a><strong id="b76781936165717"><a name="b76781936165717"></a><a name="b76781936165717"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.950000000000003%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122724_p92164822311"><a name="en-us_topic_0237122724_p92164822311"></a><a name="en-us_topic_0237122724_p92164822311"></a><strong id="b1156910375579"><a name="b1156910375579"></a><a name="b1156910375579"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="57.91%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122724_p182134817239"><a name="en-us_topic_0237122724_p182134817239"></a><a name="en-us_topic_0237122724_p182134817239"></a><strong id="b19355173819572"><a name="b19355173819572"></a><a name="b19355173819572"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122724_row62113485230"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122724_p821648122311"><a name="en-us_topic_0237122724_p821648122311"></a><a name="en-us_topic_0237122724_p821648122311"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122724_p622184882317"><a name="en-us_topic_0237122724_p622184882317"></a><a name="en-us_topic_0237122724_p622184882317"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122724_p6224484232"><a name="en-us_topic_0237122724_p6224484232"></a><a name="en-us_topic_0237122724_p6224484232"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0237122724_row622154892318"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122724_p1522114862311"><a name="en-us_topic_0237122724_p1522114862311"></a><a name="en-us_topic_0237122724_p1522114862311"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122724_p1622114816235"><a name="en-us_topic_0237122724_p1622114816235"></a><a name="en-us_topic_0237122724_p1622114816235"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122724_p92224817236"><a name="en-us_topic_0237122724_p92224817236"></a><a name="en-us_topic_0237122724_p92224817236"></a>Username</p>
</td>
</tr>
<tr id="en-us_topic_0237122724_row6223481235"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122724_p1022148112317"><a name="en-us_topic_0237122724_p1022148112317"></a><a name="en-us_topic_0237122724_p1022148112317"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122724_p122154802312"><a name="en-us_topic_0237122724_p122154802312"></a><a name="en-us_topic_0237122724_p122154802312"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122724_p142384892313"><a name="en-us_topic_0237122724_p142384892313"></a><a name="en-us_topic_0237122724_p142384892313"></a>User OID (Its value is the same as that of <strong id="b8402184175711"><a name="b8402184175711"></a><a name="b8402184175711"></a>oid</strong> in <strong id="b540904119571"><a name="b540904119571"></a><a name="b540904119571"></a>pg_authid</strong>.)</p>
</td>
</tr>
<tr id="en-us_topic_0237122724_row102334813235"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122724_p122304842311"><a name="en-us_topic_0237122724_p122304842311"></a><a name="en-us_topic_0237122724_p122304842311"></a>login_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122724_p1223194862314"><a name="en-us_topic_0237122724_p1223194862314"></a><a name="en-us_topic_0237122724_p1223194862314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122724_p22354812233"><a name="en-us_topic_0237122724_p22354812233"></a><a name="en-us_topic_0237122724_p22354812233"></a>Number of logins</p>
</td>
</tr>
<tr id="en-us_topic_0237122724_row223184852314"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122724_p623104832310"><a name="en-us_topic_0237122724_p623104832310"></a><a name="en-us_topic_0237122724_p623104832310"></a>logout_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122724_p12316481235"><a name="en-us_topic_0237122724_p12316481235"></a><a name="en-us_topic_0237122724_p12316481235"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122724_p723164802317"><a name="en-us_topic_0237122724_p723164802317"></a><a name="en-us_topic_0237122724_p723164802317"></a>Number of logouts</p>
</td>
</tr>
</tbody>
</table>

