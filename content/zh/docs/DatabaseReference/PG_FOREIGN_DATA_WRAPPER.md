# PG\_FOREIGN\_DATA\_WRAPPER<a name="ZH-CN_TOPIC_0289900217"></a>

PG\_FOREIGN\_DATA\_WRAPPER系统表存储外部数据封装器定义。一个外部数据封装器是在外部服务器上驻留外部数据的机制，是可以访问的。

**表 1**  PG\_FOREIGN\_DATA\_WRAPPER字段

<a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_tf750208087474f30a9889b0c8bb05da8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_r89f22d280b784444b72de3dff0cc6034"><th class="cellrowborder" valign="top" width="13.25%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_abc948d5e23be42e29d5e68a7577ed4ba"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_abc948d5e23be42e29d5e68a7577ed4ba"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_abc948d5e23be42e29d5e68a7577ed4ba"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.04%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a27d26e97dac548358f16f9149a11bea2"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a27d26e97dac548358f16f9149a11bea2"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a27d26e97dac548358f16f9149a11bea2"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="21.08%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ac7dae581c0fc4f7dbee41c3d410a164e"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ac7dae581c0fc4f7dbee41c3d410a164e"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ac7dae581c0fc4f7dbee41c3d410a164e"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="53.63%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ab1c40a467a3f40bfb0826d0835d083d9"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ab1c40a467a3f40bfb0826d0835d083d9"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ab1c40a467a3f40bfb0826d0835d083d9"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_r56e7f0fb8e3645718a6504e2ac27a401"><td class="cellrowborder" valign="top" width="13.25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a6b191b1477f6470ebc152b2916dbffdc"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a6b191b1477f6470ebc152b2916dbffdc"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a6b191b1477f6470ebc152b2916dbffdc"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="12.04%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a85fcb8ace6cd42fabc2a9b079a02dbcd"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a85fcb8ace6cd42fabc2a9b079a02dbcd"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a85fcb8ace6cd42fabc2a9b079a02dbcd"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.08%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a5eb78bf64de14e849e2193a4b39358e3"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a5eb78bf64de14e849e2193a4b39358e3"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a5eb78bf64de14e849e2193a4b39358e3"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="53.63%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_aaece6aa35c6a49d38b8bd9ea93a39f28"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_aaece6aa35c6a49d38b8bd9ea93a39f28"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_aaece6aa35c6a49d38b8bd9ea93a39f28"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_r12b44eb7723647fcab9213172c3590d2"><td class="cellrowborder" valign="top" width="13.25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a313708f478cf44169c61937667a81208"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a313708f478cf44169c61937667a81208"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a313708f478cf44169c61937667a81208"></a>fdwname</p>
</td>
<td class="cellrowborder" valign="top" width="12.04%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_af4f49e35155d4c339bc62fe573c4a25c"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_af4f49e35155d4c339bc62fe573c4a25c"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_af4f49e35155d4c339bc62fe573c4a25c"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="21.08%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_abde415a3c1c14526854aa55a62e2dbd5"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_abde415a3c1c14526854aa55a62e2dbd5"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_abde415a3c1c14526854aa55a62e2dbd5"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="53.63%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a411f6903c5784f499942c7dc873bdf27"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a411f6903c5784f499942c7dc873bdf27"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a411f6903c5784f499942c7dc873bdf27"></a>外部数据封装器名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_re1a07ecc972f4054bdc5a52bd4ea1cb1"><td class="cellrowborder" valign="top" width="13.25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a50bb6a4e330448889851bcd882bcd3aa"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a50bb6a4e330448889851bcd882bcd3aa"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a50bb6a4e330448889851bcd882bcd3aa"></a>fdwowner</p>
</td>
<td class="cellrowborder" valign="top" width="12.04%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ae4fbff4eac934bbbb4fb2be6aa56d1e2"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ae4fbff4eac934bbbb4fb2be6aa56d1e2"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ae4fbff4eac934bbbb4fb2be6aa56d1e2"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.08%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a643c5333bd474c1084294a9286afcb30"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a643c5333bd474c1084294a9286afcb30"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a643c5333bd474c1084294a9286afcb30"></a><a href="PG_AUTHID.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="53.63%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a0d0fe082168344a3b8b21724e3c0e078"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a0d0fe082168344a3b8b21724e3c0e078"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a0d0fe082168344a3b8b21724e3c0e078"></a>外部数据封装器的所有者。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_r165fb278a9354a318d562c38834e2ff9"><td class="cellrowborder" valign="top" width="13.25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ad2822a7961f444e0bdfc833ab0e1fa4b"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ad2822a7961f444e0bdfc833ab0e1fa4b"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ad2822a7961f444e0bdfc833ab0e1fa4b"></a>fdwhandler</p>
</td>
<td class="cellrowborder" valign="top" width="12.04%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a253fa45061764451846aabe5677ef71c"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a253fa45061764451846aabe5677ef71c"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a253fa45061764451846aabe5677ef71c"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.08%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_acbc25b8fc35d4f13984f24df1ab824c8"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_acbc25b8fc35d4f13984f24df1ab824c8"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_acbc25b8fc35d4f13984f24df1ab824c8"></a><a href="PG_PROC.md">PG_PROC</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="53.63%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a3b2bfb5ea7fd41e7adb8cdd4b537ac4a"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a3b2bfb5ea7fd41e7adb8cdd4b537ac4a"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a3b2bfb5ea7fd41e7adb8cdd4b537ac4a"></a>引用一个负责为外部数据封装器提供扩展例程的处理函数。如果没有提供处理函数则为零。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_r64142a706f2d47088b171ca1225760ee"><td class="cellrowborder" valign="top" width="13.25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_add35b5f8d0a341509513abdcfe5d68f9"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_add35b5f8d0a341509513abdcfe5d68f9"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_add35b5f8d0a341509513abdcfe5d68f9"></a>fdwvalidator</p>
</td>
<td class="cellrowborder" valign="top" width="12.04%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a578639ee345d4d28a3c7b7423b05bfa7"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a578639ee345d4d28a3c7b7423b05bfa7"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a578639ee345d4d28a3c7b7423b05bfa7"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.08%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ab16dc03534e948dca2eee3d913d74ee3"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ab16dc03534e948dca2eee3d913d74ee3"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ab16dc03534e948dca2eee3d913d74ee3"></a><a href="PG_PROC.md">PG_PROC</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="53.63%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a3660ca4109c840c19db48cd492a5523e"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a3660ca4109c840c19db48cd492a5523e"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a3660ca4109c840c19db48cd492a5523e"></a>引用一个验证器函数，这个验证器函数负责验证给予外部数据封装器的选项、外部服务器选项和使用外部数据封装器的用户映射的有效性。如果没有提供验证器函数则为零。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_r773d9957b570465abc22e9ba1ccd9c69"><td class="cellrowborder" valign="top" width="13.25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a8a053742614644d78675aed99665513a"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a8a053742614644d78675aed99665513a"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a8a053742614644d78675aed99665513a"></a>fdwacl</p>
</td>
<td class="cellrowborder" valign="top" width="12.04%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ab86cdefe1fd7424c829f3add7791cf08"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ab86cdefe1fd7424c829f3add7791cf08"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_ab86cdefe1fd7424c829f3add7791cf08"></a>aclitem[]</p>
</td>
<td class="cellrowborder" valign="top" width="21.08%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a723d779060ce4b8588271f632bbc3ace"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a723d779060ce4b8588271f632bbc3ace"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a723d779060ce4b8588271f632bbc3ace"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="53.63%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a1b4f3179b11540d5863f0e116d2e4f4a"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a1b4f3179b11540d5863f0e116d2e4f4a"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a1b4f3179b11540d5863f0e116d2e4f4a"></a>访问权限。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_r6e2f803ec5274e4d90a319924e6c3bcd"><td class="cellrowborder" valign="top" width="13.25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a62af293a038e48d19a6e8f94cd41c664"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a62af293a038e48d19a6e8f94cd41c664"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a62af293a038e48d19a6e8f94cd41c664"></a>fdwoptions</p>
</td>
<td class="cellrowborder" valign="top" width="12.04%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a7dffb8c40dc64eaa87531e6ce623e571"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a7dffb8c40dc64eaa87531e6ce623e571"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a7dffb8c40dc64eaa87531e6ce623e571"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="21.08%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a442bd6c15e2e4244961c11953ee13839"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a442bd6c15e2e4244961c11953ee13839"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a442bd6c15e2e4244961c11953ee13839"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="53.63%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a8fa76ee691944d1dae98e53eef54f95e"><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a8fa76ee691944d1dae98e53eef54f95e"></a><a name="zh-cn_topic_0283136647_zh-cn_topic_0237122290_zh-cn_topic_0059777666_a8fa76ee691944d1dae98e53eef54f95e"></a>外部数据封装器指定选项，使用“keyword=value”格式的字符串。</p>
</td>
</tr>
</tbody>
</table>
