# PG\_COLLATION<a name="ZH-CN_TOPIC_0289900999"></a>

PG\_COLLATION系统表描述可用的排序规则，本质上从一个SQL名称映射到操作系统本地类别。

**表 1**  PG\_COLLATION字段

<a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_tfef590a752224800b5cb4e1f9cb9c250"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_r14241d86f676417897bd39a3e04bb816"><th class="cellrowborder" valign="top" width="21.43%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aec19f6c15e48461f80ace101287db14d"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aec19f6c15e48461f80ace101287db14d"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aec19f6c15e48461f80ace101287db14d"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.41%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a76efab2c1b3f4bf5872ff51f238b03b0"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a76efab2c1b3f4bf5872ff51f238b03b0"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a76efab2c1b3f4bf5872ff51f238b03b0"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="27.439999999999998%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ab39e88c1322846daaababd10f031de77"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ab39e88c1322846daaababd10f031de77"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ab39e88c1322846daaababd10f031de77"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="38.72%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4660413be70b46119e0cfc3350090dd1"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4660413be70b46119e0cfc3350090dd1"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4660413be70b46119e0cfc3350090dd1"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_r8564bac0a618471da4169aca38614cd3"><td class="cellrowborder" valign="top" width="21.43%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a7919e237251d4d03b6e5291983b75903"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a7919e237251d4d03b6e5291983b75903"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a7919e237251d4d03b6e5291983b75903"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_af3bcb2c6ff314c09b81321a5e0795057"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_af3bcb2c6ff314c09b81321a5e0795057"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_af3bcb2c6ff314c09b81321a5e0795057"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="27.439999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_af041b81931d1464bba82726e72bf8ede"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_af041b81931d1464bba82726e72bf8ede"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_af041b81931d1464bba82726e72bf8ede"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="38.72%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4e09af768b114e3088420c44b05de3be"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4e09af768b114e3088420c44b05de3be"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4e09af768b114e3088420c44b05de3be"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_r4b61ed0a0fcd4f989f1fe68e7e96ccba"><td class="cellrowborder" valign="top" width="21.43%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aeb9d86ab7bc04410a34503527c9dffb8"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aeb9d86ab7bc04410a34503527c9dffb8"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aeb9d86ab7bc04410a34503527c9dffb8"></a>collname</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a15649ebc1a1148b18cf51ed66bcb7494"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a15649ebc1a1148b18cf51ed66bcb7494"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a15649ebc1a1148b18cf51ed66bcb7494"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="27.439999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a915b5d98a14a416ea2e725b46ef7d744"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a915b5d98a14a416ea2e725b46ef7d744"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a915b5d98a14a416ea2e725b46ef7d744"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="38.72%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aebecc54578aa4a3db68a4dcb8114fd87"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aebecc54578aa4a3db68a4dcb8114fd87"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aebecc54578aa4a3db68a4dcb8114fd87"></a>排序规则名（每个名称空间和编码唯一）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_r7beb81db12d642bb95868dbf8c6ec419"><td class="cellrowborder" valign="top" width="21.43%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aa193df64959945ba9515e2633486758e"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aa193df64959945ba9515e2633486758e"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_aa193df64959945ba9515e2633486758e"></a>collnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4522dd5087134dfa9e974f268a207319"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4522dd5087134dfa9e974f268a207319"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4522dd5087134dfa9e974f268a207319"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="27.439999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a3ff9352c82b64efdb02885d39d84de77"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a3ff9352c82b64efdb02885d39d84de77"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a3ff9352c82b64efdb02885d39d84de77"></a><a href="PG_NAMESPACE.md">PG_NAMESPACE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="38.72%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a146fd8df3a0e4cc68cb75c4d1bfe2df1"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a146fd8df3a0e4cc68cb75c4d1bfe2df1"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a146fd8df3a0e4cc68cb75c4d1bfe2df1"></a>包含这个排序规则的名称空间的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_r0f27ccb40dc740a5bca72626191e0c8a"><td class="cellrowborder" valign="top" width="21.43%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_af02a37d7b544414c8b51e2890f0a083d"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_af02a37d7b544414c8b51e2890f0a083d"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_af02a37d7b544414c8b51e2890f0a083d"></a>collowner</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a0d5247a27bd944119d958fb29a7c9bcf"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a0d5247a27bd944119d958fb29a7c9bcf"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a0d5247a27bd944119d958fb29a7c9bcf"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="27.439999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ab87b52004f584ec9a83be16a25f42c3a"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ab87b52004f584ec9a83be16a25f42c3a"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ab87b52004f584ec9a83be16a25f42c3a"></a><a href="PG_AUTHID.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="38.72%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ad35cacb3ad3a42199f43dd6ed4d2e5a7"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ad35cacb3ad3a42199f43dd6ed4d2e5a7"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ad35cacb3ad3a42199f43dd6ed4d2e5a7"></a>排序规则的所有者。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_r51ea1de489694a18824125c2c494d6c0"><td class="cellrowborder" valign="top" width="21.43%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a1fd16bf987fa453fa69698c5b21f3814"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a1fd16bf987fa453fa69698c5b21f3814"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a1fd16bf987fa453fa69698c5b21f3814"></a>collencoding</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a88cc85d135334beb92d67a5ba9b8b536"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a88cc85d135334beb92d67a5ba9b8b536"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a88cc85d135334beb92d67a5ba9b8b536"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="27.439999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a7dcaed99cb074b6fbcb357f4138c301d"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a7dcaed99cb074b6fbcb357f4138c301d"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a7dcaed99cb074b6fbcb357f4138c301d"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="38.72%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ad2d7ac0a19cf42978462bc66070e1a28"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ad2d7ac0a19cf42978462bc66070e1a28"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_ad2d7ac0a19cf42978462bc66070e1a28"></a>排序规则可用的编码，兼容PostgreSQL所有的字符编码类型，如果适用于任意编码为-1。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_r13169b8673c641bcbd1b1b60eaff3937"><td class="cellrowborder" valign="top" width="21.43%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a91a1747f6bdb4b93b27a8c37acf8a93a"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a91a1747f6bdb4b93b27a8c37acf8a93a"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a91a1747f6bdb4b93b27a8c37acf8a93a"></a>collcollate</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a404b37094e97454490e36b8b3afac0c7"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a404b37094e97454490e36b8b3afac0c7"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a404b37094e97454490e36b8b3afac0c7"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="27.439999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a8e7d30df58464058b6666aaa48c48d75"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a8e7d30df58464058b6666aaa48c48d75"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a8e7d30df58464058b6666aaa48c48d75"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="38.72%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a2c1162c5a5ee4b778fb049813444833e"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a2c1162c5a5ee4b778fb049813444833e"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a2c1162c5a5ee4b778fb049813444833e"></a>这个排序规则对象的LC_COLLATE。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_r349c0d090389458f953a178c9cfec5d7"><td class="cellrowborder" valign="top" width="21.43%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4afce6200ed94cdb84ba10c11e176c33"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4afce6200ed94cdb84ba10c11e176c33"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a4afce6200ed94cdb84ba10c11e176c33"></a>collctype</p>
</td>
<td class="cellrowborder" valign="top" width="12.41%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a204835a8934f4fbea8cfb7fd1ebdb4a5"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a204835a8934f4fbea8cfb7fd1ebdb4a5"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a204835a8934f4fbea8cfb7fd1ebdb4a5"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="27.439999999999998%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a3d39d1d991874b4fb4564bcf2c2696a8"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a3d39d1d991874b4fb4564bcf2c2696a8"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a3d39d1d991874b4fb4564bcf2c2696a8"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="38.72%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a970a6580d949442f879d6ad3425c089b"><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a970a6580d949442f879d6ad3425c089b"></a><a name="zh-cn_topic_0283137275_zh-cn_topic_0237122278_zh-cn_topic_0059779096_a970a6580d949442f879d6ad3425c089b"></a>这个排序规则对象的LC_CTYPE。</p>
</td>
</tr>
</tbody>
</table>

