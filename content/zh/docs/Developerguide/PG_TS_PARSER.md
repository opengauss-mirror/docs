# PG\_TS\_PARSER<a name="ZH-CN_TOPIC_0289900658"></a>

PG\_TS\_PARSER系统表包含定义文本解析器的记录。解析器负责分裂输入文本为词位，并且为每个词位分配标记类型。新解析器必须由数据库系统管理员创建。

**表 1**  PG\_TS\_PARSER字段

<a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_tefbc8068fcca42b795bd5c3474aa5fe3"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_r89008f466fa44bfaa1a2967427c96a80"><th class="cellrowborder" valign="top" width="18.61%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aaaaddbb5f85640abb2cf1b6c09766a50"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aaaaddbb5f85640abb2cf1b6c09766a50"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aaaaddbb5f85640abb2cf1b6c09766a50"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="11.66%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ac474f3c8c6a74f09af38e4be1f8de40a"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ac474f3c8c6a74f09af38e4be1f8de40a"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ac474f3c8c6a74f09af38e4be1f8de40a"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="27.060000000000002%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a8584588312344d94b6b62cf864dc29e3"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a8584588312344d94b6b62cf864dc29e3"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a8584588312344d94b6b62cf864dc29e3"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="42.67%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a78a754757f63487b9c89ce56d5626dd9"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a78a754757f63487b9c89ce56d5626dd9"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a78a754757f63487b9c89ce56d5626dd9"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_rcb852b9d650a42b19661324ae86b32f5"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_af7cb9ee950e94840a6475da9e006af19"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_af7cb9ee950e94840a6475da9e006af19"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_af7cb9ee950e94840a6475da9e006af19"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="11.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aaf89e427d22546cb9ae1031c690102ca"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aaf89e427d22546cb9ae1031c690102ca"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aaf89e427d22546cb9ae1031c690102ca"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="27.060000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aef0bda9b8b4d487f8aefaaa9cace03fa"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aef0bda9b8b4d487f8aefaaa9cace03fa"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aef0bda9b8b4d487f8aefaaa9cace03fa"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.67%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ad7542f1bece74879aa52a77c70a75bce"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ad7542f1bece74879aa52a77c70a75bce"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ad7542f1bece74879aa52a77c70a75bce"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_r96e26ec6d8c84c9aba5f057b2b3f4368"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_af75a3a0291ef41debe077bfa05f3dd22"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_af75a3a0291ef41debe077bfa05f3dd22"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_af75a3a0291ef41debe077bfa05f3dd22"></a>prsname</p>
</td>
<td class="cellrowborder" valign="top" width="11.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a65872bab4637420c854f689fda16a2c8"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a65872bab4637420c854f689fda16a2c8"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a65872bab4637420c854f689fda16a2c8"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="27.060000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a8d24a0fa9e71441a98d36e52aab4862b"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a8d24a0fa9e71441a98d36e52aab4862b"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a8d24a0fa9e71441a98d36e52aab4862b"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.67%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a12742e99d4fc42e0941c857094fe30b9"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a12742e99d4fc42e0941c857094fe30b9"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a12742e99d4fc42e0941c857094fe30b9"></a>文本搜索解析器名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_r6fe302a29c964b78a637677b41ba47aa"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a19a5f9add71b4536bcf8e17086f6e25c"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a19a5f9add71b4536bcf8e17086f6e25c"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a19a5f9add71b4536bcf8e17086f6e25c"></a>prsnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="11.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_adf043fd702ae433f8fa6244daac831ca"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_adf043fd702ae433f8fa6244daac831ca"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_adf043fd702ae433f8fa6244daac831ca"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="27.060000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aeaa0f43e54e34025ae305550d8bf3742"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aeaa0f43e54e34025ae305550d8bf3742"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aeaa0f43e54e34025ae305550d8bf3742"></a><a href="PG_NAMESPACE.md">PG_NAMESPACE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.67%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ac912bba8e8754821a4c49d69fb6774f2"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ac912bba8e8754821a4c49d69fb6774f2"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ac912bba8e8754821a4c49d69fb6774f2"></a>包含这个解析器的名称空间的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_rcb9b21f9f74946c3baa7df33c8f47f81"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a285a31fce46c440ea9517b455970b0f5"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a285a31fce46c440ea9517b455970b0f5"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a285a31fce46c440ea9517b455970b0f5"></a>prsstart</p>
</td>
<td class="cellrowborder" valign="top" width="11.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aea5bc5e3f5264c5fa41a0891c6f872b8"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aea5bc5e3f5264c5fa41a0891c6f872b8"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aea5bc5e3f5264c5fa41a0891c6f872b8"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="27.060000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a504de4af70544856b37c55b66d658c95"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a504de4af70544856b37c55b66d658c95"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a504de4af70544856b37c55b66d658c95"></a><a href="PG_PROC.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="42.67%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a2d7197168ace4061b04b4ed5f78d8abe"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a2d7197168ace4061b04b4ed5f78d8abe"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a2d7197168ace4061b04b4ed5f78d8abe"></a>解析器的启动函数名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_rca6cff060cef439db6bc7c7542e77c57"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ac344b7d06a954102a42a006ce914ad37"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ac344b7d06a954102a42a006ce914ad37"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ac344b7d06a954102a42a006ce914ad37"></a>prstoken</p>
</td>
<td class="cellrowborder" valign="top" width="11.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a54aba979d8754e24b5fc0f1c724dad03"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a54aba979d8754e24b5fc0f1c724dad03"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a54aba979d8754e24b5fc0f1c724dad03"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="27.060000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a7aa67e261f094752bc9566bf5f145c24"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a7aa67e261f094752bc9566bf5f145c24"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a7aa67e261f094752bc9566bf5f145c24"></a><a href="PG_PROC.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="42.67%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aee6183f420b04e3598c7f88c5675df9f"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aee6183f420b04e3598c7f88c5675df9f"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aee6183f420b04e3598c7f88c5675df9f"></a>解析器的下一个标记函数名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_r808d9bec5046451fb7b34f739960cb33"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a6bf9479db89a4272a6ec81bc051fa1fa"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a6bf9479db89a4272a6ec81bc051fa1fa"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a6bf9479db89a4272a6ec81bc051fa1fa"></a>prsend</p>
</td>
<td class="cellrowborder" valign="top" width="11.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a7deb6de623c5423f8c106f8dac21c6be"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a7deb6de623c5423f8c106f8dac21c6be"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a7deb6de623c5423f8c106f8dac21c6be"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="27.060000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_acb85426785734a91906eda20f56751c2"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_acb85426785734a91906eda20f56751c2"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_acb85426785734a91906eda20f56751c2"></a><a href="PG_PROC.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="42.67%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a2aa3212bd6e144bf89e2fa228b16811d"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a2aa3212bd6e144bf89e2fa228b16811d"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a2aa3212bd6e144bf89e2fa228b16811d"></a>解析器的关闭函数名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_rf9b3d542c7c44ce7a93eef094afe429e"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_acfadfa2fa38f4445912dae40e7bd0c19"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_acfadfa2fa38f4445912dae40e7bd0c19"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_acfadfa2fa38f4445912dae40e7bd0c19"></a>prsheadline</p>
</td>
<td class="cellrowborder" valign="top" width="11.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a1cbff9b935d64225b9837ad7ecabef9b"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a1cbff9b935d64225b9837ad7ecabef9b"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a1cbff9b935d64225b9837ad7ecabef9b"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="27.060000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ab80c2e452fd04583ba4c9a1ef141cbb2"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ab80c2e452fd04583ba4c9a1ef141cbb2"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_ab80c2e452fd04583ba4c9a1ef141cbb2"></a><a href="PG_PROC.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="42.67%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aa6a3bd2a3b414186b1c49ae3bf4da01f"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aa6a3bd2a3b414186b1c49ae3bf4da01f"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aa6a3bd2a3b414186b1c49ae3bf4da01f"></a>解析器的标题函数名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_rc6b315276159417d8f3544ea4027545a"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a28e96d9862c24f758335c0c6b00241af"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a28e96d9862c24f758335c0c6b00241af"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a28e96d9862c24f758335c0c6b00241af"></a>prslextype</p>
</td>
<td class="cellrowborder" valign="top" width="11.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a06b6ada11b3544329ca6f6e58c4b7feb"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a06b6ada11b3544329ca6f6e58c4b7feb"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_a06b6ada11b3544329ca6f6e58c4b7feb"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="27.060000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aa319bf99e9a344d9bf080a775b74b02a"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aa319bf99e9a344d9bf080a775b74b02a"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_zh-cn_topic_0059777552_aa319bf99e9a344d9bf080a775b74b02a"></a><a href="PG_PROC.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="42.67%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136741_zh-cn_topic_0237122325_p1045710717"><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_p1045710717"></a><a name="zh-cn_topic_0283136741_zh-cn_topic_0237122325_p1045710717"></a>解析器的lextype函数名。</p>
</td>
</tr>
</tbody>
</table>
