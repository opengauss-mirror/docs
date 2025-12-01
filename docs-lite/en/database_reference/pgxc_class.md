# PGXC\_CLASS<a name="EN-US_TOPIC_0000001152052780"></a>

**PGXC\_CLASS**  records the replicated or distributed information for each table. The  **PGXC\_CLASS**  system catalog has specific meanings only in distributed scenarios. openGauss can only query the table definition.

**Table  1**  PGXC\_CLASS columns

<a name="en-us_topic_0059779367_teeb6591e5b504bf4ae84f2c64fac0a3f"></a>
<table><thead align="left"><tr id="en-us_topic_0059779367_rf784c8b5c2b844d894ccb695e35a3f29"><th class="cellrowborder" valign="top" width="24.87%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059779367_a2eeaa3359cbf47fcb53a8af9cfde2777"><a name="en-us_topic_0059779367_a2eeaa3359cbf47fcb53a8af9cfde2777"></a><a name="en-us_topic_0059779367_a2eeaa3359cbf47fcb53a8af9cfde2777"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.73%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059779367_ae35aecdb064448e2bfa2febf7f5d86d3"><a name="en-us_topic_0059779367_ae35aecdb064448e2bfa2febf7f5d86d3"></a><a name="en-us_topic_0059779367_ae35aecdb064448e2bfa2febf7f5d86d3"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="57.4%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059779367_a37c9a4d51a704a04ab224f4e926ad5c0"><a name="en-us_topic_0059779367_a37c9a4d51a704a04ab224f4e926ad5c0"></a><a name="en-us_topic_0059779367_a37c9a4d51a704a04ab224f4e926ad5c0"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059779367_r03428f123ec54a8b9b3c7c3fffb87acf"><td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779367_a6c01fa5928ae4dc59a732faf25d5d6e8"><a name="en-us_topic_0059779367_a6c01fa5928ae4dc59a732faf25d5d6e8"></a><a name="en-us_topic_0059779367_a6c01fa5928ae4dc59a732faf25d5d6e8"></a>pcrelid</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779367_ac634531d58704b1b96c8abc21d47c1b9"><a name="en-us_topic_0059779367_ac634531d58704b1b96c8abc21d47c1b9"></a><a name="en-us_topic_0059779367_ac634531d58704b1b96c8abc21d47c1b9"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.4%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779367_acb1db71d670146aea405db3fc738c6f8"><a name="en-us_topic_0059779367_acb1db71d670146aea405db3fc738c6f8"></a><a name="en-us_topic_0059779367_acb1db71d670146aea405db3fc738c6f8"></a>Table OID</p>
</td>
</tr>
<tr id="en-us_topic_0059779367_rde03746ff0b04c99b3d343a554a73d8b"><td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779367_a83ee11c1c70a45c28da9f7bb40c0be23"><a name="en-us_topic_0059779367_a83ee11c1c70a45c28da9f7bb40c0be23"></a><a name="en-us_topic_0059779367_a83ee11c1c70a45c28da9f7bb40c0be23"></a>pclocatortype</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779367_a0bd8966663a84ee9b860b70702784c2f"><a name="en-us_topic_0059779367_a0bd8966663a84ee9b860b70702784c2f"></a><a name="en-us_topic_0059779367_a0bd8966663a84ee9b860b70702784c2f"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="57.4%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0059779367_adea089569aad4bc9a0a4d2f302721fff"><a name="en-us_topic_0059779367_adea089569aad4bc9a0a4d2f302721fff"></a><a name="en-us_topic_0059779367_adea089569aad4bc9a0a4d2f302721fff"></a>Locator type<a name="en-us_topic_0059779367_ub9ed4f1d788f44faa90804a6107c53ef"></a><a name="en-us_topic_0059779367_ub9ed4f1d788f44faa90804a6107c53ef"></a><ul id="en-us_topic_0059779367_ub9ed4f1d788f44faa90804a6107c53ef"><li><strong id="b120976778133410"><a name="b120976778133410"></a><a name="b120976778133410"></a>H</strong>: Hash</li><li><strong id="b28634327233410"><a name="b28634327233410"></a><a name="b28634327233410"></a>G</strong>: Range</li><li><strong id="b119006832633410"><a name="b119006832633410"></a><a name="b119006832633410"></a>L</strong>: List</li><li><strong id="b179977178133410"><a name="b179977178133410"></a><a name="b179977178133410"></a>M</strong>: Modulo</li><li><strong id="b118329873333410"><a name="b118329873333410"></a><a name="b118329873333410"></a>N</strong>: Round Robin</li><li><strong id="b179349640433410"><a name="b179349640433410"></a><a name="b179349640433410"></a>R</strong>: Replication</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0059779367_re73a0f6f4c5f4cd886c55eb77f4ece47"><td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779367_a3471481f03d948329e152566d775714c"><a name="en-us_topic_0059779367_a3471481f03d948329e152566d775714c"></a><a name="en-us_topic_0059779367_a3471481f03d948329e152566d775714c"></a>pchashalgorithm</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779367_a1ad6a144f723431c8615928d49af9d6d"><a name="en-us_topic_0059779367_a1ad6a144f723431c8615928d49af9d6d"></a><a name="en-us_topic_0059779367_a1ad6a144f723431c8615928d49af9d6d"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="57.4%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779367_acd25ddc1ef274032aac94ca6f9879f81"><a name="en-us_topic_0059779367_acd25ddc1ef274032aac94ca6f9879f81"></a><a name="en-us_topic_0059779367_acd25ddc1ef274032aac94ca6f9879f81"></a>Distributed tuple using the hash algorithm</p>
</td>
</tr>
<tr id="en-us_topic_0059779367_r57dbf774bbef42d8b7018ccc85e3a6d8"><td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779367_a46a6f2f6f71044ab9c6e2bf544d3b3b9"><a name="en-us_topic_0059779367_a46a6f2f6f71044ab9c6e2bf544d3b3b9"></a><a name="en-us_topic_0059779367_a46a6f2f6f71044ab9c6e2bf544d3b3b9"></a>pchashbuckets</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779367_a5f66d522aa76491ba6d5cc81be8d269c"><a name="en-us_topic_0059779367_a5f66d522aa76491ba6d5cc81be8d269c"></a><a name="en-us_topic_0059779367_a5f66d522aa76491ba6d5cc81be8d269c"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="57.4%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779367_aa74a2b519e224e81b389e10011aacac1"><a name="en-us_topic_0059779367_aa74a2b519e224e81b389e10011aacac1"></a><a name="en-us_topic_0059779367_aa74a2b519e224e81b389e10011aacac1"></a>Value of a hash container</p>
</td>
</tr>
<tr id="en-us_topic_0059779367_r645ace1e1e834f6b95b74adb48c11401"><td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779367_a5fa2158cc8b74bc994539099387a286a"><a name="en-us_topic_0059779367_a5fa2158cc8b74bc994539099387a286a"></a><a name="en-us_topic_0059779367_a5fa2158cc8b74bc994539099387a286a"></a>pgroup</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779367_ac49034cf74254548b98ce88afbf0ca22"><a name="en-us_topic_0059779367_ac49034cf74254548b98ce88afbf0ca22"></a><a name="en-us_topic_0059779367_ac49034cf74254548b98ce88afbf0ca22"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.4%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779367_a0e7574dfb83c4056a3b20a8aa6c4736d"><a name="en-us_topic_0059779367_a0e7574dfb83c4056a3b20a8aa6c4736d"></a><a name="en-us_topic_0059779367_a0e7574dfb83c4056a3b20a8aa6c4736d"></a>Name of the node</p>
</td>
</tr>
<tr id="en-us_topic_0059779367_rc39c2812f791471d92a8a78f66420e63"><td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779367_a6835ff07a64f49ca8fa8eab656ed42b9"><a name="en-us_topic_0059779367_a6835ff07a64f49ca8fa8eab656ed42b9"></a><a name="en-us_topic_0059779367_a6835ff07a64f49ca8fa8eab656ed42b9"></a>redistributed</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779367_a1a4ec8b9933a43dba29614b84ba32885"><a name="en-us_topic_0059779367_a1a4ec8b9933a43dba29614b84ba32885"></a><a name="en-us_topic_0059779367_a1a4ec8b9933a43dba29614b84ba32885"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="57.4%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779367_a1d1a1e9d8ab7416da001b75bdd33d923"><a name="en-us_topic_0059779367_a1d1a1e9d8ab7416da001b75bdd33d923"></a><a name="en-us_topic_0059779367_a1d1a1e9d8ab7416da001b75bdd33d923"></a>Indicates that a table has been redistributed.</p>
</td>
</tr>
<tr id="en-us_topic_0059779367_rbe17a4d6ba934d908998a67a3ffde3e8"><td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779367_a423697b8ef41448f9348de1404db30ee"><a name="en-us_topic_0059779367_a423697b8ef41448f9348de1404db30ee"></a><a name="en-us_topic_0059779367_a423697b8ef41448f9348de1404db30ee"></a>redis_order</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779367_a66bc8d3f02e44aabba2011964b750796"><a name="en-us_topic_0059779367_a66bc8d3f02e44aabba2011964b750796"></a><a name="en-us_topic_0059779367_a66bc8d3f02e44aabba2011964b750796"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.4%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779367_a99f526ee7e154e7b8e4a99d81ee81f76"><a name="en-us_topic_0059779367_a99f526ee7e154e7b8e4a99d81ee81f76"></a><a name="en-us_topic_0059779367_a99f526ee7e154e7b8e4a99d81ee81f76"></a>Redistribution sequence. Tables whose values are <strong id="b145052104333410"><a name="b145052104333410"></a><a name="b145052104333410"></a>0</strong> will not be redistributed in this round of redistribution.</p>
</td>
</tr>
<tr id="en-us_topic_0059779367_r2b5a32301e7d4370a344885cfd94cab6"><td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779367_a1783bb1820c74dfeb4b2b68babb0c90b"><a name="en-us_topic_0059779367_a1783bb1820c74dfeb4b2b68babb0c90b"></a><a name="en-us_topic_0059779367_a1783bb1820c74dfeb4b2b68babb0c90b"></a>pcattnum</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779367_a9835c4dc9a034883950108e58c35a6de"><a name="en-us_topic_0059779367_a9835c4dc9a034883950108e58c35a6de"></a><a name="en-us_topic_0059779367_a9835c4dc9a034883950108e58c35a6de"></a>int2vector</p>
</td>
<td class="cellrowborder" valign="top" width="57.4%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779367_aba5831e1796c40faa20527c883c3f8cd"><a name="en-us_topic_0059779367_aba5831e1796c40faa20527c883c3f8cd"></a><a name="en-us_topic_0059779367_aba5831e1796c40faa20527c883c3f8cd"></a>Column number used as a distributed key</p>
</td>
</tr>
<tr id="en-us_topic_0059779367_rd77e626906fa4f3ebcf667ed050e2584"><td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059779367_aba6b851874c44b6293198f0661442e61"><a name="en-us_topic_0059779367_aba6b851874c44b6293198f0661442e61"></a><a name="en-us_topic_0059779367_aba6b851874c44b6293198f0661442e61"></a>nodeoids</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059779367_aa6d6d9b268794c04b27b218c88b05e8a"><a name="en-us_topic_0059779367_aa6d6d9b268794c04b27b218c88b05e8a"></a><a name="en-us_topic_0059779367_aa6d6d9b268794c04b27b218c88b05e8a"></a>oidvector_extend</p>
</td>
<td class="cellrowborder" valign="top" width="57.4%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059779367_a48e051d844264a9b9a095b2de9d90e4e"><a name="en-us_topic_0059779367_a48e051d844264a9b9a095b2de9d90e4e"></a><a name="en-us_topic_0059779367_a48e051d844264a9b9a095b2de9d90e4e"></a>List of distributed table node OIDs</p>
</td>
</tr>
<tr id="row6813154610397"><td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.1 "><p id="p18815174663913"><a name="p18815174663913"></a><a name="p18815174663913"></a>options</p>
</td>
<td class="cellrowborder" valign="top" width="17.73%" headers="mcps1.2.4.1.2 "><p id="p18815646123917"><a name="p18815646123917"></a><a name="p18815646123917"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.4%" headers="mcps1.2.4.1.3 "><p id="p18815046193917"><a name="p18815046193917"></a><a name="p18815046193917"></a>Extension status information. This is a reserved column in the system.</p>
</td>
</tr>
</tbody>
</table>

