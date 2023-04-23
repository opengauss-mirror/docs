# PG\_SECLABEL<a name="EN-US_TOPIC_0289900484"></a>

**PG\_SECLABEL**  records security labels on database objects.

See also  [PG\_SHSECLABEL](pg_shseclabel.md), which provides a similar function for security labels of database objects that are shared within one openGauss.

**Table  1**  PG\_SECLABEL columns

<a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ta98c6fd4294f41529457997a84976faa"></a>
<table><thead align="left"><tr id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_raf53fb8f216f492e87905b0c6810a517"><th class="cellrowborder" valign="top" width="14.829999999999998%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_aacc9193941c34e74922928a73129a7b2"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_aacc9193941c34e74922928a73129a7b2"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_aacc9193941c34e74922928a73129a7b2"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="11.940000000000001%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a5b38682f0947498787fe19b9a5c5ac94"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a5b38682f0947498787fe19b9a5c5ac94"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a5b38682f0947498787fe19b9a5c5ac94"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="26.05%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ac23bf87d37914c3590883f1d3ac0dd00"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ac23bf87d37914c3590883f1d3ac0dd00"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ac23bf87d37914c3590883f1d3ac0dd00"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="47.18%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a45bdd3b2f34c45a2bba8a1581f499451"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a45bdd3b2f34c45a2bba8a1581f499451"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a45bdd3b2f34c45a2bba8a1581f499451"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_r5f1c714f90df45d0b77f4c60fda46312"><td class="cellrowborder" valign="top" width="14.829999999999998%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a6f6dd5245c50486bb045996c8f1bd60a"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a6f6dd5245c50486bb045996c8f1bd60a"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a6f6dd5245c50486bb045996c8f1bd60a"></a>objoid</p>
</td>
<td class="cellrowborder" valign="top" width="11.940000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a5ba01be5591a4df8b6fa1c82592469f1"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a5ba01be5591a4df8b6fa1c82592469f1"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a5ba01be5591a4df8b6fa1c82592469f1"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.05%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a07551d5835724972bdf73ef9774f6251"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a07551d5835724972bdf73ef9774f6251"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a07551d5835724972bdf73ef9774f6251"></a>Any OID column</p>
</td>
<td class="cellrowborder" valign="top" width="47.18%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a71e8dc06335d4bfda9e4f3ba74f0fc82"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a71e8dc06335d4bfda9e4f3ba74f0fc82"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a71e8dc06335d4bfda9e4f3ba74f0fc82"></a>OID of the object that this security label pertains to</p>
</td>
</tr>
<tr id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_r25ba78a1bc334997b453d0cc09f144e8"><td class="cellrowborder" valign="top" width="14.829999999999998%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ac63f529059a744e1b01349ac76ba0277"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ac63f529059a744e1b01349ac76ba0277"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ac63f529059a744e1b01349ac76ba0277"></a>classoid</p>
</td>
<td class="cellrowborder" valign="top" width="11.940000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a79520b0f823541c1a74746966d6ea4c8"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a79520b0f823541c1a74746966d6ea4c8"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a79520b0f823541c1a74746966d6ea4c8"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.05%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a563ad3b3eab840ccb3f35c2dacd18d1c"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a563ad3b3eab840ccb3f35c2dacd18d1c"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a563ad3b3eab840ccb3f35c2dacd18d1c"></a><a href="pg_class.md">PG_CLASS</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="47.18%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a1a1092bc7a004c78a317f51c49d0c27f"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a1a1092bc7a004c78a317f51c49d0c27f"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a1a1092bc7a004c78a317f51c49d0c27f"></a>OID of the system catalog where the object appears</p>
</td>
</tr>
<tr id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_rb1ce13a19b6540b586995ed3efdcde69"><td class="cellrowborder" valign="top" width="14.829999999999998%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a5e8e2da22c12465291f67d0625f6f0fc"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a5e8e2da22c12465291f67d0625f6f0fc"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a5e8e2da22c12465291f67d0625f6f0fc"></a>objsubid</p>
</td>
<td class="cellrowborder" valign="top" width="11.940000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a385639cddcec480dbe77a7da1f3ca255"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a385639cddcec480dbe77a7da1f3ca255"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a385639cddcec480dbe77a7da1f3ca255"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="26.05%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ab8dfba7d6c8f43b69da8601d3264e3e7"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ab8dfba7d6c8f43b69da8601d3264e3e7"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ab8dfba7d6c8f43b69da8601d3264e3e7"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.18%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a893d597be99a4bf5a341b9b6e1ea9fc9"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a893d597be99a4bf5a341b9b6e1ea9fc9"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a893d597be99a4bf5a341b9b6e1ea9fc9"></a>Column number for a security label on a table column</p>
</td>
</tr>
<tr id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_r0e32de4029e54137ad50a25842b84525"><td class="cellrowborder" valign="top" width="14.829999999999998%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ab9339f9d906643b3b61dace61bc437fb"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ab9339f9d906643b3b61dace61bc437fb"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ab9339f9d906643b3b61dace61bc437fb"></a>provider</p>
</td>
<td class="cellrowborder" valign="top" width="11.940000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a16fe19db6765444b920b8111cfd87332"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a16fe19db6765444b920b8111cfd87332"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a16fe19db6765444b920b8111cfd87332"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="26.05%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a3cc67b5294244244a41bf68f8e624fed"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a3cc67b5294244244a41bf68f8e624fed"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a3cc67b5294244244a41bf68f8e624fed"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.18%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ac5723d140fd344b38d7e654b46a224c6"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ac5723d140fd344b38d7e654b46a224c6"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_ac5723d140fd344b38d7e654b46a224c6"></a>Label provider associated with the label</p>
</td>
</tr>
<tr id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_r645a3a1a190e4c618dfe0409dd55bd80"><td class="cellrowborder" valign="top" width="14.829999999999998%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a180eb41a75e5460383e72641c0ffa214"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a180eb41a75e5460383e72641c0ffa214"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a180eb41a75e5460383e72641c0ffa214"></a>label</p>
</td>
<td class="cellrowborder" valign="top" width="11.940000000000001%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a6dcab40d5a0540d0aa3675d9dfe6169e"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a6dcab40d5a0540d0aa3675d9dfe6169e"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a6dcab40d5a0540d0aa3675d9dfe6169e"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="26.05%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a8fd611ebcf8e4b799c0aa1a67582472f"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a8fd611ebcf8e4b799c0aa1a67582472f"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a8fd611ebcf8e4b799c0aa1a67582472f"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.18%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a99b0a5a540b14cb89b406cf09801f056"><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a99b0a5a540b14cb89b406cf09801f056"></a><a name="en-us_topic_0283137207_en-us_topic_0237122313_en-us_topic_0059778223_a99b0a5a540b14cb89b406cf09801f056"></a>Security label applied to the object</p>
</td>
</tr>
</tbody>
</table>

