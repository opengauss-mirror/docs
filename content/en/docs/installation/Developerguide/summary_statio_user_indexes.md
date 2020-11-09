# SUMMARY\_STATIO\_USER\_INDEXES<a name="EN-US_TOPIC_0245374777"></a>

**SUMMARY\_STATIO\_USER\_INDEXES**  displays I/O status information about all user relationship table indexes in namespaces in openGauss. 

**Table  1**  SUMMARY\_STATIO\_USER\_INDEXES columns

<a name="en-us_topic_0237122673_table19320173713816"></a>
<table><thead align="left"><tr id="en-us_topic_0237122673_row153793379810"><th class="cellrowborder" valign="top" width="18.78%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122673_p183791437783"><a name="en-us_topic_0237122673_p183791437783"></a><a name="en-us_topic_0237122673_p183791437783"></a><strong id="b21923142389"><a name="b21923142389"></a><a name="b21923142389"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122673_p12380163712813"><a name="en-us_topic_0237122673_p12380163712813"></a><a name="en-us_topic_0237122673_p12380163712813"></a><strong id="b171517157386"><a name="b171517157386"></a><a name="b171517157386"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.83%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122673_p163802371881"><a name="en-us_topic_0237122673_p163802371881"></a><a name="en-us_topic_0237122673_p163802371881"></a><strong id="b1984414155384"><a name="b1984414155384"></a><a name="b1984414155384"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122673_row43802037185"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122673_p1738020376816"><a name="en-us_topic_0237122673_p1738020376816"></a><a name="en-us_topic_0237122673_p1738020376816"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122673_p12381113714814"><a name="en-us_topic_0237122673_p12381113714814"></a><a name="en-us_topic_0237122673_p12381113714814"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122673_p12381937386"><a name="en-us_topic_0237122673_p12381937386"></a><a name="en-us_topic_0237122673_p12381937386"></a>Name of the schema that the index is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122673_row203817379811"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122673_p83814375810"><a name="en-us_topic_0237122673_p83814375810"></a><a name="en-us_topic_0237122673_p83814375810"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122673_p538110371818"><a name="en-us_topic_0237122673_p538110371818"></a><a name="en-us_topic_0237122673_p538110371818"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122673_p0381937386"><a name="en-us_topic_0237122673_p0381937386"></a><a name="en-us_topic_0237122673_p0381937386"></a>Name of the table that the index is created for</p>
</td>
</tr>
<tr id="en-us_topic_0237122673_row23811737381"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122673_p938273711817"><a name="en-us_topic_0237122673_p938273711817"></a><a name="en-us_topic_0237122673_p938273711817"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122673_p1138283720814"><a name="en-us_topic_0237122673_p1138283720814"></a><a name="en-us_topic_0237122673_p1138283720814"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122673_p13821237684"><a name="en-us_topic_0237122673_p13821237684"></a><a name="en-us_topic_0237122673_p13821237684"></a>Index name</p>
</td>
</tr>
<tr id="en-us_topic_0237122673_row638273717815"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122673_p18382537481"><a name="en-us_topic_0237122673_p18382537481"></a><a name="en-us_topic_0237122673_p18382537481"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122673_p123831337981"><a name="en-us_topic_0237122673_p123831337981"></a><a name="en-us_topic_0237122673_p123831337981"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122673_p33831637380"><a name="en-us_topic_0237122673_p33831637380"></a><a name="en-us_topic_0237122673_p33831637380"></a>Number of disk blocks read from the index</p>
</td>
</tr>
<tr id="en-us_topic_0237122673_row18383143715811"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122673_p123830371787"><a name="en-us_topic_0237122673_p123830371787"></a><a name="en-us_topic_0237122673_p123830371787"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122673_p03833371586"><a name="en-us_topic_0237122673_p03833371586"></a><a name="en-us_topic_0237122673_p03833371586"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122673_p133835376815"><a name="en-us_topic_0237122673_p133835376815"></a><a name="en-us_topic_0237122673_p133835376815"></a>Number of cache hits in the index</p>
</td>
</tr>
</tbody>
</table>

