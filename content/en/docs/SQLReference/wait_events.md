# WAIT\_EVENTS<a name="EN-US_TOPIC_0289900696"></a>

**WAIT\_EVENTS**  displays statistics about wait events on the current node. For details about events, see  [Table 2](../DataBaseReference/pg_thread_wait_status.md#en-us_topic_0237122466_en-us_topic_0059777957_t794f802302c24514a5db22d51eabacc4),  [Table 3](../DataBaseReference/pg_thread_wait_status.md#en-us_topic_0237122466_table38811324183420),  [Table 4](../DataBaseReference/pg_thread_wait_status.md#en-us_topic_0237122466_table124603113369), and  [Table 5](../DataBaseReference/pg_thread_wait_status.md#en-us_topic_0237122466_table11826123533718).

**Table  1**  WAIT\_EVENTS columns

<a name="en-us_topic_0283137083_en-us_topic_0237122729_table176431267125"></a>
<table><thead align="left"><tr id="en-us_topic_0283137083_en-us_topic_0237122729_row677920671219"><th class="cellrowborder" valign="top" width="21.33213321332133%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137083_en-us_topic_0237122729_p977936151220"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p977936151220"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p977936151220"></a><strong id="b17624162411220"><a name="b17624162411220"></a><a name="b17624162411220"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.761676167616763%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137083_en-us_topic_0237122729_p577976191213"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p577976191213"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p577976191213"></a><strong id="b19514132519220"><a name="b19514132519220"></a><a name="b19514132519220"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="61.90619061906191%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137083_en-us_topic_0237122729_p0779469126"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p0779469126"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p0779469126"></a><strong id="b242942642211"><a name="b242942642211"></a><a name="b242942642211"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137083_en-us_topic_0237122729_row57801366129"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p978019614124"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p978019614124"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p978019614124"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p137800610126"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p137800610126"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p137800610126"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p10780164120"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p10780164120"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p10780164120"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0283137083_en-us_topic_0237122729_row1178076191214"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p1778086121217"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p1778086121217"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p1778086121217"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p87801065129"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p87801065129"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p87801065129"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p1678119611212"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p1678119611212"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p1678119611212"></a>Event type</p>
</td>
</tr>
<tr id="en-us_topic_0283137083_en-us_topic_0237122729_row97818619128"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p14781669126"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p14781669126"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p14781669126"></a>event</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p378136141217"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p378136141217"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p378136141217"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p17817619121"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p17817619121"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p17817619121"></a>Event name</p>
</td>
</tr>
<tr id="en-us_topic_0283137083_en-us_topic_0237122729_row378116151216"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p167816613127"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p167816613127"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p167816613127"></a>wait</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p14781116111215"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p14781116111215"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p14781116111215"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p157812631217"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p157812631217"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p157812631217"></a>Number of waiting times</p>
</td>
</tr>
<tr id="en-us_topic_0283137083_en-us_topic_0237122729_row9782146121215"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p197823616129"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p197823616129"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p197823616129"></a>failed_wait</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p177823611126"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p177823611126"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p177823611126"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p127829612122"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p127829612122"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p127829612122"></a>Number of waiting failures</p>
</td>
</tr>
<tr id="en-us_topic_0283137083_en-us_topic_0237122729_row07828631216"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p1278218620122"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p1278218620122"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p1278218620122"></a>total_wait_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p278210619121"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p278210619121"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p278210619121"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p178213631215"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p178213631215"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p178213631215"></a>Total waiting time (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137083_en-us_topic_0237122729_row078246181218"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p20783869129"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p20783869129"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p20783869129"></a>avg_wait_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p77839620123"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p77839620123"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p77839620123"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p17783116191220"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p17783116191220"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p17783116191220"></a>Average waiting time (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137083_en-us_topic_0237122729_row678376181215"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p878376201217"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p878376201217"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p878376201217"></a>max_wait_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p47833651220"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p47833651220"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p47833651220"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p11784563129"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p11784563129"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p11784563129"></a>Maximum waiting time (unit: μs)</p>
</td>
</tr>
<tr id="en-us_topic_0283137083_en-us_topic_0237122729_row197845681219"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p1784196161218"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p1784196161218"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p1784196161218"></a>min_wait_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p18784067125"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p18784067125"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p18784067125"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137083_en-us_topic_0237122729_p478418671215"><a name="en-us_topic_0283137083_en-us_topic_0237122729_p478418671215"></a><a name="en-us_topic_0283137083_en-us_topic_0237122729_p478418671215"></a>Minimum waiting time (unit: μs)</p>
</td>
</tr>
<tr id="row1515654111218"><td class="cellrowborder" valign="top" width="21.33213321332133%" headers="mcps1.2.4.1.1 "><p id="p252505414573"><a name="p252505414573"></a><a name="p252505414573"></a>last_updated</p>
</td>
<td class="cellrowborder" valign="top" width="16.761676167616763%" headers="mcps1.2.4.1.2 "><p id="p165252540572"><a name="p165252540572"></a><a name="p165252540572"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="61.90619061906191%" headers="mcps1.2.4.1.3 "><p id="p195259548572"><a name="p195259548572"></a><a name="p195259548572"></a>Last time when the event was updated</p>
</td>
</tr>
</tbody>
</table>

