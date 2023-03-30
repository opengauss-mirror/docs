# PG\_CLASS<a name="ZH-CN_TOPIC_0289899838"></a>

PG\_CLASS系统表存储数据库对象信息及其之间的关系。

**表 1**  PG\_CLASS字段

<a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_tc764dc6b936f47699c720dbcf8b445a2"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rf318d19cf6b64b36a7a6db2766671940"><th class="cellrowborder" valign="top" width="22.2%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab7f18ea1afd14cc895e22b9e18b3f421"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab7f18ea1afd14cc895e22b9e18b3f421"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab7f18ea1afd14cc895e22b9e18b3f421"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.41%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aceb1b3202a2a40999379965954f963eb"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aceb1b3202a2a40999379965954f963eb"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aceb1b3202a2a40999379965954f963eb"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="65.39%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a36ca7b7dc45b4105943c0cec96a0ac1b"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a36ca7b7dc45b4105943c0cec96a0ac1b"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a36ca7b7dc45b4105943c0cec96a0ac1b"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r0a1f0e22a7d94765955013611aaa06d5"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5ca9ef32b74c4dd883e3c89ad322e980"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5ca9ef32b74c4dd883e3c89ad322e980"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5ca9ef32b74c4dd883e3c89ad322e980"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a197a568f8f5b432180e4c07cdcbe35b2"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a197a568f8f5b432180e4c07cdcbe35b2"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a197a568f8f5b432180e4c07cdcbe35b2"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aca928d3efe064a4c9573fde1cd447258"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aca928d3efe064a4c9573fde1cd447258"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aca928d3efe064a4c9573fde1cd447258"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rd2187e479528465ab7d3d5e116a973c4"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac575b12ba3e54ad3b55cce015ccc0b75"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac575b12ba3e54ad3b55cce015ccc0b75"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac575b12ba3e54ad3b55cce015ccc0b75"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a8b89796b051e42a980fbc9d2ba81828d"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a8b89796b051e42a980fbc9d2ba81828d"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a8b89796b051e42a980fbc9d2ba81828d"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab3769dea4c364ce796a8edbced911ae9"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab3769dea4c364ce796a8edbced911ae9"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab3769dea4c364ce796a8edbced911ae9"></a>表、索引、视图等对象的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r681ee5f4f9964701a784df4e8e99eff9"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7b51e5404e3746f09c815cec4d55496f"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7b51e5404e3746f09c815cec4d55496f"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7b51e5404e3746f09c815cec4d55496f"></a>relnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a46f20c19a1e04d319d1a1592d0f7e52b"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a46f20c19a1e04d319d1a1592d0f7e52b"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a46f20c19a1e04d319d1a1592d0f7e52b"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a8bc2076dfd924311922a6f4903b5d451"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a8bc2076dfd924311922a6f4903b5d451"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a8bc2076dfd924311922a6f4903b5d451"></a>包含这个关系的名称空间的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_raa22a1417d57436faec87a609e46bf07"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad817334b81d541a38931edc9ccb86020"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad817334b81d541a38931edc9ccb86020"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad817334b81d541a38931edc9ccb86020"></a>reltype</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1831765084c24bfaac72c9115a29a4ed"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1831765084c24bfaac72c9115a29a4ed"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1831765084c24bfaac72c9115a29a4ed"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aba7fc8471e39495a853cf4d3ffb562ce"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aba7fc8471e39495a853cf4d3ffb562ce"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aba7fc8471e39495a853cf4d3ffb562ce"></a>对应这个表的行类型的数据类型（索引为零，因为索引没有pg_type记录）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r18ca3086df4a474284d661e126a84896"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a728b2216af694133926495f5a1ba8d6c"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a728b2216af694133926495f5a1ba8d6c"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a728b2216af694133926495f5a1ba8d6c"></a>reloftype</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adef6be431a334fa5b89307cf4f83c88c"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adef6be431a334fa5b89307cf4f83c88c"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adef6be431a334fa5b89307cf4f83c88c"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a36948328add24fc984d7aa3f4c04b86f"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a36948328add24fc984d7aa3f4c04b86f"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a36948328add24fc984d7aa3f4c04b86f"></a>复合类型的OID，0表示其他类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r2768e96d6ed64269b453a66a475c4eb5"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6d0ce384eb6743278fe1358f990f7dd7"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6d0ce384eb6743278fe1358f990f7dd7"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6d0ce384eb6743278fe1358f990f7dd7"></a>relowner</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6f49f2d97dd946fe94a07c2ebb286dde"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6f49f2d97dd946fe94a07c2ebb286dde"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6f49f2d97dd946fe94a07c2ebb286dde"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae4f488f416c94a48a5145859c7f8a511"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae4f488f416c94a48a5145859c7f8a511"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae4f488f416c94a48a5145859c7f8a511"></a>关系所有者。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ra427738542cb4ea99157ff0abb4a2d6c"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5dd886e1ecbf4e93908d4c012278705a"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5dd886e1ecbf4e93908d4c012278705a"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5dd886e1ecbf4e93908d4c012278705a"></a>relam</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6851d268ac1c4a308facd82f583ee181"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6851d268ac1c4a308facd82f583ee181"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6851d268ac1c4a308facd82f583ee181"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a324d1c038ac442fbaedc7148f64f6cbc"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a324d1c038ac442fbaedc7148f64f6cbc"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a324d1c038ac442fbaedc7148f64f6cbc"></a>如果行是索引，则就是所用的访问模式（B-tree，hash等）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r0406e014dfb04306a45228739e371377"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6fc75f26ef464c9baa56a235099c20bf"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6fc75f26ef464c9baa56a235099c20bf"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6fc75f26ef464c9baa56a235099c20bf"></a>relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab724b0ad9f2442fe8d9cfb79490cd439"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab724b0ad9f2442fe8d9cfb79490cd439"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab724b0ad9f2442fe8d9cfb79490cd439"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a9cc968068f644781802809ab2b6b2d3c"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a9cc968068f644781802809ab2b6b2d3c"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a9cc968068f644781802809ab2b6b2d3c"></a>这个关系在磁盘上的文件的名称，如果没有则为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r84d1ab468d39433d826a5e0fab869876"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa3d0f00e88a043d08a381da1c9e8c477"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa3d0f00e88a043d08a381da1c9e8c477"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa3d0f00e88a043d08a381da1c9e8c477"></a>reltablespace</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a059e448ea08c4a1d86588b3890584cc0"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a059e448ea08c4a1d86588b3890584cc0"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a059e448ea08c4a1d86588b3890584cc0"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7f8366dec9784579b664223aa29bbdc6"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7f8366dec9784579b664223aa29bbdc6"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7f8366dec9784579b664223aa29bbdc6"></a>这个关系存储所在的表空间。如果为零，则意味着使用该数据库的缺省表空间。如果关系在磁盘上没有文件，则这个字段没有什么意义。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r47c5c27b74424238bb63898c08f46bbb"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_abc8cedfdd6cf4c0789ab48c8afc07862"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_abc8cedfdd6cf4c0789ab48c8afc07862"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_abc8cedfdd6cf4c0789ab48c8afc07862"></a>relpages</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad2c0b7ea0ff3407bb2a41bcb3718b637"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad2c0b7ea0ff3407bb2a41bcb3718b637"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad2c0b7ea0ff3407bb2a41bcb3718b637"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac66369f9f33b4b47bc886f6e9a3eb613"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac66369f9f33b4b47bc886f6e9a3eb613"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac66369f9f33b4b47bc886f6e9a3eb613"></a>以页（大小为BLCKSZ）为单位的此表在磁盘上的大小，它只是优化器用的一个近似值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r390d64228ae6464ca92091e653218fc8"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a006ef52b5bde4f1ca959c07e6867f1c3"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a006ef52b5bde4f1ca959c07e6867f1c3"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a006ef52b5bde4f1ca959c07e6867f1c3"></a>reltuples</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a0583037421f24d7f84d962a126a1d852"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a0583037421f24d7f84d962a126a1d852"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a0583037421f24d7f84d962a126a1d852"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aff709b7fad974ee8b5cf1251e264c58c"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aff709b7fad974ee8b5cf1251e264c58c"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aff709b7fad974ee8b5cf1251e264c58c"></a>表中行的数目，只是优化器使用的一个估计值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r289d4bd7559b45c18f2d7f1fa0046a3a"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2d190d051b2546ed8b160ad21fcba718"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2d190d051b2546ed8b160ad21fcba718"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2d190d051b2546ed8b160ad21fcba718"></a>relallvisible</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_af718d34a7d5c4ccd885a43c7c8fe05e7"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_af718d34a7d5c4ccd885a43c7c8fe05e7"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_af718d34a7d5c4ccd885a43c7c8fe05e7"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a54b0d6eb7bf8400ba5984f74c2cc4e7e"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a54b0d6eb7bf8400ba5984f74c2cc4e7e"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a54b0d6eb7bf8400ba5984f74c2cc4e7e"></a>被标识为全可见的表中的页的数量。此字段是优化器用来做SQL执行优化使用的。VACUUM、ANALYZE和一些DDL语句（例如，CREATE INDEX）会引起此字段更新。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ref33dda0e5ff43cebbd03ad2685bc3ea"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad80bc6ca8cee42aeb2b9164c273f452c"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad80bc6ca8cee42aeb2b9164c273f452c"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad80bc6ca8cee42aeb2b9164c273f452c"></a>reltoastrelid</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a72c5f373b53a41ae8dfb15460fe3d4ec"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a72c5f373b53a41ae8dfb15460fe3d4ec"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a72c5f373b53a41ae8dfb15460fe3d4ec"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6c91be64c3bc4eb8a80d0691c07920a7"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6c91be64c3bc4eb8a80d0691c07920a7"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6c91be64c3bc4eb8a80d0691c07920a7"></a>与此表关联的TOAST表的OID ，如果没有则为0。</p>
<p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a242886e2c0d447d6b2797bae9dd24655"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a242886e2c0d447d6b2797bae9dd24655"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a242886e2c0d447d6b2797bae9dd24655"></a>TOAST表在一个从属表里“离线”存储大字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r731ee96e33254f38995845424eaa6f50"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa42d7c33467a405b993671bf02584c99"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa42d7c33467a405b993671bf02584c99"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa42d7c33467a405b993671bf02584c99"></a>reltoastidxid</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3aee5ca781fe4320bce078caca1ea3a0"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3aee5ca781fe4320bce078caca1ea3a0"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3aee5ca781fe4320bce078caca1ea3a0"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a24219ca4b43f406e893c70bf94faa6be"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a24219ca4b43f406e893c70bf94faa6be"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a24219ca4b43f406e893c70bf94faa6be"></a>对于TOAST表是它的索引的OID，如果不是TOAST表则为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r596d27e1c66f4dc78f1cc869252298a4"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5030c8c8bd364b8696479326f7ed299b"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5030c8c8bd364b8696479326f7ed299b"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5030c8c8bd364b8696479326f7ed299b"></a>reldeltarelid</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aee9889fa7e0b4c35911f3d1ddbb66111"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aee9889fa7e0b4c35911f3d1ddbb66111"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aee9889fa7e0b4c35911f3d1ddbb66111"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p51161450161111"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p51161450161111"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p51161450161111"></a>Delta表的OID。</p>
<p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a838d95027779452584a04ced0f163e03"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a838d95027779452584a04ced0f163e03"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a838d95027779452584a04ced0f163e03"></a>Delta表附属于列存表。用于存储数据导入过程中的甩尾数据。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r18f6b194c878459a954228f2ab8bd0e1"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5cdeb1c52a0f4806891b7d58241d15cc"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5cdeb1c52a0f4806891b7d58241d15cc"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5cdeb1c52a0f4806891b7d58241d15cc"></a>reldeltaidx</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa3ee96eb59984eaa81e63297dfb9755c"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa3ee96eb59984eaa81e63297dfb9755c"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa3ee96eb59984eaa81e63297dfb9755c"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a886b2e2cd2bc428a83c7524824e13e46"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a886b2e2cd2bc428a83c7524824e13e46"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a886b2e2cd2bc428a83c7524824e13e46"></a>Delta表的索引表OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r776f56e49bec4312a9fae0108a471447"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a85d77a92de484aedb0432d069e06a9ee"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a85d77a92de484aedb0432d069e06a9ee"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a85d77a92de484aedb0432d069e06a9ee"></a>relcudescrelid</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adac757df48eb4bf2b5ef474a7607d2fe"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adac757df48eb4bf2b5ef474a7607d2fe"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adac757df48eb4bf2b5ef474a7607d2fe"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a32c48fe6044a4ae9ba640bb4825212a7"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a32c48fe6044a4ae9ba640bb4825212a7"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a32c48fe6044a4ae9ba640bb4825212a7"></a>CU描述表的OID。</p>
<p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p9625121010391"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p9625121010391"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p9625121010391"></a>CU描述表（Desc表）附属于列存表。用于控制表目录中存储数据的可见性。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r514911a9b2d34f1d8ef29f309403914c"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adb0d8b039b4649488a887f0b8586623d"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adb0d8b039b4649488a887f0b8586623d"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adb0d8b039b4649488a887f0b8586623d"></a>relcudescidx</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_af1ad91a4b05d46e18bed65ee7ea974b5"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_af1ad91a4b05d46e18bed65ee7ea974b5"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_af1ad91a4b05d46e18bed65ee7ea974b5"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a206ae957b93f4eb3b42f7a12f9e99a01"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a206ae957b93f4eb3b42f7a12f9e99a01"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a206ae957b93f4eb3b42f7a12f9e99a01"></a>CU描述表的索引表OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rc0a68a684d2c474bbdb7d2aeaecc1c85"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a30ad1ac41fc04ea09c6567c415e6c4f8"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a30ad1ac41fc04ea09c6567c415e6c4f8"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a30ad1ac41fc04ea09c6567c415e6c4f8"></a>relhasindex</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1b7e71c093594c8ab737da4d8773cccf"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1b7e71c093594c8ab737da4d8773cccf"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1b7e71c093594c8ab737da4d8773cccf"></a><span id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_text6591123272618"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_text6591123272618"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_text6591123272618"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa5a9ecaaacad416d9e56f852c3794c1c"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa5a9ecaaacad416d9e56f852c3794c1c"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa5a9ecaaacad416d9e56f852c3794c1c"></a>如果它是一个表而且至少有（或者最近有过）一个索引，则为真。</p>
<p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a21436c77321b4ad78a50998be2980e6c"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a21436c77321b4ad78a50998be2980e6c"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a21436c77321b4ad78a50998be2980e6c"></a>它是由CREATE INDEX设置的，但DROP INDEX不会立即将它清除。如果VACUUM进程检测一个表没有索引，将会把它将清理relhasindex字段，将值设置为假。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r3ae7316672174938896a35195cd82e4a"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac43791d22d764df6a953133778a0a179"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac43791d22d764df6a953133778a0a179"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac43791d22d764df6a953133778a0a179"></a>relisshared</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa1fc58e2adcd47aab8735df5e094ad6f"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa1fc58e2adcd47aab8735df5e094ad6f"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa1fc58e2adcd47aab8735df5e094ad6f"></a><span id="text1839111141020"><a name="text1839111141020"></a><a name="text1839111141020"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad946647c5fcf4f2389cd06b420c6fc7d"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad946647c5fcf4f2389cd06b420c6fc7d"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad946647c5fcf4f2389cd06b420c6fc7d"></a>如果该表在<span id="text179123126198"><a name="text179123126198"></a><a name="text179123126198"></a>openGauss</span>中由所有数据库共享则为真。只有某些系统表（比如pg_database）是共享的。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ref2d600faf8a48d78f44e4f3bf4df644"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a965b7446544f4415afc85625400f811e"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a965b7446544f4415afc85625400f811e"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a965b7446544f4415afc85625400f811e"></a>relpersistence</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a943dca806f154c91a8d047415ee0ab21"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a943dca806f154c91a8d047415ee0ab21"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a943dca806f154c91a8d047415ee0ab21"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_uc88c5cc59c0c469389a212598c0f40d7"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_uc88c5cc59c0c469389a212598c0f40d7"></a><ul id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_uc88c5cc59c0c469389a212598c0f40d7"><li>p：表示永久表。</li><li>u：表示非日志表。</li><li>g：表示临时表。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r2cd6fc350c0345eebac3bc4c86de7fad"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae2925417318c4a6dac64925824abc025"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae2925417318c4a6dac64925824abc025"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae2925417318c4a6dac64925824abc025"></a>relkind</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_afd2aceb031e140acbdea98d221de7c2b"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_afd2aceb031e140acbdea98d221de7c2b"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_afd2aceb031e140acbdea98d221de7c2b"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ubd947dfd9fef47789142d23914e20261"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ubd947dfd9fef47789142d23914e20261"></a><ul id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ubd947dfd9fef47789142d23914e20261"><li>r：表示普通表。</li><li>i：表示索引。</li><li>I：表示分区表GLOBAL索引。</li><li>S：表示序列。</li><li>L：表示Large序列。</li><li>v：表示视图。</li><li>c：表示复合类型。</li><li>t：表示TOAST表。</li><li>f：表示外表。</li><li>m：表示物化视图。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rac756c89935145afa26f9c6bc2b0c2f1"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a187de524578e436080f731084a8f4e73"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a187de524578e436080f731084a8f4e73"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a187de524578e436080f731084a8f4e73"></a>relnatts</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a258f0ad8529145c9a04ec5b19c8333ec"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a258f0ad8529145c9a04ec5b19c8333ec"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a258f0ad8529145c9a04ec5b19c8333ec"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adaf038a6ce0446fa92da45c20e77b3c5"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adaf038a6ce0446fa92da45c20e77b3c5"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adaf038a6ce0446fa92da45c20e77b3c5"></a>关系中用户字段数目（除了系统字段以外）。在pg_attribute里肯定有相同数目对应行。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r6e43ab074e504f1a97726ad564079307"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aad1de96eb9b2460783db35d97ea85acf"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aad1de96eb9b2460783db35d97ea85acf"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aad1de96eb9b2460783db35d97ea85acf"></a>relchecks</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6105b5eedbc64d2b834c9e1dfbe14b27"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6105b5eedbc64d2b834c9e1dfbe14b27"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6105b5eedbc64d2b834c9e1dfbe14b27"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_af34c870ce5cf4944ab6f919be5098efe"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_af34c870ce5cf4944ab6f919be5098efe"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_af34c870ce5cf4944ab6f919be5098efe"></a>表里的检查约束的数目；参阅pg_constraint表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r64e6628ba7ad40979d920e40f7cb9b66"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7ed5c2c73fbd434e9d2fb3a5d888e07b"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7ed5c2c73fbd434e9d2fb3a5d888e07b"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7ed5c2c73fbd434e9d2fb3a5d888e07b"></a>relhasoids</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3dee212ec4b542bfa535a17af52f6d96"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3dee212ec4b542bfa535a17af52f6d96"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3dee212ec4b542bfa535a17af52f6d96"></a><span id="text1660715414105"><a name="text1660715414105"></a><a name="text1660715414105"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2111bba0ed48482ebb80e16a2b87f2b8"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2111bba0ed48482ebb80e16a2b87f2b8"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2111bba0ed48482ebb80e16a2b87f2b8"></a>如果为关系中每行都生成一个OID则为真。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r0f8adb5ba56b4dec8cfaf10ae2353228"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a925353abc1a4416baa0c19328004b372"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a925353abc1a4416baa0c19328004b372"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a925353abc1a4416baa0c19328004b372"></a>relhaspkey</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_afc57bfa76a714f9fb59a2ad25e22de9f"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_afc57bfa76a714f9fb59a2ad25e22de9f"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_afc57bfa76a714f9fb59a2ad25e22de9f"></a><span id="text172296661020"><a name="text172296661020"></a><a name="text172296661020"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac7c6ab5111454f68a247a3e360a3dfa9"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac7c6ab5111454f68a247a3e360a3dfa9"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac7c6ab5111454f68a247a3e360a3dfa9"></a>如果这个表有一个（或者曾经有一个）主键，则为真。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rb103c248ca0e42dfbf85b4ebbfdb7d45"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a554a4c8bcedc4a25b9e9610fa7fa9fa0"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a554a4c8bcedc4a25b9e9610fa7fa9fa0"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a554a4c8bcedc4a25b9e9610fa7fa9fa0"></a>relhasrules</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a89c5e982d9a74dd3812cc4a9e309cc8d"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a89c5e982d9a74dd3812cc4a9e309cc8d"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a89c5e982d9a74dd3812cc4a9e309cc8d"></a><span id="text76683716107"><a name="text76683716107"></a><a name="text76683716107"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1910f4798aa74251928334109ff2cde9"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1910f4798aa74251928334109ff2cde9"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1910f4798aa74251928334109ff2cde9"></a>如表有规则就为真。是否有规则可参考系统表PG_REWRITE。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rc22a5ddcc75e462fba7c65a06a2ec45d"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4faaa79a77394021a17ed899a0c8b833"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4faaa79a77394021a17ed899a0c8b833"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4faaa79a77394021a17ed899a0c8b833"></a>relhastriggers</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="p133015931012"><a name="p133015931012"></a><a name="p133015931012"></a><span id="text93015991011"><a name="text93015991011"></a><a name="text93015991011"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_abad20bb5020242f8a842ac11f2ad5e13"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_abad20bb5020242f8a842ac11f2ad5e13"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_abad20bb5020242f8a842ac11f2ad5e13"></a>True表示表中有触发器，或者曾经有过触发器。系统表pg_trigger中记录了表和视图的触发器。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r4a57459c39ac4822af082ca05c3c1b36"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a50dde3934a944a10a0a5c9ab434ab1fd"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a50dde3934a944a10a0a5c9ab434ab1fd"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a50dde3934a944a10a0a5c9ab434ab1fd"></a>relhassubclass</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="p124701211151014"><a name="p124701211151014"></a><a name="p124701211151014"></a><span id="text14704119100"><a name="text14704119100"></a><a name="text14704119100"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac23fc75e89a54681a13b3950b3a6e486"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac23fc75e89a54681a13b3950b3a6e486"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac23fc75e89a54681a13b3950b3a6e486"></a>如果有（或者曾经有）任何继承的子表，为真。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_re39d2cf7be684903899cbf9c3bdc19ad"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a22e65823e6704da18600905ef8f7e96d"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a22e65823e6704da18600905ef8f7e96d"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a22e65823e6704da18600905ef8f7e96d"></a>relcmprs</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3233cdea363e4bdbab4b9f593fd503c1"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3233cdea363e4bdbab4b9f593fd503c1"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3233cdea363e4bdbab4b9f593fd503c1"></a>tinyint</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae6c4cbd7440448a1bbc46559fe09c89c"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae6c4cbd7440448a1bbc46559fe09c89c"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae6c4cbd7440448a1bbc46559fe09c89c"></a>表示是否启用表的启用压缩特性。需要特别注意，当且仅当批量插入才会触发压缩，普通的CRUD并不能够触发压缩。<a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ua73ba1541cdb43e0a625d751c9ffa2c1"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ua73ba1541cdb43e0a625d751c9ffa2c1"></a><ul id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ua73ba1541cdb43e0a625d751c9ffa2c1"><li>0表示其他不支持压缩的表（主要是指系统表，不支持压缩属性的修改操作）。</li><li>1表示表数据的压缩特性为NOCOMPRESS或者无指定关键字。</li><li>2表示表数据的压缩特性为COMPRESS。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rbb392a79d6794e5cbba79a26833d84fd"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2cd57883c34f43508d2e0a6599e6e4d7"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2cd57883c34f43508d2e0a6599e6e4d7"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2cd57883c34f43508d2e0a6599e6e4d7"></a>relhasclusterkey</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2f180f44d8774cdaacf0bbf3965515ae"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2f180f44d8774cdaacf0bbf3965515ae"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2f180f44d8774cdaacf0bbf3965515ae"></a><span id="text19237714141012"><a name="text19237714141012"></a><a name="text19237714141012"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4347a66fbfb34d7abcc86022f5cd99ad"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4347a66fbfb34d7abcc86022f5cd99ad"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4347a66fbfb34d7abcc86022f5cd99ad"></a>是否有局部聚簇存储。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r592766c58ae549ba950d95f2f71b2ba2"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2a60b7b23f38424fba9998599e4f19d7"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2a60b7b23f38424fba9998599e4f19d7"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a2a60b7b23f38424fba9998599e4f19d7"></a>relrowmovement</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a344b6f6f87f2498ea7368845e6488095"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a344b6f6f87f2498ea7368845e6488095"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a344b6f6f87f2498ea7368845e6488095"></a><span id="text654541510106"><a name="text654541510106"></a><a name="text654541510106"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5659b6eb856a47e7ad651b4233bda529"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5659b6eb856a47e7ad651b4233bda529"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5659b6eb856a47e7ad651b4233bda529"></a>针对分区表进行update操作时，是否允许行迁移。<a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ua82ce765ad074409ba76461c7988f9ec"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ua82ce765ad074409ba76461c7988f9ec"></a><ul id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ua82ce765ad074409ba76461c7988f9ec"><li>true：表示允许行迁移。</li><li>false：表示不允许行迁移。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r493d31e3147b4642aedb5480e5772c5f"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a06a7de66e52b4162ba334164b9538a33"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a06a7de66e52b4162ba334164b9538a33"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a06a7de66e52b4162ba334164b9538a33"></a>parttype</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aafaab1a0efc64a5cb2bacfa73348a01c"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aafaab1a0efc64a5cb2bacfa73348a01c"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aafaab1a0efc64a5cb2bacfa73348a01c"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae88d5e6512b7488a8200d94cde0d329d"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae88d5e6512b7488a8200d94cde0d329d"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae88d5e6512b7488a8200d94cde0d329d"></a>表或者索引是否具有分区表的性质。<a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ud9bf9b8444c1404bb4e8b6706f57ec72"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ud9bf9b8444c1404bb4e8b6706f57ec72"></a><ul id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ud9bf9b8444c1404bb4e8b6706f57ec72"><li>p：表示带有分区表性质。</li><li>n：表示没有分区表特性。</li><li>v：表示该表为HDFS的Value分区表。</li><li>s：表示该表为二级分区表。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rd1ae9bd0e9374a13a6a99d90f2a7cbd9"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3cfb4f53a36240d98b6989cada318577"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3cfb4f53a36240d98b6989cada318577"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a3cfb4f53a36240d98b6989cada318577"></a>relfrozenxid</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a297b191930ab44ff9efe461ae6259c5f"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a297b191930ab44ff9efe461ae6259c5f"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a297b191930ab44ff9efe461ae6259c5f"></a>xid32</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p19698102273214"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p19698102273214"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p19698102273214"></a>该表中所有在这个之前的事务ID已经被一个固定的（"frozen"）事务ID替换。该字段用于跟踪此表是否需要为了防止事务ID重叠（或者允许收缩pg_clog）而进行清理。如果该关系不是表则为零（InvalidTransactionId）。</p>
<p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a84702d84e2cb4716a21a71efe76c4d47"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a84702d84e2cb4716a21a71efe76c4d47"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a84702d84e2cb4716a21a71efe76c4d47"></a>为保持前向兼容，保留此字段，新增relfrozenxid64用于记录此信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r158209d16a4a4d9ea129e9117aa04a33"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5c8466ae66ca4d748c80648dbba2e182"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5c8466ae66ca4d748c80648dbba2e182"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5c8466ae66ca4d748c80648dbba2e182"></a>relacl</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7fbef1f45be2469c8a691536e3721a2e"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7fbef1f45be2469c8a691536e3721a2e"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a7fbef1f45be2469c8a691536e3721a2e"></a>aclitem[]</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a278886665eb245e3b79718605d9f42e2"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a278886665eb245e3b79718605d9f42e2"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a278886665eb245e3b79718605d9f42e2"></a>访问权限。</p>
<p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa230d04e8dbe49f1919e994951da2ed7"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa230d04e8dbe49f1919e994951da2ed7"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa230d04e8dbe49f1919e994951da2ed7"></a>查询的回显结果为以下形式：</p>
<a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_s8bb8f0303e694a5ea8a15b28a8753378"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_s8bb8f0303e694a5ea8a15b28a8753378"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_s8bb8f0303e694a5ea8a15b28a8753378">rolename=xxxx/yyyy  --赋予一个角色的权限</pre>
<a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_s09baf56030e94fe18b294381661ada90"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_s09baf56030e94fe18b294381661ada90"></a><pre class="screen" codetype="Sql" id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_s09baf56030e94fe18b294381661ada90">=xxxx/yyyy  --赋予public的权限</pre>
<p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6e035a93fbeb462ca62cbbeccbd1efdb"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6e035a93fbeb462ca62cbbeccbd1efdb"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a6e035a93fbeb462ca62cbbeccbd1efdb"></a>xxxx表示赋予的权限，yyyy表示授予这个权限的角色。权限的参数说明请参见<a href="#zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_td89f8f6cc98f4a11a08b3c45d852a6cc">表2</a>。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_row11845015339"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p1918516011336"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p1918516011336"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p1918516011336"></a>reloptions</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p18185509339"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p18185509339"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p18185509339"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p171281349143316"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p171281349143316"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p171281349143316"></a>表或索引的访问方法，使用"keyword=value"格式的字符串。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_row6912152512319"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p9912325102310"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p9912325102310"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p9912325102310"></a>relreplident</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p1891252562312"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p1891252562312"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p1891252562312"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p19160328132612"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p19160328132612"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p19160328132612"></a>逻辑解码中解码列的标识：<a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_ul188391441162615"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_ul188391441162615"></a><ul id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_ul188391441162615"><li>d = 默认 （主键，如果存在）。</li><li>n = 无。</li><li>f = 所有列。</li><li>i = 索引的indisreplident被设置或者为默认。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_row11845015339"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p1918516011336"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p1918516011336"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p1918516011336"></a>relfrozenxid64</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p18185509339"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p18185509339"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p18185509339"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p171281349143316"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p171281349143316"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_p171281349143316"></a>该表中所有在这个之前的事务ID已经被一个固定的（"frozen"）事务ID替换。该字段用于跟踪此表是否需要为了防止事务ID重叠（或者允许收缩pg_clog）而进行清理。如果该关系不是表则为零（InvalidTransactionId）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_row650864153515"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_p1450974113351"><a name="zh-cn_topic_0283136767_p1450974113351"></a><a name="zh-cn_topic_0283136767_p1450974113351"></a>relbucket</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_p1550919418359"><a name="zh-cn_topic_0283136767_p1550919418359"></a><a name="zh-cn_topic_0283136767_p1550919418359"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_p15509741173517"><a name="zh-cn_topic_0283136767_p15509741173517"></a><a name="zh-cn_topic_0283136767_p15509741173517"></a>pg_hashbucket中的桶信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_row13371138193516"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136767_p2338638113516"><a name="zh-cn_topic_0283136767_p2338638113516"></a><a name="zh-cn_topic_0283136767_p2338638113516"></a>relbucketkey</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136767_p1833953873514"><a name="zh-cn_topic_0283136767_p1833953873514"></a><a name="zh-cn_topic_0283136767_p1833953873514"></a>int2vector</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136767_p143391738153513"><a name="zh-cn_topic_0283136767_p143391738153513"></a><a name="zh-cn_topic_0283136767_p143391738153513"></a>哈希分区列号。</p>
</td>
</tr>
<tr id="row440023634119"><td class="cellrowborder" valign="top" width="22.2%" headers="mcps1.2.4.1.1 "><p id="p2040210361416"><a name="p2040210361416"></a><a name="p2040210361416"></a>relminmxid</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.4.1.2 "><p id="p44021236164111"><a name="p44021236164111"></a><a name="p44021236164111"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.39%" headers="mcps1.2.4.1.3 "><p id="p204021236164113"><a name="p204021236164113"></a><a name="p204021236164113"></a>该表中所有在这个之前的多事务ID已经被一个事务ID替换。这用于跟踪该表是否需要为了防止多事务ID重叠或者允许收缩pg_clog而进行清理。如果该关系不是表则为零（InvalidTransactionId）。</p>
</td>
</tr>
</tbody>
</table>

