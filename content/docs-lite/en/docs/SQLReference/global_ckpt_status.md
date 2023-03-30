# GLOBAL\_CKPT\_STATUS<a name="EN-US_TOPIC_0289900342"></a>

**GLOBAL\_CKPT\_STATUS**  displays the checkpoint information and log flushing information about all instances in openGauss.

**Table  1**  GLOBAL\_CKPT\_STATUS columns

<a name="en-us_topic_0283137030_en-us_topic_0237122715_table421592221420"></a>
<table><thead align="left"><tr id="en-us_topic_0283137030_en-us_topic_0237122715_row92161022161412"><th class="cellrowborder" valign="top" width="31.433143314331435%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137030_en-us_topic_0237122715_p1521662211418"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1521662211418"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1521662211418"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="22.7022702270227%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137030_en-us_topic_0237122715_p15216522161417"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p15216522161417"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p15216522161417"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="45.86458645864587%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137030_en-us_topic_0237122715_p1221682216148"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1221682216148"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1221682216148"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137030_en-us_topic_0237122715_row921682241410"><td class="cellrowborder" valign="top" width="31.433143314331435%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p7216722161418"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p7216722161418"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p7216722161418"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="22.7022702270227%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p1321792214146"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1321792214146"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1321792214146"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p7217192271410"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p7217192271410"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p7217192271410"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0283137030_en-us_topic_0237122715_row1121711228149"><td class="cellrowborder" valign="top" width="31.433143314331435%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p82171322161420"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p82171322161420"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p82171322161420"></a>ckpt_redo_point</p>
</td>
<td class="cellrowborder" valign="top" width="22.7022702270227%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p42171622121410"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p42171622121410"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p42171622121410"></a>test</p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p14217162241415"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p14217162241415"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p14217162241415"></a>Checkpoint of the current instance</p>
</td>
</tr>
<tr id="en-us_topic_0283137030_en-us_topic_0237122715_row221732231414"><td class="cellrowborder" valign="top" width="31.433143314331435%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p202173229142"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p202173229142"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p202173229142"></a>ckpt_clog_flush_num</p>
</td>
<td class="cellrowborder" valign="top" width="22.7022702270227%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p1621812214140"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1621812214140"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1621812214140"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p1221842219146"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1221842219146"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1221842219146"></a>Number of Clog flushing pages from the startup time to the current time</p>
</td>
</tr>
<tr id="en-us_topic_0283137030_en-us_topic_0237122715_row1218182219146"><td class="cellrowborder" valign="top" width="31.433143314331435%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p921862241415"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p921862241415"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p921862241415"></a>ckpt_csnlog_flush_num</p>
</td>
<td class="cellrowborder" valign="top" width="22.7022702270227%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p8218122281417"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p8218122281417"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p8218122281417"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p14218132213145"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p14218132213145"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p14218132213145"></a>Number of CSN log flushing pages from the startup time to the current time</p>
</td>
</tr>
<tr id="en-us_topic_0283137030_en-us_topic_0237122715_row122181222171411"><td class="cellrowborder" valign="top" width="31.433143314331435%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p142181522161410"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p142181522161410"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p142181522161410"></a>ckpt_multixact_flush_num</p>
</td>
<td class="cellrowborder" valign="top" width="22.7022702270227%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p1321882291414"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1321882291414"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1321882291414"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p521918228145"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p521918228145"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p521918228145"></a>Number of MultiXact flushing pages from the startup time to the current time</p>
</td>
</tr>
<tr id="en-us_topic_0283137030_en-us_topic_0237122715_row721922281413"><td class="cellrowborder" valign="top" width="31.433143314331435%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p1421992216144"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1421992216144"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p1421992216144"></a>ckpt_predicate_flush_num</p>
</td>
<td class="cellrowborder" valign="top" width="22.7022702270227%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p721952211143"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p721952211143"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p721952211143"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p221911220143"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p221911220143"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p221911220143"></a>Number of predicate flushing pages from the startup time to the current time</p>
</td>
</tr>
<tr id="en-us_topic_0283137030_en-us_topic_0237122715_row172192225148"><td class="cellrowborder" valign="top" width="31.433143314331435%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p122191322141415"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p122191322141415"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p122191322141415"></a>ckpt_twophase_flush_num</p>
</td>
<td class="cellrowborder" valign="top" width="22.7022702270227%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p15219182218145"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p15219182218145"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p15219182218145"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137030_en-us_topic_0237122715_p19220922111420"><a name="en-us_topic_0283137030_en-us_topic_0237122715_p19220922111420"></a><a name="en-us_topic_0283137030_en-us_topic_0237122715_p19220922111420"></a>Number of two-phase flushing pages from the startup time to the current time</p>
</td>
</tr>
</tbody>
</table>

