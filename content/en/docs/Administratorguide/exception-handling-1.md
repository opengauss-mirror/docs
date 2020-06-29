# Exception Handling<a name="EN-US_TOPIC_0242215059"></a>

Troubleshoot exceptions detected in the inspection by following instructions in this section.

**Table  1**  Check of openGauss running status

<a name="en-us_topic_0237088800_t839e243ba9874e4d89255e791cd15811"></a>
<table><thead align="left"><tr id="en-us_topic_0237088800_rb4ac09be678a4c478332b72fc54c86da"><th class="cellrowborder" valign="top" width="20.59%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237088800_a924b3b3672d54860a521ec49bc2c2b3a"><a name="en-us_topic_0237088800_a924b3b3672d54860a521ec49bc2c2b3a"></a><a name="en-us_topic_0237088800_a924b3b3672d54860a521ec49bc2c2b3a"></a>Check Item</p>
</th>
<th class="cellrowborder" valign="top" width="22.21%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237088800_ade62aaa16c324c4eadf75810f4af912d"><a name="en-us_topic_0237088800_ade62aaa16c324c4eadf75810f4af912d"></a><a name="en-us_topic_0237088800_ade62aaa16c324c4eadf75810f4af912d"></a>Abnormal Status</p>
</th>
<th class="cellrowborder" valign="top" width="57.199999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237088800_a52bda49fcd244ef18115c4f5ffd4269e"><a name="en-us_topic_0237088800_a52bda49fcd244ef18115c4f5ffd4269e"></a><a name="en-us_topic_0237088800_a52bda49fcd244ef18115c4f5ffd4269e"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088800_r8b77c6ca6c9d48cebfe2154085166c41"><td class="cellrowborder" rowspan="2" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_en-us_topic_0058967589_p652816918481"><a name="en-us_topic_0237088800_en-us_topic_0058967589_p652816918481"></a><a name="en-us_topic_0237088800_en-us_topic_0058967589_p652816918481"></a>CheckClusterState (Checks the <span id="en-us_topic_0237088800_text196493016198"><a name="en-us_topic_0237088800_text196493016198"></a><a name="en-us_topic_0237088800_text196493016198"></a>openGauss</span> status.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_adce0fa99543c4cafbe1a80d682dd4528"><a name="en-us_topic_0237088800_adce0fa99543c4cafbe1a80d682dd4528"></a><a name="en-us_topic_0237088800_adce0fa99543c4cafbe1a80d682dd4528"></a><span id="en-us_topic_0237088800_text1621114337197"><a name="en-us_topic_0237088800_text1621114337197"></a><a name="en-us_topic_0237088800_text1621114337197"></a>openGauss</span> or openGauss instances are not started.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_a7af774e26cbc4ee2a375102e289cdb60"><a name="en-us_topic_0237088800_a7af774e26cbc4ee2a375102e289cdb60"></a><a name="en-us_topic_0237088800_a7af774e26cbc4ee2a375102e289cdb60"></a>Run the following command to start <span id="text3363234105110"><a name="text3363234105110"></a><a name="text3363234105110"></a>openGauss</span> and instances:</p>
<pre class="screen" id="en-us_topic_0237088800_scb4745d1e0354b08964cb64059269abd"><a name="en-us_topic_0237088800_scb4745d1e0354b08964cb64059269abd"></a><a name="en-us_topic_0237088800_scb4745d1e0354b08964cb64059269abd"></a><strong id="en-us_topic_0237088800_a18f6635d1e9247cd8c4429dd314e0da8"><a name="en-us_topic_0237088800_a18f6635d1e9247cd8c4429dd314e0da8"></a><a name="en-us_topic_0237088800_a18f6635d1e9247cd8c4429dd314e0da8"></a>gs_om -t start</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_r995473b742fe4e7298afcde8548fab89"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_a8100a17bcc1543efab3afbd108d4f8fa"><a name="en-us_topic_0237088800_a8100a17bcc1543efab3afbd108d4f8fa"></a><a name="en-us_topic_0237088800_a8100a17bcc1543efab3afbd108d4f8fa"></a>The status of <span id="en-us_topic_0237088800_text11171636201919"><a name="en-us_topic_0237088800_text11171636201919"></a><a name="en-us_topic_0237088800_text11171636201919"></a>openGauss</span> or <span id="text12341109185714"><a name="text12341109185714"></a><a name="text12341109185714"></a>openGauss</span> instances is abnormal.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_ac076faacd5a94c7999c39d9137fa28da"><a name="en-us_topic_0237088800_ac076faacd5a94c7999c39d9137fa28da"></a><a name="en-us_topic_0237088800_ac076faacd5a94c7999c39d9137fa28da"></a>Check the status of hosts and instances. Troubleshoot this issue based on the status information.</p>
<pre class="screen" id="en-us_topic_0237088800_sb2a81ac8ce9d43d186b7df97a888b807"><a name="en-us_topic_0237088800_sb2a81ac8ce9d43d186b7df97a888b807"></a><a name="en-us_topic_0237088800_sb2a81ac8ce9d43d186b7df97a888b807"></a><strong id="en-us_topic_0237088800_abc737b2279a4431c8c128ae587004994"><a name="en-us_topic_0237088800_abc737b2279a4431c8c128ae587004994"></a><a name="en-us_topic_0237088800_abc737b2279a4431c8c128ae587004994"></a>gs_check -i CheckClusterState</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_r86a2ced234c842c7be39c3323a7fb3a6"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p83146282381"><a name="en-us_topic_0237088800_p83146282381"></a><a name="en-us_topic_0237088800_p83146282381"></a>CheckDBParams (Checks database parameters.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1631619281380"><a name="en-us_topic_0237088800_p1631619281380"></a><a name="en-us_topic_0237088800_p1631619281380"></a>Database parameters have incorrect values.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1731892810380"><a name="en-us_topic_0237088800_p1731892810380"></a><a name="en-us_topic_0237088800_p1731892810380"></a>Use the <strong id="b14369143419511"><a name="b14369143419511"></a><a name="b14369143419511"></a>gs_guc</strong> tool to set the parameters to specified values.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row195311634103914"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p14912850123913"><a name="en-us_topic_0237088800_p14912850123913"></a><a name="en-us_topic_0237088800_p14912850123913"></a>CheckDebugSwitch (Checks debug logs.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1591345053914"><a name="en-us_topic_0237088800_p1591345053914"></a><a name="en-us_topic_0237088800_p1591345053914"></a>The log level is incorrect.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p16915155023918"><a name="en-us_topic_0237088800_p16915155023918"></a><a name="en-us_topic_0237088800_p16915155023918"></a>Use the <strong id="b18371153411511"><a name="b18371153411511"></a><a name="b18371153411511"></a>gs_guc</strong> tool to set <strong id="b9371163475111"><a name="b9371163475111"></a><a name="b9371163475111"></a>log_min_messages</strong> to specified content.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row6896171624012"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p788611257409"><a name="en-us_topic_0237088800_p788611257409"></a><a name="en-us_topic_0237088800_p788611257409"></a>CheckDirPermissions (Checks directory permissions.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p108891525124013"><a name="en-us_topic_0237088800_p108891525124013"></a><a name="en-us_topic_0237088800_p108891525124013"></a>The permission for a directory is incorrect.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p489262512403"><a name="en-us_topic_0237088800_p489262512403"></a><a name="en-us_topic_0237088800_p489262512403"></a>Change the directory permission to a specified value (<strong id="b193731534145113"><a name="b193731534145113"></a><a name="b193731534145113"></a>750</strong> or <strong id="b10373183415118"><a name="b10373183415118"></a><a name="b10373183415118"></a>700</strong>).</p>
<pre class="screen" id="en-us_topic_0237088800_screen15893132512404"><a name="en-us_topic_0237088800_screen15893132512404"></a><a name="en-us_topic_0237088800_screen15893132512404"></a><strong id="en-us_topic_0237088800_b289782504019"><a name="en-us_topic_0237088800_b289782504019"></a><a name="en-us_topic_0237088800_b289782504019"></a>chmod 750 </strong><em id="en-us_topic_0237088800_i12898162514408"><a name="en-us_topic_0237088800_i12898162514408"></a><a name="en-us_topic_0237088800_i12898162514408"></a>DIR</em></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row119998504408"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p79996504406"><a name="en-us_topic_0237088800_p79996504406"></a><a name="en-us_topic_0237088800_p79996504406"></a>CheckReadonlyMode (Checks the read-only mode.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1499919508407"><a name="en-us_topic_0237088800_p1499919508407"></a><a name="en-us_topic_0237088800_p1499919508407"></a>The read-only mode is enabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p64041033184214"><a name="en-us_topic_0237088800_p64041033184214"></a><a name="en-us_topic_0237088800_p64041033184214"></a>Verify that the usage of the disk where <span id="en-us_topic_0237088800_text1114721213115"><a name="en-us_topic_0237088800_text1114721213115"></a><a name="en-us_topic_0237088800_text1114721213115"></a>database nodes</span> are located does not exceed the threshold (60% by default) and no other O&amp;M operations are performed.</p>
<pre class="screen" id="en-us_topic_0237088800_screen621121517448"><a name="en-us_topic_0237088800_screen621121517448"></a><a name="en-us_topic_0237088800_screen621121517448"></a><strong id="en-us_topic_0237088800_b84701622114417"><a name="en-us_topic_0237088800_b84701622114417"></a><a name="en-us_topic_0237088800_b84701622114417"></a>gs_check -i CheckDataDiskUsage</strong>
<strong id="en-us_topic_0237088800_b18729929104417"><a name="en-us_topic_0237088800_b18729929104417"></a><a name="en-us_topic_0237088800_b18729929104417"></a>ps ux</strong></pre>
<p id="en-us_topic_0237088800_p09991650174014"><a name="en-us_topic_0237088800_p09991650174014"></a><a name="en-us_topic_0237088800_p09991650174014"></a>Use the <strong id="b17713115312"><a name="b17713115312"></a><a name="b17713115312"></a>gs_guc</strong> tool to disable the read-only mode of <span id="en-us_topic_0237088800_text781373721912"><a name="en-us_topic_0237088800_text781373721912"></a><a name="en-us_topic_0237088800_text781373721912"></a>openGauss</span>.</p>
<pre class="screen" id="en-us_topic_0237088800_screen6249173144516"><a name="en-us_topic_0237088800_screen6249173144516"></a><a name="en-us_topic_0237088800_screen6249173144516"></a><strong id="en-us_topic_0237088800_b153715124518"><a name="en-us_topic_0237088800_b153715124518"></a><a name="en-us_topic_0237088800_b153715124518"></a>gs_guc reload -N all -I all -c 'default_transaction_read_only = off' </strong>
<strong id="en-us_topic_0237088800_b1245113044618"><a name="en-us_topic_0237088800_b1245113044618"></a><a name="en-us_topic_0237088800_b1245113044618"></a>gs_guc reload -N all -I all -c 'default_transaction_read_only = off' </strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row599175395319"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p510012536530"><a name="en-us_topic_0237088800_p510012536530"></a><a name="en-us_topic_0237088800_p510012536530"></a>CheckEnvProfile (Checks environment variables.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p110005325316"><a name="en-us_topic_0237088800_p110005325316"></a><a name="en-us_topic_0237088800_p110005325316"></a>Environment variables are inconsistent.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p610055310537"><a name="en-us_topic_0237088800_p610055310537"></a><a name="en-us_topic_0237088800_p610055310537"></a>Update the environment variable information.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row163163045510"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1763115309555"><a name="en-us_topic_0237088800_p1763115309555"></a><a name="en-us_topic_0237088800_p1763115309555"></a>CheckBlockdev (Checks pre-read blocks.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p6631103017557"><a name="en-us_topic_0237088800_p6631103017557"></a><a name="en-us_topic_0237088800_p6631103017557"></a>The size of a pre-read block is not 16384 KB.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p19256111175917"><a name="en-us_topic_0237088800_p19256111175917"></a><a name="en-us_topic_0237088800_p19256111175917"></a>Use the <strong id="b1537953455111"><a name="b1537953455111"></a><a name="b1537953455111"></a>gs_checkos</strong> tool to set the size of the pre-read block to 16384 KB and write the setting into the auto-startup file.</p>
<pre class="screen" id="en-us_topic_0237088800_screen24791715195913"><a name="en-us_topic_0237088800_screen24791715195913"></a><a name="en-us_topic_0237088800_screen24791715195913"></a><strong id="en-us_topic_0237088800_a37f4b6b7e9f84721a79b514c47f7bd09"><a name="en-us_topic_0237088800_a37f4b6b7e9f84721a79b514c47f7bd09"></a><a name="en-us_topic_0237088800_a37f4b6b7e9f84721a79b514c47f7bd09"></a>gs_checkos -i B3</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row5347173192514"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p153487314252"><a name="en-us_topic_0237088800_p153487314252"></a><a name="en-us_topic_0237088800_p153487314252"></a>CheckCursorNum (Checks the number of cursors.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p193481537259"><a name="en-us_topic_0237088800_p193481537259"></a><a name="en-us_topic_0237088800_p193481537259"></a>The number of cursors fails to be checked.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p3348731258"><a name="en-us_topic_0237088800_p3348731258"></a><a name="en-us_topic_0237088800_p3348731258"></a>Check whether the database is properly connected and whether the <span id="en-us_topic_0237088800_text168091838121910"><a name="en-us_topic_0237088800_text168091838121910"></a><a name="en-us_topic_0237088800_text168091838121910"></a>openGauss</span> status is normal.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row75161117123413"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p10517617103418"><a name="en-us_topic_0237088800_p10517617103418"></a><a name="en-us_topic_0237088800_p10517617103418"></a>CheckPgxcgroup (Checks the data redistribution status.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1551710176342"><a name="en-us_topic_0237088800_p1551710176342"></a><a name="en-us_topic_0237088800_p1551710176342"></a>There are <strong id="b17382163417512"><a name="b17382163417512"></a><a name="b17382163417512"></a>pgxc_group</strong> tables that have not been redistributed.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1451771773411"><a name="en-us_topic_0237088800_p1451771773411"></a><a name="en-us_topic_0237088800_p1451771773411"></a>Proceed with the redistribution.</p>
<pre class="screen" id="en-us_topic_0237088800_screen1876573389"><a name="en-us_topic_0237088800_screen1876573389"></a><a name="en-us_topic_0237088800_screen1876573389"></a><strong id="b6114124181518"><a name="b6114124181518"></a><a name="b6114124181518"></a>gs_expand</strong>, <strong id="b8114184191511"><a name="b8114184191511"></a><a name="b8114184191511"></a>gs_shrink</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row6380929143913"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p83803290393"><a name="en-us_topic_0237088800_p83803290393"></a><a name="en-us_topic_0237088800_p83803290393"></a>CheckDiskFormat (Checks disk configurations.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p193801629163912"><a name="en-us_topic_0237088800_p193801629163912"></a><a name="en-us_topic_0237088800_p193801629163912"></a>Disk configurations are inconsistent between nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p103802298398"><a name="en-us_topic_0237088800_p103802298398"></a><a name="en-us_topic_0237088800_p103802298398"></a>Configure disk specifications to be consistent between nodes.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row7657194664218"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p965714465429"><a name="en-us_topic_0237088800_p965714465429"></a><a name="en-us_topic_0237088800_p965714465429"></a>CheckSpaceUsage (Checks the disk space usage.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p265724624220"><a name="en-us_topic_0237088800_p265724624220"></a><a name="en-us_topic_0237088800_p265724624220"></a>Disk space is insufficient.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p16657204654216"><a name="en-us_topic_0237088800_p16657204654216"></a><a name="en-us_topic_0237088800_p16657204654216"></a>Clear or expand the disk for the directory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row171664210433"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p4717124284316"><a name="en-us_topic_0237088800_p4717124284316"></a><a name="en-us_topic_0237088800_p4717124284316"></a>CheckInodeUsage (Checks the disk index usage.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p167170425439"><a name="en-us_topic_0237088800_p167170425439"></a><a name="en-us_topic_0237088800_p167170425439"></a>Disk indexes are insufficient.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p87171742144316"><a name="en-us_topic_0237088800_p87171742144316"></a><a name="en-us_topic_0237088800_p87171742144316"></a>Clear or expand the disk for the directory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row15876182315493"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1187710234491"><a name="en-us_topic_0237088800_p1187710234491"></a><a name="en-us_topic_0237088800_p1187710234491"></a>CheckSwapMemory (Checks the swap memory.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p178771423144911"><a name="en-us_topic_0237088800_p178771423144911"></a><a name="en-us_topic_0237088800_p178771423144911"></a>The swap memory is greater than the physical memory.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p787872315497"><a name="en-us_topic_0237088800_p787872315497"></a><a name="en-us_topic_0237088800_p787872315497"></a>Reduce or disable the swap memory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row196971126135019"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p196971526205014"><a name="en-us_topic_0237088800_p196971526205014"></a><a name="en-us_topic_0237088800_p196971526205014"></a>CheckLogicalBlock (Checks logical blocks.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1697626125016"><a name="en-us_topic_0237088800_p1697626125016"></a><a name="en-us_topic_0237088800_p1697626125016"></a>The size of a logical block is not 512 KB.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p769712685010"><a name="en-us_topic_0237088800_p769712685010"></a><a name="en-us_topic_0237088800_p769712685010"></a>Use the <strong id="b10390103435111"><a name="b10390103435111"></a><a name="b10390103435111"></a>gs_checkos</strong> tool to set the size of the logical block to 512 KB and write the setting into the auto-startup file.</p>
<pre class="screen" id="en-us_topic_0237088800_screen1815815388527"><a name="en-us_topic_0237088800_screen1815815388527"></a><a name="en-us_topic_0237088800_screen1815815388527"></a><strong id="en-us_topic_0237088800_a4d1dd9b1c51c4ef7b4de4915301fba89"><a name="en-us_topic_0237088800_a4d1dd9b1c51c4ef7b4de4915301fba89"></a><a name="en-us_topic_0237088800_a4d1dd9b1c51c4ef7b4de4915301fba89"></a>gs_checkos -i B4</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row1666211011542"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p166371019544"><a name="en-us_topic_0237088800_p166371019544"></a><a name="en-us_topic_0237088800_p166371019544"></a>CheckIOrequestqueue (Checks I/O requests.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p19663310115419"><a name="en-us_topic_0237088800_p19663310115419"></a><a name="en-us_topic_0237088800_p19663310115419"></a>The requested I/O is not <strong id="b8391234145112"><a name="b8391234145112"></a><a name="b8391234145112"></a>32768</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1466351016543"><a name="en-us_topic_0237088800_p1466351016543"></a><a name="en-us_topic_0237088800_p1466351016543"></a>Use the <strong id="b73921434165113"><a name="b73921434165113"></a><a name="b73921434165113"></a>gs_checkos</strong> tool to set the requested I/O to <strong id="b6392103475110"><a name="b6392103475110"></a><a name="b6392103475110"></a>32768</strong> and write the setting into the auto-startup file.</p>
<pre class="screen" id="en-us_topic_0237088800_screen1411998114112"><a name="en-us_topic_0237088800_screen1411998114112"></a><a name="en-us_topic_0237088800_screen1411998114112"></a><strong id="en-us_topic_0237088800_b16986193163018"><a name="en-us_topic_0237088800_b16986193163018"></a><a name="en-us_topic_0237088800_b16986193163018"></a>gs_checkos -i B4</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row53211254551"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p6321192515557"><a name="en-us_topic_0237088800_p6321192515557"></a><a name="en-us_topic_0237088800_p6321192515557"></a>CheckCurConnCount (Checks the number of current connections.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p10157112913249"><a name="en-us_topic_0237088800_p10157112913249"></a><a name="en-us_topic_0237088800_p10157112913249"></a>The number of current connections exceeds 90% of the allowed maximum number of connections.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p7321725125516"><a name="en-us_topic_0237088800_p7321725125516"></a><a name="en-us_topic_0237088800_p7321725125516"></a>Break idle <span id="en-us_topic_0237088800_text17990203920177"><a name="en-us_topic_0237088800_text17990203920177"></a><a name="en-us_topic_0237088800_text17990203920177"></a>primary database node</span> connections.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row189075218413"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p889115284112"><a name="en-us_topic_0237088800_p889115284112"></a><a name="en-us_topic_0237088800_p889115284112"></a>CheckMaxAsyIOrequests (Checks the maximum number of asynchronous requests.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p4891195294115"><a name="en-us_topic_0237088800_p4891195294115"></a><a name="en-us_topic_0237088800_p4891195294115"></a>The maximum number of asynchronous requests is less than 104857600 or (Number of database instances on the current node x 1048576).</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p989115526414"><a name="en-us_topic_0237088800_p989115526414"></a><a name="en-us_topic_0237088800_p989115526414"></a>Use the <strong id="b13217120182310"><a name="b13217120182310"></a><a name="b13217120182310"></a>gs_checkos</strong> tool to set the maximum number of asynchronous requests to the larger one between 104857600 and (Number of database instances on the current node x 1048576).</p>
<pre class="screen" id="en-us_topic_0237088800_screen16746775301"><a name="en-us_topic_0237088800_screen16746775301"></a><a name="en-us_topic_0237088800_screen16746775301"></a><strong id="en-us_topic_0237088800_b47501716309"><a name="en-us_topic_0237088800_b47501716309"></a><a name="en-us_topic_0237088800_b47501716309"></a>gs_checkos -i B4</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row56992315212"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1270033625"><a name="en-us_topic_0237088800_p1270033625"></a><a name="en-us_topic_0237088800_p1270033625"></a>CheckMTU (Checks MTU values.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1070016317217"><a name="en-us_topic_0237088800_p1070016317217"></a><a name="en-us_topic_0237088800_p1070016317217"></a>MTU values are inconsistent between nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p177001310218"><a name="en-us_topic_0237088800_p177001310218"></a><a name="en-us_topic_0237088800_p177001310218"></a>Set the MTU value on each node to <strong id="b1239614344516"><a name="b1239614344516"></a><a name="b1239614344516"></a>1500</strong> or <strong id="b1639612341515"><a name="b1639612341515"></a><a name="b1639612341515"></a>8192</strong>.</p>
<pre class="screen" id="en-us_topic_0237088800_screen1517605014217"><a name="en-us_topic_0237088800_screen1517605014217"></a><a name="en-us_topic_0237088800_screen1517605014217"></a>ifconfig eth* MTU 1500</pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row11920171815580"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p092171819586"><a name="en-us_topic_0237088800_p092171819586"></a><a name="en-us_topic_0237088800_p092171819586"></a>CheckIOConfigure (Checks I/O configurations.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p20921181811582"><a name="en-us_topic_0237088800_p20921181811582"></a><a name="en-us_topic_0237088800_p20921181811582"></a>The I/O mode is not <strong id="b183981234125118"><a name="b183981234125118"></a><a name="b183981234125118"></a>deadline</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p792131875810"><a name="en-us_topic_0237088800_p792131875810"></a><a name="en-us_topic_0237088800_p792131875810"></a>Use the <strong id="b163992341515"><a name="b163992341515"></a><a name="b163992341515"></a>gs_checkos</strong> tool to set the I/O mode to <strong id="b63994341512"><a name="b63994341512"></a><a name="b63994341512"></a>deadline</strong> and write the setting into the auto-startup file.</p>
<pre class="screen" id="en-us_topic_0237088800_screen12875105016019"><a name="en-us_topic_0237088800_screen12875105016019"></a><a name="en-us_topic_0237088800_screen12875105016019"></a><strong id="en-us_topic_0237088800_b1367013423017"><a name="en-us_topic_0237088800_b1367013423017"></a><a name="en-us_topic_0237088800_b1367013423017"></a>gs_checkos -i B4</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row8957102514412"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p895792513410"><a name="en-us_topic_0237088800_p895792513410"></a><a name="en-us_topic_0237088800_p895792513410"></a>CheckRXTX (Checks the RX/TX value.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p17957192511413"><a name="en-us_topic_0237088800_p17957192511413"></a><a name="en-us_topic_0237088800_p17957192511413"></a>The NIC RX/TX value is not <strong id="b74001834115112"><a name="b74001834115112"></a><a name="b74001834115112"></a>4096</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p109571825345"><a name="en-us_topic_0237088800_p109571825345"></a><a name="en-us_topic_0237088800_p109571825345"></a>Use the <strong id="b17691112415278"><a name="b17691112415278"></a><a name="b17691112415278"></a>checkos</strong> tool to set the NIC RX/TX value to <strong id="b16867227122712"><a name="b16867227122712"></a><a name="b16867227122712"></a>4096</strong> for <span id="en-us_topic_0237088800_text16653113991914"><a name="en-us_topic_0237088800_text16653113991914"></a><a name="en-us_topic_0237088800_text16653113991914"></a>openGauss</span>.</p>
<pre class="screen" id="en-us_topic_0237088800_screen91015216301"><a name="en-us_topic_0237088800_screen91015216301"></a><a name="en-us_topic_0237088800_screen91015216301"></a><strong id="en-us_topic_0237088800_b111316521305"><a name="en-us_topic_0237088800_b111316521305"></a><a name="en-us_topic_0237088800_b111316521305"></a>gs_checkos -i B5</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row3308116315"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p030101117314"><a name="en-us_topic_0237088800_p030101117314"></a><a name="en-us_topic_0237088800_p030101117314"></a>CheckPing (Checks whether the network connection is normal.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p19301711537"><a name="en-us_topic_0237088800_p19301711537"></a><a name="en-us_topic_0237088800_p19301711537"></a>There are <span id="en-us_topic_0237088800_text1047614051913"><a name="en-us_topic_0237088800_text1047614051913"></a><a name="en-us_topic_0237088800_text1047614051913"></a>openGauss</span> IP addresses that cannot be pinged.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p183011115316"><a name="en-us_topic_0237088800_p183011115316"></a><a name="en-us_topic_0237088800_p183011115316"></a>Check the network settings, network status, and firewall status between the abnormal IP addresses.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row5332175511518"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p123325551256"><a name="en-us_topic_0237088800_p123325551256"></a><a name="en-us_topic_0237088800_p123325551256"></a>CheckNetWorkDrop (Checks the network packet loss rate.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1433213554512"><a name="en-us_topic_0237088800_p1433213554512"></a><a name="en-us_topic_0237088800_p1433213554512"></a>The network packet loss rate is greater than 1%.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p73324555514"><a name="en-us_topic_0237088800_p73324555514"></a><a name="en-us_topic_0237088800_p73324555514"></a>Check the network load and status between the corresponding IP addresses.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row72441472713"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p16244071074"><a name="en-us_topic_0237088800_p16244071074"></a><a name="en-us_topic_0237088800_p16244071074"></a>CheckMultiQueue (Checks the NIC multi-queue function.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1424418712712"><a name="en-us_topic_0237088800_p1424418712712"></a><a name="en-us_topic_0237088800_p1424418712712"></a>Multiqueue is not enabled for the NIC, and NIC interruptions are not bound to different CPU cores.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p192441273720"><a name="en-us_topic_0237088800_p192441273720"></a><a name="en-us_topic_0237088800_p192441273720"></a>Enable multiqueue for the NIC, and bind NIC interruptions to different CPU cores.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row103121887813"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p103129812811"><a name="en-us_topic_0237088800_p103129812811"></a><a name="en-us_topic_0237088800_p103129812811"></a>CheckEncoding (Checks the encoding format.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1312082085"><a name="en-us_topic_0237088800_p1312082085"></a><a name="en-us_topic_0237088800_p1312082085"></a>Encoding formats are inconsistent between nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p53121581783"><a name="en-us_topic_0237088800_p53121581783"></a><a name="en-us_topic_0237088800_p53121581783"></a>Write the same encoding format into <strong id="b2406143418516"><a name="b2406143418516"></a><a name="b2406143418516"></a>/etc/profile</strong> for each node.</p>
<pre class="screen" id="en-us_topic_0237088800_screen139872252911"><a name="en-us_topic_0237088800_screen139872252911"></a><a name="en-us_topic_0237088800_screen139872252911"></a><strong id="en-us_topic_0237088800_b69061554381"><a name="en-us_topic_0237088800_b69061554381"></a><a name="en-us_topic_0237088800_b69061554381"></a>echo "export LANG=XXX" &gt;&gt; /etc/profile</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_rca91c9b23806475a890f872d47daf116"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p2027173293713"><a name="en-us_topic_0237088800_p2027173293713"></a><a name="en-us_topic_0237088800_p2027173293713"></a>CheckActQryCount (Checks the archiving mode.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p327143243716"><a name="en-us_topic_0237088800_p327143243716"></a><a name="en-us_topic_0237088800_p327143243716"></a>The archiving mode is enabled, and the archiving directory is not under the <span id="en-us_topic_0237088800_text36791945111715"><a name="en-us_topic_0237088800_text36791945111715"></a><a name="en-us_topic_0237088800_text36791945111715"></a>primary database node</span> directory.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p926183214377"><a name="en-us_topic_0237088800_p926183214377"></a><a name="en-us_topic_0237088800_p926183214377"></a>Disable archiving mode or set the archiving directory to be under the <span id="en-us_topic_0237088800_text195291146121713"><a name="en-us_topic_0237088800_text195291146121713"></a><a name="en-us_topic_0237088800_text195291146121713"></a>primary database node</span> directory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row143013810102"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p43016891011"><a name="en-us_topic_0237088800_p43016891011"></a><a name="en-us_topic_0237088800_p43016891011"></a>CheckFirewall (Checks the firewall.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p17304812106"><a name="en-us_topic_0237088800_p17304812106"></a><a name="en-us_topic_0237088800_p17304812106"></a>The firewall is enabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p0309814102"><a name="en-us_topic_0237088800_p0309814102"></a><a name="en-us_topic_0237088800_p0309814102"></a>Disable the firewall.</p>
<pre class="screen" id="en-us_topic_0237088800_screen168681239101015"><a name="en-us_topic_0237088800_screen168681239101015"></a><a name="en-us_topic_0237088800_screen168681239101015"></a><strong id="en-us_topic_0237088800_b13971145173814"><a name="en-us_topic_0237088800_b13971145173814"></a><a name="en-us_topic_0237088800_b13971145173814"></a>redHat(CentOS)7.x: systemctl status firewalld.service</strong>
<strong id="en-us_topic_0237088800_b797285113388"><a name="en-us_topic_0237088800_b797285113388"></a><a name="en-us_topic_0237088800_b797285113388"></a>redHat(CentOS)6.x: service iptables down</strong>
<strong id="en-us_topic_0237088800_b1597355114383"><a name="en-us_topic_0237088800_b1597355114383"></a><a name="en-us_topic_0237088800_b1597355114383"></a>SuSE: SuSEfirewall2 down</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row139635453144"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1896424513148"><a name="en-us_topic_0237088800_p1896424513148"></a><a name="en-us_topic_0237088800_p1896424513148"></a>CheckKernelVer (Checks kernel versions.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p17965445171411"><a name="en-us_topic_0237088800_p17965445171411"></a><a name="en-us_topic_0237088800_p17965445171411"></a>Kernel versions are inconsistent between nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p188823517155"><a name="en-us_topic_0237088800_p188823517155"></a><a name="en-us_topic_0237088800_p188823517155"></a>Use the <strong id="b841203415513"><a name="b841203415513"></a><a name="b841203415513"></a>gs_replace</strong> tool to replace the nodes whose kernel version is inconsistent with that of others.</p>
<pre class="screen" id="en-us_topic_0237088800_screen7869785161"><a name="en-us_topic_0237088800_screen7869785161"></a><a name="en-us_topic_0237088800_screen7869785161"></a><strong id="en-us_topic_0237088800_b5859164816381"><a name="en-us_topic_0237088800_b5859164816381"></a><a name="en-us_topic_0237088800_b5859164816381"></a>gs_replace</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row91332514163"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p171362517162"><a name="en-us_topic_0237088800_p171362517162"></a><a name="en-us_topic_0237088800_p171362517162"></a>CheckMaxHandle (Checks the maximum number of file handles.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1513122561610"><a name="en-us_topic_0237088800_p1513122561610"></a><a name="en-us_topic_0237088800_p1513122561610"></a>The maximum number of handles is less than 1000000.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p213202561616"><a name="en-us_topic_0237088800_p213202561616"></a><a name="en-us_topic_0237088800_p213202561616"></a>Set the soft and hard limits in the <strong id="b641413342514"><a name="b641413342514"></a><a name="b641413342514"></a>91-nofile.conf</strong> or <strong id="b9414143420514"><a name="b9414143420514"></a><a name="b9414143420514"></a>90-nofile.conf</strong> file to <strong id="b7414434115114"><a name="b7414434115114"></a><a name="b7414434115114"></a>1000000</strong>.</p>
<pre class="screen" id="en-us_topic_0237088800_screen1968194271716"><a name="en-us_topic_0237088800_screen1968194271716"></a><a name="en-us_topic_0237088800_screen1968194271716"></a><strong id="en-us_topic_0237088800_a5744208a05614a3aa44d63fb9ae29de9"><a name="en-us_topic_0237088800_a5744208a05614a3aa44d63fb9ae29de9"></a><a name="en-us_topic_0237088800_a5744208a05614a3aa44d63fb9ae29de9"></a>gs_checkos -i B2</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row139205692318"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1910456112311"><a name="en-us_topic_0237088800_p1910456112311"></a><a name="en-us_topic_0237088800_p1910456112311"></a>CheckNTPD (Checks the time synchronization service.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p8101756122319"><a name="en-us_topic_0237088800_p8101756122319"></a><a name="en-us_topic_0237088800_p8101756122319"></a>The NTPD service is disabled or the time difference is greater than 1 minute.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p17101856122313"><a name="en-us_topic_0237088800_p17101856122313"></a><a name="en-us_topic_0237088800_p17101856122313"></a>Enable the NTPD service and set the time to be consistent.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row685815112315"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p16859411133113"><a name="en-us_topic_0237088800_p16859411133113"></a><a name="en-us_topic_0237088800_p16859411133113"></a>CheckOSVer (Checks OS versions.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1686018119318"><a name="en-us_topic_0237088800_p1686018119318"></a><a name="en-us_topic_0237088800_p1686018119318"></a>Certain OSs are not supported or the OSs are not in the same hybrid list.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p2023921573812"><a name="en-us_topic_0237088800_p2023921573812"></a><a name="en-us_topic_0237088800_p2023921573812"></a>Use <strong id="b20417143485115"><a name="b20417143485115"></a><a name="b20417143485115"></a>gs_replace</strong> to replace abnormal nodes with those supported by OSs or those in the same hybrid list.</p>
<pre class="screen" id="en-us_topic_0237088800_screen108301419143517"><a name="en-us_topic_0237088800_screen108301419143517"></a><a name="en-us_topic_0237088800_screen108301419143517"></a><strong id="en-us_topic_0237088800_b83631943203811"><a name="en-us_topic_0237088800_b83631943203811"></a><a name="en-us_topic_0237088800_b83631943203811"></a>gs_replace</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row11180112703514"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p31811427183514"><a name="en-us_topic_0237088800_p31811427183514"></a><a name="en-us_topic_0237088800_p31811427183514"></a>CheckSysParams (Checks OS parameters.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p618112271359"><a name="en-us_topic_0237088800_p618112271359"></a><a name="en-us_topic_0237088800_p618112271359"></a>OS parameter settings do not meet requirements.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p13181827103517"><a name="en-us_topic_0237088800_p13181827103517"></a><a name="en-us_topic_0237088800_p13181827103517"></a>Use the <strong id="b14419123418510"><a name="b14419123418510"></a><a name="b14419123418510"></a>gs_checkos</strong> tool or manually set parameters to values meeting requirements.</p>
<pre class="screen" id="en-us_topic_0237088800_screen6658241153720"><a name="en-us_topic_0237088800_screen6658241153720"></a><a name="en-us_topic_0237088800_screen6658241153720"></a><strong id="en-us_topic_0237088800_b1266274123710"><a name="en-us_topic_0237088800_b1266274123710"></a><a name="en-us_topic_0237088800_b1266274123710"></a>gs_checkos -i B1</strong>
<strong id="en-us_topic_0237088800_b18837153613816"><a name="en-us_topic_0237088800_b18837153613816"></a><a name="en-us_topic_0237088800_b18837153613816"></a>vim /etc/sysctl.conf</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row489662843819"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1589682816380"><a name="en-us_topic_0237088800_p1589682816380"></a><a name="en-us_topic_0237088800_p1589682816380"></a>CheckTHP (Checks the THP service.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p7896728193820"><a name="en-us_topic_0237088800_p7896728193820"></a><a name="en-us_topic_0237088800_p7896728193820"></a>The THP service is disabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1889712883811"><a name="en-us_topic_0237088800_p1889712883811"></a><a name="en-us_topic_0237088800_p1889712883811"></a>Use the <strong id="b44211334185117"><a name="b44211334185117"></a><a name="b44211334185117"></a>gs_checkos</strong> to enable the THP service.</p>
<pre class="screen" id="en-us_topic_0237088800_screen0120925104013"><a name="en-us_topic_0237088800_screen0120925104013"></a><a name="en-us_topic_0237088800_screen0120925104013"></a><strong id="en-us_topic_0237088800_b15124825194015"><a name="en-us_topic_0237088800_b15124825194015"></a><a name="en-us_topic_0237088800_b15124825194015"></a>gs_checkos -i B6</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row27496316404"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p9749173119408"><a name="en-us_topic_0237088800_p9749173119408"></a><a name="en-us_topic_0237088800_p9749173119408"></a>CheckTimeZone (Checks time zones.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p167491731114015"><a name="en-us_topic_0237088800_p167491731114015"></a><a name="en-us_topic_0237088800_p167491731114015"></a>Time zones are inconsistent between nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p157491631164019"><a name="en-us_topic_0237088800_p157491631164019"></a><a name="en-us_topic_0237088800_p157491631164019"></a>Set time zones to be consistent between nodes.</p>
<pre class="screen" id="en-us_topic_0237088800_screen916593919411"><a name="en-us_topic_0237088800_screen916593919411"></a><a name="en-us_topic_0237088800_screen916593919411"></a><strong id="b1942363419516"><a name="b1942363419516"></a><a name="b1942363419516"></a>cp /usr/share/zoneinfo/</strong><em id="i18423133413517"><a name="i18423133413517"></a><a name="i18423133413517"></a>$primary time zone/$secondary time zone</em><strong id="b9423113418518"><a name="b9423113418518"></a><a name="b9423113418518"></a> /etc/localtime</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row27701488444"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p877113804418"><a name="en-us_topic_0237088800_p877113804418"></a><a name="en-us_topic_0237088800_p877113804418"></a>CheckCPU (Checks the CPU.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1577188114417"><a name="en-us_topic_0237088800_p1577188114417"></a><a name="en-us_topic_0237088800_p1577188114417"></a>CPU usage is high or I/O waiting time is too long.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p177712086441"><a name="en-us_topic_0237088800_p177712086441"></a><a name="en-us_topic_0237088800_p177712086441"></a>Upgrade CPUs or improve disk performance.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row84714914619"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1748194910469"><a name="en-us_topic_0237088800_p1748194910469"></a><a name="en-us_topic_0237088800_p1748194910469"></a>CheckSshdService (Checks the SSHD service.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1048649184612"><a name="en-us_topic_0237088800_p1048649184612"></a><a name="en-us_topic_0237088800_p1048649184612"></a>The SSHD service is disabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p24814914615"><a name="en-us_topic_0237088800_p24814914615"></a><a name="en-us_topic_0237088800_p24814914615"></a>Enable the SSHD service and write the setting into the auto-startup file.</p>
<pre class="screen" id="en-us_topic_0237088800_screen10798193611615"><a name="en-us_topic_0237088800_screen10798193611615"></a><a name="en-us_topic_0237088800_screen10798193611615"></a><strong id="en-us_topic_0237088800_b3683174182517"><a name="en-us_topic_0237088800_b3683174182517"></a><a name="en-us_topic_0237088800_b3683174182517"></a>server sshd start</strong>
<strong id="en-us_topic_0237088800_b768434192519"><a name="en-us_topic_0237088800_b768434192519"></a><a name="en-us_topic_0237088800_b768434192519"></a>echo "server sshd start" &gt;&gt; initFile</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row761012184719"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p8611131811717"><a name="en-us_topic_0237088800_p8611131811717"></a><a name="en-us_topic_0237088800_p8611131811717"></a>CheckSshdConfig (Checks SSHD configurations.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p261131814717"><a name="en-us_topic_0237088800_p261131814717"></a><a name="en-us_topic_0237088800_p261131814717"></a>The SSHD service is incorrectly configured.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p66116181873"><a name="en-us_topic_0237088800_p66116181873"></a><a name="en-us_topic_0237088800_p66116181873"></a>Reconfigure the SSHD service.</p>
<pre class="screen" id="en-us_topic_0237088800_screen07161551184019"><a name="en-us_topic_0237088800_screen07161551184019"></a><a name="en-us_topic_0237088800_screen07161551184019"></a>PasswordAuthentication=no;
MaxStartups=1000;
UseDNS=yes;
ClientAliveInterval=10800/ClientAliveInterval=0</pre>
<p id="en-us_topic_0237088800_p109911155407"><a name="en-us_topic_0237088800_p109911155407"></a><a name="en-us_topic_0237088800_p109911155407"></a>Restart the service.</p>
<pre class="screen" id="en-us_topic_0237088800_screen5262166812"><a name="en-us_topic_0237088800_screen5262166812"></a><a name="en-us_topic_0237088800_screen5262166812"></a><strong id="en-us_topic_0237088800_b16208121182514"><a name="en-us_topic_0237088800_b16208121182514"></a><a name="en-us_topic_0237088800_b16208121182514"></a>server sshd start</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row102017179910"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1020212171913"><a name="en-us_topic_0237088800_p1020212171913"></a><a name="en-us_topic_0237088800_p1020212171913"></a>CheckCrondService (Checks the Crond service.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p102023178910"><a name="en-us_topic_0237088800_p102023178910"></a><a name="en-us_topic_0237088800_p102023178910"></a>The Crond service is disabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p764625919914"><a name="en-us_topic_0237088800_p764625919914"></a><a name="en-us_topic_0237088800_p764625919914"></a>Install and enable the Crond service.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row13989162519134"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p5990192511132"><a name="en-us_topic_0237088800_p5990192511132"></a><a name="en-us_topic_0237088800_p5990192511132"></a>CheckStack (Checks the stack size.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1899019257131"><a name="en-us_topic_0237088800_p1899019257131"></a><a name="en-us_topic_0237088800_p1899019257131"></a>The stack size is less than 3072.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p16990192510139"><a name="en-us_topic_0237088800_p16990192510139"></a><a name="en-us_topic_0237088800_p16990192510139"></a>Use the <strong id="b043643435113"><a name="b043643435113"></a><a name="b043643435113"></a>gs_checkos</strong> tool to set the stack size to <strong id="b114363344515"><a name="b114363344515"></a><a name="b114363344515"></a>3072</strong> and restart the processes with a smaller stack size.</p>
<pre class="screen" id="en-us_topic_0237088800_screen724123081415"><a name="en-us_topic_0237088800_screen724123081415"></a><a name="en-us_topic_0237088800_screen724123081415"></a><strong id="en-us_topic_0237088800_b1724523061413"><a name="en-us_topic_0237088800_b1724523061413"></a><a name="en-us_topic_0237088800_b1724523061413"></a>gs_checkos -i B2</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row1314417920158"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p111449916154"><a name="en-us_topic_0237088800_p111449916154"></a><a name="en-us_topic_0237088800_p111449916154"></a>CheckNoCheckSum (Checks the <strong id="b1023813116369"><a name="b1023813116369"></a><a name="b1023813116369"></a>NoCheckSum</strong> parameter.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1014419941510"><a name="en-us_topic_0237088800_p1014419941510"></a><a name="en-us_topic_0237088800_p1014419941510"></a><strong id="b643713445115"><a name="b643713445115"></a><a name="b643713445115"></a>NoCheckSum</strong> is incorrectly set or its value is inconsistent on each node.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p01441192152"><a name="en-us_topic_0237088800_p01441192152"></a><a name="en-us_topic_0237088800_p01441192152"></a>Set <strong id="b16437113413512"><a name="b16437113413512"></a><a name="b16437113413512"></a>NoCheckSum</strong> to a consistent value on each node. If <strong id="b184373346517"><a name="b184373346517"></a><a name="b184373346517"></a>redHat6.4</strong> or <strong id="b643733415116"><a name="b643733415116"></a><a name="b643733415116"></a>redHat6.5</strong> with the NIC binding mode <strong id="b194371434165115"><a name="b194371434165115"></a><a name="b194371434165115"></a>bond0</strong> exists, set <strong id="b174381434155118"><a name="b174381434155118"></a><a name="b174381434155118"></a>NoCheckSum</strong> to <strong id="b643843455116"><a name="b643843455116"></a><a name="b643843455116"></a>Y</strong>. In other cases, set it to <strong id="b124380341514"><a name="b124380341514"></a><a name="b124380341514"></a>N</strong>.</p>
<pre class="screen" id="en-us_topic_0237088800_screen0838115441612"><a name="en-us_topic_0237088800_screen0838115441612"></a><a name="en-us_topic_0237088800_screen0838115441612"></a><strong id="en-us_topic_0237088800_b13269195722416"><a name="en-us_topic_0237088800_b13269195722416"></a><a name="en-us_topic_0237088800_b13269195722416"></a>echo Y &gt; /sys/module/sctp/parameters/no_checksums</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row1441717382175"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p10417338181711"><a name="en-us_topic_0237088800_p10417338181711"></a><a name="en-us_topic_0237088800_p10417338181711"></a>CheckSysPortRange (Checks OS port configurations.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p164175380179"><a name="en-us_topic_0237088800_p164175380179"></a><a name="en-us_topic_0237088800_p164175380179"></a>OS IP ports are not within the required port range or <span id="en-us_topic_0237088800_text1528414110195"><a name="en-us_topic_0237088800_text1528414110195"></a><a name="en-us_topic_0237088800_text1528414110195"></a>openGauss</span> ports are within the OS IP port range.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1041723851717"><a name="en-us_topic_0237088800_p1041723851717"></a><a name="en-us_topic_0237088800_p1041723851717"></a>Set the OS IP ports within <strong id="b16845153117370"><a name="b16845153117370"></a><a name="b16845153117370"></a>26000</strong> to <strong id="b3427133416374"><a name="b3427133416374"></a><a name="b3427133416374"></a>65535</strong> and set the <span id="en-us_topic_0237088800_text72292425197"><a name="en-us_topic_0237088800_text72292425197"></a><a name="en-us_topic_0237088800_text72292425197"></a>openGauss</span> ports beyond the OS IP port range.</p>
<pre class="screen" id="en-us_topic_0237088800_screen687583717203"><a name="en-us_topic_0237088800_screen687583717203"></a><a name="en-us_topic_0237088800_screen687583717203"></a><strong id="en-us_topic_0237088800_b38842374205"><a name="en-us_topic_0237088800_b38842374205"></a><a name="en-us_topic_0237088800_b38842374205"></a>vim /etc/sysctl.conf</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088800_row15945155362019"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p79451553112013"><a name="en-us_topic_0237088800_p79451553112013"></a><a name="en-us_topic_0237088800_p79451553112013"></a>CheckMemInfo (Checks the memory information.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p19945153142017"><a name="en-us_topic_0237088800_p19945153142017"></a><a name="en-us_topic_0237088800_p19945153142017"></a>Memory sizes are inconsistent between nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p18945105320202"><a name="en-us_topic_0237088800_p18945105320202"></a><a name="en-us_topic_0237088800_p18945105320202"></a>Use physical memory of the same specifications between nodes.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row11243102619211"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p19243526122113"><a name="en-us_topic_0237088800_p19243526122113"></a><a name="en-us_topic_0237088800_p19243526122113"></a>CheckHyperThread (Checks the hyper-threading.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p192432266214"><a name="en-us_topic_0237088800_p192432266214"></a><a name="en-us_topic_0237088800_p192432266214"></a>The CPU hyper-threading is disabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p924322615213"><a name="en-us_topic_0237088800_p924322615213"></a><a name="en-us_topic_0237088800_p924322615213"></a>Enable the CPU hyper-threading.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row1813414713215"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p171341847202114"><a name="en-us_topic_0237088800_p171341847202114"></a><a name="en-us_topic_0237088800_p171341847202114"></a>CheckTableSpace (Checks tablespaces.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p1413454782118"><a name="en-us_topic_0237088800_p1413454782118"></a><a name="en-us_topic_0237088800_p1413454782118"></a>The tablespace path is nested with the <span id="en-us_topic_0237088800_text3379438196"><a name="en-us_topic_0237088800_text3379438196"></a><a name="en-us_topic_0237088800_text3379438196"></a>openGauss</span> path or nested with the path of another tablespace.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p1013412471215"><a name="en-us_topic_0237088800_p1013412471215"></a><a name="en-us_topic_0237088800_p1013412471215"></a>Migrate tablespace data to the tablespace with a valid path.</p>
</td>
</tr>
<tr id="en-us_topic_0237088800_row1710581982312"><td class="cellrowborder" valign="top" width="20.59%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088800_p1910511197237"><a name="en-us_topic_0237088800_p1910511197237"></a><a name="en-us_topic_0237088800_p1910511197237"></a>CheckSctpService (Checks the SCTP service.)</p>
</td>
<td class="cellrowborder" valign="top" width="22.21%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088800_p3105151972315"><a name="en-us_topic_0237088800_p3105151972315"></a><a name="en-us_topic_0237088800_p3105151972315"></a>The SCTP service is disabled.</p>
</td>
<td class="cellrowborder" valign="top" width="57.199999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088800_p8105191917231"><a name="en-us_topic_0237088800_p8105191917231"></a><a name="en-us_topic_0237088800_p8105191917231"></a>Install and enable the SCTP service.</p>
<pre class="screen" id="en-us_topic_0237088800_screen1663719183242"><a name="en-us_topic_0237088800_screen1663719183242"></a><a name="en-us_topic_0237088800_screen1663719183242"></a><strong id="en-us_topic_0237088800_b1364221852411"><a name="en-us_topic_0237088800_b1364221852411"></a><a name="en-us_topic_0237088800_b1364221852411"></a>modprobe sctp</strong></pre>
</td>
</tr>
</tbody>
</table>

