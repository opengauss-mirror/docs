# PG\_STAT\_ALL\_TABLES

PG\_STAT\_ALL\_TABLES视图将包含当前数据库中每个表的一行（包括TOAST表），显示访问特定表的统计信息。

示例：
```sql
openGauss=# select * from PG_STAT_ALL_TABLES;
 relid |     schemaname     |            relname            | seq_scan | seq_tup_read | idx_scan | idx_tup_fetch | n_tup_ins | n_tup_upd | n_tup_del | n_tup_hot_upd | n_live_tup | n_dead_tup | last_vacuum | last_autovacuum | last_analyze | last_autoanalyze | vacuum_count | autovacuum_count | analyze_count | autoanalyze_count | last_data_changed 
-------+--------------------+-------------------------------+----------+--------------+----------+---------------+-----------+-----------+-----------+---------------+------------+------------+-------------+-----------------+--------------+------------------+--------------+------------------+---------------+-------------------+-------------------
```

**表 1**  PG\_STAT\_ALL\_TABLES字段

<a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_t68461fbb93e449bd9af3a91b3b2cce12"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r42a51a5fc4e5485b87af7a2f3315faea"><th class="cellrowborder" valign="top" width="25.85%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a6241c29f0ad8488abe7a8ae3b02074c7"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a6241c29f0ad8488abe7a8ae3b02074c7"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a6241c29f0ad8488abe7a8ae3b02074c7"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="31.11%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aba61629f46554108bbd5cd205c97e785"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aba61629f46554108bbd5cd205c97e785"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aba61629f46554108bbd5cd205c97e785"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="43.04%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_afe6b4a2bbcf3422fb0355c527f93cb3a"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_afe6b4a2bbcf3422fb0355c527f93cb3a"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_afe6b4a2bbcf3422fb0355c527f93cb3a"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r1d81e6743bff43ac8c96d5cb81990e56"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a04698dc5412f4188b1c92a9d50348d26"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a04698dc5412f4188b1c92a9d50348d26"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a04698dc5412f4188b1c92a9d50348d26"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a48efb3aed2084d8eae2592ce6b54ccf5"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a48efb3aed2084d8eae2592ce6b54ccf5"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a48efb3aed2084d8eae2592ce6b54ccf5"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ab9f67f9774f7444a993abf4fdf00f3cb"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ab9f67f9774f7444a993abf4fdf00f3cb"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ab9f67f9774f7444a993abf4fdf00f3cb"></a>表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_rb22630ad52854eb691c9fee9e9e4f885"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_acf89fe25597140f3a30ae923db4d9e6f"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_acf89fe25597140f3a30ae923db4d9e6f"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_acf89fe25597140f3a30ae923db4d9e6f"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a70509b5849624154b48ea56cb3fb83e9"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a70509b5849624154b48ea56cb3fb83e9"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a70509b5849624154b48ea56cb3fb83e9"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a48053be96eb04a8d9017fc2b54b40a47"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a48053be96eb04a8d9017fc2b54b40a47"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a48053be96eb04a8d9017fc2b54b40a47"></a>该表的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r85cf9a093ada4e2aaf0647bc1b13d775"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a18ff6e6486ad48c986b2a3bd1728136c"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a18ff6e6486ad48c986b2a3bd1728136c"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a18ff6e6486ad48c986b2a3bd1728136c"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a8325f50d28ea410da058fa4df0dea38b"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a8325f50d28ea410da058fa4df0dea38b"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a8325f50d28ea410da058fa4df0dea38b"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ab3a6d4c87fca4ed5acd346310ff1dd79"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ab3a6d4c87fca4ed5acd346310ff1dd79"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ab3a6d4c87fca4ed5acd346310ff1dd79"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r4c65860a1c4a4d98a26bf31a15085f25"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aae74f9252d454330bbd56bf28989c37f"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aae74f9252d454330bbd56bf28989c37f"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aae74f9252d454330bbd56bf28989c37f"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_abef4ebf667bf40378e81e8d4d850ad32"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_abef4ebf667bf40378e81e8d4d850ad32"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_abef4ebf667bf40378e81e8d4d850ad32"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a583cc75961a745e6aca23d2942188f66"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a583cc75961a745e6aca23d2942188f66"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a583cc75961a745e6aca23d2942188f66"></a>该表发起的顺序扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r8349331c1dff4ddab253de0371348b26"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a285f6a5ac1094a55b0df3885e2f2c1e2"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a285f6a5ac1094a55b0df3885e2f2c1e2"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a285f6a5ac1094a55b0df3885e2f2c1e2"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3ae252805dac4aff812c7798aa7c5214"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3ae252805dac4aff812c7798aa7c5214"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3ae252805dac4aff812c7798aa7c5214"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a53c1138c4aa24e09a6d900b0bf384d6d"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a53c1138c4aa24e09a6d900b0bf384d6d"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a53c1138c4aa24e09a6d900b0bf384d6d"></a>顺序扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_rbd8927ccb7ff4d3ebe2687ea66406717"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_af92c676a82ec4954a381be08491bab6a"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_af92c676a82ec4954a381be08491bab6a"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_af92c676a82ec4954a381be08491bab6a"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_acdaa533a28364779ab3fd18d7849ab2f"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_acdaa533a28364779ab3fd18d7849ab2f"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_acdaa533a28364779ab3fd18d7849ab2f"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a45397e9898ab491faf90cf82cd3e82db"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a45397e9898ab491faf90cf82cd3e82db"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a45397e9898ab491faf90cf82cd3e82db"></a>该表发起的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r7506dae307174edf8e98b3877b8ebc59"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a07f71b126a7e4ca48c89dbe3ebaafe26"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a07f71b126a7e4ca48c89dbe3ebaafe26"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a07f71b126a7e4ca48c89dbe3ebaafe26"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a926c14c724d6484cacc08072c0ffb328"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a926c14c724d6484cacc08072c0ffb328"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a926c14c724d6484cacc08072c0ffb328"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a56aed33d618e4d55995cc5ac2728b3cd"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a56aed33d618e4d55995cc5ac2728b3cd"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a56aed33d618e4d55995cc5ac2728b3cd"></a>索引扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r81bc46358b124b1eb7743bbb0955a681"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aa097af68e2d541028080a690322dcba7"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aa097af68e2d541028080a690322dcba7"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aa097af68e2d541028080a690322dcba7"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a413d88c78350484da2ae149b77482f0b"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a413d88c78350484da2ae149b77482f0b"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a413d88c78350484da2ae149b77482f0b"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aee29c0493134437e82797219f9c67f38"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aee29c0493134437e82797219f9c67f38"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aee29c0493134437e82797219f9c67f38"></a>插入行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r12057a48aac54cae99cad6b77b8d271d"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a709adace4c91480eab0f5b12771873c1"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a709adace4c91480eab0f5b12771873c1"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a709adace4c91480eab0f5b12771873c1"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ac4d6241d2fe64a6e8dddbc61f1098b65"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ac4d6241d2fe64a6e8dddbc61f1098b65"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ac4d6241d2fe64a6e8dddbc61f1098b65"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a5855d503d7c544b09010724cc56d66d3"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a5855d503d7c544b09010724cc56d66d3"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a5855d503d7c544b09010724cc56d66d3"></a>更新行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r603b7e9dfc59452c810d009128e166b5"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a651c8b56304d420a813d6988aa0b74e5"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a651c8b56304d420a813d6988aa0b74e5"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a651c8b56304d420a813d6988aa0b74e5"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_af3aa620dfcb3463eba44cb251d42523f"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_af3aa620dfcb3463eba44cb251d42523f"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_af3aa620dfcb3463eba44cb251d42523f"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3c0f98deea5f4bb7a6775c7a0fa56723"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3c0f98deea5f4bb7a6775c7a0fa56723"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3c0f98deea5f4bb7a6775c7a0fa56723"></a>删除行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r97b9939d3bf0428086afe1a83e04f4ce"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ae9613221ae8c496e913d6fcb436784ac"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ae9613221ae8c496e913d6fcb436784ac"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ae9613221ae8c496e913d6fcb436784ac"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3f9f635fd97e445f9bf6a151b5670a13"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3f9f635fd97e445f9bf6a151b5670a13"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3f9f635fd97e445f9bf6a151b5670a13"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a52cb07ae5b0740f69fe14d4354790ac0"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a52cb07ae5b0740f69fe14d4354790ac0"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a52cb07ae5b0740f69fe14d4354790ac0"></a>HOT更新行数（比如没有更新所需的单独索引）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r90a5ce1ceb964b63a5c6e03861b8dcbf"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a502204399229463e9fc5f96c1e696c41"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a502204399229463e9fc5f96c1e696c41"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a502204399229463e9fc5f96c1e696c41"></a>n_live_tup</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3b8f065046cb4322a05470c59f1fcb8b"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3b8f065046cb4322a05470c59f1fcb8b"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3b8f065046cb4322a05470c59f1fcb8b"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a05575afbab094f81b1061ddeba841ba2"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a05575afbab094f81b1061ddeba841ba2"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a05575afbab094f81b1061ddeba841ba2"></a>估计活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r544c3522eea14c7486b9b69e6910d03d"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a0a6e16e42d7545ef952d7f4bb89fe11c"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a0a6e16e42d7545ef952d7f4bb89fe11c"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a0a6e16e42d7545ef952d7f4bb89fe11c"></a>n_dead_tup</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a7ffdba0e5f564a578b863aa4d0a4b3ef"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a7ffdba0e5f564a578b863aa4d0a4b3ef"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a7ffdba0e5f564a578b863aa4d0a4b3ef"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a6062c811f0db469786087f51b56565e3"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a6062c811f0db469786087f51b56565e3"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a6062c811f0db469786087f51b56565e3"></a>估计死行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r8c29e52313714da68608d6f4c465d251"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3ce26dcab8e4417fa7895205b245e272"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3ce26dcab8e4417fa7895205b245e272"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a3ce26dcab8e4417fa7895205b245e272"></a>last_vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a53461271760548a095434eb585da1219"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a53461271760548a095434eb585da1219"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a53461271760548a095434eb585da1219"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aaf7dbd9f779b46f69b42cf8b6465bdd0"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aaf7dbd9f779b46f69b42cf8b6465bdd0"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aaf7dbd9f779b46f69b42cf8b6465bdd0"></a>最后一次清理该表的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_rc1de56b1dd60416f9a2ca2fa67fc07bf"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a6a984da962b945d389af19001c534f8d"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a6a984da962b945d389af19001c534f8d"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a6a984da962b945d389af19001c534f8d"></a>last_autovacuum</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a29cba4f9da074df387b65f6caa5e2cef"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a29cba4f9da074df387b65f6caa5e2cef"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a29cba4f9da074df387b65f6caa5e2cef"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a8fa16c691dc84c7a9b9e31cb3d8ed084"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a8fa16c691dc84c7a9b9e31cb3d8ed084"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a8fa16c691dc84c7a9b9e31cb3d8ed084"></a>上次被autovacuum守护进程清理该表的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r683a6c323abd4c968b47e726578b2a56"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ae2b7609c09dc4a75b4fabc0b2b20609a"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ae2b7609c09dc4a75b4fabc0b2b20609a"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ae2b7609c09dc4a75b4fabc0b2b20609a"></a>last_analyze</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a092c4ce6395f4534b09d8303803edb3d"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a092c4ce6395f4534b09d8303803edb3d"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a092c4ce6395f4534b09d8303803edb3d"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a33cde7e481664863a6b2e8330092843a"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a33cde7e481664863a6b2e8330092843a"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a33cde7e481664863a6b2e8330092843a"></a>上次分析该表的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_rb9d986f087594f97a420b9c2b865692a"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a1454dce85ab54b1fabf87756d7b6d98d"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a1454dce85ab54b1fabf87756d7b6d98d"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a1454dce85ab54b1fabf87756d7b6d98d"></a>last_autoanalyze</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aff80ddba2191439da19ec8b55a5ead9b"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aff80ddba2191439da19ec8b55a5ead9b"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aff80ddba2191439da19ec8b55a5ead9b"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a5ff6438815134045aee3ee394e03c8db"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a5ff6438815134045aee3ee394e03c8db"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a5ff6438815134045aee3ee394e03c8db"></a>上次被autovacuum守护进程分析该表的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r8ac63e5bb1d34eb2a8e1680fd96cd9fd"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a75bad17d58e1426d84a3c5395967863e"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a75bad17d58e1426d84a3c5395967863e"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a75bad17d58e1426d84a3c5395967863e"></a>vacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aad56c6d9f54b44cfb2837556c9a1e9e3"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aad56c6d9f54b44cfb2837556c9a1e9e3"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aad56c6d9f54b44cfb2837556c9a1e9e3"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_afdc1ed18bd13475186c3b5c4b5692931"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_afdc1ed18bd13475186c3b5c4b5692931"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_afdc1ed18bd13475186c3b5c4b5692931"></a>这个表被清理的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_rff3cebf3899141acb325803c4244a639"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a429f266d8fe246d89b8d2acc057564bb"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a429f266d8fe246d89b8d2acc057564bb"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a429f266d8fe246d89b8d2acc057564bb"></a>autovacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a603ad25884f343d7bec1eae9fea7f827"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a603ad25884f343d7bec1eae9fea7f827"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a603ad25884f343d7bec1eae9fea7f827"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ad7bec090d6044317a808c9afa40e37cd"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ad7bec090d6044317a808c9afa40e37cd"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ad7bec090d6044317a808c9afa40e37cd"></a>这个表被autovacuum清理的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_r5abadaf614c84b6cb5b52f02d73b9703"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ab9ea7ce46a874bc6a7cda665b773a807"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ab9ea7ce46a874bc6a7cda665b773a807"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ab9ea7ce46a874bc6a7cda665b773a807"></a>analyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a22dff7dd26974899baa275b28d314ab8"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a22dff7dd26974899baa275b28d314ab8"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a22dff7dd26974899baa275b28d314ab8"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ad4334f8d43774181be787ca2d8b422a1"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ad4334f8d43774181be787ca2d8b422a1"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_ad4334f8d43774181be787ca2d8b422a1"></a>这个表被分析的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_raf9ce5e9a6e34c758e472c0b2ac9b602"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aad1a866f0979452a8eb78a8f3e50d417"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aad1a866f0979452a8eb78a8f3e50d417"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_aad1a866f0979452a8eb78a8f3e50d417"></a>autoanalyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a96b8c1bef8a8474da4a904592bd04c5f"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a96b8c1bef8a8474da4a904592bd04c5f"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_a96b8c1bef8a8474da4a904592bd04c5f"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_afb60276442f34f6391fb5f4228fb1ad6"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_afb60276442f34f6391fb5f4228fb1ad6"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_zh-cn_topic_0059779176_afb60276442f34f6391fb5f4228fb1ad6"></a>这个表被autovacuum守护进程分析的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_row1486851718273"><td class="cellrowborder" valign="top" width="25.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_p89781636182115"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_p89781636182115"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_p89781636182115"></a>last_data_changed</p>
</td>
<td class="cellrowborder" valign="top" width="31.11%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_p3978183662114"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_p3978183662114"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_p3978183662114"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="43.04%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_p497803611213"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_p497803611213"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_p497803611213"></a>记录这个表上一次数据发生变化的时间（引起数据变化的操作包括INSERT/UPDATE/DELETE、EXCHANGE/TRUNCATE/DROP partition），该列数据仅在本地<span id="zh-cn_topic_0283136723_zh-cn_topic_0237122442_text1940404572114"><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_text1940404572114"></a><a name="zh-cn_topic_0283136723_zh-cn_topic_0237122442_text1940404572114"></a>数据库主节点</span>记录。</p>
</td>
</tr>
</tbody>
</table>

