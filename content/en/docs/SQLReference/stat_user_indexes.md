# STAT\_USER\_INDEXES<a name="EN-US_TOPIC_0245374683"></a>

**STAT\_USER\_INDEXES**  displays the status information about the index of user-defined ordinary tables in the current database.

**Table  1**  STAT\_USER\_INDEXES columns

<a name="en-us_topic_0237122579_table3324113033613"></a>
<table><thead align="left"><tr id="en-us_topic_0237122579_row1341813013613"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122579_p4418430153614"><a name="en-us_topic_0237122579_p4418430153614"></a><a name="en-us_topic_0237122579_p4418430153614"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122579_p1341843063611"><a name="en-us_topic_0237122579_p1341843063611"></a><a name="en-us_topic_0237122579_p1341843063611"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122579_p114187305361"><a name="en-us_topic_0237122579_p114187305361"></a><a name="en-us_topic_0237122579_p114187305361"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122579_row1941983023618"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122579_p104199305366"><a name="en-us_topic_0237122579_p104199305366"></a><a name="en-us_topic_0237122579_p104199305366"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122579_p241923073616"><a name="en-us_topic_0237122579_p241923073616"></a><a name="en-us_topic_0237122579_p241923073616"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122579_p16419153033618"><a name="en-us_topic_0237122579_p16419153033618"></a><a name="en-us_topic_0237122579_p16419153033618"></a>OID of the table for this index</p>
</td>
</tr>
<tr id="en-us_topic_0237122579_row1241912301367"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122579_p1142013011368"><a name="en-us_topic_0237122579_p1142013011368"></a><a name="en-us_topic_0237122579_p1142013011368"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122579_p1442063015362"><a name="en-us_topic_0237122579_p1442063015362"></a><a name="en-us_topic_0237122579_p1442063015362"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122579_p13420330173617"><a name="en-us_topic_0237122579_p13420330173617"></a><a name="en-us_topic_0237122579_p13420330173617"></a>OID of the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122579_row10420203018369"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122579_p104201130103616"><a name="en-us_topic_0237122579_p104201130103616"></a><a name="en-us_topic_0237122579_p104201130103616"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122579_p16420030183619"><a name="en-us_topic_0237122579_p16420030183619"></a><a name="en-us_topic_0237122579_p16420030183619"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122579_p1420103083614"><a name="en-us_topic_0237122579_p1420103083614"></a><a name="en-us_topic_0237122579_p1420103083614"></a>Name of the schema that the index is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122579_row1142115308362"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122579_p1942143093610"><a name="en-us_topic_0237122579_p1942143093610"></a><a name="en-us_topic_0237122579_p1942143093610"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122579_p17421630183610"><a name="en-us_topic_0237122579_p17421630183610"></a><a name="en-us_topic_0237122579_p17421630183610"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122579_p114213304366"><a name="en-us_topic_0237122579_p114213304366"></a><a name="en-us_topic_0237122579_p114213304366"></a>Name of the table for the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122579_row16421730183613"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122579_p5421153013614"><a name="en-us_topic_0237122579_p5421153013614"></a><a name="en-us_topic_0237122579_p5421153013614"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122579_p1942173012362"><a name="en-us_topic_0237122579_p1942173012362"></a><a name="en-us_topic_0237122579_p1942173012362"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122579_p1742116309366"><a name="en-us_topic_0237122579_p1742116309366"></a><a name="en-us_topic_0237122579_p1742116309366"></a>Index name</p>
</td>
</tr>
<tr id="en-us_topic_0237122579_row15421930103619"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122579_p164221230193616"><a name="en-us_topic_0237122579_p164221230193616"></a><a name="en-us_topic_0237122579_p164221230193616"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122579_p74221930133614"><a name="en-us_topic_0237122579_p74221930133614"></a><a name="en-us_topic_0237122579_p74221930133614"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122579_p0422330113611"><a name="en-us_topic_0237122579_p0422330113611"></a><a name="en-us_topic_0237122579_p0422330113611"></a>Number of index scans initiated on the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122579_row24223305366"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122579_p5422163033614"><a name="en-us_topic_0237122579_p5422163033614"></a><a name="en-us_topic_0237122579_p5422163033614"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122579_p942212302368"><a name="en-us_topic_0237122579_p942212302368"></a><a name="en-us_topic_0237122579_p942212302368"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122579_p642273013366"><a name="en-us_topic_0237122579_p642273013366"></a><a name="en-us_topic_0237122579_p642273013366"></a>Number of index entries returned by scans on the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122579_row5422153043610"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122579_p342203020369"><a name="en-us_topic_0237122579_p342203020369"></a><a name="en-us_topic_0237122579_p342203020369"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122579_p1442333011366"><a name="en-us_topic_0237122579_p1442333011366"></a><a name="en-us_topic_0237122579_p1442333011366"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122579_p144231730113611"><a name="en-us_topic_0237122579_p144231730113611"></a><a name="en-us_topic_0237122579_p144231730113611"></a>Number of live table rows fetched by simple index scans using the index</p>
</td>
</tr>
</tbody>
</table>

