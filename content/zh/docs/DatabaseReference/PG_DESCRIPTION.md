# PG\_DESCRIPTION<a name="ZH-CN_TOPIC_0289900837"></a>

PG\_DESCRIPTION系统表可以给每个数据库对象存储一个可选的描述（注释）。许多内置的系统对象的描述提供了PG\_DESCRIPTION的初始内容。

这个表的功能类似[PG_SHDESCRIPTION](PG_SHDESCRIPTION.md)，用于记录openGauss范围内共享对象的注释。

**表 1**  PG_SHDESCRIPTION字段

<a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_t6d8526cd27634c979add34313515ecbe"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_rc66e09c6907141958a1f095d0b5903b3"><th class="cellrowborder" valign="top" width="12.31%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a32a13f2e449c4a2b9dcac364c758ebe9"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a32a13f2e449c4a2b9dcac364c758ebe9"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a32a13f2e449c4a2b9dcac364c758ebe9"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="9.31%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a3b20335794a846dbb1db8ab5e8b08bb7"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a3b20335794a846dbb1db8ab5e8b08bb7"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a3b20335794a846dbb1db8ab5e8b08bb7"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="21.52%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a6cd40e544e354063a099caf22d924544"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a6cd40e544e354063a099caf22d924544"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a6cd40e544e354063a099caf22d924544"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="56.86%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a2a7c960b69bb4f068e34408d9126e8a8"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a2a7c960b69bb4f068e34408d9126e8a8"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a2a7c960b69bb4f068e34408d9126e8a8"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_r1eb3d71fe0b6485a86fb174394533967"><td class="cellrowborder" valign="top" width="12.31%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a39ddfc65e5f04e018f57f88373ef3af4"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a39ddfc65e5f04e018f57f88373ef3af4"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a39ddfc65e5f04e018f57f88373ef3af4"></a>objoid</p>
</td>
<td class="cellrowborder" valign="top" width="9.31%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a09694550ebb145d7a9a3b4ca3ff6d557"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a09694550ebb145d7a9a3b4ca3ff6d557"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a09694550ebb145d7a9a3b4ca3ff6d557"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.52%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_ae573b6b4cfc24270987557535b6254c9"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_ae573b6b4cfc24270987557535b6254c9"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_ae573b6b4cfc24270987557535b6254c9"></a>任意OID属性</p>
</td>
<td class="cellrowborder" valign="top" width="56.86%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a7e1ccb7f911e4c509ee36a617bdc5b40"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a7e1ccb7f911e4c509ee36a617bdc5b40"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a7e1ccb7f911e4c509ee36a617bdc5b40"></a>这条描述所描述的对象的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_rd7c1b251b7a141179159ca50317fc57e"><td class="cellrowborder" valign="top" width="12.31%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_ad173a4ffddb8462097281db79695d83b"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_ad173a4ffddb8462097281db79695d83b"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_ad173a4ffddb8462097281db79695d83b"></a>classoid</p>
</td>
<td class="cellrowborder" valign="top" width="9.31%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a8f32271314e1439f8341a8043d7d5840"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a8f32271314e1439f8341a8043d7d5840"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a8f32271314e1439f8341a8043d7d5840"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.52%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aad1b7885465149dc9673bbef692a15ae"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aad1b7885465149dc9673bbef692a15ae"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aad1b7885465149dc9673bbef692a15ae"></a><a href="PG_CLASS.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="56.86%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aef1cedd21cf04fedada1bce5295a2786"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aef1cedd21cf04fedada1bce5295a2786"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aef1cedd21cf04fedada1bce5295a2786"></a>这个对象出现的系统表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_r824153fa26c14872a622b570eb861256"><td class="cellrowborder" valign="top" width="12.31%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aadecccfb31c84f1696bda5abb555b07f"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aadecccfb31c84f1696bda5abb555b07f"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aadecccfb31c84f1696bda5abb555b07f"></a>objsubid</p>
</td>
<td class="cellrowborder" valign="top" width="9.31%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a09fe8661ce044ea3aaae9bad61ed3854"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a09fe8661ce044ea3aaae9bad61ed3854"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a09fe8661ce044ea3aaae9bad61ed3854"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="21.52%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a5fc62ae08e4843bdb1bad2539a44c9ad"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a5fc62ae08e4843bdb1bad2539a44c9ad"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a5fc62ae08e4843bdb1bad2539a44c9ad"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="56.86%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aa43bf460c68042c4956fd6c81ebba567"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aa43bf460c68042c4956fd6c81ebba567"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aa43bf460c68042c4956fd6c81ebba567"></a>对于一个表字段的注释，它是字段号（objoid和classoid指向表自身）。对于其它对象类型，它是零。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_r1a2f1f3756c64b1bbb8319cf122aa35a"><td class="cellrowborder" valign="top" width="12.31%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aaaffe06a13544129b67d434a26d6be49"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aaaffe06a13544129b67d434a26d6be49"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_aaaffe06a13544129b67d434a26d6be49"></a>Description</p>
</td>
<td class="cellrowborder" valign="top" width="9.31%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a897fe676ea664bbda1e5137003d20877"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a897fe676ea664bbda1e5137003d20877"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a897fe676ea664bbda1e5137003d20877"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="21.52%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_ad54ed1adcf2943a18a4e70a266791680"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_ad54ed1adcf2943a18a4e70a266791680"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_ad54ed1adcf2943a18a4e70a266791680"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="56.86%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a2750efdeaa1b49989ae3f69404a2cd9c"><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a2750efdeaa1b49989ae3f69404a2cd9c"></a><a name="zh-cn_topic_0283136780_zh-cn_topic_0237122285_zh-cn_topic_0059778572_a2750efdeaa1b49989ae3f69404a2cd9c"></a>对该对象描述的任意文本。</p>
</td>
</tr>
</tbody>
</table>


