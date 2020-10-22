# GLOBAL\_STAT\_XACT\_ALL\_TABLES<a name="EN-US_TOPIC_0245374706"></a>

**GLOBAL\_STAT\_XACT\_ALL\_TABLES**  displays transaction status information about all ordinary tables and TOAST tables in namespaces on each node. 

**Table  1**  GLOBAL\_STAT\_XACT\_ALL\_TABLES columns

<a name="en-us_topic_0237122602_table1343541913012"></a>
<table><thead align="left"><tr id="en-us_topic_0237122602_row12574141910010"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122602_p15741191900"><a name="en-us_topic_0237122602_p15741191900"></a><a name="en-us_topic_0237122602_p15741191900"></a><strong id="b14191327175012"><a name="b14191327175012"></a><a name="b14191327175012"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122602_p557491915017"><a name="en-us_topic_0237122602_p557491915017"></a><a name="en-us_topic_0237122602_p557491915017"></a><strong id="b73233288501"><a name="b73233288501"></a><a name="b73233288501"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122602_p17575519707"><a name="en-us_topic_0237122602_p17575519707"></a><a name="en-us_topic_0237122602_p17575519707"></a><strong id="b13163162985014"><a name="b13163162985014"></a><a name="b13163162985014"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122602_row357519191500"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p1757551915015"><a name="en-us_topic_0237122602_p1757551915015"></a><a name="en-us_topic_0237122602_p1757551915015"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p857561913015"><a name="en-us_topic_0237122602_p857561913015"></a><a name="en-us_topic_0237122602_p857561913015"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p155761519607"><a name="en-us_topic_0237122602_p155761519607"></a><a name="en-us_topic_0237122602_p155761519607"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122602_row16576019807"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p557611911011"><a name="en-us_topic_0237122602_p557611911011"></a><a name="en-us_topic_0237122602_p557611911011"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p175763191604"><a name="en-us_topic_0237122602_p175763191604"></a><a name="en-us_topic_0237122602_p175763191604"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p85761719102"><a name="en-us_topic_0237122602_p85761719102"></a><a name="en-us_topic_0237122602_p85761719102"></a>OID of the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122602_row115761019402"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p195778198012"><a name="en-us_topic_0237122602_p195778198012"></a><a name="en-us_topic_0237122602_p195778198012"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p1557713191301"><a name="en-us_topic_0237122602_p1557713191301"></a><a name="en-us_topic_0237122602_p1557713191301"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p057781911017"><a name="en-us_topic_0237122602_p057781911017"></a><a name="en-us_topic_0237122602_p057781911017"></a>Name of the schema that contains the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122602_row1057791913017"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p957711191001"><a name="en-us_topic_0237122602_p957711191001"></a><a name="en-us_topic_0237122602_p957711191001"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p15770191701"><a name="en-us_topic_0237122602_p15770191701"></a><a name="en-us_topic_0237122602_p15770191701"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p257714192006"><a name="en-us_topic_0237122602_p257714192006"></a><a name="en-us_topic_0237122602_p257714192006"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0237122602_row2057718191102"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p757711191019"><a name="en-us_topic_0237122602_p757711191019"></a><a name="en-us_topic_0237122602_p757711191019"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p20577719202"><a name="en-us_topic_0237122602_p20577719202"></a><a name="en-us_topic_0237122602_p20577719202"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p1057819191107"><a name="en-us_topic_0237122602_p1057819191107"></a><a name="en-us_topic_0237122602_p1057819191107"></a>Number of sequential scans initiated on this table</p>
</td>
</tr>
<tr id="en-us_topic_0237122602_row55787191102"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p15781319807"><a name="en-us_topic_0237122602_p15781319807"></a><a name="en-us_topic_0237122602_p15781319807"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p8578111920014"><a name="en-us_topic_0237122602_p8578111920014"></a><a name="en-us_topic_0237122602_p8578111920014"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p257818194012"><a name="en-us_topic_0237122602_p257818194012"></a><a name="en-us_topic_0237122602_p257818194012"></a>Number of live rows fetched by sequential scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122602_row657811193012"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p1257821915014"><a name="en-us_topic_0237122602_p1257821915014"></a><a name="en-us_topic_0237122602_p1257821915014"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p185789191206"><a name="en-us_topic_0237122602_p185789191206"></a><a name="en-us_topic_0237122602_p185789191206"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p25785192010"><a name="en-us_topic_0237122602_p25785192010"></a><a name="en-us_topic_0237122602_p25785192010"></a>Number of index scans initiated on the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122602_row257871914017"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p4578141919014"><a name="en-us_topic_0237122602_p4578141919014"></a><a name="en-us_topic_0237122602_p4578141919014"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p55790191401"><a name="en-us_topic_0237122602_p55790191401"></a><a name="en-us_topic_0237122602_p55790191401"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p125791119307"><a name="en-us_topic_0237122602_p125791119307"></a><a name="en-us_topic_0237122602_p125791119307"></a>Number of live rows fetched by index scans</p>
</td>
</tr>
<tr id="en-us_topic_0237122602_row95792191809"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p557919191201"><a name="en-us_topic_0237122602_p557919191201"></a><a name="en-us_topic_0237122602_p557919191201"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p1157915194020"><a name="en-us_topic_0237122602_p1157915194020"></a><a name="en-us_topic_0237122602_p1157915194020"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p1257951910010"><a name="en-us_topic_0237122602_p1257951910010"></a><a name="en-us_topic_0237122602_p1257951910010"></a>Number of rows inserted</p>
</td>
</tr>
<tr id="en-us_topic_0237122602_row13579219407"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p15795191010"><a name="en-us_topic_0237122602_p15795191010"></a><a name="en-us_topic_0237122602_p15795191010"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p55793191502"><a name="en-us_topic_0237122602_p55793191502"></a><a name="en-us_topic_0237122602_p55793191502"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p115791619904"><a name="en-us_topic_0237122602_p115791619904"></a><a name="en-us_topic_0237122602_p115791619904"></a>Number of rows updated</p>
</td>
</tr>
<tr id="en-us_topic_0237122602_row157918191403"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p1557961915010"><a name="en-us_topic_0237122602_p1557961915010"></a><a name="en-us_topic_0237122602_p1557961915010"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p85801194012"><a name="en-us_topic_0237122602_p85801194012"></a><a name="en-us_topic_0237122602_p85801194012"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p458001916011"><a name="en-us_topic_0237122602_p458001916011"></a><a name="en-us_topic_0237122602_p458001916011"></a>Number of rows deleted</p>
</td>
</tr>
<tr id="en-us_topic_0237122602_row1658071910011"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122602_p658019195012"><a name="en-us_topic_0237122602_p658019195012"></a><a name="en-us_topic_0237122602_p658019195012"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122602_p158018195011"><a name="en-us_topic_0237122602_p158018195011"></a><a name="en-us_topic_0237122602_p158018195011"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122602_p558081919019"><a name="en-us_topic_0237122602_p558081919019"></a><a name="en-us_topic_0237122602_p558081919019"></a>Number of rows HOT updated (with no separate index update required)</p>
</td>
</tr>
</tbody>
</table>

