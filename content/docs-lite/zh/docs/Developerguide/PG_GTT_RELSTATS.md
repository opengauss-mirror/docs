# PG\_GTT\_RELSTATS<a name="ZH-CN_TOPIC_0289900546"></a>

PG\_GTT\_RELSTATS视图查看当前会话所有全局临时表基本信息，调用pg\_get\_gtt\_relstats函数。

**表 1**  PG\_GTT\_RELSTATS字段

<a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_t9a322933edc649349d16f5bb7c397568"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_r479932505d8442ccb53618b9f805b142"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"></a><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a2c0b5ec2a1fb45da835f59c750be23ec"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"></a><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_aee7cb2ac3a24413aac056bb613146a76"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7a5a6b204562481691167e8db4875763"><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7a5a6b204562481691167e8db4875763"></a><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7a5a6b204562481691167e8db4875763"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_r4d9bbbb837e94860b29d9c5b818b0295"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"></a><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_ae06f18c354a34cefa869c0f5e62fc106"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"></a><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a3a79fa77dbf3431bbf7232205679153e"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"></a><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0675e13cd68b463c8d740cb343204d4a"></a>schema名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_r342532367f8748eeb8d51c5587e1781d"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"></a><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a173ab219cc5043508dc7779d0e3bbcb2"></a>tablename</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"></a><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a0cabf8c75a48458fab9735da5a46b220"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"></a><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_ac31f5ff19b584b57a1631bd878ee65f1"></a>全局临时表名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137729_row19383959131511"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137729_p12384195914157"><a name="zh-cn_topic_0283137729_p12384195914157"></a><a name="zh-cn_topic_0283137729_p12384195914157"></a>relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137729_p16384195913153"><a name="zh-cn_topic_0283137729_p16384195913153"></a><a name="zh-cn_topic_0283137729_p16384195913153"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137729_p1738414594157"><a name="zh-cn_topic_0283137729_p1738414594157"></a><a name="zh-cn_topic_0283137729_p1738414594157"></a>文件对象的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137729_row185121530162"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137729_p1951212321613"><a name="zh-cn_topic_0283137729_p1951212321613"></a><a name="zh-cn_topic_0283137729_p1951212321613"></a>relpages</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137729_p1512139162"><a name="zh-cn_topic_0283137729_p1512139162"></a><a name="zh-cn_topic_0283137729_p1512139162"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137729_p551293131613"><a name="zh-cn_topic_0283137729_p551293131613"></a><a name="zh-cn_topic_0283137729_p551293131613"></a>全局临时表的磁盘页面数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137729_row1526519522156"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137729_p526645261517"><a name="zh-cn_topic_0283137729_p526645261517"></a><a name="zh-cn_topic_0283137729_p526645261517"></a>reltuples</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137729_p82665522153"><a name="zh-cn_topic_0283137729_p82665522153"></a><a name="zh-cn_topic_0283137729_p82665522153"></a>real</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137729_p1626675218151"><a name="zh-cn_topic_0283137729_p1626675218151"></a><a name="zh-cn_topic_0283137729_p1626675218151"></a>全局临时表的记录数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137729_row42084282166"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137729_p1820815288163"><a name="zh-cn_topic_0283137729_p1820815288163"></a><a name="zh-cn_topic_0283137729_p1820815288163"></a>relallvisible</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137729_p520842820165"><a name="zh-cn_topic_0283137729_p520842820165"></a><a name="zh-cn_topic_0283137729_p520842820165"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137729_p178844523263"><a name="zh-cn_topic_0283137729_p178844523263"></a><a name="zh-cn_topic_0283137729_p178844523263"></a>被标识为全可见的页面数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137729_row1921922101617"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137729_p8214222169"><a name="zh-cn_topic_0283137729_p8214222169"></a><a name="zh-cn_topic_0283137729_p8214222169"></a>relfrozenxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137729_p15210224169"><a name="zh-cn_topic_0283137729_p15210224169"></a><a name="zh-cn_topic_0283137729_p15210224169"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137729_p8112956193210"><a name="zh-cn_topic_0283137729_p8112956193210"></a><a name="zh-cn_topic_0283137729_p8112956193210"></a>该表中所有在这个之前的事务ID已经被一个固定的（frozen）事务ID替换。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_r37d2b2511ed84812b6f857b53fa914cd"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137729_p19436184631611"><a name="zh-cn_topic_0283137729_p19436184631611"></a><a name="zh-cn_topic_0283137729_p19436184631611"></a>relminmxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a><a name="zh-cn_topic_0283137729_zh-cn_topic_0237122419_zh-cn_topic_0059777999_a7ee0570d26c64faa986204bcb4d30100"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137729_p1490835111712"><a name="zh-cn_topic_0283137729_p1490835111712"></a><a name="zh-cn_topic_0283137729_p1490835111712"></a>预留接口，暂未启用。</p>
</td>
</tr>
</tbody>
</table>

