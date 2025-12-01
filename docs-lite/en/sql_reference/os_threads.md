# OS\_THREADS<a name="EN-US_TOPIC_0289900354"></a>

**OS\_THREADS**  provides status information about all threads on the current node.

**Table  1**  OS\_THREADS columns

<a name="en-us_topic_0283137608_en-us_topic_0237122554_table1626623615299"></a>
<table><thead align="left"><tr id="en-us_topic_0283137608_en-us_topic_0237122554_row1242793672913"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137608_en-us_topic_0237122554_p10427173616298"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p10427173616298"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p10427173616298"></a><strong id="en-us_topic_0283137608_b56881321078"><a name="en-us_topic_0283137608_b56881321078"></a><a name="en-us_topic_0283137608_b56881321078"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137608_en-us_topic_0237122554_p1428123652918"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1428123652918"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1428123652918"></a><strong id="en-us_topic_0283137608_b197231133572"><a name="en-us_topic_0283137608_b197231133572"></a><a name="en-us_topic_0283137608_b197231133572"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137608_en-us_topic_0237122554_p144281436202911"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p144281436202911"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p144281436202911"></a><strong id="en-us_topic_0283137608_b143718343720"><a name="en-us_topic_0283137608_b143718343720"></a><a name="en-us_topic_0283137608_b143718343720"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137608_en-us_topic_0237122554_row84281136192915"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p1942811368292"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1942811368292"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1942811368292"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p144284366295"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p144284366295"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p144284366295"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p1342823619292"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1342823619292"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1342823619292"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0283137608_en-us_topic_0237122554_row15428123619296"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p8428173692911"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p8428173692911"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p8428173692911"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p142914367291"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p142914367291"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p142914367291"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p342916366293"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p342916366293"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p342916366293"></a>ID of the thread running under the current database process</p>
</td>
</tr>
<tr id="en-us_topic_0283137608_en-us_topic_0237122554_row124291936122917"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p1742973652919"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1742973652919"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1742973652919"></a>lwpid</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p12429193616291"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p12429193616291"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p12429193616291"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p6429636202920"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p6429636202920"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p6429636202920"></a>Lightweight thread ID corresponding to <strong id="en-us_topic_0283137608_b194499212203"><a name="en-us_topic_0283137608_b194499212203"></a><a name="en-us_topic_0283137608_b194499212203"></a>pid</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137608_en-us_topic_0237122554_row10429336182913"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p94291361292"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p94291361292"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p94291361292"></a>thread_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p743012365295"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p743012365295"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p743012365295"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p1443093618291"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1443093618291"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1443093618291"></a>Name of the thread corresponding to <strong id="en-us_topic_0283137608_b13801112815207"><a name="en-us_topic_0283137608_b13801112815207"></a><a name="en-us_topic_0283137608_b13801112815207"></a>pid</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137608_en-us_topic_0237122554_row12430143672916"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p1543018364294"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1543018364294"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p1543018364294"></a>creation_time</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p18430173613295"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p18430173613295"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p18430173613295"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137608_en-us_topic_0237122554_p134301836152916"><a name="en-us_topic_0283137608_en-us_topic_0237122554_p134301836152916"></a><a name="en-us_topic_0283137608_en-us_topic_0237122554_p134301836152916"></a>Creation time of the thread corresponding to <strong id="en-us_topic_0283137608_b194331735152012"><a name="en-us_topic_0283137608_b194331735152012"></a><a name="en-us_topic_0283137608_b194331735152012"></a>pid</strong></p>
</td>
</tr>
</tbody>
</table>

