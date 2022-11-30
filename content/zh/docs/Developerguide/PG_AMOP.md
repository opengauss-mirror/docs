# PG\_AMOP<a name="ZH-CN_TOPIC_0289900719"></a>

PG\_AMOP系统表存储有关和访问方法操作符族关联的信息。如果一个操作符是一个操作符族中的成员，则在这个表中会占据一行。一个族成员是一个search操作符或一个ordering操作符。一个操作符可以在多个族中出现，但是不能在一个族中的多个搜索位置或多个排序位置中出现。

**表 1**  PG\_AMOP字段

<a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_t24765c48f358468babdb405fd6f019cf"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_r8c71b5a50d1d46d280b6b4fdc0fa6f82"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a5c33cbf745c9453cb632f2185431f7f1"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a5c33cbf745c9453cb632f2185431f7f1"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a5c33cbf745c9453cb632f2185431f7f1"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="14.66%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a4079010d515b4e9b860295dedee705d2"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a4079010d515b4e9b860295dedee705d2"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a4079010d515b4e9b860295dedee705d2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="26.69%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a72e57102813f486aa474e92aa9906f0d"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a72e57102813f486aa474e92aa9906f0d"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a72e57102813f486aa474e92aa9906f0d"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="33.650000000000006%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ab6e41de6736d463694ecf7adde89bef5"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ab6e41de6736d463694ecf7adde89bef5"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ab6e41de6736d463694ecf7adde89bef5"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_rac6433c21d7847eaba9caaaa8ac0b4bb"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aa0e331f0f9a646438d86f2220a18c777"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="14.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ac5bb8f24ba914a4b98adf0ebbb782934"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.69%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a78a98df2ddc64dd8982cc9b10ad05c4d"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="33.650000000000006%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ad668328afe9e48b5ad88a38a793f82b7"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ad668328afe9e48b5ad88a38a793f82b7"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ad668328afe9e48b5ad88a38a793f82b7"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_r484a132ce8784153a20527e5109a3107"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a2b4579ca37a74000ae44ad7c2dd45586"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a2b4579ca37a74000ae44ad7c2dd45586"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a2b4579ca37a74000ae44ad7c2dd45586"></a>amopfamily</p>
</td>
<td class="cellrowborder" valign="top" width="14.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a459e3ca8495145f6ba18219f01640383"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a459e3ca8495145f6ba18219f01640383"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a459e3ca8495145f6ba18219f01640383"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.69%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0036a04f6a10496e966a5cb01c0a9c2a"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0036a04f6a10496e966a5cb01c0a9c2a"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0036a04f6a10496e966a5cb01c0a9c2a"></a><a href="PG_OPFAMILY.md">PG_OPFAMILY</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.650000000000006%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9357da4617c944028cee2f7ac0a76226"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9357da4617c944028cee2f7ac0a76226"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9357da4617c944028cee2f7ac0a76226"></a>这个项的操作符族。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_rc0aae75835f5466eb0796424df8327f2"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a1701ab1f955c4bcbb994ec5a1909bffb"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a1701ab1f955c4bcbb994ec5a1909bffb"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a1701ab1f955c4bcbb994ec5a1909bffb"></a>amoplefttype</p>
</td>
<td class="cellrowborder" valign="top" width="14.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a80d21e7f5c494a008ba901e3b7761f8c"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a80d21e7f5c494a008ba901e3b7761f8c"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a80d21e7f5c494a008ba901e3b7761f8c"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.69%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ac6ee0339c861452ebc935bc6f0f65dba"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ac6ee0339c861452ebc935bc6f0f65dba"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ac6ee0339c861452ebc935bc6f0f65dba"></a><a href="PG_TYPE.md">PG_TYPE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.650000000000006%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a1e4d45fb99154eeaba5cb7f09ad3ade8"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a1e4d45fb99154eeaba5cb7f09ad3ade8"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a1e4d45fb99154eeaba5cb7f09ad3ade8"></a>操作符的左输入类型。可能取值及其描述见于pg_type.h。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_r77f955a33dbd44c181e272790b61786f"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aa9ce20a269e44885872fe3281a216b45"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aa9ce20a269e44885872fe3281a216b45"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aa9ce20a269e44885872fe3281a216b45"></a>amoprighttype</p>
</td>
<td class="cellrowborder" valign="top" width="14.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a31fe03226d9c431a920c90d3182d3bb4"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a31fe03226d9c431a920c90d3182d3bb4"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a31fe03226d9c431a920c90d3182d3bb4"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.69%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_acfd4bb5cf9b348c4bc209cadd78eba6a"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_acfd4bb5cf9b348c4bc209cadd78eba6a"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_acfd4bb5cf9b348c4bc209cadd78eba6a"></a><a href="PG_TYPE.md">PG_TYPE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.650000000000006%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a41d23917f5344595a96980a46a3068d9"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a41d23917f5344595a96980a46a3068d9"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a41d23917f5344595a96980a46a3068d9"></a>操作符的右输入类型。可能取值及其描述见于pg_type.h。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_r123c6b79378e4f35bd5b8aa18e564c27"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aff10bc2961334e5fb5135841a64e5e87"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aff10bc2961334e5fb5135841a64e5e87"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aff10bc2961334e5fb5135841a64e5e87"></a>amopstrategy</p>
</td>
<td class="cellrowborder" valign="top" width="14.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a31b78a8b9d46410089b3fdd23f7e0e80"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a31b78a8b9d46410089b3fdd23f7e0e80"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a31b78a8b9d46410089b3fdd23f7e0e80"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="26.69%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a3e2980e79f8d4cdaa3e46641f96e971c"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a3e2980e79f8d4cdaa3e46641f96e971c"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a3e2980e79f8d4cdaa3e46641f96e971c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="33.650000000000006%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a6beace9eb0414701aa8f93611feff0e0"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a6beace9eb0414701aa8f93611feff0e0"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a6beace9eb0414701aa8f93611feff0e0"></a>操作符策略数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_rd6c2503925f24d9c9398eccee694592c"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0960d6323ae843cbbccc7cd7346a1b2a"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0960d6323ae843cbbccc7cd7346a1b2a"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0960d6323ae843cbbccc7cd7346a1b2a"></a>amoppurpose</p>
</td>
<td class="cellrowborder" valign="top" width="14.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a58419e4d45ab48e0bdf9eaa0c0e53539"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a58419e4d45ab48e0bdf9eaa0c0e53539"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a58419e4d45ab48e0bdf9eaa0c0e53539"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="26.69%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a6dacad3a0e944faa82c3cf49ef554cea"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a6dacad3a0e944faa82c3cf49ef554cea"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a6dacad3a0e944faa82c3cf49ef554cea"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="33.650000000000006%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a221000c7989047bf887b7fef1320b6ef"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a221000c7989047bf887b7fef1320b6ef"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a221000c7989047bf887b7fef1320b6ef"></a>操作符目的，s为搜索或o为排序。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_rbd8c364c865c4ba480e72ad727e086e3"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a63285573ea9a47d78146116a20945582"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a63285573ea9a47d78146116a20945582"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a63285573ea9a47d78146116a20945582"></a>amopopr</p>
</td>
<td class="cellrowborder" valign="top" width="14.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a3a04915bcab74aea9ac3d18a0acc5f70"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a3a04915bcab74aea9ac3d18a0acc5f70"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a3a04915bcab74aea9ac3d18a0acc5f70"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.69%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a18de0ff73e9f4ba682e0143f045b616d"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a18de0ff73e9f4ba682e0143f045b616d"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a18de0ff73e9f4ba682e0143f045b616d"></a><a href="PG_OPERATOR.md">PG_OPERATOR</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.650000000000006%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0dfb3f34e8e34e6b8e6051945777315a"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0dfb3f34e8e34e6b8e6051945777315a"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0dfb3f34e8e34e6b8e6051945777315a"></a>该操作符的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_r739c9e1183084e90af43fcf3ac12c8b6"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9526274cebf047278b2f4e9a0a077c50"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9526274cebf047278b2f4e9a0a077c50"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9526274cebf047278b2f4e9a0a077c50"></a>amopmethod</p>
</td>
<td class="cellrowborder" valign="top" width="14.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aff86c3b41cb644c5ae8bebeae72f628b"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aff86c3b41cb644c5ae8bebeae72f628b"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_aff86c3b41cb644c5ae8bebeae72f628b"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.69%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9536814dd0cd48d8b0865d5add961400"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9536814dd0cd48d8b0865d5add961400"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9536814dd0cd48d8b0865d5add961400"></a><a href="PG_AM.md">PG_AM</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.650000000000006%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a8bd1803356974da9aeb04b3b79c80651"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a8bd1803356974da9aeb04b3b79c80651"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a8bd1803356974da9aeb04b3b79c80651"></a>索引访问方式操作符族。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_r7716b3d50103458ba061d90860870011"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0a8805d335514857b86c0e69501eb6ac"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0a8805d335514857b86c0e69501eb6ac"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a0a8805d335514857b86c0e69501eb6ac"></a>amopsortfamily</p>
</td>
<td class="cellrowborder" valign="top" width="14.66%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9b19d44e1e3b48f9955f796c2bad16f1"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9b19d44e1e3b48f9955f796c2bad16f1"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_a9b19d44e1e3b48f9955f796c2bad16f1"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.69%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_abcfaedeae31246d39b31cd8032b85a9b"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_abcfaedeae31246d39b31cd8032b85a9b"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_abcfaedeae31246d39b31cd8032b85a9b"></a><a href="PG_OPFAMILY.md">PG_OPFAMILY</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.650000000000006%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ae46fd60e4b5d4f1186ea080d773a6e57"><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ae46fd60e4b5d4f1186ea080d773a6e57"></a><a name="zh-cn_topic_0283137662_zh-cn_topic_0237122268_zh-cn_topic_0059777617_ae46fd60e4b5d4f1186ea080d773a6e57"></a>如果是一个排序操作符，则为这个项排序所依据的btree操作符族；如果是一个搜索操作符，则为0。</p>
</td>
</tr>
</tbody>
</table>

search操作符表明这个操作符族的一个索引可以被搜索，找到所有满足WHERE indexed\_column operator constant的行。显然，这样的操作符必须返回布尔值，并且它的左输入类型必须匹配索引的字段数据类型。

ordering操作符表明这个操作符族的一个索引可以被扫描，返回以ORDER BY indexed\_column operator constant顺序表示的行。这样的操作符可以返回任意可排序的数据类型，它的左输入类型也必须匹配索引的字段数据类型。ORDER BY的确切的语义是由amopsortfamily字段指定的，该字段必须为操作符的返回类型引用一个btree操作符族。
