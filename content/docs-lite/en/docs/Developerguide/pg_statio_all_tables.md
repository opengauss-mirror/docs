# PG\_STATIO\_ALL\_TABLES<a name="EN-US_TOPIC_0289900072"></a>

**PG\_STATIO\_ALL\_TABLES**  contains I/O statistics for each table \(including the TOAST table\) in the current database.

**Table  1**  PG\_STATIO\_ALL\_TABLES columns

<a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_t77142dd7ba094796ba21bbf39642846f"></a>
<table><thead align="left"><tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_r4775d389fd7948ff9c97b1cb8281c162"><th class="cellrowborder" valign="top" width="25.85%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a6e6f7f26366f4545b60e87d4216e1602"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a6e6f7f26366f4545b60e87d4216e1602"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a6e6f7f26366f4545b60e87d4216e1602"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="18.33%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad7d41bf83c284c2ba93ac8ac65786274"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad7d41bf83c284c2ba93ac8ac65786274"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad7d41bf83c284c2ba93ac8ac65786274"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="55.82%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad3871754487148dea241020676fa5fc5"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad3871754487148dea241020676fa5fc5"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad3871754487148dea241020676fa5fc5"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_r3439b4ddd48c4d6098a642b70ebfcfaf"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad3e2726ea09d48d98339fdd6a4f41de2"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad3e2726ea09d48d98339fdd6a4f41de2"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad3e2726ea09d48d98339fdd6a4f41de2"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="18.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a0fa7bc1047dd4e69a3a9eaacacc99e49"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a0fa7bc1047dd4e69a3a9eaacacc99e49"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a0fa7bc1047dd4e69a3a9eaacacc99e49"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.82%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ac935b8d95349425682ccba4fa45369d8"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ac935b8d95349425682ccba4fa45369d8"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ac935b8d95349425682ccba4fa45369d8"></a>Table OID</p>
</td>
</tr>
<tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_r3d47e3d2560344e4be28ad2968ed0ee3"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ae9ef2c6a86aa459db7617006ef8c9d7f"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ae9ef2c6a86aa459db7617006ef8c9d7f"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ae9ef2c6a86aa459db7617006ef8c9d7f"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="18.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a1a34ba49eb52471f824452acc3608f3e"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a1a34ba49eb52471f824452acc3608f3e"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a1a34ba49eb52471f824452acc3608f3e"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.82%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a038d9833b3ac4699986b3853594f3a44"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a038d9833b3ac4699986b3853594f3a44"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a038d9833b3ac4699986b3853594f3a44"></a>Name of the schema that the table is in</p>
</td>
</tr>
<tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_r271e421a8f9f4d6e81aa19cc1b62d311"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a30a9ff3923534b00893117a0463e8eae"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a30a9ff3923534b00893117a0463e8eae"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a30a9ff3923534b00893117a0463e8eae"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="18.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a4f8ac6bfbb7f448d92f7f3c7f090dea7"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a4f8ac6bfbb7f448d92f7f3c7f090dea7"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a4f8ac6bfbb7f448d92f7f3c7f090dea7"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="55.82%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a6af7442f22844ef2b59216837917dc10"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a6af7442f22844ef2b59216837917dc10"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a6af7442f22844ef2b59216837917dc10"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_rbf06324329214c73843cffccd1ba95d4"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aedbde10e857443458c40ad019b0cbe95"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aedbde10e857443458c40ad019b0cbe95"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aedbde10e857443458c40ad019b0cbe95"></a>heap_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="18.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ae66ca1dbdc2f49e49cd97976666c1e40"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ae66ca1dbdc2f49e49cd97976666c1e40"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ae66ca1dbdc2f49e49cd97976666c1e40"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a79c5b20b06cd4d15a420d493bf036332"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a79c5b20b06cd4d15a420d493bf036332"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a79c5b20b06cd4d15a420d493bf036332"></a>Number of disk blocks read from the table</p>
</td>
</tr>
<tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_rc2a81e02496c4e90bf65578a849c0a47"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a70cd6a874d93492f869c0afb4ea4f008"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a70cd6a874d93492f869c0afb4ea4f008"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a70cd6a874d93492f869c0afb4ea4f008"></a>heap_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="18.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a715dfd39322b43429bbc94f7dd962367"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a715dfd39322b43429bbc94f7dd962367"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a715dfd39322b43429bbc94f7dd962367"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a2cd01e1f3da44d9b870f8c5874f7da4e"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a2cd01e1f3da44d9b870f8c5874f7da4e"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a2cd01e1f3da44d9b870f8c5874f7da4e"></a>Number of cache hits in the table</p>
</td>
</tr>
<tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ra34e2bff12274203bcc5900356706703"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aab95ca3f87e44b018bf0cf708830f731"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aab95ca3f87e44b018bf0cf708830f731"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aab95ca3f87e44b018bf0cf708830f731"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="18.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a46eab030473b45bab1d1af4df476b3a1"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a46eab030473b45bab1d1af4df476b3a1"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a46eab030473b45bab1d1af4df476b3a1"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a5ccbf7cdb9e14c6aa5bda23a5d0c00b4"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a5ccbf7cdb9e14c6aa5bda23a5d0c00b4"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a5ccbf7cdb9e14c6aa5bda23a5d0c00b4"></a>Number of disk blocks read from all indexes in the table</p>
</td>
</tr>
<tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_r8015508c6f7f40c2bbfdcccdfc9e6cf0"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a19a9ac17358c4e0f9c1cd8b34c8d51ce"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a19a9ac17358c4e0f9c1cd8b34c8d51ce"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a19a9ac17358c4e0f9c1cd8b34c8d51ce"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="18.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ac025ee09b4eb4e8880d3f6df5c84c293"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ac025ee09b4eb4e8880d3f6df5c84c293"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ac025ee09b4eb4e8880d3f6df5c84c293"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad12934a86b2048ffa1a355db8e0719f7"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad12934a86b2048ffa1a355db8e0719f7"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad12934a86b2048ffa1a355db8e0719f7"></a>Number of cache hits in indexes in the table</p>
</td>
</tr>
<tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_r0d98613e6988429188e6d1c6e7e5b987"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aa53cd5469ca1433f8deea2820f3719b4"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aa53cd5469ca1433f8deea2820f3719b4"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aa53cd5469ca1433f8deea2820f3719b4"></a>toast_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="18.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aeda6e6651fda4c2ab820f1612a9e16a7"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aeda6e6651fda4c2ab820f1612a9e16a7"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aeda6e6651fda4c2ab820f1612a9e16a7"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a7f246986bf3f46ff987aa231569dbc73"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a7f246986bf3f46ff987aa231569dbc73"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a7f246986bf3f46ff987aa231569dbc73"></a>Number of disk blocks read from the TOAST table (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_r8a162cb218af460c9c1ce57d0484a87e"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a3468ddf01d40439cbbc58fa423d9e4a6"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a3468ddf01d40439cbbc58fa423d9e4a6"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a3468ddf01d40439cbbc58fa423d9e4a6"></a>toast_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="18.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a40304754e8114b01a594ef0972a26138"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a40304754e8114b01a594ef0972a26138"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a40304754e8114b01a594ef0972a26138"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aa11824b6f64f4862bdc2185af37fbd68"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aa11824b6f64f4862bdc2185af37fbd68"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_aa11824b6f64f4862bdc2185af37fbd68"></a>Number of buffer hits in the TOAST table (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ra8169bdf3d884a0993eed1813dad5880"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a90b296e602a0479dbcc782579171e992"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a90b296e602a0479dbcc782579171e992"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a90b296e602a0479dbcc782579171e992"></a>tidx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="18.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_af1c8477d2f8f46778d61a7c5cd399168"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_af1c8477d2f8f46778d61a7c5cd399168"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_af1c8477d2f8f46778d61a7c5cd399168"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a636e6939b0b04fec87106da9c211cac7"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a636e6939b0b04fec87106da9c211cac7"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a636e6939b0b04fec87106da9c211cac7"></a>Number of disk blocks read from the TOAST table index (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ra165e6b5d2f24acdbb416b88bb9053a5"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a70e39525e9064018bd4ce83b5ac4736c"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a70e39525e9064018bd4ce83b5ac4736c"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_a70e39525e9064018bd4ce83b5ac4736c"></a>tidx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="18.33%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad48c9d7fe57645729c5ce63838a2adf2"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad48c9d7fe57645729c5ce63838a2adf2"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ad48c9d7fe57645729c5ce63838a2adf2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="55.82%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ae3623ec1063b499f8befe4b8a8e2ef0a"><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ae3623ec1063b499f8befe4b8a8e2ef0a"></a><a name="en-us_topic_0283136954_en-us_topic_0237122459_en-us_topic_0059778203_ae3623ec1063b499f8befe4b8a8e2ef0a"></a>Number of buffer-hits in the TOAST table index (if any) in the table</p>
</td>
</tr>
</tbody>
</table>

