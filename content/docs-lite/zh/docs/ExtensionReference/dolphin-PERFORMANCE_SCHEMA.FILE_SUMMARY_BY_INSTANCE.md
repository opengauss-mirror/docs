# PERFORMANCE_SCHEMA.FILE_SUMMARY_BY_INSTANCE

PERFORMANCE_SCHEMA.FILE_SUMMARY_BY_INSTANCE视图，通过对数据文件IO的统计，反映数据的IO性能，用以发现IO操作异常等性能问题。兼容Mysql的同名视图，仅在B库创建。

>![](public_sys-resources/icon-note.png) **说明：** 
>-   很多列openGauss并没有与Mysql相对应的信息，或者暂时不支持的输出，为了最大限度保持兼容性，用NULL填充。
>-   仅统计数据文件相关IO，不统计日志文件，配置文件等IO。
>-   底层访问DBE_PERF.FILE_IOSTAT，其中miniotim，avgiotim，maxiowtm的统计信息不区分读写，但mysql分读、写、等待、misc来统计min,max,avg。为尽量多的展示信息，都使用相同信息做展示。

**表 1**  FILE_SUMMARY_BY_INSTANCE字段

<a name="zh-cn_topic_0059777917_t0df1b611492d4f07b1d6e42373142023"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059777917_rab2e23b3e0f34f37b75a508b8269f07a"><th class="cellrowborder" valign="top" width="18.82%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a><a name="zh-cn_topic_0059777917_a32924e78d0334e82a36a777752a0b52b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.91%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a><a name="zh-cn_topic_0059777917_ac04a0fea30434f97b98e56208baf7cc2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="64.27000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a><a name="zh-cn_topic_0059777917_a8333c5ae26254b36b4af4126d0bd65cf"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059777917_rbfc3ec51c46e4dcc8ea92ab769c8e161"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a><a name="zh-cn_topic_0059777917_a363fbcb0295747dd9f7e56a77a27169e"></a>FILE_NAME</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a><a name="zh-cn_topic_0059777917_ac54b490a08b84bd3a9c4681b1b0b9f21"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a><a name="zh-cn_topic_0059777917_a98d0a98fda8346e5a5947896d3598ca2"></a>文件标识</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>EVENT_NAME</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>OBJECT_INSTANCE_BEGIN</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>COUNT_STAR</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_TIMER_WAIT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>MIN_TIMER_WAIT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>AVG_TIMER_WAIT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>MAX_TIMER_WAIT</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>暂不支持</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>COUNT_READ</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>读物理文件的数目</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_TIMER_READ</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>读文件的总时长（单位：微秒）</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>MIN_TIMER_READ</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>读写文件的最小时长（单位：微秒）</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>AVG_TIMER_READ</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>读写文件的平均时长（单位：微秒）</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>MAX_TIMER_READ</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>读写文件的最大时长（单位：微秒）</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_NUMBER_OF_BYTES_READ</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>物理读的字节数</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>COUNT_WRITE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>写物理文件的数目</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_TIMER_WRITE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>写文件的总时长（单位：微秒）</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>MIN_TIMER_WRITE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>读写文件的最小时长（单位：微秒）</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>AVG_TIMER_WRITE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>读写文件的平均时长（单位：微秒）</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>MAX_TIMER_WRITE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>读写文件的最大时长（单位：微秒）</p>
</td>
</tr>
<tr id="zh-cn_topic_0059777917_r9d303be2f0de46ceb1ff0dcb66080aa2"><td class="cellrowborder" valign="top" width="18.82%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a><a name="zh-cn_topic_0059777917_ab3f2e68e6a5441608b5b61f217580f6e"></a>SUM_NUMBER_OF_BYTES_WRITE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a><a name="zh-cn_topic_0059777917_a93c196a664b444479aa1376b69c437ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="64.27000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a><a name="zh-cn_topic_0059777917_a627c01fb6b6b46b69b4cfabca4c29d09"></a>物理写的字节数</p>
</td>
</tr>

</tbody>
</table>