# SUMMARY\_STAT\_ALL\_INDEXES<a name="EN-US_TOPIC_0245374696"></a>

**SUMMARY\_STAT\_ALL\_INDEXES**  contains every row of each index in databases in openGauss, showing statistics about accesses to specific indexes. 

**Table  1**  SUMMARY\_STAT\_ALL\_INDEXES columns

<a name="en-us_topic_0237122592_table12266855154914"></a>
<table><thead align="left"><tr id="en-us_topic_0237122592_row15351165504918"><th class="cellrowborder" valign="top" width="18.78%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122592_p1735110551493"><a name="en-us_topic_0237122592_p1735110551493"></a><a name="en-us_topic_0237122592_p1735110551493"></a><strong id="b7893165112154"><a name="b7893165112154"></a><a name="b7893165112154"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122592_p183511455184918"><a name="en-us_topic_0237122592_p183511455184918"></a><a name="en-us_topic_0237122592_p183511455184918"></a><strong id="b6901252131520"><a name="b6901252131520"></a><a name="b6901252131520"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.83%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122592_p1735235512497"><a name="en-us_topic_0237122592_p1735235512497"></a><a name="en-us_topic_0237122592_p1735235512497"></a><strong id="b16491135316150"><a name="b16491135316150"></a><a name="b16491135316150"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122592_row173521455144910"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122592_p335215557490"><a name="en-us_topic_0237122592_p335215557490"></a><a name="en-us_topic_0237122592_p335215557490"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122592_p15353155114910"><a name="en-us_topic_0237122592_p15353155114910"></a><a name="en-us_topic_0237122592_p15353155114910"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122592_p1135395517497"><a name="en-us_topic_0237122592_p1135395517497"></a><a name="en-us_topic_0237122592_p1135395517497"></a>Name of the schema that the index is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122592_row173531055104918"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122592_p183533554497"><a name="en-us_topic_0237122592_p183533554497"></a><a name="en-us_topic_0237122592_p183533554497"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122592_p835375534919"><a name="en-us_topic_0237122592_p835375534919"></a><a name="en-us_topic_0237122592_p835375534919"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122592_p203531550491"><a name="en-us_topic_0237122592_p203531550491"></a><a name="en-us_topic_0237122592_p203531550491"></a>Name of the table for the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122592_row1335411552499"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122592_p2354185534919"><a name="en-us_topic_0237122592_p2354185534919"></a><a name="en-us_topic_0237122592_p2354185534919"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122592_p183541055124919"><a name="en-us_topic_0237122592_p183541055124919"></a><a name="en-us_topic_0237122592_p183541055124919"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122592_p73541755104916"><a name="en-us_topic_0237122592_p73541755104916"></a><a name="en-us_topic_0237122592_p73541755104916"></a>Index name</p>
</td>
</tr>
<tr id="en-us_topic_0237122592_row1935415594916"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122592_p193541955194919"><a name="en-us_topic_0237122592_p193541955194919"></a><a name="en-us_topic_0237122592_p193541955194919"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122592_p10355755164910"><a name="en-us_topic_0237122592_p10355755164910"></a><a name="en-us_topic_0237122592_p10355755164910"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122592_p1635545554916"><a name="en-us_topic_0237122592_p1635545554916"></a><a name="en-us_topic_0237122592_p1635545554916"></a>Number of index scans initiated on the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122592_row11355655104910"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122592_p1635565524913"><a name="en-us_topic_0237122592_p1635565524913"></a><a name="en-us_topic_0237122592_p1635565524913"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122592_p4355755174913"><a name="en-us_topic_0237122592_p4355755174913"></a><a name="en-us_topic_0237122592_p4355755174913"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122592_p1535515554493"><a name="en-us_topic_0237122592_p1535515554493"></a><a name="en-us_topic_0237122592_p1535515554493"></a>Number of index entries returned by scans on the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122592_row18355115519491"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122592_p835575534915"><a name="en-us_topic_0237122592_p835575534915"></a><a name="en-us_topic_0237122592_p835575534915"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122592_p15356125554914"><a name="en-us_topic_0237122592_p15356125554914"></a><a name="en-us_topic_0237122592_p15356125554914"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122592_p193569550497"><a name="en-us_topic_0237122592_p193569550497"></a><a name="en-us_topic_0237122592_p193569550497"></a>Number of live table rows fetched by simple index scans using the index </p>
</td>
</tr>
</tbody>
</table>

