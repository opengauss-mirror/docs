# PG\_USER\_MAPPINGS<a name="ZH-CN_TOPIC_0289900498"></a>

PG\_USER\_MAPPINGS视图提供访问关于用户映射的信息的接口。

这个视图只是一个[PG\_USER\_MAPPING](PG_USER_MAPPING.md)的可读部分的视图化表现，如果用户无权使用它则查询该表时，有些选项字段会显示为空。普通用户需要授权才可以访问。

**表 1**  PG\_USER\_MAPPINGS字段

<a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_t57a574812dea4cd092098d18eb73be9c"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_r158caf878b75444ba736192a96b50ce3"><th class="cellrowborder" valign="top" width="14.850000000000001%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a5256c6443f524bea97c5176dfc83350e"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a5256c6443f524bea97c5176dfc83350e"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a5256c6443f524bea97c5176dfc83350e"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="11.290000000000001%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_ae13e6cf94bc34fb5b29f3da38be35fd4"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_ae13e6cf94bc34fb5b29f3da38be35fd4"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_ae13e6cf94bc34fb5b29f3da38be35fd4"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="31.000000000000007%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a4b1a7b9937ec4d55a5532f4231dcb681"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a4b1a7b9937ec4d55a5532f4231dcb681"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a4b1a7b9937ec4d55a5532f4231dcb681"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="42.86000000000001%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a3a813fbcd13548a4b2957e3d46f2d416"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a3a813fbcd13548a4b2957e3d46f2d416"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a3a813fbcd13548a4b2957e3d46f2d416"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_r7bdda7b6b02549e98658b3e759944deb"><td class="cellrowborder" valign="top" width="14.850000000000001%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a67abcd256aa24831b8921a0eb12a507e"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a67abcd256aa24831b8921a0eb12a507e"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a67abcd256aa24831b8921a0eb12a507e"></a>umid</p>
</td>
<td class="cellrowborder" valign="top" width="11.290000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a912059c2ffee4efeb3af5e6f124c90f6"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a912059c2ffee4efeb3af5e6f124c90f6"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a912059c2ffee4efeb3af5e6f124c90f6"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="31.000000000000007%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a8e0a4135c50b4848adbee8c4a6f03b8f"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a8e0a4135c50b4848adbee8c4a6f03b8f"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a8e0a4135c50b4848adbee8c4a6f03b8f"></a><a href="PG_USER_MAPPING.md">PG_USER_MAPPING</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.86000000000001%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a7e61464493c945db97781da29a03d5c4"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a7e61464493c945db97781da29a03d5c4"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a7e61464493c945db97781da29a03d5c4"></a>用户映射的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_rfdb1dbce1fa1413ba5f9cfb876f7497f"><td class="cellrowborder" valign="top" width="14.850000000000001%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a2a2c87ebb15344afa29dab5cf4a8decd"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a2a2c87ebb15344afa29dab5cf4a8decd"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a2a2c87ebb15344afa29dab5cf4a8decd"></a>srvid</p>
</td>
<td class="cellrowborder" valign="top" width="11.290000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a5511ca418af04df8a82868d48d2202d3"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a5511ca418af04df8a82868d48d2202d3"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a5511ca418af04df8a82868d48d2202d3"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="31.000000000000007%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_adafb34910f684b49b3aaa6704c447a23"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_adafb34910f684b49b3aaa6704c447a23"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_adafb34910f684b49b3aaa6704c447a23"></a><a href="PG_FOREIGN_SERVER.md">PG_FOREIGN_SERVER</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.86000000000001%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a98402dfb0df34d3a8ffc2e9d191afffa"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a98402dfb0df34d3a8ffc2e9d191afffa"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a98402dfb0df34d3a8ffc2e9d191afffa"></a>包含这个映射的外部服务器的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_rfce2cae5f980495bb95b6800f70f05b4"><td class="cellrowborder" valign="top" width="14.850000000000001%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a206608b88907463286cbbb71e7e64756"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a206608b88907463286cbbb71e7e64756"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a206608b88907463286cbbb71e7e64756"></a>srvname</p>
</td>
<td class="cellrowborder" valign="top" width="11.290000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a70015b1427aa42768e629a232bdfc6eb"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a70015b1427aa42768e629a232bdfc6eb"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a70015b1427aa42768e629a232bdfc6eb"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="31.000000000000007%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_adb2a48782cdf4b33bee7e33d6190784d"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_adb2a48782cdf4b33bee7e33d6190784d"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_adb2a48782cdf4b33bee7e33d6190784d"></a><a href="PG_FOREIGN_SERVER.md">PG_FOREIGN_SERVER</a>.srvname</p>
</td>
<td class="cellrowborder" valign="top" width="42.86000000000001%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a26e4602b2d62409bbbd90712a23e9e33"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a26e4602b2d62409bbbd90712a23e9e33"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a26e4602b2d62409bbbd90712a23e9e33"></a>外部服务器的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_ra149331ee51b4921b04feb230fce80b1"><td class="cellrowborder" valign="top" width="14.850000000000001%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a881d1e5f4bec42848b65aa2a918e99ff"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a881d1e5f4bec42848b65aa2a918e99ff"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a881d1e5f4bec42848b65aa2a918e99ff"></a>umuser</p>
</td>
<td class="cellrowborder" valign="top" width="11.290000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_acb86f9d6e9374f33985c0ebb76d6b407"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_acb86f9d6e9374f33985c0ebb76d6b407"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_acb86f9d6e9374f33985c0ebb76d6b407"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="31.000000000000007%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a85a99364be7c46eabf5abb432a29b543"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a85a99364be7c46eabf5abb432a29b543"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a85a99364be7c46eabf5abb432a29b543"></a><a href="PG_AUTHID.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.86000000000001%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_aa35ac4397ea7472784120e826620a397"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_aa35ac4397ea7472784120e826620a397"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_aa35ac4397ea7472784120e826620a397"></a>被映射的本地角色的OID，如果用户映射是公共的则为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_r496384a2f986464c9527b2e57435312e"><td class="cellrowborder" valign="top" width="14.850000000000001%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_af039d2cae0c747fcac2e6c0a0e16563b"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_af039d2cae0c747fcac2e6c0a0e16563b"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_af039d2cae0c747fcac2e6c0a0e16563b"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="11.290000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_ad23204c3b6ea4a5a9acca8928d188d52"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_ad23204c3b6ea4a5a9acca8928d188d52"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_ad23204c3b6ea4a5a9acca8928d188d52"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="31.000000000000007%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a3407ec76a92e4079925ac02a639a4916"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a3407ec76a92e4079925ac02a639a4916"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a3407ec76a92e4079925ac02a639a4916"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.86000000000001%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a77c20bc405804f19bd1c64348a217dc1"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a77c20bc405804f19bd1c64348a217dc1"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a77c20bc405804f19bd1c64348a217dc1"></a>被映射的本地用户的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_ra210615997eb42129cb4b99f47d9c8ea"><td class="cellrowborder" valign="top" width="14.850000000000001%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a631e096f4d914cd7a0952bbea2cbbae4"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a631e096f4d914cd7a0952bbea2cbbae4"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a631e096f4d914cd7a0952bbea2cbbae4"></a>umoptions</p>
</td>
<td class="cellrowborder" valign="top" width="11.290000000000001%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_aee488c01bb7b49c48dce763a593f0007"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_aee488c01bb7b49c48dce763a593f0007"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_aee488c01bb7b49c48dce763a593f0007"></a>text[ ]</p>
</td>
<td class="cellrowborder" valign="top" width="31.000000000000007%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a06536016fd99419a894ed5191e76075c"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a06536016fd99419a894ed5191e76075c"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a06536016fd99419a894ed5191e76075c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.86000000000001%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a8653654a9d634404a819dddce8352f70"><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a8653654a9d634404a819dddce8352f70"></a><a name="zh-cn_topic_0283137427_zh-cn_topic_0237122473_zh-cn_topic_0059777822_a8653654a9d634404a819dddce8352f70"></a>如果当前用户是外部服务器的所有者，则为用户映射指定选项，使用“keyword=value”字符串，否则为null。</p>
</td>
</tr>
</tbody>
</table>
