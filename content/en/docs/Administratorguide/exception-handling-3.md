# Exception Handling<a name="EN-US_TOPIC_0242215062"></a>

After you use the  **gs\_checkperf**  tool to check the cluster performance, if the performance is abnormal, troubleshoot the issue by following instructions in this section.

**Table  1**  Cluster-level performance status

<a name="en-us_topic_0237088803_en-us_topic_0059777708_ta9bb00b1705f47859f64e64e62901bb4"></a>
<table><thead align="left"><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r49fa7f9a647d47e78499e596fe8d51bd"><th class="cellrowborder" valign="top" width="25.840000000000003%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237088803_en-us_topic_0059777708_a14856283d87843c28b066589d0ee3d06"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a14856283d87843c28b066589d0ee3d06"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a14856283d87843c28b066589d0ee3d06"></a>Abnormal Status</p>
</th>
<th class="cellrowborder" valign="top" width="74.16%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237088803_en-us_topic_0059777708_a6b9800600182467d9ea16a216948f16f"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6b9800600182467d9ea16a216948f16f"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6b9800600182467d9ea16a216948f16f"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088803_en-us_topic_0059777708_re2f2450dcb5243f58ca3a595f65ee474"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a6845b2c7059f4b4e959b20f359e429dc"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6845b2c7059f4b4e959b20f359e429dc"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6845b2c7059f4b4e959b20f359e429dc"></a>High CPU usage of hosts</p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a44e3fccf12b1497e8fed2c41c000d24b"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a44e3fccf12b1497e8fed2c41c000d24b"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a44e3fccf12b1497e8fed2c41c000d24b"></a>1. Add high-performance CPUs, or replace current CPUs with them.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a54f57f8b36724157bb98fc8a47c593d1"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a54f57f8b36724157bb98fc8a47c593d1"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a54f57f8b36724157bb98fc8a47c593d1"></a>2. Run the <strong id="en-us_topic_0237088803_b842352706213220"><a name="en-us_topic_0237088803_b842352706213220"></a><a name="en-us_topic_0237088803_b842352706213220"></a>top</strong> command to check which system processes cause high CPU usage, and run the <strong id="en-us_topic_0237088803_b84235270621345"><a name="en-us_topic_0237088803_b84235270621345"></a><a name="en-us_topic_0237088803_b84235270621345"></a>kill</strong> command to stop unused processes.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_s1ca2034738bd454a923e9cd80bc4bfec"><a name="en-us_topic_0237088803_en-us_topic_0059777708_s1ca2034738bd454a923e9cd80bc4bfec"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_s1ca2034738bd454a923e9cd80bc4bfec"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b162710768588"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b162710768588"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b162710768588"></a>top</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_re14ed83118e94cd4878eeb0042af49a2"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a47db6382f1b7470b968b344b08e96ea1"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a47db6382f1b7470b968b344b08e96ea1"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a47db6382f1b7470b968b344b08e96ea1"></a>High CPU usage of <span id="en-us_topic_0237088803_text1420410113254"><a name="en-us_topic_0237088803_text1420410113254"></a><a name="en-us_topic_0237088803_text1420410113254"></a>GaussDB Kernel</span></p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_ac789ba867ff84b6dbcdd406e7fe1ae25"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ac789ba867ff84b6dbcdd406e7fe1ae25"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ac789ba867ff84b6dbcdd406e7fe1ae25"></a>1. Add high-performance CPUs, or replace current CPUs with them.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a71f31331eb5041b6ac95f86f4928bb57"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a71f31331eb5041b6ac95f86f4928bb57"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a71f31331eb5041b6ac95f86f4928bb57"></a>2. Run the <strong id="en-us_topic_0237088803_b01553517288"><a name="en-us_topic_0237088803_b01553517288"></a><a name="en-us_topic_0237088803_b01553517288"></a>top</strong> command to check which database processes cause high CPU usage, and run the <strong id="en-us_topic_0237088803_b116116562811"><a name="en-us_topic_0237088803_b116116562811"></a><a name="en-us_topic_0237088803_b116116562811"></a>kill</strong> command to stop unused processes.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_sde83d7290b2740458cef9c863eb7bba5"><a name="en-us_topic_0237088803_en-us_topic_0059777708_sde83d7290b2740458cef9c863eb7bba5"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_sde83d7290b2740458cef9c863eb7bba5"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_ad91743105fd6451dbfbd30834f2d5390"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad91743105fd6451dbfbd30834f2d5390"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad91743105fd6451dbfbd30834f2d5390"></a>top</strong></pre>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a7f471e4d60124c1585979ab7c5220cc5"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a7f471e4d60124c1585979ab7c5220cc5"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a7f471e4d60124c1585979ab7c5220cc5"></a>3. Use the <strong id="en-us_topic_0237088803_b4616174712815"><a name="en-us_topic_0237088803_b4616174712815"></a><a name="en-us_topic_0237088803_b4616174712815"></a>gs_expand</strong> tool to add new hosts to lower the CPU usage.</p>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_r8e114fc900a04dcab46feb1ec0cb4178"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a308558a7e6cf43daa6aa01c22c7d198d"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a308558a7e6cf43daa6aa01c22c7d198d"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a308558a7e6cf43daa6aa01c22c7d198d"></a>Low hit ratio of the shared memory</p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a1852df9339af4a8284d9c080e0cfeb03"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a1852df9339af4a8284d9c080e0cfeb03"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a1852df9339af4a8284d9c080e0cfeb03"></a>1. Expand the memory.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a85c00d263afa436fa91aa7adceeb1fda"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a85c00d263afa436fa91aa7adceeb1fda"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a85c00d263afa436fa91aa7adceeb1fda"></a>2. Run the following command to check the OS configuration file <strong id="en-us_topic_0237088803_b842352706213630"><a name="en-us_topic_0237088803_b842352706213630"></a><a name="en-us_topic_0237088803_b842352706213630"></a>/etc/sysctl.conf</strong> and increase the value of <strong id="en-us_topic_0237088803_b842352706213639"><a name="en-us_topic_0237088803_b842352706213639"></a><a name="en-us_topic_0237088803_b842352706213639"></a>kernel.shmmax</strong>.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_s2ddc0f5946584adb9c117093afe0ce0d"><a name="en-us_topic_0237088803_en-us_topic_0059777708_s2ddc0f5946584adb9c117093afe0ce0d"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_s2ddc0f5946584adb9c117093afe0ce0d"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_aa5930b62532e4aaf96a0e1f4e22001fd"><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa5930b62532e4aaf96a0e1f4e22001fd"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa5930b62532e4aaf96a0e1f4e22001fd"></a>vim /etc/sysctl.conf</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_rb696a9cd1e274702b0cf2f94b187656c"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a3f5bf8f8e1f54be4bb75dc3463a26e84"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a3f5bf8f8e1f54be4bb75dc3463a26e84"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a3f5bf8f8e1f54be4bb75dc3463a26e84"></a>Low in-memory sort ratio</p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a5d1142ae67e94e4994bf9ec3714b676c"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a5d1142ae67e94e4994bf9ec3714b676c"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a5d1142ae67e94e4994bf9ec3714b676c"></a>Expand the memory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_r33f8c42af67944649f3721213a5d92a3"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p118437201120"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p118437201120"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p118437201120"></a>High I/O and disk usage</p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p198172641120"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p198172641120"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p198172641120"></a>1. Replace current disks with high-performance ones.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a871444be7e48432fac84f36a3917f396"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a871444be7e48432fac84f36a3917f396"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a871444be7e48432fac84f36a3917f396"></a>2. Adjust the data layout to evenly distribute I/O requests to all the physical disks.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_ad2af8b58ca4c4d7b9f8ed529cc657373"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad2af8b58ca4c4d7b9f8ed529cc657373"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad2af8b58ca4c4d7b9f8ed529cc657373"></a>3. Run <strong id="en-us_topic_0237088803_b842352706213847"><a name="en-us_topic_0237088803_b842352706213847"></a><a name="en-us_topic_0237088803_b842352706213847"></a>VACUUM FULL</strong> for the entire database.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_s950ede86b0fc4b8d820ddf111a4af7ba"><a name="en-us_topic_0237088803_en-us_topic_0059777708_s950ede86b0fc4b8d820ddf111a4af7ba"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_s950ede86b0fc4b8d820ddf111a4af7ba"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_a591b2fecdd80432c86d67004a37cde53"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a591b2fecdd80432c86d67004a37cde53"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a591b2fecdd80432c86d67004a37cde53"></a>vacuum full;</strong></pre>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p585332361508"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p585332361508"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p585332361508"></a>4. Clean up the disk space.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_ad9c1986c98924c0a9d72816f494d1be5"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad9c1986c98924c0a9d72816f494d1be5"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad9c1986c98924c0a9d72816f494d1be5"></a>5. Reduce the number of concurrent connections.</p>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_rc4d4497849014f999b56ca6feb688762"><td class="cellrowborder" valign="top" width="25.840000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a6e75cd66b1094cec8381d0212ec3c401"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6e75cd66b1094cec8381d0212ec3c401"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a6e75cd66b1094cec8381d0212ec3c401"></a>Transaction statistics</p>
</td>
<td class="cellrowborder" valign="top" width="74.16%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a3b307c31e29e4090b9ea53082fb69215"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a3b307c31e29e4090b9ea53082fb69215"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a3b307c31e29e4090b9ea53082fb69215"></a>Query the <strong id="en-us_topic_0237088803_b84235270621226"><a name="en-us_topic_0237088803_b84235270621226"></a><a name="en-us_topic_0237088803_b84235270621226"></a>pg_stat_activity</strong> system catalog to break unnecessary connections.</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Node-level performance status

