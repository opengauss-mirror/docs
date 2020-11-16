# GLOBAL\_OS\_THREADS<a name="EN-US_TOPIC_0245374659"></a>

**GLOBAL\_OS\_THREADS**  provides status information about threads on all normal nodes in openGauss. 

**Table  1**  GLOBAL\_OS\_THREADS columns

<a name="en-us_topic_0237122555_table927914033118"></a>
<table><thead align="left"><tr id="en-us_topic_0237122555_row153626043111"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122555_p7362100103113"><a name="en-us_topic_0237122555_p7362100103113"></a><a name="en-us_topic_0237122555_p7362100103113"></a><strong id="b105851165301"><a name="b105851165301"></a><a name="b105851165301"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122555_p936280193111"><a name="en-us_topic_0237122555_p936280193111"></a><a name="en-us_topic_0237122555_p936280193111"></a><strong id="b104101817173010"><a name="b104101817173010"></a><a name="b104101817173010"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122555_p1836318013318"><a name="en-us_topic_0237122555_p1836318013318"></a><a name="en-us_topic_0237122555_p1836318013318"></a><strong id="b91926187305"><a name="b91926187305"></a><a name="b91926187305"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122555_row1363140143118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122555_p153631017313"><a name="en-us_topic_0237122555_p153631017313"></a><a name="en-us_topic_0237122555_p153631017313"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122555_p1363190193118"><a name="en-us_topic_0237122555_p1363190193118"></a><a name="en-us_topic_0237122555_p1363190193118"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122555_p1536330163114"><a name="en-us_topic_0237122555_p1536330163114"></a><a name="en-us_topic_0237122555_p1536330163114"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122555_row936350123120"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122555_p3363140193110"><a name="en-us_topic_0237122555_p3363140193110"></a><a name="en-us_topic_0237122555_p3363140193110"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122555_p03631508317"><a name="en-us_topic_0237122555_p03631508317"></a><a name="en-us_topic_0237122555_p03631508317"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122555_p6364306315"><a name="en-us_topic_0237122555_p6364306315"></a><a name="en-us_topic_0237122555_p6364306315"></a>ID of the thread running under the current node process</p>
</td>
</tr>
<tr id="en-us_topic_0237122555_row13641103312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122555_p1736490113110"><a name="en-us_topic_0237122555_p1736490113110"></a><a name="en-us_topic_0237122555_p1736490113110"></a>lwpid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122555_p1636418014319"><a name="en-us_topic_0237122555_p1636418014319"></a><a name="en-us_topic_0237122555_p1636418014319"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122555_p1036416010315"><a name="en-us_topic_0237122555_p1036416010315"></a><a name="en-us_topic_0237122555_p1036416010315"></a>Lightweight thread ID corresponding to <strong id="b796944512012"><a name="b796944512012"></a><a name="b796944512012"></a>pid</strong></p>
</td>
</tr>
<tr id="en-us_topic_0237122555_row7364908318"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122555_p1036412017316"><a name="en-us_topic_0237122555_p1036412017316"></a><a name="en-us_topic_0237122555_p1036412017316"></a>thread_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122555_p83640073115"><a name="en-us_topic_0237122555_p83640073115"></a><a name="en-us_topic_0237122555_p83640073115"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122555_p33641808310"><a name="en-us_topic_0237122555_p33641808310"></a><a name="en-us_topic_0237122555_p33641808310"></a>Name of the thread corresponding to <strong id="b18989312211"><a name="b18989312211"></a><a name="b18989312211"></a>pid</strong></p>
</td>
</tr>
<tr id="en-us_topic_0237122555_row93645010314"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122555_p0365190173119"><a name="en-us_topic_0237122555_p0365190173119"></a><a name="en-us_topic_0237122555_p0365190173119"></a>creation_time</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122555_p33656019310"><a name="en-us_topic_0237122555_p33656019310"></a><a name="en-us_topic_0237122555_p33656019310"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122555_p7365505313"><a name="en-us_topic_0237122555_p7365505313"></a><a name="en-us_topic_0237122555_p7365505313"></a>Creation time of the thread corresponding to <strong id="b7156112119"><a name="b7156112119"></a><a name="b7156112119"></a>pid</strong></p>
</td>
</tr>
</tbody>
</table>

