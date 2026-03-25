# 开发流程<a name="ZH-CN_TOPIC_0244721237"></a>

**图 1**  ODBC开发应用程序的流程<a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_fba9450765c4b4dc8b2809b91c8de76b3"></a>  
![](figures/ODBC开发应用程序的流程.png "ODBC开发应用程序的流程")

## 开发流程中涉及的API<a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_sc80403b34b784a2cbb2e52f9e00c3f7e"></a>

**表 1**  相关API说明

<a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_tc65ecd08370c4dc98898ce8ff83d394f"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_ra4bc7ab7d7a7493ea839a0e52ecf4825"><th class="cellrowborder" valign="top" width="37.2%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a9bc9fcc9378a4be996a16e650d1d5bf9"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a9bc9fcc9378a4be996a16e650d1d5bf9"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a9bc9fcc9378a4be996a16e650d1d5bf9"></a><strong id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a2b60e1107ec14759972d891c2c5424dd"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a2b60e1107ec14759972d891c2c5424dd"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a2b60e1107ec14759972d891c2c5424dd"></a>功能</strong></p>
</th>
<th class="cellrowborder" valign="top" width="62.8%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_aa13d1096091a4bc1898f97cd790bdf27"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_aa13d1096091a4bc1898f97cd790bdf27"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_aa13d1096091a4bc1898f97cd790bdf27"></a><strong id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a16bae9c276314a118debccb05cc4734f"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a16bae9c276314a118debccb05cc4734f"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a16bae9c276314a118debccb05cc4734f"></a>API</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r6ff7b44edfc64cc69677920a5fd8a9af"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a89b6ab630a8e43a7a9b99f82f0e1d141"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a89b6ab630a8e43a7a9b99f82f0e1d141"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a89b6ab630a8e43a7a9b99f82f0e1d141"></a>申请句柄资源</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a22aa3bfdad22487990dcb987291addf5"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a22aa3bfdad22487990dcb987291addf5"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a22aa3bfdad22487990dcb987291addf5"></a><a href="sql_alloc_handle.md">SQLAllocHandle</a>：申请句柄资源，可替代如下函数：</p>
<a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_u9a01eda0e47a4f5791a8febb1bb4d13d"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_u9a01eda0e47a4f5791a8febb1bb4d13d"></a><ul id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_u9a01eda0e47a4f5791a8febb1bb4d13d"><li><a href="sql_alloc_env.md">SQLAllocEnv</a>：申请环境句柄</li><li><a href="sql_alloc_connect.md">SQLAllocConnect</a>：申请连接句柄</li><li><a href="sql_alloc_stmt.md">SQLAllocStmt</a>：申请语句句柄</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_reca69a78621d4b29bfdbb97fc83bb8d8"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a71153a57e2a54a62967800f76ab2ffdb"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a71153a57e2a54a62967800f76ab2ffdb"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a71153a57e2a54a62967800f76ab2ffdb"></a>设置环境属性</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc03933783fd442d940ef8f738043c9c"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc03933783fd442d940ef8f738043c9c"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc03933783fd442d940ef8f738043c9c"></a><a href="sql_set_env_attr.md">SQLSetEnvAttr</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r8a93f2fb0cf94874b2c487c93cf898c8"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a9ff560be7477470a8e6db4e86b358ee2"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a9ff560be7477470a8e6db4e86b358ee2"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a9ff560be7477470a8e6db4e86b358ee2"></a>设置连接属性</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a9149ac8d2d234782ab15210ec0fadbb2"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a9149ac8d2d234782ab15210ec0fadbb2"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a9149ac8d2d234782ab15210ec0fadbb2"></a><a href="sql_set_connect_attr.md">SQLSetConnectAttr</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r215312d81bd845ef9af783522d0a5d31"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_ac88c707a2d6143799f25be6b716fb858"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_ac88c707a2d6143799f25be6b716fb858"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_ac88c707a2d6143799f25be6b716fb858"></a>设置语句属性</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_ad7a656048ff54f62b4a937bed290b7bf"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_ad7a656048ff54f62b4a937bed290b7bf"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_ad7a656048ff54f62b4a937bed290b7bf"></a><a href="sql_set_stmt_attr.md">SQLSetStmtAttr</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r6b385e2697d94978b0f72e9c319dfc62"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a2cc92ac0c3ae4858887aab730cfdd932"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a2cc92ac0c3ae4858887aab730cfdd932"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a2cc92ac0c3ae4858887aab730cfdd932"></a>连接数据源</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_aa2b32f6c2a5a48988f5d040f82eed0cc"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_aa2b32f6c2a5a48988f5d040f82eed0cc"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_aa2b32f6c2a5a48988f5d040f82eed0cc"></a><a href="sql_connect.md">SQLConnect</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r74f5e5648cc545bd989724498fd61272"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a3cf1845989e84bdc92c3771e110c1215"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a3cf1845989e84bdc92c3771e110c1215"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a3cf1845989e84bdc92c3771e110c1215"></a>绑定缓冲区到结果集的列中</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a4384362a96964ee3b0adc8edcb126a2c"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a4384362a96964ee3b0adc8edcb126a2c"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a4384362a96964ee3b0adc8edcb126a2c"></a><a href="sql_bind_col.md">SQLBindCol</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r2310b53cbeb44e5189d23d8cb4d54e93"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a2943061494d3423dba0f342ecfc8cd7f"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a2943061494d3423dba0f342ecfc8cd7f"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a2943061494d3423dba0f342ecfc8cd7f"></a>绑定SQL语句的参数标志和缓冲区</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a58559300046d4360a5f06e9382438cca"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a58559300046d4360a5f06e9382438cca"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a58559300046d4360a5f06e9382438cca"></a><a href="sql_bind_parameter.md">SQLBindParameter</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r64f440bf6f134ca09eb319dce4445f92"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a0952f23109004aacb7551e57f6fbc32b"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a0952f23109004aacb7551e57f6fbc32b"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a0952f23109004aacb7551e57f6fbc32b"></a>为执行SQL语句做准备</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a325549f5a69d4fa1b679d7c199c82f1f"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a325549f5a69d4fa1b679d7c199c82f1f"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a325549f5a69d4fa1b679d7c199c82f1f"></a><a href="sql_prepare.md">SQLPrepare</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r86d122da7e6a45a98abd0d2c1ceeb611"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_aad10f1c0e2f94aaeb8b7b52dfa0f9e18"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_aad10f1c0e2f94aaeb8b7b52dfa0f9e18"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_aad10f1c0e2f94aaeb8b7b52dfa0f9e18"></a>执行一条准备好的SQL语句</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a3f2dfb885b34455bbd4728a55270d8fd"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a3f2dfb885b34455bbd4728a55270d8fd"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a3f2dfb885b34455bbd4728a55270d8fd"></a><a href="sql_execute.md">SQLExecute</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r62d4c8e0f9d3431399af1211f6fb6ee2"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a0ab152759aba4bdb994d6b302f4c370a"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a0ab152759aba4bdb994d6b302f4c370a"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a0ab152759aba4bdb994d6b302f4c370a"></a>直接执行SQL语句</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a771fbe05801443f0abfbca0d55fcc0f7"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a771fbe05801443f0abfbca0d55fcc0f7"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a771fbe05801443f0abfbca0d55fcc0f7"></a><a href="sql_exec_direct.md">SQLExecDirect</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r568da8c171a74a8e84f5f8c8c0979afc"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a8e0c0ea376974ee880c269fc50af4bb4"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a8e0c0ea376974ee880c269fc50af4bb4"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a8e0c0ea376974ee880c269fc50af4bb4"></a>结果集中取行集</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a8982354bec80401ba7ca98dc98b5bc9c"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a8982354bec80401ba7ca98dc98b5bc9c"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a8982354bec80401ba7ca98dc98b5bc9c"></a><a href="sql_fetch.md">SQLFetch</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r38d974abf84e450ca7f96100e8a6a077"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"></a>返回结果集中某一列的数据</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc590a510e3e464995ed03abd4652d57"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc590a510e3e464995ed03abd4652d57"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc590a510e3e464995ed03abd4652d57"></a><a href="sql_get_data.md">SQLGetData</a></p>
</td>
</tr>

