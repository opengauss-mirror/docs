# ORAFCE.USER_CONSTRAINTS

ORAFCE.USER_CONSTRAINTS视图，兼容O*对应视图，仅在A库创建，用于查询约束相关信息。

**表 1**  ORAFCE.USER_CONSTRAINTS字段

<a name="zh-cn_topic_0059777917_t0df1b611492d4f07b1d6e42373142023"></a>

<table><thead align="left"><tr id="zh-cn_topic_0059777917_rab2e23b3e0f34f37b75a508b8269f07a"><th class="cellrowborder" valign="top" width="18.82%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.91%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="64.27000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059777917_rbfc3ec51c46e4dcc8ea92ab769c8e161"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a>constraint_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a>约束名</p>
</td>
</tr>

<tr id="zh-cn_topic_0059777917_rbfc3ec51c46e4dcc8ea92ab769c8e161"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a>index_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a>regclass</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a>索引名</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_rbfc3ec51c46e4dcc8ea92ab769c8e161"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a>constraint_type</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a>约束类型</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_rbfc3ec51c46e4dcc8ea92ab769c8e161"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a>table_name	</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a>regclass</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a>表名</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_rbfc3ec51c46e4dcc8ea92ab769c8e161"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a>r_constraint_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a>表约束名</p>
</td>
</tr>
    </tbody>
</table>