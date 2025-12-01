# PG\_DIRECTORY<a name="EN-US_TOPIC_0289900041"></a>

**PG\_DIRECTORY**  stores directories added by users. You can run the  **CREATE DIRECTORY**  statement to add directories to the system catalog. Currently, only system administrators can perform this operation.

**Table  1**  PG\_DIRECTORY columns

<a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_t6d8526cd27634c979add34313515ecbe"></a>
<table><thead align="left"><tr id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_rc66e09c6907141958a1f095d0b5903b3"><th class="cellrowborder" valign="top" width="20.62%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a32a13f2e449c4a2b9dcac364c758ebe9"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a32a13f2e449c4a2b9dcac364c758ebe9"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a32a13f2e449c4a2b9dcac364c758ebe9"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="14.39%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a3b20335794a846dbb1db8ab5e8b08bb7"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a3b20335794a846dbb1db8ab5e8b08bb7"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a3b20335794a846dbb1db8ab5e8b08bb7"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="64.99000000000001%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a2a7c960b69bb4f068e34408d9126e8a8"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a2a7c960b69bb4f068e34408d9126e8a8"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a2a7c960b69bb4f068e34408d9126e8a8"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_r1eb3d71fe0b6485a86fb174394533967"><td class="cellrowborder" valign="top" width="20.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a39ddfc65e5f04e018f57f88373ef3af4"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a39ddfc65e5f04e018f57f88373ef3af4"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a39ddfc65e5f04e018f57f88373ef3af4"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="14.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a09694550ebb145d7a9a3b4ca3ff6d557"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a09694550ebb145d7a9a3b4ca3ff6d557"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a09694550ebb145d7a9a3b4ca3ff6d557"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="64.99000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059777741_a0b279efa3bac4bd4aa6cd94e0a298895"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059777741_a0b279efa3bac4bd4aa6cd94e0a298895"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059777741_a0b279efa3bac4bd4aa6cd94e0a298895"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_rd7c1b251b7a141179159ca50317fc57e"><td class="cellrowborder" valign="top" width="20.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_ad173a4ffddb8462097281db79695d83b"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_ad173a4ffddb8462097281db79695d83b"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_ad173a4ffddb8462097281db79695d83b"></a>dirname</p>
</td>
<td class="cellrowborder" valign="top" width="14.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a8f32271314e1439f8341a8043d7d5840"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a8f32271314e1439f8341a8043d7d5840"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a8f32271314e1439f8341a8043d7d5840"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.99000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aef1cedd21cf04fedada1bce5295a2786"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aef1cedd21cf04fedada1bce5295a2786"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aef1cedd21cf04fedada1bce5295a2786"></a>Name of a directory object</p>
</td>
</tr>
<tr id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_r824153fa26c14872a622b570eb861256"><td class="cellrowborder" valign="top" width="20.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aadecccfb31c84f1696bda5abb555b07f"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aadecccfb31c84f1696bda5abb555b07f"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aadecccfb31c84f1696bda5abb555b07f"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="14.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a09fe8661ce044ea3aaae9bad61ed3854"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a09fe8661ce044ea3aaae9bad61ed3854"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a09fe8661ce044ea3aaae9bad61ed3854"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="64.99000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aa43bf460c68042c4956fd6c81ebba567"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aa43bf460c68042c4956fd6c81ebba567"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aa43bf460c68042c4956fd6c81ebba567"></a>Owner of a directory object</p>
</td>
</tr>
<tr id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_r1a2f1f3756c64b1bbb8319cf122aa35a"><td class="cellrowborder" valign="top" width="20.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aaaffe06a13544129b67d434a26d6be49"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aaaffe06a13544129b67d434a26d6be49"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_aaaffe06a13544129b67d434a26d6be49"></a>dirpath</p>
</td>
<td class="cellrowborder" valign="top" width="14.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a897fe676ea664bbda1e5137003d20877"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a897fe676ea664bbda1e5137003d20877"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a897fe676ea664bbda1e5137003d20877"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="64.99000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a2750efdeaa1b49989ae3f69404a2cd9c"><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a2750efdeaa1b49989ae3f69404a2cd9c"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_en-us_topic_0059778572_a2750efdeaa1b49989ae3f69404a2cd9c"></a>Directory path.</p>
</td>
</tr>
<tr id="en-us_topic_0283136865_en-us_topic_0237122286_row127913410476"><td class="cellrowborder" valign="top" width="20.62%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_p16279103454717"><a name="en-us_topic_0283136865_en-us_topic_0237122286_p16279103454717"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_p16279103454717"></a>diracl</p>
</td>
<td class="cellrowborder" valign="top" width="14.39%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_p102806343475"><a name="en-us_topic_0283136865_en-us_topic_0237122286_p102806343475"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_p102806343475"></a>aclitem[]</p>
</td>
<td class="cellrowborder" valign="top" width="64.99000000000001%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136865_en-us_topic_0237122286_p14280143464711"><a name="en-us_topic_0283136865_en-us_topic_0237122286_p14280143464711"></a><a name="en-us_topic_0283136865_en-us_topic_0237122286_p14280143464711"></a>Access permissions.</p>
</td>
</tr>
</tbody>
</table>