<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r38d974abf84e450ca7f96100e8a6a077"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"></a>用于分批向服务端发送数据</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc590a510e3e464995ed03abd4652d57"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc590a510e3e464995ed03abd4652d57"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc590a510e3e464995ed03abd4652d57"></a><a href="sql_put_data.md">SQLPutData</a></p>
</td>
</tr>

<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r38d974abf84e450ca7f96100e8a6a077"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"></a>获取最近执行的SQL语句所影响的行数</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc590a510e3e464995ed03abd4652d57"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc590a510e3e464995ed03abd4652d57"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_adc590a510e3e464995ed03abd4652d57"></a><a href="sql_row_count.md">SQLRowCount</a></p>
</td>
</tr>


<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r91f9e273dc364f31b8661698941c8f92"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a0de4032a25174dfb9fc2b5cc89f75884"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a0de4032a25174dfb9fc2b5cc89f75884"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a0de4032a25174dfb9fc2b5cc89f75884"></a>获取错误信息</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a1540fa94e3da4d2295eb9217a9485b8a"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a1540fa94e3da4d2295eb9217a9485b8a"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a1540fa94e3da4d2295eb9217a9485b8a"></a><a href="sql_error.md">SQLError</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_re2de0c9ab1fd476dad5108b6e9a8e21c"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a3ec6b29786bb4c3288ccc1168c8e05bc"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a3ec6b29786bb4c3288ccc1168c8e05bc"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a3ec6b29786bb4c3288ccc1168c8e05bc"></a>断开与数据源的连接</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_afae1b8a0efc24d24aae152baa2a268b3"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_afae1b8a0efc24d24aae152baa2a268b3"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_afae1b8a0efc24d24aae152baa2a268b3"></a><a href="sql_disconnect.md">SQLDisconnect</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_r2f6f79089ce944fc96e3c5299ab3529d"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_ad626bbb92c2e47b7a8298cc241bc8ca1"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_ad626bbb92c2e47b7a8298cc241bc8ca1"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_ad626bbb92c2e47b7a8298cc241bc8ca1"></a>释放句柄资源</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a88cf908ab37b41b89535dd24e4828401"><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a88cf908ab37b41b89535dd24e4828401"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_a88cf908ab37b41b89535dd24e4828401"></a><a href="sql_free_handle.md">SQLFreeHandle</a>：释放句柄资源，可替代如下函数：</p>
<a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_u912c46b1932d4d4b8b4136bd8317d0b5"></a><a name="zh-cn_topic_0237120409_zh-cn_topic_0059778957_u912c46b1932d4d4b8b4136bd8317d0b5"></a><ul id="zh-cn_topic_0237120409_zh-cn_topic_0059778957_u912c46b1932d4d4b8b4136bd8317d0b5"><li><a href="sql_free_env.md">SQLFreeEnv</a>：释放环境句柄</li><li><a href="sql_free_connect.md">SQLFreeConnect</a>：释放连接句柄</li><li><a href="sql_free_stmt.md">SQLFreeStmt</a>：释放语句句柄</li></ul>
</td>
</tr>
</tbody>
</table>

> <img src="public_sys-resources/icon-danger.gif"> **警告：**   
>
> ODBC为应用程序与数据库的中心层，负责把应用程序发出的SQL指令传到数据库当中，自身并不解析SQL语法。故在应用程序中写入带有保密信息的SQL语句时（如明文密码），保密信息会被暴露在驱动日志中。