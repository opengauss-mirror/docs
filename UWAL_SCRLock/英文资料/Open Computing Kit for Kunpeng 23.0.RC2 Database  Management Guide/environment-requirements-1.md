# Environment Requirements<a name="EN-US_TOPIC_0000001686806420"></a>

**Table  1**  Environment requirements

<a name="en-us_topic_0000001674040706_table4957735203620"></a>
<table><thead align="left"><tr id="en-us_topic_0000001674040706_row129571235133614"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0000001674040706_p16314156113820"><a name="en-us_topic_0000001674040706_p16314156113820"></a><a name="en-us_topic_0000001674040706_p16314156113820"></a>Item</p>
</th>
<th class="cellrowborder" valign="top" width="36.86368636863686%" id="mcps1.2.4.1.2"><p id="en-us_topic_0000001674040706_p3314269388"><a name="en-us_topic_0000001674040706_p3314269388"></a><a name="en-us_topic_0000001674040706_p3314269388"></a>Configuration</p>
</th>
<th class="cellrowborder" valign="top" width="29.8029802980298%" id="mcps1.2.4.1.3"><p id="en-us_topic_0000001674040706_p1831412633812"><a name="en-us_topic_0000001674040706_p1831412633812"></a><a name="en-us_topic_0000001674040706_p1831412633812"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0000001674040706_row095713514369"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001674040706_p143143612389"><a name="en-us_topic_0000001674040706_p143143612389"></a><a name="en-us_topic_0000001674040706_p143143612389"></a>Network adapter</p>
</td>
<td class="cellrowborder" valign="top" width="36.86368636863686%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001674040706_p2314662389"><a name="en-us_topic_0000001674040706_p2314662389"></a><a name="en-us_topic_0000001674040706_p2314662389"></a>The model is subject to the actual environment, for example, Mellanox CX4/CX5 NICs.</p>
</td>
<td class="cellrowborder" valign="top" width="29.8029802980298%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001674040706_p43144633810"><a name="en-us_topic_0000001674040706_p43144633810"></a><a name="en-us_topic_0000001674040706_p43144633810"></a>It must support RDMA and Ethernet, and the RDMA protocol must be enabled. For details, refer to the <em id="en-us_topic_0000001674040706_i647912313544"><a name="en-us_topic_0000001674040706_i647912313544"></a><a name="en-us_topic_0000001674040706_i647912313544"></a>RDMA Network Guide</em>.</p>
</td>
</tr>
<tr id="en-us_topic_0000001674040706_row19957153511363"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001674040706_p58101109381"><a name="en-us_topic_0000001674040706_p58101109381"></a><a name="en-us_topic_0000001674040706_p58101109381"></a>OS</p>
</td>
<td class="cellrowborder" valign="top" width="36.86368636863686%" headers="mcps1.2.4.1.2 "><a name="en-us_topic_0000001674040706_ul1381017104389"></a><a name="en-us_topic_0000001674040706_ul1381017104389"></a><ul id="en-us_topic_0000001674040706_ul1381017104389"><li>Arm<a name="en-us_topic_0000001674040706_ul10810131033818"></a><a name="en-us_topic_0000001674040706_ul10810131033818"></a><ul id="en-us_topic_0000001674040706_ul10810131033818"><li>openEuler 22.03 LTS</li><li>openEuler 20.03 LTS</li><li>openEuler 20.03 LTS SP1</li><li>openEuler 20.03 LTS SP3</li></ul>
</li></ul>
<a name="en-us_topic_0000001674040706_ul1811151093816"></a><a name="en-us_topic_0000001674040706_ul1811151093816"></a><ul id="en-us_topic_0000001674040706_ul1811151093816"><li>x86<a name="en-us_topic_0000001674040706_ul48111610133812"></a><a name="en-us_topic_0000001674040706_ul48111610133812"></a><ul id="en-us_topic_0000001674040706_ul48111610133812"><li>openEuler 22.03 LTS</li><li>openEuler 20.03 LTS</li><li>openEuler 20.03 LTS SP1</li><li>openEuler 20.03 LTS SP3</li></ul>
</li></ul>
</td>
<td class="cellrowborder" valign="top" width="29.8029802980298%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001674040706_p8811910113812"><a name="en-us_topic_0000001674040706_p8811910113812"></a><a name="en-us_topic_0000001674040706_p8811910113812"></a>For the same SP version, if the kernel minor versions are inconsistent or an incompatibility error is reported during kernel component installation, you need to modify the OS <strong id="en-us_topic_0000001674040706_b201821433204314"><a name="en-us_topic_0000001674040706_b201821433204314"></a><a name="en-us_topic_0000001674040706_b201821433204314"></a>weak-modules</strong> script. For details, refer to the <em id="en-us_topic_0000001674040706_i242714361010"><a name="en-us_topic_0000001674040706_i242714361010"></a><a name="en-us_topic_0000001674040706_i242714361010"></a>Modification of the weak-modules Script for OS Compatibility</em>.</p>
</td>
</tr>
<tr id="en-us_topic_0000001674040706_row129584352361"><td class="cellrowborder" rowspan="2" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0000001674040706_p177171738193816"><a name="en-us_topic_0000001674040706_p177171738193816"></a><a name="en-us_topic_0000001674040706_p177171738193816"></a>Software</p>
</td>
<td class="cellrowborder" valign="top" width="36.86368636863686%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001674040706_p1545313308386"><a name="en-us_topic_0000001674040706_p1545313308386"></a><a name="en-us_topic_0000001674040706_p1545313308386"></a>MLNX_OFED_LINUX</p>
</td>
<td class="cellrowborder" valign="top" width="29.8029802980298%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0000001674040706_p1636162317388"><a name="en-us_topic_0000001674040706_p1636162317388"></a><a name="en-us_topic_0000001674040706_p1636162317388"></a>To enable the RDMA protocol, install the RDMA NIC driver. For details about the mapping between OS and OFED versions, see <a href="#en-us_topic_0000001674040706_table14845200152117">Table 2</a>.</p>
</td>
</tr>
<tr id="en-us_topic_0000001674040706_row1595893515362"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><a name="en-us_topic_0000001674040706_ul3453430153812"></a><a name="en-us_topic_0000001674040706_ul3453430153812"></a><ul id="en-us_topic_0000001674040706_ul3453430153812"><li>OCK_scrlock_openEuler-20.03-LTS-SP1-aarch64.tar.gz</li><li>OCK_scrlock_openEuler-20.03-LTS-SP1-x86_64.tar.gz</li><li>OCK_scrlock_openEuler-20.03-LTS-SP3-aarch64.tar.gz</li><li>OCK_scrlock_openEuler-20.03-LTS-SP3-x86_64.tar.gz</li><li>OCK_scrlock_openEuler-20.03-LTS-aarch64.tar.gz</li><li>OCK_scrlock_openEuler-20.03-LTS-x86_64.tar.gz</li><li>OCK_scrlock_openEuler-22.03-LTS-aarch64.tar.gz</li><li>OCK_scrlock_openEuler-22.03-LTS-x86_64.tar.gz</li></ul>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001674040706_p836152316381"><a name="en-us_topic_0000001674040706_p836152316381"></a><a name="en-us_topic_0000001674040706_p836152316381"></a>SCRLock installation package. In the package names, <strong id="en-us_topic_0000001674040706_b490516438403"><a name="en-us_topic_0000001674040706_b490516438403"></a><a name="en-us_topic_0000001674040706_b490516438403"></a>openEuler-22.03-LTS-SP1</strong>/<strong id="en-us_topic_0000001674040706_b17943165194013"><a name="en-us_topic_0000001674040706_b17943165194013"></a><a name="en-us_topic_0000001674040706_b17943165194013"></a>openEuler-22.03-LTS</strong> indicates the OS, and <strong id="en-us_topic_0000001674040706_b1629410014118"><a name="en-us_topic_0000001674040706_b1629410014118"></a><a name="en-us_topic_0000001674040706_b1629410014118"></a>aarch64</strong>/<strong id="en-us_topic_0000001674040706_b163011174417"><a name="en-us_topic_0000001674040706_b163011174417"></a><a name="en-us_topic_0000001674040706_b163011174417"></a>x86_64</strong> indicates the server architecture. Select an SCRLock installation package as required.</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Mapping between OS and OFED versions

