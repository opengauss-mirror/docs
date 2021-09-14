# PG\_STAT\_DATABASE<a name="ZH-CN_TOPIC_0289900750"></a>

PG\_STAT\_DATABASE视图将包含openGauss中每个数据库的数据库统计信息。

**表 1**  PG\_STAT\_DATABASE字段

<a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_t947bc88fa574402e92984bb8bb451725"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r7cf6577310c642149ebf3ff3716efd75"><th class="cellrowborder" valign="top" width="25.85%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1ad6ef8807a34b82905d447c065e8437"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1ad6ef8807a34b82905d447c065e8437"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1ad6ef8807a34b82905d447c065e8437"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19.46%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ace5f1a7999264b1e8e88d236071c4b9a"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ace5f1a7999264b1e8e88d236071c4b9a"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ace5f1a7999264b1e8e88d236071c4b9a"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="54.690000000000005%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac46c855ddf0842d0b51a1a8ccc467e3f"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac46c855ddf0842d0b51a1a8ccc467e3f"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac46c855ddf0842d0b51a1a8ccc467e3f"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r6a8aac0599074b71846aea40259fb80e"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a9622bfeaa1dc4c7a95a8cbcd10ac4b67"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a9622bfeaa1dc4c7a95a8cbcd10ac4b67"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a9622bfeaa1dc4c7a95a8cbcd10ac4b67"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a042e5d623409436e935c4156e53b6257"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a042e5d623409436e935c4156e53b6257"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a042e5d623409436e935c4156e53b6257"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8d69baaae44e47b58f1c3d2aa2dde316"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8d69baaae44e47b58f1c3d2aa2dde316"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8d69baaae44e47b58f1c3d2aa2dde316"></a>数据库的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r0cb3b685e5824777803d36597269bfc2"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aae650770591443c78dad1be6f5180b40"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aae650770591443c78dad1be6f5180b40"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aae650770591443c78dad1be6f5180b40"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a24cb6276441d4afc933b448e11bf8fdf"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a24cb6276441d4afc933b448e11bf8fdf"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a24cb6276441d4afc933b448e11bf8fdf"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a4723913e9b6c4846ab1eb26b4d4bc275"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a4723913e9b6c4846ab1eb26b4d4bc275"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a4723913e9b6c4846ab1eb26b4d4bc275"></a>这个数据库的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_rea32c3beefde49abb8a86fbc699c81ce"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_af4bb49e41f484e4fbb17a7ba12b3cb26"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_af4bb49e41f484e4fbb17a7ba12b3cb26"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_af4bb49e41f484e4fbb17a7ba12b3cb26"></a>numbackends</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a15020e534dd34f78a5daa1c552f94903"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a15020e534dd34f78a5daa1c552f94903"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a15020e534dd34f78a5daa1c552f94903"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8d434ffeb00a4fb9ac45118daef0f412"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8d434ffeb00a4fb9ac45118daef0f412"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8d434ffeb00a4fb9ac45118daef0f412"></a>当前连接到该数据库的后端数。 这是在返回一个反映目前状态值的视图中唯一的列；自上次重置所有其他列返回累积值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r85107e99422841c7b2c3899ec919776f"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_afc9b3486f3664ab68db8a48a338cd7b9"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_afc9b3486f3664ab68db8a48a338cd7b9"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_afc9b3486f3664ab68db8a48a338cd7b9"></a>xact_commit</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aecaa4215ab40404dbc79a473ffec665d"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aecaa4215ab40404dbc79a473ffec665d"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aecaa4215ab40404dbc79a473ffec665d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a94299f4c44604809835dc050ca4b9286"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a94299f4c44604809835dc050ca4b9286"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a94299f4c44604809835dc050ca4b9286"></a>此数据库中已经提交的事务数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r3b7e1d92887e448b993d2a7a71577e4e"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1894a1119bd3496f9e910e4ec51d92aa"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1894a1119bd3496f9e910e4ec51d92aa"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1894a1119bd3496f9e910e4ec51d92aa"></a>xact_rollback</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a2a20ae6e31604ef1a0ff6b441d60fc11"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a2a20ae6e31604ef1a0ff6b441d60fc11"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a2a20ae6e31604ef1a0ff6b441d60fc11"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ab8bdd098f2f6462eaeff687dd3fa4260"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ab8bdd098f2f6462eaeff687dd3fa4260"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ab8bdd098f2f6462eaeff687dd3fa4260"></a>此数据库中已经回滚的事务数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r1b28bd5fdab24ccc86fa809fd2596c29"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a3f90346ec2ef481fb69d707a0566d21b"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a3f90346ec2ef481fb69d707a0566d21b"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a3f90346ec2ef481fb69d707a0566d21b"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aea5bcf9d169441beb3e235dc1ef24dce"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aea5bcf9d169441beb3e235dc1ef24dce"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aea5bcf9d169441beb3e235dc1ef24dce"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac9fa9aec656749ada35ef9a5ade18c45"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac9fa9aec656749ada35ef9a5ade18c45"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac9fa9aec656749ada35ef9a5ade18c45"></a>在这个数据库中读取的磁盘块的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r91416c5188d24625815de65f5f994d55"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a87d0fc493fbb44388b5675671599666d"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a87d0fc493fbb44388b5675671599666d"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a87d0fc493fbb44388b5675671599666d"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a88c07bf3c0a04c4485d6b195125b690f"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a88c07bf3c0a04c4485d6b195125b690f"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a88c07bf3c0a04c4485d6b195125b690f"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aeb6ded094606479ba7d012c4e4670d26"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aeb6ded094606479ba7d012c4e4670d26"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aeb6ded094606479ba7d012c4e4670d26"></a>高速缓存中已经发现的磁盘块的次数， 这样读取是不必要的（这只包括openGauss缓冲区高速缓存，没有操作系统的文件系统缓存）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_rb8964a8fecd84f6f95ad94c13b5b3c3a"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a81dc1d66ea5342e69ead00267b3e2477"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a81dc1d66ea5342e69ead00267b3e2477"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a81dc1d66ea5342e69ead00267b3e2477"></a>tup_returned</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a40a5ba5350c84cd09cb7344c1a7942db"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a40a5ba5350c84cd09cb7344c1a7942db"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a40a5ba5350c84cd09cb7344c1a7942db"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a9456e8bde31a4fcb842314100f17b63c"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a9456e8bde31a4fcb842314100f17b63c"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a9456e8bde31a4fcb842314100f17b63c"></a>通过数据库查询返回的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r856a4ab74e2c4622abe7c89250bffc23"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a82d314725f1f46b6885bb57dd6c18417"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a82d314725f1f46b6885bb57dd6c18417"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a82d314725f1f46b6885bb57dd6c18417"></a>tup_fetched</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a6793f64be7eb4b66ac2a1c8a1fec75bb"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a6793f64be7eb4b66ac2a1c8a1fec75bb"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a6793f64be7eb4b66ac2a1c8a1fec75bb"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aec9775d313ad421daa64616863ea6f25"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aec9775d313ad421daa64616863ea6f25"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aec9775d313ad421daa64616863ea6f25"></a>通过数据库查询抓取的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r760cce0c303e4cd9a555ffee552ed631"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a2ff5c610e22446d28b4a889e3b357ba9"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a2ff5c610e22446d28b4a889e3b357ba9"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a2ff5c610e22446d28b4a889e3b357ba9"></a>tup_inserted</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a9b9d18b29d4b49119fb5ccc075e5341b"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a9b9d18b29d4b49119fb5ccc075e5341b"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a9b9d18b29d4b49119fb5ccc075e5341b"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a4dd4a6bf18a94f3f9e9cdd723da9a5c4"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a4dd4a6bf18a94f3f9e9cdd723da9a5c4"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a4dd4a6bf18a94f3f9e9cdd723da9a5c4"></a>通过数据库查询插入的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r6d3fb0f0375344f4b2ee4984c4fb82e1"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a86e2f810a07840e88dd8ed76eb002c5a"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a86e2f810a07840e88dd8ed76eb002c5a"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a86e2f810a07840e88dd8ed76eb002c5a"></a>tup_updated</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a86a38c3da89542fc97abfe61ce442eca"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a86a38c3da89542fc97abfe61ce442eca"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a86a38c3da89542fc97abfe61ce442eca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a44fad4002c1646df913f51e632cb0841"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a44fad4002c1646df913f51e632cb0841"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a44fad4002c1646df913f51e632cb0841"></a>通过数据库查询更新的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_rbb374e53b28c4588a5fa89f3e54505a1"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ae461a34874b7445ba67a5a43ee725aa5"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ae461a34874b7445ba67a5a43ee725aa5"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ae461a34874b7445ba67a5a43ee725aa5"></a>tup_deleted</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a6a744b4385a74f7a8435f6483986edae"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a6a744b4385a74f7a8435f6483986edae"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a6a744b4385a74f7a8435f6483986edae"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1b981f601a424b3d92e30769bed26792"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1b981f601a424b3d92e30769bed26792"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1b981f601a424b3d92e30769bed26792"></a>通过数据库查询删除的行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r5fbfbe1deb524b9f8bea7c0fceb4f215"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a0992d32e88304d56a41cb9adfc46c370"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a0992d32e88304d56a41cb9adfc46c370"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a0992d32e88304d56a41cb9adfc46c370"></a>conflicts</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac655745d25654d41b15c9e219e5b1984"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac655745d25654d41b15c9e219e5b1984"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac655745d25654d41b15c9e219e5b1984"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8afa3aad1daf4c578d577c79cf4aa2b5"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8afa3aad1daf4c578d577c79cf4aa2b5"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8afa3aad1daf4c578d577c79cf4aa2b5"></a>由于数据库恢复冲突取消的查询数量（只在备用服务器发生的冲突）。请参见<a href="PG_STAT_DATABASE_CONFLICTS.md">PG_STAT_DATABASE_CONFLICTS</a>获取更多信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r8c01855439bb4f63864698d915c24c52"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1247aef1b41c4cf8904d78fa92e49e2b"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1247aef1b41c4cf8904d78fa92e49e2b"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a1247aef1b41c4cf8904d78fa92e49e2b"></a>temp_files</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a12d7b24e23404b69b7467e250eddcea7"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a12d7b24e23404b69b7467e250eddcea7"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a12d7b24e23404b69b7467e250eddcea7"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a4e62992d6ded43738c49ffdb8ea871cc"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a4e62992d6ded43738c49ffdb8ea871cc"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a4e62992d6ded43738c49ffdb8ea871cc"></a>通过数据库查询创建的临时文件数量。计算所有临时文件， 不论为什么创建临时文件（比如排序或者哈希）， 而且不管log_temp_files设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r8ce259bfa8214ecb986a2c23f2f7fb27"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a466e95af626d4644a01dddaa7d6e596f"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a466e95af626d4644a01dddaa7d6e596f"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a466e95af626d4644a01dddaa7d6e596f"></a>temp_bytes</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a08b27d459af8416eb0f0a20da7b5a3ca"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a08b27d459af8416eb0f0a20da7b5a3ca"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a08b27d459af8416eb0f0a20da7b5a3ca"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a7d2054e123e34a13a70ab2d6ad75511e"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a7d2054e123e34a13a70ab2d6ad75511e"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a7d2054e123e34a13a70ab2d6ad75511e"></a>通过数据库查询写入临时文件的数据总量。计算所有临时文件，不论为什么创建临时文件，而且不管log_temp_files设置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r9a94123701a14c2886bda1e221221e6c"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8d2bb9668eb545fb966ed2af092dc940"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8d2bb9668eb545fb966ed2af092dc940"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a8d2bb9668eb545fb966ed2af092dc940"></a>deadlocks</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac93c5a8c32764afd9666f9d84e0447f6"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac93c5a8c32764afd9666f9d84e0447f6"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ac93c5a8c32764afd9666f9d84e0447f6"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ae713886d079f41d389a5371c7d35acf6"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ae713886d079f41d389a5371c7d35acf6"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ae713886d079f41d389a5371c7d35acf6"></a>在该数据库中检索的死锁数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_r632544e3c554442cab3d7360173bfaee"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ae016a07bca544566847e64dfd2fa8e57"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ae016a07bca544566847e64dfd2fa8e57"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ae016a07bca544566847e64dfd2fa8e57"></a>blk_read_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ad0e281db3a034c7ba9d22235d99dd8b2"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ad0e281db3a034c7ba9d22235d99dd8b2"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ad0e281db3a034c7ba9d22235d99dd8b2"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_abf870fcd502a4052b2a3bf5b9a2b1fc7"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_abf870fcd502a4052b2a3bf5b9a2b1fc7"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_abf870fcd502a4052b2a3bf5b9a2b1fc7"></a>通过数据库后端读取数据文件块花费的时间，以毫秒计算。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_rbd3ab7915c0c467687c25136a900e767"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ab49acfcdd0ed42038bb18dc6e7df00c0"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ab49acfcdd0ed42038bb18dc6e7df00c0"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_ab49acfcdd0ed42038bb18dc6e7df00c0"></a>blk_write_time</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a557a466472c943aca44537efa0bcb17e"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a557a466472c943aca44537efa0bcb17e"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a557a466472c943aca44537efa0bcb17e"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a3c751115395941c092e64ff55ea21cc1"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a3c751115395941c092e64ff55ea21cc1"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a3c751115395941c092e64ff55ea21cc1"></a>通过数据库后端写入数据文件块花费的时间，以毫秒计算。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_rc76847b7b11b4940945d29247f1693b6"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aebd772492399480b85a8654355c58c7d"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aebd772492399480b85a8654355c58c7d"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aebd772492399480b85a8654355c58c7d"></a>stats_reset</p>
</td>
<td class="cellrowborder" valign="top" width="19.46%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a3a16b40e0873422cad8e9a834130b9a9"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a3a16b40e0873422cad8e9a834130b9a9"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_a3a16b40e0873422cad8e9a834130b9a9"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="54.690000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aadb43ce7b32948eebc9e7c243c2afc2c"><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aadb43ce7b32948eebc9e7c243c2afc2c"></a><a name="zh-cn_topic_0283137044_zh-cn_topic_0237122445_zh-cn_topic_0059777912_aadb43ce7b32948eebc9e7c243c2afc2c"></a>重置当前状态统计的时间。</p>
</td>
</tr>
</tbody>
</table>