<a name="en-us_topic_0237088803_en-us_topic_0059777708_t1b8a1ca94cde400ba44ab4ce0eb81bd6"></a>
<table><thead align="left"><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r0bdfef97fc9e470c830a138b33f00f40"><th class="cellrowborder" valign="top" width="25.669999999999998%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237088803_en-us_topic_0059777708_a53a50b5e5e6b4e11a3273052480f3dd2"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a53a50b5e5e6b4e11a3273052480f3dd2"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a53a50b5e5e6b4e11a3273052480f3dd2"></a>Abnormal Status</p>
</th>
<th class="cellrowborder" valign="top" width="74.33%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237088803_en-us_topic_0059777708_a4a72f839428e4c259dda47c54e4fa4e1"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4a72f839428e4c259dda47c54e4fa4e1"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4a72f839428e4c259dda47c54e4fa4e1"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r4c4f805b81e74311b4222bcb8ac8b28b"><td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p576708711746"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p576708711746"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p576708711746"></a>High CPU usage</p>
</td>
<td class="cellrowborder" valign="top" width="74.33%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_ab6721e4ef4184d2cadb0d848f7afb6e1"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ab6721e4ef4184d2cadb0d848f7afb6e1"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ab6721e4ef4184d2cadb0d848f7afb6e1"></a>1. Add high-performance CPUs, or replace current CPUs with them.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_a2075fff6c7974952b4b21a4f9137a663"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a2075fff6c7974952b4b21a4f9137a663"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a2075fff6c7974952b4b21a4f9137a663"></a>2. Run the <strong id="en-us_topic_0237088803_b15741809372"><a name="en-us_topic_0237088803_b15741809372"></a><a name="en-us_topic_0237088803_b15741809372"></a>top</strong> command to check which system processes cause high CPU usage, and run the <strong id="en-us_topic_0237088803_b279180153716"><a name="en-us_topic_0237088803_b279180153716"></a><a name="en-us_topic_0237088803_b279180153716"></a>kill</strong> command to stop unused processes.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_sd4b03c40edc44fe8832ad2260f90ea5b"><a name="en-us_topic_0237088803_en-us_topic_0059777708_sd4b03c40edc44fe8832ad2260f90ea5b"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_sd4b03c40edc44fe8832ad2260f90ea5b"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_ae5250bfa530948cf91760fae4fd25eba"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ae5250bfa530948cf91760fae4fd25eba"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ae5250bfa530948cf91760fae4fd25eba"></a>top</strong></pre>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_rf18fcfbb99664d8888093a6de5ef3199"><td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_ae5d10ca1786a4bbbb8b9952bbd7e4f98"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ae5d10ca1786a4bbbb8b9952bbd7e4f98"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ae5d10ca1786a4bbbb8b9952bbd7e4f98"></a>High memory usage</p>
</td>
<td class="cellrowborder" valign="top" width="74.33%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_abc08d798101a442b921534d4a3b7e3f2"><a name="en-us_topic_0237088803_en-us_topic_0059777708_abc08d798101a442b921534d4a3b7e3f2"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_abc08d798101a442b921534d4a3b7e3f2"></a>Expand or clean up the memory.</p>
</td>
</tr>
<tr id="en-us_topic_0237088803_en-us_topic_0059777708_r8c887a14e01c44ff9272d6236e49cdfd"><td class="cellrowborder" valign="top" width="25.669999999999998%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_ad3374332489c4f0e8c1103c80f2e8c92"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad3374332489c4f0e8c1103c80f2e8c92"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ad3374332489c4f0e8c1103c80f2e8c92"></a>High I/O usage</p>
</td>
<td class="cellrowborder" valign="top" width="74.33%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a79a892beec7b4ed3b3762c387a3f6ef3"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a79a892beec7b4ed3b3762c387a3f6ef3"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a79a892beec7b4ed3b3762c387a3f6ef3"></a>1. Replace current disks with high-performance ones.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_af8ecf84c5f5241e3bf872cede65af9de"><a name="en-us_topic_0237088803_en-us_topic_0059777708_af8ecf84c5f5241e3bf872cede65af9de"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_af8ecf84c5f5241e3bf872cede65af9de"></a>2. Clean up the disk space.</p>
<p id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p560803311746"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p560803311746"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_p560803311746"></a>3. Use memory read/write to replace as much disk I/O as possible, putting frequently accessed files or data in the memory.</p>
</td>
</tr>
</tbody>
</table>

