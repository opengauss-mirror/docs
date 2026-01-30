# PERFORMANCE_SCHEMA.THREADS

PERFORMANCE_SCHEMA.THREADS视图，对数据库线程情况统计。兼容Mysql的同名视图，仅在B库创建。

**表 1**  THREADS字段

<a name="zh-cn_topic_0059777917_t0df1b611492d4f07b1d6e42373142023"></a>

<table><thead align="left"><tr id="zh-cn_topic_0059777917_rab2e23b3e0f34f37b75a508b8269f07a"><th class="cellrowborder" valign="top" width="18.82%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.91%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="64.27000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059777917_rbfc3ec51c46e4dcc8ea92ab769c8e161"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a>thread_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a>线程id。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(128)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>线程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(10)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>线程类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>processlist_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>会话ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>processlist_user</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(32)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>会话用户。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>processlist_host</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(255)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>会话主机。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>processlist_db</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(64)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>会话数据库。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>processlist_command</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(16)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>会话命令类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>processlist_time</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>会话持续时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>processlist_state</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(64)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>会话状态。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>processlist_info</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>会话SQL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>parent_thread_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>父线程ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>role</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(64)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>线程角色。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>instrumented</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(3)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>是否被性能监控。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>history</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(3)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>线程活动历史。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>connection_type</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(16)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>连接协议类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>thread_os_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>线程的OS ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>resource_group</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(64)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>资源组。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>execution_engine</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(16)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>执行引擎。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>controlled_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>使用内存。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>max_controlled_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>最大使用内存。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>total_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>总共使用内存。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>max_total_memory</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>最大总共使用内存。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>telemetry_active</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>varchar(3)</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>是否开始遥测功能。</p>
</td>
</tr>
</tbody>
</table>
