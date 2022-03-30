# PG\_USER\_MAPPING<a name="EN-US_TOPIC_0289900512"></a>

**PG\_USER\_MAPPING**  records mappings from local users to remote.

This system catalog is accessible only to system administrators. Common users can query the  [PG\_USER\_MAPPINGS](pg_user_mappings.md)  view.

**Table  1**  PG\_USER\_MAPPING columns

<a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_td024b6aa4ab14a028b11da4bb316841f"></a>
<table><thead align="left"><tr id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_r740a01263ccb4f729cb2b46e392a8d9f"><th class="cellrowborder" valign="top" width="13.81%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a66163d54a219438d879b09767089f642"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a66163d54a219438d879b09767089f642"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a66163d54a219438d879b09767089f642"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="10.61%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_ab21919535e6e4b86b12e800e4f453d62"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_ab21919535e6e4b86b12e800e4f453d62"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_ab21919535e6e4b86b12e800e4f453d62"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="30.630000000000003%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_aa40e6d596ccf4d6d8e760eb9863249a9"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_aa40e6d596ccf4d6d8e760eb9863249a9"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_aa40e6d596ccf4d6d8e760eb9863249a9"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="44.95%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_aedb1743c8e1d48259051201fd52985e0"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_aedb1743c8e1d48259051201fd52985e0"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_aedb1743c8e1d48259051201fd52985e0"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_r966604453e1c4f0491defb0302d24fa3"><td class="cellrowborder" valign="top" width="13.81%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_aff3d16076f1649ae9b97ff1d3b67a347"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_aff3d16076f1649ae9b97ff1d3b67a347"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_aff3d16076f1649ae9b97ff1d3b67a347"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="10.61%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a714509d4ca34451eb1a0d93e46d41c97"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a714509d4ca34451eb1a0d93e46d41c97"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a714509d4ca34451eb1a0d93e46d41c97"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="30.630000000000003%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_af3abb9ea4cf548f891acbdc23032bc14"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_af3abb9ea4cf548f891acbdc23032bc14"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_af3abb9ea4cf548f891acbdc23032bc14"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a35bce30b94a64f879625656cc5c84b69"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a35bce30b94a64f879625656cc5c84b69"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a35bce30b94a64f879625656cc5c84b69"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_rda6ce53e2ef44bb38a87d81a2a167fb1"><td class="cellrowborder" valign="top" width="13.81%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a309e8361e5a84580917fc10f2cd23902"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a309e8361e5a84580917fc10f2cd23902"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a309e8361e5a84580917fc10f2cd23902"></a>umuser</p>
</td>
<td class="cellrowborder" valign="top" width="10.61%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a15600b4ed3614af5a8e44c97330ce200"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a15600b4ed3614af5a8e44c97330ce200"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a15600b4ed3614af5a8e44c97330ce200"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="30.630000000000003%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a6fbbe10972894e348e0fe9489b1ea74d"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a6fbbe10972894e348e0fe9489b1ea74d"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a6fbbe10972894e348e0fe9489b1ea74d"></a><a href="pg_authid.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a8a14bfb4ae8a4c50ba48d26e8cdb6704"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a8a14bfb4ae8a4c50ba48d26e8cdb6704"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a8a14bfb4ae8a4c50ba48d26e8cdb6704"></a>OID of the local role being mapped (<strong id="en-us_topic_0237122328_b186111845114812"><a name="en-us_topic_0237122328_b186111845114812"></a><a name="en-us_topic_0237122328_b186111845114812"></a>0</strong> if the user mapping is public)</p>
</td>
</tr>
<tr id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_r94a31cf09f464dd4ad52f814c8ee5e54"><td class="cellrowborder" valign="top" width="13.81%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a682a64221d1f41e896fd98a2000a0f86"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a682a64221d1f41e896fd98a2000a0f86"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a682a64221d1f41e896fd98a2000a0f86"></a>umserver</p>
</td>
<td class="cellrowborder" valign="top" width="10.61%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a53579e9e1542494f82efb9ab44d294b4"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a53579e9e1542494f82efb9ab44d294b4"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a53579e9e1542494f82efb9ab44d294b4"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="30.630000000000003%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a88c8990053e34ae799ef584c55664fea"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a88c8990053e34ae799ef584c55664fea"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a88c8990053e34ae799ef584c55664fea"></a><a href="pg_foreign_server.md">PG_FOREIGN_SERVER</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_af4d215e30d2e4cbab030799a8858d6e7"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_af4d215e30d2e4cbab030799a8858d6e7"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_af4d215e30d2e4cbab030799a8858d6e7"></a>OID of the foreign server that contains the mapping </p>
</td>
</tr>
<tr id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_rc63b7eba60b245658aed4b9289df71b9"><td class="cellrowborder" valign="top" width="13.81%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a2231876757774cf98db5d23433e5860c"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a2231876757774cf98db5d23433e5860c"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a2231876757774cf98db5d23433e5860c"></a>umoptions</p>
</td>
<td class="cellrowborder" valign="top" width="10.61%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_ac41e95e560b34a09a87c41c135b26f4e"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_ac41e95e560b34a09a87c41c135b26f4e"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_ac41e95e560b34a09a87c41c135b26f4e"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="30.630000000000003%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a90c151f9ec6a429390815145af388345"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a90c151f9ec6a429390815145af388345"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_a90c151f9ec6a429390815145af388345"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_af7f79dea5023451288bfa90e54c744be"><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_af7f79dea5023451288bfa90e54c744be"></a><a name="en-us_topic_0283136770_en-us_topic_0237122328_en-us_topic_0059777996_af7f79dea5023451288bfa90e54c744be"></a>User mapping specific options, expressed in a string in the format of keyword=value</p>
</td>
</tr>
</tbody>
</table>

