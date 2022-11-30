# PG\_RULES<a name="ZH-CN_TOPIC_0289900412"></a>

PG\_RULES视图提供对查询重写规则的有用信息访问的接口。

**表 1**  PG\_RULES字段

<a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_t7f905f8c9d5d4a1190c53664db843ed8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_rf0af934f658e4826bcb4f46a249a522a"><th class="cellrowborder" valign="top" width="25.85%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_afb01ad0bf478490099963d2e51dfa4c9"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_afb01ad0bf478490099963d2e51dfa4c9"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_afb01ad0bf478490099963d2e51dfa4c9"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.4%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a7d43d2c5df734f7e80cc3dba2eac4b18"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a7d43d2c5df734f7e80cc3dba2eac4b18"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a7d43d2c5df734f7e80cc3dba2eac4b18"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="53.75%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a075dd2cfd446499e994b22b4df806d31"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a075dd2cfd446499e994b22b4df806d31"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a075dd2cfd446499e994b22b4df806d31"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_r6730545158984704b9ba0dd21f7a3308"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a2444442d370d4343a3203fe2fdbbba6c"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a2444442d370d4343a3203fe2fdbbba6c"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a2444442d370d4343a3203fe2fdbbba6c"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="20.4%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3ffc0a9e7e9a4aa085321517fc65843a"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3ffc0a9e7e9a4aa085321517fc65843a"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3ffc0a9e7e9a4aa085321517fc65843a"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.75%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a763192b97bf54efba0cb5fd618fb6c4d"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a763192b97bf54efba0cb5fd618fb6c4d"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a763192b97bf54efba0cb5fd618fb6c4d"></a>包含表的模式的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_r47a971508ba544b7b03c5a43b1649eb0"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a0e9f3655613f4cecb40f0ad3c3c152c3"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a0e9f3655613f4cecb40f0ad3c3c152c3"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a0e9f3655613f4cecb40f0ad3c3c152c3"></a>tablename</p>
</td>
<td class="cellrowborder" valign="top" width="20.4%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_aa025aa89a4234035b8f3066a0d03aeb0"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_aa025aa89a4234035b8f3066a0d03aeb0"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_aa025aa89a4234035b8f3066a0d03aeb0"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.75%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3785509e74f7426d8d2e333c3fd0abfa"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3785509e74f7426d8d2e333c3fd0abfa"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3785509e74f7426d8d2e333c3fd0abfa"></a>规则作用的表的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_r533ff3c9a9844a379aa3e0e76664b1f3"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3916a4ceaa3641e08940937258a6be7e"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3916a4ceaa3641e08940937258a6be7e"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3916a4ceaa3641e08940937258a6be7e"></a>rulename</p>
</td>
<td class="cellrowborder" valign="top" width="20.4%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a9ee76f040c7f43cf851f9c2b941ae6dd"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a9ee76f040c7f43cf851f9c2b941ae6dd"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a9ee76f040c7f43cf851f9c2b941ae6dd"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="53.75%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a6ef55bb5b1e6478185f3a251aacc1343"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a6ef55bb5b1e6478185f3a251aacc1343"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a6ef55bb5b1e6478185f3a251aacc1343"></a>规则的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_rb9fc1776dd2a43ecaa6eb4e596b68aeb"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_adf2851e1eb1344d58021ccffb1429f65"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_adf2851e1eb1344d58021ccffb1429f65"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_adf2851e1eb1344d58021ccffb1429f65"></a>definition</p>
</td>
<td class="cellrowborder" valign="top" width="20.4%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_ad29087bde8fe4f6299ab38799b42bc7e"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_ad29087bde8fe4f6299ab38799b42bc7e"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_ad29087bde8fe4f6299ab38799b42bc7e"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="53.75%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3f29c3f5ed61478a87358f2b47722411"><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3f29c3f5ed61478a87358f2b47722411"></a><a name="zh-cn_topic_0283137172_zh-cn_topic_0237122430_zh-cn_topic_0059777795_a3f29c3f5ed61478a87358f2b47722411"></a>规则定义（一个重新构造的创建命令）。</p>
</td>
</tr>
</tbody>
</table>
