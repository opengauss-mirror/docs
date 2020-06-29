# Log Overview<a name="EN-US_TOPIC_0242215139"></a>

During database running, a large number of logs are generated, including write-ahead logs \(WALs, also called Xlogs\) for ensuring database security and reliability and run logs and operation logs for daily database maintenance. If the database is faulty, you can refer to these logs to locate the fault and restore the database.

## Log Type<a name="en-us_topic_0237088896_en-us_topic_0059777815_s3c6f93ddf4fb4b7f89b5a32878371605"></a>

The following table describes details about log types.

**Table  1**  Log types

<a name="en-us_topic_0237088896_en-us_topic_0059777815_t9de5b3305fcf42359d23d4787f928a91"></a>
<table><thead align="left"><tr id="en-us_topic_0237088896_en-us_topic_0059777815_r1fd5f6d21ad341329ea3199cc593cd11"><th class="cellrowborder" valign="top" width="15.72%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237088896_en-us_topic_0059777815_a0db843c2533540d8a3c73c83deb02771"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a0db843c2533540d8a3c73c83deb02771"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a0db843c2533540d8a3c73c83deb02771"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="84.28%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237088896_en-us_topic_0059777815_a9f695972431d4fc99aa7ac090c5f37a7"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a9f695972431d4fc99aa7ac090c5f37a7"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a9f695972431d4fc99aa7ac090c5f37a7"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088896_en-us_topic_0059777815_rca47499877d54688a6d3723bc521e570"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_a35b28748f396409bbbbc1d263e08f01c"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a35b28748f396409bbbbc1d263e08f01c"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a35b28748f396409bbbbc1d263e08f01c"></a>System log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_a8e068a714cb8407ba8f907d582a5953d"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a8e068a714cb8407ba8f907d582a5953d"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a8e068a714cb8407ba8f907d582a5953d"></a>Logs generated during database running. They are used to record abnormal process information.</p>
</td>
</tr>
<tr id="en-us_topic_0237088896_en-us_topic_0059777815_r903cc73d08c74c72be5fd27832ad6e64"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_a8458216417a94955afecc47fcc191459"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a8458216417a94955afecc47fcc191459"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a8458216417a94955afecc47fcc191459"></a>Operation log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_a7f4fbd3eb39447b888cf83e66caea581"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a7f4fbd3eb39447b888cf83e66caea581"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a7f4fbd3eb39447b888cf83e66caea581"></a>Logs generated when a client tool (such as <strong id="en-us_topic_0237088896_b1647624612321"><a name="en-us_topic_0237088896_b1647624612321"></a><a name="en-us_topic_0237088896_b1647624612321"></a>gs_guc</strong>) is operating databases.</p>
</td>
</tr>
<tr id="en-us_topic_0237088896_en-us_topic_0059777815_rc6631cbc6c524e09b77f5b0507ae370f"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_ae0034e379eb04717a82feb6fc10e0505"><a name="en-us_topic_0237088896_en-us_topic_0059777815_ae0034e379eb04717a82feb6fc10e0505"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_ae0034e379eb04717a82feb6fc10e0505"></a>Trace log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_a56a940a16c9f486d83ce434d882f3ee9"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a56a940a16c9f486d83ce434d882f3ee9"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a56a940a16c9f486d83ce434d882f3ee9"></a>Logs generated after the database debug switch is enabled. They are used to analyze database exceptions.</p>
</td>
</tr>
<tr id="en-us_topic_0237088896_en-us_topic_0059777815_rb7fbdaf07a2a4575a1ba0aa9e2bf9555"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_a16c123e4be7e4d61afb620d82e33248f"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a16c123e4be7e4d61afb620d82e33248f"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a16c123e4be7e4d61afb620d82e33248f"></a>Black box log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_a584fae1478064562a16c5d2d46b4f8e2"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a584fae1478064562a16c5d2d46b4f8e2"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a584fae1478064562a16c5d2d46b4f8e2"></a>Logs generated when the database system breaks down. You can analyze the process context when the fault occurs based on the heap and stack information in the logs to facilitate fault locating. A black box dumps stack, heap, and register information about processes and threads when a system breaks down.</p>
</td>
</tr>
<tr id="en-us_topic_0237088896_en-us_topic_0059777815_r01e37dd994b04eb69c8aab2f4c97f9de"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_acc3aea18120f4b29b48e797322135506"><a name="en-us_topic_0237088896_en-us_topic_0059777815_acc3aea18120f4b29b48e797322135506"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_acc3aea18120f4b29b48e797322135506"></a>Audit log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_a7d2bc5dd6f7f48d79c64171b9212e38d"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a7d2bc5dd6f7f48d79c64171b9212e38d"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a7d2bc5dd6f7f48d79c64171b9212e38d"></a>Logs used to record some of the database user operations after the database audit function is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0237088896_en-us_topic_0059777815_rbf07b66e42bf40e6acb61b93a225dcc4"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_a3b2a2a4b4d2f42b2a20cc6fa74a500b9"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a3b2a2a4b4d2f42b2a20cc6fa74a500b9"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a3b2a2a4b4d2f42b2a20cc6fa74a500b9"></a>WAL</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088896_en-us_topic_0059777815_a0ec847afe4af425fb87256367389fc4a"><a name="en-us_topic_0237088896_en-us_topic_0059777815_a0ec847afe4af425fb87256367389fc4a"></a><a name="en-us_topic_0237088896_en-us_topic_0059777815_a0ec847afe4af425fb87256367389fc4a"></a>Logs used to restore a damaged database. They are also called redo logs. You are advised to routinely back up WALs.</p>
</td>
</tr>
<tr id="en-us_topic_0237088896_row662551312317"><td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237088896_p262631313239"><a name="en-us_topic_0237088896_p262631313239"></a><a name="en-us_topic_0237088896_p262631313239"></a>Performance log</p>
</td>
<td class="cellrowborder" valign="top" width="84.28%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237088896_p176261113142310"><a name="en-us_topic_0237088896_p176261113142310"></a><a name="en-us_topic_0237088896_p176261113142310"></a>Logs used to record the status of physical resources and the performance of access to external resources (such as disks, OBS and Hadoop clusters).</p>
</td>
</tr>
</tbody>
</table>

