# CLASS\_VITAL\_INFO<a name="EN-US_TOPIC_0245374826"></a>

**CLASS\_VITAL\_INFO**  is used to check whether the OIDs of the same table or index are consistent for WDR snapshots.

**Table  1**  CLASS\_VITAL\_INFO columns

<a name="en-us_topic_0237122722_table1351144175016"></a>
<table><thead align="left"><tr id="en-us_topic_0237122722_row12604425016"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122722_p4614414509"><a name="en-us_topic_0237122722_p4614414509"></a><a name="en-us_topic_0237122722_p4614414509"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122722_p26044125013"><a name="en-us_topic_0237122722_p26044125013"></a><a name="en-us_topic_0237122722_p26044125013"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122722_p126194425019"><a name="en-us_topic_0237122722_p126194425019"></a><a name="en-us_topic_0237122722_p126194425019"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122722_row16644135015"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122722_p157134425017"><a name="en-us_topic_0237122722_p157134425017"></a><a name="en-us_topic_0237122722_p157134425017"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122722_p771844115013"><a name="en-us_topic_0237122722_p771844115013"></a><a name="en-us_topic_0237122722_p771844115013"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122722_p13714446501"><a name="en-us_topic_0237122722_p13714446501"></a><a name="en-us_topic_0237122722_p13714446501"></a>Table OID</p>
</td>
</tr>
<tr id="en-us_topic_0237122722_row127194425015"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122722_p171444195015"><a name="en-us_topic_0237122722_p171444195015"></a><a name="en-us_topic_0237122722_p171444195015"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122722_p187184416509"><a name="en-us_topic_0237122722_p187184416509"></a><a name="en-us_topic_0237122722_p187184416509"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122722_p77164410509"><a name="en-us_topic_0237122722_p77164410509"></a><a name="en-us_topic_0237122722_p77164410509"></a>Schema name</p>
</td>
</tr>
<tr id="en-us_topic_0237122722_row1990864525113"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122722_p3909134545117"><a name="en-us_topic_0237122722_p3909134545117"></a><a name="en-us_topic_0237122722_p3909134545117"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122722_p2909154515115"><a name="en-us_topic_0237122722_p2909154515115"></a><a name="en-us_topic_0237122722_p2909154515115"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122722_p191016454518"><a name="en-us_topic_0237122722_p191016454518"></a><a name="en-us_topic_0237122722_p191016454518"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0237122722_row0754419504"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122722_p188744145018"><a name="en-us_topic_0237122722_p188744145018"></a><a name="en-us_topic_0237122722_p188744145018"></a>relkind</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122722_p11894414508"><a name="en-us_topic_0237122722_p11894414508"></a><a name="en-us_topic_0237122722_p11894414508"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0237122722_p5834415019"><a name="en-us_topic_0237122722_p5834415019"></a><a name="en-us_topic_0237122722_p5834415019"></a>Object type. Its value can be:<a name="en-us_topic_0237122722_ul15751123152918"></a><a name="en-us_topic_0237122722_ul15751123152918"></a><ul id="en-us_topic_0237122722_ul15751123152918"><li><strong id="en-us_topic_0237122722_b39961015991"><a name="en-us_topic_0237122722_b39961015991"></a><a name="en-us_topic_0237122722_b39961015991"></a>r</strong>: ordinary table</li><li><strong id="en-us_topic_0237122722_b572719162913"><a name="en-us_topic_0237122722_b572719162913"></a><a name="en-us_topic_0237122722_b572719162913"></a>t</strong>: TOAST table</li><li><strong id="en-us_topic_0237122722_b7893181799"><a name="en-us_topic_0237122722_b7893181799"></a><a name="en-us_topic_0237122722_b7893181799"></a>i</strong>: index</li></ul>
</div>
</td>
</tr>
</tbody>
</table>

