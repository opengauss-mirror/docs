# GS\_AUDITING\_ACCESS<a name="ZH-CN_TOPIC_0306525317"></a>

GS\_AUDITING\_ACCESS视图显示对数据库DML相关操作的所有审计信息。需要有系统管理员或安全策略管理员权限才可以访问此视图。

**表 1**  GS\_AUDITING\_ACCESS字段

<a name="t8f0334486f934453827d563b90c86711"></a>
<table><thead align="left"><tr id="r2a0276b542d54fd0808927c2c54b0fc6"><th class="cellrowborder" valign="top" width="23%" id="mcps1.2.4.1.1"><p id="a5579cdd06a5645b3862144b2131a8649"><a name="a5579cdd06a5645b3862144b2131a8649"></a><a name="a5579cdd06a5645b3862144b2131a8649"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="14.000000000000002%" id="mcps1.2.4.1.2"><p id="a1f7bf547d07e4656a132c0e34ba635ca"><a name="a1f7bf547d07e4656a132c0e34ba635ca"></a><a name="a1f7bf547d07e4656a132c0e34ba635ca"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="63%" id="mcps1.2.4.1.3"><p id="a8447f6b31ba54199a8224fea8463c23d"><a name="a8447f6b31ba54199a8224fea8463c23d"></a><a name="a8447f6b31ba54199a8224fea8463c23d"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="rf8b75b68e6a24e29931035876b3c3dfb"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="a8f18d3f0e5cd44d096020df47ca28e00"><a name="a8f18d3f0e5cd44d096020df47ca28e00"></a><a name="a8f18d3f0e5cd44d096020df47ca28e00"></a>polname</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="aecd744296d7d4b0397b2fe1fd923b6bf"><a name="aecd744296d7d4b0397b2fe1fd923b6bf"></a><a name="aecd744296d7d4b0397b2fe1fd923b6bf"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="a8579d68414bb40968ecb2f54fd50bfa3"><a name="a8579d68414bb40968ecb2f54fd50bfa3"></a><a name="a8579d68414bb40968ecb2f54fd50bfa3"></a>策略名称，需要唯一，不可重复。</p>
</td>
</tr>
<tr id="r685dd7e8104e4020b260711d0d1cf9a9"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="ad7f3b45edf4748ef8bf45be74968b4ac"><a name="ad7f3b45edf4748ef8bf45be74968b4ac"></a><a name="ad7f3b45edf4748ef8bf45be74968b4ac"></a>pol_type</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="a0b778f8c6817439484fd5f0cb1d91e8b"><a name="a0b778f8c6817439484fd5f0cb1d91e8b"></a><a name="a0b778f8c6817439484fd5f0cb1d91e8b"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="p6131333104318"><a name="p6131333104318"></a><a name="p6131333104318"></a>审计策略类型，值为‘access’，表示审计DML操作。</p>
</td>
</tr>
<tr id="r45542ef0924c49f2a21c540acd3c90e3"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="p106232332384"><a name="p106232332384"></a><a name="p106232332384"></a>polenabled</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="abe1aa36777e444c48c10c68dea6d28bd"><a name="abe1aa36777e444c48c10c68dea6d28bd"></a><a name="abe1aa36777e444c48c10c68dea6d28bd"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="p112181314549"><a name="p112181314549"></a><a name="p112181314549"></a>用来表示策略启动开关。</p>
</td>
</tr>
<tr id="ra3bccb8528cd408aa54f8e30557c0359"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="p13227139193819"><a name="p13227139193819"></a><a name="p13227139193819"></a>access_type</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="p84741447191914"><a name="p84741447191914"></a><a name="p84741447191914"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="a83dfda58a9ac418fab57f167cd4a8244"><a name="a83dfda58a9ac418fab57f167cd4a8244"></a><a name="a83dfda58a9ac418fab57f167cd4a8244"></a>DML数据库操作相关类型。例如SELECT、INSERT、DELETE等。</p>
</td>
</tr>
<tr id="rd7538143f1a648d2ae003ee563237226"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="p9209164410381"><a name="p9209164410381"></a><a name="p9209164410381"></a>label_name</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="a0a0c18f59f1a47bdb17413bbe1716f3a"><a name="a0a0c18f59f1a47bdb17413bbe1716f3a"></a><a name="a0a0c18f59f1a47bdb17413bbe1716f3a"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="a2fe293248c694ffd9fe3f04bdf3a3f6d"><a name="a2fe293248c694ffd9fe3f04bdf3a3f6d"></a><a name="a2fe293248c694ffd9fe3f04bdf3a3f6d"></a>资源标签名称。对应系统表gs_auditing_policy中的polname字段。</p>
</td>
</tr>
<tr id="ra831355d65f64e7b92f51f84021f4947"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="p1382717480382"><a name="p1382717480382"></a><a name="p1382717480382"></a>access_object</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="a9193af9c57084a81b157fec2c2935f90"><a name="a9193af9c57084a81b157fec2c2935f90"></a><a name="a9193af9c57084a81b157fec2c2935f90"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="p15909162135911"><a name="p15909162135911"></a><a name="p15909162135911"></a>用来描述数据库资产的路径。</p>
</td>
</tr>
<tr id="rdb4c5c3a41fb4325a8c11787c3af82b1"><td class="cellrowborder" valign="top" width="23%" headers="mcps1.2.4.1.1 "><p id="ab44539456dc4418bbfdc32a89a1f2851"><a name="ab44539456dc4418bbfdc32a89a1f2851"></a><a name="ab44539456dc4418bbfdc32a89a1f2851"></a>filter_name</p>
</td>
<td class="cellrowborder" valign="top" width="14.000000000000002%" headers="mcps1.2.4.1.2 "><p id="a17a7c300ce604cd380d8340e5bfa63c3"><a name="a17a7c300ce604cd380d8340e5bfa63c3"></a><a name="a17a7c300ce604cd380d8340e5bfa63c3"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="63%" headers="mcps1.2.4.1.3 "><p id="p10707151153"><a name="p10707151153"></a><a name="p10707151153"></a>过滤条件的逻辑字符串。</p>
</td>
</tr>
</tbody>
</table>