<a name="en-us_topic_0000001674040706_table14845200152117"></a>
<table><thead align="left"><tr id="en-us_topic_0000001674040706_row3845140142111"><th class="cellrowborder" rowspan="2" valign="top" id="mcps1.2.4.1.1"><p id="en-us_topic_0000001674040706_p884512017214"><a name="en-us_topic_0000001674040706_p884512017214"></a><a name="en-us_topic_0000001674040706_p884512017214"></a>OS Version</p>
</th>
<th class="cellrowborder" colspan="2" valign="top" id="mcps1.2.4.1.2"><p id="en-us_topic_0000001674040706_p88457082119"><a name="en-us_topic_0000001674040706_p88457082119"></a><a name="en-us_topic_0000001674040706_p88457082119"></a>OFED Version</p>
</th>
</tr>
<tr id="en-us_topic_0000001674040706_row1925415052312"><th class="cellrowborder" valign="top" id="mcps1.2.4.2.1"><p id="en-us_topic_0000001674040706_p82540017236"><a name="en-us_topic_0000001674040706_p82540017236"></a><a name="en-us_topic_0000001674040706_p82540017236"></a>x86</p>
</th>
<th class="cellrowborder" valign="top" id="mcps1.2.4.2.2"><p id="en-us_topic_0000001674040706_p17254170132313"><a name="en-us_topic_0000001674040706_p17254170132313"></a><a name="en-us_topic_0000001674040706_p17254170132313"></a>Arm</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0000001674040706_row58452010212"><td class="cellrowborder" valign="top" width="22.242224222422244%" headers="mcps1.2.4.1.1 mcps1.2.4.2.1 "><p id="en-us_topic_0000001674040706_p17879182642219"><a name="en-us_topic_0000001674040706_p17879182642219"></a><a name="en-us_topic_0000001674040706_p17879182642219"></a>openEuler 20.03 LTS</p>
</td>
<td class="cellrowborder" valign="top" width="38.133813381338136%" headers="mcps1.2.4.1.2 mcps1.2.4.2.2 "><p id="en-us_topic_0000001674040706_p18879826122218"><a name="en-us_topic_0000001674040706_p18879826122218"></a><a name="en-us_topic_0000001674040706_p18879826122218"></a>MLNX_OFED_LINUX-5.4-3.6.8.1-openeuler20.03-x86_64.tgz</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001674040706_p15879826152218"><a name="en-us_topic_0000001674040706_p15879826152218"></a><a name="en-us_topic_0000001674040706_p15879826152218"></a>MLNX_OFED_LINUX-5.4-3.1.0.0-openeuler20.03-aarch64.tgz</p>
</td>
</tr>
<tr id="en-us_topic_0000001674040706_row11845170102119"><td class="cellrowborder" valign="top" width="22.242224222422244%" headers="mcps1.2.4.1.1 mcps1.2.4.2.1 "><p id="en-us_topic_0000001674040706_p1787932610227"><a name="en-us_topic_0000001674040706_p1787932610227"></a><a name="en-us_topic_0000001674040706_p1787932610227"></a>openEuler 20.03 LTS SP1</p>
</td>
<td class="cellrowborder" valign="top" width="38.133813381338136%" headers="mcps1.2.4.1.2 mcps1.2.4.2.2 "><p id="en-us_topic_0000001674040706_p18794268220"><a name="en-us_topic_0000001674040706_p18794268220"></a><a name="en-us_topic_0000001674040706_p18794268220"></a>MLNX_OFED_LINUX-5.4-3.6.8.1-openeuler20.03sp1-x86_64.tgz</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001674040706_p8879102612211"><a name="en-us_topic_0000001674040706_p8879102612211"></a><a name="en-us_topic_0000001674040706_p8879102612211"></a>MLNX_OFED_LINUX-5.4-3.1.0.0-openeuler20.03sp1-aarch64.tgz</p>
</td>
</tr>
<tr id="en-us_topic_0000001674040706_row19846307217"><td class="cellrowborder" valign="top" width="22.242224222422244%" headers="mcps1.2.4.1.1 mcps1.2.4.2.1 "><p id="en-us_topic_0000001674040706_p687962642213"><a name="en-us_topic_0000001674040706_p687962642213"></a><a name="en-us_topic_0000001674040706_p687962642213"></a>openEuler 20.03 LTS SP3</p>
</td>
<td class="cellrowborder" valign="top" width="38.133813381338136%" headers="mcps1.2.4.1.2 mcps1.2.4.2.2 "><p id="en-us_topic_0000001674040706_p19879102662211"><a name="en-us_topic_0000001674040706_p19879102662211"></a><a name="en-us_topic_0000001674040706_p19879102662211"></a>MLNX_OFED_LINUX-5.8-1.1.2.1-openeuler20.03sp3-x86_64.tgz</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001674040706_p19879192622215"><a name="en-us_topic_0000001674040706_p19879192622215"></a><a name="en-us_topic_0000001674040706_p19879192622215"></a>MLNX_OFED_LINUX-5.8-1.1.2.1-openeuler20.03sp3-aarch64.tgz</p>
</td>
</tr>
<tr id="en-us_topic_0000001674040706_row1055117240224"><td class="cellrowborder" valign="top" width="22.242224222422244%" headers="mcps1.2.4.1.1 mcps1.2.4.2.1 "><p id="en-us_topic_0000001674040706_p1688042672213"><a name="en-us_topic_0000001674040706_p1688042672213"></a><a name="en-us_topic_0000001674040706_p1688042672213"></a>openEuler 22.03 LTS</p>
</td>
<td class="cellrowborder" valign="top" width="38.133813381338136%" headers="mcps1.2.4.1.2 mcps1.2.4.2.2 "><p id="en-us_topic_0000001674040706_p1488032632210"><a name="en-us_topic_0000001674040706_p1488032632210"></a><a name="en-us_topic_0000001674040706_p1488032632210"></a>MLNX_OFED_LINUX-5.8-1.1.2.1-openeuler22.03-x86_64.tgz</p>
</td>
<td class="cellrowborder" valign="top" width="39.62396239623963%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0000001674040706_p12880112619227"><a name="en-us_topic_0000001674040706_p12880112619227"></a><a name="en-us_topic_0000001674040706_p12880112619227"></a>MLNX_OFED_LINUX-5.8-1.1.2.1-openeuler22.03-aarch64.tgz</p>
</td>
</tr>
</tbody>
</table>

