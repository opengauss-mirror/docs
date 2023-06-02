# PERFORMANCE_SCHEMA.EVENTS_WAITS_CURRENT

PERFORMANCE_SCHEMA.EVENTS_WAITS_CURRENT视图，可以检测当前线程的阻塞等待情况。兼容Mysql对应视图，仅在B库创建。

>![](public_sys-resources/icon-note.png) **说明：** 
>-   很多列openGauss并没有与Mysql相对应的信息，或者暂时不支持的输出，为了最大限度保持兼容性，用NULL填充。


**表 1**  EVENTS_WAITS_CURRENT字段

<a name="zh-cn_topic_0059777917_t0df1b611492d4f07b1d6e42373142023"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059777917_rab2e23b3e0f34f37b75a508b8269f07a"><th class="cellrowborder" valign="top" width="18.82%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.91%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="64.27000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059777917_rbfc3ec51c46e4dcc8ea92ab769c8e161"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a>THREAD_ID</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a>当前线程的线程号</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>EVENT_ID</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>END_EVENT_ID</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>EVENT_NAME</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>等待事件名称，与Mysql的EVENT_NAME并不对应</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SOURCE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>连接到该后台的应用名</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>TIMER_START</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>语句启动时间</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>TIMER_END</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>语句结束时间</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>TIMER_WAIT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>等待时间</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SPINS</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>OBJECT_SCHEMA</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>名称空间的名称</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>OBJECT_NAME</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>若为索引，则为NULL，不为索引则为relname</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>INDEX_NAME</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>若为索引，则为索引名，不为索引则为NULL</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>OBJECT_TYPE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>
 被锁定对象的类型：relation，extend，page，tuple，transactionid，virtualxid，object，userlock </p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>OBJECT_INSTANCE_BEGIN</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>NESTING_EVENT_ID</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>NESTING_EVENT_TYPE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>OPERATION</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>NUMBER_OF_BYTES</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
 <tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>FLAGS</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
</tbody>
</table>
