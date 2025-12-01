# PG\_LARGEOBJECT

PG\_LARGEOBJECT系统表保存那些标记着“大对象”的数据。一个大对象是使用其创建时分配的OID标识的。每个大对象都分解成足够小的小段或者“页面”以便以行的形式存储在PG\_LARGEOBJECT里。每页的数据定义为LOBLKSIZE。

需要有系统管理员权限才可以访问此系统表。

**表 1**  PG\_LARGEOBJECT字段

<a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_t9c6d262f2321468684abc3acef875344"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_r09a8507142584faf8afb033a844c3aad"><th class="cellrowborder" valign="top" width="14.29%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ac0e63ad244c74b7c8a54355dca9b0719"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ac0e63ad244c74b7c8a54355dca9b0719"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ac0e63ad244c74b7c8a54355dca9b0719"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.78%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a42f6cf9ea71a4b148444037f002adb9b"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a42f6cf9ea71a4b148444037f002adb9b"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a42f6cf9ea71a4b148444037f002adb9b"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="30.45%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a36e991158b06414eb8f7a203d1c0e71f"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a36e991158b06414eb8f7a203d1c0e71f"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a36e991158b06414eb8f7a203d1c0e71f"></a>引用</p>
</th>
<th class="cellrowborder" valign="top" width="42.480000000000004%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a9e838402159640c291d844cb5e298161"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a9e838402159640c291d844cb5e298161"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a9e838402159640c291d844cb5e298161"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_r22022788b2564644a1aabfde2da34373"><td class="cellrowborder" valign="top" width="14.29%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a2f926dd2ef244f7a9e7b5b17601b85d9"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a2f926dd2ef244f7a9e7b5b17601b85d9"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a2f926dd2ef244f7a9e7b5b17601b85d9"></a>loid</p>
</td>
<td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a7c0ca0a27e234959aa88a9220f852628"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a7c0ca0a27e234959aa88a9220f852628"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a7c0ca0a27e234959aa88a9220f852628"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="30.45%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a75fa5515be044ae09bd68fd493724875"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a75fa5515be044ae09bd68fd493724875"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a75fa5515be044ae09bd68fd493724875"></a><a href="PG_LARGEOBJECT_METADATA.md">PG_LARGEOBJECT_METADATA</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.480000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_abee3b873b7514f7ca330b26326e5f5af"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_abee3b873b7514f7ca330b26326e5f5af"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_abee3b873b7514f7ca330b26326e5f5af"></a>包含本页的大对象的标识符。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_r0a236dfeb7f44421bd58c8762806c112"><td class="cellrowborder" valign="top" width="14.29%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a08da3e2e79394638b929750efc0bf9c3"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a08da3e2e79394638b929750efc0bf9c3"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a08da3e2e79394638b929750efc0bf9c3"></a>pageno</p>
</td>
<td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_aa220040e41be4f78b321a91d15452cfd"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_aa220040e41be4f78b321a91d15452cfd"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_aa220040e41be4f78b321a91d15452cfd"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="30.45%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_af7481055ec7b467ba64e7abd09707345"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_af7481055ec7b467ba64e7abd09707345"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_af7481055ec7b467ba64e7abd09707345"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.480000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ab60ca0385a1c49c180b4276485e63aeb"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ab60ca0385a1c49c180b4276485e63aeb"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ab60ca0385a1c49c180b4276485e63aeb"></a>本页在其大对象数据中的页码从零开始计算。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_r79367a3a699e493b8947c50c169fcbdc"><td class="cellrowborder" valign="top" width="14.29%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ac9d33baa558f4e7699061c6ffca0bf91"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ac9d33baa558f4e7699061c6ffca0bf91"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ac9d33baa558f4e7699061c6ffca0bf91"></a>data</p>
</td>
<td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ae3cb50bec6804d5882a7bd0fa2eee5f9"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ae3cb50bec6804d5882a7bd0fa2eee5f9"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_ae3cb50bec6804d5882a7bd0fa2eee5f9"></a>bytea</p>
</td>
<td class="cellrowborder" valign="top" width="30.45%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a5fd2867fe4d1466bb90e8090d5750835"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a5fd2867fe4d1466bb90e8090d5750835"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a5fd2867fe4d1466bb90e8090d5750835"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.480000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a2d35da89cc1b4952a8cbf416cd2cc594"><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a2d35da89cc1b4952a8cbf416cd2cc594"></a><a name="zh-cn_topic_0283136584_zh-cn_topic_0237122298_zh-cn_topic_0059777745_a2d35da89cc1b4952a8cbf416cd2cc594"></a>存储在大对象中的实际数据。这些数据绝不会超过LOBLKSIZE字节，而且可能更少。</p>
</td>
</tr>
</tbody>
</table>

PG\_LARGEOBJECT的每一行保存一个大对象的一个页面，从该对象内部的字节偏移（pageno \* LOBLKSIZE）开始。这种实现允许松散的存储：页面可以丢失，而且可以比LOBLKSIZE字节少（即使它们不是对象的最后一页）。大对象内丢失的部分读做零。

