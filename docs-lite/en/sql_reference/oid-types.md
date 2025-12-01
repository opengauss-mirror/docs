# OID Types<a name="EN-US_TOPIC_0289900113"></a>

OIDs are used internally by openGauss as primary keys for various system catalogs. OIDs are not added to user-created tables by the system. The OID type represents an object identifier.

The OID type is currently implemented as an unsigned four-byte integer. So, using a user-created table's  **OID**  column as a primary key is discouraged.

**Table  1**  OID types

<a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_t83eb819d6e3f45db979f88397c65421d"></a>
<table><thead align="left"><tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_r34d84b881d594a51ace2c654b306f692"><th class="cellrowborder" valign="top" width="17%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_en-us_topic_0058965881_p775848016408"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_en-us_topic_0058965881_p775848016408"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_en-us_topic_0058965881_p775848016408"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="15%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7a10ab11c31442ea9b4d18b26428634f"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7a10ab11c31442ea9b4d18b26428634f"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7a10ab11c31442ea9b4d18b26428634f"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="37%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a0f87fc92c30d449b815861c2aa8c1399"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a0f87fc92c30d449b815861c2aa8c1399"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a0f87fc92c30d449b815861c2aa8c1399"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="31%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a9d7a2dac35b2493baa2dd8ac8e34fb6c"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a9d7a2dac35b2493baa2dd8ac8e34fb6c"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a9d7a2dac35b2493baa2dd8ac8e34fb6c"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_r0c3c35d793034cdfb65ab53383888943"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a2dd178cefe8a404d86efb6c531ac318d"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a2dd178cefe8a404d86efb6c531ac318d"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a2dd178cefe8a404d86efb6c531ac318d"></a>OID</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5b306e3980574be7802c42333645eae8"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5b306e3980574be7802c42333645eae8"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5b306e3980574be7802c42333645eae8"></a>N/A</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5e7cdd6ba1624d91b6b8ae1f4ef860e6"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5e7cdd6ba1624d91b6b8ae1f4ef860e6"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5e7cdd6ba1624d91b6b8ae1f4ef860e6"></a>Numeric object identifier</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a85ac3b05f4fe4ea798b5fe622292f8f0"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a85ac3b05f4fe4ea798b5fe622292f8f0"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a85ac3b05f4fe4ea798b5fe622292f8f0"></a>564182</p>
</td>
</tr>
<tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_r94150d93fb2240f1aa14c6c3266937c1"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a32b1d895f847443c8150234970c33a3a"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a32b1d895f847443c8150234970c33a3a"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a32b1d895f847443c8150234970c33a3a"></a>CID</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aeee1cae9de4c41d4bc99e5b7a6839db7"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aeee1cae9de4c41d4bc99e5b7a6839db7"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aeee1cae9de4c41d4bc99e5b7a6839db7"></a>N/A</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_afc8abf4264a243e490a913e5a67bd3ec"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_afc8abf4264a243e490a913e5a67bd3ec"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_afc8abf4264a243e490a913e5a67bd3ec"></a>Command identifier. This is the data type of the system columns <strong id="en-us_topic_0237121960_b154401816141919"><a name="en-us_topic_0237121960_b154401816141919"></a><a name="en-us_topic_0237121960_b154401816141919"></a>cmin</strong> and <strong id="en-us_topic_0237121960_b4285151814192"><a name="en-us_topic_0237121960_b4285151814192"></a><a name="en-us_topic_0237121960_b4285151814192"></a>cmax</strong>. Command identifiers are 32-bit quantities.</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a0c02a6ea36f84fafbe5c5772f849f3ee"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a0c02a6ea36f84fafbe5c5772f849f3ee"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a0c02a6ea36f84fafbe5c5772f849f3ee"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_rbf776c6ed6674e6bbb5ceed91d0418ac"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a3f6c367d366a43bf85aec80be2c0297a"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a3f6c367d366a43bf85aec80be2c0297a"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a3f6c367d366a43bf85aec80be2c0297a"></a>XID</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a81a191c65815453399464909025ee9ed"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a81a191c65815453399464909025ee9ed"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a81a191c65815453399464909025ee9ed"></a>N/A</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af338c33823764d349e2a4b621cf6c671"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af338c33823764d349e2a4b621cf6c671"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af338c33823764d349e2a4b621cf6c671"></a>Transaction identifier. This is the data type of the system columns <strong id="en-us_topic_0237121960_b2054214692012"><a name="en-us_topic_0237121960_b2054214692012"></a><a name="en-us_topic_0237121960_b2054214692012"></a>xmin</strong> and <strong id="en-us_topic_0237121960_b1380712742014"><a name="en-us_topic_0237121960_b1380712742014"></a><a name="en-us_topic_0237121960_b1380712742014"></a>xmax</strong>. Transaction identifiers are also 64-bit quantities.</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5fd85f63cd024c5d8fd03c763e74a761"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5fd85f63cd024c5d8fd03c763e74a761"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5fd85f63cd024c5d8fd03c763e74a761"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_r6bf4890ee77f4c9195e49130cc113558"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a80861ccee716451cb0dee0544a221545"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a80861ccee716451cb0dee0544a221545"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a80861ccee716451cb0dee0544a221545"></a>TID</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a893eb479cbae482b8096b0d493fa34be"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a893eb479cbae482b8096b0d493fa34be"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a893eb479cbae482b8096b0d493fa34be"></a>N/A</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af6557612d40a40b9848c7af67857fc72"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af6557612d40a40b9848c7af67857fc72"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af6557612d40a40b9848c7af67857fc72"></a>Row identifier. This is the data type of the system column <strong id="en-us_topic_0237121960_b14739173411209"><a name="en-us_topic_0237121960_b14739173411209"></a><a name="en-us_topic_0237121960_b14739173411209"></a>ctid</strong>. A row ID is a pair (block number, tuple index within block) that identifies the physical location of the row within its table.</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7edd12bc57b5488fb3137cae27a9fce4"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7edd12bc57b5488fb3137cae27a9fce4"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7edd12bc57b5488fb3137cae27a9fce4"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_r37931c9869e9417d8601fb09cd53bffd"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_acca9cd7c44e048e89a3aca1318e9b02b"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_acca9cd7c44e048e89a3aca1318e9b02b"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_acca9cd7c44e048e89a3aca1318e9b02b"></a>REGCONFIG</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af14ebd417f4a484ab038b1c170ea88e9"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af14ebd417f4a484ab038b1c170ea88e9"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af14ebd417f4a484ab038b1c170ea88e9"></a>pg_ts_config</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a68498626c30548d0906f01608ce8b18f"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a68498626c30548d0906f01608ce8b18f"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a68498626c30548d0906f01608ce8b18f"></a>Text search configuration</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_ac4b0d10e5f9545db958b6d44e8201147"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_ac4b0d10e5f9545db958b6d44e8201147"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_ac4b0d10e5f9545db958b6d44e8201147"></a>english</p>
</td>
</tr>
<tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_r32ff5c635d6a462b8e7a01986c0fa988"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aed25f3c723f4422095c199e0ee519fd3"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aed25f3c723f4422095c199e0ee519fd3"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aed25f3c723f4422095c199e0ee519fd3"></a>REGDICTIONARY</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_en-us_topic_0058965881_p52608164234"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_en-us_topic_0058965881_p52608164234"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_en-us_topic_0058965881_p52608164234"></a>pg_ts_dict</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5ee4e9182f88405287ac615d853eb43b"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5ee4e9182f88405287ac615d853eb43b"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a5ee4e9182f88405287ac615d853eb43b"></a>Text search dictionary</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7536edd146bb4c6c899d7aac13af1aba"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7536edd146bb4c6c899d7aac13af1aba"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7536edd146bb4c6c899d7aac13af1aba"></a>simple</p>
</td>
</tr>
<tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_r10941eb838d4414a92981652d2f2679f"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_acc73fc35f00241139a0391861cc54cd9"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_acc73fc35f00241139a0391861cc54cd9"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_acc73fc35f00241139a0391861cc54cd9"></a>REGOPER</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a1f54655d42e04eb38b3e5112271dbd4d"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a1f54655d42e04eb38b3e5112271dbd4d"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a1f54655d42e04eb38b3e5112271dbd4d"></a>pg_operator</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7730ac71c6af466287ae331db05e1634"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7730ac71c6af466287ae331db05e1634"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7730ac71c6af466287ae331db05e1634"></a>Operator name</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aaef54863d74643a297eea7f48bebf29c"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aaef54863d74643a297eea7f48bebf29c"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aaef54863d74643a297eea7f48bebf29c"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_r6ef627fe1f9042a49a9bfd5df14e9432"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a449498b4b8cd4739a4e285a38f86cbb6"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a449498b4b8cd4739a4e285a38f86cbb6"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a449498b4b8cd4739a4e285a38f86cbb6"></a>REGOPERATOR</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a2999bb1c05894185a6da7978ae086bab"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a2999bb1c05894185a6da7978ae086bab"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a2999bb1c05894185a6da7978ae086bab"></a>pg_operator</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a06f63f6349554a0ea83dc66d53cfc0c7"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a06f63f6349554a0ea83dc66d53cfc0c7"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a06f63f6349554a0ea83dc66d53cfc0c7"></a>Operator with parameter types</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aad97e061b323470cb8484137069599ba"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aad97e061b323470cb8484137069599ba"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aad97e061b323470cb8484137069599ba"></a>*(integer,integer) or -(NONE,integer)</p>
</td>
</tr>
<tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_rd29d506f6554462dab71e117cff49768"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af709bec4bff945e19907d77f37612ae4"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af709bec4bff945e19907d77f37612ae4"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af709bec4bff945e19907d77f37612ae4"></a>REGPROC</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a1b5b93680c634c708ead2339e6fa12b6"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a1b5b93680c634c708ead2339e6fa12b6"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a1b5b93680c634c708ead2339e6fa12b6"></a>pg_proc</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a82b1ace0fa1c42898f6b49d0e858db2d"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a82b1ace0fa1c42898f6b49d0e858db2d"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a82b1ace0fa1c42898f6b49d0e858db2d"></a>Function name</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aa521a0a2bd1e47f3afd8be4db0210c45"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aa521a0a2bd1e47f3afd8be4db0210c45"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aa521a0a2bd1e47f3afd8be4db0210c45"></a>sum</p>
</td>
</tr>
<tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_r60637a1a265f48078447d462c37c8133"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a583f53971cd147f6bbcbdfd7a8789e29"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a583f53971cd147f6bbcbdfd7a8789e29"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a583f53971cd147f6bbcbdfd7a8789e29"></a>REGPROCEDURE</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a44bbf577368b4b199df1491c76283300"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a44bbf577368b4b199df1491c76283300"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a44bbf577368b4b199df1491c76283300"></a>pg_proc</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aad9d0dcd586b46eeba3f9f91dfd62d02"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aad9d0dcd586b46eeba3f9f91dfd62d02"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aad9d0dcd586b46eeba3f9f91dfd62d02"></a>Function with parameter types</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a6ae70ccedd8f4b66b24cb9d7cf49280e"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a6ae70ccedd8f4b66b24cb9d7cf49280e"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a6ae70ccedd8f4b66b24cb9d7cf49280e"></a>sum(int4)</p>
</td>
</tr>
<tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_r5602f4f7ce0649f986b34de9b8fcde1b"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7f81b47755c6446887a5d0e4bf1e764f"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7f81b47755c6446887a5d0e4bf1e764f"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a7f81b47755c6446887a5d0e4bf1e764f"></a>REGCLASS</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a18bb356ab2044fbca63958dadeff34c0"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a18bb356ab2044fbca63958dadeff34c0"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a18bb356ab2044fbca63958dadeff34c0"></a>pg_class</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a024334e307f843bc9e6e65544b32f668"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a024334e307f843bc9e6e65544b32f668"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_a024334e307f843bc9e6e65544b32f668"></a>Relation name</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aba047b2136db42fd9d0758ecfbe9de81"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aba047b2136db42fd9d0758ecfbe9de81"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aba047b2136db42fd9d0758ecfbe9de81"></a>pg_type</p>
</td>
</tr>
<tr id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_rdb14da92fe064725a5d05e6e7a09aeb1"><td class="cellrowborder" valign="top" width="17%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_ada1b8895b0a9490283c9856ac4e9a9af"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_ada1b8895b0a9490283c9856ac4e9a9af"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_ada1b8895b0a9490283c9856ac4e9a9af"></a>REGTYPE</p>
</td>
<td class="cellrowborder" valign="top" width="15%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aa8977dfd6e644a1798ab3342d8a2b908"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aa8977dfd6e644a1798ab3342d8a2b908"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aa8977dfd6e644a1798ab3342d8a2b908"></a>pg_type</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af2d44d07568d4add91465118d4dc8ebf"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af2d44d07568d4add91465118d4dc8ebf"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_af2d44d07568d4add91465118d4dc8ebf"></a>Data type name</p>
</td>
<td class="cellrowborder" valign="top" width="31%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aba76dbe6db9d41af8a2d6d22b7c04dc9"><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aba76dbe6db9d41af8a2d6d22b7c04dc9"></a><a name="en-us_topic_0283136600_en-us_topic_0237121960_en-us_topic_0059778444_aba76dbe6db9d41af8a2d6d22b7c04dc9"></a>integer</p>
</td>
</tr>
</tbody>
</table>

