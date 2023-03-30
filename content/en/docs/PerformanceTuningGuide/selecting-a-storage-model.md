# Selecting a Storage Model<a name="EN-US_TOPIC_0000001119972374"></a>

During database design, some key factors about table design will greatly affect the subsequent query performance of the database. Table design affects data storage as well. A good table design reduces I/O operations and minimizes memory usage, improving the query performance.

Selecting a model for table storage is the first step of table definition. Select a proper storage model for your service based on the following table:

<a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_table39547486"></a>
<table><thead align="left"><tr id="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_row59078165"><th class="cellrowborder" valign="top" width="15.65%" id="mcps1.1.3.1.1"><p id="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p20602051"><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p20602051"></a><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p20602051"></a><strong id="b167675376287"><a name="b167675376287"></a><a name="b167675376287"></a>Storage Model</strong></p>
</th>
<th class="cellrowborder" valign="top" width="84.35000000000001%" id="mcps1.1.3.1.2"><p id="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p53618895"><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p53618895"></a><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p53618895"></a><strong id="b11727483289"><a name="b11727483289"></a><a name="b11727483289"></a>Applicable Scenario</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_row30816121"><td class="cellrowborder" valign="top" width="15.65%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p13077833"><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p13077833"></a><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p13077833"></a>Row-store</p>
</td>
<td class="cellrowborder" valign="top" width="84.35000000000001%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p52671525"><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p52671525"></a><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p52671525"></a>Point queries (simple index-based queries that only return a few records)</p>
<p id="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p4281684"><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p4281684"></a><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p4281684"></a>Scenarios requiring frequent addition, deletion, and modification operations</p>
</td>
</tr>
<tr id="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_row38535158"><td class="cellrowborder" valign="top" width="15.65%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p34340132"><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p34340132"></a><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p34340132"></a>Column-store</p>
</td>
<td class="cellrowborder" valign="top" width="84.35000000000001%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p30087318"><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p30087318"></a><a name="en-us_topic_0085132191_en-us_topic_0076211991_en-us_topic_0071158045_p30087318"></a>Statistics analysis query, in which operations, such as group and join, are performed many times.</p>
</td>
</tr>
</tbody>
</table>

