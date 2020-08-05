# PG\_GTT_RELSTATS<a name="ZH-CN_TOPIC_0242385946"></a>

PG\_GTT_RELSTATS视图查看当前会话所有全局临时表基本信息，调用pg_get_gtt_relstats函数。

**表 1**  PG\_GTT_RELSTATS字段

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
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>relfilenode。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>relpages</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>全局临时表的磁盘页面数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>reltuples</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>全局临时表的记录数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>relallvisible</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>被标识为全可见的页面数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>relfrozenxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>该表中所有在这个之前的事务ID已经被一个固定的（"frozen"）事务ID替换。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae5b8cacf94c84403b6cd75d26fc174df"></a>relminmxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a><a name="zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0a110c88d6ee4f37ae2426b6d1b70c98"></a>暂时没用。</p>
</td>
</tr>
</tbody>
</table>


