# PG\_ROLES<a name="ZH-CN_TOPIC_0289900636"></a>

PG\_ROLES视图提供访问数据库角色的相关信息，初始化用户和具有sysadmin属性或createrole属性的用户可以查看全部角色的信息，其他用户只能查看自己的信息。

**表 1**  PG\_ROLES字段

<a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_tdda3b0d70e6b488f92b03f08a310f446"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_rb1a3082ea3c746e3b36c72f0a27f25fb"><th class="cellrowborder" valign="top" width="19.45%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a29f0d70055254fc19688ccdfc9477175"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a29f0d70055254fc19688ccdfc9477175"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a29f0d70055254fc19688ccdfc9477175"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.380000000000003%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a92739ecd6ed041f589282a01439376aa"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a92739ecd6ed041f589282a01439376aa"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a92739ecd6ed041f589282a01439376aa"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="17.330000000000002%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a568079da81ce43358cd88b3bf32617b3"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a568079da81ce43358cd88b3bf32617b3"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a568079da81ce43358cd88b3bf32617b3"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="45.839999999999996%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_afd6b719a2e3d41e98701be368e247928"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_afd6b719a2e3d41e98701be368e247928"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_afd6b719a2e3d41e98701be368e247928"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_r00441d32b6d64fa1827d9a40f19bd6a3"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac4bf9e4611444631ac61f53dc93a1433"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac4bf9e4611444631ac61f53dc93a1433"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac4bf9e4611444631ac61f53dc93a1433"></a>rolname</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a1d81b937aacf4396b53d6722812d8060"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a1d81b937aacf4396b53d6722812d8060"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a1d81b937aacf4396b53d6722812d8060"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af9c00e27605240a4a8f40415638b49d1"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af9c00e27605240a4a8f40415638b49d1"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af9c00e27605240a4a8f40415638b49d1"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a48620e8508c2453ba987c46d920c43e9"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a48620e8508c2453ba987c46d920c43e9"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a48620e8508c2453ba987c46d920c43e9"></a>角色名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_rbbcaa608265f4d95ad1d8e4983870a95"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a511db186fb0d4597a0e24147e17a2d7e"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a511db186fb0d4597a0e24147e17a2d7e"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a511db186fb0d4597a0e24147e17a2d7e"></a>rolsuper</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ab13ec0f87dca412d89b539d7a62c7445"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ab13ec0f87dca412d89b539d7a62c7445"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ab13ec0f87dca412d89b539d7a62c7445"></a><span id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text15620511307"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text15620511307"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text15620511307"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ab863aa0ac13d4752a10c5bbe9477c45f"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ab863aa0ac13d4752a10c5bbe9477c45f"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ab863aa0ac13d4752a10c5bbe9477c45f"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a4951673bad7f44e18c546f76eafc95cc"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a4951673bad7f44e18c546f76eafc95cc"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a4951673bad7f44e18c546f76eafc95cc"></a>该角色是否是拥有最高权限的初始系统管理员。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_r8856497f7a914f75be6e2dc7db5f6b0b"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a97259b8175fb47828eee2865cbb00c64"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a97259b8175fb47828eee2865cbb00c64"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a97259b8175fb47828eee2865cbb00c64"></a>rolinherit</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af4b0ccba6a204d1282903745d3f26145"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af4b0ccba6a204d1282903745d3f26145"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af4b0ccba6a204d1282903745d3f26145"></a><span id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text73482683013"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text73482683013"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text73482683013"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a6ad9897f25054ba98566dcaf24a72c6a"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a6ad9897f25054ba98566dcaf24a72c6a"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a6ad9897f25054ba98566dcaf24a72c6a"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af67d9c9d771e481ba24e2c7b60cdd71c"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af67d9c9d771e481ba24e2c7b60cdd71c"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af67d9c9d771e481ba24e2c7b60cdd71c"></a>该角色是否继承角色的权限。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_r42ff558a85964885b1ad868e6bfbcbc3"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_afc3ad96eb1654ee3a2258654b7e33425"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_afc3ad96eb1654ee3a2258654b7e33425"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_afc3ad96eb1654ee3a2258654b7e33425"></a>rolcreaterole</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a1ddb217ecf814f6989dfec54b559ba1f"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a1ddb217ecf814f6989dfec54b559ba1f"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a1ddb217ecf814f6989dfec54b559ba1f"></a><span id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text24621710304"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text24621710304"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text24621710304"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a4c4d85bcf9d045d49c17b51570d9ef6c"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a4c4d85bcf9d045d49c17b51570d9ef6c"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a4c4d85bcf9d045d49c17b51570d9ef6c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ad90c934646094e5f87d0de3844b4ec00"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ad90c934646094e5f87d0de3844b4ec00"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ad90c934646094e5f87d0de3844b4ec00"></a>该角色是否可以创建其他的角色。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_rcd4504dd106845fd90cd9f577edcadef"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac36a69cfbc3342bf856279a8d02071fd"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac36a69cfbc3342bf856279a8d02071fd"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac36a69cfbc3342bf856279a8d02071fd"></a>rolcreatedb</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a13b77f6fa9334bd6a1dfd48dd8d36828"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a13b77f6fa9334bd6a1dfd48dd8d36828"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a13b77f6fa9334bd6a1dfd48dd8d36828"></a><span id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text52171183302"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text52171183302"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text52171183302"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a4fdb09ef573a4f009fe8cb0c4e7ee8a8"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a4fdb09ef573a4f009fe8cb0c4e7ee8a8"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a4fdb09ef573a4f009fe8cb0c4e7ee8a8"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a803688b533e046ceb3bea75041ad4703"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a803688b533e046ceb3bea75041ad4703"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a803688b533e046ceb3bea75041ad4703"></a>该角色是否可以创建数据库。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_r052d9b4940154078a600a850edf7158c"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a7093540cba8149328c55e781d9e9db25"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a7093540cba8149328c55e781d9e9db25"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a7093540cba8149328c55e781d9e9db25"></a>rolcatupdate</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a54e6558c5f0947b0b51e789b6488bc69"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a54e6558c5f0947b0b51e789b6488bc69"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a54e6558c5f0947b0b51e789b6488bc69"></a><span id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text886310863017"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text886310863017"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text886310863017"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a928a38d966c14946ab122b12053ba2ee"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a928a38d966c14946ab122b12053ba2ee"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a928a38d966c14946ab122b12053ba2ee"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af36e9665f7ec4b8d8aa68b9b299325c8"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af36e9665f7ec4b8d8aa68b9b299325c8"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af36e9665f7ec4b8d8aa68b9b299325c8"></a>该角色是否可以直接更新系统表。只有usesysid=10的初始系统管理员拥有此权限。其他用户无法获得此权限。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_rc23390a2c1dd447592e32d23ddf42edf"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a2c54d3c79332442db8dab3e09b0283e1"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a2c54d3c79332442db8dab3e09b0283e1"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a2c54d3c79332442db8dab3e09b0283e1"></a>rolcanlogin</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aa952954795894696946d6d616d52da00"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aa952954795894696946d6d616d52da00"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aa952954795894696946d6d616d52da00"></a><span id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text194952993019"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text194952993019"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text194952993019"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aaefcfac0e6ed4444a0948fb97d046df4"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aaefcfac0e6ed4444a0948fb97d046df4"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aaefcfac0e6ed4444a0948fb97d046df4"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_abfffa3ec3b6f42bcac97eabf46051457"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_abfffa3ec3b6f42bcac97eabf46051457"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_abfffa3ec3b6f42bcac97eabf46051457"></a>该角色是否可以登录数据库。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_rec2f1a72751845b297a7be1f07b08321"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a63ec1a252e0c43dbae8cb4d81770fe19"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a63ec1a252e0c43dbae8cb4d81770fe19"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a63ec1a252e0c43dbae8cb4d81770fe19"></a>rolreplication</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a3c31e2a372ae438a9b0c56386d53dc0a"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a3c31e2a372ae438a9b0c56386d53dc0a"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a3c31e2a372ae438a9b0c56386d53dc0a"></a><span id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text1315841011302"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text1315841011302"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text1315841011302"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aba8e6f27f5594277a64be10fccd098d1"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aba8e6f27f5594277a64be10fccd098d1"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aba8e6f27f5594277a64be10fccd098d1"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ae21fc5bbef8e498899e59a7da90b319c"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ae21fc5bbef8e498899e59a7da90b319c"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ae21fc5bbef8e498899e59a7da90b319c"></a>该角色是否可以复制。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_rb5ecd8ab28e540ad8c152552840d1d98"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac470c8d27a82444ea979f57678eb641f"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac470c8d27a82444ea979f57678eb641f"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac470c8d27a82444ea979f57678eb641f"></a>rolauditadmin</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0b88b91c06d44145ae686656f46d943d"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0b88b91c06d44145ae686656f46d943d"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0b88b91c06d44145ae686656f46d943d"></a><span id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text12202191973012"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text12202191973012"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text12202191973012"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aa19be6e18c634b7fb762b1255c460e35"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aa19be6e18c634b7fb762b1255c460e35"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aa19be6e18c634b7fb762b1255c460e35"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_addf7f1c368ca4b3ba18a1c12517a9856"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_addf7f1c368ca4b3ba18a1c12517a9856"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_addf7f1c368ca4b3ba18a1c12517a9856"></a>该角色是否为审计管理员。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_r0b550d9d884c493385824701c59331de"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a89ff01754a0645e29a2d66dd2f8b0db2"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a89ff01754a0645e29a2d66dd2f8b0db2"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a89ff01754a0645e29a2d66dd2f8b0db2"></a>rolsystemadmin</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ad50fcdb038ef4c2e8f838bd944adaae0"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ad50fcdb038ef4c2e8f838bd944adaae0"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ad50fcdb038ef4c2e8f838bd944adaae0"></a><span id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text1893171210306"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text1893171210306"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text1893171210306"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af3d5544501654609b5950048ed3135d0"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af3d5544501654609b5950048ed3135d0"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af3d5544501654609b5950048ed3135d0"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a5a873f933c6049d1865753a36a3fe7cf"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a5a873f933c6049d1865753a36a3fe7cf"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a5a873f933c6049d1865753a36a3fe7cf"></a>该角色是否为系统管理员。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_r37eda5c934ca47b9941ea4b6015a8630"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a6209cdf51f424c8e9c47865db907722d"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a6209cdf51f424c8e9c47865db907722d"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a6209cdf51f424c8e9c47865db907722d"></a>rolconnlimit</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a820a1d46afca42e48791d3dbc4cb971e"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a820a1d46afca42e48791d3dbc4cb971e"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a820a1d46afca42e48791d3dbc4cb971e"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a7bb5c72576dd4ad2807c999970c6307f"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a7bb5c72576dd4ad2807c999970c6307f"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a7bb5c72576dd4ad2807c999970c6307f"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a78b86a9910e64b5a8467fe617fd904ae"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a78b86a9910e64b5a8467fe617fd904ae"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a78b86a9910e64b5a8467fe617fd904ae"></a>对于可以登录的角色，这里限制了该角色允许发起的最大并发连接数。-1表示无限制。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_re856ceac87c04f558523ca179f8498ed"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a85ae2ac96efb4761b55ec63ec67f4c54"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a85ae2ac96efb4761b55ec63ec67f4c54"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a85ae2ac96efb4761b55ec63ec67f4c54"></a>rolpassword</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a82841a527ffa47c4b3f9f8dc18373a77"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a82841a527ffa47c4b3f9f8dc18373a77"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a82841a527ffa47c4b3f9f8dc18373a77"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a037c53384d3b44b89b0e702f6069228c"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a037c53384d3b44b89b0e702f6069228c"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a037c53384d3b44b89b0e702f6069228c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ab826320fc1754fb287ea11df59ab54d6"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ab826320fc1754fb287ea11df59ab54d6"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ab826320fc1754fb287ea11df59ab54d6"></a>不是口令，总是********。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_r314cf766990d4fa4bcfa4a0a271492a8"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a5737f519a8f74ceca29c29490cf38946"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a5737f519a8f74ceca29c29490cf38946"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a5737f519a8f74ceca29c29490cf38946"></a>rolvalidbegin</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0f1e15766747422d8898631102766a1a"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0f1e15766747422d8898631102766a1a"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0f1e15766747422d8898631102766a1a"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a431b58b6b9ce40a5b0c2d8359da5c217"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a431b58b6b9ce40a5b0c2d8359da5c217"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a431b58b6b9ce40a5b0c2d8359da5c217"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a624d47fc7baf4bb6919a0f0ffd01efa5"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a624d47fc7baf4bb6919a0f0ffd01efa5"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a624d47fc7baf4bb6919a0f0ffd01efa5"></a>帐户的有效开始时间；如果没有设置有效开始时间，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ra3ab55d5b46c4d48b0346973fef0d7d2"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a3e0fcdd0cff54ce3a063326cea1eb694"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a3e0fcdd0cff54ce3a063326cea1eb694"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a3e0fcdd0cff54ce3a063326cea1eb694"></a>rolvaliduntil</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a21355ab07fec4894aa08ceb8f9e2dd22"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a21355ab07fec4894aa08ceb8f9e2dd22"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a21355ab07fec4894aa08ceb8f9e2dd22"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a5e1104d755f24bb18605f6b071fcf1b0"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a5e1104d755f24bb18605f6b071fcf1b0"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a5e1104d755f24bb18605f6b071fcf1b0"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_abe710f8d94dc468fa78f5670fa2df274"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_abe710f8d94dc468fa78f5670fa2df274"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_abe710f8d94dc468fa78f5670fa2df274"></a>帐户的有效结束时间；如果没有设置有效结束时间，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_rc9aa24cef9984a8ca575045df60793e6"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aff2aab897fbe450f8f86a8e3bff272ac"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aff2aab897fbe450f8f86a8e3bff272ac"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aff2aab897fbe450f8f86a8e3bff272ac"></a>rolrespool</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac88bc51445324db496221b9b3f8378ee"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac88bc51445324db496221b9b3f8378ee"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_ac88bc51445324db496221b9b3f8378ee"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a95e14874c2d742feaf902d5edf4d5231"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a95e14874c2d742feaf902d5edf4d5231"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a95e14874c2d742feaf902d5edf4d5231"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0c22951c8119434a82486060846d85ce"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0c22951c8119434a82486060846d85ce"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0c22951c8119434a82486060846d85ce"></a>用户所能够使用的resource pool。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_row14678799171857"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p48132070171857"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p48132070171857"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p48132070171857"></a>rolparentid</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p6383589171857"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p6383589171857"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p6383589171857"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p47308725171857"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p47308725171857"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p47308725171857"></a><a href="PG_AUTHID.md">PG_AUTHID</a>.rolparentid</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p6801534171857"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p6801534171857"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p6801534171857"></a>用户所在组用户的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_row25694692171936"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p895327171936"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p895327171936"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p895327171936"></a>roltabspace</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p5412675171936"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p5412675171936"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p5412675171936"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p35773494171936"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p35773494171936"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p35773494171936"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p11971939171936"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p11971939171936"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p11971939171936"></a>用户永久表存储空间限额。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_row036821819478"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p23681181479"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p23681181479"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p23681181479"></a>roltempspace</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p12369171812471"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p12369171812471"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p12369171812471"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p18369121834712"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p18369121834712"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p18369121834712"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p4369818204711"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p4369818204711"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p4369818204711"></a>用户临时表存储空间限额，单位为KB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_row19583121994714"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p19583101914717"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p19583101914717"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p19583101914717"></a>rolspillspace</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p1858331954717"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p1858331954717"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p1858331954717"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p135838191473"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p135838191473"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p135838191473"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p11583201954714"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p11583201954714"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p11583201954714"></a>用户算子落盘空间限额，单位为KB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_r3cfff1aa9e26404bb9e43f4994852cec"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a6662994b7ca04e72bca41385b53f75a0"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a6662994b7ca04e72bca41385b53f75a0"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a6662994b7ca04e72bca41385b53f75a0"></a>rolconfig</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a3455a0934f2343ac8fbc0571730fb7ae"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a3455a0934f2343ac8fbc0571730fb7ae"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a3455a0934f2343ac8fbc0571730fb7ae"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a763c8d5df4dd4deb950f36068951b6b0"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a763c8d5df4dd4deb950f36068951b6b0"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a763c8d5df4dd4deb950f36068951b6b0"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a61e15541d0614e8ea9d652231404e422"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a61e15541d0614e8ea9d652231404e422"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a61e15541d0614e8ea9d652231404e422"></a>运行时配置变量的会话缺省。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_r033048157cb5489f9329812ca3d1f4bb"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af48d83d046a645f8bddd892c38766efc"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af48d83d046a645f8bddd892c38766efc"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_af48d83d046a645f8bddd892c38766efc"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a58c78cf9c81f43b2b0803c5f2dc51392"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a58c78cf9c81f43b2b0803c5f2dc51392"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a58c78cf9c81f43b2b0803c5f2dc51392"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0dc523046d06423b81222c04e18713f2"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0dc523046d06423b81222c04e18713f2"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_a0dc523046d06423b81222c04e18713f2"></a><a href="PG_AUTHID.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aa0850170e9ee472a90f98feec7100d50"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aa0850170e9ee472a90f98feec7100d50"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_aa0850170e9ee472a90f98feec7100d50"></a>角色的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_row3350548417205"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p2958966517205"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p2958966517205"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p2958966517205"></a>roluseft</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p19508756172025"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p19508756172025"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p19508756172025"></a><span id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text158011513163018"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text158011513163018"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_text158011513163018"></a>boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p5896179717205"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p5896179717205"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p5896179717205"></a><a href="PG_AUTHID.md">PG_AUTHID</a>.roluseft</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p1117629217205"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p1117629217205"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_zh-cn_topic_0059777484_p1117629217205"></a>角色是否可以操作外表。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_row1464415439562"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p86445437565"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p86445437565"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p86445437565"></a>rolkind</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p10645184311560"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p10645184311560"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p10645184311560"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p364516437562"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p364516437562"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p364516437562"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p18645144305618"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p18645144305618"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p18645144305618"></a>角色类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_row109699294197"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p1996992917199"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p1996992917199"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p1996992917199"></a>nodegroup</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p1996932914192"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p1996932914192"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p1996932914192"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p6309753102510"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p6309753102510"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p6309753102510"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p79695291192"><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p79695291192"></a><a name="zh-cn_topic_0283137074_zh-cn_topic_0237122429_p79695291192"></a>该字段不支持。</p>
</td>
</tr>
<tr id="row782172861310"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="p435512501936"><a name="p435512501936"></a><a name="p435512501936"></a>rolmonitoradmin</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="p1935514501936"><a name="p1935514501936"></a><a name="p1935514501936"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="p1535519501315"><a name="p1535519501315"></a><a name="p1535519501315"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="p1355205017313"><a name="p1355205017313"></a><a name="p1355205017313"></a>该角色是否为监控管理员。</p>
</td>
</tr>
<tr id="row1082213280131"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="p278111541137"><a name="p278111541137"></a><a name="p278111541137"></a>roloperatoradmin</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="p5781154138"><a name="p5781154138"></a><a name="p5781154138"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="p1678115410317"><a name="p1678115410317"></a><a name="p1678115410317"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="p13781125418315"><a name="p13781125418315"></a><a name="p13781125418315"></a>该角色是否为运维管理员。</p>
</td>
</tr>
<tr id="row11823628161319"><td class="cellrowborder" valign="top" width="19.45%" headers="mcps1.2.5.1.1 "><p id="p383065911310"><a name="p383065911310"></a><a name="p383065911310"></a>rolpolicyadmin</p>
</td>
<td class="cellrowborder" valign="top" width="17.380000000000003%" headers="mcps1.2.5.1.2 "><p id="p08311359536"><a name="p08311359536"></a><a name="p08311359536"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="17.330000000000002%" headers="mcps1.2.5.1.3 "><p id="p158316592035"><a name="p158316592035"></a><a name="p158316592035"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="45.839999999999996%" headers="mcps1.2.5.1.4 "><p id="p58310598317"><a name="p58310598317"></a><a name="p58310598317"></a>该角色是否为安全策略管理员。</p>
</td>
</tr>
</tbody>
</table>
