# PG\_SHDEPEND

PG\_SHDEPEND系统表记录数据库对象和共享对象（比如角色）之间的依赖性关系。这些信息允许openGauss保证在企图删除这些对象之前，这些对象是没有被引用的。

[PG\_DEPEND](PG_DEPEND.md)的作用类似，只是它是用于在一个数据库内部的对象的依赖性关系的。

和其它大多数系统表不同，PG\_SHDEPEND是在openGauss里面所有的数据库之间共享的：每个openGauss只有一个PG\_SHDEPEND，而不是每个数据库一个。

**表 1**  PG\_SHDEPEND字段

<a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_t27b085e89ebd42c68d65b01fceaf8a4c"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_r8417af7187e34e1ca9a59650aae99fd6"><th class="cellrowborder" valign="top" width="15.229999999999999%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a851db343909b4c108175e472aa7f6104"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a851db343909b4c108175e472aa7f6104"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a851db343909b4c108175e472aa7f6104"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.590000000000002%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a7d6c53bb50fc448aafa03c3f29d11a82"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a7d6c53bb50fc448aafa03c3f29d11a82"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a7d6c53bb50fc448aafa03c3f29d11a82"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="21.73%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a0da30404906d49e2828ce5bf41995ad4"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a0da30404906d49e2828ce5bf41995ad4"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a0da30404906d49e2828ce5bf41995ad4"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="50.449999999999996%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a29f6b37d24834a8c814b78cd618f1a6f"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a29f6b37d24834a8c814b78cd618f1a6f"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a29f6b37d24834a8c814b78cd618f1a6f"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_r955991789291496ba218378120e7296b"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_af8bf6085242d49b7916d2441987cc22b"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_af8bf6085242d49b7916d2441987cc22b"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_af8bf6085242d49b7916d2441987cc22b"></a>dbid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ad05c04b79f634a169cd213e84195baee"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ad05c04b79f634a169cd213e84195baee"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ad05c04b79f634a169cd213e84195baee"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a40ff5c957a3e4fc59572bb4625ec3329"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a40ff5c957a3e4fc59572bb4625ec3329"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a40ff5c957a3e4fc59572bb4625ec3329"></a><a href="PG_DATABASE.md">PG_DATABASE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a8aa5ec846bac4d07bbd9165f40c8d81a"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a8aa5ec846bac4d07bbd9165f40c8d81a"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a8aa5ec846bac4d07bbd9165f40c8d81a"></a>依赖对象所在的数据库的OID，如果是共享对象，则为零。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_r5c689fb4174b4aed85f6ff7b445b2121"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a6a6b446e7cef42168c1c662330f83f7b"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a6a6b446e7cef42168c1c662330f83f7b"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a6a6b446e7cef42168c1c662330f83f7b"></a>classid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ab4a2d3c02b524ecb955182ec8b2aa9bd"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ab4a2d3c02b524ecb955182ec8b2aa9bd"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ab4a2d3c02b524ecb955182ec8b2aa9bd"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ad7b21d3be2064bf885bdd347f3473e67"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ad7b21d3be2064bf885bdd347f3473e67"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ad7b21d3be2064bf885bdd347f3473e67"></a><a href="PG_CLASS.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a73bb9917800c4a28b4896041306c2953"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a73bb9917800c4a28b4896041306c2953"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a73bb9917800c4a28b4896041306c2953"></a>依赖对象所在的系统表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_r6489017ba3a441ff9480ec2afe84261b"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a51d69320c51940a1a35bef16e4d4df69"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a51d69320c51940a1a35bef16e4d4df69"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a51d69320c51940a1a35bef16e4d4df69"></a>objid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ad87b0a0c47bf44a0a59bb64da9df45c7"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ad87b0a0c47bf44a0a59bb64da9df45c7"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ad87b0a0c47bf44a0a59bb64da9df45c7"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a2df2719cd87049f48f939326776e9b80"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a2df2719cd87049f48f939326776e9b80"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a2df2719cd87049f48f939326776e9b80"></a>任意OID属性</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a94ddb070c05c42bfae1723bfe7ceb84e"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a94ddb070c05c42bfae1723bfe7ceb84e"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a94ddb070c05c42bfae1723bfe7ceb84e"></a>指定的依赖对象的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_r48daae77667c4a6885438f59b7f81733"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a5ed172386b4c49a3be7a56a0bf4f7566"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a5ed172386b4c49a3be7a56a0bf4f7566"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a5ed172386b4c49a3be7a56a0bf4f7566"></a>objsubid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a7658ff76b8ff4ef78d35a10b1f84fb95"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a7658ff76b8ff4ef78d35a10b1f84fb95"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a7658ff76b8ff4ef78d35a10b1f84fb95"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ae01a08adc2f74b98a78c9b0db113f569"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ae01a08adc2f74b98a78c9b0db113f569"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ae01a08adc2f74b98a78c9b0db113f569"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a34fd3bb65c044b5d83c1d705696f9509"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a34fd3bb65c044b5d83c1d705696f9509"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a34fd3bb65c044b5d83c1d705696f9509"></a>对于一个表字段，这是字段号（objid和classid参考表本身）。对于所有其他对象类型，这个字段为零。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_rb8f7f5ce20044f90bc443a3d434521c6"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ada0ab92650914d4dbaccd620a032dce9"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ada0ab92650914d4dbaccd620a032dce9"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ada0ab92650914d4dbaccd620a032dce9"></a>refclassid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a5c22a764707e4a10a18346329dd08ab5"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a5c22a764707e4a10a18346329dd08ab5"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a5c22a764707e4a10a18346329dd08ab5"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a699d32fc2f8549aea23c5eb8503f49ee"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a699d32fc2f8549aea23c5eb8503f49ee"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a699d32fc2f8549aea23c5eb8503f49ee"></a><a href="PG_CLASS.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a699e2fbd4c8f480ba65994e4a02b066c"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a699e2fbd4c8f480ba65994e4a02b066c"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a699e2fbd4c8f480ba65994e4a02b066c"></a>被引用对象所在的系统表的OID（必须是一个共享表）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_rfee4540ac48d444ab78a790f58c11b52"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ab8bb5468c2c54f4a9a9ecf503a2d84bb"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ab8bb5468c2c54f4a9a9ecf503a2d84bb"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ab8bb5468c2c54f4a9a9ecf503a2d84bb"></a>refobjid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_af4604e9106ee43a0a32824024a282996"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_af4604e9106ee43a0a32824024a282996"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_af4604e9106ee43a0a32824024a282996"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a55995ba409364caeac026f12faa8a3b1"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a55995ba409364caeac026f12faa8a3b1"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a55995ba409364caeac026f12faa8a3b1"></a>任意OID属性</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ade77c99d3075499a9d813ae37d6b6552"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ade77c99d3075499a9d813ae37d6b6552"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ade77c99d3075499a9d813ae37d6b6552"></a>指定的被引用对象的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_r8762f3054e0f446a9ead1037867595bb"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a757c124f948044a3958dec69ee08a871"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a757c124f948044a3958dec69ee08a871"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_a757c124f948044a3958dec69ee08a871"></a>deptype</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_aad8b2ce4e98e45d5b24483738ae8e5b1"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_aad8b2ce4e98e45d5b24483738ae8e5b1"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_aad8b2ce4e98e45d5b24483738ae8e5b1"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_acc2d785d5bad418089efcfcac940aa7d"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_acc2d785d5bad418089efcfcac940aa7d"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_acc2d785d5bad418089efcfcac940aa7d"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ab8c8590388d348d5b0e361c9895494e4"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ab8c8590388d348d5b0e361c9895494e4"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_zh-cn_topic_0059778501_ab8c8590388d348d5b0e361c9895494e4"></a>一段代码，定义了这个依赖性关系的特定语义；参阅下文。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_row49453021144559"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p46271755144559"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p46271755144559"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p46271755144559"></a>objfile</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p57024678144559"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p57024678144559"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p57024678144559"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p55596181144559"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p55596181144559"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p55596181144559"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p6996801144559"><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p6996801144559"></a><a name="zh-cn_topic_0283137157_zh-cn_topic_0237122314_p6996801144559"></a>用户定义函数库文件路径。</p>
</td>
</tr>
</tbody>
</table>

在任何情况下，一条PG\_SHDEPEND记录就表明这个被引用的对象不能在未删除依赖对象的前提下删除。不过，deptype同时还标出了几种不同的子风格：

-   SHARED\_DEPENDENCY\_OWNER \(o\)

    被引用的对象（必须是一个角色）是依赖对象的所有者。

-   SHARED\_DEPENDENCY\_ACL \(a\)

    被引用的对象（必须是一个角色）在依赖对象的ACL（访问控制列表，也就是权限列表）里提到。SHARED\_DEPENDENCY\_ACL不会在对象的所有者头上添加的，因为所有者会有一个SHARED\_DEPENDENCY\_OWNER记录。

-   SHARED\_DEPENDENCY\_PIN \(p\)

    没有依赖对象；这类记录标识系统自身依赖于该被依赖对象，因此这样的对象绝对不能被删除。这种类型的记录只是由initdb创建。这样的依赖对象的字段都是零。

-   SHARED\_DEPENDENCY\_ DBPRIV\(d\)

    被引用的对象（必须是一个角色）具有依赖对象所对应的ANY权限（指定的依赖对象的OID对应的是系统表gs\_db\_privilege中一行）。
