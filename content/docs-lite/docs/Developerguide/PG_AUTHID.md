# PG\_AUTHID<a name="ZH-CN_TOPIC_0289900706"></a>

PG\_AUTHID系统表存储有关数据库认证标识符（角色）的信息。角色把“用户”的概念包含在内。一个用户实际上就是一个rolcanlogin标志被设置的角色。任何角色（不管rolcanlogin设置与否）都能够把其他角色作为成员。

openGauss中只有一份pg\_authid，不是每个数据库有一份。需要有系统管理员权限才可以访问此系统表。

**表 1**  PG\_AUTHID字段

<a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_t2fff231eb1ce4252816223b71602e6ab"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_r467d6af826104ad995f661de4948b1d2"><th class="cellrowborder" valign="top" width="20.41%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aef2c923ff38241f2aeb0c5d9d1861107"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aef2c923ff38241f2aeb0c5d9d1861107"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aef2c923ff38241f2aeb0c5d9d1861107"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="21.21%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a09099cc88c3e4c808a9b05889733aa92"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a09099cc88c3e4c808a9b05889733aa92"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a09099cc88c3e4c808a9b05889733aa92"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="58.379999999999995%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a0f299de4ef4741fdad6f373eefec85e5"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a0f299de4ef4741fdad6f373eefec85e5"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a0f299de4ef4741fdad6f373eefec85e5"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_r2999ac14dd104c2f9556f5b1a257d068"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a5a31d0f121244e7f893efcd027fe3df1"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a5a31d0f121244e7f893efcd027fe3df1"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a5a31d0f121244e7f893efcd027fe3df1"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a76e99ac8f3eb4810a5dec895a38ce0c3"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a76e99ac8f3eb4810a5dec895a38ce0c3"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a76e99ac8f3eb4810a5dec895a38ce0c3"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a12ae5fa1dc394b27ab6eeaa7f74f7120"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a12ae5fa1dc394b27ab6eeaa7f74f7120"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a12ae5fa1dc394b27ab6eeaa7f74f7120"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_r34f541c8a9a84a3bb919158aa9f2c9dc"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a2eb221a7d29e45a795857b755f467bf6"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a2eb221a7d29e45a795857b755f467bf6"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a2eb221a7d29e45a795857b755f467bf6"></a>rolname</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a54fa9a8f19a34f9db1138d97351e95ef"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a54fa9a8f19a34f9db1138d97351e95ef"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a54fa9a8f19a34f9db1138d97351e95ef"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ada6702ab236c4991a6d289b31ef1b9a8"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ada6702ab236c4991a6d289b31ef1b9a8"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ada6702ab236c4991a6d289b31ef1b9a8"></a>角色名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_rd85d78d37d2446fc924699d7678576ac"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a7cb8a3c2cac04f6f81a3c4c2f31c1705"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a7cb8a3c2cac04f6f81a3c4c2f31c1705"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a7cb8a3c2cac04f6f81a3c4c2f31c1705"></a>rolsuper</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a479fab130e4b480784110827905e9854"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a479fab130e4b480784110827905e9854"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a479fab130e4b480784110827905e9854"></a><span id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_text1529361714267"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_text1529361714267"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_text1529361714267"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a7ac956554dd74c8f948a90ec1483d1fc"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a7ac956554dd74c8f948a90ec1483d1fc"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a7ac956554dd74c8f948a90ec1483d1fc"></a>角色是否是拥有最高权限的初始系统管理员。</p>
<a name="ul5981193915612"></a><a name="ul5981193915612"></a><ul id="ul5981193915612"><li>t（true）：表示是。</li><li>f（false）：表示不是。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_r9eeee50a21f849d380a480d31f3de9f5"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a9452c73058434f3ba59d675dfc958d9b"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a9452c73058434f3ba59d675dfc958d9b"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a9452c73058434f3ba59d675dfc958d9b"></a>rolinherit</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a44ca42bbe60249d38adb387aa97bc755"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a44ca42bbe60249d38adb387aa97bc755"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a44ca42bbe60249d38adb387aa97bc755"></a><span id="text729653313818"><a name="text729653313818"></a><a name="text729653313818"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a811d1a6153bd4ea9bc201ebf6cf9f6e1"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a811d1a6153bd4ea9bc201ebf6cf9f6e1"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a811d1a6153bd4ea9bc201ebf6cf9f6e1"></a>角色是否自动继承其所属角色的权限。</p>
<a name="ul8180154418619"></a><a name="ul8180154418619"></a><ul id="ul8180154418619"><li>t（true）：表示自动继承。</li><li>f（false）：表示不自动继承。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_r14f01b45e9534781bd2733322aa4a542"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ac0a5d4117433499f8c642382b9da94de"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ac0a5d4117433499f8c642382b9da94de"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ac0a5d4117433499f8c642382b9da94de"></a>rolcreaterole</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a8a84bebdfc7b4f0094f554fc60d007be"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a8a84bebdfc7b4f0094f554fc60d007be"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a8a84bebdfc7b4f0094f554fc60d007be"></a><span id="text1699619341685"><a name="text1699619341685"></a><a name="text1699619341685"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ad10dec07af1440be83dd96a60e8357a3"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ad10dec07af1440be83dd96a60e8357a3"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ad10dec07af1440be83dd96a60e8357a3"></a>角色是否可以创建更多角色。</p>
<a name="ul103054472616"></a><a name="ul103054472616"></a><ul id="ul103054472616"><li>t（true）：表示可以。</li><li>f（false）：表示不可以。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_r20b9def80c334b4bafc9c367b672bc5d"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a242a39403389400abf108026898fd51c"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a242a39403389400abf108026898fd51c"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a242a39403389400abf108026898fd51c"></a>rolcreatedb</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aca1469acfaf240e583a60338e993ec00"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aca1469acfaf240e583a60338e993ec00"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aca1469acfaf240e583a60338e993ec00"></a><span id="text494663615813"><a name="text494663615813"></a><a name="text494663615813"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a4eccc2b2b42d4bcba75f261f89e0ae20"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a4eccc2b2b42d4bcba75f261f89e0ae20"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a4eccc2b2b42d4bcba75f261f89e0ae20"></a>角色是否可以创建数据库。</p>
<a name="ul828095015614"></a><a name="ul828095015614"></a><ul id="ul828095015614"><li>t（true）：表示可以。</li><li>f（false）：表示不可以。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_r804e00eb30954331a7eee6d54e3a46ab"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a949068ab084242aaa754082c74703b23"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a949068ab084242aaa754082c74703b23"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a949068ab084242aaa754082c74703b23"></a>rolcatupdate</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_acba73cb2a60b470eb223b11fcb9df617"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_acba73cb2a60b470eb223b11fcb9df617"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_acba73cb2a60b470eb223b11fcb9df617"></a><span id="text18619539988"><a name="text18619539988"></a><a name="text18619539988"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a99ef9ae1689f41f1ac8d15338dd526ae"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a99ef9ae1689f41f1ac8d15338dd526ae"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a99ef9ae1689f41f1ac8d15338dd526ae"></a>角色是否可以直接更新系统表。只有usesysid=10的初始系统管理员拥有此权限。其他用户无法获得此权限。</p>
<a name="ul566571518913"></a><a name="ul566571518913"></a><ul id="ul566571518913"><li>t（true）：表示可以。</li><li>f（false）：表示不可以。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_rafcd772d10774a88a5f7371392cacefb"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ae90becfd97b849d89b84e1f6ab23ffbe"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ae90becfd97b849d89b84e1f6ab23ffbe"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ae90becfd97b849d89b84e1f6ab23ffbe"></a>rolcanlogin</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a156553ecf56b4c2193bb3be605a60906"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a156553ecf56b4c2193bb3be605a60906"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a156553ecf56b4c2193bb3be605a60906"></a><span id="text2577164111818"><a name="text2577164111818"></a><a name="text2577164111818"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_af4d082857d17417189ad0f8897767b43"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_af4d082857d17417189ad0f8897767b43"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_af4d082857d17417189ad0f8897767b43"></a>角色是否可以登录，也就是说，这个角色可以给予会话认证标识符。</p>
<a name="ul77501918898"></a><a name="ul77501918898"></a><ul id="ul77501918898"><li>t（true）：表示可以。</li><li>f（false）：表示不可以。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_rcc0c0f04c5ba4c00ba7eb1066e4d8fb2"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ae8973b6667794914908d709da58c1003"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ae8973b6667794914908d709da58c1003"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ae8973b6667794914908d709da58c1003"></a>rolreplication</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_abfbf36bfbd2b40058538f6b7ef8ab40a"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_abfbf36bfbd2b40058538f6b7ef8ab40a"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_abfbf36bfbd2b40058538f6b7ef8ab40a"></a><span id="text697715431816"><a name="text697715431816"></a><a name="text697715431816"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_abafd18527b4241d79bf432437152e8f3"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_abafd18527b4241d79bf432437152e8f3"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_abafd18527b4241d79bf432437152e8f3"></a>角色是否具有复制权限：</p>
<a name="ul74191217181317"></a><a name="ul74191217181317"></a><ul id="ul74191217181317"><li>t（true）：表示有。</li><li>f（false）：表示没有。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ra9ea4c9f35574b62a0e587ee1f72a666"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a40d57eee5b90438294723a59ce0aae56"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a40d57eee5b90438294723a59ce0aae56"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a40d57eee5b90438294723a59ce0aae56"></a>rolauditadmin</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aaf2b96e107c3415cab46affd03a409ef"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aaf2b96e107c3415cab46affd03a409ef"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aaf2b96e107c3415cab46affd03a409ef"></a><span id="text105232452081"><a name="text105232452081"></a><a name="text105232452081"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a41d4ed926499443db78b94fb3a7269e3"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a41d4ed926499443db78b94fb3a7269e3"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a41d4ed926499443db78b94fb3a7269e3"></a>角色是否具有审计管理员权限：</p>
<a name="ul443911410138"></a><a name="ul443911410138"></a><ul id="ul443911410138"><li>t（true）：表示有。</li><li>f（false）：表示没有。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_re786a5d5da1e4926b5de9bc98fb17351"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aa2a1436e95684c68b1b4aae79ee6a685"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aa2a1436e95684c68b1b4aae79ee6a685"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aa2a1436e95684c68b1b4aae79ee6a685"></a>rolsystemadmin</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ae7401e3cddd44e268dc3c60a4ec8a912"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ae7401e3cddd44e268dc3c60a4ec8a912"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ae7401e3cddd44e268dc3c60a4ec8a912"></a><span id="text154376471587"><a name="text154376471587"></a><a name="text154376471587"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a439b425286cf40caa81b17d5db646b04"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a439b425286cf40caa81b17d5db646b04"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a439b425286cf40caa81b17d5db646b04"></a>角色是否具有系统管理员权限：</p>
<a name="ul72343150142"></a><a name="ul72343150142"></a><ul id="ul72343150142"><li>t（true）：表示有。</li><li>f（false）：表示没有。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_r4595c950805246f794643eff37da790f"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_adc0c6df07a624d9c82418e035092f4f6"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_adc0c6df07a624d9c82418e035092f4f6"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_adc0c6df07a624d9c82418e035092f4f6"></a>rolconnlimit</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ac52abcd2ce874ef1a30c8e4a90bbc708"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ac52abcd2ce874ef1a30c8e4a90bbc708"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ac52abcd2ce874ef1a30c8e4a90bbc708"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a2c735a9965624bc79073c147653ce48e"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a2c735a9965624bc79073c147653ce48e"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a2c735a9965624bc79073c147653ce48e"></a>对于可以登录的角色，限制其最大并发连接数量。</p>
<p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a685a95411d9549f0a5ded5362f10ef3e"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a685a95411d9549f0a5ded5362f10ef3e"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a685a95411d9549f0a5ded5362f10ef3e"></a>-1 表示没有限制。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_r6275ffffc4c54a7fbf734510c7f6f6a2"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aa029549c40934a86a1d87aeba4384888"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aa029549c40934a86a1d87aeba4384888"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_aa029549c40934a86a1d87aeba4384888"></a>rolpassword</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a2eff02923c314d689c9dc2d1487de41c"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a2eff02923c314d689c9dc2d1487de41c"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a2eff02923c314d689c9dc2d1487de41c"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a9cf0bb3ca6eb4932b190388ddf51b32b"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a9cf0bb3ca6eb4932b190388ddf51b32b"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a9cf0bb3ca6eb4932b190388ddf51b32b"></a>口令（可能是加密的），如果没有口令，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_r5c73cff5463e4071901ce4872d446303"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a873c0bae5ab24116ab4e3f2e4a54465e"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a873c0bae5ab24116ab4e3f2e4a54465e"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a873c0bae5ab24116ab4e3f2e4a54465e"></a>rolvalidbegin</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a31cd0cbfad4a46bd8c7cdad0b0c98488"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a31cd0cbfad4a46bd8c7cdad0b0c98488"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a31cd0cbfad4a46bd8c7cdad0b0c98488"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ab5eefe10320347e4974ef8879d5a5ea7"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ab5eefe10320347e4974ef8879d5a5ea7"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_ab5eefe10320347e4974ef8879d5a5ea7"></a>帐户的有效开始时间，如果没有开始时间，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_rcef9664e7d224e21b2b1301492253bfd"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a1a48e86da63c4d44931209916fd78149"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a1a48e86da63c4d44931209916fd78149"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a1a48e86da63c4d44931209916fd78149"></a>rolvaliduntil</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_af337857b8f854192a4f6212a7b6efe0f"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_af337857b8f854192a4f6212a7b6efe0f"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_af337857b8f854192a4f6212a7b6efe0f"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a92707bcd8cfa43c2bcc5df409261e4af"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a92707bcd8cfa43c2bcc5df409261e4af"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_a92707bcd8cfa43c2bcc5df409261e4af"></a>帐户的有效结束时间，如果没有结束时间，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_row3509919141536"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p7182303141542"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p7182303141542"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p7182303141542"></a>rolrespool</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p44895689141542"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p44895689141542"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p44895689141542"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p12672183141542"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p12672183141542"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p12672183141542"></a>用户所能够使用的resource pool。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_row43420215173144"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p27376539173144"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p27376539173144"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p27376539173144"></a>roluseft</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p2907150173144"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p2907150173144"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p2907150173144"></a><span id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_text634791132812"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_text634791132812"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_text634791132812"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p34152635173144"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p34152635173144"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p34152635173144"></a>角色是否可以操作外表。</p>
<a name="ul10653131519531"></a><a name="ul10653131519531"></a><ul id="ul10653131519531"><li>t（true）：表示可以。</li><li>f（false）：表示不可以。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_row6971470163636"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p62743233163636"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p62743233163636"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p62743233163636"></a>rolparentid</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p49037093163636"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p49037093163636"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p49037093163636"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p12581590163636"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p12581590163636"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_zh-cn_topic_0059778259_p12581590163636"></a>用户所在组用户的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_row57051258195917"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p19706158205920"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p19706158205920"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p19706158205920"></a>roltabspace</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p1070655815910"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p1070655815910"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p1070655815910"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p147061658125913"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p147061658125913"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p147061658125913"></a>用户数据表的最大空间限额。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_row55621534164613"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p1056233418468"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p1056233418468"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p1056233418468"></a>rolkind</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p15562534184611"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p15562534184611"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p15562534184611"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p456253474619"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p456253474619"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p456253474619"></a>特殊用户种类，包括私有用户、普通用户。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_row5348358161620"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p834911585167"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p834911585167"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p834911585167"></a>rolnodegroup</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p434935811613"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p434935811613"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p434935811613"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p17350258191614"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p17350258191614"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p17350258191614"></a>该字段不支持。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_row1621682310719"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p182174233713"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p182174233713"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p182174233713"></a>roltempspace</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p121711231579"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p121711231579"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p121711231579"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p1721822320711"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p1721822320711"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p1721822320711"></a>用户临时表的最大空间限额，单位为KB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_row9541428576"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p145417282716"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p145417282716"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p145417282716"></a>rolspillspace</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p11542284716"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p11542284716"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p11542284716"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p15541328974"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p15541328974"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p15541328974"></a>用户执行作业时下盘数据的最大空间限额，单位为KB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_row163371833071"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p8337333476"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p8337333476"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p8337333476"></a>rolexcpdata</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p933811330718"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p933811330718"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p933811330718"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p13338163317712"><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p13338163317712"></a><a name="zh-cn_topic_0283137725_zh-cn_topic_0237122273_p13338163317712"></a>用户可以设置的查询规则（当前未使用）。</p>
</td>
</tr>
<tr id="row462912555113"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="p6462132235816"><a name="p6462132235816"></a><a name="p6462132235816"></a>rolmonitoradmin</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="p164621422155812"><a name="p164621422155812"></a><a name="p164621422155812"></a><span id="text145015521585"><a name="text145015521585"></a><a name="text145015521585"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="p194628227587"><a name="p194628227587"></a><a name="p194628227587"></a>角色是否具有监控管理员权限：</p>
<a name="ul7805153611148"></a><a name="ul7805153611148"></a><ul id="ul7805153611148"><li>t（true）：表示有。</li><li>f（false）：表示没有。</li></ul>
</td>
</tr>
<tr id="row18630132515114"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="p221692625819"><a name="p221692625819"></a><a name="p221692625819"></a>roloperatoradmin</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="p321732625820"><a name="p321732625820"></a><a name="p321732625820"></a><span id="text17712554784"><a name="text17712554784"></a><a name="text17712554784"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="p1221719260585"><a name="p1221719260585"></a><a name="p1221719260585"></a>角色是否具有运维管理员权限：</p>
<a name="ul14935163815148"></a><a name="ul14935163815148"></a><ul id="ul14935163815148"><li>t（true）：表示有。</li><li>f（false）：表示没有。</li></ul>
</td>
</tr>
<tr id="row146315257512"><td class="cellrowborder" valign="top" width="20.41%" headers="mcps1.2.4.1.1 "><p id="p250818301582"><a name="p250818301582"></a><a name="p250818301582"></a>rolpolicyadmin</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="p18508330125815"><a name="p18508330125815"></a><a name="p18508330125815"></a><span id="text763512569814"><a name="text763512569814"></a><a name="text763512569814"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="58.379999999999995%" headers="mcps1.2.4.1.3 "><p id="p6508123013585"><a name="p6508123013585"></a><a name="p6508123013585"></a>角色是否具有安全策略管理员权限：</p>
<a name="ul4190341111410"></a><a name="ul4190341111410"></a><ul id="ul4190341111410"><li>t（true）：表示有。</li><li>f（false）：表示没有。</li></ul>
</td>
</tr>
</tbody>
</table>

