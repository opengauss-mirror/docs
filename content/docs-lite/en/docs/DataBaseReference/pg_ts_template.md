# PG\_TS\_TEMPLATE<a name="EN-US_TOPIC_0289900632"></a>

**PG\_TS\_TEMPLATE**  contains entries defining text search templates. A template provides a framework for text search dictionaries. Since a template must be implemented by C-language-level functions, templates can be created only by database administrators.

**Table  1**  PG\_TS\_TEMPLATE columns

<a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_t0bd1d6a1bf6449d1bc9fd14b6b748e53"></a>
<table><thead align="left"><tr id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_rb3d06bb9fb354bd4ba6bd922b2309cbf"><th class="cellrowborder" valign="top" width="21.05%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a63a9f3952da642d696c90f617bf04cb8"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a63a9f3952da642d696c90f617bf04cb8"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a63a9f3952da642d696c90f617bf04cb8"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="11.09%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_ad23ee962a1f34210a540ddb3880daeb1"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_ad23ee962a1f34210a540ddb3880daeb1"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_ad23ee962a1f34210a540ddb3880daeb1"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="28.01%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a5d684c3996dd49199738650835b9e1d0"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a5d684c3996dd49199738650835b9e1d0"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a5d684c3996dd49199738650835b9e1d0"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="39.85%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a8ffb5df8a3e74097a9a82eb1e8b3ead9"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a8ffb5df8a3e74097a9a82eb1e8b3ead9"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a8ffb5df8a3e74097a9a82eb1e8b3ead9"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_r5bee00ab6b28463799354f3ab6b599bc"><td class="cellrowborder" valign="top" width="21.05%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_aa6599e280b1545f090a0fabd2ff437fc"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_aa6599e280b1545f090a0fabd2ff437fc"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_aa6599e280b1545f090a0fabd2ff437fc"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="11.09%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a19f92bd4135444c089d71467bf3ab28b"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a19f92bd4135444c089d71467bf3ab28b"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a19f92bd4135444c089d71467bf3ab28b"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a105b0b1ac9f1433bbe69bab373d28480"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a105b0b1ac9f1433bbe69bab373d28480"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a105b0b1ac9f1433bbe69bab373d28480"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="39.85%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a1c7c16db67e84e79bf23f57b39ea1bb8"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a1c7c16db67e84e79bf23f57b39ea1bb8"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a1c7c16db67e84e79bf23f57b39ea1bb8"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_r6d7544492f1a4ef8826e43bf7dbcdeb4"><td class="cellrowborder" valign="top" width="21.05%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_add9f03b81fb548a0b5adfe19d055dd86"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_add9f03b81fb548a0b5adfe19d055dd86"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_add9f03b81fb548a0b5adfe19d055dd86"></a>tmplname</p>
</td>
<td class="cellrowborder" valign="top" width="11.09%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_ab0b4da877afb4de59a650cb98df39c23"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_ab0b4da877afb4de59a650cb98df39c23"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_ab0b4da877afb4de59a650cb98df39c23"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a7157d8849340447a949f7fdf263a418e"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a7157d8849340447a949f7fdf263a418e"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a7157d8849340447a949f7fdf263a418e"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="39.85%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a81d5463e6bb644c09459cb764b8575b0"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a81d5463e6bb644c09459cb764b8575b0"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a81d5463e6bb644c09459cb764b8575b0"></a>Text search template name</p>
</td>
</tr>
<tr id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_rc2ded3066ec94b398b03e597a40712bb"><td class="cellrowborder" valign="top" width="21.05%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a7e920132a7fd4d55bb50b39697e1ebd1"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a7e920132a7fd4d55bb50b39697e1ebd1"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a7e920132a7fd4d55bb50b39697e1ebd1"></a>tmplnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="11.09%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a8cc92b24edca4c689b951a57c5456660"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a8cc92b24edca4c689b951a57c5456660"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a8cc92b24edca4c689b951a57c5456660"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a95dcf17152134d739b1bd9e9846e619a"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a95dcf17152134d739b1bd9e9846e619a"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a95dcf17152134d739b1bd9e9846e619a"></a><a href="pg_namespace.md">PG_NAMESPACE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="39.85%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a3a989c8f54a7453dac349da0a8acc094"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a3a989c8f54a7453dac349da0a8acc094"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a3a989c8f54a7453dac349da0a8acc094"></a>OID of the namespace that contains the template</p>
</td>
</tr>
<tr id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_r34e95fa17c8e4b2a96f15d5829882681"><td class="cellrowborder" valign="top" width="21.05%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_aac8e350958df4c53a975aa6c4aa885b3"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_aac8e350958df4c53a975aa6c4aa885b3"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_aac8e350958df4c53a975aa6c4aa885b3"></a>tmplinit</p>
</td>
<td class="cellrowborder" valign="top" width="11.09%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a112a784b3b664eeea6630faa29837bb5"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a112a784b3b664eeea6630faa29837bb5"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a112a784b3b664eeea6630faa29837bb5"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a028841cfca124566bb2418112fc11fad"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a028841cfca124566bb2418112fc11fad"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a028841cfca124566bb2418112fc11fad"></a><a href="pg_proc.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="39.85%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a770170f3d7964a81abe569dee85b498b"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a770170f3d7964a81abe569dee85b498b"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a770170f3d7964a81abe569dee85b498b"></a>Name of the template's initialization function</p>
</td>
</tr>
<tr id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_r18fdb5cdc2534720b2c7d827b944b8f0"><td class="cellrowborder" valign="top" width="21.05%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a50b26211d17349acbf12046acad19b51"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a50b26211d17349acbf12046acad19b51"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a50b26211d17349acbf12046acad19b51"></a>tmpllexize</p>
</td>
<td class="cellrowborder" valign="top" width="11.09%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a78f739058ba44eb295fd7024ca86f2bc"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a78f739058ba44eb295fd7024ca86f2bc"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a78f739058ba44eb295fd7024ca86f2bc"></a>regproc</p>
</td>
<td class="cellrowborder" valign="top" width="28.01%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a842ca8d82c8744a0af68dd837d38435a"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a842ca8d82c8744a0af68dd837d38435a"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a842ca8d82c8744a0af68dd837d38435a"></a><a href="pg_proc.md">PG_PROC</a>.proname</p>
</td>
<td class="cellrowborder" valign="top" width="39.85%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a7c4bc4d4e02a415e8c7afa2d68522da1"><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a7c4bc4d4e02a415e8c7afa2d68522da1"></a><a name="en-us_topic_0283137243_en-us_topic_0237122326_en-us_topic_0059778577_a7c4bc4d4e02a415e8c7afa2d68522da1"></a>Name of the template's lexize function</p>
</td>
</tr>
</tbody>
</table>

