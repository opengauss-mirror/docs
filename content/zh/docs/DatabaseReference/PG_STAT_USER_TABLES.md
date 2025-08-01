# PG\_STAT\_USER\_TABLES

PG\_STAT\_USER\_TABLES视图显示所有命名空间中用户自定义普通表和toast表的状态信息。

示例：
```sql
openGauss=# select * from PG_STAT_USER_TABLES;
 relid |   schemaname    |    relname    | seq_scan | seq_tup_read | idx_scan | idx_tup_fetch | n_tup_ins | n_tup_upd | n_tup_del | n_tup_hot_upd | n_live_tup | n_dead_tup | last_vacuum | last_autovacuum | last_analyze | last_autoanalyze | vacuum_count | autovacuum_count | analyze_count | autoanalyze_count | last_data_changed 
-------+-----------------+---------------+----------+--------------+----------+---------------+-----------+-----------+-----------+---------------+------------+------------+-------------+-----------------+--------------+------------------+--------------+------------------+---------------+-------------------+-------------------
```

**表 1**  PG\_STAT\_USER\_TABLES字段

<a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_tede6a74b328d4803a2a5c1aebdfb92d8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_rc3e30964c1144c77bcba43695f4cff1b"><th class="cellrowborder" valign="top" width="24.16%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1b15768f8b68469baeefbac0c7cd362b"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1b15768f8b68469baeefbac0c7cd362b"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1b15768f8b68469baeefbac0c7cd362b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="32.800000000000004%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_af52b78c596bb4294ad7a564daa14b20e"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_af52b78c596bb4294ad7a564daa14b20e"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_af52b78c596bb4294ad7a564daa14b20e"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="43.04%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa8c05e1d3f6a4adcb5f7b8ccbefffb0a"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa8c05e1d3f6a4adcb5f7b8ccbefffb0a"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa8c05e1d3f6a4adcb5f7b8ccbefffb0a"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r38dc54584ea149f3b379e8d932efc9bd"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ade4bc82f4aad45aca2143c9f0b097b9f"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ade4bc82f4aad45aca2143c9f0b097b9f"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ade4bc82f4aad45aca2143c9f0b097b9f"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a25eb45b0cfca4c208196cddbcf7cac7e"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a25eb45b0cfca4c208196cddbcf7cac7e"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a25eb45b0cfca4c208196cddbcf7cac7e"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ae64265fb60bb4ebea47ff53cbe595d35"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ae64265fb60bb4ebea47ff53cbe595d35"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ae64265fb60bb4ebea47ff53cbe595d35"></a>表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r1eec43aafd9c46058782e3d6f73fa38e"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa32095f78ee54533a67e60acaea99aeb"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa32095f78ee54533a67e60acaea99aeb"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa32095f78ee54533a67e60acaea99aeb"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1c6234c9b6da4534832752f7700793d7"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1c6234c9b6da4534832752f7700793d7"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1c6234c9b6da4534832752f7700793d7"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_add2997e045e147ad98be7f1b1e0ce3c2"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_add2997e045e147ad98be7f1b1e0ce3c2"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_add2997e045e147ad98be7f1b1e0ce3c2"></a>该表的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r7f6e780baba74b2a8ac2b519187c2499"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab28e66760fe34fd8b00b3aa9308f5534"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab28e66760fe34fd8b00b3aa9308f5534"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab28e66760fe34fd8b00b3aa9308f5534"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a828ecb4bcf784c7f9ffa676ac1eb4178"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a828ecb4bcf784c7f9ffa676ac1eb4178"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a828ecb4bcf784c7f9ffa676ac1eb4178"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a0d4bd8c2f3954849a2842bfc7be1269a"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a0d4bd8c2f3954849a2842bfc7be1269a"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a0d4bd8c2f3954849a2842bfc7be1269a"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r1223050d2280464485f7b56d44f97051"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a8cbedea2fb8443fa82eec536629b59a6"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a8cbedea2fb8443fa82eec536629b59a6"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a8cbedea2fb8443fa82eec536629b59a6"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a517b2c44bfd04e4d93ec6bfd8c4fc09f"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a517b2c44bfd04e4d93ec6bfd8c4fc09f"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a517b2c44bfd04e4d93ec6bfd8c4fc09f"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aad038dfca7264b0aba9771e318051bbb"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aad038dfca7264b0aba9771e318051bbb"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aad038dfca7264b0aba9771e318051bbb"></a>该表发起的顺序扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_rd0c100dc954f4e0f97c31d2085372898"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a21a648a81b7a4624ad316664ba3ce0ef"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a21a648a81b7a4624ad316664ba3ce0ef"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a21a648a81b7a4624ad316664ba3ce0ef"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a4c67248db6ef43e9a89e85f899df7df8"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a4c67248db6ef43e9a89e85f899df7df8"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a4c67248db6ef43e9a89e85f899df7df8"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ae7347144851d45e0ab71fa9c6e8d9dc4"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ae7347144851d45e0ab71fa9c6e8d9dc4"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ae7347144851d45e0ab71fa9c6e8d9dc4"></a>顺序扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_rb8d8e9cf48204d55a87bff9939c6335a"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a14adcf2c714440eaa3e4c49d4591a1b6"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a14adcf2c714440eaa3e4c49d4591a1b6"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a14adcf2c714440eaa3e4c49d4591a1b6"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a10053b142e964f25a0397deb56a3526a"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a10053b142e964f25a0397deb56a3526a"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a10053b142e964f25a0397deb56a3526a"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a53b8073f94944a4d89e2581b62c74858"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a53b8073f94944a4d89e2581b62c74858"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a53b8073f94944a4d89e2581b62c74858"></a>该表发起的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r3636ddb6986b41f9879ba0dfb715c0e1"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a284567705e2446ce8fc14f715f7e7679"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a284567705e2446ce8fc14f715f7e7679"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a284567705e2446ce8fc14f715f7e7679"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a2da56b312a624cd8baba27da745ad307"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a2da56b312a624cd8baba27da745ad307"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a2da56b312a624cd8baba27da745ad307"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a03055d5bd4564fc8af9cbd8a781adbb1"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a03055d5bd4564fc8af9cbd8a781adbb1"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a03055d5bd4564fc8af9cbd8a781adbb1"></a>索引扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_rb213bd1636884c1c94d8f9948de157f0"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab46d8ca815004adb8728f81ff4fda761"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab46d8ca815004adb8728f81ff4fda761"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab46d8ca815004adb8728f81ff4fda761"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a26bc3fc4a92a405d86d5cbe9d40b321c"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a26bc3fc4a92a405d86d5cbe9d40b321c"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a26bc3fc4a92a405d86d5cbe9d40b321c"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a9fbaf9567ea44a568672b0c4dac1d545"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a9fbaf9567ea44a568672b0c4dac1d545"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a9fbaf9567ea44a568672b0c4dac1d545"></a>插入行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ra4aab68de5cf4558b16fe36d887ef499"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad97f55b204aa491b801cc85c655e84c1"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad97f55b204aa491b801cc85c655e84c1"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad97f55b204aa491b801cc85c655e84c1"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa731ecbfa315460fabd3205864098490"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa731ecbfa315460fabd3205864098490"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa731ecbfa315460fabd3205864098490"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab9acea46809b423c95d47cb29889f741"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab9acea46809b423c95d47cb29889f741"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab9acea46809b423c95d47cb29889f741"></a>更新行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r44da628702ae4d35b4629b884fc03090"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a08f9b717c83940448adde2efdf1522d2"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a08f9b717c83940448adde2efdf1522d2"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a08f9b717c83940448adde2efdf1522d2"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a30cb39d0a3574ffab4423b1320bf1861"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a30cb39d0a3574ffab4423b1320bf1861"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a30cb39d0a3574ffab4423b1320bf1861"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a3271a07352e440c088b051c745a2e568"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a3271a07352e440c088b051c745a2e568"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a3271a07352e440c088b051c745a2e568"></a>删除行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r0dfc821baa1c4698854a23f61af06075"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a2ee3603e90a5491ab6638bc46a4ebb44"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a2ee3603e90a5491ab6638bc46a4ebb44"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a2ee3603e90a5491ab6638bc46a4ebb44"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a6fbad59cd22f4aab9789545989869750"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a6fbad59cd22f4aab9789545989869750"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a6fbad59cd22f4aab9789545989869750"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a6aa4090783ad41caaaa94f92d46514a8"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a6aa4090783ad41caaaa94f92d46514a8"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a6aa4090783ad41caaaa94f92d46514a8"></a>HOT更新行数（即没有更新所需的单独索引）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r05a5188016cf458f836c1f9c79857964"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a6685696421ae4a3180f6be0d114019a9"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a6685696421ae4a3180f6be0d114019a9"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a6685696421ae4a3180f6be0d114019a9"></a>n_live_tup</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a44e3b1ae59d940878959bb060b3dcbf2"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a44e3b1ae59d940878959bb060b3dcbf2"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a44e3b1ae59d940878959bb060b3dcbf2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aad0ff43078bb4da4912f655e1d399b6e"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aad0ff43078bb4da4912f655e1d399b6e"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aad0ff43078bb4da4912f655e1d399b6e"></a>估计活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r771f9d2f081b498caf0cc24e6e307d40"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad06d2815249c426c9ab7859e21cc71cc"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad06d2815249c426c9ab7859e21cc71cc"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad06d2815249c426c9ab7859e21cc71cc"></a>n_dead_tup</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aeefecf426e4e40cbb047561f6b4dd16d"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aeefecf426e4e40cbb047561f6b4dd16d"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aeefecf426e4e40cbb047561f6b4dd16d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa2c208ae5be243eea8ce8a0374e7eb5b"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa2c208ae5be243eea8ce8a0374e7eb5b"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa2c208ae5be243eea8ce8a0374e7eb5b"></a>估计死行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_rd1066b30e7464978b47ed68c03942698"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1153331101d14de6acaf50189e7e7139"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1153331101d14de6acaf50189e7e7139"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1153331101d14de6acaf50189e7e7139"></a>last_vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aabc70a3f83604c0897db3cf7b4d62fa8"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aabc70a3f83604c0897db3cf7b4d62fa8"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aabc70a3f83604c0897db3cf7b4d62fa8"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab29872e4c5c64505bc0039a33f2c4bcc"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab29872e4c5c64505bc0039a33f2c4bcc"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab29872e4c5c64505bc0039a33f2c4bcc"></a>最后一次该表是手动清理的（不计算VACUUM FULL）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r3d2b1775670c47ed8aaaf8958a46077b"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a09a3e4c21fda4ee4bce88c06dbb72274"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a09a3e4c21fda4ee4bce88c06dbb72274"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a09a3e4c21fda4ee4bce88c06dbb72274"></a>last_autovacuum</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad8c5a25f6ea64106acab1db73b13bfe5"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad8c5a25f6ea64106acab1db73b13bfe5"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad8c5a25f6ea64106acab1db73b13bfe5"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab84b1a48b75c427ea5f0757c283e3a21"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab84b1a48b75c427ea5f0757c283e3a21"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ab84b1a48b75c427ea5f0757c283e3a21"></a>上次被autovacuum守护进程清理的表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ra6955dddb90b484bb95976754a2e2a16"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a5b0914dbe08341308737bcf5b351fea8"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a5b0914dbe08341308737bcf5b351fea8"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a5b0914dbe08341308737bcf5b351fea8"></a>last_analyze</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a707e429dc1e5430b9899469b14dfc959"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a707e429dc1e5430b9899469b14dfc959"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a707e429dc1e5430b9899469b14dfc959"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a8f335e3e965f4c0cafe31e3fb5fdabd4"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a8f335e3e965f4c0cafe31e3fb5fdabd4"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a8f335e3e965f4c0cafe31e3fb5fdabd4"></a>上次手动分析这个表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r26236fda9ac44ed99787e6a0192633ca"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a785bb506b6b74959b44d36f15d395f80"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a785bb506b6b74959b44d36f15d395f80"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a785bb506b6b74959b44d36f15d395f80"></a>last_autoanalyze</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ae3fcf677dbb148d98c948cabd1fabbba"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ae3fcf677dbb148d98c948cabd1fabbba"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ae3fcf677dbb148d98c948cabd1fabbba"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad6fcb4646a224e3dba263ae7ffd62a78"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad6fcb4646a224e3dba263ae7ffd62a78"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad6fcb4646a224e3dba263ae7ffd62a78"></a>上次被autovacuum守护进程分析的表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_re14e905a0dd34c7294f821f9c6b3d43a"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a2b3ae1662eec4fc9ae54019983f24e8a"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a2b3ae1662eec4fc9ae54019983f24e8a"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a2b3ae1662eec4fc9ae54019983f24e8a"></a>vacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad45e6be379594d3f8b32e46e76ec8fa7"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad45e6be379594d3f8b32e46e76ec8fa7"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_ad45e6be379594d3f8b32e46e76ec8fa7"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa8afdae25fa24aefb9a41e0a87df4b79"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa8afdae25fa24aefb9a41e0a87df4b79"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aa8afdae25fa24aefb9a41e0a87df4b79"></a>这个表被手动清理的次数（不计算VACUUM FULL）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_re15ff14a90ae4a858b216b21276730d0"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a31fc949a556248adbe40c16dc0b53eb5"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a31fc949a556248adbe40c16dc0b53eb5"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a31fc949a556248adbe40c16dc0b53eb5"></a>autovacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a9a04fde66fce451ca8e78a94979203b7"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a9a04fde66fce451ca8e78a94979203b7"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a9a04fde66fce451ca8e78a94979203b7"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a002fcd2d753a445f8e8261edc6330b20"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a002fcd2d753a445f8e8261edc6330b20"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a002fcd2d753a445f8e8261edc6330b20"></a>这个表被autovacuum清理的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r58777f491b1244a589af978d46863134"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_afb749b9b575e43668700f56d95e6447b"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_afb749b9b575e43668700f56d95e6447b"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_afb749b9b575e43668700f56d95e6447b"></a>analyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aceb1ca3179204df7bc5ce90ad9dad4d8"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aceb1ca3179204df7bc5ce90ad9dad4d8"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aceb1ca3179204df7bc5ce90ad9dad4d8"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1ff582d315274e7ea42132456880347d"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1ff582d315274e7ea42132456880347d"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a1ff582d315274e7ea42132456880347d"></a>这个表被手动分析的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_r212646b867694c0fb15551573f418d38"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_af35e64d4d0d64c20a161308e1338acc0"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_af35e64d4d0d64c20a161308e1338acc0"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_af35e64d4d0d64c20a161308e1338acc0"></a>autoanalyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aec381e2578c64902b8ec56ddf39c7add"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aec381e2578c64902b8ec56ddf39c7add"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_aec381e2578c64902b8ec56ddf39c7add"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a567f6b5102fa4c4e85e0e33968c51892"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a567f6b5102fa4c4e85e0e33968c51892"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_zh-cn_topic_0059777497_a567f6b5102fa4c4e85e0e33968c51892"></a>这个表被autovacuum守护进程分析的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_row134601324172614"><td class="cellrowborder" valign="top" width="24.16%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_p718818892119"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_p718818892119"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_p718818892119"></a>last_data_changed</p>
</td>
<td class="cellrowborder" valign="top" width="32.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_p1018813802116"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_p1018813802116"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_p1018813802116"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136842_zh-cn_topic_0237122449_p718819842118"><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_p718819842118"></a><a name="zh-cn_topic_0283136842_zh-cn_topic_0237122449_p718819842118"></a>这个表数据最近修改时间。</p>
</td>
</tr>
</tbody>
</table>


