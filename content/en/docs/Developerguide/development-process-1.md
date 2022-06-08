# Development Process<a name="EN-US_TOPIC_0244721237"></a>

**Figure  1**  ODBC-based application development process<a name="en-us_topic_0237120409_en-us_topic_0059778957_fba9450765c4b4dc8b2809b91c8de76b3"></a>  
![](figures/odbc-based-application-development-process.png "odbc-based-application-development-process")

## APIs Involved in the Development Process<a name="en-us_topic_0237120409_en-us_topic_0059778957_sc80403b34b784a2cbb2e52f9e00c3f7e"></a>

**Table  1**  API description

<a name="en-us_topic_0237120409_en-us_topic_0059778957_tc65ecd08370c4dc98898ce8ff83d394f"></a>
<table><thead align="left"><tr id="en-us_topic_0237120409_en-us_topic_0059778957_ra4bc7ab7d7a7493ea839a0e52ecf4825"><th class="cellrowborder" valign="top" width="37.2%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237120409_en-us_topic_0059778957_a9bc9fcc9378a4be996a16e650d1d5bf9"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a9bc9fcc9378a4be996a16e650d1d5bf9"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a9bc9fcc9378a4be996a16e650d1d5bf9"></a><strong id="en-us_topic_0237120409_b01271032232"><a name="en-us_topic_0237120409_b01271032232"></a><a name="en-us_topic_0237120409_b01271032232"></a>Function</strong></p>
</th>
<th class="cellrowborder" valign="top" width="62.8%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237120409_en-us_topic_0059778957_aa13d1096091a4bc1898f97cd790bdf27"><a name="en-us_topic_0237120409_en-us_topic_0059778957_aa13d1096091a4bc1898f97cd790bdf27"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_aa13d1096091a4bc1898f97cd790bdf27"></a><strong id="en-us_topic_0237120409_en-us_topic_0059778957_a16bae9c276314a118debccb05cc4734f"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a16bae9c276314a118debccb05cc4734f"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a16bae9c276314a118debccb05cc4734f"></a>API</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237120409_en-us_topic_0059778957_r6ff7b44edfc64cc69677920a5fd8a9af"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a89b6ab630a8e43a7a9b99f82f0e1d141"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a89b6ab630a8e43a7a9b99f82f0e1d141"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a89b6ab630a8e43a7a9b99f82f0e1d141"></a>Allocate a handle</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a22aa3bfdad22487990dcb987291addf5"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a22aa3bfdad22487990dcb987291addf5"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a22aa3bfdad22487990dcb987291addf5"></a><a href="sqlallochandle.md">SQLAllocHandle</a> is a generic function for allocating a handle. It can replace the following functions:</p>
<a name="en-us_topic_0237120409_en-us_topic_0059778957_u9a01eda0e47a4f5791a8febb1bb4d13d"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_u9a01eda0e47a4f5791a8febb1bb4d13d"></a><ul id="en-us_topic_0237120409_en-us_topic_0059778957_u9a01eda0e47a4f5791a8febb1bb4d13d"><li><a href="sqlallocenv.md">SQLAllocEnv</a>: allocate an environment handle</li><li><a href="sqlallocconnect.md">SQLAllocConnect</a>: allocate a connection handle</li><li><a href="sqlallocstmt.md">SQLAllocStmt</a>: allocate a statement handle</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_reca69a78621d4b29bfdbb97fc83bb8d8"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a71153a57e2a54a62967800f76ab2ffdb"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a71153a57e2a54a62967800f76ab2ffdb"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a71153a57e2a54a62967800f76ab2ffdb"></a>Set environment attributes</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_adc03933783fd442d940ef8f738043c9c"><a name="en-us_topic_0237120409_en-us_topic_0059778957_adc03933783fd442d940ef8f738043c9c"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_adc03933783fd442d940ef8f738043c9c"></a><a href="sqlsetenvattr.md">SQLSetEnvAttr</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r8a93f2fb0cf94874b2c487c93cf898c8"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a9ff560be7477470a8e6db4e86b358ee2"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a9ff560be7477470a8e6db4e86b358ee2"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a9ff560be7477470a8e6db4e86b358ee2"></a>Set connection attributes</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a9149ac8d2d234782ab15210ec0fadbb2"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a9149ac8d2d234782ab15210ec0fadbb2"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a9149ac8d2d234782ab15210ec0fadbb2"></a><a href="sqlsetconnectattr.md">SQLSetConnectAttr</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r215312d81bd845ef9af783522d0a5d31"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_ac88c707a2d6143799f25be6b716fb858"><a name="en-us_topic_0237120409_en-us_topic_0059778957_ac88c707a2d6143799f25be6b716fb858"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_ac88c707a2d6143799f25be6b716fb858"></a>Set statement attributes</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_ad7a656048ff54f62b4a937bed290b7bf"><a name="en-us_topic_0237120409_en-us_topic_0059778957_ad7a656048ff54f62b4a937bed290b7bf"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_ad7a656048ff54f62b4a937bed290b7bf"></a><a href="sqlsetstmtattr.md">SQLSetStmtAttr</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r6b385e2697d94978b0f72e9c319dfc62"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a2cc92ac0c3ae4858887aab730cfdd932"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a2cc92ac0c3ae4858887aab730cfdd932"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a2cc92ac0c3ae4858887aab730cfdd932"></a>Connect to a data source</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_aa2b32f6c2a5a48988f5d040f82eed0cc"><a name="en-us_topic_0237120409_en-us_topic_0059778957_aa2b32f6c2a5a48988f5d040f82eed0cc"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_aa2b32f6c2a5a48988f5d040f82eed0cc"></a><a href="sqlconnect.md">SQLConnect</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r74f5e5648cc545bd989724498fd61272"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a3cf1845989e84bdc92c3771e110c1215"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a3cf1845989e84bdc92c3771e110c1215"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a3cf1845989e84bdc92c3771e110c1215"></a>Bind a buffer to a column in the result set</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a4384362a96964ee3b0adc8edcb126a2c"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a4384362a96964ee3b0adc8edcb126a2c"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a4384362a96964ee3b0adc8edcb126a2c"></a><a href="sqlbindcol.md">SQLBindCol</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r2310b53cbeb44e5189d23d8cb4d54e93"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a2943061494d3423dba0f342ecfc8cd7f"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a2943061494d3423dba0f342ecfc8cd7f"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a2943061494d3423dba0f342ecfc8cd7f"></a>Bind the parameter marker of an SQL statement to a buffer</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a58559300046d4360a5f06e9382438cca"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a58559300046d4360a5f06e9382438cca"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a58559300046d4360a5f06e9382438cca"></a><a href="sqlbindparameter.md">SQLBindParameter</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_rb868d10c6c8049dda87a0655f29547a8"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_ae25811947b364a9a98ede10aa384381f"><a name="en-us_topic_0237120409_en-us_topic_0059778957_ae25811947b364a9a98ede10aa384381f"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_ae25811947b364a9a98ede10aa384381f"></a>Return the error message of the last operation</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_aaf795aa8cb55493792a23e97d1572b3d"><a name="en-us_topic_0237120409_en-us_topic_0059778957_aaf795aa8cb55493792a23e97d1572b3d"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_aaf795aa8cb55493792a23e97d1572b3d"></a><a href="sqlgetdiagrec.md">SQLGetDiagRec</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r64f440bf6f134ca09eb319dce4445f92"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a0952f23109004aacb7551e57f6fbc32b"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a0952f23109004aacb7551e57f6fbc32b"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a0952f23109004aacb7551e57f6fbc32b"></a>Prepare an SQL statement for execution</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a325549f5a69d4fa1b679d7c199c82f1f"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a325549f5a69d4fa1b679d7c199c82f1f"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a325549f5a69d4fa1b679d7c199c82f1f"></a><a href="sqlprepare.md">SQLPrepare</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r86d122da7e6a45a98abd0d2c1ceeb611"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_aad10f1c0e2f94aaeb8b7b52dfa0f9e18"><a name="en-us_topic_0237120409_en-us_topic_0059778957_aad10f1c0e2f94aaeb8b7b52dfa0f9e18"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_aad10f1c0e2f94aaeb8b7b52dfa0f9e18"></a>Run a prepared SQL statement</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a3f2dfb885b34455bbd4728a55270d8fd"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a3f2dfb885b34455bbd4728a55270d8fd"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a3f2dfb885b34455bbd4728a55270d8fd"></a><a href="sqlexecute.md">SQLExecute</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r62d4c8e0f9d3431399af1211f6fb6ee2"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a0ab152759aba4bdb994d6b302f4c370a"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a0ab152759aba4bdb994d6b302f4c370a"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a0ab152759aba4bdb994d6b302f4c370a"></a>Run an SQL statement directly</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a771fbe05801443f0abfbca0d55fcc0f7"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a771fbe05801443f0abfbca0d55fcc0f7"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a771fbe05801443f0abfbca0d55fcc0f7"></a><a href="sqlexecdirect.md">SQLExecDirect</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r568da8c171a74a8e84f5f8c8c0979afc"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a8e0c0ea376974ee880c269fc50af4bb4"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a8e0c0ea376974ee880c269fc50af4bb4"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a8e0c0ea376974ee880c269fc50af4bb4"></a>Fetch the next row (or rows) from the result set</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a8982354bec80401ba7ca98dc98b5bc9c"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a8982354bec80401ba7ca98dc98b5bc9c"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a8982354bec80401ba7ca98dc98b5bc9c"></a><a href="sqlfetch.md">SQLFetch</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r38d974abf84e450ca7f96100e8a6a077"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a39b80352f28e42d7a863c2d851a0ef96"></a>Return data in a column of the result set</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_adc590a510e3e464995ed03abd4652d57"><a name="en-us_topic_0237120409_en-us_topic_0059778957_adc590a510e3e464995ed03abd4652d57"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_adc590a510e3e464995ed03abd4652d57"></a><a href="sqlgetdata.md">SQLGetData</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r91f9e273dc364f31b8661698941c8f92"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a0de4032a25174dfb9fc2b5cc89f75884"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a0de4032a25174dfb9fc2b5cc89f75884"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a0de4032a25174dfb9fc2b5cc89f75884"></a>Get the column information from a result set</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a1540fa94e3da4d2295eb9217a9485b8a"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a1540fa94e3da4d2295eb9217a9485b8a"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a1540fa94e3da4d2295eb9217a9485b8a"></a><a href="sqlcolattribute.md">SQLColAttribute</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_re2de0c9ab1fd476dad5108b6e9a8e21c"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a3ec6b29786bb4c3288ccc1168c8e05bc"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a3ec6b29786bb4c3288ccc1168c8e05bc"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a3ec6b29786bb4c3288ccc1168c8e05bc"></a>Disconnect from a data source</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_afae1b8a0efc24d24aae152baa2a268b3"><a name="en-us_topic_0237120409_en-us_topic_0059778957_afae1b8a0efc24d24aae152baa2a268b3"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_afae1b8a0efc24d24aae152baa2a268b3"></a><a href="sqldisconnect.md">SQLDisconnect</a></p>
</td>
</tr>
<tr id="en-us_topic_0237120409_en-us_topic_0059778957_r2f6f79089ce944fc96e3c5299ab3529d"><td class="cellrowborder" valign="top" width="37.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_ad626bbb92c2e47b7a8298cc241bc8ca1"><a name="en-us_topic_0237120409_en-us_topic_0059778957_ad626bbb92c2e47b7a8298cc241bc8ca1"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_ad626bbb92c2e47b7a8298cc241bc8ca1"></a>Release a handle</p>
</td>
<td class="cellrowborder" valign="top" width="62.8%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237120409_en-us_topic_0059778957_a88cf908ab37b41b89535dd24e4828401"><a name="en-us_topic_0237120409_en-us_topic_0059778957_a88cf908ab37b41b89535dd24e4828401"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_a88cf908ab37b41b89535dd24e4828401"></a><a href="sqlfreehandle.md">SQLFreeHandle</a> is a generic function for releasing a handle. It can replace the following functions:</p>
<a name="en-us_topic_0237120409_en-us_topic_0059778957_u912c46b1932d4d4b8b4136bd8317d0b5"></a><a name="en-us_topic_0237120409_en-us_topic_0059778957_u912c46b1932d4d4b8b4136bd8317d0b5"></a><ul id="en-us_topic_0237120409_en-us_topic_0059778957_u912c46b1932d4d4b8b4136bd8317d0b5"><li><a href="sqlfreeenv.md">SQLFreeEnv</a>: release an environment handle</li><li><a href="sqlfreeconnect.md">SQLFreeConnect</a>: release a connection handle</li><li><a href="sqlfreestmt.md">SQLFreeStmt</a>: release a statement handle</li></ul>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If an execution request \(not in a transaction block\) received in the database contains multiple statements, the request is packed into a transaction. If one of the statements fails, the entire request will be rolled back.  

> <img src="public_sys-resources/icon-danger.gif"> **警告：**   
>
> ODBC is the central layer of the application program and the database. It is responsible for transmitting the SQL instructions issued by the application program to the database, and does not parse the SQL syntax by itself. Therefore, when an SQL statement with confidential information (such as a plaintext password) is written in an application, the confidential information will be exposed in the driver log.

