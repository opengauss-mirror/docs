# PG\_TS\_DICT<a name="EN-US_TOPIC_0289900084"></a>

**PG\_TS\_DICT**  contains entries that define text search dictionaries. A dictionary depends on a text search template, which specifies all the implementation functions needed; the dictionary itself provides values for the user-settable parameters supported by the template. 

This division of labor allows dictionaries to be created by unprivileged users. The parameters are specified by a text string  **dictinitoption**, whose format and meaning vary depending on the template.

**Table  1**  PG\_TS\_DICT columns

<a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_t5f48e06bf761490c80af5670e8a26873"></a>
<table><thead align="left"><tr id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_r81151b0eeacc4c88bc783a0445a11045"><th class="cellrowborder" valign="top" width="25.000000000000007%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a073d666eb1d7486b84251359d1f52865"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a073d666eb1d7486b84251359d1f52865"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a073d666eb1d7486b84251359d1f52865"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="9.590000000000002%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a3479b0a452954bffb0d6c029185b9292"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a3479b0a452954bffb0d6c029185b9292"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a3479b0a452954bffb0d6c029185b9292"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="31.010000000000005%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a089b5c5bc1cc4e65ba6a383b6f8b0d95"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a089b5c5bc1cc4e65ba6a383b6f8b0d95"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a089b5c5bc1cc4e65ba6a383b6f8b0d95"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="34.400000000000006%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a9d06a2cf4c1d45dd993bada298467bba"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a9d06a2cf4c1d45dd993bada298467bba"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a9d06a2cf4c1d45dd993bada298467bba"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_rff63e5e4abf5472ca59dd39659d9fb4d"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a949f9b88fe3b45068470c6873aafcb19"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a949f9b88fe3b45068470c6873aafcb19"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a949f9b88fe3b45068470c6873aafcb19"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="9.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ace410bbc8e274764a0b213aac1ad03d8"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ace410bbc8e274764a0b213aac1ad03d8"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ace410bbc8e274764a0b213aac1ad03d8"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="31.010000000000005%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ae77c5c2438c04d4cba49ac9efa6ce1eb"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ae77c5c2438c04d4cba49ac9efa6ce1eb"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ae77c5c2438c04d4cba49ac9efa6ce1eb"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.400000000000006%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a87b3bd40f5ff41d8b6ad801f668bfeaa"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a87b3bd40f5ff41d8b6ad801f668bfeaa"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a87b3bd40f5ff41d8b6ad801f668bfeaa"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_r3c9020cde8084871ae5b2156cb00a01a"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_aa565fe4cd537488aacc673cb6a261af6"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_aa565fe4cd537488aacc673cb6a261af6"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_aa565fe4cd537488aacc673cb6a261af6"></a>dictname</p>
</td>
<td class="cellrowborder" valign="top" width="9.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a4f1fbec574c9489e9bab67d1ac1bca7f"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a4f1fbec574c9489e9bab67d1ac1bca7f"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a4f1fbec574c9489e9bab67d1ac1bca7f"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="31.010000000000005%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a972e4b75cb434d7bb085d99d1e35e3d5"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a972e4b75cb434d7bb085d99d1e35e3d5"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a972e4b75cb434d7bb085d99d1e35e3d5"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.400000000000006%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ad8158cb271844b878b043b5a8266f697"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ad8158cb271844b878b043b5a8266f697"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ad8158cb271844b878b043b5a8266f697"></a>Text search dictionary name</p>
</td>
</tr>
<tr id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_r1dc641f52e57474da5463d87752ebe60"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_addad47ac9c3d42598bb70650634d9a78"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_addad47ac9c3d42598bb70650634d9a78"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_addad47ac9c3d42598bb70650634d9a78"></a>dictnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="9.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_aff4e74040bd643f5913032be44b53607"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_aff4e74040bd643f5913032be44b53607"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_aff4e74040bd643f5913032be44b53607"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="31.010000000000005%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ae53cd323dd2a450d9f8494d2b432adb5"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ae53cd323dd2a450d9f8494d2b432adb5"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ae53cd323dd2a450d9f8494d2b432adb5"></a><a href="pg_namespace.md">PG_NAMESPACE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="34.400000000000006%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a1e8e7dffef6946559fb83a81464c5cde"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a1e8e7dffef6946559fb83a81464c5cde"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a1e8e7dffef6946559fb83a81464c5cde"></a>OID of the namespace that contains the dictionary</p>
</td>
</tr>
<tr id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_rd32a57dc5605475da409495612ebf9af"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a7cea14d6b6754c8090ec99561ef916f8"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a7cea14d6b6754c8090ec99561ef916f8"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a7cea14d6b6754c8090ec99561ef916f8"></a>dictowner</p>
</td>
<td class="cellrowborder" valign="top" width="9.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a12a9c931265648049cdd576751cbcbdc"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a12a9c931265648049cdd576751cbcbdc"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a12a9c931265648049cdd576751cbcbdc"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="31.010000000000005%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ae7e64cc1b3fb4f42b1ec60b7d978063f"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ae7e64cc1b3fb4f42b1ec60b7d978063f"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ae7e64cc1b3fb4f42b1ec60b7d978063f"></a><a href="pg_authid.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="34.400000000000006%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_af0efdae25ca8498d906ce6340e878752"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_af0efdae25ca8498d906ce6340e878752"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_af0efdae25ca8498d906ce6340e878752"></a>Owner of the dictionary</p>
</td>
</tr>
<tr id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_rcf0ea96019da4295bfaed83cffed0f37"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ab4ef3cb7a68d40eb8eda240aec8d7e21"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ab4ef3cb7a68d40eb8eda240aec8d7e21"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ab4ef3cb7a68d40eb8eda240aec8d7e21"></a>dicttemplate</p>
</td>
<td class="cellrowborder" valign="top" width="9.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a52c0690d49d245fba2b7f9bf0de2eb58"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a52c0690d49d245fba2b7f9bf0de2eb58"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a52c0690d49d245fba2b7f9bf0de2eb58"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="31.010000000000005%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a0883ac0e6ed44d67b7efa74c3ece53c2"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a0883ac0e6ed44d67b7efa74c3ece53c2"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a0883ac0e6ed44d67b7efa74c3ece53c2"></a><a href="pg_ts_template.md">PG_TS_TEMPLATE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="34.400000000000006%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a60ad00767cdc4c31b1d7c1932db041f8"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a60ad00767cdc4c31b1d7c1932db041f8"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a60ad00767cdc4c31b1d7c1932db041f8"></a>OID of the text search template for the dictionary</p>
</td>
</tr>
<tr id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_ra6f1db3eda2c494a85b2e173a4617fdf"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a4588008573d54d48907515f2bc204d73"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a4588008573d54d48907515f2bc204d73"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a4588008573d54d48907515f2bc204d73"></a>dictinitoption</p>
</td>
<td class="cellrowborder" valign="top" width="9.590000000000002%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a0dc0be195c9d4eae8640d9ab15a5d1e0"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a0dc0be195c9d4eae8640d9ab15a5d1e0"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a0dc0be195c9d4eae8640d9ab15a5d1e0"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="31.010000000000005%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a022fc927f22541f1a3fddce4ad0aab4c"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a022fc927f22541f1a3fddce4ad0aab4c"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a022fc927f22541f1a3fddce4ad0aab4c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="34.400000000000006%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a6cc9a1545e6b44b0b959cb9267a7537e"><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a6cc9a1545e6b44b0b959cb9267a7537e"></a><a name="en-us_topic_0283137341_en-us_topic_0237122324_en-us_topic_0059779137_a6cc9a1545e6b44b0b959cb9267a7537e"></a>Initialization option string for the template</p>
</td>
</tr>
</tbody>
</table>

