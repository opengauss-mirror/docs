# PG\_STAT\_SYS\_INDEXES

PG\_STAT\_SYS\_INDEXES视图显示pg\_catalog、information\_schema模式中所有系统表的索引状态信息。

**表 1**  PG\_STAT\_SYS\_INDEXES字段

<a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_t552010b487d34b5cb577e72709454957"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_r14b81a2983754a98b054e3fd79733a03"><th class="cellrowborder" valign="top" width="24.16%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a9e5b5b3f4d6a48ad81555885c7e57870"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a9e5b5b3f4d6a48ad81555885c7e57870"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a9e5b5b3f4d6a48ad81555885c7e57870"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="15.690000000000001%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a5480981e54e748fca99cbf7eeba5541c"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a5480981e54e748fca99cbf7eeba5541c"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a5480981e54e748fca99cbf7eeba5541c"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="60.150000000000006%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ac52c0e512cba4937a76f7c6feb5b7dfd"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ac52c0e512cba4937a76f7c6feb5b7dfd"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ac52c0e512cba4937a76f7c6feb5b7dfd"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_r2f4c7829f3b742d4b29992bcdf9f16ca"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a28c8ab007cae487696e1dbec96bb8fbd"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a28c8ab007cae487696e1dbec96bb8fbd"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a28c8ab007cae487696e1dbec96bb8fbd"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="15.690000000000001%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ae0aaa9c0c02e47f1b48c9a0763ea1e49"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ae0aaa9c0c02e47f1b48c9a0763ea1e49"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ae0aaa9c0c02e47f1b48c9a0763ea1e49"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.150000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a7e93399c4b984c65b97f7d741b0c191b"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a7e93399c4b984c65b97f7d741b0c191b"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a7e93399c4b984c65b97f7d741b0c191b"></a>这个索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_r1e06451c9f4f4de89269148197b2bc18"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_acd09ccfccb484aa7a8c540ffb850fb77"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_acd09ccfccb484aa7a8c540ffb850fb77"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_acd09ccfccb484aa7a8c540ffb850fb77"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="15.690000000000001%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a40ac1d4f55e148349e87c533666bd626"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a40ac1d4f55e148349e87c533666bd626"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a40ac1d4f55e148349e87c533666bd626"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.150000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_afc86977563be4a819ab6780dfcf13675"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_afc86977563be4a819ab6780dfcf13675"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_afc86977563be4a819ab6780dfcf13675"></a>索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_r94cff559fe864d30b70130e9464bd6d4"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ace5e5743024941758527af2295284375"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ace5e5743024941758527af2295284375"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ace5e5743024941758527af2295284375"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="15.690000000000001%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a0902708823fc439186beee1aa7c12739"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a0902708823fc439186beee1aa7c12739"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a0902708823fc439186beee1aa7c12739"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.150000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a447a16eaf739444684204f52ec978343"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a447a16eaf739444684204f52ec978343"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a447a16eaf739444684204f52ec978343"></a>索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_r98bec6aed7aa4d67839f2d14fe507996"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a2374eb811cc349188cc0477c4e8a3f72"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a2374eb811cc349188cc0477c4e8a3f72"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a2374eb811cc349188cc0477c4e8a3f72"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="15.690000000000001%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a98cbca4237404d8e9f307593d6f38333"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a98cbca4237404d8e9f307593d6f38333"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a98cbca4237404d8e9f307593d6f38333"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.150000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a1fda435b275440f6808a00a8d17d454f"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a1fda435b275440f6808a00a8d17d454f"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a1fda435b275440f6808a00a8d17d454f"></a>索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_r94e41ad8fb144d68b9c5fd96918be29e"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_aaaac1e049b724778a67c930d47fa5416"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_aaaac1e049b724778a67c930d47fa5416"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_aaaac1e049b724778a67c930d47fa5416"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="15.690000000000001%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a046eed780a30452cb3a45be5ac9d3262"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a046eed780a30452cb3a45be5ac9d3262"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a046eed780a30452cb3a45be5ac9d3262"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.150000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ab62699bab6cd4d3e90d4cdf9db97c763"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ab62699bab6cd4d3e90d4cdf9db97c763"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ab62699bab6cd4d3e90d4cdf9db97c763"></a>索引名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_r43528efb1bcb43d5b10e7059a5c653c7"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a183ef6bf49534039b0cd687dc93c6ce4"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a183ef6bf49534039b0cd687dc93c6ce4"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a183ef6bf49534039b0cd687dc93c6ce4"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="15.690000000000001%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a7e3162db2b00409a92779f4a604095cd"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a7e3162db2b00409a92779f4a604095cd"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a7e3162db2b00409a92779f4a604095cd"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.150000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a24e2355a627643b2aa5bcc66436f2899"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a24e2355a627643b2aa5bcc66436f2899"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a24e2355a627643b2aa5bcc66436f2899"></a>索引上开始的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_rbc9a6f7f47174125acf0e41329cef395"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a40a07d443f624a3b8a7e2d1178609a34"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a40a07d443f624a3b8a7e2d1178609a34"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a40a07d443f624a3b8a7e2d1178609a34"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="15.690000000000001%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a956523a3fb424abaa0c418db2dd876b1"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a956523a3fb424abaa0c418db2dd876b1"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a956523a3fb424abaa0c418db2dd876b1"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.150000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a2fc3a286b8544671b8094853c4d964d0"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a2fc3a286b8544671b8094853c4d964d0"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a2fc3a286b8544671b8094853c4d964d0"></a>通过索引上扫描返回的索引项数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_r49f9b75c935a450dae30d5a34076173b"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a4781f85089804c79bac8b744bf712d14"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a4781f85089804c79bac8b744bf712d14"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a4781f85089804c79bac8b744bf712d14"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="15.690000000000001%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a0387ce3eed37404992b0649ef680a6e3"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a0387ce3eed37404992b0649ef680a6e3"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_a0387ce3eed37404992b0649ef680a6e3"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.150000000000006%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ac139ff3511f04034860e06bae1cdfaf7"><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ac139ff3511f04034860e06bae1cdfaf7"></a><a name="zh-cn_topic_0283137691_zh-cn_topic_0237122451_zh-cn_topic_0059779068_ac139ff3511f04034860e06bae1cdfaf7"></a>通过使用索引的简单索引扫描抓取的活表行数。</p>
</td>
</tr>
</tbody>
</table>

