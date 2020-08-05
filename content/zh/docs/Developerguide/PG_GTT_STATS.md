# PG\_GTT_STATS<a name="ZH-CN_TOPIC_0242385946"></a>

PG\_GTT_STATS视图查看当前会话所有全局临时表单列统计信息，调用pg_get_gtt_statistics函数。

**表 1**  PG\_GTT_STATS字段

<a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_t9a322933edc649349d16f5bb7c397568"></a>

<table><thead align="left"><tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r479932505d8442ccb53618b9f805b142"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7a5a6b204562481691167e8db4875763"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7a5a6b204562481691167e8db4875763"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7a5a6b204562481691167e8db4875763"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r4d9bbbb837e94860b29d9c5b818b0295"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"></a>schema名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r342532367f8748eeb8d51c5587e1781d"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"></a>tablename</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"></a>全局临时表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>attname</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>属性名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>inherited</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>是否统计有继承关系的对象。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>null_frac</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>该字段中为NULL的记录的比率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>avg_width</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>非NULL记录的平均存储宽度，以字节计。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>n_distinct</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>标识全局统计信息中字段里唯一的非NULL数据值的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>most_common_vals</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>高频值列表，按照出现的频率排序。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>most_common_freqs</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>高频值的频率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>histogram_bounds</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>等频直方图描述列中的数据分布（不包含高频值）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>correlation</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>相关系数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>most_common_elems</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>类型高频值列表，用于数组类型或一些其他类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>most_common_elem_freqs</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>类型高频值的频率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>elem_count_histogram</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>real[]</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>数组类型直方图。</p>
</td>
</tr>
</tbody>
</table>


