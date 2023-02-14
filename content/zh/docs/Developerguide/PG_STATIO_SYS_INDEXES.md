# PG\_STATIO\_SYS\_INDEXES

PG\_STATIO\_SYS\_INDEXES视图显示命名空间中所有系统表索引的IO状态信息。

**表 1**  PG\_STATIO\_SYS\_INDEXES字段

<a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_t79d73d44eb93433692711efc086fa9dd"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_r7f45ca23ad0048c5a1eddd7091ef87ba"><th class="cellrowborder" valign="top" width="25.85%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a402072edd59243bbb9461659cf0b2c87"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a402072edd59243bbb9461659cf0b2c87"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a402072edd59243bbb9461659cf0b2c87"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.96%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a45595d6f230b4144821ef4eb5b6f9298"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a45595d6f230b4144821ef4eb5b6f9298"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a45595d6f230b4144821ef4eb5b6f9298"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="53.190000000000005%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ac1c1c7fff2ee46c0b618dde8dde772e6"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ac1c1c7fff2ee46c0b618dde8dde772e6"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ac1c1c7fff2ee46c0b618dde8dde772e6"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_rb389749af01946bd867d36cc0cb2a796"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a867faf40e729407498cc463db33102ae"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a867faf40e729407498cc463db33102ae"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a867faf40e729407498cc463db33102ae"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="20.96%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab2c0077b7ee344ba863193715dfc6a57"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab2c0077b7ee344ba863193715dfc6a57"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab2c0077b7ee344ba863193715dfc6a57"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="53.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_aad4ba636a5b74ef58e91f0e13a894356"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_aad4ba636a5b74ef58e91f0e13a894356"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_aad4ba636a5b74ef58e91f0e13a894356"></a>索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_r5e43629df8e24f4c82909c6beee7bb78"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab3702c7fabb642cab85f78ada6a714eb"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab3702c7fabb642cab85f78ada6a714eb"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab3702c7fabb642cab85f78ada6a714eb"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="20.96%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a672905934a6c49dda0fdba2480821575"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a672905934a6c49dda0fdba2480821575"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a672905934a6c49dda0fdba2480821575"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="53.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_af2553d7a4ab04d4c9a7addab89eb1553"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_af2553d7a4ab04d4c9a7addab89eb1553"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_af2553d7a4ab04d4c9a7addab89eb1553"></a>该索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_rf38ee626e39f428da2c6c30d11ffd486"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a85fc721d6d964b9eb40e61bd13fde7a8"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a85fc721d6d964b9eb40e61bd13fde7a8"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a85fc721d6d964b9eb40e61bd13fde7a8"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="20.96%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a2c3678b7bd464c9fa67f8fb7c2e5799b"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a2c3678b7bd464c9fa67f8fb7c2e5799b"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a2c3678b7bd464c9fa67f8fb7c2e5799b"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a116f14cb8e4f4493b84193f81f89b34e"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a116f14cb8e4f4493b84193f81f89b34e"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a116f14cb8e4f4493b84193f81f89b34e"></a>该索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_r759b406394664c4d8c6576129b031b86"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab0d7725b019f4b88a0dac9a93b911c9b"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab0d7725b019f4b88a0dac9a93b911c9b"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab0d7725b019f4b88a0dac9a93b911c9b"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="20.96%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a7470da695994491db0f500e72851a7c9"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a7470da695994491db0f500e72851a7c9"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a7470da695994491db0f500e72851a7c9"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a59253de0fbf54b5cbde33dc67c179d4b"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a59253de0fbf54b5cbde33dc67c179d4b"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a59253de0fbf54b5cbde33dc67c179d4b"></a>该索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_rbb6a58fd3ece47648af115a14359e241"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ae502b07a56b04039a5fa3cf48191c545"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ae502b07a56b04039a5fa3cf48191c545"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ae502b07a56b04039a5fa3cf48191c545"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="20.96%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_abf93f15b20b0467faea8631197a071c2"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_abf93f15b20b0467faea8631197a071c2"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_abf93f15b20b0467faea8631197a071c2"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a067add01ce41444d93d15c056b25cab5"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a067add01ce41444d93d15c056b25cab5"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a067add01ce41444d93d15c056b25cab5"></a>索引名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_r4d76242ecb5c4a3593f76d560c06b754"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab474790a9c064750a32ba7df213da076"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab474790a9c064750a32ba7df213da076"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ab474790a9c064750a32ba7df213da076"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="20.96%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a22a8142257f9484faed217be7900509e"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a22a8142257f9484faed217be7900509e"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a22a8142257f9484faed217be7900509e"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a370e37d3002e4172a4381b0fb153363e"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a370e37d3002e4172a4381b0fb153363e"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a370e37d3002e4172a4381b0fb153363e"></a>从索引中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_rcce760281fe642d1a03dd3873f1d4bb0"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a70d3b49f5f474d00be07370ca73584d4"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a70d3b49f5f474d00be07370ca73584d4"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a70d3b49f5f474d00be07370ca73584d4"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="20.96%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a59e507ffba3547db8656f0184a69e866"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a59e507ffba3547db8656f0184a69e866"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_a59e507ffba3547db8656f0184a69e866"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ac26774ffab1e4dacad7d3af7fc076788"><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ac26774ffab1e4dacad7d3af7fc076788"></a><a name="zh-cn_topic_0283136576_zh-cn_topic_0237122460_zh-cn_topic_0059778131_ac26774ffab1e4dacad7d3af7fc076788"></a>索引命中缓存数。</p>
</td>
</tr>
</tbody>
</table>
