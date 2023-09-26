# PG\_PARTITION

PG\_PARTITION系统表存储数据库内所有分区表（partitioned table）、分区（table partition）、分区上toast表和分区索引（index partition）四类对象的信息。分区表索引（partitioned index）的信息不在PG\_PARTITION系统表中保存。

**表 1**  PG\_PARTITION字段

<a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ta51ab369b9cf4fcb9905b8e5029f7289"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_rb9f34247b72748baae6e7636f6881644"><th class="cellrowborder" valign="top" width="25.44%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aca61b14c74b04ee98b83d7a4cf5b2086"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aca61b14c74b04ee98b83d7a4cf5b2086"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aca61b14c74b04ee98b83d7a4cf5b2086"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="15.97%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5d1fccb49007465bb269d425e312fe9d"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5d1fccb49007465bb269d425e312fe9d"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5d1fccb49007465bb269d425e312fe9d"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="58.589999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a7e533658546842528ed1b76c88cfbe0a"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a7e533658546842528ed1b76c88cfbe0a"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a7e533658546842528ed1b76c88cfbe0a"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_row1945515143577"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p11455101475719"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p11455101475719"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p11455101475719"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p17455101405714"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p17455101405714"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p17455101405714"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p1456161495710"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p1456161495710"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p1456161495710"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r9b72782f002f47dfab6ee034e2c1e123"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac84288e8b3b3491bbafdb77a9dc9845a"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac84288e8b3b3491bbafdb77a9dc9845a"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac84288e8b3b3491bbafdb77a9dc9845a"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac14037d43b4f4018a9b5899d29e55d6a"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac14037d43b4f4018a9b5899d29e55d6a"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac14037d43b4f4018a9b5899d29e55d6a"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_abac68230219245bf95e206decca13b3a"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_abac68230219245bf95e206decca13b3a"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_abac68230219245bf95e206decca13b3a"></a>分区表、分区、分区上toast表和分区索引的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r35430925812e4494bb2c35a5c1120e28"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3513e21209cb4db286cfb4df8605754e"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3513e21209cb4db286cfb4df8605754e"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3513e21209cb4db286cfb4df8605754e"></a>parttype</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a01ec0bb6818f406088c4284a18f44168"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a01ec0bb6818f406088c4284a18f44168"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a01ec0bb6818f406088c4284a18f44168"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ad384de51b68941679df9cc66e724d42a"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ad384de51b68941679df9cc66e724d42a"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ad384de51b68941679df9cc66e724d42a"></a>对象类型：<a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_u0bf15da2dec04f44b8061e07775ea0f8"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_u0bf15da2dec04f44b8061e07775ea0f8"></a><ul id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_u0bf15da2dec04f44b8061e07775ea0f8"><li>'r'：partitioned table。</li><li>'p'：table partition。</li><li>'s'：table subpartition。</li><li>'x'：index partition。</li><li>'t'：toast table。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r0d55a8d40d294492a7ecf124dfcef3b7"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_adab45fe1842a4406b36193fa75a7da8c"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_adab45fe1842a4406b36193fa75a7da8c"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_adab45fe1842a4406b36193fa75a7da8c"></a>parentid</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a2b6bd96293ba46c4b592a1b196e0346a"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a2b6bd96293ba46c4b592a1b196e0346a"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a2b6bd96293ba46c4b592a1b196e0346a"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a73c636f763ea4cbe894196418784ba25"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a73c636f763ea4cbe894196418784ba25"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a73c636f763ea4cbe894196418784ba25"></a>当对象为分区表或分区时，此字段表示分区表在PG_CLASS中的OID。</p>
<p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_af58decc10d6c438e90055c4f2e33c70b"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_af58decc10d6c438e90055c4f2e33c70b"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_af58decc10d6c438e90055c4f2e33c70b"></a>当对象为index partition时，此字段表示所属分区表索引（partitioned index）的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r0f27d2d7f4ff483084a5a822ffa697f3"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a342f8fbc52a440bc9b05523186bf0ba8"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a342f8fbc52a440bc9b05523186bf0ba8"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a342f8fbc52a440bc9b05523186bf0ba8"></a>rangenum</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5e29485ef5d3438dbe7312d63092375b"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5e29485ef5d3438dbe7312d63092375b"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5e29485ef5d3438dbe7312d63092375b"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_acdd569582562461f91a7229d6036722c"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_acdd569582562461f91a7229d6036722c"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_acdd569582562461f91a7229d6036722c"></a>保留字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r3ecc58b14bbc45de8c10332d0c0fe497"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6337cc2b38ae47ebb0b007de15974e6c"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6337cc2b38ae47ebb0b007de15974e6c"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6337cc2b38ae47ebb0b007de15974e6c"></a>intervalnum</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa486140f3b084990add75dafdba2c446"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa486140f3b084990add75dafdba2c446"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa486140f3b084990add75dafdba2c446"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6df6e32d5f50466f8b841608e05f57af"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6df6e32d5f50466f8b841608e05f57af"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6df6e32d5f50466f8b841608e05f57af"></a>保留字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r876b895b8b674049b543df97ef8fcf44"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_afb86bd49b39c4ca0aff369bb565ff56f"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_afb86bd49b39c4ca0aff369bb565ff56f"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_afb86bd49b39c4ca0aff369bb565ff56f"></a>partstrategy</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac2cdaa1306d64418bd975efe070cfd70"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac2cdaa1306d64418bd975efe070cfd70"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac2cdaa1306d64418bd975efe070cfd70"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ab59a5a0126ff4dc5a660144496392db3"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ab59a5a0126ff4dc5a660144496392db3"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ab59a5a0126ff4dc5a660144496392db3"></a>分区表分区策略，现在仅支持：<a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_ul156455338321"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_ul156455338321"></a><ul id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_ul156455338321"><li>'r'：范围分区。</li><li>'v'：数值分区。</li><li>'i'：间隔分区。</li><li>'l'：list分区。</li><li>'h'：hash分区。</li><li>'n'：无效分区。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r208a62360c6c47828cb357fddc9a11dc"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa8c8602b26bb44e19266d360d86a05c3"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa8c8602b26bb44e19266d360d86a05c3"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa8c8602b26bb44e19266d360d86a05c3"></a>relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae4e2328655bc4416916e93a75602a45c"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae4e2328655bc4416916e93a75602a45c"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae4e2328655bc4416916e93a75602a45c"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae789c8aa303e4fdaaf6b05399e9b3590"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae789c8aa303e4fdaaf6b05399e9b3590"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae789c8aa303e4fdaaf6b05399e9b3590"></a>table partition、index partition、分区上toast表的物理存储位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ra47b7368c7b84bfea529ad3fb6255e67"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aafdd4d0616b346d3a99f7e747a6623bb"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aafdd4d0616b346d3a99f7e747a6623bb"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aafdd4d0616b346d3a99f7e747a6623bb"></a>reltablespace</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a21d8005e6b7a4b83a5b3d5723a3e39dd"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a21d8005e6b7a4b83a5b3d5723a3e39dd"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a21d8005e6b7a4b83a5b3d5723a3e39dd"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aece7fb30f5824c33a1679f9d7fdff4dd"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aece7fb30f5824c33a1679f9d7fdff4dd"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aece7fb30f5824c33a1679f9d7fdff4dd"></a>table partition、index partition、分区上toast表所属表空间的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r3f7e3b5050944637a90b774d2dfc6fec"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0771a071578e4f3f8e9f6efaf39fb69c"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0771a071578e4f3f8e9f6efaf39fb69c"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0771a071578e4f3f8e9f6efaf39fb69c"></a>relpages</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aded4963c40f24ad290591d2cc4f62f14"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aded4963c40f24ad290591d2cc4f62f14"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aded4963c40f24ad290591d2cc4f62f14"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3746f6d34d404084b75cd9e6c29cb3f1"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3746f6d34d404084b75cd9e6c29cb3f1"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3746f6d34d404084b75cd9e6c29cb3f1"></a>统计信息：table partition、index partition的数据页数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r01d61c35e5334be69dffdedd782b17aa"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aeae68915dc114f7b990634374155450f"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aeae68915dc114f7b990634374155450f"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aeae68915dc114f7b990634374155450f"></a>reltuples</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a841809bdc9ff412384f792d28f8516a7"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a841809bdc9ff412384f792d28f8516a7"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a841809bdc9ff412384f792d28f8516a7"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0653ea48eb3d48059f0bc8a8a22e31f3"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0653ea48eb3d48059f0bc8a8a22e31f3"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0653ea48eb3d48059f0bc8a8a22e31f3"></a>统计信息：table partition、index partition的元组数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_rfebc636bae05420c8c19f15d89ecb10e"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a70ebecaca12f4f9d80c662154bd556a7"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a70ebecaca12f4f9d80c662154bd556a7"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a70ebecaca12f4f9d80c662154bd556a7"></a>relallvisible</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0c8024e15583422ab1583e1beeb1aaad"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0c8024e15583422ab1583e1beeb1aaad"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0c8024e15583422ab1583e1beeb1aaad"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6f8a16b575fe4fa494bea945ce44a581"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6f8a16b575fe4fa494bea945ce44a581"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6f8a16b575fe4fa494bea945ce44a581"></a>统计信息：table partition、index partition的可见数据页数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_rf9c3b96c08db4f8db73f71c680dfaa24"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a98f022f1da684d7e99a39ee6b4dd01d4"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a98f022f1da684d7e99a39ee6b4dd01d4"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a98f022f1da684d7e99a39ee6b4dd01d4"></a>reltoastrelid</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ab52b7d8514fc40c5833c2e20d1b9633c"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ab52b7d8514fc40c5833c2e20d1b9633c"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ab52b7d8514fc40c5833c2e20d1b9633c"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac10f49f3b949477c8c48e8336fad1520"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac10f49f3b949477c8c48e8336fad1520"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac10f49f3b949477c8c48e8336fad1520"></a>table partition所对应toast表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r567766ff0df7434aaa2ca6be4abad74f"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a2624db656fa04717bc70da71b3ef84ff"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a2624db656fa04717bc70da71b3ef84ff"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a2624db656fa04717bc70da71b3ef84ff"></a>reltoastidxid</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa664d0179c764a349acd4f7ee5f3935f"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa664d0179c764a349acd4f7ee5f3935f"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa664d0179c764a349acd4f7ee5f3935f"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0eb92a660a8a4e65a61725759232e2d2"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0eb92a660a8a4e65a61725759232e2d2"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a0eb92a660a8a4e65a61725759232e2d2"></a>table partition所对应toast表的索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r5c8bdbde48dd43fbac281f51a07eaa6f"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac3e0dc99f6cd4fbeb412dea7c8046fcc"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac3e0dc99f6cd4fbeb412dea7c8046fcc"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac3e0dc99f6cd4fbeb412dea7c8046fcc"></a>indextblid</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a339faa2509234bd0845e6f6179140b83"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a339faa2509234bd0845e6f6179140b83"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a339faa2509234bd0845e6f6179140b83"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a21db0f8b74284b599fc25795c0747269"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a21db0f8b74284b599fc25795c0747269"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a21db0f8b74284b599fc25795c0747269"></a>index partition对应table partition的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_rf660905e3e544754893f0b101bd34a12"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a2abf4549361c488198d75bb6865ab71f"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a2abf4549361c488198d75bb6865ab71f"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a2abf4549361c488198d75bb6865ab71f"></a>indisusable</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a1a5145f7d52d4ee6b4a64df9fd7580dd"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a1a5145f7d52d4ee6b4a64df9fd7580dd"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a1a5145f7d52d4ee6b4a64df9fd7580dd"></a><span id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_text724795602717"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_text724795602717"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_text724795602717"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac8e49276a5f54925828e777c40ac87de"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac8e49276a5f54925828e777c40ac87de"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac8e49276a5f54925828e777c40ac87de"></a>分区索引是否可用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r2dd797cd336a4c109bb211a2e69b62f0"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5dda6a607f08458dadb805ef3f51ca85"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5dda6a607f08458dadb805ef3f51ca85"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5dda6a607f08458dadb805ef3f51ca85"></a>reldeltarelid</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a613ab72f6819465c83d67b46223450d8"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a613ab72f6819465c83d67b46223450d8"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a613ab72f6819465c83d67b46223450d8"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae8d2d35d59184499998a3358b47f37e8"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae8d2d35d59184499998a3358b47f37e8"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae8d2d35d59184499998a3358b47f37e8"></a>Delta表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r3841071b0b5b4253a70cff2339bb44aa"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a086b3d0a03194d4ebdf890cb97b744dd"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a086b3d0a03194d4ebdf890cb97b744dd"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a086b3d0a03194d4ebdf890cb97b744dd"></a>reldeltaidx</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5e85aca384c4403aa9dd92d8b228dd38"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5e85aca384c4403aa9dd92d8b228dd38"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5e85aca384c4403aa9dd92d8b228dd38"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a8596ccfc0c71455296c64d8fe58082a4"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a8596ccfc0c71455296c64d8fe58082a4"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a8596ccfc0c71455296c64d8fe58082a4"></a>Delta表的索引表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r9b441143d2bb4399bb0340142fcbbd17"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5e60b5b6fd344edabae85f5c677502aa"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5e60b5b6fd344edabae85f5c677502aa"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a5e60b5b6fd344edabae85f5c677502aa"></a>relcudescrelid</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3f9bfd7563194cc5a0f503052e2deb63"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3f9bfd7563194cc5a0f503052e2deb63"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3f9bfd7563194cc5a0f503052e2deb63"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_abb12c803edfb4ca9ae70af17e2c350a8"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_abb12c803edfb4ca9ae70af17e2c350a8"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_abb12c803edfb4ca9ae70af17e2c350a8"></a>CU描述表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r11a43c0cb320409bbb1b8a24ba5de3cf"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a80c7c320ac0d430eb3cda4115deced74"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a80c7c320ac0d430eb3cda4115deced74"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a80c7c320ac0d430eb3cda4115deced74"></a>relcudescidx</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a7aca907f95724ffbb5915f2ac2553219"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a7aca907f95724ffbb5915f2ac2553219"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a7aca907f95724ffbb5915f2ac2553219"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae537c006953e41d68aba1ab647fafd61"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae537c006953e41d68aba1ab647fafd61"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ae537c006953e41d68aba1ab647fafd61"></a>CU描述表的索引表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r7f31a6c7540942d7a88b16196aa24ba9"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac962d659b57c4eea9f3d1b56715a07d4"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac962d659b57c4eea9f3d1b56715a07d4"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ac962d659b57c4eea9f3d1b56715a07d4"></a>relfrozenxid</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a95e9a9b25b104d69b45fd97fa6a5ce19"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a95e9a9b25b104d69b45fd97fa6a5ce19"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a95e9a9b25b104d69b45fd97fa6a5ce19"></a>xid32</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p58881055173213"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p58881055173213"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p58881055173213"></a>冻结事务ID号。</p>
<p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa6f0de0f45534315bbea0386c317e80c"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa6f0de0f45534315bbea0386c317e80c"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa6f0de0f45534315bbea0386c317e80c"></a>为保持前向兼容，保留此字段，新增relfrozenxid64用于记录此信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r9abad2b08c2341639f86f3572fdafc5c"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a1462b99a6585482cb98baa894de6f7bc"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a1462b99a6585482cb98baa894de6f7bc"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a1462b99a6585482cb98baa894de6f7bc"></a>intspnum</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a604a29547e1d43bdb1405debece0ea0e"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a604a29547e1d43bdb1405debece0ea0e"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a604a29547e1d43bdb1405debece0ea0e"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ad12f8373928245e695b9a0de252899e2"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ad12f8373928245e695b9a0de252899e2"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ad12f8373928245e695b9a0de252899e2"></a>间隔分区所属表空间的个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_rffb9f162c9d24f7e9fdbb0ef8b3f4c81"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aaad21d0d1acc4f46965d0c74ef76da35"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aaad21d0d1acc4f46965d0c74ef76da35"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aaad21d0d1acc4f46965d0c74ef76da35"></a>partkey</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aaa89c15784bf40f5a939570939781da6"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aaa89c15784bf40f5a939570939781da6"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aaa89c15784bf40f5a939570939781da6"></a>int2vector</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6df354d9c8604d5dbf13e86870ab36b2"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6df354d9c8604d5dbf13e86870ab36b2"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a6df354d9c8604d5dbf13e86870ab36b2"></a>分区键的列号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r77f68ce148134b2db6fc38032c67a421"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ab42ed860362c4757b6e19859ee1dd0f7"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ab42ed860362c4757b6e19859ee1dd0f7"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ab42ed860362c4757b6e19859ee1dd0f7"></a>intervaltablespace</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a1caaaffddbcf46b3afa41a367ee09cf7"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a1caaaffddbcf46b3afa41a367ee09cf7"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a1caaaffddbcf46b3afa41a367ee09cf7"></a>oidvector</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a84b59b7d7ba746d9bd5de7135fe86269"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a84b59b7d7ba746d9bd5de7135fe86269"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a84b59b7d7ba746d9bd5de7135fe86269"></a>间隔分区所属的表空间，间隔分区以round-robin方式落在这些表空间内。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r8f487642472741cca13bb8b9a4690d1a"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a031eefe10a2a4e14b6cf1bdee33f0793"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a031eefe10a2a4e14b6cf1bdee33f0793"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a031eefe10a2a4e14b6cf1bdee33f0793"></a>interval</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3178fad022ba4221a16e1740d41bcba2"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3178fad022ba4221a16e1740d41bcba2"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a3178fad022ba4221a16e1740d41bcba2"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_acd6a4788e9964a98867fab8ab0b9dad1"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_acd6a4788e9964a98867fab8ab0b9dad1"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_acd6a4788e9964a98867fab8ab0b9dad1"></a>间隔分区的间隔值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_rb04fc83d9cc34b09b6ca9fac64996caa"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a708633ce98d649d2844cd8ce1a279877"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a708633ce98d649d2844cd8ce1a279877"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a708633ce98d649d2844cd8ce1a279877"></a>boundaries</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa94121a5819248f49f341fbf03e6b525"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa94121a5819248f49f341fbf03e6b525"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_aa94121a5819248f49f341fbf03e6b525"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a7687a26ca2954ee6b93b2b79be3a410e"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a7687a26ca2954ee6b93b2b79be3a410e"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a7687a26ca2954ee6b93b2b79be3a410e"></a>范围分区和间隔分区的上边界。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_r10c8485ee37f41cdb41e56919e357b1d"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ad16ce6e3dce74011b8d56d2fe2e63e97"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ad16ce6e3dce74011b8d56d2fe2e63e97"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_ad16ce6e3dce74011b8d56d2fe2e63e97"></a>transit</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a17f85c5d78484f71852ebc0b18827f6b"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a17f85c5d78484f71852ebc0b18827f6b"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a17f85c5d78484f71852ebc0b18827f6b"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a84dd70a0dbae448f95e3e5cabe1cf8f5"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a84dd70a0dbae448f95e3e5cabe1cf8f5"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_zh-cn_topic_0059779194_a84dd70a0dbae448f95e3e5cabe1cf8f5"></a>间隔分区的跳转点。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_row3779121519563"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p27801115115615"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p27801115115615"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p27801115115615"></a>reloptions</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p12781131555614"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p12781131555614"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p12781131555614"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p15781121575617"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p15781121575617"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p15781121575617"></a>设置partition的存储属性，与pg_class.reloptions的形态一样，用“keyword=value”格式的字符串来表示，目前用于在线扩容的信息搜集。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_row17427204774817"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p1942874784818"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p1942874784818"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p1942874784818"></a>relfrozenxid64</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p8428447114811"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p8428447114811"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p8428447114811"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p114281847184818"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p114281847184818"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p114281847184818"></a>冻结事务ID号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_row17427204774817"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p1942874784818"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p1942874784818"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p1942874784818"></a>relminmxid</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p8428447114811"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p8428447114811"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p8428447114811"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p114281847184818"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p114281847184818"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p114281847184818"></a>冻结多事务ID号。</p>
</td>
</tr>
<tr id="row1145064432220"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="p473718403619"><a name="p473718403619"></a><a name="p473718403619"></a>partitionno</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="p15638201511718"><a name="p15638201511718"></a><a name="p15638201511718"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><div class="p" id="p2069231971919"><a name="p2069231971919"></a><a name="p2069231971919"></a>用于维护分区表中的分区Map结构。<a name="ul051711610402"></a><a name="ul051711610402"></a><ul id="ul051711610402"><li>当对象为分区时，此字段表示分区ID，从1开始自增。</li><li>当对象为分区表时，此字段表示分区ID的最大值，并使用负值来特殊标记，该值会随着部分分区DDL语法不断递增。</li><li>当对象为其他类型时，此字段为空值，没有任何含义。</li></ul>
</div>
<p id="p1735762532420"><a name="p1735762532420"></a><a name="p1735762532420"></a>partitionno是一个永久自增列，可以通过语法ALTER TABLE t_name RESET PARTITION或者VACUUM FULL命令重置/回收。</p>
</td>
</tr>
<tr id="row4450114472214"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="p2867155618610"><a name="p2867155618610"></a><a name="p2867155618610"></a>subpartitionno</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="p5760131615718"><a name="p5760131615718"></a><a name="p5760131615718"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><div class="p" id="p2970115214227"><a name="p2970115214227"></a><a name="p2970115214227"></a>用于维护分区表中的二级分区Map结构。<a name="ul7161143054016"></a><a name="ul7161143054016"></a><ul id="ul7161143054016"><li>当对象为二级分区时，此字段表示二级分区ID，从1开始自增。</li><li>当对象为二级分区表的一级分区时，此字段表示二级分区ID的最大值，并使用负值来特殊标记，该值会随着部分分区DDL语法不断递增。</li><li>当对象为其他类型时，此字段为空值，没有任何含义。</li></ul>
</div>
<p id="p1526511328252"><a name="p1526511328252"></a><a name="p1526511328252"></a>subpartitionno是一个永久自增列，可以通过语法ALTER TABLE t_name RESET PARTITION或者VACUUM FULL命令重置/回收。</p>
</td>
</tr>
</tr>
<tr id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_row3779121519563"><td class="cellrowborder" valign="top" width="25.44%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p27801115115615"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p27801115115615"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p27801115115615"></a>partkeyexpr</p>
</td>
<td class="cellrowborder" valign="top" width="15.97%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p12781131555614"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p12781131555614"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p12781131555614"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.589999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p15781121575617"><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p15781121575617"></a><a name="zh-cn_topic_0283136920_zh-cn_topic_0237122306_p15781121575617"></a>用于存储分区表表达式分区键的解析内容，如果分区键是单独的列则该属性为空</p>
</td>
</tr>
</tbody>
</table>

