# PG\_SHADOW<a name="EN-US_TOPIC_0289900422"></a>

**PG\_SHADOW**  displays properties of all roles that are marked as  **rolcanlogin**  in  **PG\_AUTHID**.

The name stems from the fact that this view should not be readable by the public since it contains passwords.  [PG\_USER](pg_user.md)  is a publicly readable view on  **PG\_SHADOW**  that blanks out the password column.

**Table  1**  PG\_SHADOW columns

<a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_t0ad252bdb8024160816353f61e3bad0d"></a>
<table><thead align="left"><tr id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_rf5d3d56d7ca540e49df0e63f3a534d81"><th class="cellrowborder" valign="top" width="17.11%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_abeddac62771547d3820cd7abb2121ede"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_abeddac62771547d3820cd7abb2121ede"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_abeddac62771547d3820cd7abb2121ede"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="19.17%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af3e014174746494ab7eb5239b44d1416"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af3e014174746494ab7eb5239b44d1416"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af3e014174746494ab7eb5239b44d1416"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="21.060000000000002%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_afcf72e94da6a4be884048056c370c7da"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_afcf72e94da6a4be884048056c370c7da"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_afcf72e94da6a4be884048056c370c7da"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="42.66%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a21e6c8f77dd6495c848b83d3b5f4a8df"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a21e6c8f77dd6495c848b83d3b5f4a8df"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a21e6c8f77dd6495c848b83d3b5f4a8df"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_r041b7866bcd54f0bb7f394ec81bbaae0"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_afc68bfdeadfb4fda8930c1264c543d6f"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_afc68bfdeadfb4fda8930c1264c543d6f"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_afc68bfdeadfb4fda8930c1264c543d6f"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a5c97dba62ae944368ad43223a4007f54"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a5c97dba62ae944368ad43223a4007f54"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a5c97dba62ae944368ad43223a4007f54"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a3adf7dfe6e344393b54b170751dd20c9"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a3adf7dfe6e344393b54b170751dd20c9"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a3adf7dfe6e344393b54b170751dd20c9"></a><a href="en-us_topic_0289900706.md">PG_AUTHID</a>.rolname</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_aeca26d1e9e8a494cb058b225adda6e87"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_aeca26d1e9e8a494cb058b225adda6e87"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_aeca26d1e9e8a494cb058b225adda6e87"></a>Username</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_re1a01047b4844ef88819dc63aa18a5ee"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8af985e9fb96466e9d78ad37f0f7bc00"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8af985e9fb96466e9d78ad37f0f7bc00"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8af985e9fb96466e9d78ad37f0f7bc00"></a>usesysid</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a89058e2e5dcf4d7ba155343b157b3229"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a89058e2e5dcf4d7ba155343b157b3229"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a89058e2e5dcf4d7ba155343b157b3229"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a17e51b6257574da7bf6c8459b81c2f03"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a17e51b6257574da7bf6c8459b81c2f03"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a17e51b6257574da7bf6c8459b81c2f03"></a><a href="en-us_topic_0289900706.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a78b4cd623d584eec802ee44cffd1ecd6"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a78b4cd623d584eec802ee44cffd1ecd6"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a78b4cd623d584eec802ee44cffd1ecd6"></a>ID of this user</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_rfb0982b9fd3b4760ab6b2748c7c82002"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a1205d8d899ad4128bf95ef2b21ce3198"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a1205d8d899ad4128bf95ef2b21ce3198"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a1205d8d899ad4128bf95ef2b21ce3198"></a>usecreatedb</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ab2d16a44fb66402e92f3cd750295c075"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ab2d16a44fb66402e92f3cd750295c075"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ab2d16a44fb66402e92f3cd750295c075"></a><span id="en-us_topic_0283136753_en-us_topic_0237122436_text4110943203015"><a name="en-us_topic_0283136753_en-us_topic_0237122436_text4110943203015"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_text4110943203015"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a87c3314cb6834efa85f19d3771d9e57f"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a87c3314cb6834efa85f19d3771d9e57f"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a87c3314cb6834efa85f19d3771d9e57f"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_aa713b531ea034bfbbccbedbab4421a68"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_aa713b531ea034bfbbccbedbab4421a68"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_aa713b531ea034bfbbccbedbab4421a68"></a>Indicates that the user can create databases.</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_r961171593705479c9d8ff1b973448f7c"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ac850ae85feb24d09b9f181ee19daa83c"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ac850ae85feb24d09b9f181ee19daa83c"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ac850ae85feb24d09b9f181ee19daa83c"></a>usesuper</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ade18f3fd26974f87a811bf2a89414be4"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ade18f3fd26974f87a811bf2a89414be4"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ade18f3fd26974f87a811bf2a89414be4"></a><span id="text1695868184111"><a name="text1695868184111"></a><a name="text1695868184111"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af73c6cdd90a74a80b0c0dbf3749ca799"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af73c6cdd90a74a80b0c0dbf3749ca799"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af73c6cdd90a74a80b0c0dbf3749ca799"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a666f1dbda19746eaacde1724712f9629"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a666f1dbda19746eaacde1724712f9629"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a666f1dbda19746eaacde1724712f9629"></a>Indicates that the user is an administrator.</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_r3796df17669344d4a6c38ddb13156115"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a11c3a84d3f9a4c2c8f06a9ffb1d50c1a"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a11c3a84d3f9a4c2c8f06a9ffb1d50c1a"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a11c3a84d3f9a4c2c8f06a9ffb1d50c1a"></a>usecatupd</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_addf4e40c76fa4231acadd47c958141d5"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_addf4e40c76fa4231acadd47c958141d5"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_addf4e40c76fa4231acadd47c958141d5"></a><span id="text658312106414"><a name="text658312106414"></a><a name="text658312106414"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a3b709924c64b4b759054c909284294d2"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a3b709924c64b4b759054c909284294d2"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a3b709924c64b4b759054c909284294d2"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a2b095abc97a349e2acbc63a5a49e6e9b"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a2b095abc97a349e2acbc63a5a49e6e9b"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a2b095abc97a349e2acbc63a5a49e6e9b"></a>Users can update a view. Even the system administrator cannot do this unless this column is <strong id="en-us_topic_0283136753_b155378148254"><a name="en-us_topic_0283136753_b155378148254"></a><a name="en-us_topic_0283136753_b155378148254"></a>true</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_re9aaabc185774cdbb2646a6582bcf4ca"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a98cd6ef35fd24b428047c76b370545b9"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a98cd6ef35fd24b428047c76b370545b9"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a98cd6ef35fd24b428047c76b370545b9"></a>userepl</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ab6209420c4da4c14abdc91f15c512d61"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ab6209420c4da4c14abdc91f15c512d61"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ab6209420c4da4c14abdc91f15c512d61"></a><span id="text4803171214418"><a name="text4803171214418"></a><a name="text4803171214418"></a>Boolean</span></p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a68de9fca01ff4ca5a4046da4dad3d480"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a68de9fca01ff4ca5a4046da4dad3d480"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a68de9fca01ff4ca5a4046da4dad3d480"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8951703ff52d4aa5bb77c81c5128e9bf"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8951703ff52d4aa5bb77c81c5128e9bf"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8951703ff52d4aa5bb77c81c5128e9bf"></a>User can initiate streaming replication and put the system in and out of backup mode.</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_rf183f36aeb5149d99ad565d8832d20e0"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a4e777a5ee8594f399887f85a3c1138de"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a4e777a5ee8594f399887f85a3c1138de"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a4e777a5ee8594f399887f85a3c1138de"></a>passwd</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_aefc345d7cb9a4fc698dc1f87a6d8f5fe"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_aefc345d7cb9a4fc698dc1f87a6d8f5fe"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_aefc345d7cb9a4fc698dc1f87a6d8f5fe"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8cc1621b1d6a46d0af01f6c667f3df47"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8cc1621b1d6a46d0af01f6c667f3df47"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8cc1621b1d6a46d0af01f6c667f3df47"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a018f28333aa342b4969f46d41003d1a0"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a018f28333aa342b4969f46d41003d1a0"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a018f28333aa342b4969f46d41003d1a0"></a>Password (possibly encrypted); <strong id="en-us_topic_0283136753_en-us_topic_0237122436_b129328261467"><a name="en-us_topic_0283136753_en-us_topic_0237122436_b129328261467"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_b129328261467"></a>null</strong> if none. See <a href="en-us_topic_0289900706.md">PG_AUTHID</a> for details about how encrypted passwords are stored.</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_rc18c23dc39864920ab6f1e9dd98ee71b"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a83b34462307c49fa98c01bf6dfa12843"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a83b34462307c49fa98c01bf6dfa12843"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a83b34462307c49fa98c01bf6dfa12843"></a>valbegin</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a452e2ee057074766a156dfb7b08f1923"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a452e2ee057074766a156dfb7b08f1923"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a452e2ee057074766a156dfb7b08f1923"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ad02b56189e1740909b391efba88a31d7"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ad02b56189e1740909b391efba88a31d7"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_ad02b56189e1740909b391efba88a31d7"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a54cb732059ff4aed89226377754f3b41"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a54cb732059ff4aed89226377754f3b41"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a54cb732059ff4aed89226377754f3b41"></a>Account validity period start time (<strong id="en-us_topic_0283136753_en-us_topic_0237122436_b848713236466"><a name="en-us_topic_0283136753_en-us_topic_0237122436_b848713236466"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_b848713236466"></a>null</strong> if no start time)</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_r5c2435f56c8b49eaa95506bb7f7ba56a"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a73bd9bbe71604055af02152fd3064c28"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a73bd9bbe71604055af02152fd3064c28"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a73bd9bbe71604055af02152fd3064c28"></a>valuntil</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p11704544143516"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p11704544143516"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p11704544143516"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8354d5505d9d45448e110d9f981528ff"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8354d5505d9d45448e110d9f981528ff"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a8354d5505d9d45448e110d9f981528ff"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a7b774bdc57d1420c88c883de8e3e1035"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a7b774bdc57d1420c88c883de8e3e1035"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a7b774bdc57d1420c88c883de8e3e1035"></a>Password expiry time (<strong id="en-us_topic_0283136753_en-us_topic_0237122436_b33321134104619"><a name="en-us_topic_0283136753_en-us_topic_0237122436_b33321134104619"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_b33321134104619"></a>null</strong> if no expiration)</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_rdcd0717be1c94ab4b9b58d9b7e9c34d1"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af354588a99d64b7fa8dd489d3e5b5639"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af354588a99d64b7fa8dd489d3e5b5639"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af354588a99d64b7fa8dd489d3e5b5639"></a>respool</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a34ae6658d3154ae59bb553fa77490a19"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a34ae6658d3154ae59bb553fa77490a19"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a34ae6658d3154ae59bb553fa77490a19"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af0c67a378d884ccfa727327fd804933a"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af0c67a378d884ccfa727327fd804933a"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_af0c67a378d884ccfa727327fd804933a"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a066596b038bf4b8ca30334dcd392a41d"><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a066596b038bf4b8ca30334dcd392a41d"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_en-us_topic_0059778735_a066596b038bf4b8ca30334dcd392a41d"></a>Resource pool used by the user</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_row22455415144327"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p6949296144327"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p6949296144327"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p6949296144327"></a>parent</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p26022065144327"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p26022065144327"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p26022065144327"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p27412515144327"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p27412515144327"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p27412515144327"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p5821229144327"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p5821229144327"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p5821229144327"></a>Parent resource pool</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_row48725342144323"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p54438649144323"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p54438649144323"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p54438649144323"></a>spacelimit</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p47454461144323"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p47454461144323"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p47454461144323"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p18606096144323"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p18606096144323"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p18606096144323"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p30698845144323"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p30698845144323"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p30698845144323"></a>Storage space of the permanent table</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_row1765533494117"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p4655634104116"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p4655634104116"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p4655634104116"></a>tempspacelimit</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p196551134184117"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p196551134184117"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p196551134184117"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p11655103434118"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p11655103434118"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p11655103434118"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p12655334144111"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p12655334144111"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p12655334144111"></a>Storage space of the temporary table</p>
</td>
</tr>
<tr id="en-us_topic_0283136753_en-us_topic_0237122436_row3383113514416"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p838343511413"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p838343511413"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p838343511413"></a>spillspacelimit</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p9384535104116"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p9384535104116"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p9384535104116"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p2384335204116"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p2384335204116"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p2384335204116"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136753_en-us_topic_0237122436_p18384183512416"><a name="en-us_topic_0283136753_en-us_topic_0237122436_p18384183512416"></a><a name="en-us_topic_0283136753_en-us_topic_0237122436_p18384183512416"></a>Operator disk flushing space</p>
</td>
</tr>
<tr id="row134926198301"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0059778735_a525760dfcf7e4e878ad7013070ee4d74"><a name="en-us_topic_0059778735_a525760dfcf7e4e878ad7013070ee4d74"></a><a name="en-us_topic_0059778735_a525760dfcf7e4e878ad7013070ee4d74"></a>useconfig</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0059778735_a9eac0658c8da4a3ba7e3d7a7732d1762"><a name="en-us_topic_0059778735_a9eac0658c8da4a3ba7e3d7a7732d1762"></a><a name="en-us_topic_0059778735_a9eac0658c8da4a3ba7e3d7a7732d1762"></a>text[ ]</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0059778735_a34793eccd7b64e048ac4065050f1e4e1"><a name="en-us_topic_0059778735_a34793eccd7b64e048ac4065050f1e4e1"></a><a name="en-us_topic_0059778735_a34793eccd7b64e048ac4065050f1e4e1"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0059778735_af3df05f427ed4a7795e7686531eff4cb"><a name="en-us_topic_0059778735_af3df05f427ed4a7795e7686531eff4cb"></a><a name="en-us_topic_0059778735_af3df05f427ed4a7795e7686531eff4cb"></a>Session defaults for runtime configuration variables</p>
</td>
</tr>
<tr id="row1039772718307"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="p526312301779"><a name="p526312301779"></a><a name="p526312301779"></a>usemonitoradmin</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="p2263173017719"><a name="p2263173017719"></a><a name="p2263173017719"></a>Boolean</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="p0263730774"><a name="p0263730774"></a><a name="p0263730774"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="p1826310301679"><a name="p1826310301679"></a><a name="p1826310301679"></a>Whether the user is a monitor administrator</p>
<a name="ul2871145284717"></a><a name="ul2871145284717"></a><ul id="ul2871145284717"><li>t (true): yes. </li><li>f (false): no.</li></ul>
</td>
</tr>
<tr id="row494752117304"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="p18637357712"><a name="p18637357712"></a><a name="p18637357712"></a>useoperatoradmin</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="p8631535475"><a name="p8631535475"></a><a name="p8631535475"></a>Boolean</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="p136317358714"><a name="p136317358714"></a><a name="p136317358714"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="p1632351715"><a name="p1632351715"></a><a name="p1632351715"></a>Whether the user is an O&M administrator</p>
<a name="ul0974145914478"></a><a name="ul0974145914478"></a><ul id="ul0974145914478"><li>t (true): yes. </li><li>f (false): no.</li></ul>
</td>
</tr>
<tr id="row198620244302"><td class="cellrowborder" valign="top" width="17.11%" headers="mcps1.2.5.1.1 "><p id="p116991389717"><a name="p116991389717"></a><a name="p116991389717"></a>usepolicyadmin</p>
</td>
<td class="cellrowborder" valign="top" width="19.17%" headers="mcps1.2.5.1.2 "><p id="p570093811710"><a name="p570093811710"></a><a name="p570093811710"></a>Boolean</p>
</td>
<td class="cellrowborder" valign="top" width="21.060000000000002%" headers="mcps1.2.5.1.3 "><p id="p27001938775"><a name="p27001938775"></a><a name="p27001938775"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="42.66%" headers="mcps1.2.5.1.4 "><p id="p3700143810716"><a name="p3700143810716"></a><a name="p3700143810716"></a>Whether the user is a security policy administrator</p>
<a name="ul188541077485"></a><a name="ul188541077485"></a><ul id="ul188541077485"><li>t (true): yes. </li><li>f (false): no.</li></ul>
</td>
</tr>
</tbody>
</table>
