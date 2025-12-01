# Overview<a name="EN-US_TOPIC_0245374633"></a>

To process SQL statements, the stored procedure process assigns a memory segment to store context association. Cursors are handles or pointers pointing to context regions. With cursors, stored procedures can control alterations in context regions.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>If JDBC is used to call a stored procedure whose returned value is a cursor, the returned cursor cannot be used.  

Cursors are classified into explicit cursors and implicit cursors.  [Table 1](#en-us_topic_0237122243_en-us_topic_0059778312_t0961a7f2a418407cbc7ebba3ba58c03d)  shows the usage conditions of explicit and implicit cursors for different SQL statements.

**Table  1**  Cursor usage conditions

<a name="en-us_topic_0237122243_en-us_topic_0059778312_t0961a7f2a418407cbc7ebba3ba58c03d"></a>
<table><thead align="left"><tr id="en-us_topic_0237122243_en-us_topic_0059778312_r38b9839431544f31932eb3f18d5280a1"><th class="cellrowborder" valign="top" width="49.81%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237122243_en-us_topic_0059778312_a7b012325029f4043bd72ebf454971fa2"><a name="en-us_topic_0237122243_en-us_topic_0059778312_a7b012325029f4043bd72ebf454971fa2"></a><a name="en-us_topic_0237122243_en-us_topic_0059778312_a7b012325029f4043bd72ebf454971fa2"></a>SQL Statement</p>
</th>
<th class="cellrowborder" valign="top" width="50.19%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237122243_en-us_topic_0059778312_ad9627eb614704cba85bfde77653f4161"><a name="en-us_topic_0237122243_en-us_topic_0059778312_ad9627eb614704cba85bfde77653f4161"></a><a name="en-us_topic_0237122243_en-us_topic_0059778312_ad9627eb614704cba85bfde77653f4161"></a>Cursor</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122243_en-us_topic_0059778312_r64d98690690b40cea05b00e9b54163ff"><td class="cellrowborder" valign="top" width="49.81%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237122243_en-us_topic_0059778312_a8bdb3829569d43eea027684a7c8a015b"><a name="en-us_topic_0237122243_en-us_topic_0059778312_a8bdb3829569d43eea027684a7c8a015b"></a><a name="en-us_topic_0237122243_en-us_topic_0059778312_a8bdb3829569d43eea027684a7c8a015b"></a>Non-query statements</p>
</td>
<td class="cellrowborder" valign="top" width="50.19%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237122243_en-us_topic_0059778312_afb7e0b53f3ba43dda2f8a0bc7ece5dde"><a name="en-us_topic_0237122243_en-us_topic_0059778312_afb7e0b53f3ba43dda2f8a0bc7ece5dde"></a><a name="en-us_topic_0237122243_en-us_topic_0059778312_afb7e0b53f3ba43dda2f8a0bc7ece5dde"></a>Implicit</p>
</td>
</tr>
<tr id="en-us_topic_0237122243_en-us_topic_0059778312_r5432f87406564122aed8db6f5edb7c50"><td class="cellrowborder" valign="top" width="49.81%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237122243_en-us_topic_0059778312_afd31ddc329c24b2f8fbd7d81c2fd0298"><a name="en-us_topic_0237122243_en-us_topic_0059778312_afd31ddc329c24b2f8fbd7d81c2fd0298"></a><a name="en-us_topic_0237122243_en-us_topic_0059778312_afd31ddc329c24b2f8fbd7d81c2fd0298"></a>Query statements with single-line results</p>
</td>
<td class="cellrowborder" valign="top" width="50.19%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237122243_en-us_topic_0059778312_aae912e139dd94d9eb92502722b773bd3"><a name="en-us_topic_0237122243_en-us_topic_0059778312_aae912e139dd94d9eb92502722b773bd3"></a><a name="en-us_topic_0237122243_en-us_topic_0059778312_aae912e139dd94d9eb92502722b773bd3"></a>Implicit or explicit</p>
</td>
</tr>
<tr id="en-us_topic_0237122243_en-us_topic_0059778312_r4f9182b01c944d2b9015629b07544571"><td class="cellrowborder" valign="top" width="49.81%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237122243_en-us_topic_0059778312_a4a96ca5d497348e7a88133b31b33a61a"><a name="en-us_topic_0237122243_en-us_topic_0059778312_a4a96ca5d497348e7a88133b31b33a61a"></a><a name="en-us_topic_0237122243_en-us_topic_0059778312_a4a96ca5d497348e7a88133b31b33a61a"></a>Query statements with multi-line results</p>
</td>
<td class="cellrowborder" valign="top" width="50.19%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237122243_en-us_topic_0059778312_aa5dc89403caf4db89fe1c789f4c604d8"><a name="en-us_topic_0237122243_en-us_topic_0059778312_aa5dc89403caf4db89fe1c789f4c604d8"></a><a name="en-us_topic_0237122243_en-us_topic_0059778312_aa5dc89403caf4db89fe1c789f4c604d8"></a>Explicit</p>
</td>
</tr>
</tbody>
</table>

