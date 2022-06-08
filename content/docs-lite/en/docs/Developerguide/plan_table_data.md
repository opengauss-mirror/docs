# PLAN\_TABLE\_DATA<a name="EN-US_TOPIC_0289900483"></a>

**PLAN\_TABLE\_DATA**  stores plan information collected by  **EXPLAIN PLAN**. Different from the  **PLAN\_TABLE**  view, the system catalog  **PLAN\_TABLE\_DATA**  stores  **EXPLAIN PLAN**  information collected by all sessions and users.

**Table  1**  PLAN\_TABLE\_DATA columns

<a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_t749b1c370b1e4c81a41d5c7966458cb2"></a>
<table><thead align="left"><tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_r3f04445cda964e2aa689b8050dc33b95"><th class="cellrowborder" valign="top" width="17.62176217621762%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a9fa986027c4d4b52959cc20d3d659b64"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a9fa986027c4d4b52959cc20d3d659b64"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a9fa986027c4d4b52959cc20d3d659b64"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.32173217321732%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a66e3551d1ca3439996075c0c819cf4d5"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a66e3551d1ca3439996075c0c819cf4d5"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a66e3551d1ca3439996075c0c819cf4d5"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="65.05650565056506%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_acb3888cb80e34b90838ca9997ad5ed3f"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_acb3888cb80e34b90838ca9997ad5ed3f"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_acb3888cb80e34b90838ca9997ad5ed3f"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_ra2e6f27710074b6898fcbe281ce85455"><td class="cellrowborder" valign="top" width="17.62176217621762%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p1029934418416"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p1029934418416"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p1029934418416"></a>session_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.32173217321732%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p929616441417"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p929616441417"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p929616441417"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.05650565056506%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p131161339171115"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p131161339171115"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p131161339171115"></a>Session that inserts the data. Its value consists of a service thread start timestamp and a service thread ID. Values are constrained by <strong id="b1151217174919"><a name="b1151217174919"></a><a name="b1151217174919"></a>NOT NULL</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_rc36abac79c1b4efebbdf9c56c04326a9"><td class="cellrowborder" valign="top" width="17.62176217621762%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p5287154419419"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p5287154419419"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p5287154419419"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.32173217321732%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p192806441143"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p192806441143"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p192806441143"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.05650565056506%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_p8441981369"><a name="en-us_topic_0283137727_en-us_topic_0237122335_p8441981369"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_p8441981369"></a>User who inserts the data. Values are constrained by <strong id="b2280191916499"><a name="b2280191916499"></a><a name="b2280191916499"></a>NOT NULL</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_rbd63bb1c1d7e472a9a21a92687340407"><td class="cellrowborder" valign="top" width="17.62176217621762%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_afe83cc327ee0475fabec1673bda65595"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_afe83cc327ee0475fabec1673bda65595"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_afe83cc327ee0475fabec1673bda65595"></a>statement_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.32173217321732%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_ad3c3498d91c147cbae52e1f8c2e604bc"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_ad3c3498d91c147cbae52e1f8c2e604bc"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_ad3c3498d91c147cbae52e1f8c2e604bc"></a>varchar2(30)</p>
</td>
<td class="cellrowborder" valign="top" width="65.05650565056506%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a32415b1f05f9415cafd5f32ef3e6d299"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a32415b1f05f9415cafd5f32ef3e6d299"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a32415b1f05f9415cafd5f32ef3e6d299"></a>Query tag specified by a user</p>
</td>
</tr>
<tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_r2d5cced298194ebba8ae1d4072fd42cb"><td class="cellrowborder" valign="top" width="17.62176217621762%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_ac6af0b524e5a4e058a27cc1a6a7abfec"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_ac6af0b524e5a4e058a27cc1a6a7abfec"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_ac6af0b524e5a4e058a27cc1a6a7abfec"></a>plan_id</p>
</td>
<td class="cellrowborder" valign="top" width="17.32173217321732%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a478948b974a54260ac7f2e7929861b45"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a478948b974a54260ac7f2e7929861b45"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a478948b974a54260ac7f2e7929861b45"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.05650565056506%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a8386817f56444b72973a8b7412ec087e"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a8386817f56444b72973a8b7412ec087e"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a8386817f56444b72973a8b7412ec087e"></a>Query ID The ID is automatically generated in the plan generation phase and is used by kernel engineers for debugging.</p>
</td>
</tr>
<tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_row623118217128"><td class="cellrowborder" valign="top" width="17.62176217621762%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a3b4ce9d7ce9a453ab7c7f7d066c98841"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a3b4ce9d7ce9a453ab7c7f7d066c98841"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a3b4ce9d7ce9a453ab7c7f7d066c98841"></a>id</p>
</td>
<td class="cellrowborder" valign="top" width="17.32173217321732%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a8c297e6d26174c2dbf37213f151b0643"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a8c297e6d26174c2dbf37213f151b0643"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a8c297e6d26174c2dbf37213f151b0643"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="65.05650565056506%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a9b99cdd724714bb4840767ac6fcaa2e9"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a9b99cdd724714bb4840767ac6fcaa2e9"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a9b99cdd724714bb4840767ac6fcaa2e9"></a>Node ID in a plan</p>
</td>
</tr>
<tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_row72293251210"><td class="cellrowborder" valign="top" width="17.62176217621762%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_aad0b17d6ed2a4d4f980593e1e1db1c1c"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_aad0b17d6ed2a4d4f980593e1e1db1c1c"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_aad0b17d6ed2a4d4f980593e1e1db1c1c"></a>operation</p>
</td>
<td class="cellrowborder" valign="top" width="17.32173217321732%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a929c132f4f9e47bcb7517b0999960b68"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a929c132f4f9e47bcb7517b0999960b68"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_a929c132f4f9e47bcb7517b0999960b68"></a>varchar2(30)</p>
</td>
<td class="cellrowborder" valign="top" width="65.05650565056506%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_ac59071a9a0114d1f927d80e98685d0b6"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_ac59071a9a0114d1f927d80e98685d0b6"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_ac59071a9a0114d1f927d80e98685d0b6"></a>Operation description</p>
</td>
</tr>
<tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_row18228823125"><td class="cellrowborder" valign="top" width="17.62176217621762%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p46189573117"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p46189573117"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p46189573117"></a>options</p>
</td>
<td class="cellrowborder" valign="top" width="17.32173217321732%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p5618105771111"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p5618105771111"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p5618105771111"></a>varchar2(255)</p>
</td>
<td class="cellrowborder" valign="top" width="65.05650565056506%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p176181357151118"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p176181357151118"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p176181357151118"></a>Operation action</p>
</td>
</tr>
<tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_row11226192131210"><td class="cellrowborder" valign="top" width="17.62176217621762%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p561875761112"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p561875761112"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p561875761112"></a>object_name</p>
</td>
<td class="cellrowborder" valign="top" width="17.32173217321732%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p12619185716117"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p12619185716117"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p12619185716117"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.05650565056506%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p361913573118"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p361913573118"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p361913573118"></a>Name of an operated object. It is defined by users.</p>
</td>
</tr>
<tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_row12827103193212"><td class="cellrowborder" valign="top" width="17.62176217621762%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p16619135711113"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p16619135711113"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p16619135711113"></a>object_type</p>
</td>
<td class="cellrowborder" valign="top" width="17.32173217321732%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p648441711132"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p648441711132"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p648441711132"></a>varchar2(30)</p>
</td>
<td class="cellrowborder" valign="top" width="65.05650565056506%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p56197578112"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p56197578112"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p56197578112"></a>Object type</p>
</td>
</tr>
<tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_row888019317416"><td class="cellrowborder" valign="top" width="17.62176217621762%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p176191157171111"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p176191157171111"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p176191157171111"></a>object_owner</p>
</td>
<td class="cellrowborder" valign="top" width="17.32173217321732%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p261955741117"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p261955741117"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p261955741117"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.05650565056506%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p76191957171113"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p76191957171113"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p76191957171113"></a>Schema to which the object belongs. It is defined by users.</p>
</td>
</tr>
<tr id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_row19878103442"><td class="cellrowborder" valign="top" width="17.62176217621762%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p111633243217"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p111633243217"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p111633243217"></a>projection</p>
</td>
<td class="cellrowborder" valign="top" width="17.32173217321732%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p163861239173218"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p163861239173218"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p163861239173218"></a>varchar2(4000)</p>
</td>
<td class="cellrowborder" valign="top" width="65.05650565056506%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p121639223213"><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p121639223213"></a><a name="en-us_topic_0283137727_en-us_topic_0237122335_en-us_topic_0166116567_p121639223213"></a>Returned column information</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   **PLAN\_TABLE\_DATA**  records data of all users and sessions on the current node. Only administrators can access all the data. Common users can view their own data in the  [PLAN\_TABLE](plan_table.md)  view.
>-   Data is automatically inserted into  **PLAN\_TABLE\_DATA**  after  **EXPLAIN PLAN**  is executed. Therefore, do not manually insert data into or update data in  **PLAN\_TABLE\_DATA**. Otherwise, data in  **PLAN\_TABLE\_DATA**  may be disordered. To delete data from  **PLAN\_TABLE\_DATA**, you are advised to use the  [PLAN\_TABLE](plan_table.md)  view.
>-   Information in the  **statement\_id**,  **object\_name**,  **object\_owner**, and  **projection**  columns is stored in letter cases specified by users and information in other columns is stored in uppercase.

