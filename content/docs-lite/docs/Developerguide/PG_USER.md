# PG\_USER<a name="ZH-CN_TOPIC_0289900531"></a>

PG\_USER视图提供了访问数据库用户的信息，默认只有初始化用户和具有sysadmin属性的用户可以查看，其余用户需要赋权后才可以查看。

**表 1**  PG\_USER字段

<a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_tbb0de3f5edc64a3796c5876dfe01f652"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_rae9e0e4d5d494362905b26356ea44457"><th class="cellrowborder" valign="top" width="24.68%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a220949cefa3145d3b711934ffff84e08"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a220949cefa3145d3b711934ffff84e08"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a220949cefa3145d3b711934ffff84e08"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="28.01%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_adb1a507cdb4d4656b875656a1d61a3a6"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_adb1a507cdb4d4656b875656a1d61a3a6"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_adb1a507cdb4d4656b875656a1d61a3a6"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="47.31%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_ac7d5c917d14746de8839647c506ef0c8"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_ac7d5c917d14746de8839647c506ef0c8"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_ac7d5c917d14746de8839647c506ef0c8"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_rfd56622030de423da439ea47cf94a6b2"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a52496876e779406d9816371b2b490faf"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a52496876e779406d9816371b2b490faf"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a52496876e779406d9816371b2b490faf"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a4e908674a9d94e5e9e1ae55a1c26e1f1"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a4e908674a9d94e5e9e1ae55a1c26e1f1"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a4e908674a9d94e5e9e1ae55a1c26e1f1"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a8692f999703a412a900916f3e8767fe0"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a8692f999703a412a900916f3e8767fe0"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a8692f999703a412a900916f3e8767fe0"></a>用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_r43145b59ce9b467fa1783ccd6091e6c0"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a45c2d2d68498432aae9977d7d7e22fc1"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a45c2d2d68498432aae9977d7d7e22fc1"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a45c2d2d68498432aae9977d7d7e22fc1"></a>usesysid</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a323e39d2642e444fb3f401eae7c99826"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a323e39d2642e444fb3f401eae7c99826"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a323e39d2642e444fb3f401eae7c99826"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a12ec70cbdc7a42998db9211910d7d53b"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a12ec70cbdc7a42998db9211910d7d53b"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a12ec70cbdc7a42998db9211910d7d53b"></a>此用户的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_r1f3389ea79e54ae9a669b3b28f69efb6"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_aca01a74838af43f7b8a4461931d9fb44"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_aca01a74838af43f7b8a4461931d9fb44"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_aca01a74838af43f7b8a4461931d9fb44"></a>usecreatedb</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a1055eb394a74431cada088d471d8bea0"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a1055eb394a74431cada088d471d8bea0"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a1055eb394a74431cada088d471d8bea0"></a><span id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_text1096519713102"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_text1096519713102"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_text1096519713102"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_abf92a1964d8448089b988cd5432c88a2"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_abf92a1964d8448089b988cd5432c88a2"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_abf92a1964d8448089b988cd5432c88a2"></a>用户是否可以创建数据库。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_refee702064af4f809eb7205bc5136a90"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a006290e5015b42eabd54ffd8384803d8"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a006290e5015b42eabd54ffd8384803d8"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a006290e5015b42eabd54ffd8384803d8"></a>usesuper</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a9a4fc10468ef45d09d812584d530c057"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a9a4fc10468ef45d09d812584d530c057"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a9a4fc10468ef45d09d812584d530c057"></a><span id="text143929514469"><a name="text143929514469"></a><a name="text143929514469"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_aba6156b2dc064cd095bff87af63fad1b"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_aba6156b2dc064cd095bff87af63fad1b"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_aba6156b2dc064cd095bff87af63fad1b"></a>用户是否是拥有最高权限的初始系统管理员。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_ra849cce9d7bb4e62801388bcf330fe37"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a508cc43912c44891bb5944f9c64677ed"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a508cc43912c44891bb5944f9c64677ed"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a508cc43912c44891bb5944f9c64677ed"></a>usecatupd</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_ad66f409d390c42ac94d062f5cb4aaa5b"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_ad66f409d390c42ac94d062f5cb4aaa5b"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_ad66f409d390c42ac94d062f5cb4aaa5b"></a><span id="text13970952194617"><a name="text13970952194617"></a><a name="text13970952194617"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778259_a99ef9ae1689f41f1ac8d15338dd526ae"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778259_a99ef9ae1689f41f1ac8d15338dd526ae"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778259_a99ef9ae1689f41f1ac8d15338dd526ae"></a>用户是否可以直接更新系统表。只有usesysid=10的初始系统管理员拥有此权限。其他用户无法获得此权限。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_r32778ede7f9e4abc99d8d4faaa68de94"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a01ea128194444831b2f0d932c74b1d0d"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a01ea128194444831b2f0d932c74b1d0d"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a01ea128194444831b2f0d932c74b1d0d"></a>userepl</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a7a973664a8934e3ea8530f63e56fc4dd"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a7a973664a8934e3ea8530f63e56fc4dd"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a7a973664a8934e3ea8530f63e56fc4dd"></a><span id="text1448018559462"><a name="text1448018559462"></a><a name="text1448018559462"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a896a562703c14119b20bbdcdc439af33"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a896a562703c14119b20bbdcdc439af33"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a896a562703c14119b20bbdcdc439af33"></a>用户是否可以复制数据流。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_r87612409a14045169b9f7d697a6dee0a"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a2a39e2a78cf6452bbd44cc3e93492576"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a2a39e2a78cf6452bbd44cc3e93492576"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a2a39e2a78cf6452bbd44cc3e93492576"></a>passwd</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a8b4cc867699c4b8796a4dd73416f6ee2"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a8b4cc867699c4b8796a4dd73416f6ee2"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a8b4cc867699c4b8796a4dd73416f6ee2"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a5b32e0f52ab948f4b84d2e41428161e1"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a5b32e0f52ab948f4b84d2e41428161e1"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a5b32e0f52ab948f4b84d2e41428161e1"></a>密文存储后的用户口令，始终为********。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_r69d39d638a6846589103afde65539fac"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a963a714a523a429794e7a29634df10e1"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a963a714a523a429794e7a29634df10e1"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a963a714a523a429794e7a29634df10e1"></a>valbegin</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a14808ae5a3ad40058710710d6ae06d1d"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a14808ae5a3ad40058710710d6ae06d1d"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a14808ae5a3ad40058710710d6ae06d1d"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a5ea29aede65240fbbca655a872762360"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a5ea29aede65240fbbca655a872762360"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a5ea29aede65240fbbca655a872762360"></a>帐户的有效开始时间；如果没有设置有效开始时间，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_r156e6dba3d1a47df97f457a9daea27ca"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a8ccd57fc59b54ea4b2507b7aa4b6fe0f"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a8ccd57fc59b54ea4b2507b7aa4b6fe0f"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a8ccd57fc59b54ea4b2507b7aa4b6fe0f"></a>valuntil</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_afe228ae5fd3d40c88605fefdbe225b43"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_afe228ae5fd3d40c88605fefdbe225b43"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_afe228ae5fd3d40c88605fefdbe225b43"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a5fd05a5916c14c3a9f5d32a66ce0def0"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a5fd05a5916c14c3a9f5d32a66ce0def0"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a5fd05a5916c14c3a9f5d32a66ce0def0"></a>帐户的有效结束时间；如果没有设置有效结束时间，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_ra43812e91f80430883bc4a793ca003ca"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_aae6e5484e9514ac4b8d9afe4a092aac8"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_aae6e5484e9514ac4b8d9afe4a092aac8"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_aae6e5484e9514ac4b8d9afe4a092aac8"></a>respool</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a341c1e567e9c46c19d19ebdfc03d5d65"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a341c1e567e9c46c19d19ebdfc03d5d65"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a341c1e567e9c46c19d19ebdfc03d5d65"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_ad016eccebf554befbe40cfddb03fd058"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_ad016eccebf554befbe40cfddb03fd058"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_ad016eccebf554befbe40cfddb03fd058"></a>用户所在的资源池。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_row383068515643"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p4185010015643"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p4185010015643"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p4185010015643"></a>parent</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p3441490215643"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p3441490215643"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p3441490215643"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p3614369315643"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p3614369315643"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p3614369315643"></a>父用户OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_row461410491579"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p464374871579"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p464374871579"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p464374871579"></a>spacelimit</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p33400731579"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p33400731579"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p33400731579"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p21104791579"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p21104791579"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_p21104791579"></a>永久表存储空间限额。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_row16589194104013"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p1158910404014"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p1158910404014"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p1158910404014"></a>tempspacelimit</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p14589940409"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p14589940409"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p14589940409"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p55891049404"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p55891049404"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p55891049404"></a>临时表存储空间限额。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_row17231359408"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p4231456405"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p4231456405"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p4231456405"></a>spillspacelimit</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p42313524017"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p42313524017"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p42313524017"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p6231594013"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p6231594013"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p6231594013"></a>算子落盘空间限额。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_r795fec510dd14dd8bcf8b359421b619c"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a74632df9487d4c4bb1e06774daf81d1c"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a74632df9487d4c4bb1e06774daf81d1c"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a74632df9487d4c4bb1e06774daf81d1c"></a>useconfig</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a4616d729ddcc41adba8d644b2fa1e0f1"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a4616d729ddcc41adba8d644b2fa1e0f1"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_a4616d729ddcc41adba8d644b2fa1e0f1"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_af38085fb2e844f6c94bd332dcca0903e"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_af38085fb2e844f6c94bd332dcca0903e"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_zh-cn_topic_0059778611_af38085fb2e844f6c94bd332dcca0903e"></a>运行时配置参数的会话缺省。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_row3383125316230"><td class="cellrowborder" valign="top" width="24.68%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p038365316230"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p038365316230"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p038365316230"></a>nodegroup</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p1638355314230"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p1638355314230"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p1638355314230"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="47.31%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p23836535234"><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p23836535234"></a><a name="zh-cn_topic_0283137034_zh-cn_topic_0237122472_p23836535234"></a>用户关联的逻辑<span id="text179123126198"><a name="text179123126198"></a><a name="text179123126198"></a>openGauss</span>名称，如果该用户没有管理逻辑<span id="text1741521935"><a name="text1741521935"></a><a name="text1741521935"></a>openGauss</span>，则该字段为空。</p>
</td>
</tr>
</tbody>
</table>

