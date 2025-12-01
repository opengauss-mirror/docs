# STAT\_ALL\_INDEXES<a name="EN-US_TOPIC_0245374695"></a>

**STAT\_ALL\_INDEXES**  contains every row of each index in databases on the current node, showing statistics about accesses to specific indexes.

**Table  1**  STAT\_ALL\_INDEXES columns

<a name="en-us_topic_0237122591_table198091311204915"></a>
<table><thead align="left"><tr id="en-us_topic_0237122591_row121017125490"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122591_p4101712164910"><a name="en-us_topic_0237122591_p4101712164910"></a><a name="en-us_topic_0237122591_p4101712164910"></a><strong id="b113745212156"><a name="b113745212156"></a><a name="b113745212156"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122591_p1810101284916"><a name="en-us_topic_0237122591_p1810101284916"></a><a name="en-us_topic_0237122591_p1810101284916"></a><strong id="b15133132211152"><a name="b15133132211152"></a><a name="b15133132211152"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122591_p9111512174911"><a name="en-us_topic_0237122591_p9111512174911"></a><a name="en-us_topic_0237122591_p9111512174911"></a><strong id="b102096233158"><a name="b102096233158"></a><a name="b102096233158"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122591_row81141294911"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122591_p101111121491"><a name="en-us_topic_0237122591_p101111121491"></a><a name="en-us_topic_0237122591_p101111121491"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122591_p1311212154912"><a name="en-us_topic_0237122591_p1311212154912"></a><a name="en-us_topic_0237122591_p1311212154912"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122591_p21181264916"><a name="en-us_topic_0237122591_p21181264916"></a><a name="en-us_topic_0237122591_p21181264916"></a>OID of the table for this index</p>
</td>
</tr>
<tr id="en-us_topic_0237122591_row6115122493"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122591_p81181216493"><a name="en-us_topic_0237122591_p81181216493"></a><a name="en-us_topic_0237122591_p81181216493"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122591_p412612134913"><a name="en-us_topic_0237122591_p412612134913"></a><a name="en-us_topic_0237122591_p412612134913"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122591_p1912111294919"><a name="en-us_topic_0237122591_p1912111294919"></a><a name="en-us_topic_0237122591_p1912111294919"></a>OID of the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122591_row181214125495"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122591_p121210122498"><a name="en-us_topic_0237122591_p121210122498"></a><a name="en-us_topic_0237122591_p121210122498"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122591_p712111219495"><a name="en-us_topic_0237122591_p712111219495"></a><a name="en-us_topic_0237122591_p712111219495"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122591_p4121612174920"><a name="en-us_topic_0237122591_p4121612174920"></a><a name="en-us_topic_0237122591_p4121612174920"></a>Name of the schema that the index is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122591_row712131214914"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122591_p1812121217499"><a name="en-us_topic_0237122591_p1812121217499"></a><a name="en-us_topic_0237122591_p1812121217499"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122591_p1812812124911"><a name="en-us_topic_0237122591_p1812812124911"></a><a name="en-us_topic_0237122591_p1812812124911"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122591_p213151213495"><a name="en-us_topic_0237122591_p213151213495"></a><a name="en-us_topic_0237122591_p213151213495"></a>Name of the table for the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122591_row101313126495"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122591_p3131912164910"><a name="en-us_topic_0237122591_p3131912164910"></a><a name="en-us_topic_0237122591_p3131912164910"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122591_p111311125496"><a name="en-us_topic_0237122591_p111311125496"></a><a name="en-us_topic_0237122591_p111311125496"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122591_p14135123496"><a name="en-us_topic_0237122591_p14135123496"></a><a name="en-us_topic_0237122591_p14135123496"></a>Index name</p>
</td>
</tr>
<tr id="en-us_topic_0237122591_row8131712154914"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122591_p12131612184914"><a name="en-us_topic_0237122591_p12131612184914"></a><a name="en-us_topic_0237122591_p12131612184914"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122591_p413101220495"><a name="en-us_topic_0237122591_p413101220495"></a><a name="en-us_topic_0237122591_p413101220495"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122591_p31471220492"><a name="en-us_topic_0237122591_p31471220492"></a><a name="en-us_topic_0237122591_p31471220492"></a>Number of index scans initiated on the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122591_row151471214496"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122591_p1714151215491"><a name="en-us_topic_0237122591_p1714151215491"></a><a name="en-us_topic_0237122591_p1714151215491"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122591_p13141512124915"><a name="en-us_topic_0237122591_p13141512124915"></a><a name="en-us_topic_0237122591_p13141512124915"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122591_p14141312154919"><a name="en-us_topic_0237122591_p14141312154919"></a><a name="en-us_topic_0237122591_p14141312154919"></a>Number of index entries returned by scans on the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122591_row314151244910"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122591_p0143129495"><a name="en-us_topic_0237122591_p0143129495"></a><a name="en-us_topic_0237122591_p0143129495"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122591_p715712204915"><a name="en-us_topic_0237122591_p715712204915"></a><a name="en-us_topic_0237122591_p715712204915"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122591_p315161224911"><a name="en-us_topic_0237122591_p315161224911"></a><a name="en-us_topic_0237122591_p315161224911"></a>Number of live table rows fetched by simple index scans using the index </p>
</td>
</tr>
</tbody>
</table>