**表 2**  权限的参数说明

<a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_td89f8f6cc98f4a11a08b3c45d852a6cc"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r8e12637eb3044cbca5fc594f644e8adc"><th class="cellrowborder" valign="top" width="27.87%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5cfdbbcc3a9f4ed294e1d0122f4e9210"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5cfdbbcc3a9f4ed294e1d0122f4e9210"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5cfdbbcc3a9f4ed294e1d0122f4e9210"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="72.13000000000001%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a008d0f8394d74d09889407feae7ce2c6"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a008d0f8394d74d09889407feae7ce2c6"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a008d0f8394d74d09889407feae7ce2c6"></a>参数说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r2dac92a772b94c51be8772c781f26943"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad58fd67b9690435fb19e5d3401efb0f6"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad58fd67b9690435fb19e5d3401efb0f6"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ad58fd67b9690435fb19e5d3401efb0f6"></a>r</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac7495574bc1d43a7bf9442f44477fce6"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac7495574bc1d43a7bf9442f44477fce6"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac7495574bc1d43a7bf9442f44477fce6"></a>SELECT（读）</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r86fcbf70cfee42738efe700873ad16e9"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a81223fdf4b7541608a5cf95b47973491"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a81223fdf4b7541608a5cf95b47973491"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a81223fdf4b7541608a5cf95b47973491"></a>w</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5429eab610f740a1a5b83e29684b39cd"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5429eab610f740a1a5b83e29684b39cd"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5429eab610f740a1a5b83e29684b39cd"></a>UPDATE（写）</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r531cfd90c0b54560a26523b422e94eee"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4f72529ada1145dc9aba8370484bb8c2"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4f72529ada1145dc9aba8370484bb8c2"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4f72529ada1145dc9aba8370484bb8c2"></a>a</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae5c269ec8fb346f8be19e9aa1bb4372b"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae5c269ec8fb346f8be19e9aa1bb4372b"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae5c269ec8fb346f8be19e9aa1bb4372b"></a>INSERT（插入）</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rb06daaf767854210bde4e986e4d3ed1e"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac26d0aeed362428bb86279f885c73866"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac26d0aeed362428bb86279f885c73866"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ac26d0aeed362428bb86279f885c73866"></a>d</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aecd27f2c2f7a46e7aa0f3aa331320af2"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aecd27f2c2f7a46e7aa0f3aa331320af2"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aecd27f2c2f7a46e7aa0f3aa331320af2"></a>DELETE</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r0a689b4fdb28405789db8988593049d0"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a8ff91cc392e149c6966719a35e0bacea"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a8ff91cc392e149c6966719a35e0bacea"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a8ff91cc392e149c6966719a35e0bacea"></a>D</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab329b9fc4bfe46d18932fc18c477a49b"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab329b9fc4bfe46d18932fc18c477a49b"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ab329b9fc4bfe46d18932fc18c477a49b"></a>TRUNCATE</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r2d0090a0bda345ed91455ddc5596cd82"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a10d40fe5b23e4d36b3a4c57fd3f6f5f0"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a10d40fe5b23e4d36b3a4c57fd3f6f5f0"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a10d40fe5b23e4d36b3a4c57fd3f6f5f0"></a>x</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a04e882d9dcab40738484746aa294246b"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a04e882d9dcab40738484746aa294246b"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a04e882d9dcab40738484746aa294246b"></a>REFERENCES</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r198ce0b4075344f8b32786663439a395"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a400ea486a26e44a5943b950002b26274"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a400ea486a26e44a5943b950002b26274"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a400ea486a26e44a5943b950002b26274"></a>t</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a923ae5fa4a334e72adccb46c261a2e68"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a923ae5fa4a334e72adccb46c261a2e68"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a923ae5fa4a334e72adccb46c261a2e68"></a>TRIGGER</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rba34f654a40f4de6a558f27b6ffdd30f"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4298f18d8b954d8bb70fa62fec2b1bdc"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4298f18d8b954d8bb70fa62fec2b1bdc"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4298f18d8b954d8bb70fa62fec2b1bdc"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a67a595f6d28146ebacd0a07e7d9c9399"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a67a595f6d28146ebacd0a07e7d9c9399"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a67a595f6d28146ebacd0a07e7d9c9399"></a>EXECUTE</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r2fe088ce65804dff990f8ef574c0e624"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1267bfd19c934d46ba7f9396f0a558eb"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1267bfd19c934d46ba7f9396f0a558eb"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a1267bfd19c934d46ba7f9396f0a558eb"></a>U</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_afd74d649587d45c98960bd977ec8440f"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_afd74d649587d45c98960bd977ec8440f"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_afd74d649587d45c98960bd977ec8440f"></a>USAGE</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ra6498e3053444cacab8ba6d2ad3b4d84"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adf1872316fd34102830a037658a9097f"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adf1872316fd34102830a037658a9097f"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_adf1872316fd34102830a037658a9097f"></a>C</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a88f6e92cbca3454089adf0059891a8d2"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a88f6e92cbca3454089adf0059891a8d2"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a88f6e92cbca3454089adf0059891a8d2"></a>CREATE</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rfbae0db5929c4d84ba227d39576f162c"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a42a9eb5e202d469480d5968d6b3c4dc8"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a42a9eb5e202d469480d5968d6b3c4dc8"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a42a9eb5e202d469480d5968d6b3c4dc8"></a>c</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a61b8d87dda1942258eafa187904ba95e"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a61b8d87dda1942258eafa187904ba95e"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a61b8d87dda1942258eafa187904ba95e"></a>CONNECT</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r3c9fbb71705a4d158dca072fe38bef7a"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5066b02453f44e168b04f3bdb958c964"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5066b02453f44e168b04f3bdb958c964"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a5066b02453f44e168b04f3bdb958c964"></a>T</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae37e52d544b24874a7de07645ee6f8bc"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae37e52d544b24874a7de07645ee6f8bc"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_ae37e52d544b24874a7de07645ee6f8bc"></a>TEMPORARY</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_r5f554fdbef70430696391759e90d6fe0"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a0e169399f67e46549d44019f32ac5843"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a0e169399f67e46549d44019f32ac5843"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a0e169399f67e46549d44019f32ac5843"></a>A</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4da2514518ce45c5b47b734f53990918"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4da2514518ce45c5b47b734f53990918"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a4da2514518ce45c5b47b734f53990918"></a>ALTER</p>
</td>
</tr>
<tr id="row290110538327"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="p59014531321"><a name="p59014531321"></a><a name="p59014531321"></a>P</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="p1490175343211"><a name="p1490175343211"></a><a name="p1490175343211"></a>DROP</p>
</td>
</tr>
<tr id="row4183489334"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="p318319893318"><a name="p318319893318"></a><a name="p318319893318"></a>m</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="p1318316814334"><a name="p1318316814334"></a><a name="p1318316814334"></a>COMMENT</p>
</td>
</tr>
<tr id="row123736418333"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="p437314410335"><a name="p437314410335"></a><a name="p437314410335"></a>i</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="p1037334133310"><a name="p1037334133310"></a><a name="p1037334133310"></a>INDEX</p>
</td>
</tr>
<tr id="row16247175919323"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="p1424745923211"><a name="p1424745923211"></a><a name="p1424745923211"></a>v</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="p12471059193211"><a name="p12471059193211"></a><a name="p12471059193211"></a>VACUUM</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_rc197f2c4628b4c82a00eabee6a5a098f"><td class="cellrowborder" valign="top" width="27.87%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa56e5a92d2184896ad0f14fb9ce0eb12"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa56e5a92d2184896ad0f14fb9ce0eb12"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_aa56e5a92d2184896ad0f14fb9ce0eb12"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="72.13000000000001%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a94fed3afbd464d3c9a0bce7119bf1ecb"><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a94fed3afbd464d3c9a0bce7119bf1ecb"></a><a name="zh-cn_topic_0283136767_zh-cn_topic_0237122277_zh-cn_topic_0059778035_a94fed3afbd464d3c9a0bce7119bf1ecb"></a>给前面权限的授权选项</p>
</td>
</tr>
</tbody>
</table>

