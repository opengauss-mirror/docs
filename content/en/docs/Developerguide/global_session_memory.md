# GLOBAL\_SESSION\_MEMORY<a name="EN-US_TOPIC_0245374738"></a>

**GLOBAL\_SESSION\_MEMORY**  collects statistics about memory usage at the session level on each node in the unit of MB, including all the memory allocated to Postgres and stream threads on DNs for jobs currently executed by users. 

**Table  1**  GLOBAL\_SESSION\_MEMORY columns

<a name="en-us_topic_0237122634_table1751318181249"></a>
<table><thead align="left"><tr id="en-us_topic_0237122634_row75853187240"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122634_p2585161812412"><a name="en-us_topic_0237122634_p2585161812412"></a><a name="en-us_topic_0237122634_p2585161812412"></a><strong id="b123881044191116"><a name="b123881044191116"></a><a name="b123881044191116"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122634_p658591832420"><a name="en-us_topic_0237122634_p658591832420"></a><a name="en-us_topic_0237122634_p658591832420"></a><strong id="b1810724541112"><a name="b1810724541112"></a><a name="b1810724541112"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122634_p165861918112411"><a name="en-us_topic_0237122634_p165861918112411"></a><a name="en-us_topic_0237122634_p165861918112411"></a><strong id="b18729124511119"><a name="b18729124511119"></a><a name="b18729124511119"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122634_row1458631811245"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122634_p05861718122413"><a name="en-us_topic_0237122634_p05861718122413"></a><a name="en-us_topic_0237122634_p05861718122413"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122634_p20586318122411"><a name="en-us_topic_0237122634_p20586318122411"></a><a name="en-us_topic_0237122634_p20586318122411"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122634_p35861818162410"><a name="en-us_topic_0237122634_p35861818162410"></a><a name="en-us_topic_0237122634_p35861818162410"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122634_row3586141811244"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122634_p1158610180245"><a name="en-us_topic_0237122634_p1158610180245"></a><a name="en-us_topic_0237122634_p1158610180245"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122634_p458611852416"><a name="en-us_topic_0237122634_p458611852416"></a><a name="en-us_topic_0237122634_p458611852416"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122634_p55861318162410"><a name="en-us_topic_0237122634_p55861318162410"></a><a name="en-us_topic_0237122634_p55861318162410"></a>Thread start time and ID</p>
</td>
</tr>
<tr id="en-us_topic_0237122634_row12587181810242"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122634_p0587181882419"><a name="en-us_topic_0237122634_p0587181882419"></a><a name="en-us_topic_0237122634_p0587181882419"></a>init_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122634_p758771892415"><a name="en-us_topic_0237122634_p758771892415"></a><a name="en-us_topic_0237122634_p758771892415"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122634_p1058791810248"><a name="en-us_topic_0237122634_p1058791810248"></a><a name="en-us_topic_0237122634_p1058791810248"></a>Memory allocated to the currently executed job before the job enters the executor</p>
</td>
</tr>
<tr id="en-us_topic_0237122634_row125871418102415"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122634_p2587111820245"><a name="en-us_topic_0237122634_p2587111820245"></a><a name="en-us_topic_0237122634_p2587111820245"></a>used_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122634_p195871618152419"><a name="en-us_topic_0237122634_p195871618152419"></a><a name="en-us_topic_0237122634_p195871618152419"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122634_p1158741819241"><a name="en-us_topic_0237122634_p1158741819241"></a><a name="en-us_topic_0237122634_p1158741819241"></a>Memory allocated to the currently executed job</p>
</td>
</tr>
<tr id="en-us_topic_0237122634_row125871518202415"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122634_p18588191818240"><a name="en-us_topic_0237122634_p18588191818240"></a><a name="en-us_topic_0237122634_p18588191818240"></a>peak_mem</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122634_p145889184242"><a name="en-us_topic_0237122634_p145889184242"></a><a name="en-us_topic_0237122634_p145889184242"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122634_p158821814245"><a name="en-us_topic_0237122634_p158821814245"></a><a name="en-us_topic_0237122634_p158821814245"></a>Peak memory allocated to the currently executed job</p>
</td>
</tr>
</tbody>
</table>

