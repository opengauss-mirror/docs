# PG\_DB\_ROLE\_SETTING<a name="ZH-CN_TOPIC_0289900360"></a>

PG\_DB\_ROLE\_SETTING系统表存储数据库运行时每个角色与数据绑定的配置项的默认值 。

**表 1**  PG\_DB\_ROLE\_SETTING字段

<a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_tef5c482abadd48948fb83116dc7c4eb5"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_r73864329e7f94a15b4d19009ac562ce2"><th class="cellrowborder" valign="top" width="28.87%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_ad2a4bdfaa43c4c5fa65727d5752c3479"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_ad2a4bdfaa43c4c5fa65727d5752c3479"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_ad2a4bdfaa43c4c5fa65727d5752c3479"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="15.290000000000001%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_acec7305944ba45008d255cfa572d873a"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_acec7305944ba45008d255cfa572d873a"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_acec7305944ba45008d255cfa572d873a"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="55.84%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_aee2b391439b1418b88409915418b318e"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_aee2b391439b1418b88409915418b318e"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_aee2b391439b1418b88409915418b318e"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_rd93aff603d24441c9d979030e1800175"><td class="cellrowborder" valign="top" width="28.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a39bcf9082f924eb09d1a91e6489d8ec7"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a39bcf9082f924eb09d1a91e6489d8ec7"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a39bcf9082f924eb09d1a91e6489d8ec7"></a>setdatabase</p>
</td>
<td class="cellrowborder" valign="top" width="15.290000000000001%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_acbbd499fd165425cad8b1c5c83451bee"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_acbbd499fd165425cad8b1c5c83451bee"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_acbbd499fd165425cad8b1c5c83451bee"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_aafcec107fbd6419fb8e5589d19051748"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_aafcec107fbd6419fb8e5589d19051748"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_aafcec107fbd6419fb8e5589d19051748"></a>配置项所对应的数据库，如果未指定数据库，则为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_r7e699b42a4f2452f864832b7ccffd37f"><td class="cellrowborder" valign="top" width="28.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a319b4bca0123409a81523d4486a2ab2f"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a319b4bca0123409a81523d4486a2ab2f"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a319b4bca0123409a81523d4486a2ab2f"></a>setrole</p>
</td>
<td class="cellrowborder" valign="top" width="15.290000000000001%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a59f427f83b77432e9e9c2fb52da26b0f"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a59f427f83b77432e9e9c2fb52da26b0f"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a59f427f83b77432e9e9c2fb52da26b0f"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_afffce7fffbdb47b1a005269360af09dd"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_afffce7fffbdb47b1a005269360af09dd"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_afffce7fffbdb47b1a005269360af09dd"></a>配置项所对应的角色，如果未指定角色，则为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_r255120126aba4bfd818d009e8c312827"><td class="cellrowborder" valign="top" width="28.87%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a191e5e58d2ec4c51ab94d3f12cc58ded"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a191e5e58d2ec4c51ab94d3f12cc58ded"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_a191e5e58d2ec4c51ab94d3f12cc58ded"></a>setconfig</p>
</td>
<td class="cellrowborder" valign="top" width="15.290000000000001%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_aef4695b9508045559fba4aa016aad1a2"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_aef4695b9508045559fba4aa016aad1a2"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_aef4695b9508045559fba4aa016aad1a2"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="55.84%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_ae64fd124cc7d43149561ac0aac00393a"><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_ae64fd124cc7d43149561ac0aac00393a"></a><a name="zh-cn_topic_0283136855_zh-cn_topic_0237122282_zh-cn_topic_0059779021_ae64fd124cc7d43149561ac0aac00393a"></a>运行时配置项的默认值，配置方法参考<a href="../DatabaseAdministrationGuide/参数设置.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t290c8f15953843db8d8e53d867cd893d">表2</a>。</p>
</td>
</tr>
</tbody>
</table>

