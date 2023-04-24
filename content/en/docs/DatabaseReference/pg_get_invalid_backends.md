# PG\_GET\_INVALID\_BACKENDS<a name="EN-US_TOPIC_0289900437"></a>

**PG\_GET\_INVALID\_BACKENDS**  provides information about background threads on the primary database node that are connected to the current standby server.

**Table  1**  PG\_GET\_INVALID\_BACKENDS columns

<a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_t7e0a7e4f05ed4b43ab155936b4246281"></a>
<table><thead align="left"><tr id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_r6e8b284fae0b4aab927ab220807b5f5a"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a3c9063d2d665438db7eb4065f69198d6"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a3c9063d2d665438db7eb4065f69198d6"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a3c9063d2d665438db7eb4065f69198d6"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a91781860bae7472791cec32bdc0ce896"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a91781860bae7472791cec32bdc0ce896"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a91781860bae7472791cec32bdc0ce896"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a657fd04fd8a74969a2930a84ed894670"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a657fd04fd8a74969a2930a84ed894670"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a657fd04fd8a74969a2930a84ed894670"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_r0226e114ba79497b92d2d7522763be80"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_ac76e2f54f256449b8e56c93dccf1fda4"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_ac76e2f54f256449b8e56c93dccf1fda4"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_ac76e2f54f256449b8e56c93dccf1fda4"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a2b5e3257a6b145639bc0fbc7e65d35d8"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a2b5e3257a6b145639bc0fbc7e65d35d8"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a2b5e3257a6b145639bc0fbc7e65d35d8"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a19d62048e1534cb4b1f8b3fece5ae0aa"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a19d62048e1534cb4b1f8b3fece5ae0aa"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a19d62048e1534cb4b1f8b3fece5ae0aa"></a>Thread ID</p>
</td>
</tr>
<tr id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_rf64e03e9b7984d3abd37846792160daa"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a9e62e8b02408498d890bc30d3419f2fa"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a9e62e8b02408498d890bc30d3419f2fa"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a9e62e8b02408498d890bc30d3419f2fa"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a8ae5d2ba4cbc4a8383e96b8aa0cff1dd"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a8ae5d2ba4cbc4a8383e96b8aa0cff1dd"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a8ae5d2ba4cbc4a8383e96b8aa0cff1dd"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a62c09ebfa43e43d2a51fba3b2c2d2eae"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a62c09ebfa43e43d2a51fba3b2c2d2eae"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a62c09ebfa43e43d2a51fba3b2c2d2eae"></a>Node information connected to the background thread</p>
</td>
</tr>
<tr id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_rc43cc76de507468da0184fe621a89432"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a39a256c4b71d4aad95e7d97a9f98ffd7"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a39a256c4b71d4aad95e7d97a9f98ffd7"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a39a256c4b71d4aad95e7d97a9f98ffd7"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a9a2a40498b0244ed9c0aa12d68fd95b4"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a9a2a40498b0244ed9c0aa12d68fd95b4"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a9a2a40498b0244ed9c0aa12d68fd95b4"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a8dee9c8654ea46bbae64b01f77b8101b"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a8dee9c8654ea46bbae64b01f77b8101b"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a8dee9c8654ea46bbae64b01f77b8101b"></a>Name of the connected database</p>
</td>
</tr>
<tr id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_r650ea25283ae456db20bd59353463f53"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a82245ba72fc447a39dfb46129fa1e968"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a82245ba72fc447a39dfb46129fa1e968"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a82245ba72fc447a39dfb46129fa1e968"></a>backend_start</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a7892c9839d154cb7a46985682b62edc0"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a7892c9839d154cb7a46985682b62edc0"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a7892c9839d154cb7a46985682b62edc0"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_aa0d1e30e6f04486fa595fe2dda974b4e"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_aa0d1e30e6f04486fa595fe2dda974b4e"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_aa0d1e30e6f04486fa595fe2dda974b4e"></a>Background thread startup time </p>
</td>
</tr>
<tr id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_rf4b2c4116d044300b41531aa49bbf9e1"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_aaaea5f3a09c844b1bcaaf5617c76b49f"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_aaaea5f3a09c844b1bcaaf5617c76b49f"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_aaaea5f3a09c844b1bcaaf5617c76b49f"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a92b86c4658444a50a7b0f5087151de53"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a92b86c4658444a50a7b0f5087151de53"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_a92b86c4658444a50a7b0f5087151de53"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_aad9ecb95d55f4e5790539c2fd59c408d"><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_aad9ecb95d55f4e5790539c2fd59c408d"></a><a name="en-us_topic_0283136927_en-us_topic_0237122417_en-us_topic_0059777905_aad9ecb95d55f4e5790539c2fd59c408d"></a>Query statement executed by the background thread</p>
</td>
</tr>
</tbody>
</table>

