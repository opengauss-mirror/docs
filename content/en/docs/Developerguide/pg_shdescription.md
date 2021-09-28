# PG\_SHDESCRIPTION<a name="EN-US_TOPIC_0289900363"></a>

**PG\_SHDESCRIPTION**  records optional comments for shared database objects. Descriptions can be manipulated with the  **COMMENT**  command and viewed with psql's  **\\d**  commands.

See also  **PG\_DESCRIPTION**, which provides a similar function for descriptions involving objects within a single database.

Unlike most system catalogs,  **PG\_SHDESCRIPTION**  is shared across all databases in the system. There is only one copy of  **PG\_SHDESCRIPTION**  in the openGauss system, not one per database.

**Table  1**  PG\_SHDESCRIPTION columns

<a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_t39898e158652494aa37ee8aae3aff81e"></a>
<table><thead align="left"><tr id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_re401285566774c669d7cab3db6ebd3c1"><th class="cellrowborder" valign="top" width="16.351635163516352%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_aa77e01517a3d4febabf6c0c47723cb5f"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_aa77e01517a3d4febabf6c0c47723cb5f"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_aa77e01517a3d4febabf6c0c47723cb5f"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="10.15101510151015%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a67d67053f5ea477099b401084a122ca0"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a67d67053f5ea477099b401084a122ca0"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a67d67053f5ea477099b401084a122ca0"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="26.502650265026507%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a1a5ad09f9fff4df3b60abf36b7af3bda"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a1a5ad09f9fff4df3b60abf36b7af3bda"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a1a5ad09f9fff4df3b60abf36b7af3bda"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="46.994699469946994%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a2dbcb5b4f39a4ab9b70f460d682f10d8"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a2dbcb5b4f39a4ab9b70f460d682f10d8"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a2dbcb5b4f39a4ab9b70f460d682f10d8"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_r2dccf95c44264fb5acb96eeb13b23057"><td class="cellrowborder" valign="top" width="16.351635163516352%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a4d83cf6b0b70442ea2859104c35bd7aa"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a4d83cf6b0b70442ea2859104c35bd7aa"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a4d83cf6b0b70442ea2859104c35bd7aa"></a>objoid</p>
</td>
<td class="cellrowborder" valign="top" width="10.15101510151015%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a03f5b9a18a244affa6cbdc818d927bb5"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a03f5b9a18a244affa6cbdc818d927bb5"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a03f5b9a18a244affa6cbdc818d927bb5"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.502650265026507%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_af77b3b251f59498bb7f22757ba413647"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_af77b3b251f59498bb7f22757ba413647"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_af77b3b251f59498bb7f22757ba413647"></a>Any OID column</p>
</td>
<td class="cellrowborder" valign="top" width="46.994699469946994%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a5081c74a231c4397837382706a3b4506"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a5081c74a231c4397837382706a3b4506"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a5081c74a231c4397837382706a3b4506"></a>OID of the object that this description pertains to</p>
</td>
</tr>
<tr id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_r57ceb8e6c85b4b4ea83879410d49c00e"><td class="cellrowborder" valign="top" width="16.351635163516352%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a1d5a8c1fb4ee44978c27f63d3cdc1bad"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a1d5a8c1fb4ee44978c27f63d3cdc1bad"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a1d5a8c1fb4ee44978c27f63d3cdc1bad"></a>classoid</p>
</td>
<td class="cellrowborder" valign="top" width="10.15101510151015%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a7b6c01009ef444ab8609f65cf6e18a26"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a7b6c01009ef444ab8609f65cf6e18a26"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a7b6c01009ef444ab8609f65cf6e18a26"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.502650265026507%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a685f4cd001374710a743e57741e6a42d"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a685f4cd001374710a743e57741e6a42d"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a685f4cd001374710a743e57741e6a42d"></a><a href="pg_class.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="46.994699469946994%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_abd9cd0d703524e44b48c30c566138ac9"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_abd9cd0d703524e44b48c30c566138ac9"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_abd9cd0d703524e44b48c30c566138ac9"></a>OID of the system catalog where the object appears</p>
</td>
</tr>
<tr id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_r5f538b261d684bb180f175fc2ddd1fe2"><td class="cellrowborder" valign="top" width="16.351635163516352%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a60088d5b6aa541deb64a33ccae25a4ac"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a60088d5b6aa541deb64a33ccae25a4ac"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a60088d5b6aa541deb64a33ccae25a4ac"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="10.15101510151015%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a26eb664b5a36410d990eacac976e892b"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a26eb664b5a36410d990eacac976e892b"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a26eb664b5a36410d990eacac976e892b"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="26.502650265026507%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_acefeb521ffae429cb5cdaf189d04da8e"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_acefeb521ffae429cb5cdaf189d04da8e"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_acefeb521ffae429cb5cdaf189d04da8e"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="46.994699469946994%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a0c737eab2a284e63a337bf6c818ff8b0"><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a0c737eab2a284e63a337bf6c818ff8b0"></a><a name="en-us_topic_0283136853_en-us_topic_0237122315_en-us_topic_0059779259_a0c737eab2a284e63a337bf6c818ff8b0"></a>Arbitrary text that serves as the description of the object</p>
</td>
</tr>
</tbody>
</table>

