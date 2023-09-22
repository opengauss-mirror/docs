# PG\_STAT\_ALL\_INDEXES

PG\_STAT\_ALL\_INDEXES视图将包含当前数据库中的每个索引行，显示访问特定索引的统计。

索引可以通过简单的索引扫描或“位图”索引扫描进行使用。位图扫描中几个索引的输出可以通过AND或者OR规则进行组合， 因此当使用位图扫描的时候，很难将独立堆行抓取与特定索引进行组合，因此，一个位图扫描增加pg\_stat\_all\_indexes.idx\_tup\_read使用索引计数，并且增加pg\_stat\_all\_tables.idx\_tup\_fetch表计数，但不影响pg\_stat\_all\_indexes.idx\_tup\_fetch。

**表 1**  PG\_STAT\_ALL\_INDEXES字段

<a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_tccb93092532a4e6ea2ce163e348d41ff"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_r86138b258a054a1a8928785d1450d10a"><th class="cellrowborder" valign="top" width="25.85%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a049f97d54e454d7791ee730b01526699"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a049f97d54e454d7791ee730b01526699"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a049f97d54e454d7791ee730b01526699"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="23.78%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a0a8b839e03894b258ca8b582b40c0482"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a0a8b839e03894b258ca8b582b40c0482"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a0a8b839e03894b258ca8b582b40c0482"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="50.370000000000005%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_abc8edb6bd23d48a7954edbf6c9ea9b44"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_abc8edb6bd23d48a7954edbf6c9ea9b44"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_abc8edb6bd23d48a7954edbf6c9ea9b44"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_r31f8d177fcff4715bb2de0eabe92a1d1"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_adf5075e6c8a0421f8b27ae3e48b1677e"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_adf5075e6c8a0421f8b27ae3e48b1677e"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_adf5075e6c8a0421f8b27ae3e48b1677e"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a30d3c7b2dbf6405a977a90aed14fdaae"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a30d3c7b2dbf6405a977a90aed14fdaae"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a30d3c7b2dbf6405a977a90aed14fdaae"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a3338ba389ec149e2b1bc0aa05c8bb957"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a3338ba389ec149e2b1bc0aa05c8bb957"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a3338ba389ec149e2b1bc0aa05c8bb957"></a>这个索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_r8e4ec91ae8044fa0b590802879cc8f77"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a8e3c5b2ed12a4f2a915f97e9fb12e269"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a8e3c5b2ed12a4f2a915f97e9fb12e269"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a8e3c5b2ed12a4f2a915f97e9fb12e269"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ac9f03b46140a4b37996ae3e59dfff30d"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ac9f03b46140a4b37996ae3e59dfff30d"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ac9f03b46140a4b37996ae3e59dfff30d"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_afea7c2e19fd64913b98877c67ccb5349"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_afea7c2e19fd64913b98877c67ccb5349"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_afea7c2e19fd64913b98877c67ccb5349"></a>索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_r1b0e66135c40412f958835eeb5995c46"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae1f2b39ac4824c79a49d569b6c92e6e2"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae1f2b39ac4824c79a49d569b6c92e6e2"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae1f2b39ac4824c79a49d569b6c92e6e2"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a17a6f0d4fba44280810632514acd0bb2"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a17a6f0d4fba44280810632514acd0bb2"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a17a6f0d4fba44280810632514acd0bb2"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ad4b8ff52bb5342eea1cdc8a12b318378"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ad4b8ff52bb5342eea1cdc8a12b318378"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ad4b8ff52bb5342eea1cdc8a12b318378"></a>索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_r35d65a6c89764addad1b8a1b0b14b1cb"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_abf85b027a044429faf5fca039d9b627a"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_abf85b027a044429faf5fca039d9b627a"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_abf85b027a044429faf5fca039d9b627a"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a7172240503b84464b501eab095f82144"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a7172240503b84464b501eab095f82144"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a7172240503b84464b501eab095f82144"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ab60afe5cd6ff4bb49e1a825f63b9921a"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ab60afe5cd6ff4bb49e1a825f63b9921a"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ab60afe5cd6ff4bb49e1a825f63b9921a"></a>索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_r230ac5e5e22b4150bc6be8405fdc8c73"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a500d579e6ffb460398a2eec790fd5143"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a500d579e6ffb460398a2eec790fd5143"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a500d579e6ffb460398a2eec790fd5143"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae844a749aba24827b4597c8a181bbb44"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae844a749aba24827b4597c8a181bbb44"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae844a749aba24827b4597c8a181bbb44"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ad4ac91db3a39438480db6446376ef2c8"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ad4ac91db3a39438480db6446376ef2c8"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ad4ac91db3a39438480db6446376ef2c8"></a>索引名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_rb6cb7ca3ac0d4436bec5dcd63e294e29"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae8e8aca4521848e483758c5a06b82da8"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae8e8aca4521848e483758c5a06b82da8"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae8e8aca4521848e483758c5a06b82da8"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae2561b4756b14097be924077c47c7d1f"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae2561b4756b14097be924077c47c7d1f"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ae2561b4756b14097be924077c47c7d1f"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a87428d531e004524bc6ec6a8bc810ac7"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a87428d531e004524bc6ec6a8bc810ac7"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a87428d531e004524bc6ec6a8bc810ac7"></a>索引上开始的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_re552ac805c0c4b10aaae2f7ef2d97404"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ad8f6b71236a44663bc7bdccaa6248827"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ad8f6b71236a44663bc7bdccaa6248827"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_ad8f6b71236a44663bc7bdccaa6248827"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a2263696d0fa9465c84ae0134ad62b640"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a2263696d0fa9465c84ae0134ad62b640"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a2263696d0fa9465c84ae0134ad62b640"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a23ec992fdbbc4e2e8e56cdb0c340ba95"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a23ec992fdbbc4e2e8e56cdb0c340ba95"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a23ec992fdbbc4e2e8e56cdb0c340ba95"></a>通过索引上扫描返回的索引项数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_r38bb816df81a48c28d0cc8bbb2fa6314"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_aab04b63cdf5a45a0babe2a468e13c4fa"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_aab04b63cdf5a45a0babe2a468e13c4fa"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_aab04b63cdf5a45a0babe2a468e13c4fa"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="23.78%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_acf356aa03e8842e48bcaaa0e895a995a"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_acf356aa03e8842e48bcaaa0e895a995a"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_acf356aa03e8842e48bcaaa0e895a995a"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="50.370000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a08dc3e48cba94946b174cb6c0643ad2a"><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a08dc3e48cba94946b174cb6c0643ad2a"></a><a name="zh-cn_topic_0283136939_zh-cn_topic_0237122441_zh-cn_topic_0059777984_a08dc3e48cba94946b174cb6c0643ad2a"></a>通过使用索引的简单索引扫描抓取的活表行数。</p>
</td>
</tr>
</tbody>
</table>
