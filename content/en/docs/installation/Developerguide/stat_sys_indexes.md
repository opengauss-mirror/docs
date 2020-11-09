# STAT\_SYS\_INDEXES<a name="EN-US_TOPIC_0245374689"></a>

**STAT\_SYS\_INDEXES**  displays index status information about all the system catalogs in the  **pg\_catalog**,  **information\_schema**, and  **pg\_toast**  schemas.

**Table  1**  STAT\_SYS\_INDEXES columns

<a name="en-us_topic_0237122585_table1314414132439"></a>
<table><thead align="left"><tr id="en-us_topic_0237122585_row1124518137437"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122585_p4245613184310"><a name="en-us_topic_0237122585_p4245613184310"></a><a name="en-us_topic_0237122585_p4245613184310"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122585_p72451113194313"><a name="en-us_topic_0237122585_p72451113194313"></a><a name="en-us_topic_0237122585_p72451113194313"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122585_p182461613184310"><a name="en-us_topic_0237122585_p182461613184310"></a><a name="en-us_topic_0237122585_p182461613184310"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122585_row19246161354320"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122585_p3246131324313"><a name="en-us_topic_0237122585_p3246131324313"></a><a name="en-us_topic_0237122585_p3246131324313"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122585_p3246113104314"><a name="en-us_topic_0237122585_p3246113104314"></a><a name="en-us_topic_0237122585_p3246113104314"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122585_p024611131439"><a name="en-us_topic_0237122585_p024611131439"></a><a name="en-us_topic_0237122585_p024611131439"></a>OID of the table for this index</p>
</td>
</tr>
<tr id="en-us_topic_0237122585_row8247213204312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122585_p17247151344310"><a name="en-us_topic_0237122585_p17247151344310"></a><a name="en-us_topic_0237122585_p17247151344310"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122585_p19247111318439"><a name="en-us_topic_0237122585_p19247111318439"></a><a name="en-us_topic_0237122585_p19247111318439"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122585_p9247121319434"><a name="en-us_topic_0237122585_p9247121319434"></a><a name="en-us_topic_0237122585_p9247121319434"></a>OID of the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122585_row524791354317"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122585_p15247121318432"><a name="en-us_topic_0237122585_p15247121318432"></a><a name="en-us_topic_0237122585_p15247121318432"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122585_p024716139439"><a name="en-us_topic_0237122585_p024716139439"></a><a name="en-us_topic_0237122585_p024716139439"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122585_p52471913194313"><a name="en-us_topic_0237122585_p52471913194313"></a><a name="en-us_topic_0237122585_p52471913194313"></a>Name of the schema that the index is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122585_row624751315437"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122585_p9247161364312"><a name="en-us_topic_0237122585_p9247161364312"></a><a name="en-us_topic_0237122585_p9247161364312"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122585_p024891394316"><a name="en-us_topic_0237122585_p024891394316"></a><a name="en-us_topic_0237122585_p024891394316"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122585_p3248113164320"><a name="en-us_topic_0237122585_p3248113164320"></a><a name="en-us_topic_0237122585_p3248113164320"></a>Name of the table that the index is created for</p>
</td>
</tr>
<tr id="en-us_topic_0237122585_row10248913114320"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122585_p424841374316"><a name="en-us_topic_0237122585_p424841374316"></a><a name="en-us_topic_0237122585_p424841374316"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122585_p824811137439"><a name="en-us_topic_0237122585_p824811137439"></a><a name="en-us_topic_0237122585_p824811137439"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122585_p224819138432"><a name="en-us_topic_0237122585_p224819138432"></a><a name="en-us_topic_0237122585_p224819138432"></a>Index name</p>
</td>
</tr>
<tr id="en-us_topic_0237122585_row72481413144317"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122585_p0248181315437"><a name="en-us_topic_0237122585_p0248181315437"></a><a name="en-us_topic_0237122585_p0248181315437"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122585_p9248161354317"><a name="en-us_topic_0237122585_p9248161354317"></a><a name="en-us_topic_0237122585_p9248161354317"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122585_p1224801314315"><a name="en-us_topic_0237122585_p1224801314315"></a><a name="en-us_topic_0237122585_p1224801314315"></a>Number of index scans initiated on the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122585_row17248513154312"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122585_p524941374314"><a name="en-us_topic_0237122585_p524941374314"></a><a name="en-us_topic_0237122585_p524941374314"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122585_p19249513144320"><a name="en-us_topic_0237122585_p19249513144320"></a><a name="en-us_topic_0237122585_p19249513144320"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122585_p024912138433"><a name="en-us_topic_0237122585_p024912138433"></a><a name="en-us_topic_0237122585_p024912138433"></a>Number of index entries returned by scans on the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122585_row6249101317436"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122585_p32491113194313"><a name="en-us_topic_0237122585_p32491113194313"></a><a name="en-us_topic_0237122585_p32491113194313"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122585_p15249813154316"><a name="en-us_topic_0237122585_p15249813154316"></a><a name="en-us_topic_0237122585_p15249813154316"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122585_p624913132436"><a name="en-us_topic_0237122585_p624913132436"></a><a name="en-us_topic_0237122585_p624913132436"></a>Number of live table rows fetched by simple index scans using the index</p>
</td>
</tr>
</tbody>
</table>

