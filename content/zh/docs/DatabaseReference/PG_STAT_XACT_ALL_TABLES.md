# PG\_STAT\_XACT\_ALL\_TABLES

PG\_STAT\_XACT\_ALL\_TABLES视图显示命名空间中所有普通表和toast表的事务状态信息。

**表 1**  PG\_STAT\_XACT\_ALL\_TABLES字段

<a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_t8ea2059ad40d4d7aa3bf4d57efc6f120"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_re43718a6469144b78bb9095dac6c11c8"><th class="cellrowborder" valign="top" width="23.22%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a2f2a8b0017654e8db1ee3078e760b0a5"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a2f2a8b0017654e8db1ee3078e760b0a5"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a2f2a8b0017654e8db1ee3078e760b0a5"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="14.38%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ab4bd7dca38564ccab53df4cafbc65901"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ab4bd7dca38564ccab53df4cafbc65901"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ab4bd7dca38564ccab53df4cafbc65901"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="62.4%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a19226924974141c58111ada2638e261d"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a19226924974141c58111ada2638e261d"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a19226924974141c58111ada2638e261d"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_r3a874fb7fcd34592873104d63a08bf49"><td class="cellrowborder" valign="top" width="23.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a4daf1437b0b54d67a33b40dc0c849188"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a4daf1437b0b54d67a33b40dc0c849188"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a4daf1437b0b54d67a33b40dc0c849188"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="14.38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a3c7b26992acc49968233af1a53d374dc"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a3c7b26992acc49968233af1a53d374dc"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a3c7b26992acc49968233af1a53d374dc"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a0a55ef9191044224a866942223c34bb5"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a0a55ef9191044224a866942223c34bb5"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a0a55ef9191044224a866942223c34bb5"></a>表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_r9fe52f56fe464f32941acf380174d916"><td class="cellrowborder" valign="top" width="23.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a2d460cee97834d95b26f71ef58d49a80"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a2d460cee97834d95b26f71ef58d49a80"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a2d460cee97834d95b26f71ef58d49a80"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="14.38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a7f6f8f2f9f76445ea99ff7ae011ad78d"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a7f6f8f2f9f76445ea99ff7ae011ad78d"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a7f6f8f2f9f76445ea99ff7ae011ad78d"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a217b267370844085a7b177d53ffd85a9"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a217b267370844085a7b177d53ffd85a9"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a217b267370844085a7b177d53ffd85a9"></a>该表的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_r2ea38271e5844bab8e7eba6e9c33ced0"><td class="cellrowborder" valign="top" width="23.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a2dab0fc93160404dbd5957f1da2aa940"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a2dab0fc93160404dbd5957f1da2aa940"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a2dab0fc93160404dbd5957f1da2aa940"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="14.38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_afc5dee6599bf46919670156b49db0fb9"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_afc5dee6599bf46919670156b49db0fb9"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_afc5dee6599bf46919670156b49db0fb9"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_aa88ff011f75340a78d7d3be102bd5ba0"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_aa88ff011f75340a78d7d3be102bd5ba0"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_aa88ff011f75340a78d7d3be102bd5ba0"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_r59b1119865694ab487388da71048bf52"><td class="cellrowborder" valign="top" width="23.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_af3f394e9a895489185c7795d1eaad716"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_af3f394e9a895489185c7795d1eaad716"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_af3f394e9a895489185c7795d1eaad716"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="14.38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a8f0e4708db46478d8da9fd10323ab463"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a8f0e4708db46478d8da9fd10323ab463"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a8f0e4708db46478d8da9fd10323ab463"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a513d25d650034e37b81f4f27bb7e8d2f"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a513d25d650034e37b81f4f27bb7e8d2f"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a513d25d650034e37b81f4f27bb7e8d2f"></a>该表发起的顺序扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_r149b741c52684e9ca5e12e4bdbcc830f"><td class="cellrowborder" valign="top" width="23.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a90ff7a25fc56428ebc9b2d0c33e4aa4c"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a90ff7a25fc56428ebc9b2d0c33e4aa4c"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a90ff7a25fc56428ebc9b2d0c33e4aa4c"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="14.38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_adf478769ee6d4b599193e23969e1bfd6"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_adf478769ee6d4b599193e23969e1bfd6"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_adf478769ee6d4b599193e23969e1bfd6"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ab9bd14bcdd2f4d7eb0382a958313e984"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ab9bd14bcdd2f4d7eb0382a958313e984"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ab9bd14bcdd2f4d7eb0382a958313e984"></a>顺序扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_r9fadacbe0d4248d09852c23a7315bd68"><td class="cellrowborder" valign="top" width="23.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a5b9ad07fe4b048e9b6a1afe0681424ca"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a5b9ad07fe4b048e9b6a1afe0681424ca"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a5b9ad07fe4b048e9b6a1afe0681424ca"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="14.38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_aec881880ce4949b1887a26b76f8144e0"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_aec881880ce4949b1887a26b76f8144e0"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_aec881880ce4949b1887a26b76f8144e0"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a802797fbcdfd401dbd095c90f479c75e"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a802797fbcdfd401dbd095c90f479c75e"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a802797fbcdfd401dbd095c90f479c75e"></a>该表发起的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_r6eb365adbf404179be1d91e472854f03"><td class="cellrowborder" valign="top" width="23.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_af388f72f38ac4010aeaa1748982f679d"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_af388f72f38ac4010aeaa1748982f679d"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_af388f72f38ac4010aeaa1748982f679d"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="14.38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a97e68f38edef4eb58de5daa9998d0589"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a97e68f38edef4eb58de5daa9998d0589"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a97e68f38edef4eb58de5daa9998d0589"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a71f7ef9d58ca41158cfa3ed1b032cfe8"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a71f7ef9d58ca41158cfa3ed1b032cfe8"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a71f7ef9d58ca41158cfa3ed1b032cfe8"></a>索引扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_r069fee13394942bf9111ee486ea5f06d"><td class="cellrowborder" valign="top" width="23.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a85d0f30c99704e1989e403b5f50153a3"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a85d0f30c99704e1989e403b5f50153a3"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a85d0f30c99704e1989e403b5f50153a3"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="14.38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a237b6c349ffa4204ab04d7bc3ea5f0a6"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a237b6c349ffa4204ab04d7bc3ea5f0a6"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a237b6c349ffa4204ab04d7bc3ea5f0a6"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a453b27bc7d7146e698792d140767820e"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a453b27bc7d7146e698792d140767820e"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a453b27bc7d7146e698792d140767820e"></a>插入行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_rb005434291eb4864883e4a30ef91611c"><td class="cellrowborder" valign="top" width="23.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_af458a5ac203c40bb8daa554d5ba0f43b"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_af458a5ac203c40bb8daa554d5ba0f43b"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_af458a5ac203c40bb8daa554d5ba0f43b"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="14.38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a5078605ff52543d5b9c77b70722a453b"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a5078605ff52543d5b9c77b70722a453b"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a5078605ff52543d5b9c77b70722a453b"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a99a39d27b14046d98875c117d4e804b0"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a99a39d27b14046d98875c117d4e804b0"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a99a39d27b14046d98875c117d4e804b0"></a>更新行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_rb758367d79184c1fa37872047e47e162"><td class="cellrowborder" valign="top" width="23.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ab866d1dda1dc480b8afc3b72a1abecfc"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ab866d1dda1dc480b8afc3b72a1abecfc"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ab866d1dda1dc480b8afc3b72a1abecfc"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="14.38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_aae661687cb8946f1b7c64fc59b961997"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_aae661687cb8946f1b7c64fc59b961997"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_aae661687cb8946f1b7c64fc59b961997"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a724cd9e18d5247919f5997336505aee9"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a724cd9e18d5247919f5997336505aee9"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a724cd9e18d5247919f5997336505aee9"></a>删除行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_r9ed50e1a0e334ac4a33ccba8111ad303"><td class="cellrowborder" valign="top" width="23.22%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ad6d4b6b0bf76408b999fc8a19c38f65b"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ad6d4b6b0bf76408b999fc8a19c38f65b"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_ad6d4b6b0bf76408b999fc8a19c38f65b"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="14.38%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a26fe40aefc87496fb42f3659b0ec408e"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a26fe40aefc87496fb42f3659b0ec408e"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a26fe40aefc87496fb42f3659b0ec408e"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.4%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a3e75e1e81ad44b8f9839c3e6f55882cc"><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a3e75e1e81ad44b8f9839c3e6f55882cc"></a><a name="zh-cn_topic_0283136889_zh-cn_topic_0237122453_zh-cn_topic_0059778946_a3e75e1e81ad44b8f9839c3e6f55882cc"></a>HOT更新行数（比如没有更新所需的单独索引）。</p>
</td>
</tr>
</tbody>
</table>