The OID type is used for a column in the database system catalog.

Example:

```
openGauss=# SELECT oid FROM pg_class WHERE relname = 'pg_type';
 oid  
------
 1247
(1 row)
```

The alias type for  **OID**  is  **REGCLASS**  which allows simplified search for  **OID**  values.

Example:

```
openGauss=# SELECT attrelid,attname,atttypid,attstattarget FROM pg_attribute WHERE attrelid = 'pg_type'::REGCLASS;
 attrelid |  attname   | atttypid | attstattarget 
----------+------------+----------+---------------
     1247 | xc_node_id     |       23 |             0
     1247 | tableoid       |       26 |             0
     1247 | cmax           |       29 |             0
     1247 | xmax           |       28 |             0
     1247 | cmin           |       29 |             0
     1247 | xmin           |       28 |             0
     1247 | oid            |       26 |             0
     1247 | ctid           |       27 |             0
     1247 | typname        |       19 |            -1
     1247 | typnamespace   |       26 |            -1
     1247 | typowner       |       26 |            -1
     1247 | typlen         |       21 |            -1
     1247 | typbyval       |       16 |            -1
     1247 | typtype        |       18 |            -1
     1247 | typcategory    |       18 |            -1
     1247 | typispreferred |       16 |            -1
     1247 | typisdefined   |       16 |            -1
     1247 | typdelim       |       18 |            -1
     1247 | typrelid       |       26 |            -1
     1247 | typelem        |       26 |            -1
     1247 | typarray       |       26 |            -1
     1247 | typinput       |       24 |            -1
     1247 | typoutput      |       24 |            -1
     1247 | typreceive     |       24 |            -1
     1247 | typsend        |       24 |            -1
     1247 | typmodin       |       24 |            -1
     1247 | typmodout      |       24 |            -1
     1247 | typanalyze     |       24 |            -1
     1247 | typalign       |       18 |            -1
     1247 | typstorage     |       18 |            -1
     1247 | typnotnull     |       16 |            -1
     1247 | typbasetype    |       26 |            -1
     1247 | typtypmod      |       23 |            -1
     1247 | typndims       |       23 |            -1
     1247 | typcollation   |       26 |            -1
     1247 | typdefaultbin  |      194 |            -1
     1247 | typdefault     |       25 |            -1
     1247 | typacl         |     1034 |            -1
(38 rows)
```

