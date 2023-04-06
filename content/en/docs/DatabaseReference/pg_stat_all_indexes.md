# PG\_STAT\_ALL\_INDEXES<a name="EN-US_TOPIC_0289900643"></a>

**PG\_STAT\_ALL\_INDEXES**  contains one row for each index in the current database, showing statistics about accesses to that specific index. 

Indexes can be used via either simple index scans or "bitmap" index scans. In a bitmap scan the output of several indexes can be combined via AND or OR rules, so it is difficult to associate individual heap row fetches with specific indexes when a bitmap scan is used. Therefore, a bitmap scan increments the  **pg\_stat\_all\_indexes.idx\_tup\_read**  count\(s\) for the index\(es\) it uses, and it increments the  **pg\_stat\_all\_tables.idx\_tup\_fetch**  count for the table, but it does not affect  **pg\_stat\_all\_indexes.idx\_tup\_fetch**.

**Table  1**  PG\_STAT\_ALL\_INDEXES columns

<a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_tccb93092532a4e6ea2ce163e348d41ff"></a>
<table><thead align="left"><tr id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_r86138b258a054a1a8928785d1450d10a"><th class="cellrowborder" valign="top" width="25.85%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a049f97d54e454d7791ee730b01526699"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a049f97d54e454d7791ee730b01526699"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a049f97d54e454d7791ee730b01526699"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="23.78%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a0a8b839e03894b258ca8b582b40c0482"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a0a8b839e03894b258ca8b582b40c0482"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a0a8b839e03894b258ca8b582b40c0482"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="50.370000000000005%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_abc8edb6bd23d48a7954edbf6c9ea9b44"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_abc8edb6bd23d48a7954edbf6c9ea9b44"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_abc8edb6bd23d48a7954edbf6c9ea9b44"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_r31f8d177fcff4715bb2de0eabe92a1d1"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_adf5075e6c8a0421f8b27ae3e48b1677e"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_adf5075e6c8a0421f8b27ae3e48b1677e"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_adf5075e6c8a0421f8b27ae3e48b1677e"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a30d3c7b2dbf6405a977a90aed14fdaae"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a30d3c7b2dbf6405a977a90aed14fdaae"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a30d3c7b2dbf6405a977a90aed14fdaae"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a3338ba389ec149e2b1bc0aa05c8bb957"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a3338ba389ec149e2b1bc0aa05c8bb957"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a3338ba389ec149e2b1bc0aa05c8bb957"></a>OID of the table for this index</p>
</td>
</tr>
<tr id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_r8e4ec91ae8044fa0b590802879cc8f77"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a8e3c5b2ed12a4f2a915f97e9fb12e269"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a8e3c5b2ed12a4f2a915f97e9fb12e269"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a8e3c5b2ed12a4f2a915f97e9fb12e269"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ac9f03b46140a4b37996ae3e59dfff30d"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ac9f03b46140a4b37996ae3e59dfff30d"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ac9f03b46140a4b37996ae3e59dfff30d"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_afea7c2e19fd64913b98877c67ccb5349"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_afea7c2e19fd64913b98877c67ccb5349"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_afea7c2e19fd64913b98877c67ccb5349"></a>OID of this index </p>
</td>
</tr>
<tr id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_r1b0e66135c40412f958835eeb5995c46"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae1f2b39ac4824c79a49d569b6c92e6e2"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae1f2b39ac4824c79a49d569b6c92e6e2"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae1f2b39ac4824c79a49d569b6c92e6e2"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a17a6f0d4fba44280810632514acd0bb2"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a17a6f0d4fba44280810632514acd0bb2"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a17a6f0d4fba44280810632514acd0bb2"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ad4b8ff52bb5342eea1cdc8a12b318378"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ad4b8ff52bb5342eea1cdc8a12b318378"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ad4b8ff52bb5342eea1cdc8a12b318378"></a>Name of the schema that the index is in</p>
</td>
</tr>
<tr id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_r35d65a6c89764addad1b8a1b0b14b1cb"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_abf85b027a044429faf5fca039d9b627a"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_abf85b027a044429faf5fca039d9b627a"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_abf85b027a044429faf5fca039d9b627a"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a7172240503b84464b501eab095f82144"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a7172240503b84464b501eab095f82144"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a7172240503b84464b501eab095f82144"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ab60afe5cd6ff4bb49e1a825f63b9921a"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ab60afe5cd6ff4bb49e1a825f63b9921a"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ab60afe5cd6ff4bb49e1a825f63b9921a"></a>Name of the table for the index</p>
</td>
</tr>
<tr id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_r230ac5e5e22b4150bc6be8405fdc8c73"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a500d579e6ffb460398a2eec790fd5143"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a500d579e6ffb460398a2eec790fd5143"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a500d579e6ffb460398a2eec790fd5143"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae844a749aba24827b4597c8a181bbb44"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae844a749aba24827b4597c8a181bbb44"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae844a749aba24827b4597c8a181bbb44"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ad4ac91db3a39438480db6446376ef2c8"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ad4ac91db3a39438480db6446376ef2c8"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ad4ac91db3a39438480db6446376ef2c8"></a>Index name</p>
</td>
</tr>
<tr id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_rb6cb7ca3ac0d4436bec5dcd63e294e29"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae8e8aca4521848e483758c5a06b82da8"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae8e8aca4521848e483758c5a06b82da8"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae8e8aca4521848e483758c5a06b82da8"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae2561b4756b14097be924077c47c7d1f"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae2561b4756b14097be924077c47c7d1f"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ae2561b4756b14097be924077c47c7d1f"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a87428d531e004524bc6ec6a8bc810ac7"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a87428d531e004524bc6ec6a8bc810ac7"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a87428d531e004524bc6ec6a8bc810ac7"></a>Number of index scans initiated on the index</p>
</td>
</tr>
<tr id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_re552ac805c0c4b10aaae2f7ef2d97404"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ad8f6b71236a44663bc7bdccaa6248827"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ad8f6b71236a44663bc7bdccaa6248827"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_ad8f6b71236a44663bc7bdccaa6248827"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a2263696d0fa9465c84ae0134ad62b640"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a2263696d0fa9465c84ae0134ad62b640"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a2263696d0fa9465c84ae0134ad62b640"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a23ec992fdbbc4e2e8e56cdb0c340ba95"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a23ec992fdbbc4e2e8e56cdb0c340ba95"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a23ec992fdbbc4e2e8e56cdb0c340ba95"></a>Number of index entries returned by scans on the index</p>
</td>
</tr>
<tr id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_r38bb816df81a48c28d0cc8bbb2fa6314"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_aab04b63cdf5a45a0babe2a468e13c4fa"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_aab04b63cdf5a45a0babe2a468e13c4fa"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_aab04b63cdf5a45a0babe2a468e13c4fa"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_acf356aa03e8842e48bcaaa0e895a995a"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_acf356aa03e8842e48bcaaa0e895a995a"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_acf356aa03e8842e48bcaaa0e895a995a"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a08dc3e48cba94946b174cb6c0643ad2a"><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a08dc3e48cba94946b174cb6c0643ad2a"></a><a name="en-us_topic_0283136939_en-us_topic_0237122441_en-us_topic_0059777984_a08dc3e48cba94946b174cb6c0643ad2a"></a>Number of live table rows fetched by simple index scans using the index </p>
</td>
</tr>
</tbody>
</table>

