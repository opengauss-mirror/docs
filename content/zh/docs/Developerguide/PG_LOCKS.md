# PG\_LOCKS<a name="ZH-CN_TOPIC_0289900103"></a>

PG\_LOCKS视图存储各打开事务所持有的锁信息。

**表 1**  PG\_LOCKS字段

<a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_te13aa2e9ee12498cbf7a4e834a669aaf"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_rf2ee96e9dc744d6b88d5d6732ff6e67d"><th class="cellrowborder" valign="top" width="16.84%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a71c3f6b73fcf432781f016208720d4a3"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a71c3f6b73fcf432781f016208720d4a3"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a71c3f6b73fcf432781f016208720d4a3"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="14.26%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_acc8c324e5fae41338a344e33b146d39f"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_acc8c324e5fae41338a344e33b146d39f"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_acc8c324e5fae41338a344e33b146d39f"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="22.06%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a97d77df43faa44eb81d4901fca678de4"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a97d77df43faa44eb81d4901fca678de4"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a97d77df43faa44eb81d4901fca678de4"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="46.839999999999996%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ab56c530874dd4868ac2d10ce95d9baf1"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ab56c530874dd4868ac2d10ce95d9baf1"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ab56c530874dd4868ac2d10ce95d9baf1"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_r763e43b54639460286dd7f8f08c14de0"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a94dfbf79b57045dea29a837b565d6ae5"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a94dfbf79b57045dea29a837b565d6ae5"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a94dfbf79b57045dea29a837b565d6ae5"></a>locktype</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ad65703d3a85742f8945b866800d3f96c"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ad65703d3a85742f8945b866800d3f96c"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ad65703d3a85742f8945b866800d3f96c"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a01650827381a48629d48e9272db292aa"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a01650827381a48629d48e9272db292aa"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a01650827381a48629d48e9272db292aa"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0c6244377f9c4237ac34b0c8105aa29e"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0c6244377f9c4237ac34b0c8105aa29e"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0c6244377f9c4237ac34b0c8105aa29e"></a>被锁定对象的类型：relation、extend、page、tuple、transactionid、virtualxid、object、userlock、advisory。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_r6b8eb0c4eeaf4319b8e8542b2aa291d1"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_afa40c12c625d45dba13dc3b600e64fc3"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_afa40c12c625d45dba13dc3b600e64fc3"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_afa40c12c625d45dba13dc3b600e64fc3"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a7ccd90f9a4ff4d9fa523adc40f6b1c98"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a7ccd90f9a4ff4d9fa523adc40f6b1c98"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a7ccd90f9a4ff4d9fa523adc40f6b1c98"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a57ccdd3af5a549f3948301efac549199"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a57ccdd3af5a549f3948301efac549199"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a57ccdd3af5a549f3948301efac549199"></a><a href="PG_DATABASE.md">PG_DATABASE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ab0b40024a84c4ec988a03a8dc0c87aea"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ab0b40024a84c4ec988a03a8dc0c87aea"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ab0b40024a84c4ec988a03a8dc0c87aea"></a>被锁定对象所在数据库的OID。</p>
<a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_u9a5bc7591fec43e5bdbcbce109b21f8f"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_u9a5bc7591fec43e5bdbcbce109b21f8f"></a><ul id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_u9a5bc7591fec43e5bdbcbce109b21f8f"><li>如果被锁定的对象是共享对象，则OID为0。</li><li>如果是一个事务ID，则为NULL。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_re83dbe86473b432a877d09d0eef392f2"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aa3e7f0f521344934ba1531dd284a8d36"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aa3e7f0f521344934ba1531dd284a8d36"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aa3e7f0f521344934ba1531dd284a8d36"></a>relation</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a85ac3d4dd20b4f358c0809a877313cf1"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a85ac3d4dd20b4f358c0809a877313cf1"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a85ac3d4dd20b4f358c0809a877313cf1"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a4e2b5fe447114176b8539dbf35e753e8"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a4e2b5fe447114176b8539dbf35e753e8"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a4e2b5fe447114176b8539dbf35e753e8"></a><a href="PG_CLASS.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a9a677efb673542298ff148c56e5f59b9"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a9a677efb673542298ff148c56e5f59b9"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a9a677efb673542298ff148c56e5f59b9"></a>关系的OID，如果锁定的对象不是关系，也不是关系的一部分，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_raa018aaf4d654da8b5ffa04f127b8f33"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af8101ad1796f416b91aa8c58f8131fae"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af8101ad1796f416b91aa8c58f8131fae"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af8101ad1796f416b91aa8c58f8131fae"></a>page</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aec80c2e1259340119e3264b47884c65e"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aec80c2e1259340119e3264b47884c65e"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aec80c2e1259340119e3264b47884c65e"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a584f82a067e644f999ca775550b3f43c"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a584f82a067e644f999ca775550b3f43c"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a584f82a067e644f999ca775550b3f43c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a32d8920304a74fddbae4941524bdcc6c"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a32d8920304a74fddbae4941524bdcc6c"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a32d8920304a74fddbae4941524bdcc6c"></a>关系内部的页面编号，如果对象不是关系页或者不是行页，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_r6abbee0948e64eedaf5ec2b44053d695"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a280d21d498a04d019fb8128ada213fa6"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a280d21d498a04d019fb8128ada213fa6"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a280d21d498a04d019fb8128ada213fa6"></a>tuple</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_afbccca638ea2453dbb381f49d8f8dae8"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_afbccca638ea2453dbb381f49d8f8dae8"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_afbccca638ea2453dbb381f49d8f8dae8"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a131559fbfcac4a4ebcbef9a41b081729"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a131559fbfcac4a4ebcbef9a41b081729"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a131559fbfcac4a4ebcbef9a41b081729"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a308eae26f3a04b8eb5197667f700c073"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a308eae26f3a04b8eb5197667f700c073"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a308eae26f3a04b8eb5197667f700c073"></a>页面里边的行编号，如果对象不是行，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_row1885912485569"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_p10860248105616"><a name="zh-cn_topic_0283137059_p10860248105616"></a><a name="zh-cn_topic_0283137059_p10860248105616"></a>bucket</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_p1686115486567"><a name="zh-cn_topic_0283137059_p1686115486567"></a><a name="zh-cn_topic_0283137059_p1686115486567"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_p68641048185616"><a name="zh-cn_topic_0283137059_p68641048185616"></a><a name="zh-cn_topic_0283137059_p68641048185616"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_p10864164812563"><a name="zh-cn_topic_0283137059_p10864164812563"></a><a name="zh-cn_topic_0283137059_p10864164812563"></a>子表对应的bucket number。如果目标不是表的话，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_rb23a225a004a44e5be57348ce895b5b2"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a9b6bd33aae7444cb91ccd7cac9dc30b2"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a9b6bd33aae7444cb91ccd7cac9dc30b2"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a9b6bd33aae7444cb91ccd7cac9dc30b2"></a>virtualxid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a8c40db004e6e40f9826ea03bbc986d3a"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a8c40db004e6e40f9826ea03bbc986d3a"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a8c40db004e6e40f9826ea03bbc986d3a"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a805f05fe74354629b979917d98d8c174"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a805f05fe74354629b979917d98d8c174"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a805f05fe74354629b979917d98d8c174"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_abef54ad1bd0641c7a26a2c2cef0e71b4"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_abef54ad1bd0641c7a26a2c2cef0e71b4"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_abef54ad1bd0641c7a26a2c2cef0e71b4"></a>事务的虚拟ID，如果对象不是一个虚拟事务ID，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_r1fbda60949c44ce0a888ec64064c1278"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0d0918dc095e4a468cc5c6c575773cc9"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0d0918dc095e4a468cc5c6c575773cc9"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0d0918dc095e4a468cc5c6c575773cc9"></a>transactionid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ad81202e50cf344e3b2f610e1cae89321"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ad81202e50cf344e3b2f610e1cae89321"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ad81202e50cf344e3b2f610e1cae89321"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ade827770e6f14107ac2c5501d95b0244"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ade827770e6f14107ac2c5501d95b0244"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ade827770e6f14107ac2c5501d95b0244"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a747c9ef77cbb4dc5bcf84c3b6270ca0d"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a747c9ef77cbb4dc5bcf84c3b6270ca0d"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a747c9ef77cbb4dc5bcf84c3b6270ca0d"></a>事务的ID，如果对象不是一个事务ID，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_rfc05f9c25379481f8deb40348c11f680"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aebfff5f12a28451dadb793fa297d8367"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aebfff5f12a28451dadb793fa297d8367"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aebfff5f12a28451dadb793fa297d8367"></a>classid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ab94dea4425834a0990c4dfc504e34f27"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ab94dea4425834a0990c4dfc504e34f27"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_ab94dea4425834a0990c4dfc504e34f27"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a7f26454a4c3a4bbe87369b75f25030ae"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a7f26454a4c3a4bbe87369b75f25030ae"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a7f26454a4c3a4bbe87369b75f25030ae"></a><a href="PG_CLASS.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a61c95ee897dd4a808fd7cb93fe4caff0"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a61c95ee897dd4a808fd7cb93fe4caff0"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a61c95ee897dd4a808fd7cb93fe4caff0"></a>包含该对象的系统表的OID，如果对象不是普通的数据库对象，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_r93bb38a86e384d06b73d6991846bde0c"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a759494fd419041afb4cfb80beb29f027"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a759494fd419041afb4cfb80beb29f027"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a759494fd419041afb4cfb80beb29f027"></a>objid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a7821b6a54885469cadca9202a4fc0f75"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a7821b6a54885469cadca9202a4fc0f75"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a7821b6a54885469cadca9202a4fc0f75"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a43b4a767b7414953b2c7af8bd381c6e9"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a43b4a767b7414953b2c7af8bd381c6e9"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a43b4a767b7414953b2c7af8bd381c6e9"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a028989faa5a34318b96dbdaadcf14838"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a028989faa5a34318b96dbdaadcf14838"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a028989faa5a34318b96dbdaadcf14838"></a>对象在其系统表内的OID，如果对象不是普通数据库对象，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_r6f17a82a933340bab2f2f6bdf0f7c9f5"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a99e972d296f244d9a42f7a84e1d71692"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a99e972d296f244d9a42f7a84e1d71692"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a99e972d296f244d9a42f7a84e1d71692"></a>objsubid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a75b30a1392614b9e93c9bf23717b3b11"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a75b30a1392614b9e93c9bf23717b3b11"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a75b30a1392614b9e93c9bf23717b3b11"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aea4379a04a8c457d90b82efa1c7ee4ac"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aea4379a04a8c457d90b82efa1c7ee4ac"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aea4379a04a8c457d90b82efa1c7ee4ac"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_afbfccbae1b8247fb87def4c78c37cd16"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_afbfccbae1b8247fb87def4c78c37cd16"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_afbfccbae1b8247fb87def4c78c37cd16"></a>对于表的一个字段，这是字段编号；对于其他对象类型，这个字段是0；如果这个对象不是普通数据库对象，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_rb487063e0c964afab6bccbde1bdcb796"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a1577832a6cca4c4dacb036e074de5048"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a1577832a6cca4c4dacb036e074de5048"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a1577832a6cca4c4dacb036e074de5048"></a>virtualtransaction</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0f9ecf898af74d899cd578703157664f"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0f9ecf898af74d899cd578703157664f"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0f9ecf898af74d899cd578703157664f"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a499a4783bd9f4568a6f58394af2d7ae1"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a499a4783bd9f4568a6f58394af2d7ae1"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a499a4783bd9f4568a6f58394af2d7ae1"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a29b051ca937c46bea7f5570f69d75beb"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a29b051ca937c46bea7f5570f69d75beb"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a29b051ca937c46bea7f5570f69d75beb"></a>持有此锁或者在等待此锁的事务的虚拟ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_r3f3a49fa976942b5b2d95e91000a5539"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0a0426b53299488cbe42849f5026bbaf"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0a0426b53299488cbe42849f5026bbaf"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a0a0426b53299488cbe42849f5026bbaf"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a213d73ae00a046c19391d1565caf68db"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a213d73ae00a046c19391d1565caf68db"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a213d73ae00a046c19391d1565caf68db"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af1982a97dcad40088f1c1a6e06308a40"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af1982a97dcad40088f1c1a6e06308a40"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af1982a97dcad40088f1c1a6e06308a40"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aaadd20596524400abd6eb6b7a279a91f"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aaadd20596524400abd6eb6b7a279a91f"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aaadd20596524400abd6eb6b7a279a91f"></a>持有或者等待这个锁的服务器线程的逻辑ID。如果锁是被一个预备事务持有的，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_row123661920548"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p19237219135414"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p19237219135414"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p19237219135414"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p1123701955410"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p1123701955410"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p1123701955410"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p22371819155417"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p22371819155417"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p22371819155417"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p823731995414"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p823731995414"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_p823731995414"></a>持有或者等待这个锁的会话ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_rfdcae59070094e68b3b9fc786c5e57f8"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a721acf216a3b43f38813c97db9fffd2f"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a721acf216a3b43f38813c97db9fffd2f"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a721acf216a3b43f38813c97db9fffd2f"></a>mode</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af7fbcf062f3f466b84f467b1c66d1565"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af7fbcf062f3f466b84f467b1c66d1565"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af7fbcf062f3f466b84f467b1c66d1565"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a5ef73c224aa54b67a05857f19ff6f795"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a5ef73c224aa54b67a05857f19ff6f795"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a5ef73c224aa54b67a05857f19ff6f795"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a03031a9148494d649fd36de49aad32b9"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a03031a9148494d649fd36de49aad32b9"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a03031a9148494d649fd36de49aad32b9"></a>这个线程持有的或者是期望的锁模式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_rcc332273baea48eaad3026f77db1316c"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aa111bfe633164bbe8e2f524649af6abe"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aa111bfe633164bbe8e2f524649af6abe"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aa111bfe633164bbe8e2f524649af6abe"></a>granted</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aa01ba9dbc48b43af9fcbcc737c09c68e"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aa01ba9dbc48b43af9fcbcc737c09c68e"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_aa01ba9dbc48b43af9fcbcc737c09c68e"></a><span id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_text3175547172912"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_text3175547172912"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_text3175547172912"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a738c16d88a444ebcb1eb612e7b8de638"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a738c16d88a444ebcb1eb612e7b8de638"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a738c16d88a444ebcb1eb612e7b8de638"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_u4825bdda5a634f239bb1b3edb2d17a57"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_u4825bdda5a634f239bb1b3edb2d17a57"></a><ul id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_u4825bdda5a634f239bb1b3edb2d17a57"><li>如果锁是持有锁，则为TRUE。</li><li>如果锁是等待锁，则为FALSE。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_rdb4300e7e4674ffa8f280b7b6efc1feb"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a4ef2f35139d94532a3e80a50fc947b53"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a4ef2f35139d94532a3e80a50fc947b53"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a4ef2f35139d94532a3e80a50fc947b53"></a>fastpath</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a91659bfffe004afe8058a428ff4a45a6"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a91659bfffe004afe8058a428ff4a45a6"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a91659bfffe004afe8058a428ff4a45a6"></a><span id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_text1412310486295"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_text1412310486295"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_text1412310486295"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af16168334c134eb49e3c7e8432c5fc8d"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af16168334c134eb49e3c7e8432c5fc8d"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_af16168334c134eb49e3c7e8432c5fc8d"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a15cc395f520d49348ba668381f91345d"><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a15cc395f520d49348ba668381f91345d"></a><a name="zh-cn_topic_0283137059_zh-cn_topic_0237122421_zh-cn_topic_0059779012_a15cc395f520d49348ba668381f91345d"></a>如果通过fast-path获得锁，则为TRUE；如果通过主要的锁表获得，则为FALSE。</p>
</td>
</tr>
<tr id="row018262010129"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p1778485184420"><a name="p1778485184420"></a><a name="p1778485184420"></a>locktag</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="p578445104412"><a name="p578445104412"></a><a name="p578445104412"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="p4784257442"><a name="p4784257442"></a><a name="p4784257442"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="p6784250443"><a name="p6784250443"></a><a name="p6784250443"></a>会话等待锁信息，可通过locktag_decode()函数解析。</p>
</td>
</tr>
<tr id="row1739525615338"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p1639615663310"><a name="p1639615663310"></a><a name="p1639615663310"></a>global_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="p1939685617334"><a name="p1939685617334"></a><a name="p1939685617334"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="p539645612339"><a name="p539645612339"></a><a name="p539645612339"></a>全局会话ID。</p>
</td>
</tr>
</tbody>
</table>
