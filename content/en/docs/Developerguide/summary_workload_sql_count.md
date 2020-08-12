# SUMMARY\_WORKLOAD\_SQL\_COUNT<a name="EN-US_TOPIC_0245374724"></a>

**SUMMARY\_WORKLOAD\_SQL\_COUNT**  displays the distribution of SQL statements in workloads on the primary database node in openGauss. 

**Table  1**  SUMMARY\_WORKLOAD\_SQL\_COUNT columns

<a name="en-us_topic_0237122620_table7797152216164"></a>
<table><thead align="left"><tr id="en-us_topic_0237122620_row49158229169"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122620_p1791513228164"><a name="en-us_topic_0237122620_p1791513228164"></a><a name="en-us_topic_0237122620_p1791513228164"></a><strong id="b1062571510112"><a name="b1062571510112"></a><a name="b1062571510112"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122620_p16916122271617"><a name="en-us_topic_0237122620_p16916122271617"></a><a name="en-us_topic_0237122620_p16916122271617"></a><strong id="b173413161615"><a name="b173413161615"></a><a name="b173413161615"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122620_p4916202218163"><a name="en-us_topic_0237122620_p4916202218163"></a><a name="en-us_topic_0237122620_p4916202218163"></a><strong id="b1531013176114"><a name="b1531013176114"></a><a name="b1531013176114"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122620_row19916152201616"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122620_p691632281613"><a name="en-us_topic_0237122620_p691632281613"></a><a name="en-us_topic_0237122620_p691632281613"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122620_p139161822141619"><a name="en-us_topic_0237122620_p139161822141619"></a><a name="en-us_topic_0237122620_p139161822141619"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122620_p5916132212163"><a name="en-us_topic_0237122620_p5916132212163"></a><a name="en-us_topic_0237122620_p5916132212163"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0237122620_row15916182221618"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122620_p1991612211620"><a name="en-us_topic_0237122620_p1991612211620"></a><a name="en-us_topic_0237122620_p1991612211620"></a>workload</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122620_p5917622181613"><a name="en-us_topic_0237122620_p5917622181613"></a><a name="en-us_topic_0237122620_p5917622181613"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122620_p6917322131615"><a name="en-us_topic_0237122620_p6917322131615"></a><a name="en-us_topic_0237122620_p6917322131615"></a>Workload name</p>
</td>
</tr>
<tr id="en-us_topic_0237122620_row189177225161"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122620_p10917172241618"><a name="en-us_topic_0237122620_p10917172241618"></a><a name="en-us_topic_0237122620_p10917172241618"></a>select_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122620_p6918122218167"><a name="en-us_topic_0237122620_p6918122218167"></a><a name="en-us_topic_0237122620_p6918122218167"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122620_p129181622131613"><a name="en-us_topic_0237122620_p129181622131613"></a><a name="en-us_topic_0237122620_p129181622131613"></a>Number of <strong id="b44134201113"><a name="b44134201113"></a><a name="b44134201113"></a>SELECT</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0237122620_row1391832281610"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122620_p1691842281617"><a name="en-us_topic_0237122620_p1691842281617"></a><a name="en-us_topic_0237122620_p1691842281617"></a>update_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122620_p1291872281617"><a name="en-us_topic_0237122620_p1291872281617"></a><a name="en-us_topic_0237122620_p1291872281617"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122620_p791802218160"><a name="en-us_topic_0237122620_p791802218160"></a><a name="en-us_topic_0237122620_p791802218160"></a>Number of <strong id="b1862652118118"><a name="b1862652118118"></a><a name="b1862652118118"></a>UPDATE</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0237122620_row17918162291611"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122620_p491822291613"><a name="en-us_topic_0237122620_p491822291613"></a><a name="en-us_topic_0237122620_p491822291613"></a>insert_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122620_p391920228165"><a name="en-us_topic_0237122620_p391920228165"></a><a name="en-us_topic_0237122620_p391920228165"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122620_p3919162214161"><a name="en-us_topic_0237122620_p3919162214161"></a><a name="en-us_topic_0237122620_p3919162214161"></a>Number of <strong id="b16452202211120"><a name="b16452202211120"></a><a name="b16452202211120"></a>INSERT</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0237122620_row1691912281613"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122620_p18919722111612"><a name="en-us_topic_0237122620_p18919722111612"></a><a name="en-us_topic_0237122620_p18919722111612"></a>delete_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122620_p79191822131613"><a name="en-us_topic_0237122620_p79191822131613"></a><a name="en-us_topic_0237122620_p79191822131613"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122620_p1591932213167"><a name="en-us_topic_0237122620_p1591932213167"></a><a name="en-us_topic_0237122620_p1591932213167"></a>Number of <strong id="b65371923415"><a name="b65371923415"></a><a name="b65371923415"></a>DELETE</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0237122620_row2091919229164"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122620_p8919222181610"><a name="en-us_topic_0237122620_p8919222181610"></a><a name="en-us_topic_0237122620_p8919222181610"></a>ddl_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122620_p1291952281617"><a name="en-us_topic_0237122620_p1291952281617"></a><a name="en-us_topic_0237122620_p1291952281617"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122620_p14919112221619"><a name="en-us_topic_0237122620_p14919112221619"></a><a name="en-us_topic_0237122620_p14919112221619"></a>Number of <strong id="b62668290118"><a name="b62668290118"></a><a name="b62668290118"></a>DDL</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0237122620_row1891911222160"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122620_p11920102215162"><a name="en-us_topic_0237122620_p11920102215162"></a><a name="en-us_topic_0237122620_p11920102215162"></a>dml_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122620_p109207222161"><a name="en-us_topic_0237122620_p109207222161"></a><a name="en-us_topic_0237122620_p109207222161"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122620_p592052216161"><a name="en-us_topic_0237122620_p592052216161"></a><a name="en-us_topic_0237122620_p592052216161"></a>Number of <strong id="b0503307115"><a name="b0503307115"></a><a name="b0503307115"></a>DML</strong> statements</p>
</td>
</tr>
<tr id="en-us_topic_0237122620_row1992014227165"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122620_p9920522181615"><a name="en-us_topic_0237122620_p9920522181615"></a><a name="en-us_topic_0237122620_p9920522181615"></a>dcl_count</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122620_p292012214166"><a name="en-us_topic_0237122620_p292012214166"></a><a name="en-us_topic_0237122620_p292012214166"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122620_p1192016225161"><a name="en-us_topic_0237122620_p1192016225161"></a><a name="en-us_topic_0237122620_p1192016225161"></a>Number of <strong id="b1792511311119"><a name="b1792511311119"></a><a name="b1792511311119"></a>DCL</strong> statements</p>
</td>
</tr>
</tbody>
</table>