**Table  3**  Session/process-level performance status

<a name="en-us_topic_0237088803_en-us_topic_0059777708_t803713a284c74d5885e7fcb52813917b"></a>
<table><thead align="left"><tr id="en-us_topic_0237088803_en-us_topic_0059777708_rbbc99ba73be6467dbdd58ba220a6d5cd"><th class="cellrowborder" valign="top" width="25.380000000000003%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237088803_en-us_topic_0059777708_a4291e4ba9a014994b720a8742a08799d"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4291e4ba9a014994b720a8742a08799d"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4291e4ba9a014994b720a8742a08799d"></a>Abnormal Status</p>
</th>
<th class="cellrowborder" valign="top" width="74.62%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237088803_en-us_topic_0059777708_ab5395d8f4a594480bd79abbae9624adb"><a name="en-us_topic_0237088803_en-us_topic_0059777708_ab5395d8f4a594480bd79abbae9624adb"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_ab5395d8f4a594480bd79abbae9624adb"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r1a46a92c987b4f00a908004d21d52f41"><td class="cellrowborder" valign="top" width="25.380000000000003%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a4bea0e38f0cc47c0bf5f651b37250c06"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4bea0e38f0cc47c0bf5f651b37250c06"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a4bea0e38f0cc47c0bf5f651b37250c06"></a>High CPU, memory, and I/O usage</p>
</td>
<td class="cellrowborder" valign="top" width="74.62%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_aa99bdba844bb4631acb972fa02bc6b6e"><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa99bdba844bb4631acb972fa02bc6b6e"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa99bdba844bb4631acb972fa02bc6b6e"></a>Check which processes cause high CPU, memory, or I/O usage. If they are unnecessary processes, kill them; otherwise, analyze the specific cause of high usage. For example, if SQL statement execution occupies much memory, check whether the SQL statements need optimization.</p>
</td>
</tr>
</tbody>
</table>

