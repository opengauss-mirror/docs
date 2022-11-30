# DV\_SESSIONS<a name="ZH-CN_TOPIC_0000001116241344"></a>

DV\_SESSIONS视图存储当前会话的所有会话信息。默认只有系统管理员权限才可以访问此系统表，普通用户需要授权才可以访问。

**表 1**  DV\_SESSIONS字段

<a name="zh-cn_topic_0059777917_t0df1b611492d4f07b1d6e42373142023"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059777917_rab2e23b3e0f34f37b75a508b8269f07a"><th class="cellrowborder" valign="top" width="18.82%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.91%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="64.27000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059777917_rbfc3ec51c46e4dcc8ea92ab769c8e161"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a>sid</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a>当前活动的后台线程的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>serial#</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>当前活动的后台线程的序号，在<span id="text1798254510538"><a name="text1798254510538"></a><a name="text1798254510538"></a>openGauss</span>中为0。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r4f43f04ee2cf4dbca75ce4216116be07"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ac858fb9ba70c4454a557cfa3c9cdb292"><a name="zh-cn_topic_0059777917_ac858fb9ba70c4454a557cfa3c9cdb292"></a><a name="zh-cn_topic_0059777917_ac858fb9ba70c4454a557cfa3c9cdb292"></a>user#</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_af9175f2700f14595986eb567026cb6b1"><a name="zh-cn_topic_0059777917_af9175f2700f14595986eb567026cb6b1"></a><a name="zh-cn_topic_0059777917_af9175f2700f14595986eb567026cb6b1"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a71f20cfb558143829cd0f5e0a178a26a"><a name="zh-cn_topic_0059777917_a71f20cfb558143829cd0f5e0a178a26a"></a><a name="zh-cn_topic_0059777917_a71f20cfb558143829cd0f5e0a178a26a"></a>登录此后台线程的用户的OID。oid 为0表示此后台线程为全局辅助线程(auxiliary)。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_rb6bd916cc65247068a5b2f46cc89d629"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_a655743001ceb424aa20daaed818626b3"><a name="zh-cn_topic_0059777917_a655743001ceb424aa20daaed818626b3"></a><a name="zh-cn_topic_0059777917_a655743001ceb424aa20daaed818626b3"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_ac1c6d7b23f054d96af669737dfcfafd7"><a name="zh-cn_topic_0059777917_ac1c6d7b23f054d96af669737dfcfafd7"></a><a name="zh-cn_topic_0059777917_ac1c6d7b23f054d96af669737dfcfafd7"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a5f40a06e55b74d39b952aa1acd45533b"><a name="zh-cn_topic_0059777917_a5f40a06e55b74d39b952aa1acd45533b"></a><a name="zh-cn_topic_0059777917_a5f40a06e55b74d39b952aa1acd45533b"></a>登录此后台线程的用户名。username为空表示此后台线程为全局辅助线程(auxiliary)。</p>
<p id="p63395261021"><a name="p63395261021"></a><a name="p63395261021"></a>可以通过和pg_stat_get_activity() 关联查询，识别出application_name。</p>
<p id="p15709171830"><a name="p15709171830"></a><a name="p15709171830"></a>例如：</p>
<p id="p1977515576214"><a name="p1977515576214"></a><a name="p1977515576214"></a>select s.*,a.application_name from DV_SESSIONS as s left join pg_stat_get_activity(NULL) as a on s.sid=a.sessionid;</p>
</td>
</tr>
</tbody>
</table>
