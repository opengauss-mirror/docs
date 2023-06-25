# PERFORMANCE_SCHEMA.EVENTS_STATEMENTS_SUMMARY_BY_DIGEST

PERFORMANCE_SCHEMA.EVENTS_STATEMENTS_SUMMARY_BY_DIGEST视图。兼容Mysql对应视图，仅在B库创建。获得当前节点的执行语句（归一化SQL）的信息。
>![](public_sys-resources/icon-note.png) **说明：** 
>-   很多列openGauss并没有与Mysql相对应的信息，或者暂时不支持的输出，为了最大限度保持兼容性，用NULL填充。
>-   底层访问dbe_perf.statement，dbe_perf.statement_history表，需要满足相关权限要求，并开启相关配置参数，如track_stmt_parameter=on, 设置track_stmt_stat_level, enable_thread_pool = off。


**表 1**  EVENTS_STATEMENTS_SUMMARY_BY_DIGEST字段

<a name="zh-cn_topic_0059777917_t0df1b611492d4f07b1d6e42373142023"></a>

<table><thead align="left"><tr id="zh-cn_topic_0059777917_rab2e23b3e0f34f37b75a508b8269f07a"><th class="cellrowborder" valign="top" width="18.82%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.91%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="64.27000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059777917_rbfc3ec51c46e4dcc8ea92ab769c8e161"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a>SCHEMA_NAME</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a>语句执行时的schema</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>DIGEST</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>query按照SHA2算法计算的hash值</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>DIGEST_TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>归一化语句</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>COUNT_STAR</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>调用次数</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_TIMER_WAIT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>SQL在内核内的总运行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>MIN_TIMER_WAIT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a> SQL在内核内的最小运行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>AVG_TIMER_WAIT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>SQL在内核内的平均运行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>MAX_TIMER_WAIT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>SQL在内核内的最大运行时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_LOCK_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_ERRORS</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_WARNINGS</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_ROWS_AFFECTED</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>总影响行数</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_ROWS_SENT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>返回的结果集行数</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_ROWS_EXAMINED</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_CREATED_TMP_DISK_TABLES</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_CREATED_TMP_TABLES</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_SELECT_FULL_JOIN</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_SELECT_FULL_RANGE_JOIN</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_SELECT_RANGE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_SELECT_RANGE_CHECK</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_SELECT_SCAN</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_SORT_MERGE_PASSES</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_SORT_RANGE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_SORT_ROWS</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_SORT_SCAN</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>排序执行的次数</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_NO_INDEX_USED</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_NO_GOOD_INDEX_USED</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
 <tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_CPU_TIME</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>CPU时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>MAX_CONTROLLED_MEMORY</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
     <tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>MAX_TOTAL_MEMORY</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>COUNT_SECONDARY</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>FIRST_SEEN</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>LAST_SEEN</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>最后一次更新该语句的时间</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>QUANTILE_95</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>QUANTILE_99</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>QUANTILE_999</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>QUERY_SAMPLE_TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>QUERY_SAMPLE_SEEN</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>QUERY_SAMPLE_TIMER_WAIT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
</tbody>
</table>