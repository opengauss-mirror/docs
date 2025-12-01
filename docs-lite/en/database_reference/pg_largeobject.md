# PG\_LARGEOBJECT<a name="EN-US_TOPIC_0289900221"></a>

**PG\_LARGEOBJECT**  records data making up large objects. A large object is identified by an OID assigned when it is created. Each large object is broken into segments or "pages" small enough to be conveniently stored as rows in  **PG\_LARGEOBJECT**. The amount of data per page is defined as  **LOBLKSIZE**.

This system catalog is accessible only to system administrators.

**Table  1**  PG\_LARGEOBJECT columns

<a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_t9c6d262f2321468684abc3acef875344"></a>
<table><thead align="left"><tr id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_r09a8507142584faf8afb033a844c3aad"><th class="cellrowborder" valign="top" width="14.29%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ac0e63ad244c74b7c8a54355dca9b0719"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ac0e63ad244c74b7c8a54355dca9b0719"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ac0e63ad244c74b7c8a54355dca9b0719"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="12.78%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a42f6cf9ea71a4b148444037f002adb9b"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a42f6cf9ea71a4b148444037f002adb9b"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a42f6cf9ea71a4b148444037f002adb9b"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="30.45%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a36e991158b06414eb8f7a203d1c0e71f"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a36e991158b06414eb8f7a203d1c0e71f"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a36e991158b06414eb8f7a203d1c0e71f"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="42.480000000000004%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a9e838402159640c291d844cb5e298161"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a9e838402159640c291d844cb5e298161"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a9e838402159640c291d844cb5e298161"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_r22022788b2564644a1aabfde2da34373"><td class="cellrowborder" valign="top" width="14.29%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a2f926dd2ef244f7a9e7b5b17601b85d9"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a2f926dd2ef244f7a9e7b5b17601b85d9"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a2f926dd2ef244f7a9e7b5b17601b85d9"></a>loid</p>
</td>
<td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a7c0ca0a27e234959aa88a9220f852628"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a7c0ca0a27e234959aa88a9220f852628"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a7c0ca0a27e234959aa88a9220f852628"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="30.45%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a75fa5515be044ae09bd68fd493724875"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a75fa5515be044ae09bd68fd493724875"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a75fa5515be044ae09bd68fd493724875"></a><a href="pg_largeobject_metadata.md">PG_LARGEOBJECT_METADATA</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.480000000000004%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_abee3b873b7514f7ca330b26326e5f5af"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_abee3b873b7514f7ca330b26326e5f5af"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_abee3b873b7514f7ca330b26326e5f5af"></a>Identifier of the large object that includes this page</p>
</td>
</tr>
<tr id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_r0a236dfeb7f44421bd58c8762806c112"><td class="cellrowborder" valign="top" width="14.29%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a08da3e2e79394638b929750efc0bf9c3"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a08da3e2e79394638b929750efc0bf9c3"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a08da3e2e79394638b929750efc0bf9c3"></a>pageno</p>
</td>
<td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_aa220040e41be4f78b321a91d15452cfd"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_aa220040e41be4f78b321a91d15452cfd"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_aa220040e41be4f78b321a91d15452cfd"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="30.45%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_af7481055ec7b467ba64e7abd09707345"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_af7481055ec7b467ba64e7abd09707345"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_af7481055ec7b467ba64e7abd09707345"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.480000000000004%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ab60ca0385a1c49c180b4276485e63aeb"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ab60ca0385a1c49c180b4276485e63aeb"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ab60ca0385a1c49c180b4276485e63aeb"></a>Page number of this page within its large object (counting from zero)</p>
</td>
</tr>
<tr id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_r79367a3a699e493b8947c50c169fcbdc"><td class="cellrowborder" valign="top" width="14.29%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ac9d33baa558f4e7699061c6ffca0bf91"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ac9d33baa558f4e7699061c6ffca0bf91"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ac9d33baa558f4e7699061c6ffca0bf91"></a>data</p>
</td>
<td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ae3cb50bec6804d5882a7bd0fa2eee5f9"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ae3cb50bec6804d5882a7bd0fa2eee5f9"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_ae3cb50bec6804d5882a7bd0fa2eee5f9"></a>bytea</p>
</td>
<td class="cellrowborder" valign="top" width="30.45%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a5fd2867fe4d1466bb90e8090d5750835"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a5fd2867fe4d1466bb90e8090d5750835"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a5fd2867fe4d1466bb90e8090d5750835"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.480000000000004%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a2d35da89cc1b4952a8cbf416cd2cc594"><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a2d35da89cc1b4952a8cbf416cd2cc594"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_en-us_topic_0059777745_a2d35da89cc1b4952a8cbf416cd2cc594"></a>Data stored in the large object. This will never be more than <strong id="en-us_topic_0283136584_en-us_topic_0237122298_b842352706161010"><a name="en-us_topic_0283136584_en-us_topic_0237122298_b842352706161010"></a><a name="en-us_topic_0283136584_en-us_topic_0237122298_b842352706161010"></a>LOBLKSIZE</strong> bytes and might be less. </p>
</td>
</tr>
</tbody>
</table>

Each row of  **PG\_LARGEOBJECT**  holds data for one page of a large object, beginning at byte offset \(**pageno \* LOBLKSIZE**\) within the object. The implementation allows sparse storage: pages might be missing, and might be shorter than  **LOBLKSIZE**  bytes even if they are not the last page of the object. Missing regions within a large object read as zeroes.

