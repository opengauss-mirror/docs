# PG\_LOCKS<a name="EN-US_TOPIC_0242385948"></a>

**PG\_LOCKS**  displays information about locks held by open transactions.

**Table  1**  PG\_LOCKS columns

<a name="en-us_topic_0237122421_en-us_topic_0059779012_te13aa2e9ee12498cbf7a4e834a669aaf"></a>
<table><thead align="left"><tr id="en-us_topic_0237122421_en-us_topic_0059779012_rf2ee96e9dc744d6b88d5d6732ff6e67d"><th class="cellrowborder" valign="top" width="16.84%" id="mcps1.2.5.1.1"><p id="en-us_topic_0237122421_en-us_topic_0059779012_a71c3f6b73fcf432781f016208720d4a3"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a71c3f6b73fcf432781f016208720d4a3"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a71c3f6b73fcf432781f016208720d4a3"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="14.26%" id="mcps1.2.5.1.2"><p id="en-us_topic_0237122421_en-us_topic_0059779012_acc8c324e5fae41338a344e33b146d39f"><a name="en-us_topic_0237122421_en-us_topic_0059779012_acc8c324e5fae41338a344e33b146d39f"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_acc8c324e5fae41338a344e33b146d39f"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="22.06%" id="mcps1.2.5.1.3"><p id="en-us_topic_0237122421_en-us_topic_0059779012_a97d77df43faa44eb81d4901fca678de4"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a97d77df43faa44eb81d4901fca678de4"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a97d77df43faa44eb81d4901fca678de4"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="46.839999999999996%" id="mcps1.2.5.1.4"><p id="en-us_topic_0237122421_en-us_topic_0059779012_ab56c530874dd4868ac2d10ce95d9baf1"><a name="en-us_topic_0237122421_en-us_topic_0059779012_ab56c530874dd4868ac2d10ce95d9baf1"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_ab56c530874dd4868ac2d10ce95d9baf1"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122421_en-us_topic_0059779012_r763e43b54639460286dd7f8f08c14de0"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a94dfbf79b57045dea29a837b565d6ae5"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a94dfbf79b57045dea29a837b565d6ae5"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a94dfbf79b57045dea29a837b565d6ae5"></a>locktype</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_ad65703d3a85742f8945b866800d3f96c"><a name="en-us_topic_0237122421_en-us_topic_0059779012_ad65703d3a85742f8945b866800d3f96c"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_ad65703d3a85742f8945b866800d3f96c"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a01650827381a48629d48e9272db292aa"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a01650827381a48629d48e9272db292aa"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a01650827381a48629d48e9272db292aa"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a0c6244377f9c4237ac34b0c8105aa29e"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a0c6244377f9c4237ac34b0c8105aa29e"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a0c6244377f9c4237ac34b0c8105aa29e"></a>Type of the locked object: <strong id="b429519718818"><a name="b429519718818"></a><a name="b429519718818"></a>relation</strong>, <strong id="b173011871186"><a name="b173011871186"></a><a name="b173011871186"></a>extend</strong>, <strong id="b1330216713814"><a name="b1330216713814"></a><a name="b1330216713814"></a>page</strong>, <strong id="b13031471189"><a name="b13031471189"></a><a name="b13031471189"></a>tuple</strong>, <strong id="b163041072085"><a name="b163041072085"></a><a name="b163041072085"></a>transactionid</strong>, <strong id="b1305127383"><a name="b1305127383"></a><a name="b1305127383"></a>virtualxid</strong>, <strong id="b19306127781"><a name="b19306127781"></a><a name="b19306127781"></a>object</strong>, <strong id="b93062071813"><a name="b93062071813"></a><a name="b93062071813"></a>userlock</strong>, or <strong id="b8307172816"><a name="b8307172816"></a><a name="b8307172816"></a>advisory</strong></p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_r6b8eb0c4eeaf4319b8e8542b2aa291d1"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_afa40c12c625d45dba13dc3b600e64fc3"><a name="en-us_topic_0237122421_en-us_topic_0059779012_afa40c12c625d45dba13dc3b600e64fc3"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_afa40c12c625d45dba13dc3b600e64fc3"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a7ccd90f9a4ff4d9fa523adc40f6b1c98"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a7ccd90f9a4ff4d9fa523adc40f6b1c98"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a7ccd90f9a4ff4d9fa523adc40f6b1c98"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a57ccdd3af5a549f3948301efac549199"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a57ccdd3af5a549f3948301efac549199"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a57ccdd3af5a549f3948301efac549199"></a><a href="en-us_topic_0242385808.md">PG_DATABASE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_ab0b40024a84c4ec988a03a8dc0c87aea"><a name="en-us_topic_0237122421_en-us_topic_0059779012_ab0b40024a84c4ec988a03a8dc0c87aea"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_ab0b40024a84c4ec988a03a8dc0c87aea"></a>OID of the database in which the locked object exists.</p>
<a name="en-us_topic_0237122421_en-us_topic_0059779012_u9a5bc7591fec43e5bdbcbce109b21f8f"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_u9a5bc7591fec43e5bdbcbce109b21f8f"></a><ul id="en-us_topic_0237122421_en-us_topic_0059779012_u9a5bc7591fec43e5bdbcbce109b21f8f"><li>The OID is <strong id="b133716185711"><a name="b133716185711"></a><a name="b133716185711"></a>0</strong> if the object is a shared object.</li><li>The OID is <strong id="b18153122314573"><a name="b18153122314573"></a><a name="b18153122314573"></a>NULL</strong> if the object is a transaction ID.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_re83dbe86473b432a877d09d0eef392f2"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_aa3e7f0f521344934ba1531dd284a8d36"><a name="en-us_topic_0237122421_en-us_topic_0059779012_aa3e7f0f521344934ba1531dd284a8d36"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_aa3e7f0f521344934ba1531dd284a8d36"></a>relation</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a85ac3d4dd20b4f358c0809a877313cf1"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a85ac3d4dd20b4f358c0809a877313cf1"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a85ac3d4dd20b4f358c0809a877313cf1"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a4e2b5fe447114176b8539dbf35e753e8"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a4e2b5fe447114176b8539dbf35e753e8"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a4e2b5fe447114176b8539dbf35e753e8"></a><a href="pg_class.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a9a677efb673542298ff148c56e5f59b9"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a9a677efb673542298ff148c56e5f59b9"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a9a677efb673542298ff148c56e5f59b9"></a>OID of the relationship targeted by the lock. The value is <strong id="b3602501231"><a name="b3602501231"></a><a name="b3602501231"></a>NULL</strong> if the object is not a relationship or part of a relationship.</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_raa018aaf4d654da8b5ffa04f127b8f33"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_af8101ad1796f416b91aa8c58f8131fae"><a name="en-us_topic_0237122421_en-us_topic_0059779012_af8101ad1796f416b91aa8c58f8131fae"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_af8101ad1796f416b91aa8c58f8131fae"></a>page</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_aec80c2e1259340119e3264b47884c65e"><a name="en-us_topic_0237122421_en-us_topic_0059779012_aec80c2e1259340119e3264b47884c65e"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_aec80c2e1259340119e3264b47884c65e"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a584f82a067e644f999ca775550b3f43c"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a584f82a067e644f999ca775550b3f43c"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a584f82a067e644f999ca775550b3f43c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a32d8920304a74fddbae4941524bdcc6c"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a32d8920304a74fddbae4941524bdcc6c"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a32d8920304a74fddbae4941524bdcc6c"></a>Page number targeted by the lock within the relation (<strong id="en-us_topic_0237122421_b1823194142219"><a name="en-us_topic_0237122421_b1823194142219"></a><a name="en-us_topic_0237122421_b1823194142219"></a>NULL</strong> if the object is not a relation page or row page)</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_r6abbee0948e64eedaf5ec2b44053d695"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a280d21d498a04d019fb8128ada213fa6"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a280d21d498a04d019fb8128ada213fa6"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a280d21d498a04d019fb8128ada213fa6"></a>tuple</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_afbccca638ea2453dbb381f49d8f8dae8"><a name="en-us_topic_0237122421_en-us_topic_0059779012_afbccca638ea2453dbb381f49d8f8dae8"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_afbccca638ea2453dbb381f49d8f8dae8"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a131559fbfcac4a4ebcbef9a41b081729"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a131559fbfcac4a4ebcbef9a41b081729"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a131559fbfcac4a4ebcbef9a41b081729"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a308eae26f3a04b8eb5197667f700c073"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a308eae26f3a04b8eb5197667f700c073"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a308eae26f3a04b8eb5197667f700c073"></a>Row number targeted by the lock within the page (<strong id="en-us_topic_0237122421_b118947919237"><a name="en-us_topic_0237122421_b118947919237"></a><a name="en-us_topic_0237122421_b118947919237"></a>NULL</strong> if the object is not a row)</p>
</td>
</tr>
<tr id="row1885912485569"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p10860248105616"><a name="p10860248105616"></a><a name="p10860248105616"></a>bucket</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="p1686115486567"><a name="p1686115486567"></a><a name="p1686115486567"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="p68641048185616"><a name="p68641048185616"></a><a name="p68641048185616"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="p10864164812563"><a name="p10864164812563"></a><a name="p10864164812563"></a>Bucket number corresponding to the child table. The value is <strong id="b16821346155418"><a name="b16821346155418"></a><a name="b16821346155418"></a>NULL</strong> if the target is not a table.</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_rb23a225a004a44e5be57348ce895b5b2"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a9b6bd33aae7444cb91ccd7cac9dc30b2"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a9b6bd33aae7444cb91ccd7cac9dc30b2"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a9b6bd33aae7444cb91ccd7cac9dc30b2"></a>virtualxid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a8c40db004e6e40f9826ea03bbc986d3a"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a8c40db004e6e40f9826ea03bbc986d3a"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a8c40db004e6e40f9826ea03bbc986d3a"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a805f05fe74354629b979917d98d8c174"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a805f05fe74354629b979917d98d8c174"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a805f05fe74354629b979917d98d8c174"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_abef54ad1bd0641c7a26a2c2cef0e71b4"><a name="en-us_topic_0237122421_en-us_topic_0059779012_abef54ad1bd0641c7a26a2c2cef0e71b4"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_abef54ad1bd0641c7a26a2c2cef0e71b4"></a>Virtual ID of the transaction targeted by the lock. The value is <strong id="b17110114811235"><a name="b17110114811235"></a><a name="b17110114811235"></a>NULL</strong> if the object is not a virtual transaction ID.</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_r1fbda60949c44ce0a888ec64064c1278"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a0d0918dc095e4a468cc5c6c575773cc9"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a0d0918dc095e4a468cc5c6c575773cc9"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a0d0918dc095e4a468cc5c6c575773cc9"></a>transactionid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_ad81202e50cf344e3b2f610e1cae89321"><a name="en-us_topic_0237122421_en-us_topic_0059779012_ad81202e50cf344e3b2f610e1cae89321"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_ad81202e50cf344e3b2f610e1cae89321"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_ade827770e6f14107ac2c5501d95b0244"><a name="en-us_topic_0237122421_en-us_topic_0059779012_ade827770e6f14107ac2c5501d95b0244"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_ade827770e6f14107ac2c5501d95b0244"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a747c9ef77cbb4dc5bcf84c3b6270ca0d"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a747c9ef77cbb4dc5bcf84c3b6270ca0d"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a747c9ef77cbb4dc5bcf84c3b6270ca0d"></a>ID of the transaction targeted by the lock. The value is <strong id="b1691023952316"><a name="b1691023952316"></a><a name="b1691023952316"></a>NULL</strong> if the object is not a transaction ID.</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_rfc05f9c25379481f8deb40348c11f680"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_aebfff5f12a28451dadb793fa297d8367"><a name="en-us_topic_0237122421_en-us_topic_0059779012_aebfff5f12a28451dadb793fa297d8367"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_aebfff5f12a28451dadb793fa297d8367"></a>classid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_ab94dea4425834a0990c4dfc504e34f27"><a name="en-us_topic_0237122421_en-us_topic_0059779012_ab94dea4425834a0990c4dfc504e34f27"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_ab94dea4425834a0990c4dfc504e34f27"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a7f26454a4c3a4bbe87369b75f25030ae"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a7f26454a4c3a4bbe87369b75f25030ae"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a7f26454a4c3a4bbe87369b75f25030ae"></a><a href="pg_class.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a61c95ee897dd4a808fd7cb93fe4caff0"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a61c95ee897dd4a808fd7cb93fe4caff0"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a61c95ee897dd4a808fd7cb93fe4caff0"></a>OID of the system catalog that contains the object (<strong id="en-us_topic_0237122421_b142411893820"><a name="en-us_topic_0237122421_b142411893820"></a><a name="en-us_topic_0237122421_b142411893820"></a>NULL</strong> if the object is not a general database object)</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_r93bb38a86e384d06b73d6991846bde0c"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a759494fd419041afb4cfb80beb29f027"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a759494fd419041afb4cfb80beb29f027"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a759494fd419041afb4cfb80beb29f027"></a>objid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a7821b6a54885469cadca9202a4fc0f75"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a7821b6a54885469cadca9202a4fc0f75"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a7821b6a54885469cadca9202a4fc0f75"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a43b4a767b7414953b2c7af8bd381c6e9"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a43b4a767b7414953b2c7af8bd381c6e9"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a43b4a767b7414953b2c7af8bd381c6e9"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a028989faa5a34318b96dbdaadcf14838"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a028989faa5a34318b96dbdaadcf14838"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a028989faa5a34318b96dbdaadcf14838"></a>OID of the lock target within its system table (<strong id="en-us_topic_0237122421_b133612421381"><a name="en-us_topic_0237122421_b133612421381"></a><a name="en-us_topic_0237122421_b133612421381"></a>NULL</strong> if the target is not a general database object)</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_r6f17a82a933340bab2f2f6bdf0f7c9f5"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a99e972d296f244d9a42f7a84e1d71692"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a99e972d296f244d9a42f7a84e1d71692"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a99e972d296f244d9a42f7a84e1d71692"></a>objsubid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a75b30a1392614b9e93c9bf23717b3b11"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a75b30a1392614b9e93c9bf23717b3b11"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a75b30a1392614b9e93c9bf23717b3b11"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_aea4379a04a8c457d90b82efa1c7ee4ac"><a name="en-us_topic_0237122421_en-us_topic_0059779012_aea4379a04a8c457d90b82efa1c7ee4ac"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_aea4379a04a8c457d90b82efa1c7ee4ac"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_afbfccbae1b8247fb87def4c78c37cd16"><a name="en-us_topic_0237122421_en-us_topic_0059779012_afbfccbae1b8247fb87def4c78c37cd16"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_afbfccbae1b8247fb87def4c78c37cd16"></a>Column number for a column in the table. The value is <strong id="b11727175472020"><a name="b11727175472020"></a><a name="b11727175472020"></a>0</strong> if the object is some other object type. The value is <strong id="b8733354102018"><a name="b8733354102018"></a><a name="b8733354102018"></a>NULL</strong> if the object is not a general database object.</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_rb487063e0c964afab6bccbde1bdcb796"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a1577832a6cca4c4dacb036e074de5048"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a1577832a6cca4c4dacb036e074de5048"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a1577832a6cca4c4dacb036e074de5048"></a>virtualtransaction</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a0f9ecf898af74d899cd578703157664f"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a0f9ecf898af74d899cd578703157664f"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a0f9ecf898af74d899cd578703157664f"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a499a4783bd9f4568a6f58394af2d7ae1"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a499a4783bd9f4568a6f58394af2d7ae1"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a499a4783bd9f4568a6f58394af2d7ae1"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a29b051ca937c46bea7f5570f69d75beb"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a29b051ca937c46bea7f5570f69d75beb"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a29b051ca937c46bea7f5570f69d75beb"></a>Virtual ID of the transaction holding or awaiting this lock</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_r3f3a49fa976942b5b2d95e91000a5539"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a0a0426b53299488cbe42849f5026bbaf"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a0a0426b53299488cbe42849f5026bbaf"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a0a0426b53299488cbe42849f5026bbaf"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a213d73ae00a046c19391d1565caf68db"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a213d73ae00a046c19391d1565caf68db"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a213d73ae00a046c19391d1565caf68db"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_af1982a97dcad40088f1c1a6e06308a40"><a name="en-us_topic_0237122421_en-us_topic_0059779012_af1982a97dcad40088f1c1a6e06308a40"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_af1982a97dcad40088f1c1a6e06308a40"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_aaadd20596524400abd6eb6b7a279a91f"><a name="en-us_topic_0237122421_en-us_topic_0059779012_aaadd20596524400abd6eb6b7a279a91f"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_aaadd20596524400abd6eb6b7a279a91f"></a>Logical ID of the server thread holding or awaiting this lock (<strong id="en-us_topic_0237122421_b17180114119190"><a name="en-us_topic_0237122421_b17180114119190"></a><a name="en-us_topic_0237122421_b17180114119190"></a>NULL</strong> if the lock is held by a prepared transaction)</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_row123661920548"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_p19237219135414"><a name="en-us_topic_0237122421_p19237219135414"></a><a name="en-us_topic_0237122421_p19237219135414"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_p1123701955410"><a name="en-us_topic_0237122421_p1123701955410"></a><a name="en-us_topic_0237122421_p1123701955410"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_p22371819155417"><a name="en-us_topic_0237122421_p22371819155417"></a><a name="en-us_topic_0237122421_p22371819155417"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_p823731995414"><a name="en-us_topic_0237122421_p823731995414"></a><a name="en-us_topic_0237122421_p823731995414"></a>ID of the session holding or awaiting this lock</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_rfdcae59070094e68b3b9fc786c5e57f8"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a721acf216a3b43f38813c97db9fffd2f"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a721acf216a3b43f38813c97db9fffd2f"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a721acf216a3b43f38813c97db9fffd2f"></a>mode</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_af7fbcf062f3f466b84f467b1c66d1565"><a name="en-us_topic_0237122421_en-us_topic_0059779012_af7fbcf062f3f466b84f467b1c66d1565"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_af7fbcf062f3f466b84f467b1c66d1565"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a5ef73c224aa54b67a05857f19ff6f795"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a5ef73c224aa54b67a05857f19ff6f795"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a5ef73c224aa54b67a05857f19ff6f795"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a03031a9148494d649fd36de49aad32b9"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a03031a9148494d649fd36de49aad32b9"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a03031a9148494d649fd36de49aad32b9"></a>Lock mode held or desired by this thread</p>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_rcc332273baea48eaad3026f77db1316c"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_aa111bfe633164bbe8e2f524649af6abe"><a name="en-us_topic_0237122421_en-us_topic_0059779012_aa111bfe633164bbe8e2f524649af6abe"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_aa111bfe633164bbe8e2f524649af6abe"></a>granted</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_aa01ba9dbc48b43af9fcbcc737c09c68e"><a name="en-us_topic_0237122421_en-us_topic_0059779012_aa01ba9dbc48b43af9fcbcc737c09c68e"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_aa01ba9dbc48b43af9fcbcc737c09c68e"></a><span id="en-us_topic_0237122421_text3175547172912"><a name="en-us_topic_0237122421_text3175547172912"></a><a name="en-us_topic_0237122421_text3175547172912"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a738c16d88a444ebcb1eb612e7b8de638"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a738c16d88a444ebcb1eb612e7b8de638"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a738c16d88a444ebcb1eb612e7b8de638"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><a name="en-us_topic_0237122421_en-us_topic_0059779012_u4825bdda5a634f239bb1b3edb2d17a57"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_u4825bdda5a634f239bb1b3edb2d17a57"></a><ul id="en-us_topic_0237122421_en-us_topic_0059779012_u4825bdda5a634f239bb1b3edb2d17a57"><li>The value is <strong id="b10107103517250"><a name="b10107103517250"></a><a name="b10107103517250"></a>TRUE</strong> if the lock is a held lock.</li><li>The value is <strong id="b1648317299256"><a name="b1648317299256"></a><a name="b1648317299256"></a>FALSE</strong> if the lock is an awaited lock.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237122421_en-us_topic_0059779012_rdb4300e7e4674ffa8f280b7b6efc1feb"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a4ef2f35139d94532a3e80a50fc947b53"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a4ef2f35139d94532a3e80a50fc947b53"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a4ef2f35139d94532a3e80a50fc947b53"></a>fastpath</p>
</td>
<td class="cellrowborder" valign="top" width="14.26%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a91659bfffe004afe8058a428ff4a45a6"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a91659bfffe004afe8058a428ff4a45a6"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a91659bfffe004afe8058a428ff4a45a6"></a><span id="en-us_topic_0237122421_text1412310486295"><a name="en-us_topic_0237122421_text1412310486295"></a><a name="en-us_topic_0237122421_text1412310486295"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="22.06%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_af16168334c134eb49e3c7e8432c5fc8d"><a name="en-us_topic_0237122421_en-us_topic_0059779012_af16168334c134eb49e3c7e8432c5fc8d"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_af16168334c134eb49e3c7e8432c5fc8d"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.839999999999996%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0237122421_en-us_topic_0059779012_a15cc395f520d49348ba668381f91345d"><a name="en-us_topic_0237122421_en-us_topic_0059779012_a15cc395f520d49348ba668381f91345d"></a><a name="en-us_topic_0237122421_en-us_topic_0059779012_a15cc395f520d49348ba668381f91345d"></a>The value is <strong id="b1748215501598"><a name="b1748215501598"></a><a name="b1748215501598"></a>TRUE</strong> if the lock is obtained through <strong id="b848716508915"><a name="b848716508915"></a><a name="b848716508915"></a>fast-path</strong>, and is <strong id="b164881550899"><a name="b164881550899"></a><a name="b164881550899"></a>FALSE</strong> if the lock is obtained through the main lock table.</p>
</td>
</tr>
</tbody>
</table>

