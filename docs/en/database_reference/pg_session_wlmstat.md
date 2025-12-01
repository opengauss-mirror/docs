# PG\_SESSION\_WLMSTAT<a name="EN-US_TOPIC_0000001105042484"></a>

**PG\_SESSION\_WLMSTAT**  displays corresponding load management information about the task currently executed by the user. Only the user with sysadmin permission can query this view.

**Table  1**  PG\_SESSION\_WLMSTAT columns

<a name="en-us_topic_0059777813_tccd0268d55f64ec1a787b36355678bd4"></a>
<table><thead align="left"><tr id="en-us_topic_0059777813_r1ca16dbdaebf4816ac282796af04c7dc"><th class="cellrowborder" valign="top" width="23.369999999999997%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"><a name="en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a><a name="en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="13.79%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059777813_a50a83a9a3c054bbda8b4052636a3f0b0"><a name="en-us_topic_0059777813_a50a83a9a3c054bbda8b4052636a3f0b0"></a><a name="en-us_topic_0059777813_a50a83a9a3c054bbda8b4052636a3f0b0"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="62.839999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059777813_a25cd84fe2a5346df8dd7de66987a0817"><a name="en-us_topic_0059777813_a25cd84fe2a5346df8dd7de66987a0817"></a><a name="en-us_topic_0059777813_a25cd84fe2a5346df8dd7de66987a0817"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059777813_rd60c774c050f4e3fb470778927889fcb"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a868904a6bedc4f96a89b958e84e9e16b"><a name="en-us_topic_0059777813_a868904a6bedc4f96a89b958e84e9e16b"></a><a name="en-us_topic_0059777813_a868904a6bedc4f96a89b958e84e9e16b"></a>datid</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_ae3fedda4b1624c7290e4969612e9e262"><a name="en-us_topic_0059777813_ae3fedda4b1624c7290e4969612e9e262"></a><a name="en-us_topic_0059777813_ae3fedda4b1624c7290e4969612e9e262"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_ab0e1375ad24c46319ad2a4db1f8b366e"><a name="en-us_topic_0059777813_ab0e1375ad24c46319ad2a4db1f8b366e"></a><a name="en-us_topic_0059777813_ab0e1375ad24c46319ad2a4db1f8b366e"></a>OID of the database this backend is connected to.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_r773daf5f20b745b9a61e42ea198947c8"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a23dd1bd89d5a46b68c1fa767b1e20437"><a name="en-us_topic_0059777813_a23dd1bd89d5a46b68c1fa767b1e20437"></a><a name="en-us_topic_0059777813_a23dd1bd89d5a46b68c1fa767b1e20437"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_a5d38c859cd5b4679a394b37d0939f593"><a name="en-us_topic_0059777813_a5d38c859cd5b4679a394b37d0939f593"></a><a name="en-us_topic_0059777813_a5d38c859cd5b4679a394b37d0939f593"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_a3d80bbfcfcf649d0a17e316abd3d7131"><a name="en-us_topic_0059777813_a3d80bbfcfcf649d0a17e316abd3d7131"></a><a name="en-us_topic_0059777813_a3d80bbfcfcf649d0a17e316abd3d7131"></a>Name of the database the backend is connected to.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_rac262b0a4bae452f97ba8298291c0bc8"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a67d4cc2426cc4d648561e05beaaa7fc7"><a name="en-us_topic_0059777813_a67d4cc2426cc4d648561e05beaaa7fc7"></a><a name="en-us_topic_0059777813_a67d4cc2426cc4d648561e05beaaa7fc7"></a>threadid</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_af76ab6a0c8434029b15ae6d57f15abd5"><a name="en-us_topic_0059777813_af76ab6a0c8434029b15ae6d57f15abd5"></a><a name="en-us_topic_0059777813_af76ab6a0c8434029b15ae6d57f15abd5"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_a7669230bc8c2495da4b811c58dfe65a0"><a name="en-us_topic_0059777813_a7669230bc8c2495da4b811c58dfe65a0"></a><a name="en-us_topic_0059777813_a7669230bc8c2495da4b811c58dfe65a0"></a>ID of the backend thread.</p>
</td>
</tr>
<tr id="row182751955182013"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="p19276205522012"><a name="p19276205522012"></a><a name="p19276205522012"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p172761555102017"><a name="p172761555102017"></a><a name="p172761555102017"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="p1827685511203"><a name="p1827685511203"></a><a name="p1827685511203"></a>Session ID.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_rc7f7263ed9af4054b9c6f8d300395342"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a891f0bcb046c458da7a42461197c6412"><a name="en-us_topic_0059777813_a891f0bcb046c458da7a42461197c6412"></a><a name="en-us_topic_0059777813_a891f0bcb046c458da7a42461197c6412"></a>processid</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_aee89e61f7c584f42939028e67b141721"><a name="en-us_topic_0059777813_aee89e61f7c584f42939028e67b141721"></a><a name="en-us_topic_0059777813_aee89e61f7c584f42939028e67b141721"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_a28570d8072ca4e5dafcb0325a6b110f8"><a name="en-us_topic_0059777813_a28570d8072ca4e5dafcb0325a6b110f8"></a><a name="en-us_topic_0059777813_a28570d8072ca4e5dafcb0325a6b110f8"></a>PID of the backend thread.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_r778a278f493542ef814c34c081aaffcd"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_ac3cf9f617949409995410b2030aed42f"><a name="en-us_topic_0059777813_ac3cf9f617949409995410b2030aed42f"></a><a name="en-us_topic_0059777813_ac3cf9f617949409995410b2030aed42f"></a>usesysid</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_ac969aab673fe46ea892c3b23ac445490"><a name="en-us_topic_0059777813_ac969aab673fe46ea892c3b23ac445490"></a><a name="en-us_topic_0059777813_ac969aab673fe46ea892c3b23ac445490"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_a776237cc6eee40bc89f01e8cba7ce95d"><a name="en-us_topic_0059777813_a776237cc6eee40bc89f01e8cba7ce95d"></a><a name="en-us_topic_0059777813_a776237cc6eee40bc89f01e8cba7ce95d"></a>OID of the user logged in to the backend.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_r3f3b7fa610c0416985a519ad773ca559"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_ab6bd0fea74e84219ae29812e77f10ff6"><a name="en-us_topic_0059777813_ab6bd0fea74e84219ae29812e77f10ff6"></a><a name="en-us_topic_0059777813_ab6bd0fea74e84219ae29812e77f10ff6"></a>appname</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_ac9007d3b4a1b4b9e8244269b155a5caa"><a name="en-us_topic_0059777813_ac9007d3b4a1b4b9e8244269b155a5caa"></a><a name="en-us_topic_0059777813_ac9007d3b4a1b4b9e8244269b155a5caa"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_afee9a8f4dff24f169f3140b4f4062075"><a name="en-us_topic_0059777813_afee9a8f4dff24f169f3140b4f4062075"></a><a name="en-us_topic_0059777813_afee9a8f4dff24f169f3140b4f4062075"></a>Name of the application connected to the backend.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_rc495ccb308e5438190191997ca948fad"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a0734cbc29f564d6eac9741e71c979897"><a name="en-us_topic_0059777813_a0734cbc29f564d6eac9741e71c979897"></a><a name="en-us_topic_0059777813_a0734cbc29f564d6eac9741e71c979897"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_a2a1e0bf7c3cf4aa1bb3c9a2ef58286f3"><a name="en-us_topic_0059777813_a2a1e0bf7c3cf4aa1bb3c9a2ef58286f3"></a><a name="en-us_topic_0059777813_a2a1e0bf7c3cf4aa1bb3c9a2ef58286f3"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_ac94e5bbf58b64ab9bd77fa3fa6d5b03a"><a name="en-us_topic_0059777813_ac94e5bbf58b64ab9bd77fa3fa6d5b03a"></a><a name="en-us_topic_0059777813_ac94e5bbf58b64ab9bd77fa3fa6d5b03a"></a>Name of the user logged in to the backend.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_r1da80184f1714572b51fe9f2e2a9c961"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_ac6633e4e709844cd92695bf06a96f22e"><a name="en-us_topic_0059777813_ac6633e4e709844cd92695bf06a96f22e"></a><a name="en-us_topic_0059777813_ac6633e4e709844cd92695bf06a96f22e"></a>priority</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_a3fbb092d9267407795e2f2c17c16375b"><a name="en-us_topic_0059777813_a3fbb092d9267407795e2f2c17c16375b"></a><a name="en-us_topic_0059777813_a3fbb092d9267407795e2f2c17c16375b"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_ad28893ddc8c14c4e80834e1b776741e9"><a name="en-us_topic_0059777813_ad28893ddc8c14c4e80834e1b776741e9"></a><a name="en-us_topic_0059777813_ad28893ddc8c14c4e80834e1b776741e9"></a>Priority of Cgroup where the statement is located.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_re92cbd92b30f4f36be2495ebf60a815e"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_aa5f3de1c4c7c446490a94f5264c12263"><a name="en-us_topic_0059777813_aa5f3de1c4c7c446490a94f5264c12263"></a><a name="en-us_topic_0059777813_aa5f3de1c4c7c446490a94f5264c12263"></a>attribute</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_a0168eaf273b044d38eeee2247abcb490"><a name="en-us_topic_0059777813_a0168eaf273b044d38eeee2247abcb490"></a><a name="en-us_topic_0059777813_a0168eaf273b044d38eeee2247abcb490"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0059777813_ab6e2430869eb4a849e9928bf2cafdb9c"><a name="en-us_topic_0059777813_ab6e2430869eb4a849e9928bf2cafdb9c"></a><a name="en-us_topic_0059777813_ab6e2430869eb4a849e9928bf2cafdb9c"></a>Attributes of the statement:<a name="ul46721356172613"></a><a name="ul46721356172613"></a><ul id="ul46721356172613"><li><strong id="b138867674044127"><a name="b138867674044127"></a><a name="b138867674044127"></a>Ordinary</strong>: default attribute of a statement before it is parsed by the database.</li><li><strong id="b2074082844315"><a name="b2074082844315"></a><a name="b2074082844315"></a>Simple</strong>: simple statement.</li><li><strong id="b169387857044127"><a name="b169387857044127"></a><a name="b169387857044127"></a>Complicated</strong>: complicated statements.</li><li><strong id="b208971430344127"><a name="b208971430344127"></a><a name="b208971430344127"></a>Internal</strong>: internal statement of the database.</li><li><strong id="b583024084315"><a name="b583024084315"></a><a name="b583024084315"></a>Unknown</strong>: unknown.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0059777813_rfb82f1a98bf74dedaefde816819f36e3"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a3e60006c9a5b45f3b00b53f2a4db0445"><a name="en-us_topic_0059777813_a3e60006c9a5b45f3b00b53f2a4db0445"></a><a name="en-us_topic_0059777813_a3e60006c9a5b45f3b00b53f2a4db0445"></a>block_time</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_ae789dae3e63e46a287afeec08d39756f"><a name="en-us_topic_0059777813_ae789dae3e63e46a287afeec08d39756f"></a><a name="en-us_topic_0059777813_ae789dae3e63e46a287afeec08d39756f"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_af4c228feb9264729a04530c18f11e9a9"><a name="en-us_topic_0059777813_af4c228feb9264729a04530c18f11e9a9"></a><a name="en-us_topic_0059777813_af4c228feb9264729a04530c18f11e9a9"></a>Pending duration of the statement by now, in seconds.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_re58ec06790fd47618d0af600829e2cf9"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a0191dc929341428caa5ac1415ad53520"><a name="en-us_topic_0059777813_a0191dc929341428caa5ac1415ad53520"></a><a name="en-us_topic_0059777813_a0191dc929341428caa5ac1415ad53520"></a>elapsed_time</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_a5f3e1fe1e474414a9ebfbf98f396faa3"><a name="en-us_topic_0059777813_a5f3e1fe1e474414a9ebfbf98f396faa3"></a><a name="en-us_topic_0059777813_a5f3e1fe1e474414a9ebfbf98f396faa3"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_ab3e1fc4d9a92413eaf37dda8d254a85e"><a name="en-us_topic_0059777813_ab3e1fc4d9a92413eaf37dda8d254a85e"></a><a name="en-us_topic_0059777813_ab3e1fc4d9a92413eaf37dda8d254a85e"></a>Actual execution duration of the statement by now, in seconds.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_r80dcf6f5419b42019dd1a939b1bc6384"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a6ef8961cf16941bcb8ce4f1a14199655"><a name="en-us_topic_0059777813_a6ef8961cf16941bcb8ce4f1a14199655"></a><a name="en-us_topic_0059777813_a6ef8961cf16941bcb8ce4f1a14199655"></a>total_cpu_time</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_ab5d0d996c1104317a9cecb6df46efd10"><a name="en-us_topic_0059777813_ab5d0d996c1104317a9cecb6df46efd10"></a><a name="en-us_topic_0059777813_ab5d0d996c1104317a9cecb6df46efd10"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_ad747620eff1f408eac4bff65f8b87d85"><a name="en-us_topic_0059777813_ad747620eff1f408eac4bff65f8b87d85"></a><a name="en-us_topic_0059777813_ad747620eff1f408eac4bff65f8b87d85"></a>Total CPU usage duration of the statement on the database instances in the last period (unit: s).</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_rbbad292dc5434f2993ad752edf1826bf"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a0e4ff4c8a5ae4e568df63b5a0d2d3b46"><a name="en-us_topic_0059777813_a0e4ff4c8a5ae4e568df63b5a0d2d3b46"></a><a name="en-us_topic_0059777813_a0e4ff4c8a5ae4e568df63b5a0d2d3b46"></a>cpu_skew_percent</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_ac533296e764a45e88dfefa84a8f6d2e5"><a name="en-us_topic_0059777813_ac533296e764a45e88dfefa84a8f6d2e5"></a><a name="en-us_topic_0059777813_ac533296e764a45e88dfefa84a8f6d2e5"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_a31aaf318f1e74686809820ea6850fea0"><a name="en-us_topic_0059777813_a31aaf318f1e74686809820ea6850fea0"></a><a name="en-us_topic_0059777813_a31aaf318f1e74686809820ea6850fea0"></a>CPU usage skew percentage of the statement on the database instances in the last period.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_r12108dbe0e7e4dd095a384559789b70b"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a68ae3baf736d418b963d2ec3a2015e75"><a name="en-us_topic_0059777813_a68ae3baf736d418b963d2ec3a2015e75"></a><a name="en-us_topic_0059777813_a68ae3baf736d418b963d2ec3a2015e75"></a>statement_mem</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_a900107402fb04dd39186c0c6b96f7763"><a name="en-us_topic_0059777813_a900107402fb04dd39186c0c6b96f7763"></a><a name="en-us_topic_0059777813_a900107402fb04dd39186c0c6b96f7763"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_af58de729016945cc8a8dad3520f400fd"><a name="en-us_topic_0059777813_af58de729016945cc8a8dad3520f400fd"></a><a name="en-us_topic_0059777813_af58de729016945cc8a8dad3520f400fd"></a><strong id="b133872305844127"><a name="b133872305844127"></a><a name="b133872305844127"></a>statement_mem</strong> used for executing the statement (reserved column).</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_rd4517b6fa20347c399cca1b65d57a369"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a07ea9fb931b1497bbd6745800562df77"><a name="en-us_topic_0059777813_a07ea9fb931b1497bbd6745800562df77"></a><a name="en-us_topic_0059777813_a07ea9fb931b1497bbd6745800562df77"></a>active_points</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_a5178b0d262db4ffaa4c8bdee70f8f373"><a name="en-us_topic_0059777813_a5178b0d262db4ffaa4c8bdee70f8f373"></a><a name="en-us_topic_0059777813_a5178b0d262db4ffaa4c8bdee70f8f373"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_ad888c687e65b4e2b99b81043436d9244"><a name="en-us_topic_0059777813_ad888c687e65b4e2b99b81043436d9244"></a><a name="en-us_topic_0059777813_ad888c687e65b4e2b99b81043436d9244"></a>Number of concurrently active points occupied by the statement in the resource pool.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_r7e7b8331bf894a4abd50d040dd200d61"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a1774df5bc4e041179b7e398ba7ba51e6"><a name="en-us_topic_0059777813_a1774df5bc4e041179b7e398ba7ba51e6"></a><a name="en-us_topic_0059777813_a1774df5bc4e041179b7e398ba7ba51e6"></a>dop_value</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_aa58044efdd6e45c98f1aec3e85480104"><a name="en-us_topic_0059777813_aa58044efdd6e45c98f1aec3e85480104"></a><a name="en-us_topic_0059777813_aa58044efdd6e45c98f1aec3e85480104"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_a39b24008b80a4aa3b29785a5c311bdc6"><a name="en-us_topic_0059777813_a39b24008b80a4aa3b29785a5c311bdc6"></a><a name="en-us_topic_0059777813_a39b24008b80a4aa3b29785a5c311bdc6"></a>DOP value obtained by the statement from the resource pool.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_r8f48c2c43cd9410a9487ddab7b0ba046"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_a2de0dcaf8d7b4e0596d2e3a669a243ea"><a name="en-us_topic_0059777813_a2de0dcaf8d7b4e0596d2e3a669a243ea"></a><a name="en-us_topic_0059777813_a2de0dcaf8d7b4e0596d2e3a669a243ea"></a>control_group</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_ace7eafae015a4d41b22f62486633f00b"><a name="en-us_topic_0059777813_ace7eafae015a4d41b22f62486633f00b"></a><a name="en-us_topic_0059777813_ace7eafae015a4d41b22f62486633f00b"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_a42731aed94024204b318587ac7b72885"><a name="en-us_topic_0059777813_a42731aed94024204b318587ac7b72885"></a><a name="en-us_topic_0059777813_a42731aed94024204b318587ac7b72885"></a>Unsupported currently.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_r294b9ac28d86426b8fae8993983cfe5c"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_aab7f67ca38b045b99e5a96e284119b69"><a name="en-us_topic_0059777813_aab7f67ca38b045b99e5a96e284119b69"></a><a name="en-us_topic_0059777813_aab7f67ca38b045b99e5a96e284119b69"></a>status</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_a85e90919e2c14bfda686b399a410a8ef"><a name="en-us_topic_0059777813_a85e90919e2c14bfda686b399a410a8ef"></a><a name="en-us_topic_0059777813_a85e90919e2c14bfda686b399a410a8ef"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0059777813_a52d8aa96b9ad4db89fa0403130714f94"><a name="en-us_topic_0059777813_a52d8aa96b9ad4db89fa0403130714f94"></a><a name="en-us_topic_0059777813_a52d8aa96b9ad4db89fa0403130714f94"></a>Specifies the status of the statement, including:<a name="en-us_topic_0059777813_u8178e6c3854c44b7ba964d821ba60847"></a><a name="en-us_topic_0059777813_u8178e6c3854c44b7ba964d821ba60847"></a><ul id="en-us_topic_0059777813_u8178e6c3854c44b7ba964d821ba60847"><li><strong id="b144568765344127"><a name="b144568765344127"></a><a name="b144568765344127"></a>pending</strong>: waiting to be executed.</li><li><strong id="b214515547844127"><a name="b214515547844127"></a><a name="b214515547844127"></a>running</strong>: being executed.</li><li><strong id="b1115816414455"><a name="b1115816414455"></a><a name="b1115816414455"></a>finished</strong>: finished normally. (If <strong id="b96270728644127"><a name="b96270728644127"></a><a name="b96270728644127"></a>enqueue</strong> is set to <strong id="b5835513544127"><a name="b5835513544127"></a><a name="b5835513544127"></a>StoredProc</strong> or <strong id="b92054709544127"><a name="b92054709544127"></a><a name="b92054709544127"></a>Transaction</strong>, this state indicates that only certain jobs in the statement have been executed. This state persists until the finish of this statement.)</li><li><strong id="b1211664104618"><a name="b1211664104618"></a><a name="b1211664104618"></a>aborted</strong>: terminated unexpectedly.</li><li><strong id="b24138094744127"><a name="b24138094744127"></a><a name="b24138094744127"></a>active</strong>: normal status except for those above.</li><li><strong id="b842352706213358"><a name="b842352706213358"></a><a name="b842352706213358"></a>unknown</strong>: unknown status.</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0059777813_r470f6d37daaf4961822cf6bdd6af2f00"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_ab30701e5eb7b48f694ebe8d9b1a9a620"><a name="en-us_topic_0059777813_ab30701e5eb7b48f694ebe8d9b1a9a620"></a><a name="en-us_topic_0059777813_ab30701e5eb7b48f694ebe8d9b1a9a620"></a>enqueue</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_ad3b34d321d354f54be7e810a9996517a"><a name="en-us_topic_0059777813_ad3b34d321d354f54be7e810a9996517a"></a><a name="en-us_topic_0059777813_ad3b34d321d354f54be7e810a9996517a"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_a082a0318ed814ee2aac76480f90c4c16"><a name="en-us_topic_0059777813_a082a0318ed814ee2aac76480f90c4c16"></a><a name="en-us_topic_0059777813_a082a0318ed814ee2aac76480f90c4c16"></a>Unsupported currently.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_rca306d8c31024b2aa1ba69a5f1801b35"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_ae21e7ed18b3e42c2a602e3f1f9b63dc9"><a name="en-us_topic_0059777813_ae21e7ed18b3e42c2a602e3f1f9b63dc9"></a><a name="en-us_topic_0059777813_ae21e7ed18b3e42c2a602e3f1f9b63dc9"></a>resource_pool</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_a2f8cde66942042d989bd64dc046143f7"><a name="en-us_topic_0059777813_a2f8cde66942042d989bd64dc046143f7"></a><a name="en-us_topic_0059777813_a2f8cde66942042d989bd64dc046143f7"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_a90ce7d647c7b463881ccce2bb0933bb9"><a name="en-us_topic_0059777813_a90ce7d647c7b463881ccce2bb0933bb9"></a><a name="en-us_topic_0059777813_a90ce7d647c7b463881ccce2bb0933bb9"></a>Specifies the current resource pool where the statements are located.</p>
</td>
</tr>
<tr id="en-us_topic_0059777813_row19352181317552"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059777813_p1135381315555"><a name="en-us_topic_0059777813_p1135381315555"></a><a name="en-us_topic_0059777813_p1135381315555"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059777813_p1735341313558"><a name="en-us_topic_0059777813_p1735341313558"></a><a name="en-us_topic_0059777813_p1735341313558"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059777813_p16353121355516"><a name="en-us_topic_0059777813_p16353121355516"></a><a name="en-us_topic_0059777813_p16353121355516"></a>Specifies the latest query at the backend. If <strong id="en-us_topic_0058965573_b842352706215251"><a name="en-us_topic_0058965573_b842352706215251"></a><a name="en-us_topic_0058965573_b842352706215251"></a>state</strong> is <strong id="en-us_topic_0058965573_b842352706215249"><a name="en-us_topic_0058965573_b842352706215249"></a><a name="en-us_topic_0058965573_b842352706215249"></a>active</strong>, this column shows the executing query. In all other states, it shows the last query that was executed.</p>
</td>
</tr>
<tr id="row17746185011204"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="p1674665012010"><a name="p1674665012010"></a><a name="p1674665012010"></a>is_plana</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p3746145014202"><a name="p3746145014202"></a><a name="p3746145014202"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="p1174618502203"><a name="p1174618502203"></a><a name="p1174618502203"></a>Unsupported currently.</p>
</td>
</tr>
<tr id="row416612268217"><td class="cellrowborder" valign="top" width="23.369999999999997%" headers="mcps1.2.4.1.1 "><p id="p121682268212"><a name="p121682268212"></a><a name="p121682268212"></a>node_group</p>
</td>
<td class="cellrowborder" valign="top" width="13.79%" headers="mcps1.2.4.1.2 "><p id="p1916862612213"><a name="p1916862612213"></a><a name="p1916862612213"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.839999999999996%" headers="mcps1.2.4.1.3 "><p id="p181684268212"><a name="p181684268212"></a><a name="p181684268212"></a>Unsupported currently.</p>
</td>
</tr>
</tbody>
</table>

