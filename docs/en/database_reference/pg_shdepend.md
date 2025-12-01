# PG\_SHDEPEND<a name="EN-US_TOPIC_0289900698"></a>

**PG\_SHDEPEND**  records the dependency between database objects and shared objects, such as roles. Based on this information, openGauss can ensure that those objects are unreferenced before attempting to delete them.

See also  [PG\_DEPEND](pg_depend.md), which provides a similar function for dependencies involving objects within a single database.

Unlike most system catalogs,  **PG\_SHDEPEND**  is shared across all databases in the system. There is only one copy of  **PG\_SHDEPEND**  in the openGauss system, not one per database.

**Table  1**  PG\_SHDEPEND columns

<a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_t27b085e89ebd42c68d65b01fceaf8a4c"></a>
<table><thead align="left"><tr id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_r8417af7187e34e1ca9a59650aae99fd6"><th class="cellrowborder" valign="top" width="15.229999999999999%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a851db343909b4c108175e472aa7f6104"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a851db343909b4c108175e472aa7f6104"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a851db343909b4c108175e472aa7f6104"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="12.590000000000002%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a7d6c53bb50fc448aafa03c3f29d11a82"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a7d6c53bb50fc448aafa03c3f29d11a82"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a7d6c53bb50fc448aafa03c3f29d11a82"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="21.73%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a0da30404906d49e2828ce5bf41995ad4"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a0da30404906d49e2828ce5bf41995ad4"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a0da30404906d49e2828ce5bf41995ad4"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="50.449999999999996%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a29f6b37d24834a8c814b78cd618f1a6f"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a29f6b37d24834a8c814b78cd618f1a6f"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a29f6b37d24834a8c814b78cd618f1a6f"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_r955991789291496ba218378120e7296b"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_af8bf6085242d49b7916d2441987cc22b"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_af8bf6085242d49b7916d2441987cc22b"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_af8bf6085242d49b7916d2441987cc22b"></a>dbid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ad05c04b79f634a169cd213e84195baee"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ad05c04b79f634a169cd213e84195baee"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ad05c04b79f634a169cd213e84195baee"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a40ff5c957a3e4fc59572bb4625ec3329"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a40ff5c957a3e4fc59572bb4625ec3329"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a40ff5c957a3e4fc59572bb4625ec3329"></a>OID in <a href="pg_database.md">PG_DATABASE</a></p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a8aa5ec846bac4d07bbd9165f40c8d81a"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a8aa5ec846bac4d07bbd9165f40c8d81a"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a8aa5ec846bac4d07bbd9165f40c8d81a"></a>OID of the database where a dependent object is (<strong id="b32411324185314"><a name="b32411324185314"></a><a name="b32411324185314"></a>0</strong> for a shared object)</p>
</td>
</tr>
<tr id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_r5c689fb4174b4aed85f6ff7b445b2121"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a6a6b446e7cef42168c1c662330f83f7b"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a6a6b446e7cef42168c1c662330f83f7b"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a6a6b446e7cef42168c1c662330f83f7b"></a>classid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ab4a2d3c02b524ecb955182ec8b2aa9bd"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ab4a2d3c02b524ecb955182ec8b2aa9bd"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ab4a2d3c02b524ecb955182ec8b2aa9bd"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ad7b21d3be2064bf885bdd347f3473e67"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ad7b21d3be2064bf885bdd347f3473e67"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ad7b21d3be2064bf885bdd347f3473e67"></a>OID in <a href="pg_class.md">PG_CLASS</a></p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a73bb9917800c4a28b4896041306c2953"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a73bb9917800c4a28b4896041306c2953"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a73bb9917800c4a28b4896041306c2953"></a>OID of the system catalog where a dependent object resides</p>
</td>
</tr>
<tr id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_r6489017ba3a441ff9480ec2afe84261b"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a51d69320c51940a1a35bef16e4d4df69"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a51d69320c51940a1a35bef16e4d4df69"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a51d69320c51940a1a35bef16e4d4df69"></a>objid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ad87b0a0c47bf44a0a59bb64da9df45c7"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ad87b0a0c47bf44a0a59bb64da9df45c7"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ad87b0a0c47bf44a0a59bb64da9df45c7"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a2df2719cd87049f48f939326776e9b80"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a2df2719cd87049f48f939326776e9b80"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a2df2719cd87049f48f939326776e9b80"></a>Any OID column</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a94ddb070c05c42bfae1723bfe7ceb84e"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a94ddb070c05c42bfae1723bfe7ceb84e"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a94ddb070c05c42bfae1723bfe7ceb84e"></a>OID of the dependent object</p>
</td>
</tr>
<tr id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_r48daae77667c4a6885438f59b7f81733"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a5ed172386b4c49a3be7a56a0bf4f7566"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a5ed172386b4c49a3be7a56a0bf4f7566"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a5ed172386b4c49a3be7a56a0bf4f7566"></a>objsubid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a7658ff76b8ff4ef78d35a10b1f84fb95"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a7658ff76b8ff4ef78d35a10b1f84fb95"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a7658ff76b8ff4ef78d35a10b1f84fb95"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ae01a08adc2f74b98a78c9b0db113f569"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ae01a08adc2f74b98a78c9b0db113f569"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ae01a08adc2f74b98a78c9b0db113f569"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a34fd3bb65c044b5d83c1d705696f9509"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a34fd3bb65c044b5d83c1d705696f9509"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a34fd3bb65c044b5d83c1d705696f9509"></a>Column number for a table column (<strong id="b8355113020536"><a name="b8355113020536"></a><a name="b8355113020536"></a>objid</strong> and <strong id="b1036115302530"><a name="b1036115302530"></a><a name="b1036115302530"></a>classid</strong> refer to the table itself); The value is <strong id="b2966193110539"><a name="b2966193110539"></a><a name="b2966193110539"></a>0</strong> for all other object types.</p>
</td>
</tr>
<tr id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_rb8f7f5ce20044f90bc443a3d434521c6"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ada0ab92650914d4dbaccd620a032dce9"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ada0ab92650914d4dbaccd620a032dce9"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ada0ab92650914d4dbaccd620a032dce9"></a>refclassid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a5c22a764707e4a10a18346329dd08ab5"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a5c22a764707e4a10a18346329dd08ab5"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a5c22a764707e4a10a18346329dd08ab5"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a699d32fc2f8549aea23c5eb8503f49ee"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a699d32fc2f8549aea23c5eb8503f49ee"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a699d32fc2f8549aea23c5eb8503f49ee"></a>OID in <a href="pg_class.md">PG_CLASS</a></p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a699e2fbd4c8f480ba65994e4a02b066c"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a699e2fbd4c8f480ba65994e4a02b066c"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a699e2fbd4c8f480ba65994e4a02b066c"></a>OID of the system catalog where a referenced object is (must be a shared catalog)</p>
</td>
</tr>
<tr id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_rfee4540ac48d444ab78a790f58c11b52"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ab8bb5468c2c54f4a9a9ecf503a2d84bb"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ab8bb5468c2c54f4a9a9ecf503a2d84bb"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ab8bb5468c2c54f4a9a9ecf503a2d84bb"></a>refobjid</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_af4604e9106ee43a0a32824024a282996"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_af4604e9106ee43a0a32824024a282996"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_af4604e9106ee43a0a32824024a282996"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a55995ba409364caeac026f12faa8a3b1"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a55995ba409364caeac026f12faa8a3b1"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a55995ba409364caeac026f12faa8a3b1"></a>Any OID column</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ade77c99d3075499a9d813ae37d6b6552"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ade77c99d3075499a9d813ae37d6b6552"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ade77c99d3075499a9d813ae37d6b6552"></a>OID of the referenced object</p>
</td>
</tr>
<tr id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_r8762f3054e0f446a9ead1037867595bb"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a757c124f948044a3958dec69ee08a871"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a757c124f948044a3958dec69ee08a871"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_a757c124f948044a3958dec69ee08a871"></a>deptype</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_aad8b2ce4e98e45d5b24483738ae8e5b1"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_aad8b2ce4e98e45d5b24483738ae8e5b1"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_aad8b2ce4e98e45d5b24483738ae8e5b1"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_acc2d785d5bad418089efcfcac940aa7d"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_acc2d785d5bad418089efcfcac940aa7d"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_acc2d785d5bad418089efcfcac940aa7d"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ab8c8590388d348d5b0e361c9895494e4"><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ab8c8590388d348d5b0e361c9895494e4"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_en-us_topic_0059778501_ab8c8590388d348d5b0e361c9895494e4"></a>Code segment defining the specific semantics of this dependency relationship. See the following for details.</p>
</td>
</tr>
<tr id="en-us_topic_0283137157_en-us_topic_0237122314_row49453021144559"><td class="cellrowborder" valign="top" width="15.229999999999999%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_p46271755144559"><a name="en-us_topic_0283137157_en-us_topic_0237122314_p46271755144559"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_p46271755144559"></a>objfile</p>
</td>
<td class="cellrowborder" valign="top" width="12.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_p57024678144559"><a name="en-us_topic_0283137157_en-us_topic_0237122314_p57024678144559"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_p57024678144559"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="21.73%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_p55596181144559"><a name="en-us_topic_0283137157_en-us_topic_0237122314_p55596181144559"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_p55596181144559"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="50.449999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137157_en-us_topic_0237122314_p6996801144559"><a name="en-us_topic_0283137157_en-us_topic_0237122314_p6996801144559"></a><a name="en-us_topic_0283137157_en-us_topic_0237122314_p6996801144559"></a>Path of a user-defined function library file</p>
</td>
</tr>
</tbody>
</table>

In all cases, a  **PG\_SHDEPEND**  entry indicates that the referenced object cannot be dropped without also dropping the dependent object. However, there are several subflavors identified by  **deptype**: 

-   SHARED\_DEPENDENCY\_OWNER \(o\)

    The referenced object \(which must be a role\) is the owner of the dependent object.

-   SHARED\_DEPENDENCY\_ACL \(a\)

    The referenced object \(which must be a role\) is mentioned in the access control list \(ACL\) of the dependent object. A  **SHARED\_DEPENDENCY\_ACL**  entry is not made for the owner of the object, since the owner will have a  **SHARED\_DEPENDENCY\_OWNER**  entry anyway.

-   SHARED\_DEPENDENCY\_PIN \(p\)

    There is no dependent object. This type of entry is a signal that the system itself depends on the referenced object, and so that object must never be deleted. Entries of this type are created only by  **initdb**. The columns for the dependent object contain zeroes.

-   SHARED\_DEPENDENCY\_ DBPRIV\(d\)

    The referenced object \(must be a role\) has the ANY permission on the dependent object \(the specified OID of the dependent object corresponds to a row in the  **GS\_DB\_PRIVILEGE**  system catalog\).


