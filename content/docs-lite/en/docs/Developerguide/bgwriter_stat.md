# BGWRITER\_STAT<a name="EN-US_TOPIC_0289900794"></a>

**BGWRITER\_STAT**  displays statistics about the background writer process's activities.

**Table  1**  BGWRITER\_STAT columns

<a name="en-us_topic_0283137038_en-us_topic_0237122712_table14889184316463"></a>
<table><thead align="left"><tr id="en-us_topic_0283137038_en-us_topic_0237122712_row599220432469"><th class="cellrowborder" valign="top" width="19.06%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137038_en-us_topic_0237122712_p169921743144611"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p169921743144611"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p169921743144611"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="23.29%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137038_en-us_topic_0237122712_p139931043194616"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p139931043194616"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p139931043194616"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="57.65%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137038_en-us_topic_0237122712_p99937433466"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p99937433466"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p99937433466"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137038_en-us_topic_0237122712_row399354318466"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p999384334617"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p999384334617"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p999384334617"></a>checkpoints_timed</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p6993184314616"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p6993184314616"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p6993184314616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p8993144354613"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p8993144354613"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p8993144354613"></a>Number of scheduled checkpoints that have been performed</p>
</td>
</tr>
<tr id="en-us_topic_0283137038_en-us_topic_0237122712_row29931443194614"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p1999314324616"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p1999314324616"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p1999314324616"></a>checkpoints_req</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p10994134314466"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p10994134314466"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p10994134314466"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p10994174324614"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p10994174324614"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p10994174324614"></a>Number of requested checkpoints that have been performed</p>
</td>
</tr>
<tr id="en-us_topic_0283137038_en-us_topic_0237122712_row6994343124617"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p49941843194619"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p49941843194619"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p49941843194619"></a>checkpoint_write_time</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p399410431463"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p399410431463"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p399410431463"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p19994243114615"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p19994243114615"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p19994243114615"></a>Total time that has been spent in the portion of checkpoint processing where files are written to disk (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283137038_en-us_topic_0237122712_row79941343184616"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p139941443194610"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p139941443194610"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p139941443194610"></a>checkpoint_sync_time</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p199941443104613"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p199941443104613"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p199941443104613"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p1099534315464"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p1099534315464"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p1099534315464"></a>Total time that has been spent in the portion of checkpoint processing where files are synchronized to disk (unit: ms)</p>
</td>
</tr>
<tr id="en-us_topic_0283137038_en-us_topic_0237122712_row1099512432465"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p19995143144618"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p19995143144618"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p19995143144618"></a>buffers_checkpoint</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p59951432462"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p59951432462"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p59951432462"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p209956438466"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p209956438466"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p209956438466"></a>Number of buffers written during checkpoints</p>
</td>
</tr>
<tr id="en-us_topic_0283137038_en-us_topic_0237122712_row4995164384618"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p9995543204614"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p9995543204614"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p9995543204614"></a>buffers_clean</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p19952433462"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p19952433462"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p19952433462"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p599613433465"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p599613433465"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p599613433465"></a>Number of buffers written by the background writer</p>
</td>
</tr>
<tr id="en-us_topic_0283137038_en-us_topic_0237122712_row6996043114611"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p12996134344615"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p12996134344615"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p12996134344615"></a>maxwritten_clean</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p0996164320467"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p0996164320467"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p0996164320467"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p599624317465"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p599624317465"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p599624317465"></a>Number of times the background writer stopped a cleaning scan because it had written too many buffers</p>
</td>
</tr>
<tr id="en-us_topic_0283137038_en-us_topic_0237122712_row1899619433466"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p19996143124610"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p19996143124610"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p19996143124610"></a>buffers_backend</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p499764314467"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p499764314467"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p499764314467"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p4997743204620"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p4997743204620"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p4997743204620"></a>Number of buffers written directly by a backend</p>
</td>
</tr>
<tr id="en-us_topic_0283137038_en-us_topic_0237122712_row13997543114610"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p59977438461"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p59977438461"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p59977438461"></a>buffers_backend_fsync</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p179971431468"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p179971431468"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p179971431468"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p999754374615"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p999754374615"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p999754374615"></a>Number of times a backend had to execute its own fsync call (normally the background writer handles those even when the backend does its own write)</p>
</td>
</tr>
<tr id="en-us_topic_0283137038_en-us_topic_0237122712_row1599719434462"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p09971743124613"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p09971743124613"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p09971743124613"></a>buffers_alloc</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p199971243104616"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p199971243104616"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p199971243104616"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p59971443124612"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p59971443124612"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p59971443124612"></a>Number of buffers allocated</p>
</td>
</tr>
<tr id="en-us_topic_0283137038_en-us_topic_0237122712_row9998243184619"><td class="cellrowborder" valign="top" width="19.06%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p099817438469"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p099817438469"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p099817438469"></a>stats_reset</p>
</td>
<td class="cellrowborder" valign="top" width="23.29%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p9998124311469"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p9998124311469"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p9998124311469"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="57.65%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137038_en-us_topic_0237122712_p2099810433465"><a name="en-us_topic_0283137038_en-us_topic_0237122712_p2099810433465"></a><a name="en-us_topic_0283137038_en-us_topic_0237122712_p2099810433465"></a>Time at which these statistics were last reset</p>
</td>
</tr>
</tbody>
</table>

