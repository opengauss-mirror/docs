# PG\_STATIO\_USER\_INDEXES

PG\_STATIO\_USER\_INDEXES视图显示命名空间中所有用户关系表索引的IO状态信息。

**表 1**  PG\_STATIO\_USER\_INDEXES字段

<a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_t1341a4bb1a23414490405334dede0bcc"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_r2e6b356154b0435e97202902981f9d7c"><th class="cellrowborder" valign="top" width="25.85%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a1f649c9e22344761aa8dc258221ec24b"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a1f649c9e22344761aa8dc258221ec24b"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a1f649c9e22344761aa8dc258221ec24b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="23.03%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a131761559e614b558cb1ccdd7e653db2"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a131761559e614b558cb1ccdd7e653db2"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a131761559e614b558cb1ccdd7e653db2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="51.12%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a2702a98ed0e3469ab3a68a38e62966f8"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a2702a98ed0e3469ab3a68a38e62966f8"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a2702a98ed0e3469ab3a68a38e62966f8"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_rd10a6ed25b714c21ac4c314bfc555a50"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_af0df9eab8e7e483aaec3d628d98a4e05"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_af0df9eab8e7e483aaec3d628d98a4e05"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_af0df9eab8e7e483aaec3d628d98a4e05"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a678f01842fd8404f92e3554b91ad5b20"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a678f01842fd8404f92e3554b91ad5b20"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a678f01842fd8404f92e3554b91ad5b20"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.12%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_af4b6975202c04032b2d56386744cfbe3"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_af4b6975202c04032b2d56386744cfbe3"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_af4b6975202c04032b2d56386744cfbe3"></a>索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_rb2074529736e4266bcd948133d986d18"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a83353cc8574b47b7aba8a0ba158fc141"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a83353cc8574b47b7aba8a0ba158fc141"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a83353cc8574b47b7aba8a0ba158fc141"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_ac7acf10eb3224f268e436479e1d23273"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_ac7acf10eb3224f268e436479e1d23273"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_ac7acf10eb3224f268e436479e1d23273"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="51.12%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_aa25f4ff6126f4e8d8e24ad6d1f706a5f"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_aa25f4ff6126f4e8d8e24ad6d1f706a5f"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_aa25f4ff6126f4e8d8e24ad6d1f706a5f"></a>该索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_r93b70c89c5254690aedafe307fcb853c"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a8fb0e9d54736492280335df0a469aade"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a8fb0e9d54736492280335df0a469aade"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a8fb0e9d54736492280335df0a469aade"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_ab5a5a175079749a6a79d08e45b407b84"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_ab5a5a175079749a6a79d08e45b407b84"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_ab5a5a175079749a6a79d08e45b407b84"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.12%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a11de4d32ae534cef8f7ad76587ee50f0"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a11de4d32ae534cef8f7ad76587ee50f0"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a11de4d32ae534cef8f7ad76587ee50f0"></a>该索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_raf39efa359bb48aa919d5cbcc57321fb"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a67ff4b9220f54924bec57fb582dc3340"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a67ff4b9220f54924bec57fb582dc3340"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a67ff4b9220f54924bec57fb582dc3340"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a7167db765d234041a7a56843d7d8b4e2"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a7167db765d234041a7a56843d7d8b4e2"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a7167db765d234041a7a56843d7d8b4e2"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.12%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_ae2452176af094d0da2bc4641d67efa68"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_ae2452176af094d0da2bc4641d67efa68"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_ae2452176af094d0da2bc4641d67efa68"></a>该索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_ra1b4c4fa6688436688c96753c63b39a7"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a81e4d77fccb542f385a43c07c47d3cfc"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a81e4d77fccb542f385a43c07c47d3cfc"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a81e4d77fccb542f385a43c07c47d3cfc"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a4ad6e890ec77448496835f4a78d11583"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a4ad6e890ec77448496835f4a78d11583"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a4ad6e890ec77448496835f4a78d11583"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="51.12%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a2788a006a6754ccf8f0504d43a44a7b2"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a2788a006a6754ccf8f0504d43a44a7b2"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a2788a006a6754ccf8f0504d43a44a7b2"></a>索引名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_rce219815e9404a07a07ba6701a6ccc01"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a478d0214bc994393a0eaa971d7bdf119"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a478d0214bc994393a0eaa971d7bdf119"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a478d0214bc994393a0eaa971d7bdf119"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a1f113c934a7641d28ceb6f53ebff0627"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a1f113c934a7641d28ceb6f53ebff0627"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a1f113c934a7641d28ceb6f53ebff0627"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.12%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_afd5988f1e13e459aa444c1ddbc2ba26d"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_afd5988f1e13e459aa444c1ddbc2ba26d"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_afd5988f1e13e459aa444c1ddbc2ba26d"></a>从索引中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_r9e56ddc7f1dd4300abe4c4dbe040518c"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a84a8a1853648419b969bb79c213881d7"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a84a8a1853648419b969bb79c213881d7"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a84a8a1853648419b969bb79c213881d7"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a3f05ae934e7447e09894d9240c31656d"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a3f05ae934e7447e09894d9240c31656d"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a3f05ae934e7447e09894d9240c31656d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.12%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a7565a557e9b4411e8d3f1481f812dbbe"><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a7565a557e9b4411e8d3f1481f812dbbe"></a><a name="zh-cn_topic_0283137714_zh-cn_topic_0237122463_zh-cn_topic_0059778710_a7565a557e9b4411e8d3f1481f812dbbe"></a>索引命中缓存数。</p>
</td>
</tr>
</tbody>
</table>