**Table  4**  SSD performance status

<a name="en-us_topic_0237088803_en-us_topic_0059777708_t28cda86dba7a49c899f17955edef6d58"></a>
<table><thead align="left"><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r9c07b2295ced4359914301ac747cfc29"><th class="cellrowborder" valign="top" width="25.19%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237088803_en-us_topic_0059777708_aa1399d9355974ff7a022d1154f5f8fd6"><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa1399d9355974ff7a022d1154f5f8fd6"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_aa1399d9355974ff7a022d1154f5f8fd6"></a>Abnormal Status</p>
</th>
<th class="cellrowborder" valign="top" width="74.81%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237088803_en-us_topic_0059777708_aae6858632024460bbcad3f92c1a27a78"><a name="en-us_topic_0237088803_en-us_topic_0059777708_aae6858632024460bbcad3f92c1a27a78"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_aae6858632024460bbcad3f92c1a27a78"></a>Solution</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088803_en-us_topic_0059777708_r54645227d0d54a55958134712e92de36"><td class="cellrowborder" valign="top" width="25.19%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_abda6cf2903e74f6b803f5b2953f56dfb"><a name="en-us_topic_0237088803_en-us_topic_0059777708_abda6cf2903e74f6b803f5b2953f56dfb"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_abda6cf2903e74f6b803f5b2953f56dfb"></a>SSD read/write fault</p>
</td>
<td class="cellrowborder" valign="top" width="74.81%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088803_en-us_topic_0059777708_a30a4d99dd52146e8912775714734140e"><a name="en-us_topic_0237088803_en-us_topic_0059777708_a30a4d99dd52146e8912775714734140e"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_a30a4d99dd52146e8912775714734140e"></a>Run the following command to check whether SSD is faulty. If yes, analyze the specific cause.</p>
<pre class="screen" id="en-us_topic_0237088803_en-us_topic_0059777708_sf43af852b9f44a78811cf4896729ff0a"><a name="en-us_topic_0237088803_en-us_topic_0059777708_sf43af852b9f44a78811cf4896729ff0a"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_sf43af852b9f44a78811cf4896729ff0a"></a><strong id="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b36437085836"><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b36437085836"></a><a name="en-us_topic_0237088803_en-us_topic_0059777708_en-us_topic_0058967569_b36437085836"></a>gs_checkperf -i SSD -U</strong> <span id="en-us_topic_0237088803_text461533435513"><a name="en-us_topic_0237088803_text461533435513"></a><a name="en-us_topic_0237088803_text461533435513"></a>omm</span></pre>
</td>
</tr>
</tbody>
</table>

