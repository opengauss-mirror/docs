# SUMMARY\_STATIO\_SYS\_TABLES<a name="EN-US_TOPIC_0245374783"></a>

**SUMMARY\_STATIO\_SYS\_TABLES**  displays I/O status information about all system catalogs in namespaces in openGauss. 

**Table  1**  SUMMARY\_STATIO\_SYS\_TABLES columns

<a name="en-us_topic_0237122679_table134731546101414"></a>
<table><thead align="left"><tr id="en-us_topic_0237122679_row1586164631411"><th class="cellrowborder" valign="top" width="19.62%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122679_p35861346111416"><a name="en-us_topic_0237122679_p35861346111416"></a><a name="en-us_topic_0237122679_p35861346111416"></a><strong id="b2024095115407"><a name="b2024095115407"></a><a name="b2024095115407"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.19%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122679_p1358674681410"><a name="en-us_topic_0237122679_p1358674681410"></a><a name="en-us_topic_0237122679_p1358674681410"></a><strong id="b598395174010"><a name="b598395174010"></a><a name="b598395174010"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.190000000000005%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122679_p12586194613142"><a name="en-us_topic_0237122679_p12586194613142"></a><a name="en-us_topic_0237122679_p12586194613142"></a><strong id="b12646105294020"><a name="b12646105294020"></a><a name="b12646105294020"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122679_row15874467144"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122679_p058744611146"><a name="en-us_topic_0237122679_p058744611146"></a><a name="en-us_topic_0237122679_p058744611146"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122679_p45872464141"><a name="en-us_topic_0237122679_p45872464141"></a><a name="en-us_topic_0237122679_p45872464141"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122679_p1858704631410"><a name="en-us_topic_0237122679_p1858704631410"></a><a name="en-us_topic_0237122679_p1858704631410"></a>Name of the schema that contains the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122679_row11587946151416"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122679_p25871546101412"><a name="en-us_topic_0237122679_p25871546101412"></a><a name="en-us_topic_0237122679_p25871546101412"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122679_p1258794671411"><a name="en-us_topic_0237122679_p1258794671411"></a><a name="en-us_topic_0237122679_p1258794671411"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122679_p35877461141"><a name="en-us_topic_0237122679_p35877461141"></a><a name="en-us_topic_0237122679_p35877461141"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0237122679_row1958712461140"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122679_p2058854615143"><a name="en-us_topic_0237122679_p2058854615143"></a><a name="en-us_topic_0237122679_p2058854615143"></a>heap_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122679_p1158854620141"><a name="en-us_topic_0237122679_p1158854620141"></a><a name="en-us_topic_0237122679_p1158854620141"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122679_p165881246171410"><a name="en-us_topic_0237122679_p165881246171410"></a><a name="en-us_topic_0237122679_p165881246171410"></a>Number of disk blocks read from the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122679_row3588346151414"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122679_p758884613142"><a name="en-us_topic_0237122679_p758884613142"></a><a name="en-us_topic_0237122679_p758884613142"></a>heap_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122679_p1558814616141"><a name="en-us_topic_0237122679_p1558814616141"></a><a name="en-us_topic_0237122679_p1558814616141"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122679_p1858864691415"><a name="en-us_topic_0237122679_p1858864691415"></a><a name="en-us_topic_0237122679_p1858864691415"></a>Number of cache hits in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122679_row258954691414"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122679_p3589246111415"><a name="en-us_topic_0237122679_p3589246111415"></a><a name="en-us_topic_0237122679_p3589246111415"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122679_p185891146111416"><a name="en-us_topic_0237122679_p185891146111416"></a><a name="en-us_topic_0237122679_p185891146111416"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122679_p758918468144"><a name="en-us_topic_0237122679_p758918468144"></a><a name="en-us_topic_0237122679_p758918468144"></a>Number of disk blocks read from all indexes in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122679_row4589144661419"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122679_p19589104610144"><a name="en-us_topic_0237122679_p19589104610144"></a><a name="en-us_topic_0237122679_p19589104610144"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122679_p1859074615146"><a name="en-us_topic_0237122679_p1859074615146"></a><a name="en-us_topic_0237122679_p1859074615146"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122679_p45901646111415"><a name="en-us_topic_0237122679_p45901646111415"></a><a name="en-us_topic_0237122679_p45901646111415"></a>Number of cache hits in the table </p>
</td>
</tr>
<tr id="en-us_topic_0237122679_row159094621414"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122679_p1659034671414"><a name="en-us_topic_0237122679_p1659034671414"></a><a name="en-us_topic_0237122679_p1659034671414"></a>toast_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122679_p859017466148"><a name="en-us_topic_0237122679_p859017466148"></a><a name="en-us_topic_0237122679_p859017466148"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122679_p2590204661411"><a name="en-us_topic_0237122679_p2590204661411"></a><a name="en-us_topic_0237122679_p2590204661411"></a>Number of disk blocks read from the TOAST table (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122679_row459013468144"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122679_p165914466142"><a name="en-us_topic_0237122679_p165914466142"></a><a name="en-us_topic_0237122679_p165914466142"></a>toast_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122679_p185916465144"><a name="en-us_topic_0237122679_p185916465144"></a><a name="en-us_topic_0237122679_p185916465144"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122679_p8591184671416"><a name="en-us_topic_0237122679_p8591184671416"></a><a name="en-us_topic_0237122679_p8591184671416"></a>Number of buffer hits in the TOAST table (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122679_row1759124618143"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122679_p13591184641413"><a name="en-us_topic_0237122679_p13591184641413"></a><a name="en-us_topic_0237122679_p13591184641413"></a>tidx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122679_p1591104641415"><a name="en-us_topic_0237122679_p1591104641415"></a><a name="en-us_topic_0237122679_p1591104641415"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122679_p15929462140"><a name="en-us_topic_0237122679_p15929462140"></a><a name="en-us_topic_0237122679_p15929462140"></a>Number of disk blocks read from the TOAST table index (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122679_row45921946171417"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122679_p65921846151417"><a name="en-us_topic_0237122679_p65921846151417"></a><a name="en-us_topic_0237122679_p65921846151417"></a>tidx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122679_p135921046171411"><a name="en-us_topic_0237122679_p135921046171411"></a><a name="en-us_topic_0237122679_p135921046171411"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122679_p18592144641417"><a name="en-us_topic_0237122679_p18592144641417"></a><a name="en-us_topic_0237122679_p18592144641417"></a>Number of buffer-hits in the TOAST table index (if any) in the table</p>
</td>
</tr>
</tbody>
</table>

