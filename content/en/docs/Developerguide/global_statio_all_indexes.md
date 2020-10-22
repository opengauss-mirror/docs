# GLOBAL\_STATIO\_ALL\_INDEXES<a name="EN-US_TOPIC_0245374796"></a>

**GLOBAL\_STATIO\_ALL\_INDEXES**  contains one row for each index in databases on each node, showing I/O statistics about specific indexes. 

**Table  1**  GLOBAL\_STATIO\_ALL\_INDEXES columns

<a name="en-us_topic_0237122692_table11900768262"></a>
<table><thead align="left"><tr id="en-us_topic_0237122692_row199912067265"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122692_p1899186122616"><a name="en-us_topic_0237122692_p1899186122616"></a><a name="en-us_topic_0237122692_p1899186122616"></a><strong id="b169211017501"><a name="b169211017501"></a><a name="b169211017501"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122692_p69918612264"><a name="en-us_topic_0237122692_p69918612264"></a><a name="en-us_topic_0237122692_p69918612264"></a><strong id="b785311045014"><a name="b785311045014"></a><a name="b785311045014"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122692_p7992961269"><a name="en-us_topic_0237122692_p7992961269"></a><a name="en-us_topic_0237122692_p7992961269"></a><strong id="b13539011155015"><a name="b13539011155015"></a><a name="b13539011155015"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122692_row1699217622615"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122692_p179928652617"><a name="en-us_topic_0237122692_p179928652617"></a><a name="en-us_topic_0237122692_p179928652617"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122692_p69923618268"><a name="en-us_topic_0237122692_p69923618268"></a><a name="en-us_topic_0237122692_p69923618268"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122692_p1299219662615"><a name="en-us_topic_0237122692_p1299219662615"></a><a name="en-us_topic_0237122692_p1299219662615"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122692_row189928616263"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122692_p18992146142613"><a name="en-us_topic_0237122692_p18992146142613"></a><a name="en-us_topic_0237122692_p18992146142613"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122692_p11992467263"><a name="en-us_topic_0237122692_p11992467263"></a><a name="en-us_topic_0237122692_p11992467263"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122692_p7992146162614"><a name="en-us_topic_0237122692_p7992146162614"></a><a name="en-us_topic_0237122692_p7992146162614"></a>OID of the table that the index is created for</p>
</td>
</tr>
<tr id="en-us_topic_0237122692_row199938620265"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122692_p0993366266"><a name="en-us_topic_0237122692_p0993366266"></a><a name="en-us_topic_0237122692_p0993366266"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122692_p1199356182619"><a name="en-us_topic_0237122692_p1199356182619"></a><a name="en-us_topic_0237122692_p1199356182619"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122692_p189933652611"><a name="en-us_topic_0237122692_p189933652611"></a><a name="en-us_topic_0237122692_p189933652611"></a>OID of the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122692_row199310612269"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122692_p149934620265"><a name="en-us_topic_0237122692_p149934620265"></a><a name="en-us_topic_0237122692_p149934620265"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122692_p999312652616"><a name="en-us_topic_0237122692_p999312652616"></a><a name="en-us_topic_0237122692_p999312652616"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122692_p1899315642616"><a name="en-us_topic_0237122692_p1899315642616"></a><a name="en-us_topic_0237122692_p1899315642616"></a>Name of the schema that the index is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122692_row29931167269"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122692_p4994667269"><a name="en-us_topic_0237122692_p4994667269"></a><a name="en-us_topic_0237122692_p4994667269"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122692_p20994965268"><a name="en-us_topic_0237122692_p20994965268"></a><a name="en-us_topic_0237122692_p20994965268"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122692_p1099417682617"><a name="en-us_topic_0237122692_p1099417682617"></a><a name="en-us_topic_0237122692_p1099417682617"></a>Name of the table that the index is created for</p>
</td>
</tr>
<tr id="en-us_topic_0237122692_row69941617263"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122692_p1099406152610"><a name="en-us_topic_0237122692_p1099406152610"></a><a name="en-us_topic_0237122692_p1099406152610"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122692_p19941769267"><a name="en-us_topic_0237122692_p19941769267"></a><a name="en-us_topic_0237122692_p19941769267"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122692_p15994126202612"><a name="en-us_topic_0237122692_p15994126202612"></a><a name="en-us_topic_0237122692_p15994126202612"></a>Index name</p>
</td>
</tr>
<tr id="en-us_topic_0237122692_row999417615269"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122692_p1099456112615"><a name="en-us_topic_0237122692_p1099456112615"></a><a name="en-us_topic_0237122692_p1099456112615"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122692_p499436142617"><a name="en-us_topic_0237122692_p499436142617"></a><a name="en-us_topic_0237122692_p499436142617"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122692_p1299517612268"><a name="en-us_topic_0237122692_p1299517612268"></a><a name="en-us_topic_0237122692_p1299517612268"></a>Number of disk blocks read from the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122692_row599515614265"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122692_p1099566152619"><a name="en-us_topic_0237122692_p1099566152619"></a><a name="en-us_topic_0237122692_p1099566152619"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122692_p19995268266"><a name="en-us_topic_0237122692_p19995268266"></a><a name="en-us_topic_0237122692_p19995268266"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122692_p1799513612265"><a name="en-us_topic_0237122692_p1799513612265"></a><a name="en-us_topic_0237122692_p1799513612265"></a>Number of cache hits in the index</p>
</td>
</tr>
</tbody>
</table>

